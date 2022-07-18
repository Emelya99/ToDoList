import { render, screen } from '@testing-library/react';

import Task from './index';

const data = [{
    text: "Learn British",
    check: false,
    id: "123"
}]

describe("Task component", () => {
    
    it("render task component with data", async () => {
        render(<Task item={data} />);
    })

})