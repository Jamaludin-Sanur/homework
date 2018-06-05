import React from 'react';
import ReactDOM from 'react-dom';
import JSTable from "./JSTable.js";

var sampleData = {
    headerData : ["Firstname","Lastname", "Address"],
    bodyData : [
        ["Alexa", "Bliss", "Earth"],
        ["Sasha", "Banks", "Mars"]
    ]
}


ReactDOM.render( 
    React.createElement(JSTable, sampleData),
    document.getElementById("root")
);
