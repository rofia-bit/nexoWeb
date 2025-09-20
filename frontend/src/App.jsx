import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';

function App() {

  

    return (
      <>

        <Navbar/>

        <BrowserRouter>

          <Routes>
            <Route path='/hero' element={<Hero />}/>
          </Routes>

        </BrowserRouter>
        
      </>
    )

  
}

export default App
