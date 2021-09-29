import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Container from './components/Container';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
