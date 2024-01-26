import axios from "axios";
export const GET_NOTES = "GET_NOTES";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const ADD_ARCH = "ADD_ARCH";
export const DELETE_ARCH = "DELETE_ARCH";
export const DELETE_NOTE = "DELETE_NOTE";
export const FILTER_TAG = "FILTER_TAG";
export const GET_ACCESS = "GET_ACCESS";
export const LOG_OUT = "LOG_OUT";
export const FILTER_STATUS = "FILTER_STATUS";



export const getNotes = ()=> {
    return async(dispatch)=>{
        try {
            const { data } = await axios.get("http://localhost:3001/notes/get")
            return await dispatch({
                type : GET_NOTES,
                payload : data
            })
        } catch (error) {
            console.error("error fetching notes : ",error)
        }
    }
};

export const getDetail = ( id ) => {
    return async(dispatch)=>{
        try {
            const { data } = await axios.get(`http://localhost:3001/notes/detail/${id}`)
            return await dispatch({
                type : GET_DETAIL,
                payload : data
            })
        } catch (error) {
            console.error("error fetching detail : ", error)
        }
    }
};

export const clearDetail = () => {
    return (dispatch)=>{
        return dispatch({
            type : CLEAR_DETAIL,
            payload : ""
        })
    }
};

export const addArch = (id) => {
    return async(dispatch)=>{
        try {
            const { data } = await axios.get(`http://localhost:3001/notes/detail/${id}`)
            return await dispatch({
                type : ADD_ARCH,
                payload : data
            })
        } catch (error) {
            console.error("error archiving", error)
        }
    }
};

export const deleteArch = (id) => {
    return (dispatch) => {
        return dispatch({
            type : DELETE_ARCH,
            payload : id
        })
    }
};

export const deleteNote = (id) => {
    return (dispatch) => {
        return dispatch({
            type: DELETE_NOTE,
            payload: id
        })
    }
};

export const filterByTag = (tag) => {
    return (dispatch) => {
        return dispatch({
            type: FILTER_TAG,
            payload: tag
        })
    }
};

export const getAccess = (boolean) => {
    return (dispatch) => {
        dispatch({
            type: GET_ACCESS,
            payload: boolean
        })
    }
};

export const logOut = () => {
    return (dispatch) => {
        dispatch({
            type: LOG_OUT,
            payload: false
        })
    }
};

export const filterStatus = (status) => {
    return (dispatch) => {
        dispatch({
            type: FILTER_STATUS,
            payload: status
        })
    }
};