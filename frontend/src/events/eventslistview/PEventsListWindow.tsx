import {PresentationDispatcher} from "../PresentationDispatcher";
import {EventsListDto} from "../types/EventsListDto";
import {Dispatch} from "react";
import {ActionId} from "../types/ActionId";
import {ScreenId} from "../types/ScreenId";

export class PEventsListWindow extends PresentationDispatcher {
    mState!: Array<EventsListDto>;
    uView!: Dispatch<ActionId>;

    injectDataHandles(s: Array<EventsListDto>, uv: Dispatch<ActionId>) {
        this.mState = s;
        this.uView = uv;
    }

    handleShowPaginatedEvents(s: Array<EventsListDto>) {
        this.mState.splice(0, this.mState.length);
        this.mState.push(...s);
        this.uView?.(ActionId.FETCH);
        this.gUpdateView?.(ScreenId.EVENT_LIST_VIEW);
    }

}
