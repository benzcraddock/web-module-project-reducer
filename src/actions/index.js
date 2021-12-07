export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
// create export for clearDisplay
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
}

// add action creator and string constant for clear display
export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}