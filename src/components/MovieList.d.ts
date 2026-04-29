import type { Movie } from "../interfaces/movie";
export declare function MovieList({ movies, deleteMovie, editMovie, setMovieWatched, }: {
    movies: Movie[];
    deleteMovie: (id: string) => void;
    editMovie: (id: string, newMovie: Movie) => void;
    setMovieWatched: (id: string, s: boolean, l: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
