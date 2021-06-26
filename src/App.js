import React,{useState,useEffect} from 'react';
import Login from './login';
import Home from './home';
import fire from './config'

function App() {

const [user,setUser] = useState(null);
  
useEffect(() => {
  fire.auth().onAuthStateChanged((user)=>{
    if(user){
      setUser(user);
    }else{
      setUser(null);
    }
  })
 
}, []) 

    return (
    <div >
      {user ? (<Home/>):(<Login user={user}/>)} 
    </div>
  );
}


export default App;
          