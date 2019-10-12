export default function(state = [], action){
    switch(action.type){
        case "FETCH_DISAPPROVE":
            return action.payload
        default:
            return state
    }
}