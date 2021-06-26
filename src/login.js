import React,{useState} from 'react'
import fire from './config'
import 'bootstrap/dist/css/bootstrap.css'
import './login.css';

function Login(user) {

    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');
    const [hasAccount,setHasAccount]=useState(false);
      
    const handleLogin=(e)=>{
        e.preventDefault();  
        fire.auth().signInWithEmailAndPassword(email,password)
        .catch((err)=>{
          alert(err)
        });
    }

    const handleSignup=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email,password)
        .catch((err)=>{
            alert(err); 
        });
      }


    return ( 

     <div className="container-fluid card">
        <div className="row justify-content-center p-5 ">
          <div className="col-3  border border-dark rounded p-4 bg-dark align-self-center ">      
            <div className="form-container">
              <div className="form-group">
                <label className="text-white">Email address :</label>
                <input type="email" className="form-control" required placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>              </div>
              <div className="form-group">
                <label className="text-white" >Password :</label>
                <input type="password" className="form-control" required placeholder="enter password" onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              
              { hasAccount ? (<div>
                              <button type="submit" className="btn btn-primary " onClick= {handleLogin}>Login</button>
                              <p className="text-white text-right mt-5">Don't have an account!<span className="text-success font-weight-bold" onClick={(user)=>{setHasAccount(!hasAccount)}}> Signup </span></p>
                              </div>)
                            :(<div>
                             <button type="submit" className="btn btn-success" onClick= {handleSignup} >Signup</button>
                             <p className=" text-white text-right mt-5" >Already have an account!<span className="text-primary font-weight-bold"onClick={(user)=>{setHasAccount(!hasAccount)}}> SignIn </span></p>
                              </div>)
              }
                               
            </div>
          </div>
        </div>
    </div>   
    )
}

export default Login;
  