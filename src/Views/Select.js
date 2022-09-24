import React, {useState,useRef,useEffect} from 'react'

const Select = ({defaultValue, location}) => {
    const [isHover, setIsHover] = useState('');
    const [toggle,setToggle] = useState(false)
    const [loc, setLoc]=useState('')
    const [city,setC]=useState(defaultValue)
    var locat=[...location]

    const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if first render
    }

    setToggle(false)
  }, [city]); 

   const handleMouseEnter = (event) => {
    var v=event.target.getAttribute('value')
      setIsHover(v);
   };
   const handleMouseLeave = (event) => {
    var v=event.target.getAttribute('value')
      setIsHover('');
   };

   const filter = ()=>{
    var text = document.querySelector("#New").textContent
    setLoc(text)
    console.log(text)
    locat=location.filter(e=>(e.indexOf(text)!=-1))
    console.log(locat.length,location.length)


   }

   

   const handleToggle = () =>{

    if(toggle){
        setToggle(false)
    }
    else{
        setToggle(true)
    }
   }
   const handleT = () =>{

    if(toggle){
        setToggle(false)
    }
    else{
        setToggle(false)
    }
   }
  const handleChange = (event) => {
    var value=event.target.getAttribute('value')
    setC(value)
    setToggle(false)
    console.log(value);
  };
  return (
    <div>
        <a onClick={handleToggle}><div className='selectt' id={defaultValue.split(" ")[0]}>{city}</div></a><div></div>
          
          <div className="select-h" style={{visibility: toggle?'visible':'collapse'}} onMouseLeave={handleT}>
          {location.filter(e=>(e.toLowerCase().indexOf(loc.toLowerCase())!=-1)).map((option, index) => (
           <div className="value" style={{backgroundColor: isHover==option ? '#7066e8' : '#eae7f9', color: isHover==option ? '#ffff' : '#7066e8'}}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave} value={option} onClick={handleChange} key={index}>
            {option}
          </div>
          ))}
          </div>
    </div>
  )
}

export default Select