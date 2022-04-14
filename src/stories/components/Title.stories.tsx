import { Title } from "../../components";
import { template } from "..";

export default {
  title: "Components/Title",
  component: Title
}

const story = template(Title);

export const BasicTitle = story({
  title: "I am title",
  jumobtron: false
})

export const JumbotornTitle = story({
  title: "I am title",
  jumobtron: true
})