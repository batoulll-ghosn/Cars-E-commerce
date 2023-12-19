import React, {useEffect, useState, useRef} from 'react'
import '../styles/carViewer.css'
import { Canvas, useLoader } from '@react-three/fiber';
import { Stage, PresentationControls, useGLTF } from '@react-three/drei';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCarById} from '../actions/car';
import { Link, useParams } from 'react-router-dom';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';




const CarViewer = () => {
  const {id} = useParams();
  // const [car, setCar] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch,id]);
  console.log(cars)
  const modelRef = useRef();

 
  const Model=(props) => {
    const { scene } = useGLTF(carModel);
  return <primitive object={scene} {...props}/>
  }

  const handleSound = () => {
    const soundFile = cars.files && cars.files[2];

    if (soundFile) {
      if (!audioRef.current) {
        audioRef.current = new Audio(soundFile);
      }

      const audio = audioRef.current;

      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        audio.play();
      }

      setIsPlaying(!isPlaying);
    }
  }

  let carModel = ''
  let Scale = 0.015;
  switch(cars.carName) {
    case 'BMW-i4':
    carModel = '/bmw_i4.glb';
    Scale = 0.03
    break;
    case 'Nissan GT-R':
    carModel = '/nissan_gt-r (1).glb';
    Scale = 0.03
    break;
    case 'Maserati Levante':
    carModel = '/maserati_levante.glb';
    Scale = 0.014
    break;
    case 'Peugeot 3008':
    carModel = '/peugeot_3008.glb';
    Scale = 0.014
    break;
    case 'Kia Sportage':
    carModel = '/2017_kia_sportage.glb';
    Scale = 0.022
    break;
    case 'Maserati Ghibli':
      carModel = '/maserati_ghibli_hybrid.glb'
      Scale = 0.015
    default:
      carModel = '/maserati_levante.glb';
  }
  if (cars.carName === 'Maserati Levante') {
    let elements = document.getElementsByClassName('viewer-car-name-title')
    elements[0].style.fontSize = '120px';
  }

 

let colorValue = cars.color;
let colorDisplay = document.getElementById('colorDisplay');
if (colorDisplay) {
  colorDisplay.style.backgroundColor = colorValue;
} else {
  console.error('colorDisplay element not found');
}


  

  return (
    <div>
    <div className='viewer-nav'>
      <Link 
      className='viewer-link'
      to='/cars'>
       <span className='viewer-arrow'>&larr;</span>
      </Link>
     <a className='N-logo' href="/">DriveEpic</a>
    
     </div>
     <div>
     
      <div key={cars._id}>
     <h2 className='viewer-car-price' style={{textDecoration:"line-through"}}>${cars.sellingPrice}</h2>
     <h2 className='viewer-car-price'>${((cars.sellingPrice)-(cars.sellingPrice*(cars.discount/100)))}</h2>

       <div className='viewer-title-3d'  >

     <div className='viewer-title'>
      <h1 className='viewer-car-name-title'>{cars.carName}</h1>
     </div>
     <div className='viewer-3d-viewer'>
      <Canvas dpr={[1,2]} camera={{fov: 45}} style={{"position": "relative"}} shadows>
        
        <PresentationControls speed={3.5}  polar={[-0.1, Math.PI / 4]} >
          <Stage environment={"sunset"}>
            <Model   scale={Scale} />
            
          </Stage>
          
        </PresentationControls>
      </Canvas>
     </div>
     </div>
     </div>
     
     </div>
     
     <div className='viewer-all-infos'>
      <div className='viewer-details'>
      <div className='viewer-flex'>
      <h3 className='viewer-car-name'>{cars.carName}</h3>
      <div id="colorDisplay" className='viewer-circle-color'>.</div>
      </div>
      <p className='viewer-description'>
     {cars.description}
      </p>
      <button className='viewer-add-to-cart'>Add to cart</button>
      </div>
      <div>

      <div className='viewer-button-border'>
      <button className={`viewer-start-stop ${isPlaying ? 'pressed' : ''}`}
      onClick={handleSound}>
        {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div>
      </div>
      <div className='viewer-more-details'>
        <h2 className='viewer-more-details-title'>More Details</h2>
        <p className='viewer-description'>
        Company: {cars.company}
        </p>
        <p className='viewer-description'>
        Type: {cars.type}
        </p>
        <p className='viewer-description'>
        Date or release: {cars.DOR}
        </p>
      </div>
     </div>

    

  </div>
  )
}

export default CarViewer
