import React, { useState } from "react"
const NavContext = React.createContext({
    activeSection: "#home",
    onChangeSection: (value) => {}
});



export const NavContextProvider = (props) => {
    const [activeSection, setActiveSection] = useState("#home");

    const onChangeSection = (value) => {
        setActiveSection(value);
    }

    return (
        <NavContext.Provider value={{activeSection: activeSection, onChangeSection: onChangeSection}}>
            {props.children}
        </NavContext.Provider>
    );
};

export default NavContext;