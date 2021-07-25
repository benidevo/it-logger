import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';
import {BASE_URL} from '../utils/baseURL';

// get technicians from server
export const getTechs = () => async dispatch => {
    try {
        setLoading()

        const res = await fetch(`${BASE_URL}/techs`);
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
};

// set loading
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

// add technician
export const addTech = tech => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`${BASE_URL}/techs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tech)
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    }
};

// delete technician
export const deleteTech = id => async dispatch => {
    try {
        await fetch(`${BASE_URL}/techs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
};
