import React from 'react'

function Footer(props) {
    return (
        <footer className="App-footer">
          <h3>I am the footer</h3>
              Message is: {props.message}
          
      </footer>
    )
}

export default Footer