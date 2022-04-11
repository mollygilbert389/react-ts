import React from "react";

interface CardProps {
  size: "small" | "medium" | "large";
  subPhoto: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: number;
  height?: number;
  type?: string;
}

function getSize(size: string) {
  switch(size) {
    case "small": 
      return 100
    case "medium": 
      return 200
    case "large": 
      return 500
  }
}

const Card: React.FC<CardProps> = ({
  size="small",
  subPhoto=false
}) => {
  return (
    <React.Fragment>
      {!subPhoto ? (
          <button aria-label="card" style={{ width: getSize(size), height: getSize(size), backgroundColor: "white", borderRadius: 6 }}>
          I am card!
        </button>
      ) : (
        <button>
          <div>
            First Image
              <div>
                other images
              </div>
          </div>
        </button>
      )}
    </React.Fragment>
  )
}

export {
  Card,
  CardProps
}
