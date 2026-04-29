import { jsx as _jsx } from "react/jsx-runtime";
import { MovieEditor } from "../src/components/MovieEditor";
import { render, screen, fireEvent } from "@testing-library/react";
describe("MovieEditor Component", () => {
    const mockMovie = {
        id: "test-movie-123",
        title: "The Test Movie",
        rating: 8,
        description: "A movie for testing",
        released: 2020,
        soundtrack: [{ id: "song1", name: "Test Song", by: "Test Artist" }],
        watched: {
            seen: true,
            liked: true,
            when: "2023-01-01",
        },
    };
    const mockChangeEditing = jest.fn();
    const mockEditMovie = jest.fn();
    const mockDeleteMovie = jest.fn();
    beforeEach(() => {
        jest.clearAllMocks();
        render(_jsx(MovieEditor, { changeEditing: mockChangeEditing, movie: mockMovie, editMovie: mockEditMovie, deleteMovie: mockDeleteMovie }));
    });
    test("renders MovieEditor with initial movie data", () => {
        const title = screen.getByDisplayValue("The Test Movie");
        expect(title).toBeInTheDocument();
    });
    test("edits name and saves", () => {
        const editButton = screen.getAllByRole("button", { name: /edit/i });
        fireEvent.click(editButton[0]);
        const titleName = screen.getByRole("textbox", { name: /title/i });
        fireEvent.change(titleName, { target: { value: 'Hello world' } });
        const saveButton = screen.getByRole("button", { name: /save/i });
        fireEvent.click(saveButton);
        const title = screen.getByDisplayValue("Hello World");
        expect(title).toBeInTheDocument();
    });
});
