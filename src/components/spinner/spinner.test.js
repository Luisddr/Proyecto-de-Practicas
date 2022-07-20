import ShallowRenderer from "react-test-renderer/shallow"
import Spinner from "./spinner";
import React from 'react';


const renderer = new ShallowRenderer();

it('expect to render Spinner', ()=>{
    
    // const result = renderer.getRenderOutput()
    expect(renderer.render(<Spinner/>)).toMatchSnapshot()
})