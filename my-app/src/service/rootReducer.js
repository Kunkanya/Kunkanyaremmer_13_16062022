const initailStates = {
    name : "",
    email: "",
    password : "",
    data : []
}
// create recuder
export const rootReducer=(state = initailStates, action) =>{
    console.log(action, state)
    return state
}