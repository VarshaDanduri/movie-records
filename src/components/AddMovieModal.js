import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { EditableSongList } from "./EditableSongList";
export function AddMovieModal({ show, handleClose, addMovie, }) {
    const [id, setId] = useState("");
    const [songs, setSongs] = useState([]);
    function saveChanges() {
        addMovie({
            id: id,
            title: "",
            rating: 0,
            description: "",
            released: 0,
            soundtrack: songs.map((song) => ({ id: song, name: "", by: "" })),
            watched: {
                seen: false,
                liked: false,
                when: null,
            },
        });
        handleClose();
    }
    return (_jsxs(Modal, { show: show, onHide: handleClose, animation: false, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "Add New Movie" }) }), _jsxs(Modal.Body, { children: [_jsxs(Form.Group, { controlId: "formMovieId", as: Row, children: [_jsx(Form.Label, { column: true, sm: 3, children: "YouTube ID:" }), _jsx(Col, { children: _jsx(Form.Control, { value: id, onChange: (event) => setId(event.target.value) }) })] }), _jsx("span", { children: "Spotify IDs:" }), _jsx(EditableSongList, { songs: songs, setSongs: setSongs })] }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "secondary", onClick: handleClose, children: "Close" }), _jsx(Button, { variant: "primary", onClick: saveChanges, children: "Save Changes" })] })] }));
}
