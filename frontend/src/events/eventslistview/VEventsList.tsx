import {FC, useEffect, useReducer} from "react";
import {Button, MenuListItem, ScrollView, TextInput, Window, WindowContent, WindowHeader} from "react95";
import Draggable from "react-draggable";
import {useNavigate} from "react-router-dom";
import {PEventsListWindow} from "./PEventsListWindow";
import {UShowEventList} from "../usecases/UShowEventList";
import {CEventsList, updateELView} from "./CEventsList";

export const VEventsList:
    FC<{
        isActive: boolean;
        pEL: PEventsListWindow;
        uSE: UShowEventList;
    }> = ({pEL, uSE}) => {
    const navigate = useNavigate();

    const [elData, elUpdateView] = useReducer(updateELView, []);
    pEL.injectDataHandles(elData, elUpdateView);
    const [onLoadPageEvent] = CEventsList(uSE);

    useEffect(
        () => {
            onLoadPageEvent()
        }
        , [])

    return (
        <Draggable>
            <Window>
                <WindowHeader>Lista wydarzeń</WindowHeader>
                <WindowContent>
                    <div style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center"
                    }}>
                        <Button onClick={() => {
                            navigate("/");
                        }} variant='raised'>Wróć</Button>
                        <h4>od</h4>
                        <TextInput
                            value="16/10/2137"
                            placeholder='__/__/____'
                            disabled
                            fullWidth={false}
                        />
                        <h4>do</h4>
                        <TextInput
                            value="16/10/2137"
                            placeholder='__/__/____'
                            disabled
                            fullWidth={false}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 8,
                        }}
                    >
                        <ScrollView style={{width: '450px', height: '200px'}}>
                            {elData &&
                                elData.map(data => {
                                    return <MenuListItem>
                                        <p style={{whiteSpace: "nowrap"}}>
                                            {data.uuid};
                                            {data.host};
                                            {data.name};
                                            {data.startDate.toString()};
                                            {data.stopDate.toString()};
                                        </p>
                                    </MenuListItem>
                                })
                            }
                        </ScrollView>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <Button>
                                Opis
                            </Button>
                            <br/>
                            <Button onClick={() => {
                                console.log("Clicked")
                            }}>
                                Zapisz się
                            </Button>
                        </div>
                    </div>
                </WindowContent>
            </Window>
        </Draggable>
    )
}
