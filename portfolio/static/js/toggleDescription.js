function toggleDescription(el) {
    const id = el.getAttribute('data-id');
    const descEl = document.getElementById('desc-' + id);
    const isExpanded = el.textContent.trim() === 'Read less';
    const shortText = el.getAttribute('data-short');
    const fullText = el.getAttribute('data-full');

    descEl.innerHTML = isExpanded ? shortText + '...' : fullText.replace(/\n/g, '<br>');
    el.textContent = isExpanded ? 'Read more' : 'Read less';
}
