import React from "react";
import './TableComponent.css';
function TableComponent (props){
    return(<div className="Temp">
    <table>        
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>City</th>
            <th>Gender</th>
            <th>Comments</th>
        </tr>
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.dob}</td>
            <td>{props.city}</td>
            <td>{props.gender}</td>
            <td>{props.comment}</td>
        </tr> 
    </table>
    </div>);
};
export default TableComponent;