import React, { useState, useEffect } from 'react';
import './App.css';

function getRandomSize() {
  const maxSize = 800;
  const minSize = 400;
  const width = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
  const height = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
  return `${width}/${height}`;
}

function App() {
 const images = [
    `https://picsum.photos/${getRandomSize()}`,
    `https://picsum.photos/${getRandomSize()}`,
    `https://picsum.photos/${getRandomSize()}`,
    `https://picsum.photos/${getRandomSize()}`,
    `https://picsum.photos/${getRandomSize()}`,
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoading(false); }, 30000); // ローディングの時間3秒
  }, []);

  return (
    <div className="App">
      {loading ? (
	<span class="loader"><span class="loader-inner"></span></span>
      ) : (
        <>
          <header>
            <h2>YUSUKE MORII</h2>
            <nav>
              <ul>
	        <li><a href="#">Biography</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="https://www.instagram.com/lit.morifunism__/" target="_blank">Instagram</a></li>
                <li><a href="https://twitter.com/yusuke_weil?s=21&t=h5_KYnSK2VHmBEclRKeAxg" target="_blank">Twitter</a></li>
              </ul>
            </nav>
          </header>
          <main>
              <div className="photo-grid">
	        {images.map((url) => (
		  <div class="container">
	            <img src={url} alt="" key={url} />
		    <div class="mask">
		      <div class="caption">Write a description of the image here.</div>
		    </div>
		  </div>
                ))}
	      </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
