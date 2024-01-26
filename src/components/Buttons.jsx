import React from 'react'

function Buttons({btn,onClick, isDarkMode}) {

  return (
    <div  className='btn'>
        <button className={`${isDarkMode ? 'dark-button' : 'light-button'}`} onClick={onClick}>{btn}</button>
    </div>
  )
}

export default Buttons