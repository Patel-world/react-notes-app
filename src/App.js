import logo from './logo.svg';
import './App.css';


import React,{useEffect, useState} from 'react';
import Nav from './components/Nav';

import Listing from './components/Listing';
import Paginate from './components/Paginate';
import Category from './components/Category';

function App() {

  //main data array
  let data=[]

  //state hook to update notes
  const [action, setAct]=useState('close')

  //state hook to toggle floating notes model
  const [toggle, setToggle]=useState([0])


  //retreiving data from localstorage
  if (localStorage.getItem("data") != null) {
    data.push(JSON.parse(localStorage.getItem("data")));
    
  
  }
  //If not data in localStorage the first
  //save in localStorage and then retreive
  else{
    localStorage.setItem('data',JSON.stringify(data))
    data.push(JSON.parse(localStorage.getItem("data")));

  }

  //update function containg index token 
  const setAction=(e)=>{setAct(e);setToggle('new')}

  //floating notes model close function
  const close =(e)=>setToggle('close')


  //
  return (
    <div className="App">
      <Nav/>

      {/* Floating button to add note */}
      <div onClick={()=>setToggle(1)} className="add-button"></div>

      {/* Component to control categories, search and pagination */}
      <Category data={data} setAction={setAction} close={close} action={action} toggle={toggle}/>
    </div>
  );
}

export default App;
