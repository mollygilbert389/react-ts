import { Footer } from "../../components";
import { render, screen } from "@testing-library/react";

describe("<Footer/>", () => {
    it("shows the footer", () => {
        render(<Footer />);
        expect(screen.getByLabelText(/footer/)).toBeInTheDocument()
    })
})