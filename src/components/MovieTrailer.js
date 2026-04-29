import { jsx as _jsx } from "react/jsx-runtime";
export function MovieTrailer({ id }) {
    return (_jsx("iframe", { width: "642", height: "361", src: `https://www.youtube.com/embed/${id}`, title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }));
}
