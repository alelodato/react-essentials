import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHanlder() {
        console.log("Clicked the class button")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHanlder}>click me - class component</button>
      </div>
    )
  }
}

export default EventsClass