export default function(state = null, action){
    switch(action.type){
        case "FETCH_WARDEN":
            return action.payload
        default:
            return state
    }
}