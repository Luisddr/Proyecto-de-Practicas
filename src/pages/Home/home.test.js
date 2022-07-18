import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "./index";
import {BrowserRouter as Router} from "react-router-dom"

let container = null;

beforeEach(()=>{
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("render home component", ()=>{

    expect(
        
    )
    act(()=>{
        
        render(
        <Router>
            <Home/>
        </Router>, container)
        
    })
    expect(container.textContent).toBeDefined()
})