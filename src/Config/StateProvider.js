import React, { createContext, useContext, useReducer } from 'react';


export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
       {children}
     </StateContext.Provider>
}

// This is how we use it inside of a component
export const useStateProvider = () => useContext(StateContext);