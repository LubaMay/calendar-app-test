export const GET_EVENTS = "GET_EVENTS";
export const UPDATE_EVENTS = "UPDATE_EVENTS";
const axios = require("axios");

export function receiveEvents(events) {
    return {
        type: GET_EVENTS,
        events,
    };
}

export function updateEvents(event) {
    return {
        type: UPDATE_EVENTS,
        event,
    };
}
