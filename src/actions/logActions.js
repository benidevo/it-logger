import { 
    SET_LOADING, 
    GET_LOGS, 
    LOGS_ERROR, 
    ADD_LOG, 
    DELETE_LOG, 
    SET_CURRENT, 
    CLEAR_CURRENT, 
    UPDATE_LOG, 
    SEARCH_LOGS } from '../actions/types';
import {BASE_URL} from '../utils/baseURL';

// get logs form server
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`${BASE_URL}/logs`);
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

// add logs
export const addLog = log => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`${BASE_URL}/logs`, {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};

// set current log
export const setCurrentLog = log => {
    return {
        type: SET_CURRENT,
        payload: log
    };
};

// clear current log
export const clearCurrentLog = () => {
    return { type: CLEAR_CURRENT };
};
// delete logs
export const deleteLog = id => async dispatch => {
    try {
        setLoading();
        await fetch(`${BASE_URL}/logs/${id}`, {
            method: 'DELETE'
        });
       
        
        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

// update log 
export const updateLog = log => async dispatch => {
    try {
        const res = await fetch(`${BASE_URL}/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (err) {
        
    }
};

// search logs form server
export const searchLogs = text => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`${BASE_URL}/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
