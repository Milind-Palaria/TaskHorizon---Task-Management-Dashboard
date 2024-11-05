import React, { useState } from 'react';

import './Navbar.css';


const Navbar = (props) => {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    function handleGroupingToggle(e) {
        setIsFilterVisible(!isFilterVisible);
        if (e.target.value !== undefined) {
            props.handleGroupValue(e.target.value);
        }
    }

    function handleSortingToggle(e) {
        setIsFilterVisible(!isFilterVisible);
        if (e.target.value !== undefined) {
            props.handleOrderValue(e.target.value);
        }
    }

  return (
    <>
    <section className="navbar">
        <div className="navbar-container">
            <div>
                <div className="navbar-display-btn" onClick={handleGroupingToggle}>
                    <div className="navbar-display-icon navbar-filter-icon">
                        <img src="/assets/Display.svg" alt="icon" />
                    </div>
                    <div className="navbar-display-text">
                        Display
                    </div>
                    <div className="navbar-display-icon navbar-dropdown-icon">
                        <img src="/assets/down.svg" alt="icon" />
                    </div>
                </div>
                <div className={isFilterVisible ? "navbar-display-dropdown navbar-dropdown-visible" : "navbar-display-dropdown"}>
                    <div className="navbar-filters">
                        <div className="navbar-dropdown-category">
                            Grouping
                        </div>
                        <div className="navbar-dropdown-selector">
                            <select value={props.groupValue} onChange={handleGroupingToggle} className="navbar-selector" name="grouping" id="">
                                <option value="status">Status</option>
                                <option value="user">User</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>
                    </div>
                    <div className="navbar-filters">
                        <div className="navbar-dropdown-category">
                            Ordering
                        </div>
                        <div className="navbar-dropdown-selector">
                            <select value={props.orderValue} onChange={handleSortingToggle} className="navbar-selector" name="ordering" id="">
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default Navbar
