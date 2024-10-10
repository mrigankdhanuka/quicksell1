import React, { useState } from "react";
import DisplayLogo from "../assets/Display.svg";
import DownLogo from "../assets/down.svg";

const Navbar = ({ groupBy, orderBy, onGroupByChange, onOrderByChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGroupByChange = (event) => {
    onGroupByChange(event.target.value);
    setIsDropdownOpen(false);
  };

  const handleOrderByChange = (event) => {
    onOrderByChange(event.target.value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="NavContainer">
      <div className="NavDisTab" onClick={handleDropdownToggle}>
        <img src={DisplayLogo} alt="Display Logo" />
        <div>Display</div>
        <img src={DownLogo} alt="Down Arrow" />
      </div>

      {isDropdownOpen && (
        <div className="NavAbsolute">
          <div className="NavAbsolute1">
            <div>Grouping</div>
            <div>
              <select
                className="selectCustom"
                value={groupBy}
                onChange={handleGroupByChange}
              >
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>

          <div className="NavAbsolute1">
            <div>Ordering</div>
            <div>
              <select
                className="selectCustom"
                value={orderBy}
                onChange={handleOrderByChange}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
