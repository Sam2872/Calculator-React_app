import React,{useState, useEffect} from 'react'
import buttons from './Buttons'
import  './Calculator.css'

function Calculator() {

   

   const  [Input, setInput] = useState("")
   const [Error, setError] = useState(false)
   
  
   useEffect(() => {
       switch(Input){
           case undefined:
               setInput("")
               break
            default:
                setInput(Input)
       }
   }, [Input])

   useEffect(() => {
       if(Error){
        setInput("Error")
       }
       else{
           setInput("")
       }
   }, [Error])
   
  
   const handleclick  = (e) =>{
        const val = e.target.value;

        switch(val){
            case "C":
                setInput('')
                break
            case "<=":
                try {
                    var str = Input.toString();
                    console.log(typeof str)
                    setInput(str.slice(0,-1))
                } catch (error) {
                    setInput(true)
                }
                break
            case "=":
                if(Error===false){
                    try {
                        // eslint-disable-next-line
                        setInput(eval(Input))
                    } catch (error) {
                        setError(true)
                    }
                }
                else{
                    setInput('')
                }
                
                break
            default:
                setError(false)
                setInput(prev=>prev+=val)
        }
   }
   

    return (
        <div className="calculator">
            <input  type='text' placeholder="0" value={Input}  readOnly/> 
           {buttons.map(element=>{
               const {id, name, icon, color} = element;
               return(
                   <button className={icon||color? icon||color: ""} onClick={handleclick} value={name||icon} key={id}>
                       {icon?null:name}
                   </button>
               )
           })}
        </div>        
    )
}

export default Calculator

