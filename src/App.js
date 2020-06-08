import React,{useState} from 'react'
import './App.css'
import Items from './items'
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

  const remove = (b) => {
    console.log(b)
    setArr(
          arr.filter((arrElm , index) => {
          return index !== b;
        }))
  }



  return (
    <>
      <div className="main-div">
        <div className='center-div'>
          <h1>ToDo List</h1>
          <div className='search'>
          <input type = 'text' placeholder='Add a items' onChange={itemEvent} value={input} />
          <button  onClick={listOfitem} >+</button>
          </div>

          <ol>
              {arr.map(
                (a,b)=>{
                  return (<Items key={b} a = {a} id={b} remove={remove} ></Items>)

                }
              )}          
          </ol>

        </div>
      </div>
    </>
  )
}
