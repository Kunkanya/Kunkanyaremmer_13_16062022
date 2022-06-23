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

const fetch = async () => {
    try {
        const response = await axios.post(endpointLogin, {
            email: email,
            password: password
        })


        console.log("response", response)

        if (response.data.status === 200) {

        }
    } catch (error) {
        console.error(error.message)
    }
}
// fetch()