import { Link, useMatch } from "react-router-dom";
import { FC } from "react";

const CustomLink: FC<{ to: string; closeNav?: () => void }> = ({
  to,
  children,
  closeNav,
}) => {
  const match = useMatch(to);
  return (
    <Link
      onClick={closeNav}
      to={to}
      style={{ color: match ? "#ffe066" : "white" }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
