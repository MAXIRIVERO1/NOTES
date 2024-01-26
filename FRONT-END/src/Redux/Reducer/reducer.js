import { GET_NOTES, GET_DETAIL, CLEAR_DETAIL, ADD_ARCH, DELETE_ARCH, DELETE_NOTE, FILTER_TAG, GET_ACCESS, LOG_OUT, FILTER_STATUS } from "../Actions/actions.js"



const initialState = {
    notes : [],
    copyNotes : [],
    archived : [],
    copyArchived : [],
    detail : {},
    access : false
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NOTES:
            return {
                ...state, notes: action.payload, copyNotes: action.payload
            }
        case GET_DETAIL:
            return {
                ...state, detail: action.payload
            }
        case CLEAR_DETAIL:
            return {
                ...state, detail: {}
            }
        case ADD_ARCH:
            return {
                ...state, archived: [...state.archived, action.payload], copyArchived: [...state.archived, action.payload]
            }
        case DELETE_ARCH:
            const deleted = state.archived.filter((obj)=> obj.id !== action.payload)
            return {
                ...state, archived: deleted, copyArchived: [...state.archived, action.payload]
            }
        case DELETE_NOTE:
            const noteDeleted = state.notes.filter((obj) => obj.id !== action.payload)
            const isArch = state.archived.some((obj) => obj.id === action.payload)
            const deleteArchToo = isArch ? state.archived.filter((obj) => obj.id !== action.payload) : state.archived
            return {
                ...state, notes: noteDeleted, archived: deleteArchToo, copyArchived: deleteArchToo
            }
        case FILTER_TAG:
            const toFilter = state.copyNotes;
            const filtered = action.payload === "all tags" ? state.copyNotes : toFilter.filter((obj) => obj.tag === action.payload)
            return {
                ...state, notes: filtered, copyNotes: state.copyNotes
            }
        case GET_ACCESS:
            return {
                ...state, access: action.payload
            }
        case LOG_OUT:
            return {
                ...state, access: action.payload
            }
        case FILTER_STATUS:
            const listNotes = state.copyNotes;
            let statusFiltered;
            if(action.payload === "active"){ statusFiltered = listNotes.filter((obj) => obj.active === true)}
            else if(action.payload === "inactive"){ statusFiltered = listNotes.filter((obj) => obj.active === false)}
            else{ statusFiltered = state.copyNotes }
            return {
                ...state, notes: statusFiltered, copyNotes: state.copyNotes
            }
        default :
            return state
    }
}

export default reducer