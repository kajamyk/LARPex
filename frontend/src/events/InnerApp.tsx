import {FC, useReducer} from "react";
import {PEventsListWindow} from "./eventslistview/PEventsListWindow";
import {EventsProxy, IEventFetch} from "./interfaces/IEventFetch";
import {UShowEventList} from "./usecases/UShowEventList";
import {ScreenId} from "./types/ScreenId";
import {VEventsList} from "./eventslistview/VEventsList";

const pEL: PEventsListWindow = new PEventsListWindow();
const iEF: IEventFetch = new EventsProxy();

const uSE: UShowEventList = new UShowEventList(pEL, iEF);

function switchView(state: ScreenId, action: ScreenId) {
    let newState = state;
    switch (action) {
        case ScreenId.EVENT_SIGN_UP_VIEW:
            newState = ScreenId.EVENT_SIGN_UP_VIEW;
            break;
        case ScreenId.EVENT_LIST_VIEW:
            newState = ScreenId.EVENT_LIST_VIEW;
    }
    return newState;
}


export const InnerApp: FC = () => {
    const [state, globalUpdateView] = useReducer(switchView, ScreenId.EVENT_LIST_VIEW);
    pEL.injectGlobalUpdateView(globalUpdateView);

    return (
        <div>
            <VEventsList isActive={true} pEL={pEL} uSE={uSE}/>
        </div>
    )
}
