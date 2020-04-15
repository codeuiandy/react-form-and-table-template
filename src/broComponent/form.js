import React, { Component } from 'react'
import './form.css'

export default class form extends Component {
    render() {
        return (
            <div class="container-center">

                <h1 className="appName">APP NAME</h1>

<form>


  <div class="container">
      <div className="formHeader">
          <h1>LOGIN</h1>
      </div>
   
    <input type="text" placeholder="Enter Email" required/>

   
    <input type="password" placeholder="Enter Password"  required/>
        
    <button type="submit">Login To Your Account</button>
   
  </div>

 
</form>
                
            </div>
        )
    }
}
