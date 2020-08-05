import { data } from '../mydata'
import {
    GET_DATA,
    FILTER_DATA
} from './types'

//Get data
export const getData = () => dispatch => {
    dispatch({
        type: GET_DATA,
        payload: data
    })
}

export const getFilterData = () => dispatch => {
    dispatch({
        type: FILTER_DATA,
        payload: data.data1
    })
}

