const Footer = () => {
    return (
            <footer className="footer">
                    <div className="logo">
                        <a href="/" className="logo-text">David Out  </a>
                    </div>

                <div className="footer__wrapper">
                    <div className="footer__contact">
                        <div className="column">
                            <p className="column__title">Contact</p>
                            <ul className="column__list">
                            <li className="column__list__item">
                                <object data="svg/icons/Icon=email.svg" type="" className="icon"></object>
                                <p>davidoutdeveloper@gmail.com</p>
                            </li>
            
                            <li className="column__list__item">
                                <object data="svg/icons/Icon=phone.svg" type="" className="icon"></object>
                                <p>+31 6 19580660</p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="footer__links">
                    <div className="column">
                        <p className="column__title">Pages</p>
                        <ul className="column__list">
                            <li className="column__list__item"><a href="/" className="footer__link current-page"> Home </a> </li>
                            <li className="column__list__item"><a href="/pages/projects.html" className="footer__link "> Projects </a> </li>
                            <li className="column__list__item"><a href="/pages/roadmap.html" className="footer__link "> Roadmap </a> </li>
                            <li className="column__list__item"><a href="/pages/contact.html" className="footer__link "> Contact </a> </li>
                        </ul>
                    </div>

                    <div className="column">
                        <p className="column__title">Socials</p>
                        <ul className="column__list">
                            <li className="column__list__item"><a href="https://www.linkedin.com/in/david-out-924706221/" target="_blank" className="footer__link current-page"> Linkedin </a> </li>
                            <li className="column__list__item"><a href="https://github.com/DavidOut03" target="_blank" className="footer__link "> Github </a> </li>
                            <li className="column__list__item"><a href="https://www.instagram.com/david.out03/" target="_blank" className="footer__link "> Instagram </a> </li>
                            <li className="column__list__item"><a href="https://codepen.io/davidout" target="_blank" className="footer__link "> Codepen </a> </li>
                        </ul>
                    </div>

                </div>
            </div>


            <div className="copyright">
                <a href="/privacy">Privacy Policy</a>
                <p><a href="/">David Out</a> © 2022 All rights reserved</p>
            </div>
        </footer>);
};

export default Footer;