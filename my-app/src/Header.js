import React from 'react'

function Header(props) {
    return (
       <header className="App-header">
          <p>Clinical Query Accelerator Lab</p>
              Message is: {props.message}
          
      </header>
    )
}

export default Header