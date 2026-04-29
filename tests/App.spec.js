import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";
describe("App Component", () => {
    test("renders the course name somewhere", () => {
        render(_jsx(App, {}));
        const linkElement = screen.getByText(/Movie Records/i);
        expect(linkElement).toBeInTheDocument();
    });
    test("should add a movie", () => {
        render(_jsx(App, {}));
        const initialCount = screen.queryAllByRole('listitem').length;
        const addMovie = screen.getByRole('button', { name: /add new movie/i });
        fireEvent.click(addMovie);
        const saveChanges = screen.getByRole('button', { name: /save changes/i });
        fireEvent.click(saveChanges);
        const updatedMovies = screen.getAllByRole('listitem').length;
        expect(updatedMovies).toBe(initialCount + 1);
    });
    test("when pressing mark as watched, not liked shows up", () => {
        render(_jsx(App, {}));
        const watchedButtons = screen.getAllByRole('button', { name: /mark as watched/i });
        fireEvent.click(watchedButtons[0]);
        const notlikedButton = screen.getByRole('button', { name: /not liked/i });
        expect(notlikedButton).toBeInTheDocument();
    });
    test("when pressing mark as watched, mark as unwatched there", () => {
        render(_jsx(App, {}));
        const watchedButtons = screen.getAllByRole('button', { name: /mark as watched/i });
        fireEvent.click(watchedButtons[0]);
        const markAsUnwatched = screen.getByRole('button', { name: /mark as unwatched/i });
        expect(markAsUnwatched).toBeInTheDocument();
    });
    test("pressing not liked changes to liked", () => {
        render(_jsx(App, {}));
        const watchedButtons = screen.getAllByRole('button', { name: /mark as watched/i });
        fireEvent.click(watchedButtons[0]);
        const notlikedButton = screen.getByRole('button', { name: /not liked/i });
        fireEvent.click(notlikedButton);
        const likedButton = screen.getByRole('button', { name: /^liked$/i });
        expect(likedButton).toBeInTheDocument();
    });
    test("pressing delete on a movie reduces the length", () => {
        render(_jsx(App, {}));
        const initialCount = screen.queryAllByRole('listitem').length;
        const editMovie = screen.getAllByRole('button', { name: /edit/i });
        //only press the first one
        fireEvent.click(editMovie[0]);
        const deleteButton = screen.getAllByRole('button', { name: /edit/i });
        fireEvent.click(deleteButton[0]);
        const finalCount = screen.queryAllByRole('listitem').length;
        expect(finalCount).toBe(initialCount - 1);
    });
});
