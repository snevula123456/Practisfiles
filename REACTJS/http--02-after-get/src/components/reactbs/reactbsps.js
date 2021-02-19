import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

import './reactbsps.css';

const PractiseBs = () => {
     return (
          <div>
               <h1 className = "text-center">Welcome to Bootstrap</h1>
               <Button variant = 'outline-success' style = {{margin : "auto"}}>Testing</Button>
          </div>
          )
     }

export default PractiseBs;