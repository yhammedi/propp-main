import React from 'react'

function Profile  ({fullName,bio,Profession,children,handleName}) {
    
    return (
        <div style={{color: 'black',backgroundColor:'grey', textAlign:'center'}} >
            <h1>{fullName}</h1>
            <h2> {bio}  </h2>
            <h3> {Profession} </h3>
            <img src={children} /> 
            <button onClick={()=>alert(`the ${handleName} of the profile user`)}>  </button>
        </div>
    )
}

export default Profile 

Profile.defaultProps={
    fullName:'Ronaldo',
    bio:'footballeur international portugais ',
    Profession:'FOTBALLER Player',
  
    
}
