const pageNotFound = () => {
   
    const nav = document.querySelector(".navigation");
    if(nav != null) {
        nav.classList.add("fixed");
    }

 return <div className="page-not-found">
        <div className="page-not-found__content">
            <h3>Oops...</h3>
            <h2>404</h2>
            <h4>page not found</h4>
        </div>
        <img src="../images/page-not-found.png" alt="" className="page-not-found__image"/>
    </div>
}

export default pageNotFound;