import { Link, useMatch } from "react-router-dom";
import { FC } from "react";

const CustomLink: FC<{ to: string }> = ({ to, children }) => {
  const match = useMatch(to);
  return (
    <Link to={to} style={{ color: match ? "#ffe066" : "white" }}>
      {children}
    </Link>
  );
};

export default CustomLink;
