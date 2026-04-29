import { jsx as _jsx } from "react/jsx-runtime";
export function WatchStatus({ watched }) {
    return (_jsx("div", { children: _jsx("em", { children: watched.seen ? "Watched" : "Not yet watched" }) }));
}
