import { render, screen, fireEvent } from "@testing-library/react";
import TodoFilter from ".";

const FILTERS = ["all", "active", "completed"];

const onFilter = jest.fn();
describe("TodoFilter", () => {
    test("render", () => {
        render(<TodoFilter filters={FILTERS} onFilter={onFilter} />);
        const filterElement = screen.getAllByRole("button");
        expect(filterElement).toHaveLength(FILTERS.length);
    });

    test.each(FILTERS)("filter", (filter) => {
        render(<TodoFilter filters={FILTERS} onFilter={onFilter} />);
        const filterElement = screen.getByRole("button", { name: filter });
        fireEvent.click(filterElement);

        expect(onFilter).toHaveBeenCalledWith(filter);
    });
});
