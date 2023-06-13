function scrollTo(id) {
    const elem = document.querySelector(id);
    elem.scrollIntoView({ behavior: 'smooth' });
}
