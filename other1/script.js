const sections=document.querySelectorAll('.section');
const sect = function(entries,observer) {
    const [entry]=entries;
    console.log(entry);
    if(!entry.isIntersecting)return;
    entry.target.classList.remove('hidden');
    observer.unobserve(entry.target);
}
const sectObserver=new IntersectionObserver(sect,{
    root:null,
    threshold:0,
    
});
sections.forEach(element => {
    sectObserver.observe(element);
});