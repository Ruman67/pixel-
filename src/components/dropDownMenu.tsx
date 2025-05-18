import React, { useState } from 'react';
import './DropdownMenu.css';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Dropdown");

  const items = ["firstitem 1", "seconditem 2", "Thirditem 3"];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: string) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selected}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
