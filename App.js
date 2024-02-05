import React from "react";
import ReactDOM from "react-dom/client";
import Body from './Body';

const App =()=>{
    return (
        <React.Fragment>
            <Body/>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);