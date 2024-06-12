import React, { createContext, useContext, useState } from 'react';
import getState from '../store/flux.js'; 

const Context = createContext(null);

const Provider = ({ children }) => {
    const [store, setStore] = useState({});
    const state = getState({
        getStore: () => store,
        getActions: () => actions,
        setStore: (update) => setStore({ ...store, ...update })
    });
    const actions = getState({
        getStore: () => store,
        getActions: () => actions,
        setStore: (update) => setStore({ ...store, ...update })
    }).actions;

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    );
};

export { Provider, Context, useContext };