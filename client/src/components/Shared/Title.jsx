import React from "react";

const Title = ({ firstTitle, secondTitle }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold font-robotoS">
        <span className="text-secondary">{firstTitle}</span>{" "}
        <span className="text-primary">{secondTitle}</span>
      </h1>
    </div>
  );
};

export default Title;
