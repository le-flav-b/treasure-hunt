const btn = document.querySelector('.btn');
const root = document.documentElement;

btn.addEventListener('click', (e) => {
    const el = e.target;
    let x = (e.clientX - el.offsetLeft) / el.offsetWidth;
    let y = (e.clientY - el.offsetTop) / el.offsetHeight;

    root.style.setProperty('--wavecoord-x', x);
    root.style.setProperty('--wavecoord-y', y);
})