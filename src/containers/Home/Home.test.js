import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";
import Navbar from "../../components/Navbar/Navbar";
import CardList from "../../components/CardList/CardList";


describe('Home', () => {
    test('renders Home container', () => {
        render(<Home />);
    })
})
describe('Navbar', () => {
    test('renders Navbar component', () => {
        render(<Navbar />);
        expect(screen.getByText('SearchTerm')).toBeInTheDocument();
    })
})
describe('Navbar', () => {
    test('renders CardList component', () => {
        render(<CardList />);
        // screen.getByText("SearchTerm")
    })
})