import { getEvents, saveEvents } from "../service/EventService";
import { receiveEvents } from "./events";
import { updateEvents } from "./events";

export function handleInitialData() {
    return (dispatch) => {
        return getEvents().then((data) => {
            dispatch(receiveEvents(data.data.events));
        });
    };
}

export function handleUpdateData(event) {
    return (dispatch) => {
        return saveEvents(event.Id, event).then((data) => {
            dispatch(updateEvents(data));
        });
    };
}
