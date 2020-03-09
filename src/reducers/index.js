import {OPEN_DRAWER,CLOSE_DRAWER} from '../actions/types'


const Reducer  = (state, action)=>{
    switch(action.type){
        case OPEN_DRAWER:
            return {...state,drawer: action.payload};
        case CLOSE_DRAWER:
            return {...state,drawer: action.payload}    
        default:
            return {
                ...state,
                drawer: false
            };
    }

}

export default Reducer;