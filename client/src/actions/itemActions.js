import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, SET_CATEGORY} from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import {returnErrors} from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/services')
        .then(res=> 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteItem = id => (dispatch, getState) => {
    axios
        .delete(`api/services/${id}`, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })    
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};

export const addItem = item => (dispatch, getState) => {
    axios
        .post('/api/services', item, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
            
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY
    };
}