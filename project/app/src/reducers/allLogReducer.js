export default function(state = [], action){
    switch(action.type){
        case "FETCH_ALLLOG":
            return action.payload
        default:
            return state
    }
}