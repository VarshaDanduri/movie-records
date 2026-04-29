import { jsxs as _jsxs } from "react/jsx-runtime";
export function MovieRating({ rating }) {
    const stars = Math.ceil(rating / 2);
    const filledStars = "⭐".repeat(stars);
    const emptyStars = "✰".repeat(5 - stars);
    return (_jsxs("span", { children: [filledStars, emptyStars] }));
}
