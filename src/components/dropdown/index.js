import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ options=[], onSelect= () => {}, defaultName= "" }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef(null);


  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setOpen((prev)=> !prev)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={() => setOpen((prev)=> !prev)}>
        {selectedOption || defaultName}
      </button>
      {isOpen && <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default Dropdown;
