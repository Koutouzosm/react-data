import {
    GET_DATA, FILTER_DATA
} from '../actions/types'

const initialState = {
    data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case FILTER_DATA:
            return {
                ...state,
                filterData: action.payload.filter(item => item.age < 30)
            }
        // default will return state if no case match
        default:
            return state
    }
}

