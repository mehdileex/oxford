import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {landing} from './layout/landing';

import { useState } from 'react';
import { Button } from 'reactstrap';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
 
function App() {

 const [open, setOpen] = useState(false);
  return (
    <div className="App">
       <landing></landing>
    </div>
  );
}

export default App;
