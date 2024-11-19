import React from 'react'

const UserProfile = ({loggedUser}) => {
  console.log('localhost:8000/storage/' + loggedUser.image);
  const img = 'http://localhost:8000/storage/' + loggedUser.image;
  console.log(img);
  return (
    <div className="container">
      <h1 className="text-center">Profil korisnika</h1>
      <div className="text-center">
        <img 
          src={img} 
          alt="User Avatar" 
          className="rounded-circle"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
        />
      </div>

      <div className="box">
        <div className="row">
          <div className="col-4">
            <strong>ID:</strong>
          </div>
          <div className="col-8">{loggedUser.id}</div>
        </div>
        <div className="row">
          <div className="col-4">
            <strong>Ime:</strong>
          </div>
          <div className="col-8">{loggedUser.name}</div>
        </div>
        <div className="row">
          <div className="col-4">
            <strong>Email:</strong>
          </div>
          <div className="col-8">{loggedUser.email}</div>
        </div>
        <div className="row">
          <div className="col-4">
            <strong>Role:</strong>
          </div>
          <div className="col-8">
                {loggedUser.role_id === 1 ? 'Administrator' : 
                loggedUser.role_id === 2 ? 'Predavač' : 'Korisnik'}
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
