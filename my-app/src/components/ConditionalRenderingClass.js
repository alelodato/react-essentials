import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn:true,
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'Data Loaded!' : 'Loading...'}</h1>
        {this.state.isLoggedIn ? (
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
}

export default ConditionalRenderingClass