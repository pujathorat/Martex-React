
import './App.css';
import "./Components/New.css"
import Navbar from './Components/Navbar';
import Features from './Components/Features';
import Pages from './Components/Pages';
import Pricing from './Components/Pricing';
import FAQs from './Components/FAQs';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Error from './Components/Error';
import {BrowserRouter as Main, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Main>
    <Navbar title="MARTEX" aboutText="About"/>
    <Routes>
  
      <Route path='/features' element={<Features />} />
      <Route path='/pages' element={<Pages />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/FAQs' element={<FAQs />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/*' element={<Error />} />
    </Routes>
    </Main>
    </>
  );
}

export default App;
