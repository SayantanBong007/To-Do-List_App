import React from 'react';
import './App.css'
import Input from './components/input'
import List from './components/list'

function App() {
  const [items,setItems]=React.useState([]);

  function addItem(inputText)
    {
        setItems((prevValue)=>{
            return [...prevValue,inputText];
        });
  }
  
  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  }

 return <div className='container'>
  <div className='heading'>
  <h1>To-DO-List</h1>
  </div>
  <Input typed={addItem}></Input>
  <div>
    <ul>
      {items.map((toDoItems,index)=>(
        <List 
        key={index}
        id={index}
        text={toDoItems}
        completed={deleteItem}></List>
      ))}
      
    </ul>
  </div>
 </div>
}

export default App
