import React from 'react'
import signin from './images/signin.png'
export default function SignIn() {
  return (
    <div className="row mt-4 ">
    <div class="container-fluid bg-White text-primary-emphasis fw-bolder text-start border border-success-subtle">
<div class="container ms-5 px-3 py-5">
        <div class="row">
            <div class="col-md-6">
               
               
                <img src={signin} class="w-100" alt="" />
            </div>

<div class="col-md-6 px-3 py-3">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
    <p>Forgot your password?</p>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div> </div></div></div></div>
  )
}
