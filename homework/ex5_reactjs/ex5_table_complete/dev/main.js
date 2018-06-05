import React from 'react';
import ReactDOM from 'react-dom';
import JSTable from "./JSTable.js";

var sampleData = {
    headerData : ["Firstname","Lastname", "Address"],
    rowsData : [
        ["Alexa", "Bliss", "Earth"],
        ["Sasha", "Banks", "Mars"],
        ["John", "Cena", "Jupiter"],
        ["Seth", "Rollins", "Sun"],
        ["Dean", "Ambrose", "Venus"]
    ]
}


ReactDOM.render( 
    React.createElement(JSTable, sampleData),
    document.getElementById("root")
);
