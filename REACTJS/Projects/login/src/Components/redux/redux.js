import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators  from '../../Store/actions/actions';

import InputFields from '../Input/input';

import {Button} from '@material-ui/core';
import './redux.css';


const reduxTesting = (props) => {
     
     return(
          <div>
               <h2>Redux Testing</h2>
               <InputFields/>
               <h2>{props.ctr}</h2>
               <Button variant= 'outlined' onClick = {props.onIncrementCounter}>Counter</Button><br/>
               <Button variant= 'outlined' onClick = {props.onAddCounter}>Add 10</Button>
               <Button variant= 'outlined' onClick = {props.onSubstract}>substract 1</Button>
          </div>
     )
}

const mapStoretoProps = store => {
     return {
          ctr : store.counter
     }
}


const mpaDispatchtoProps = dispatch => {
     console.log("On Increment click is working")
     return {
          onIncrementCounter : () => dispatch(actionCreators.increment()),
          onAddCounter : () => dispatch(actionCreators.addNumber(10)),
          onSubstract : () => dispatch(actionCreators.substract())

     }
}


export default connect(mapStoretoProps,mpaDispatchtoProps)(reduxTesting);