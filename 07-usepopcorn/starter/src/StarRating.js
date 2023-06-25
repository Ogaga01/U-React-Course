import React, { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const StarRating = ({ maxRating = 5, color = "#fcc419", size = 48 }) => {
  const [rating, setRating] = useState("");
  const [tempRating, setTempRating] = useState("");

  const handleStarClick = (i) => {
    setRating(i + 1);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => {
          return (
            <Star
              key={i}
              onRate={() => handleStarClick(i)}
              onHoverIn={() => {
                setTempRating(i + 1);
              }}
              onHoverOut={() => {
                setTempRating("");
              }}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              color={color}
              size={size}
            />
          );
        })}
      </div>
      <p style={textStyle}>{tempRating || rating}</p>
    </div>
  );
};

export default StarRating;
