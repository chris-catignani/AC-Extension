const applyAirCanadaFix = () => {
  const elements = document.querySelectorAll('.mixed-cabin-percentage');
  
  elements.forEach(el => {
    // 1. Force the div itself to be visible
    el.style.setProperty('display', 'block', 'important');

    // 2. Modify the parent's grid layout
    const parent = el.parentElement;
    if (parent) {
      parent.style.setProperty('grid-template-areas', '"cabin" "price" "price-note" "mixed-cabin-percent"', 'important');
    }
  });
};

// Run on initial load
applyAirCanadaFix();

// Use MutationObserver to handle dynamic flight search results
const observer = new MutationObserver((mutations) => {
  applyAirCanadaFix();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});