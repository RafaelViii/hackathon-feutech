// Handles showing/hiding the search box and filter bar when icons are clicked

// Wait for DOM loaded
document.addEventListener("DOMContentLoaded", function () {
  // --- SEARCH ICON ---
  const searchBtn = document.getElementById("searchBtn");
  let searchBox = document.getElementById("navbar-search-box");
  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      // If not present, create search box and insert after searchBtn
      if (!searchBox) {
        searchBox = document.createElement("input");
        searchBox.type = "text";
        searchBox.id = "navbar-search-box";
        searchBox.placeholder = "Search...";
        searchBox.className = "navbar-search-box";
        searchBtn.parentNode.insertBefore(searchBox, searchBtn.nextSibling);
        searchBox.focus();
      } else {
        // Toggle visibility
        if (searchBox.style.display === "none" || !searchBox.style.display) {
          searchBox.style.display = "inline-block";
          searchBox.focus();
        } else {
          searchBox.style.display = "none";
        }
      }
    });
  }

  // --- DROPDOWN (FILTER) ICON ---
  const dropdownBtn = document.getElementById("dropdownBtn");
  let filterBar = document.getElementById("filter-bar");
  if (dropdownBtn) {
    dropdownBtn.addEventListener("click", function () {
      if (!filterBar) {
        // Insert filter bar HTML after dropdownBtn
        const form = document.createElement("form");
        form.className = "filter-bar";
        form.id = "filter-bar";
        form.autocomplete = "off";
        form.onsubmit = () => false;
        form.setAttribute("aria-hidden", "false");
        form.innerHTML = `
          <div class="search-group">
            <label for="search">Search:</label>
            <input type="text" id="search" placeholder="Product name...">
          </div>
          <div class="search-group">
            <label for="type">Type:</label>
            <select id="type">
              <option value="">All</option>
              <option value="craft">Craft</option>
              <option value="tech">Tech</option>
              <option value="fashion">Fashion</option>
              <option value="art">Art</option>
            </select>
          </div>
          <div class="search-group">
            <label for="range">Investment:</label>
            <select id="range">
              <option value="">Any</option>
              <option value="1">Under $100</option>
              <option value="2">$100-$500</option>
              <option value="3">Above $500</option>
            </select>
          </div>
          <div class="search-group">
            <label for="rating">Rating:</label>
            <select id="rating">
              <option value="">Any</option>
              <option value="4">4★+</option>
              <option value="3">3★+</option>
              <option value="2">2★+</option>
            </select>
          </div>
          <button class="close-filter" id="close-filter" type="button">&#8592; Hide Filter</button>
        `;
        dropdownBtn.parentNode.insertBefore(form, dropdownBtn.nextSibling);
        filterBar = form;
        // Add close handler
        const closeBtn = filterBar.querySelector("#close-filter");
        if (closeBtn) {
          closeBtn.addEventListener("click", function () {
            filterBar.style.display = "none";
          });
        }
      } else {
        // Toggle display
        filterBar.style.display = (filterBar.style.display === "none" || !filterBar.style.display) ? "block" : "none";
        filterBar.setAttribute("aria-hidden", filterBar.style.display === "none" ? "true" : "false");
      }
    });
  }
});