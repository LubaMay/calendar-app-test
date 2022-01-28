import { GET_EVENTS } from "../actions/events";
import { UPDATE_EVENTS } from "../actions/events";

export default function getEvents(state = {}, action) {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                ...{ data: action.events },
            };
        case UPDATE_EVENTS:
            for (let i = 0; i < state.data.length; i++) {
                const element = state.data[i];
                if (element.Id === action.event.data.Id) {
                    const newState = { ...state };
                    newState.data[i] = action.event.data;
                    return newState;
                }
            }
            return {
                ...state,
            };
        default:
            return state;
    }
}
