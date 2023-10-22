import React from 'react';
import SEO from "./images/SEO.png";
import digital from './images/digital.png';
import market from './images/market research.png';
import man from "./images/man.png";
export default function Features() {
  return (

    <div className='Container ms-5 px-3 py-5' >
      <div className="row">
      <div className='col-lg-6'>
      <h6 className='text-primary-emphasis fw-bolder'>ONE STOP SOLUTION </h6>
     
       <h1><p className="text-Black fw-bolder fs-1 px-2 py-2">Smart solutions,</p> <p className="text-Black fw-bolder fs-1 px-2 py-2"> real-time results</p></h1>
      <ul className='bullets' listStyle='circle'>
        <li><p className='text-primary-emphasis'>Tempor sapien quaerat undo ipsum laoreet purus</p><p className='text-primary-emphasis'>and sapien dolor ociis ultrice ipsum aliquam undo</p><p> congue dolor cursus congue varius magnis</p></li>
        <li><p className='text-primary-emphasis'>Cursus purus suscipit vitae cubilia magnis diam</p> <p className='text-primary-emphasis'>volute egestas sapien ultrice auctor</p></li>
      </ul>
      <button className="border border-secondary px-2 py-2"><a className="link-opacity-75-hover link-underline-light " href="/"> Get started now </a></button>
      </div>< div className='col'>
      
      <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={market}  alt="market research" />
  <div className="card-body">
    <h5 className="card-title text-primary-emphasis fw-bolder">Market Research</h5> 
    <p className="card-text text-primary-emphasis">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  < div className='col'>
  <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={digital}  alt="digital" />
  <div className="card-body">
    <h5 className="card-title text-primary-emphasis fw-bolder">Digital Marketing</h5>
    <p className="card-text text-primary-emphasis">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></div>
    < div className='col'>
    <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={SEO}  alt="SEO" />
  <div className="card-body">
    <h5 className="card-title text-primary-emphasis fw-bolder">SEO Services</h5>
    <p className="card-text text-primary-emphasis">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div></div>
    </div></div>
    <div className="row mt-5">
    <div class="container-fluid bg-White text-primary-emphasis fw-bolder text-center">
<div class="container ms-5 px-3 py-5">
        <div class="row">
            <div class="col-md-6">
                <img src={man} class="w-100" alt="" />
            </div>
            <div class="col-md-6 px-3 py-3">
                <h3>Solution that grows with you</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad laboriosam rerum blanditiis. Voluptatum deserunt odio, consequatur eius nihil veniam ipsum vel commodi dicta id ipsa voluptatibus nam officiis quidem.</p>
                <h3>Connect your data sources</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus modi nostrum saepe ab voluptatum, ipsum necessitatibus deserunt adipisci, unde quisquam voluptas, corporis eos. Quo dolores quod vero veniam hic eos.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus modi nostrum saepe ab voluptatum, ipsum necessitatibus deserunt adipisci, unde quisquam voluptas, corporis eos. Quo dolores quod vero veniam hic eos.</p>
            </div>
        </div>
    </div>
</div>
    </div>
    </div>
    
  )
}
