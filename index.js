function scrollToItem(id) {
    const elem = document.querySelector(id);
    elem.scrollIntoView({ behavior: 'smooth' });
}
