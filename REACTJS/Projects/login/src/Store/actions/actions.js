export  const INCREMENT = 'INCREMENT';
export const ADDNUMBER = 'ADDNUMBER';
export const SUBSTRACT = 'SUBSTRACT';

export const increment = () => {
     return {
          type: 'INCREMENT'
     }
}

export const addNumber = (value) => {
     return {
          type: 'ADDNUMBER',
          va : value
     }
}

export const substract = () => {
     return {
          type: 'SUBSTRACT'
     }
}