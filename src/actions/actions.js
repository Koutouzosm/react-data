import { data } from '../mydata'
import {
    GET_DATA1,
    GET_DATA2,
    GET_DATA3,
    FILTER_DATA,
    CLEAR_DATA
} from './types'

//Get data 
export const getData1 = () => dispatch => {
    dispatch({
        type: GET_DATA1,
        payload: data.data1
    })
}

//Get data 
export const getData2 = () => dispatch => {
    dispatch({
        type: GET_DATA2,
        payload: data.data2
    })
}

//Get data 
export const getData3 = () => dispatch => {
    dispatch({
        type: GET_DATA3,
        payload: data.data3
    })
}

// Filter data
export const getFilterData = () => dispatch => {
    dispatch({
        type: FILTER_DATA,
        payload: data.data1
    })
}

// Clear data
export const clearData = () => dispatch => {
    dispatch({
        type: CLEAR_DATA,
    })
}

