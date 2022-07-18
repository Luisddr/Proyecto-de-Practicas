import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import { act } from "react-dom/test-utils";
import CardComponent from "./CardComponent";
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


it("renderiza shop now en span", ()=>{
    act(()=>{
        const fakeData = {
            id: 1,
            image: "https://guinatal.github.io/images/posts/getElementById_vs_querySelector.png" ,
            categorie: "Shoes"
        }
        render(
            <Router>
                <CardComponent id={fakeData.id} image={fakeData.image} categorie={fakeData.categorie} />
            </Router>,container);
    })
    expect(container.querySelector("span").textContent).toBe("Shop Now")
    expect(container.querySelector(".testing-category").textContent).toBe("Shoes")
})

