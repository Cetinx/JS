import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateScreen from './Screens/CreateScreen';
import HomeScreen from './Screens/HomeScreen';

import Header from './components/Header';
import Footer from './components/Footer';
import SingularScreen from './Screens/SingularScreen';
import UpdateScreen from './Screens/UpdateScreen';

function App() {
  return (
    <BrowserRouter>

    <Header/>
    
    <main>
    <Routes>
     
      <Route path="/" element={<HomeScreen />} />
      <Route path="/create" element={<CreateScreen />} />
      <Route path="/memory/:id" element={<SingularScreen />} />
      <Route path="/update/:id" element={<UpdateScreen />} />
    

    </Routes>
    </main>

    <Footer/>

  </BrowserRouter>
  );
}

export default App;
