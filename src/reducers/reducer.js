import {
    GET_DATA
} from '../actions/types'

const initialState = {
    data: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_DATA: 
        return {
            ...state,
            data: action.payload
        }
        // default will return state if no case match
        default: 
        return state
    }
}

