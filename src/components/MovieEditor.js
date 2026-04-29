import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SoundtrackEditor } from "./SoundtrackEditor";
export function MovieEditor({ changeEditing, movie, editMovie, deleteMovie, }) {
    const [title, setTitle] = useState(movie.title);
    const [releaseYear, setReleaseYear] = useState(movie.released.toString());
    const [rating, setRating] = useState((Math.ceil(movie.rating / 2) * 2).toString());
    const [description, setDescription] = useState(movie.description);
    const [soundtrack, setSoundtrack] = useState(movie.soundtrack);
    function save() {
        editMovie(movie.id, {
            ...movie,
            title: title,
            released: parseInt(releaseYear) || 0,
            rating: parseInt(rating) || 0,
            description: description,
            soundtrack: soundtrack,
        });
        changeEditing();
    }
    function cancel() {
        changeEditing();
    }
    return (_jsx(Container, { children: _jsx(Row, { children: _jsxs(Col, { children: [_jsxs(Form.Group, { controlId: "formMovieTitle", as: Row, children: [_jsx(Form.Label, { column: true, sm: 2, children: "Title:" }), _jsx(Col, { children: _jsx(Form.Control, { value: title, onChange: (event) => setTitle(event.target.value) }) })] }), _jsxs(Form.Group, { controlId: "formMovieRelease", as: Row, children: [_jsx(Form.Label, { column: true, sm: 2, children: "Release Year:" }), _jsx(Col, { children: _jsx(Form.Control, { type: "number", value: releaseYear, onChange: (event) => setReleaseYear(event.target.value) }) })] }), _jsxs(Form.Group, { controlId: "formMovieRating", as: Row, children: [_jsx(Form.Label, { column: true, sm: 2, children: "Release Year:" }), _jsx(Col, { children: _jsxs(Form.Select, { value: rating, onChange: (event) => setRating(event.target.value), children: [_jsx("option", { value: "0", children: "\u2730\u2730\u2730\u2730\u2730" }), _jsx("option", { value: "2", children: "\u2B50\u2730\u2730\u2730\u2730" }), _jsx("option", { value: "4", children: "\u2B50\u2B50\u2730\u2730\u2730" }), _jsx("option", { value: "6", children: "\u2B50\u2B50\u2B50\u2730\u2730" }), _jsx("option", { value: "8", children: "\u2B50\u2B50\u2B50\u2B50\u2730" }), _jsx("option", { value: "10", children: "\u2B50\u2B50\u2B50\u2B50\u2B50" })] }) })] }), _jsxs(Form.Group, { controlId: "formMovieDescription", as: Row, children: [_jsx(Form.Label, { column: true, sm: 2, children: "Description:" }), _jsx(Col, { children: _jsx(Form.Control, { as: "textarea", rows: 3, value: description, onChange: (event) => setDescription(event.target.value) }) })] }), _jsx(SoundtrackEditor, { songs: soundtrack, setSongs: setSoundtrack }), _jsx(Button, { onClick: save, variant: "success", className: "me-4", children: "Save" }), _jsx(Button, { onClick: cancel, variant: "warning", className: "me-5", children: "Cancel" }), _jsx(Button, { onClick: () => deleteMovie(movie.id), variant: "danger", className: "me-8", children: "Delete" })] }) }) }));
}
