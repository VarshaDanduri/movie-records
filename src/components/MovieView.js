import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MovieRating } from "./MovieRating";
import { MovieTrailer } from "./MovieTrailer";
import { SongList } from "./SongList";
import { RecordControls } from "./RecordControls";
import { MovieEditor } from "./MovieEditor";
export function MovieView({ movie, deleteMovie, editMovie, setMovieWatched, }) {
    const [editing, setEditing] = useState(false);
    function changeEditing() {
        setEditing(!editing);
    }
    return (_jsxs(_Fragment, { children: [editing && (_jsx(MovieEditor, { changeEditing: changeEditing, movie: movie, editMovie: editMovie, deleteMovie: deleteMovie })), _jsx("div", { style: { display: editing ? "none" : "block" }, children: _jsxs(Container, { children: [_jsx(Row, { children: _jsxs(Col, { children: [_jsx("h3", { children: movie.title }), _jsx(RecordControls, { setMovieWatched: (seen, liked) => setMovieWatched(movie.id, seen, liked), watched: movie.watched, changeEditing: changeEditing }), _jsx(MovieRating, { rating: movie.rating }), _jsxs("i", { children: [" Released ", movie.released] })] }) }), _jsxs(Row, { children: [_jsxs(Col, { children: [_jsx("p", { children: movie.description }), _jsx(SongList, { songs: movie.soundtrack })] }), _jsx(Col, { children: _jsx(MovieTrailer, { id: movie.id }) })] })] }) })] }));
}
