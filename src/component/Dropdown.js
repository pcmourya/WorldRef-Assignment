import React from "react";

function Dropdown() {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        SortBy DateAdded
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <p className="dropdown-item">Date</p>
        </li>
        <li>
          <p className="dropdown-item" href="#">
            Random Date
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
