export const GET_EVENTS = "GET_EVENTS";
export const UPDATE_EVENTS = "UPDATE_EVENTS";
const axios = require("axios");

export function receiveEvents(events) {
    console.log("Redux Action for receive events fired");
    return {
        type: GET_EVENTS,
        events,
    };
}

export function updateEvents(event) {
    console.log("Redux Action for update events fired");
    return {
        type: UPDATE_EVENTS,
        event,
    };
}
