import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Title from '../Title';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Todolist component", () => {

    it("renders with or without title", () => {
        act(() => {
          render(<Title />, container);
        });
        expect(container.textContent).toBe("");
      
        act(() => {
          render(<Title title="Tasks" />, container);
        });
        expect(container.textContent).toBe("Tasks");
    })

    
})


