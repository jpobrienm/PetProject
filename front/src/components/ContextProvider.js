import React, {createContext, useContext, useReducer} from "react";
import {reducer} from "./Reducer";

const initialState={host_api: "http://localhost:8080/api",
                    request_name: null,
                    request_tags : null, 
                    recording: false,
                    video_stream: null, 
                    video_blob: null,
                    search_item: null,
                    search_list: [],
                    windowDisplayed: 'create'};

const BaseContext = createContext(initialState);

export const useBaseContext = () =>{
    return useContext(BaseContext)
}


export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    return <BaseContext.Provider value ={{state, dispatch}}>
        {children}
    </BaseContext.Provider>
}

