import React from 'react'

export default function Profile({ onEdit }) {
  return (
    <div className="profile-screen">
      <div className="profile-header"></div>
      <div className="profile-card">
        <div className="avatar-wrap"><img src="/img/person.png" alt="avatar" /></div>
        <div className="field"><label>Name</label><div className="value">Sophia Patel</div></div>
        <div className="field"><label>Email</label><div className="value">sophiapatel@gmail.com</div></div>
        <div className="field"><label>Delivery address</label><div className="value">123 Main St Apartment 4A,New York, NY</div></div>
        <div className="field"><label>Password</label><div className="value">••••••••</div></div>

        <div className="profile-actions">
          <button className="btn primary">Edit Profile</button>
          <button className="btn outline">Log out</button>
        </div>
      </div>
    </div>
  )
}
