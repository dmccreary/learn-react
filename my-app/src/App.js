import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Main from './Main'
import ToDoItems from './ToDoItems'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header message="Hi header"/>
      
      <Main message="Hi Main"/>

      <ToDoItems message="Hi ToDoItems"/>

      <Footer message="Hi footer"/>
    </div>
  );
}

export default App;
