import {GET_ITEMS, GET_SINGLE_ITEM,ADD_SERVICE_REQUEST_AUTH, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, SET_CATEGORY,GET_ITEMS_USER, ADD_SERVICE_REQUEST,ITEMS_LOADING_USER} from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import {returnErrors} from './errorActions';

export const getItems = category => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/services/'+category)
        .then(res=> 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const getItemsFromUser = userid => dispatch => {
    console.log("llegue al getItemsFromUser")
    dispatch(setItemsLoadingUser());
    axios
        .get('/api/services/user/'+userid)
        .then(res=> {
            console.log("esto es el res de los items offered of user");
            console.log(res);
                dispatch({
                    type: GET_ITEMS_USER,
                    payload: res.data
                })
            }
            
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};




export const getSingleItem = (id,category) => (dispatch, getState) => {
    /*axios
        .get(`api/services/${category}/${id}`, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: GET_SINGLE_ITEM,
                payload: id
            })    
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));*/

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

export const addServiceRequest= sr => (dispatch, getState) => {
    addToSelf(sr);
    axios
        .put('/api/services/request/'+sr.serviceId, sr, tokenConfig(getState))
        .then(res => {
            console.log("res.addSR");
            console.log(res);
            dispatch({
                type: ADD_SERVICE_REQUEST,
                payload: res.data
            })
            
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};

export const addToSelf = sr => (dispatch, getState) => {
    dispatch({
        type: ADD_SERVICE_REQUEST_AUTH,
        payload: sr
    })
}
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

export const setItemsLoadingUser = () => {
    return {
        type: ITEMS_LOADING_USER
    };
};

export const setCategory = category => {
    
    return{
        type: SET_CATEGORY,
        payload: category
    }
        
};