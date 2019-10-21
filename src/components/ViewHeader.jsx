import React from "react";

export const ViewHeader = ({ image, imgAltText, title, description }) => {
  return (
    <div className="header">
      <img src={image} alt={imgAltText} />
      {title && <p className="title">{title}</p>}
      {description && <p className="description">{description}</p>}
    </div>
  );
};
