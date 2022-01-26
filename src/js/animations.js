
export const setUpAnimations = () => {
    const moveIn = document.querySelectorAll(".moveIn");
    console.log(moveIn);

    const moveInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
    
            if(entry.isIntersecting) {
               moveInObserver.unobserve(entry.target);
            }
        })
    }, 
    {
        threshold: 0.5});
    
    
    
    moveIn.forEach(element => {
        moveInObserver.observe(element);
    });

}
   




