//setput data layer
import React, { createContext,useContext,useReducer} from "react";

//this is the data layer
export const StateContex = createContext();

//bulid a provider
export const StateProvider = ({ reducer, initialState,children }) =>(
    <StateContex.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContex.Provider>
);
//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContex);