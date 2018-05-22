import React from 'react';
import './styles/App.css';
import Form from './Form';

const App = ({ handleSuccessClick }) => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Login page</h1>
        </header>
        <Form onClick={ handleSuccessClick } />
    </div>
)

export default App;
