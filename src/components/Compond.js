import React, { Component } from 'react'

function Dialog(props) {
  return (
    <div style={{border:`3px solid ${props.color || 'blue'}`}}>
      {/* 好比是 Vue的匿名插槽 */}
      {props.children}
      <div>
        {/* 具名插槽 */}
     
      </div>
    </div>
  )
}
function WelcomeDialog() {
 
  return (
    <Dialog  >
      <h3>welcome</h3>
      <p>欢迎光临</p>
    </Dialog>
  )
}
function ThankDialog() {
  
  return (
    <Dialog color='red'>
      <h3>Thanks</h3>
      <p>谢谢您</p>
    </Dialog>
  )
}

export default class Compond extends Component {
  render() {
    return (
      <div>
        <WelcomeDialog></WelcomeDialog>
        <ThankDialog></ThankDialog>
      </div>
    )
  }
}
