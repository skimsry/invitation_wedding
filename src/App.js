import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Welcome2 from './pages/Welcome2';
import Gallery from './pages/Gallery';
import WeddingDate from './pages/WeddingDate';
import Countdown from './pages/Countdown';
import ScanMoney from './pages/ScanMoney';
import WelcomParents from './pages/WelcomeParents';
import BackgroundMusic from "./components/BackgroundMusic";
import WelcomeSpouse from "./pages/WelcomeSpouse";
import Spouse from "./pages/Spouse";
import Video from './pages/Video';
import Map from './pages/Map';
import Contact from './pages/Contact';
import List from './pages/List';
import Thanks from './pages/Thanks';
export default function App() {  
return (   
    <>
      <BackgroundMusic /> 
    <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<Welcome2 />} />
        <Route path="/:code" element={<Welcome />} />        
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/date" element={<WeddingDate />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/scan" element={<ScanMoney />} />
        <Route path="/welcomeparent" element={<WelcomParents />} /> 
        <Route path="/welcomespouse" element={<WelcomeSpouse />} /> 
        <Route path="/spouse" element={<Spouse />} /> 
        <Route path="/qrscan" element={<ScanMoney />} /> 
        <Route path="/prewedding" element={<Video />} /> 
        <Route path="/map" element={<Map />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/list" element={<List />} /> 
        <Route path="/thanks" element={<Thanks />} /> 
    </Routes>  
    </> 
);
}