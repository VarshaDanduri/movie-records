import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export function EditableSongList({ songs, setSongs, }) {
    function addSong() {
        setSongs([...songs, ""]);
    }
    function editSong(index, newValue) {
        const copiedSongs = [...songs];
        copiedSongs[index] = newValue;
        setSongs(copiedSongs);
    }
    function deleteSong(index) {
        const copiedSongs = [...songs];
        copiedSongs.splice(index, 1);
        setSongs(copiedSongs);
    }
    return (_jsxs("div", { children: [_jsx(Button, { size: "sm", variant: "success", onClick: addSong, children: "Add Song" }), _jsx(ListGroup, { as: "ol", numbered: true, children: songs.map((song, index) => (_jsx(ListGroup.Item, { as: "li", className: "d-flex align-items-start", children: _jsx("div", { className: "ms-3 me-auto", children: _jsxs(Form.Group, { controlId: "formMovieName", as: Row, children: [_jsx(Col, { sm: 11, children: _jsx(Form.Control, { value: song, onChange: (event) => editSong(index, event.target.value) }) }), _jsx(Col, { sm: 1, children: _jsx(Button, { variant: "danger", size: "sm", onClick: () => deleteSong(index), children: "\u274C" }) })] }) }) }, index))) })] }));
}
