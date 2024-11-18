import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Teachers = () => {
    const [teachers, setTeachers] = useState(null);

    useEffect(() => {
        axios.get('/api/users/') // Preuzimanje korisnika sa API-a
          .then((res) => {
            setTeachers(res.data.users);
          })
          .catch((error) => {
            alert("Error fetching teachers:", error);
          });
    }, []);

    return (
        <div className="container">
            <h2>Lista predavača</h2>
            {teachers != null ? (
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
                    {teachers
                        .filter((teacher) => teacher.role.id === 2) // Filtrira predavače sa role_id 2
                        .map((teacher) => (
                            <tr key={teacher.id}>
                                <td>{teacher.id}</td>
                                <td>{teacher.name}</td>
                                <td>{teacher.email}</td>
                                <td>{teacher.role.role_name}</td>
                                <td>
                                    <Link to='teacher_details' state={teacher}>
                                        <button className='primary'>Detalji</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Nema predavača za prikaz.</p>
            )}
        </div>
    );
};

export default Teachers;
