
import './App.css';
import "./Components/New.css"
import Navbar from './Components/Navbar';
import Features from './Components/Features';
import Pages from './Components/Pages';
import Pricing from './Components/Pricing';
import FAQs from './Components/FAQs';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import {BrowserRouter as Main, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Main>
    <Navbar title="MARTEX" aboutText="About"/>
    <Routes>
  
      <Route exact path='/features' element={<Features />} />
      <Route exact path='/pages' element={<Pages />} />
      <Route exact path='/pricing' element={<Pricing />} />
      <Route exact path='/FAQs' element={<FAQs />} />
      <Route exact path='/signin' element={<SignIn />} />
      <Route exact path='/signup' element={<SignUp />} />
      
    </Routes>
    </Main>
    </>
  );
}

export default App;
