import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import buttons from './Buttons'

function Calculator() {

   

   const  [Input, setInput] = useState("")
  
   useEffect(() => {
        if(Input===undefined){
            setInput("")
        }
   }, [Input])

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
                    setInput("Error")
                }
                break
            case "=":
                try {
                    // eslint-disable-next-line
                    setInput(eval(Input))
                } catch (error) {
                    setInput("Error - Invalid Operation")
                }
                break
            default:
                setInput(prev=>prev+=val)
        }
   }
   

    return (
        <Wrapper>
            <input  type='text' placeholder="0" value={Input}  readOnly/> 
           {buttons.map(element=>{
               const {id, name, icon, color} = element;
               return(
                   <button className={icon||color? icon||color: ""} onClick={handleclick} value={name||icon} key={id}>
                       {icon?null:name}
                   </button>
               )
           })}
        </Wrapper>        
    )
}

export default Calculator

const Wrapper = styled.section`
   display:grid;
   grid-template-columns: repeat(4, 1fr);
   grid-gap:3px;
   input{
       grid-column:1/-1;
       height:100px;
       font-size:1.8rem;
       padding-right:25px;
       text-align:right;
   }
   button{
       border:none;
       font-size:2rem;
       padding:30px;
       background: rgba( 255, 255, 255, 0.1);
       backdrop-filter: blur( 4px );
       color:white;
       border-radius:15px;

       :hover{
        box-shadow: rgba(255, 255, 255, 0.1) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.1) 0px 18px 36px -18px inset;
        cursor:pointer;
       }

   }
   .color{
       background-color:#EC4D7D;
       :hover{
           box-shadow:none;
           background-color:#eb396f;
       }
   }
   @media screen and (max-width:700px){
       button{
           padding:20px;
       }
   @media screen and (max-width:500px){
       button{
           padding:5px;
       }
       input{
           font-size:1.6rem;
       }
   }
`

