export default function(state = [], action){
    switch(action.type){
        case "FETCH_LOG":
            return action.payload
        default:
            return state
    }
}