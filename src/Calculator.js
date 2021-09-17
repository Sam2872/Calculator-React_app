import React,{useState} from 'react'
import styled from 'styled-components'
import buttons from './Buttons'

function Calculator() {

  

   const  [Input, setInput] = useState('0')
   
   const handleclick  = (e) =>{
        const val = e.target.value;
        switch(val){
            case "C":
                setInput('')
                break
            case "<=":
                setInput((newValue) => newValue.slice(0,-1))
                break
            default:
                setInput(prev=>prev+val)

        }
   }

    return (
        <Wrapper>
            <input type='text' value={Input} readOnly/> 
           {buttons.map(element=>{
               const {id, name, icon} = element;
               return(
                   <button className={icon? icon: ""} onClick={handleclick} value={name||icon} key={id}>
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
       padding-left:25px;
   }
   button{
       border:none;
       font-size:2rem;
       padding:30px;
       background: rgba( 255, 255, 255, 0.1);
       backdrop-filter: blur( 4px );
       color:white;
       
       :hover{
        box-shadow: rgba(255, 255, 255, 0.2) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        cursor:pointer;
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
           font-size:1rem;
       }
   }
`

