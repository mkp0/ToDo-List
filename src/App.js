import React,{useState} from 'react'
import './App.css'
export default function App() {

  const [input,setInput] = useState("")
  const [arr,setArr] = useState([])

  const itemEvent = (event) => {
    setInput(event.target.value);
    
  }

  const listOfitem = () => {
    arr.push(input)
    setInput('')
  }



  return (
    <>
      <div className="main-div">
        <div className='center-div'>
          <h1>To do List</h1>
          <div>
          <input type = 'text' placeholder='Add a items' onChange={itemEvent} value={input} />
          

          <button  onClick={listOfitem} >+</button>
          </div>

          <ol>
              {arr.map(
                (a,b)=>{
                  return (<li>{a}</li>)

                }
              )}          
          </ol>

        </div>
      </div>
    </>
  )
}
