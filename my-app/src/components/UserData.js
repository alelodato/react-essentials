import React from 'react'

function UserData(props) {
  return (
    <h1>{props.connected ? "Connected" : "Not connected"} </h1>
  )
}

export default UserData