import React,{useState,useEffect} from 'react';
import {Container,Table} from "react-bootstrap"
import './App.css';
import Employe from "./JSONS/Employee.json"
import Designation from "./JSONS/Designation.json"
import Salary from "./JSONS/Salary.json"

const App=()=> {
  const [data,setData]=useState([])

  const FilterApi=()=>{
    var res = Designation.map(x => Object.assign(x, Employe.find(y => y.EmpId == x.EmpId)));
    var result=res.map(x => Object.assign(x, Salary.find(y => y.EmpId == x.EmpId)));
    setData(result)
  }

  useEffect(() => {
  FilterApi()
  }, [])

  console.log(data)
  return (
    <Container fluid> 
    <h4 style={{marginTop:"20px",color:"#3a8d85",textAlign:"center"}}>Karloo Task</h4>
 <Table striped bordered hover style={{marginTop:"20px"}}>
  <thead>
    <tr>
      <th>Emp ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>Reporting Manager</th>
      <th>Current Salary</th>
      <th>Last Revision Date</th>
      <th>Current Designation</th>
      <th>Effective From</th>
    </tr>
  </thead>
  <tbody>
    {data.map((val,index)=>
    <tr>
      <td>{val.EmpId}</td> 
      <td>{val.Firstname}</td> 
      <td>{val.Lastname}</td>
      <td>{val.Firstname+" "+val.Lastname}</td>
      <td>{val.ReportingManager}</td>
      <td>{val.Salary}</td>
      <td>{val.RevisionDate}</td>
      <td>{val.Designation}</td>
      <td>{val.EffectiveFrom}</td>
    </tr>)} 
  </tbody>
</Table>  
    </Container>
  );
}

export default App;
