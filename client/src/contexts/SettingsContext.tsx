/* Dependency Imports */
import { createContext, useReducer } from 'react';
import { produce } from 'immer';

/* Project Imports */
import { ISettings, IColourScheme } from '../types/settings';
import { SET_DARK_MODE, SET_LIGHT_MODE } from '../utils/constants/settings';

const SettingsContext = createContext<any>(null);

const settingsReducer = (draft: ISettings, action: { type: string, payload?: any }) => {
    switch (action.type) {
        case SET_DARK_MODE:
            draft.colourScheme = darkScheme;
            return draft;
        case SET_LIGHT_MODE:
            draft.colourScheme = lightScheme;
            return draft;
        default:
            return draft;
    }
}

const curriedSettingsReducer = produce(settingsReducer);

/* Constant States */
const darkScheme: IColourScheme = {
    backgroundColour: "black",
    textColour: "white",
};

const lightScheme: IColourScheme = {
    backgroundColour: "white",
    textColour: "black",
};

const initialSettings: ISettings = {
    colourScheme: darkScheme,
    isDark: true,
};

const SettingsProvider = (props: ChildProps) => {
    const [settings, dispatchSettings] = useReducer(curriedSettingsReducer, initialSettings);

    return (<div>
        <SettingsContext.Provider value={[settings, dispatchSettings]}>
            {props.children}
        </SettingsContext.Provider>
    </div>)
};

/* Types */
interface ChildProps {
    children: any;
};

export { SettingsContext, SettingsProvider };