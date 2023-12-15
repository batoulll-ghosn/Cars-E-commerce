import React, {useEffect} from 'react'
import '../styles/carViewer.css'
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCarById} from '../actions/car';
import { useParams } from 'react-router-dom';


const CarViewer = () => {
  const {id} = useParams();
  // const [car, setCar] = useState();
  
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch,id]);
  console.log(cars)
  
  const Model=(props) => {
    const { scene } = useGLTF(cars?.files && cars.files[1] ? cars.files[1] : '');
    return <primitive object={scene} {...props}/>
  }
  return (
    <div>
    <div className='viewer-nav'>
     <a className='N-logo' href="/">DriveEpic</a>
     <button className='viewer-search'>
      Search
     </button>
     </div>
     <div>
     
      <div key={cars._id}>
     <h2 className='viewer-car-price'>{cars.sellingPrice}</h2>

       <div className='viewer-title-3d'  >

     <div className='viewer-title'>
      <h1 className='viewer-car-name-title'>{cars.carName}</h1>
     </div>
     <div className='viewer-3d-viewer'>
      <Canvas dpr={[1,2]} camera={{fov: 45}} style={{"position": "relative"}} shadows>
        
        <PresentationControls speed={3.5}  polar={[-0.1, Math.PI / 4]} >
          <Stage environment={"studio"}>
            <Model  scale={0.01} />
          </Stage>
          
        </PresentationControls>
      </Canvas>
     </div>
     </div>
     </div>
     
     </div>
     
     <div className='viewer-all-infos'>
      <div className='viewer-details'>
      <h3 className='viewer-car-name'>{cars.carName}</h3>
      <p className='viewer-description'>
     {cars.description}
      </p>
      <button className='viewer-add-to-cart'>Add to cart</button>
      </div>
      <div className='viewer-start-stop'>
        start
      </div>
      <div className='viewer-more-details'>
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
