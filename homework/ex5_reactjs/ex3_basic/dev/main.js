import * as duck1 from "./Duck1.js"
import * as duck2 from "./Duck2.js"
import * as duck3 from "./Duck3.js"
import React from 'react';
import ReactDOM from 'react-dom';

duck1.printSomething();
duck2.printSomething();
duck3.printSomething();

class HelloWorld extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>This is some text</p>
            </div>
            );
    }
};

ReactDOM.render( React.createElement(HelloWorld),
document.getElementById("root"));
