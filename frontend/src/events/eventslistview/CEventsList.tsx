import {UShowEventList} from "../usecases/UShowEventList";
import {EventsListDto} from "../types/EventsListDto";
import {ActionId} from "../types/ActionId";

export const updateELView = (state: EventsListDto[], action: ActionId): EventsListDto[] => {
    return [...state];
}

export const CEventsList = (show: UShowEventList) => {
    function onLoadPageEvent() {
        show.fetchEvents();
    }

    return [onLoadPageEvent];
}
