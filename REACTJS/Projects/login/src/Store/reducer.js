import * as ActionTypes from './actions/actions';

const initialStore = {
     counter : 0
}

const reducer = (state = initialStore, action) => {
     switch (action.type) {
          case ActionTypes.INCREMENT:
               return{
                    ...state,
                    counter:state.counter + 1
               }
          case ActionTypes.ADDNUMBER:
               return{
               ...state,
               counter:state.counter + action.va
          }    
          case ActionTypes.SUBSTRACT:
               return{
               ...state,
               counter:state.counter - 1
          }    
          
     }
     return state;
}

export default reducer;