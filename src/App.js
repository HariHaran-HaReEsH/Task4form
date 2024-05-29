import './App.css';
import {  useState } from 'react';
import TableComponent from './TableComponent';

function App() {
  const [val,setval]=useState();
   const [pri,setpri]=useState();
   const [dob,setdob]=useState();
   const [city,setcity]=useState();
   const [check,setcheck]=useState('');
  const [gender,setgen]=useState();
  const [comment,setcomment]=useState();
  
 
  function handleSubmit(e){
      e.preventDefault();  
      setcheck('True');
    }
  return (<>
  <div className='App'>
    <h1>FORM</h1>
    <input  onChange={(e)=>setval(e.target.value)} name='Name' placeholder='Enter name' type='text'/>
    <input  onChange={(e)=>setpri(e.target.value)} name='Age' placeholder='Enter age' type='number'/>
    <input  onChange={(e)=>setdob(e.target.value)} name='Date' placeholder='Enter DOB' type='date'/>
    {/* <input  onChange={(e)=>setcity(e.target.value)} name='City' placeholder='Enter city' type='select'/> */}
    <div className='city' onChange={(e)=>setcity(e.target.value)} >
    <p>Choose a city:</p>
    <select name="city">
    <option value="Chennai">Chennai</option>
    <option value="Coimbatre">Coimbatre</option>
    <option value="Erode">Erode</option>
    <option value="Tiruppur">Tiruppur</option>
    </select>
    </div>
    <div className='gender' onChange={(e)=>setgen(e.target.value)}>
    <p>Please select your Gender:</p>
    <input type="radio" name="gender" value="Male"/>
    <label >Male</label><br></br>
    <input type="radio"  name="gender" value="Female"/>
    <label >Female</label><br></br>
    <input type="radio"  name="others" value="Others"/>
    <label >Others</label>
    </div>

    <input id='cmm' onChange={(e)=>setcomment(e.target.value)} name='Comment' placeholder='Enter Comment' type='text'/>


    <button onClick={handleSubmit}>Submit</button>
    
  </div>
  <div className='Table'>
  <h2>Table</h2>
  {check==='True'?<TableComponent name={val} age={pri} dob={dob} city={city} gender={gender} comment={comment}/>:<h1>Nothing to render</h1>} 
  </div>
  </>
  );
}

export default App;
