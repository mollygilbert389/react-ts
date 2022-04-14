import React from "react";
import { Page } from "../components";

type Props = {
    id: string;
};

const BoardContainer: React.FC<Props> = () => {

  // React.useEffect(() => {
  //   fetch('https://api.artic.edu/api/v1/artworks')
  //   .then(response => response.json())
  //   .then(data => console.log(data));
  // }, []);

  return (
    <Page>
      <div style={{ fontFamily: "Verdana, sans-serif" }}>
        I am a div inside a frame! 
      </div>
    </Page>
  );
};

export default BoardContainer;
