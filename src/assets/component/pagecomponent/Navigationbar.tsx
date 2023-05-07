const Navigationbar = () => {

    return (
        <nav className="navigation">
            <div className="logo">
                <a href="/" className="logo-text">David Out  </a>
            </div>

            <input type="checkbox" name="navigation__checkbox" className="navigation__checkbox" id="navigation__checkbox"> </input>
            <label htmlFor="navigation__checkbox" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
            </label>

            <ul className="navigation__links">
                <li className="navigation__item"> <a href="/" className="navigation__link current-page"> Home </a> </li>
                <li className="navigation__item"> <a href="/projects" className="navigation__link"> Projects </a> </li>
                {/*<li className="navigation__item"> <a href="/pages/roadmap.html" className="navigation__link"> Roadmap </a> </li>*/}
                <li className="navigation__item"> <a href="/contact" className="navigation__link"> Contact </a> </li> 
            </ul>
        </nav>
    );
}

export default Navigationbar;