import {useEffect} from 'react';

const Navigation = () => {
    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            const nav = document.querySelector(".navigation");
        
            if(nav != null) {
            if(window.scrollY > 50) {
            nav.classList.add("fixed");
            } else {
            nav.classList.remove("fixed");
            }
         }
        });


       const link = document.querySelector(".navigation__link");
       link.addEventListener("click", (event) => {
           link.forEach(currentLink => {
               event.target.classList.remove("current-page");
           });
           event.target.classList.add("current-page");
       });

      });


    return  (<div className="navigation">

        <div className="navigation__logo-box">
            <a href="/"> <img src="./images/Logo.svg" alt="Logo" className="logo" /> </a>
        </div>
    
    <ul className="navigation__list">
        <li className="navigation__item">
            <a href="/" className="navigation__link current-page">Home</a>
        </li>
        <li className="navigation__item">
            <a href="/projects" className="navigation__link">Projects</a>
        </li>
        <li className="navigation__item">
            <a href="/contact" className="navigation__link">Contact</a>
        </li>
    </ul> 

    </div>);
}



export default Navigation;
