import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Admin.scss"

function Admin() {
  const [data,setData] = useState([])


  useEffect(()=> {
    fetch("http://localhost:3000/card")
    .then(res=>res.json())
    .then(data=>setData(data))
  },[data])
  

  const DelBtn =(id)=> {

    axios.delete(`http://localhost:3000/card/${id}`)

  }

  return (
    <div className='backgorund'>
      <div className='center'>
      <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Info</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
         
            data.map(item=> {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.info}</td>
                    <td>{item.price}</td>
                    <td><button onClick={()=>DelBtn(item.id)}>Delete</button></td>
                  </tr>
                
                )
            }
          )
        }
        
      </tbody>
    </table>
      </div>
    </div>
  )
}

export default Admin
