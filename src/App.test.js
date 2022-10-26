import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Home from "./containers/Home/Home";


describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);
    screen.debug();
    // screen.getByRole();
  });
});

test('renders Home container', () => {
    render(<Home />);
});


test('renders searchBar', () => {
    render(<Home />);
    const searchtext = screen.getByPlaceholderText("Search beer name...");
    expect(searchtext).toBeInTheDocument;
})

test('renders FilterList checkbox 1', () => {
    render(<Home />);
    const filter = screen.getByRole("checkbox",{name:"High ABV (> 6/0%)"})
    expect(filter).toBeInTheDocument;
})
test('default state for checkbox 1', () => {
    render(<Home />);
    const filter = screen.getByRole("checkbox",{name:"High ABV (> 6/0%)"})
    expect(filter).toBeInTheDocument;
    expect(filter).not.toBeChecked;
})
test('check state for checkbox 1', () => {
    render(<Home />);
    const filter = screen.getByRole("checkbox",{name:"High ABV (> 6/0%)"})
    expect(filter).toBeInTheDocument;
    expect(filter).not.toBeChecked;
    userEvent.click(filter);
    expect(filter).toBeChecked;
})

test('renders FilterList checkbox 2', () => {
    render(<Home />);
    const filter = screen.getByRole("checkbox",{name:"Acidic (ph < 4)"})
    expect(filter).toBeInTheDocument;
})
test('default state for checkbox 2', () => {
    render(<Home />);
    const filter = screen.getByRole("checkbox",{name:"Acidic (ph < 4)"})
    expect(filter).toBeInTheDocument;
    expect(filter).not.toBeChecked;
})
test('check state for checkbox 2', () => {
    render(<Home />);
    const filter = screen.getByRole("checkbox",{name:"Acidic (ph < 4)"})
    expect(filter).toBeInTheDocument;
    expect(filter).not.toBeChecked;
    userEvent.click(filter);
    expect(filter).toBeChecked;
})

test('renders FilterList checkbox 3', () => {
    render(<Home />);
    const filter = screen.getByRole("checkbox",{name:"Classic Range"})
    expect(filter).toBeInTheDocument;
})
test('default state for checkbox 3', () => {
    render(<Home />);
    const filter = screen.getByRole("checkbox",{name:"Classic Range"})
    expect(filter).toBeInTheDocument;
    expect(filter).not.toBeChecked;
})
test('check state for checkbox 3', () => {
    render(<Home />);
    const filter = screen.getByRole("checkbox",{name:"Classic Range"})
    expect(filter).toBeInTheDocument;
    expect(filter).not.toBeChecked;
    userEvent.click(filter);
    expect(filter).toBeChecked;
})
