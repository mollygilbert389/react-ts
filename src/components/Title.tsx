import React from "react";

type TitleProps = {
  title: string;
  jumobtron: boolean;
};

const Title: React.FC<TitleProps>= ({ title, jumobtron }) => {
  return (
    <div aria-label="title" style={{ fontSize: 30, fontFamily: "Verdana, sans-serif", border: jumobtron ? "black 8" : "none", borderRadius: jumobtron ? 8 : "none", backgroundColor: jumobtron ? "green" : "none", color: jumobtron ? "white" : "black", padding: 30 }}>
      <strong>{title.toUpperCase()}</strong>
    </div>
  );
};

export default Title;