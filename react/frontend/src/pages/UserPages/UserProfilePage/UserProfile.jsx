import React from 'react'

const UserProfile = ({loggedUser}) => {
  return (
    <div className="container">
      <h1 className="text-center">Profil korisnika</h1>
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
