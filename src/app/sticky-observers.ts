// https://developers.google.com/web/updates/2017/09/sticky-headers

export function stickyObservers(
  container: Element,
) {
  const observer = new IntersectionObserver((records) => {
    for (const record of records) {
      const targetInfo = record.boundingClientRect;
      const stickyTarget = record.target.parentElement!.querySelector('.sticky');
      const rootBoundsInfo = record.rootBounds;

      // Started sticking.
      if (targetInfo.bottom < rootBoundsInfo!.top) {
        fireEvent(true, stickyTarget!);
      }

      // Stopped sticking.
      if (targetInfo.bottom >= rootBoundsInfo!.top &&
          targetInfo.bottom < rootBoundsInfo!.bottom) {
       fireEvent(false, stickyTarget!);
      }
    }
  }, {threshold: [0], root: container});

  // Add the top sentinels to each section and attach an observer.
  const sentinels = addSentinels(container, 'sticky_sentinel--top');
  sentinels.forEach(el => observer.observe(el));
}

/**
 * @param {!Element} container
 * @param {string} className
 */
 function addSentinels(container: Element, className: string): HTMLDivElement[] {
  return Array.from(container.querySelectorAll('.sticky'))
    .map(el => {
      const sentinel = document.createElement('div');
      sentinel.classList.add('sticky_sentinel', className);

      // return el.parentElement?.appendChild(sentinel)!;
      return el.parentElement?.insertBefore(sentinel, el)!;
    });
}

/**
 * Dispatches the `sticky-event` custom event on the target element.
 * @param {boolean} stuck True if `target` is sticky.
 * @param {!Element} target Element to fire the event on.
 */
function fireEvent(stuck: boolean, target: Element) {
  const e = new CustomEvent('sticky-change', {detail: {stuck, target}});
  target.dispatchEvent(e);
}