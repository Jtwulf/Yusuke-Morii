import React, { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Biography from "./Biography";
import Work from "./Work";

function Home() {
  const images = [
    {
      image: "/images/mori_1.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_2.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_3.jpg",
      desc: "Write a description of the image here.",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoading(false); }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {loading ? (
	  <span class="loader"><span class="loader-inner"></span></span>
        ) : (
          <>
            <header>
              <h2>YUSUKE MORII</h2>
              <nav>
                <ul>
	          <li><Link to="/Biography">Biography</Link></li>
                  <li><Link to="/Work">Work</Link></li>
                  <li><a href="https://www.instagram.com/lit.morifunism__/" target="_blank">Instagram</a></li>
                  <li><a href="https://twitter.com/yusuke_weil?s=21&t=h5_KYnSK2VHmBEclRKeAxg" target="_blank">Twitter</a></li>
                </ul>
              </nav>
            </header>
            <main>
	    <Switch>
	      <Route exact path="/">
                <div className="photo-grid">
	          {images.map((images) => (
	  	  <div class="container">
	              <img src={images.image} alt="" key={images.image} />
		      <div class="mask">
		        <div class="caption">Write a description of the image here.</div>
		      </div>
		    </div>
                  ))}
	        </div>
	      </Route>
	      <Route path="/Biography">
	        <Biography />
	      </Route>
	      <Route path="/Work">
	        <Work />
	      </Route>
	    </Switch>
            </main>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default Home;
