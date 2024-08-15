import {React , useEffect , useState} from "react";
import Table from 'react-bootstrap/Table';
import AddItem from "./setItem";

const ItemsTable =({items})=>{
  const [item , setItem] = useState([]);
  useEffect(()=>{
     FetchItem()
  },[])
  const FetchItem= async () =>{
    try {
      const response = await fetch("http://127.0.0.1:5000/get_items");
      const data = await response.json();
      
      setItem(data.Items); 
      console.log(data.Items);

    } catch (error) {
      
    }
  }
  
    return (
        <>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
             {item.length > 0 ? (
          item.map((item, index) => (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
              </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No items available</td>
          </tr>
        )}
          </tbody>
        </Table>
        <AddItem />
       
        </>
      );
}
export default ItemsTable;