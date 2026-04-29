import { jsx as _jsx } from "react/jsx-runtime";
import Stack from "react-bootstrap/Stack";
import { MovieView } from "./MovieView";
export function MovieList({ movies, deleteMovie, editMovie, setMovieWatched, }) {
    return (_jsx(Stack, { gap: 3, children: movies.map((movie) => (_jsx("div", { className: "bg-light border m-2 p-2", children: _jsx(MovieView, { movie: movie, deleteMovie: deleteMovie, editMovie: editMovie, setMovieWatched: setMovieWatched }) }, movie.id))) }));
}
