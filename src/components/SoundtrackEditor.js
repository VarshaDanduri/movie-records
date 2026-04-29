import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
export function SongNameEditor({ song, setSong }) {
    return (_jsx(Form.Control, { value: song.name, onChange: (event) => setSong(song.id, {
            ...song,
            name: event.target.value,
        }) }));
}
export function SongByEditor({ song, setSong }) {
    return (_jsx(Form.Control, { value: song.by, onChange: (event) => setSong(song.id, {
            ...song,
            by: event.target.value,
        }) }));
}
export function SoundtrackEditor({ songs, setSongs, }) {
    function setSong(id, newSong) {
        setSongs(songs.map((song) => (song.id === id ? newSong : song)));
    }
    return (_jsx(ListGroup, { as: "ol", numbered: true, children: songs.map((song) => (_jsx(ListGroup.Item, { as: "li", className: "d-flex align-items-start", children: _jsxs("div", { className: "ms-2 me-auto", children: [_jsx(SongNameEditor, { song: song, setSong: setSong }), _jsx(SongByEditor, { song: song, setSong: setSong })] }) }, song.id))) }));
}
