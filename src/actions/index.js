export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
// create additional exports
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_ADD = "MEMORY_ADD";

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

// add action creators for memory
export const addMemory = () => {
    return({type:MEMORY_ADD});
}