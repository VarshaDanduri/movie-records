import type { Song } from "../interfaces/song";
interface SongProps {
    song: Song;
    setSong: (id: string, newSong: Song) => void;
}
export declare function SongNameEditor({ song, setSong }: SongProps): import("react/jsx-runtime").JSX.Element;
export declare function SongByEditor({ song, setSong }: SongProps): import("react/jsx-runtime").JSX.Element;
export declare function SoundtrackEditor({ songs, setSongs, }: {
    songs: Song[];
    setSongs: (songs: Song[]) => void;
}): import("react/jsx-runtime").JSX.Element;
export {};
