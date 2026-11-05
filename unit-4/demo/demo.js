const anchor = document.getElementById('anchorElement');
const tooltip = document.getElementById('tooltipElement');

function updateTooltipPosition() {
    const anchorRect = anchor.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    // 1. Default calculation (trying to place it on top)
    let top = anchorRect.top - tooltipRect.height - 8;
    let left = anchorRect.left + (anchorRect.width / 2) - (tooltipRect.width / 2);

    // 2. Manual fallback logic if it goes off-screen (the messy part)
    if (top < 0) {
        // Fallback to bottom if top overflows
        top = anchorRect.bottom + 8;
    }

    // Apply calculated coordinates inline
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
}

// Required listeners to prevent it from detaching on scroll/resize
window.addEventListener('scroll', updateTooltipPosition);
window.addEventListener('resize', updateTooltipPosition);
window.addEventListener('load', updateTooltipPosition);