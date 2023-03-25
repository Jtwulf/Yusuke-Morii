import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from 'react-loading';

const links = document.querySelectorAll("header a");

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
    setTimeout(() => { setLoading(false); }, 3000); // ローディングの時間3秒
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
                <li><a href="https://www.instagram.com/yuu.mdat/" target="_blank">Instagram</a></li>
                <li><a href="https://twitter.com/Fkjmusic" target="_blank">Twitter</a></li>
          </ul>
            </nav>
          </header>
          <main>
            <div className="photo-grid">
	      {images.map((url) => (
	        <img src={url} alt="" key={url} />
            ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
