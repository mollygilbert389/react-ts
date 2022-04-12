import { Footer } from "../../components";
import { template } from "..";

export default {
  title: "Sections/Footer",
	component: Footer
};

const story = template(Footer);

export const PrimaryFooter = story();
