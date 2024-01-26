import React, {useState} from 'react'
import Buttons from './Buttons'


function Calculator({ isDarkMode, setMode }) {

    const [expr, setexpr] = useState('')


    const handleButtonClick = (value)=>{
        setexpr((prevexpr) => prevexpr + value)
    }

    const handleBackspaceClick = ()=>{
        setexpr((prevExpr) => prevExpr.slice(0, -1));
    }

    const handleEqualeClick = ()=>{
        try{
            setexpr(eval(expr).toString())
        }catch(error){
            setexpr('Error!')
        }
    }
    
  return (

    <div className={`container ${isDarkMode ? 'dark-container' : 'light-container'}`}>
        <div style={{ backgroundColor:  (isDarkMode)?  '#2A2C38': '#ddd'}} className="mode-btn">
            <button style={{color: (isDarkMode)? '#fff' : '#000', backgroundColor:  (isDarkMode)?  '#353D4F': '#ddd'}} onClick={()=>setMode(true)} className="mode-btn">
            <i className="fa-solid  fa-moon"></i>
            </button>

            <button style={{color: (isDarkMode)? '#fff' : '#000',  backgroundColor:  (isDarkMode)?  '#2A2C38': '#fff'}} onClick={()=>setMode(false)} className='mode-btn'>
            <i className="fa-solid  fa-sun"></i>
            </button>
        </div>
        
        

        <input 
        className={isDarkMode ? 'dark-input' : 'light-input'}
        type="text" value={expr} onChange={()=>null}/>

        <div className={`calc ${isDarkMode ? 'dark-calc' : 'light-calc'}`}>
            <Buttons isDarkMode={isDarkMode} onClick={()=> handleBackspaceClick()} btn="<-"/>
            <Buttons isDarkMode={isDarkMode} onClick={()=> setexpr('')} btn="C"/>
            <Buttons isDarkMode={isDarkMode}  onClick={()=>handleButtonClick('/')} btn="/"/>
            <Buttons  isDarkMode={isDarkMode} onClick={()=>handleButtonClick('+')} btn="+"/>

            <Buttons  isDarkMode={isDarkMode} onClick={()=>handleButtonClick('7')} btn="7"/>
            <Buttons isDarkMode={isDarkMode}  onClick={()=>handleButtonClick('8')} btn="8"/>
            <Buttons isDarkMode={isDarkMode}  onClick={()=>handleButtonClick('9')} btn="9"/>
            <Buttons isDarkMode={isDarkMode}  onClick={()=>handleButtonClick('-')} btn="-"/>

            <Buttons isDarkMode={isDarkMode}  onClick={()=>handleButtonClick('4')} btn="4"/>
            <Buttons isDarkMode={isDarkMode}  onClick={()=>handleButtonClick('5')} btn="5"/>
            <Buttons isDarkMode={isDarkMode}  onClick={()=>handleButtonClick('6')} btn="6"/>
            <Buttons isDarkMode={isDarkMode}  onClick={()=>handleButtonClick('*')} btn="x"/>  

            <Buttons  isDarkMode={isDarkMode} onClick={()=>handleButtonClick('1')} btn="1"/>
            <Buttons  isDarkMode={isDarkMode} onClick={()=>handleButtonClick('2')} btn="2"/>
            <Buttons isDarkMode={isDarkMode}  onClick={()=>handleButtonClick('3')} btn="3"/>
            <Buttons isDarkMode={isDarkMode}  color='golden' onClick={()=> handleEqualeClick()}  btn="="/>
            
            <Buttons  isDarkMode={isDarkMode} onClick={()=>handleButtonClick('0')} btn="0"/>
            <Buttons  isDarkMode={isDarkMode} onClick={()=>handleButtonClick('.')} btn="."/>
            
        </div>
    </div>
  )
}

export default Calculator