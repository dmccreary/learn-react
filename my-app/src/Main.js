import React from 'react'

function Main(props) {
    return (
        <div className="App-main">
          <h3>I am the Main</h3>
              Message is: {props.message}
              <div className="App-content">
        <ol>
          <li>
            Demo 1
          </li>
          <li>
            Demo 2
          </li>
          <li>
            Demo 3
          </li>
          <li>
            Demo 4
          </li>
        </ol>
      </div>
      </div>
    )
}

export default Main