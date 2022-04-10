import { ComponentStory } from "@storybook/react";

type Component<A> = React.FunctionComponent<A>;

export function template<A>(component: Component<A>) {
  const result: ComponentStory<Component<A>> = ((args: A) => ( component(args) ));

  return (args: A = {} as A): ComponentStory<Component<A>> => {
    const story = result.bind({});
    story.args = args;
    return story;
  };
}