import {useEffect} from 'react';
import {useLocation} from "react-router-dom";

const Navigation = () => {
    const pathname = useLocation().pathname;

    useEffect(() => {
        if(pathname === "/") {
            const nav = document.querySelector(".navigation");
            nav.classList.remove("fixed");
            
            window.addEventListener("scroll", (event) => {
               
            
                if(nav != null) {
                if(window.scrollY > 50) {
                nav.classList.add("fixed");
                } else {
                nav.classList.remove("fixed");
                }
             }
            });
        }
      });
   


    return  (<div className="navigation fixed">
        <div className="navigation__logo-box">
            <a href="/"> <img src="../images/Logo.svg" alt="Logo" className="logo" /> </a>
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
