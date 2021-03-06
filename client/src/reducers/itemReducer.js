import {GET_ITEMS, GET_SINGLE_ITEM,ADD_SERVICE_REQUEST_AUTH, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, SET_CATEGORY, ADD_SERVICE_REQUEST,ITEMS_LOADING_USER,GET_ITEMS_USER} from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case ITEMS_LOADING_USER:
            return {
                ...state,
                loadingRQ: true
            };
        case GET_ITEMS_USER:
            return {
                ...state,
                serviceOffered: action.payload,
                loadingRQ: false
            };
        case ADD_SERVICE_REQUEST_AUTH:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    user: {
                        ...state.auth.user,
                        serviceRequests: [ action.payload, ...state.auth.user.serviceRequests]
                    }
                }
            }

        case GET_SINGLE_ITEM:
            return {
                ...state,
                items: state.items.filter(item=>item._id === action.payload)
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case ADD_SERVICE_REQUEST:
            return{
                ...state,
                items: {
                    serviceRequests: [action.payload, ...state.serviceRequests]
                }
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_CATEGORY:
                return {
                    ...state,
                    category: action.payload
                }
        default:
            return state;
    }

}