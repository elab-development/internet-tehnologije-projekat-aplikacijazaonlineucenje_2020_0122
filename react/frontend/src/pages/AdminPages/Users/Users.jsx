import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users,setUsers] = useState(null);
    

    
    useEffect(() => {
        axios.get('/api/users/')
          .then((res) => {
            setUsers(res.data.users);
            
          })
          .catch((error) => {
            alert("Error fetching users:", error)
            
          });
      }, []);
      

  return (
    <div className="container">
    <h2>Lista korisnika</h2>
    {users != null ? (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ime</th>
                    <th>Email</th>
                    <th>Uloga</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {users
    .filter((user) => user.role.id === 3) // Filtrira korisnike sa role_id 3
    .map((user) => (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role.role_name}</td>
            <td><Link to='user_details' state={user}><button className='primary'>Detalji</button></Link></td>
        </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <p>Nema korisnika za prikaz.</p>
    )}
</div>
  )
}

export default Users
