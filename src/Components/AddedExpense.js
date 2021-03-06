import React from 'react';
import '../Components/AddedExpense.css';

const AddedExpense = ( props ) => {
return(
    <tr scope="row">
    <td><p>{props.index}</p></td>
    <td>{props.amount}</td>
    <td>{props.category}</td>
    <td>{props.description}</td>
    <td><button className="btn-danger" onClick ={props.deleteHandler}>Delete</button></td>
 
    </tr>
)
}

export default AddedExpense;