import { Card, CardProps } from "../../components";
import { template } from "..";

const CardWrapper: React.FC<CardProps> = ({ ...props}) => {
  const handleOnClick = () => {
    console.log("click")
  }
  return (
    <Card {...props} onClick={() => handleOnClick()} />
  )
}

export default {
  title: "Components/Card",
  component: Card
};

const story = template(CardWrapper);

export const SmallCard = story({
  size: "small",
  subPhoto: false
});

export const MediumCard = story({
  size: "medium",
  subPhoto: false
});

export const LargeCard = story({
  size: "large",
  subPhoto: false
});

