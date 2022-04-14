import { Title } from "../../components";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as titleStories from "../../stories/components/Title.stories";

const { JumbotornTitle, BasicTitle } = composeStories(titleStories);

describe("<Title />", () => {
  it("will render the title component", () => {
    render(<Title title={"title"} jumobtron={false} />)
    expect(screen.getByLabelText(/title/)).toBeInTheDocument()
  });

  it("will render the basic title component", () => {
    render(<BasicTitle title={"title"} jumobtron={false} />)
    expect(screen.getByLabelText(/title/)).toHaveStyle({ border: "none" })
  });

  it("will render the jumbotron title component", () => {
    render(<JumbotornTitle title={"title"} jumobtron={true} />)
    expect(screen.getByLabelText(/title/)).toHaveStyle({ backgroundColor: "green" })
  });
});