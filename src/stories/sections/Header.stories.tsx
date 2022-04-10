import { Header } from "../../components";
import { template } from "..";

export default {
  title: "Sections/Header",
  component: Header
}

const story = template(Header);

export const PrimaryHeader = story()