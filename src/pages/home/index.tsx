import React from "react";

type Props = {
    id: string;
}

const BoardContainer: React.FC<Props> = () => {

  React.useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks')
    .then(response => response.json())
    .then(data => console.log(data));
  }, [])

  return (
    <React.Fragment>
        Hello World
    </React.Fragment>
  )
}

export default BoardContainer;
