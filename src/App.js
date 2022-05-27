import './App.css';
import WebDesign from './WebDesign/WebDesign';
import NoMatch from './NoMatch';
import Home from "./Home/Home"
import Gallery from "./Gallery/Gallery"
import Services from "./Services/Services"
import Contact from "./Contact/Contact"
import Photos from './Photos/Photos'
import Videos from './Videos/Videos'
import ModalPhotos from './ModalPhotos'
import { Routes, Route} from "react-router-dom";
import { useState } from 'react';


function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  function handleSelectedImg (image) {
    setSelectedImg(image)
    console.log(image)
    console.log('click')
  }
  
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gallery"  element={<Gallery/>}>
                {/* <Route index element={<Photos />}/> */}
                <Route path="/gallery/photos" element={<Photos  onImageClick={handleSelectedImg}  />}>
                   { selectedImg && <Route path='/gallery/photos' element={<ModalPhotos  setSelectedImg={setSelectedImg} selectedImg={selectedImg}/>} />}
                </Route>
                <Route path="/gallery/videos" element={<Videos />}/>
                <Route path="/gallery/webdesign" element={< WebDesign/>}/>
        </Route>
        <Route path="photos" element={<Photos />} />
        <Route path="services" element={<Services />}/>
        <Route path="contact" element={<Contact />}/>
        {/* <Route path="*"   element={<NoMatch/>}/> */}
      </Routes>

      
    </div>
  );
}

export default App;
