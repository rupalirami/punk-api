import Home from "./Home";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

it("should render the Home", () => {
    // triple A process
    // 1. Arrange
    render(<Home />);
    // 2. Act
    const Home = screen.getByRole("Home");
    // 3. Assert
    expect(Home).toBeInTheDocument();
});
// explore getBy, queryBy, and findBy
