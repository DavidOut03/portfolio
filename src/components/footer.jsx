function Footer() {

    return (<footer className="footer">
    <div className="footer__content">
        <ul className="footer__list">
            <li className="footer__list__item"><a href="/">Home</a></li>
            <li className="footer__list__item"><a href="/contact">Contact</a></li>
            <li className="footer__list__item"><a href="/projects">Projects</a></li>
        </ul>

        <div className="footer__logo-box">
            <a href="/"> <img src="./images/Logo.svg" alt="Logo" className="footer__logo" /> </a>
        </div>

        <ul className="footer__list">
            <li className="footer__list__item">
                <a href="https://www.linkedin.com/in/david-out-924706221/">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </li>

            <li className="footer__list__item">
                <a href="https://github.com/DavidOut03">
                    <i className="fab fa-github"></i>
                </a>
            </li>

            <li className="footer__list__item">
                <a href="https://codepen.io/davidout">
                    <i className="fab fa-codepen"></i>
                </a>
            </li>
           
        </ul>
    </div>

    <p className="copyright-text">
        Designed and developed with ❤ by David Out. © 2022 All rights reserved
    </p>
    </footer>);
}

export default Footer;