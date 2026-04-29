import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { AddMovieModal } from "./components/AddMovieModal";
import ghibli from "./data/ghibli_movies.json";
import Button from "react-bootstrap/Button";
import ApplicationSketch from "./assets/movie_records_sketch.png";
const MOVIES = ghibli.map((movie) => ({
    ...movie,
    watched: { seen: false, liked: false, when: null },
}));
function watchMovie(movie, seen, liked) {
    return {
        ...movie,
        watched: {
            ...movie.watched,
            seen: seen,
            liked: liked,
            when: new Date().toLocaleString(),
        },
    };
}
function App() {
    const [movies, setMovies] = useState(MOVIES);
    const [showAddModal, setShowAddModal] = useState(false);
    function setMovieWatched(id, seen, liked) {
        setMovies(movies.map((movie) => id === movie.id ? watchMovie(movie, seen, liked) : movie));
    }
    function editMovie(id, newMovie) {
        setMovies(movies.map((movie) => (movie.id === id ? newMovie : movie)));
    }
    function deleteMovie(id) {
        setMovies(movies.filter((movie) => movie.id !== id));
    }
    function addMovie(newMovie) {
        const existing = movies.find((movie) => movie.id === newMovie.id);
        if (existing === undefined) {
            setMovies([...movies, newMovie]);
        }
    }
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
    return (_jsxs("div", { className: "App", children: [_jsx("header", { className: "App-header", children: "Movie Records" }), _jsx("div", { children: _jsx(MovieList, { movies: movies, editMovie: editMovie, deleteMovie: deleteMovie, setMovieWatched: setMovieWatched }) }), _jsxs("div", { children: [_jsx(Button, { variant: "success", className: "m-4", onClick: handleShowAddModal, children: "Add New Movie" }), _jsx(AddMovieModal, { show: showAddModal, handleClose: handleCloseAddModal, addMovie: addMovie })] }), _jsxs("div", { className: "mb-4", children: [_jsx("div", { className: "mb-2", children: _jsx("span", { children: "Application Sketch:" }) }), _jsx("img", { src: ApplicationSketch, style: {
                            width: "400px",
                            height: "auto",
                            margin: "20px 30px",
                        } })] })] }));
}
export default App;
