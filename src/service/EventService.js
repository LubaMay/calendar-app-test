import axios from "axios";

export class EventService {
    getEvents() {
        return axios.get("https://api.nopaperwork.ca:844/api/events/1bec2050-d5a2-4a6a-a476-8f7a6424ace0/1/20/").then((res) => {
            return res.data.events;
        });
    }
}

export function getEvents() {
    return axios.get("https://api.nopaperwork.ca:844/api/events/1bec2050-d5a2-4a6a-a476-8f7a6424ace0/1/20/");
}

export function saveEvents(guid, data) {
    return axios.put(`https://api.nopaperwork.ca:844/api/events/1bec2050-d5a2-4a6a-a476-8f7a6424ace0/${guid}`, data);
}
