import React from 'react'
import { Link,NavLink} from "react-router-dom";

const totalpages = [
  { pagename: "", headerText: "Home" },
  { pagename: "About", headerText: "About" },
  { pagename: "Contact", headerText: "Contact" },
  { pagename: "Git", headerText: "GitHub" },
];
function Navbar() {    
  return (
    <nav className="flex gap-6 text-lg font-semibold items-center justify-center">
      {totalpages.map((page, index) => (
        <NavLink
          key={index}
          to={`/${page.pagename.toLowerCase()}`}
          className={({ isActive }) => `hover:text-orange-700 ${isActive?"text-orange-700":"text-white"}`}
        >
          {page.headerText}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar