export interface BloxConfig {
  url?: string;
  blocks?: string[][];
}

export class Blox {
  private ctx: CanvasRenderingContext2D;
  private delayms = 50;
  private w?: number; // cube width
  private h?: number; // cube height
  private b = 1; // border
  private blocks?: string[][];
  private pad = 8;

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d')!;
  }

  async build(config: BloxConfig): Promise<unknown> {
    await this.clear();

    if (config.blocks) this.blocks = config.blocks;
    else {
      this.blocks = await this.imageToBlocks(config.url!);
    }

    return this.draw();
  }

  private async clear(): Promise<void> {
    // this.ctx.fillStyle = 'rgba(255, 255, 255, .1)';
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private async imageToBlocks(url: string): Promise<string[][]> {
    const img = document.createElement('img') as HTMLImageElement;
    img.src = url;
    await new Promise((resolve) => img.addEventListener('load', resolve));
    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx!.drawImage(img, 0, 0);
    const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height)!;
    const { data, width, height } = imageData;

    const blocks = Array.from(Array(height)).map(() => Array(width));

    for (let i=0; i<data.length; ++i) {
      const {[i]: r, [i+1]: g, [i+2]: b, [i+3]: a} = data;
      const row = ~~((i / 4) / width);
      const col = (i / 4) % width;
      blocks[row][col] = a === 0 ? '' : `rgb(${r}, ${g}, ${b})`;
    }

    return blocks;
  }

  private async draw(): Promise<unknown> {
    const { canvas, delayms, blocks, pad } = this;

    canvas.width = canvas.clientWidth;

    const cols = blocks![0].length;
    const rows = blocks!.length;

    this.w = ~~((canvas.width - 2*pad) / cols);
    this.h = this.w! * 0.65;

    canvas.height = this.h * rows + 2*pad;
    canvas.style.height = `${canvas.height}px`;

    this.ctx.translate(pad, pad);

    const wait = () => new Promise((resolve) => setTimeout(resolve, delayms));
    const xPos = (x: number) => this.w! * x;
    const yPos = (y: number) => (this.h! * rows) - this.h! * y;

    let chain: Promise<unknown> = Promise.resolve();
    for (let y = 0; y < rows; ++y) {
      const row = blocks![rows - 1 - y];
      for (let x = 0; x < cols; ++x) {
        const color = row[x];
        if (!color) continue;
        const skipNext = row[x + 1] === color;
        const offset = skipNext ? 1 : 0;
        const _x = x;
        chain = chain
          .then(() => this.drawBlock(xPos(_x), yPos(y), color, offset))
          .then(wait);
        if (skipNext) ++x;
      }
    }
    return chain;
  }

  private drawBlock(x: number, y: number, color: string, offset = 0) {
    const { w, h, b, ctx } = this;
    const wobbleW = w! / 3.4;
    const wobbleH = wobbleW / 2.2;

    const wobble = (_x: number) => {
      const _y = y - h! - wobbleH;

      ctx.fillStyle = '#333';
      ctx.fillRect(_x - wobbleW / 2, _y, wobbleW, wobbleH);

      ctx.fillStyle = color;
      ctx.fillRect(_x - wobbleW / 2 + b, _y + b, wobbleW - 2 * b, wobbleH + b);
    };

    const oneBlock = (currentOffset: number) => {
      const _x = x + currentOffset * w!;
      const paddingLeft = currentOffset > 0 ? 0 : b/2;
      const paddingRight = currentOffset < offset ? 0 : b/2;

      ctx.fillStyle = color;
      ctx.fillRect(_x + paddingLeft, y - h! + b/2, w! - paddingLeft - paddingRight, h! - b);

      wobble(_x + w! / 4);
      wobble(_x + (w! / 4) * 3);
    };

    const border = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(x - b/2, y - h! - b/2, w! + offset * w! + b, h! + b);
    };

    border();

    for (let i = 0; i <= offset; ++i) {
      oneBlock(i);
    }
  }
}
