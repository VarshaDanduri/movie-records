import type { Movie } from "../interfaces/movie";
export declare function AddMovieModal({ show, handleClose, addMovie, }: {
    show: boolean;
    handleClose: () => void;
    addMovie: (newMovie: Movie) => void;
}): import("react/jsx-runtime").JSX.Element;
