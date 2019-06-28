import React from 'react';
import './App.css';
import AddBookForm from './components/AddBookForm/AddBookForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1>Books for free</h1>
      </header>
      <h2>I'm so proud of you for taking out a new book. Now add it to the database.</h2>
      <AddBookForm/>
    </div>
  );
}

export default App;
