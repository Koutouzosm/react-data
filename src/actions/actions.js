import { data } from '../mydata'
import {
    GET_DATA
} from './types'

//Get data
export const getData = () => async dispatch => {
    dispatch({
        type: GET_DATA, 
        payload: data
    })
}

