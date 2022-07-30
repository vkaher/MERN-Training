import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import HelloWorld from "../components/helloworld";


function App(){
    return(
        <Fragment>
            <div>This is from App!</div>
        <HelloWorld/>
        </Fragment>
    );
}
ReactDOM.render(<App/>, root);