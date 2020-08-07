import {
    GET_DATA1, GET_DATA2, GET_DATA3, FILTER_DATA, CLEAR_DATA
} from '../actions/types'

const initialState = {
    data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DATA1:
            return {
                ...state,
                data: action.payload
            }
        case GET_DATA2:
            return {
                ...state,
                data: action.payload
            }
        case GET_DATA3:
            return {
                ...state,
                data: action.payload
            }
        case FILTER_DATA:
            return {
                ...state,
                data: action.payload.filter(item => item.age < 30)
            }
        case CLEAR_DATA:
            return {
                ...state,
                data: null
            }
        // default will return state if no case match
        default:
            return state
    }
}

