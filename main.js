animateCSSGrid.wrapGrid(document.getElementById("blogGrid"), { duration: 600, stagger: 10 });

let root = document.documentElement;

document.addEventListener("mousemove", e => {
    root.style.setProperty('--mouse-x', (e.clientX * (100 / window.innerWidth) + 250) + "px");
    root.style.setProperty('--mouse-y', (e.clientY * (100 / window.innerHeight) + 250) + "px");
});