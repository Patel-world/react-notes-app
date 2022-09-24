import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";


const Create = ({data,toggle,action, close, update}) => {

    //variable for category update in case of edit note
    var abx=toggle=='new'?data[0][action]['category']:'Todo'

    //state hook for date-time
  const [value, onChange] = useState(new Date());
  //state hook for note category
  const [option, setOption] = useState('Todo');
  

 //object for storing hashed data
  let a = {};
  
  //checking if edit mode on
  if(toggle=='new'){
    document.querySelector("#data").value=data[0][action]['note']
    document.querySelector("#check").checked=data[0][action]['important']
  }
  

 
//saving note
  const save = () => {
    if (document.getElementById("data").value != "") {
        a['category']=toggle=='new'?abx:option
      a['note'] = document.getElementById("data").value;
      a["time"] = value;
      a["important"] = document.querySelector("#check").checked;
      //checking if edit mode on
      if(toggle=='new'){
        
        data[0][action]=a
        update(data[0])
        
        localStorage.setItem("data", JSON.stringify(data[0]));
      }

      //or new note creating
      else{

        //condition if important
        if(a['important']===true){
            data[0]=[a,...data[0]]
        }
        else{
            data[0].push(a)
        }
        //update function to update data
        update(data[0])
        localStorage.setItem("data", JSON.stringify(data[0]));
      }
      console.log(data);
      close()
      
    }
    else{
        warning1()
    }
  };
  const warning1 = () => {
    document.getElementById("data").style.borderColor = "red";
  };

  return (
    <div className="notes" style={{ display: toggle == 1||toggle == 'new' ? "grid" : "none" }}>

      <div className="models-c">
      <button type="button" onClick={close} className="btn-close" aria-label="Close"></button>
      <h3>Notes</h3>
      <div className="g333">
        <div
          className="t1 active"
          onClick={() => setOption("Todo")}
          style={{ borderColor: option == "Todo" ? "#d10000" : "#a9d4ff" }}
        >
          TODO
        </div>
        <div
          className="t1"
          onClick={() => setOption("Habit")}
          style={{ borderColor: option == "Habit" ? "#d10000" : "#a9d4ff" }}
        >
          Habit
        </div>
        <div
          className="t1"
          onClick={() => setOption("Event")}
          style={{ borderColor: option == "Event" ? "#d10000" : "#a9d4ff" }}
        >
          Event
        </div>
      </div>
      <h4>{option}</h4>
      <textarea className="form-control" id="data" rows="3"></textarea>
      <h4>Date</h4>
      <DateTimePicker onChange={onChange} value={toggle=='new'?new Date(data[0][action]['time']):value} />
      <h4>Priority</h4>
      <div className="g2">
        <label>Show it on the top of {option} list</label>
        <input id="check" type="checkbox"></input>
      </div>
      <button onClick={save} type="button" className="btn btn-info">
        Save
      </button>
      </div>
      
    </div>
  );
};

export default Create;
