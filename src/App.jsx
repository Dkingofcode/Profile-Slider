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
              <h5>80K</h5>
             <p>Followers</p> 
            </div>

            <div>
              <h5>80.3K</h5> 
              <p>Likes</p>
            </div>

            <div>
              <h5>1.4K</h5>
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
