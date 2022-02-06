const Home = () => {

    return <div>

    <section id="hero-section" className="hero-section">
        <img src="./images/Vector1.png" alt="" className="wave-1" />
        <div className="centered-box">
            <div className="text-box">
                <p className="hero-section__text moveIn top " >Hey there, I am <a href="#about-section">David Out</a></p>
                <p className="hero-section__title moveIn left ">a Fullstack</p>
                <p className="hero-section__title green-title moveIn right ">web developer</p>
            </div>

            <div className="hero-section__button-box moveIn bottom">
                <a href='./Resume.pdf' className="btn btn-1" target='_blank' rel='noopener noreferrer'>resume</a>
                <a href="/contact" className="btn btn-2">contact</a>
            </div>
        </div>
    </section>

    <section id="about-section" className="about-section">
        <h1 className="section-title moveIn bottom">About me</h1>
        <div className="about-section__content">
            <img src="../images/image1.png" alt="about me" className="about-section__image moveIn left" />


            {/* Ik ben een student met een passie voor design en programmeren die beschikbaar voor freelance werk.
            My story:
            Ik begon met het programmeren toen ik ongeveer veertien was, 
            na 3 jaar ervaring te hebben met de taal Java begon ik geïnteresseerd te raken in web development. 
            Na de ‘Web development bootcamp’ London App Brewery gevolgd te hebben heb ik mijn eigen projectjes kunnen maken.
            Na iets meer dan een jaar ervaring te hebben met web development ben ik begonnen met freelancen.  */}

            <p className="about-section__text moveIn right">
            I am a student with a passion for design and programming who is available for freelance work.
                <br></br>
            
                I started programming when I was about fourteen,
                after 3 years of experience with the Java language I started to get interested in web development.
                After following the <strong>'Web development bootcamp' London App Brewery</strong> I was able to make my own projects.
                After a little over a year of experience with web development, I started freelancing.
           </p>
        </div>
    </section>

    <section  id="skills-section" className="skills-section">
        <h1 className="section-title moveIn bottom">My Skills</h1>
        <div className="skills-section__content">
            <div className="card moveIn left">
                <h3 className="card__title">Frontend</h3>
                <div className="card__content">
                    <img src="./images/icons/html-small.png" alt="" className="skill-icon" />
                    <img src="./images/icons/css-small.png" alt="" className="skill-icon" />
                    <img src="./images/icons/javascript-small.png" alt="" className="skill-icon" />
                    <img src="./images/icons/sass-small.png" alt="" className="skill-icon" />
                    <img src="./images/icons/react-small.png" alt="" className="skill-icon" />
                    <img src="./images/icons/bootstrap-small.png" alt="" className="skill-icon" />
                </div>
            </div>

            <div className="card moveIn bottom">
                <h3 className="card__title">Backend</h3>
                <div className="card__content">
                    <img src="./images/icons/express-small.png" alt="" className="skill-icon" />
                    <img src="./images/icons/nodejs-small.png" alt="" className="skill-icon" />
                    <img src="./images/icons/mongodb-small.png" alt="" className="skill-icon" />
                </div>
            </div>

            <div className="card moveIn right">
                <h3 className="card__title">Other</h3>
                <div className="card__content">
                    <img src="./images/icons/figma-small.png" alt="" className="skill-icon" />
                    <img src="./images/icons/java-small.png" alt="" className="skill-icon" />
                </div>
            </div>

        </div>
    </section>

         <section className="cta-section">
        <h2 className="section-title moveIn bottom">Are you interested in working with me?</h2>
        <div className="cta-section__content">
             <img src="./images/image2.png" alt="about me" className="about-section__image moveIn left" />

             <div className="cta-section__buttons moveIn right">
                <a href="/contact" className="btn btn-3">Yes, but how can i contact you?</a>
                <a href="/projects" className="btn btn-4">Not yet, i want to see your projects first.</a>
             </div>
        </div>
         </section>
    </div>;
}


export default Home;