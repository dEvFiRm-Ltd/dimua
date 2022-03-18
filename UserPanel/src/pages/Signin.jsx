import React from 'react'
import axios from 'axios'

function SignIn() {
  const loginWithGoogle = async() => {
    // const res = await axios.get(`http://localhost:5000/auth/google`)
    // .catch(err => console.log(err))
    // console.log(res.data)

    const googleLoginURL = `https://devfirm-ecommerce.herokuapp.com/auth/google`;
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );
    const interval = setInterval(() => {
      if (newWindow.closed) {
        clearInterval(interval);
        console.log("new window closed");
      }
    }, 1000);
  }

  const getUser = async () => {
    const res = await axios.get(`https://devfirm-ecommerce.herokuapp.com/auth/isLoggedIn`,{withCredentials: true})
    .catch(err => console.log(err))
    console.log(res.data)

  }
  getUser()



  return (
    <div>
      <center>
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" /><br/>
          <button>Sign In</button>
        </form>
        <button onClick={loginWithGoogle}>login with google</button>
      </center>
    </div>
  )
}

export default SignIn