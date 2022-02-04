import { Route, Routes} from "react-router-dom";
import {useEffect} from 'react';


// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

//Default components
import Navigation from "./components/navigation";
import Footer from "./components/footer";

//Import css and javascript
import './css/App.css';
import {setUpAnimations} from './js/animations';


function App() {
  useEffect(() => {
    setUpAnimations();
  });

  return (
    <div className="">
      <Navigation />
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/projects" excact element={<Projects/>}/>
         <Route path="/contact" excact element={<Contact/>}/> 
         {/* <Route path="/contact" excact element={<Contact/>}/>
          <Route path="/projects/:projectID" element={<Project/>}/> */}
         <Route path="*" element={<PageNotFound/>} />
        </Routes>
       <Footer />
</div>
  );
}




export default App;
