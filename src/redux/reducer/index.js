import { sendFileToTelegramGroup } from "../constants/action-types";

const initialState = {
    groupName: null,
    inputValue: null,
    inputFile: null
}

let state = initialState

function reducer(state, action) {
    if (action.type === sendFileToTelegramGroup) {
        state.initialState.groupName = action.payload
    }
}

export default reducer(state)