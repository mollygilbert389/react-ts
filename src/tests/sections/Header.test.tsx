import { Header } from "../../components";
import { render, screen } from "@testing-library/react";

describe("<Header/>", () => {
    it("shows the header", () => {
        render(<Header />);
        expect(screen.getByLabelText(/header/)).toBeInTheDocument();
    });
});
