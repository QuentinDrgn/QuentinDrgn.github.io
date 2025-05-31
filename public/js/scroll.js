// ...existing code...

document.addEventListener('DOMContentLoaded', function () {
  const pinnedSection = document.querySelector('.pinned-section');
  const spacerAfter = document.querySelector('.spacer-after');
  const sectionHeight = pinnedSection.offsetHeight;

  window.addEventListener('scroll', function () {
    const rect = pinnedSection.getBoundingClientRect();
    if (rect.top <= 0 && Math.abs(rect.top) < sectionHeight - window.innerHeight) {
      pinnedSection.style.position = 'fixed';
      pinnedSection.style.top = '0';
      pinnedSection.style.width = '100%';
      spacerAfter.style.display = 'block';
      spacerAfter.style.height = sectionHeight + 'px';
    } else {
      pinnedSection.style.position = '';
      pinnedSection.style.top = '';
      pinnedSection.style.width = '';
      spacerAfter.style.display = '';
      spacerAfter.style.height = '';
    }
  });
});