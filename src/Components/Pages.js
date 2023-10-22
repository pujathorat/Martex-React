import React from 'react';
import main from './images/main.png';
import mob from './images/mob.png';
import menus from './images/menus.png';
import graph from './images/graph.png';
import rate from './images/rate.png';

export default function Pages() {
  return (
      <div className="row mt-4">
    <div class="container-fluid bg-White fw-bolder text-center">
<div class="container ms-5 px-3 py-5">
        <div class="row">
            <div class="col-md-6 ms-6">
               
                <img src={main} class="w-100 " alt="" />
            </div>
            <div class="col-md-6 px-3 py-3">
                <h1 className='text-start fw-bolder  mt-1'><p>Realize your </p> <p> digital potential with</p>Martex</h1>
                <p className='text-primary-emphasis'>Tempor sapien sodales quaerat ipsum congue ipsum laoreet turpis neque auctor turpis a vitae dolor luctus placerat magna and ligula cursus purus ipsum.Tempor sapien sodales quaerat ipsum congue ipsum laoreet turpis neque auctor turpis a vitae dolor luctus placerat magna and ligula cursus purus ipsum</p>
                <div className="container text-center">
        < div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <p><h2 className='text-start fw-bolder'>2x</h2>
     Tempor sapien and quaerat placerat</p>
    </div>
    <div class="col">
    <p><h2 className='text-start fw-bolder '>63%</h2>
    Tempor sapien and quaerat placerat</p>
</div>
                </div>
            </div>
        </div>
    </div>
    </div></div></div>
    <div class="container p-4">
        <h1 class="text-center fw-bolder py-4">Build a customer-centric marketing strategy</h1>
        <div class="row">
            <div class="col text-center ms-3">
                <img src={mob} class="w-33" alt="" />
                <h4>Cross-Platform</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p>Alias labore libero consequuntur laborum doloribus.</p>
                <a href="/" class="btn btn-primary">Check Out</a>
            </div>
            <div class="col text-center ms-3">
                <img src={menus} class="w-33" alt="" /> 
                <h4>Service 2</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p>Alias labore libero consequuntur laborum doloribus.</p>
                <a href="/" class="btn btn-primary">Check Out</a>
            </div>
            <div class="col text-center ms-3">
                <img src={graph} class="w-33" alt="" />
                <h4>Service 3</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                   <p> Alias labore libero consequuntur laborum doloribus.</p>
                <a href="/" class="btn btn-primary">Check Out</a>
            </div>
            
        </div>
    </div>
    
    <div className="row mt-4">
    <div class="container-fluid bg-White text-primary-emphasis fw-bolder text-start">
<div class="container ms-5 px-3 py-5">
        <div class="row">
            <div class="col-md-6">
               
                <img src={rate} class="w-100" alt="" />
            </div>
            <div class="col-md-6 px-3 py-3">
               <h6>DATA INTEGRATION</h6>

                <h1 className='text-start fw-bolder  mt-1'><p>Create a workflow that  </p> <p> works for you</p>Martex   </h1>
                <p> <h6 className='text-primary-emphasis'>Tempor sapien sodales quaerat ipsum congue ipsum laoreet turpis neque auctor turpis a vitae dolor luctus placerat magna and ligula cursus purus ipsum.Tempor sapien sodales quaerat ipsum congue ipsum laoreet turpis neque auctor turpis a vitae dolor luctus placerat magna and ligula cursus purus ipsum</h6></p>
                <h4>Enhance your personality</h4>
                <div class="form-check-label">
                <input class="form-check-input mt-4" type="checkbox" value="" id="flexCheckChecked" checked />
               <label class="form-check-label py-3" for="flexCheckChecked">
               Magna dolor luctus at egestas sapien</label>

              <p> <input class="form-check-input " type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis</label></p>

  <p><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">Volute turpis dolores and sagittis congue </label></p>

    </div></div></div></div></div></div></div>
  )
}
