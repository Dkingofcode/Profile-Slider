import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Topimage from './assets/bg-pattern-top.svg';
import Bottomimage from './assets/bg-pattern-bottom.svg';
import card from './assets/bg-pattern-card.svg';
import person from './assets/image-victor.jpg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='main'>
        <img src={Topimage} alt="top background" className='top-bg' />
        
        <article className='card'>

           
           <div className='top-pattern' />
           <div className='content'>
          <img src={person} alt='picture of a man' className="profile-picture"  />
          <h1>Victor Crest 26</h1>
          <p>London</p>
           </div>

          <footer>
            <div>
              80K
             <p>Followers</p> 
            </div>

            <div>
              80.3K 
              <p>Likes</p>
            </div>

            <div>
              1.4K
            <p>Photos</p>           
            </div>
          </footer>
        </article>
        
       <img src={Bottomimage} alt="bottom background" className='btm-bg' />
      </div>
      
     
      
    </>
  )
}

export default App;
