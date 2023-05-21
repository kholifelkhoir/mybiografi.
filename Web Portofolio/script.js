let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('#menu-icon');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('bx-x');
}
const sr = ScrollReveal ({
    distance:'65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveral('hero-text',{delay:200, origin:'top'})
sr.reveral('hero-img',{delay:450, origin:'top'})
sr.reveral('icons',{delay:500, origin:'left'})
sr.reveral('scroll-down',{delay:500, origin:'right'})