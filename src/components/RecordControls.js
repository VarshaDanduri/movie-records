import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "react-bootstrap/Button";
export function RecordControls({ watched, changeEditing, setMovieWatched, }) {
    return (_jsxs("div", { children: [watched.seen ?
                _jsx(Button, { className: "float-right me-3", size: "sm", onClick: () => setMovieWatched(false, watched.liked), children: "Mark as unwatched" })
                : _jsx(Button, { className: "float-right me-3", size: "sm", onClick: () => setMovieWatched(true, watched.liked), children: "Mark as watched" }), watched.seen &&
                (watched.liked ?
                    _jsx(Button, { className: "float-right me-3", size: "sm", variant: "success", onClick: () => setMovieWatched(true, false), children: "Liked" })
                    : _jsx(Button, { className: "float-right me-3", size: "sm", variant: "warning", onClick: () => setMovieWatched(true, true), children: "Not liked" })), _jsx(Button, { className: "float-right", size: "sm", onClick: changeEditing, children: "Edit" })] }));
}
