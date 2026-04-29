import type { Watch } from "../interfaces/watch";
export declare function RecordControls({ watched, changeEditing, setMovieWatched, }: {
    watched: Watch;
    changeEditing: () => void;
    setMovieWatched: (s: boolean, l: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
