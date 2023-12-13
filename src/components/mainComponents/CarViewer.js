import React from 'react'
import '../styles/carViewer.css'
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model(props) {
  const { scene } = useGLTF("/peugeot_3008.glb");
  return <primitive object={scene} {...props}/>
}

const CarViewer = () => {
    
  return (
    <div>
      <div className='viewer-nav'>
       <a className='N-logo' href="/">DriveEpic</a>
       <button className='viewer-search'>
        Search
       </button>
       </div>
       <h2 className='viewer-car-price'>$45000 </h2>
       <div className='viewer-title-3d'>

       <div className='viewer-title'>
        <h1 className='viewer-car-name-title'>Audi</h1>
       </div>
       <div className='viewer-3d-viewer'>
        <Canvas dpr={[1,2]} camera={{fov: 45}} style={{"position": "relative"}} shadows>
          {/* <color attach="background" args={["#D9D9D9"]} /> */}
          <PresentationControls speed={3.5} global zoom={.5} polar={[-0.1, Math.PI / 4]} >
            <Stage environment={"sunset"}>
              <Model  scale={.4} />
            </Stage>
          </PresentationControls>
        </Canvas>
       </div>
       </div>
       
       <div className='viewer-all-infos'>
        <div className='viewer-details'>
        <h3 className='viewer-car-name'>Audi</h3>
        <p className='viewer-description'>
        Mercedes-Benz: Where luxury meets performance, crafting iconic vehicles that epitomize elegance 
        and cutting-edge innovation.
        </p>
        <button className='viewer-add-to-cart'>Add to cart</button>
        </div>
        <div className='viewer-start-stop'>
          start
        </div>
        <div className='viewer-more-details'>
          <p className='viewer-description'>
          Type: sedan
          </p>
          <p className='viewer-description'>
          Type: sedan
          </p>
          <p className='viewer-description'>
          Type: sedan
          </p>
        </div>
       </div>

      

    </div>
  )
}

export default CarViewer
