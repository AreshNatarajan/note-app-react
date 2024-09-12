// import { useEffect } from "react";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export const Header = ({handleToggle}) => {
  const [isDark,setIsDark] = useState(false)
    const ChangeThemeMode =() =>{
      handleToggle.current.classList.toggle('dark-mode')
      const darkmodeStage = handleToggle.current.classList[1] === 'dark-mode'
      setIsDark(darkmodeStage)
    } 
      //  console.log(isDark);
       
    return ( 
        <>
          <div className="header">
            <h1 style={{color:'tomato'}} >Create Your Notes</h1>
            {
              isDark ? 
                <button onClick={ChangeThemeMode} className="darkmode-change" ><FaSun fill="white"  className="darkmode-icon sun " /></button> :
                <button onClick={ChangeThemeMode} className="darkmode-change" ><FaMoon fill="black" className="darkmode-icon moon" /></button>
            }
          </div>
        </>
     );
}