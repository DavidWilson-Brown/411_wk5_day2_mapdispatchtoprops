// action is a function that returns an object
// this object should ALWAYS have a type property
// sometimes you have a payload property
// you have a payload when you have something that your store doesn't have


export const addCar = (newCar) => {
    return {
      type: 'ADD_CAR',
      value: newCar
    }
  }
  
  export const removeCar = (index) => {
    return {
      type: 'REMOVE_CAR',
      value: index
    }
  }