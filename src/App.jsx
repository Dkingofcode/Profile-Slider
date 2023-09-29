import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <article>
          <img src="profile"  />
          <h1>Victor Crest 26</h1>
          <p>London</p>


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
                      
            </div>
          </footer>
        </article>
        
      </div>
      
     
      
    </>
  )
}

export default App
