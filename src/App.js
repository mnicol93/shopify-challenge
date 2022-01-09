import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useEffect } from 'react';

import Home from './components/Home';

import './App.css';
import { useHistory } from 'react-router-dom';

function App() {
  const [searchString, setSearchString] = useState("");
  let history = useHistory();

  function handleSubmit(e){
    e.preventDefault();
    history.push(`/`)
  }
  return (
    <div>
      <h1>Xiulo ah mare</h1>

      <Home />
    </div>
  );
}

export default App;
