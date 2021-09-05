import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "auto",
    width: "100%",
  };

  return (
    <footer className="bg-dark text-light py-1" style={footerStyle}>
      <p className="text-center">
        copyright &copy; mytodolist.com | made by Siya
      </p>
    </footer>
  );
};
