import {React , useEffect , useState} from "react";

const UsersTable =({users})=>{
    const [user , setUser] = useState([]);
    useEffect(()=>{
      FetchUser()
    },[])
    const FetchUser= async () =>{
      try {
        const response = await fetch("http://127.0.0.1:5000/users");
        const data = await response.json();
        setUser(data.Users); 
        console.log(data.Users);
  
      } catch (error) {
        console.error('Error fetching users:', error);  
      }
    }}
    export default UsersTable;