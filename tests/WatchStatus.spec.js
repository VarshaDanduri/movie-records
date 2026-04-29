import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { WatchStatus } from "../src/components/WatchStatus";
describe("WatchStatus component", () => {
    const seenWatchStatus = {
        seen: false,
        liked: false,
        when: null,
    };
    it("Renders the watch status", () => {
        render(_jsx(WatchStatus, { watched: seenWatchStatus }));
    });
    it("Renders the watch status", () => {
        render(_jsx(WatchStatus, { watched: seenWatchStatus }));
        const watchedText = screen.getByText(/Watched/i);
        expect(watchedText).toBeInTheDocument();
    });
    it("Renders the watch status", () => {
        render(_jsx(WatchStatus, { watched: {
                seen: false,
                liked: false,
                when: null,
            } }));
        const watchedText = screen.getByText(/Not yet watched/i);
        expect(watchedText).toBeInTheDocument();
    });
});
