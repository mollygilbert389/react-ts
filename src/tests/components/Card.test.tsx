import { render, screen } from "@testing-library/react";
import { Card } from "../../components";
import { composeStories } from "@storybook/testing-react";
import * as cardStories from "../../stories/components/Card.stories";

const { SmallCard, MediumCard, LargeCard } = composeStories(cardStories);

describe("<Card/>", () => {
  it("shows the card appearing", () => {
    const onClickSpy = jest.fn();
    render(<Card width={100} height={100} size={"small"} type={"basic"} subPhoto={false} onClick={onClickSpy}/>);
    expect(screen.getByLabelText(/card/)).toBeInTheDocument();
  });

  it("will display a small card", () => {
    render(<SmallCard />);
    expect(screen.getByLabelText(/card/)).toHaveStyle({
      width: '100px',
      height: '100px'
    });
  });

  it("will display a medium card", () => {
    render(<MediumCard />);
    expect(screen.getByLabelText(/card/)).toHaveStyle({
      width: '200px',
      height: '200px'
    });
  });

  it("will display a large card", () => {
    render(<LargeCard />);
    expect(screen.getByLabelText(/card/)).toHaveStyle({
      width: '500px',
      height: '500px'
    });
  });
});
