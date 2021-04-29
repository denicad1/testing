const sections=document.querySelectorAll('.section');
const sect = function(entries,observer) {
    const [entry]=entries;
    entry.classList.remove('hidden');
}
const sectObserver=new IntersectionObserver(sect,{
    root:null,
    threshold:0,
    thresholdMargin:'200px',
});
sections.array.forEach(element => {
    sectObserver.observe(element);
});