import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function UserDetails() {
    const { state: user } = useLocation();
    const [formData, setFormData] = useState(user);
    const [isEditable, setIsEditable] = useState(false);

    
    const roles = [
        { id: 1, role_name: 'administrator' },
        { id: 2, role_name: 'predavac' },
        { id: 3, role_name: 'korisnik' },
    ];

    const handleEditToggle = () => {
        setIsEditable((prev) => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRoleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            role_id: parseInt(e.target.value),
        }));
    };

    const handleSave = () => {
        console.log('Saved data:', formData);
        
            // Podaci koje šaljemo serveru
            const dataToSend = {
              name: formData.name,
              email: formData.email,
              role_id: formData.role.id,
              password: formData.password || null, // Ako lozinka nije unesena, šaljemo null
            };
      
            // PUT zahtev prema backendu
            console.log("api/users/" + user.id);
            axios.put("api/users/" + user.id,dataToSend,user).then((res)=>{
                
                console.log(res);
                
          });
    };
   
    const [isBlocked, setIsBlocked] = useState(user.is_blocked);

    const handleBlockToggle = () => {
        // Pošaljite zahtev za ažuriranje statusa blokade
       
        setIsBlocked(!isBlocked); // Ažuriraj lokalno stanje
        axios.put("api/users/"+ user.id +"/block")
    };


    return (
        <div className="container">
            <h2>User Details</h2>
            <form className="row">
                <div className="col-sm-12">
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            disabled={!isEditable} 
                            onChange={handleChange} 
                            className="input"
                        />
                    </label>
                </div>
                <div className="col-sm-12">
                    <label>
                        Email:
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            disabled={!isEditable} 
                            onChange={handleChange} 
                            className="input"
                        />
                    </label>
                </div>
                <div className="col-sm-12">
                    <label>
                        Role:
                        <select 
                            name="role_id" 
                            value={formData.role_id} 
                            disabled={!isEditable} 
                            onChange={handleRoleChange} 
                            className="select"
                        >
                            {roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.role_name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="col-sm-12">
                    <button type="button" onClick={handleEditToggle} className="button primary">
                        {isEditable ? 'Cancel Edit' : 'Enable Edit'}
                    </button>
                    {isEditable && (
                        <button type="button" onClick={handleSave} className="button secondary">
                            Save Changes
                        </button>
                    )}
                </div>
                <div className="row">
                    <button
                        type="button"
                        className={isBlocked ? 'primary' : 'secondary'}
                        onClick={handleBlockToggle}
                    >
                        {isBlocked ? 'Odblokiraj' : 'Blokiraj'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserDetails;
