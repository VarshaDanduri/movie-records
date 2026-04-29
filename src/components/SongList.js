import { jsx as _jsx } from "react/jsx-runtime";
import ListGroup from "react-bootstrap/ListGroup";
import { PlaySong } from "./PlaySong";
export function SongList({ songs }) {
    return (_jsx(ListGroup, { as: "ol", numbered: true, children: songs.map((song) => (_jsx(ListGroup.Item, { as: "li", className: "d-flex align-items-start", children: _jsx(PlaySong, { song: song }) }, song.id))) }));
}
