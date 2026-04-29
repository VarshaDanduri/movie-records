import { jsx as _jsx } from "react/jsx-runtime";
export function PlaySong({ song }) {
    return (_jsx("iframe", { src: `https://open.spotify.com/embed?uri=spotify:track:${song.id}`, frameBorder: "0", height: "80", width: "350", className: "ms-4" }));
}
