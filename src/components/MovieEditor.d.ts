import type { Movie } from "../interfaces/movie";
export declare function MovieEditor({ changeEditing, movie, editMovie, deleteMovie, }: {
    changeEditing: () => void;
    movie: Movie;
    editMovie: (id: string, newMovie: Movie) => void;
    deleteMovie: (id: string) => void;
}): import("react/jsx-runtime").JSX.Element;
