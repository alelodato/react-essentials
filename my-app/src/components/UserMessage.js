import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Plase complete the steps below:</p>
                <ol>
                    <li>Confirm Email</li>
                    <li>Complete Profile</li>
                    <li>Subscribe to the newsletter</li>
                </ol>
            </div>
        ) : (<p>Please sign in</p>) }
      </div>
  )
}

export default UserMessage