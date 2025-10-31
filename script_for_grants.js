// figure out how to deselect a button for price range
//should have a filter for date range, maybe if the schools are public or charter or private
const products = [
    { name: "American Association of Educators Grant and Scholarship", category: "general", price: 500, link: "https://www.aaeteachers.org/awards" }, // date range of application is oct 1 and march 1
    { name: "P Buckley Moss Foundation for Children's Education (Art Supplies)", category: "art", price: 1000, link: "https://www.mossfoundation.org/grants/" },
    { name: "Toshiba Grants for Grade K-5", category: "STEM", price: 1000, link: "https://www.toshiba.com/taf/k5.jsp" },
    { name: "Albert Einstein Distinguished Educator Fellowship", category: "fellowships", price: "varies", link: "https://science.osti.gov/wdts/einstein" }, // try removing $ from varies that shows in output when u have time
];


function updateResults() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategories = Array.from(document.querySelectorAll('.facet-checkbox[data-facet-type="category"]:checked')).map(cb => cb.value);
    const selectedPriceRange = document.querySelector('.facet-radio[data-facet-type="price"]:checked')?.value;

    let filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);

        let matchesPrice = true;
        if (selectedPriceRange) {
            const [min, max] = selectedPriceRange.split('-').map(Number);
            if (typeof product.price === "number") {
                matchesPrice = product.price >= min && product.price <= max;
            }
            else {
                matchesPrice = true; // for "varies" in price range
            }
        }

        return matchesSearch && matchesCategory && matchesPrice;
    });

    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    filteredProducts.forEach(product => {
        const p = document.createElement('p');

        // If the product has a link, use an <a> element inside the <p>
        if (product.link) {
            const a = document.createElement('a');
            a.href = product.link;
            a.textContent = product.name; // only the name is clickable
            a.target = "_blank"; // opens in new tab
            p.appendChild(a);
            // Add the rest of the info as text after the link
            p.appendChild(document.createTextNode(` (${product.category}, $${product.price})`));
        } else {
            p.textContent = `${product.name} (${product.category}, $${product.price})`;
        }

        resultsDiv.appendChild(p);
    });
}

// Reset button functionality
document.getElementById('resetFilters').addEventListener('click', () => {
    // Uncheck all category checkboxes
    document.querySelectorAll('.facet-checkbox[data-facet-type="category"]').forEach(cb => cb.checked = false);

    // Uncheck all price range radios
    document.querySelectorAll('.facet-radio[data-facet-type="price"]').forEach(rb => rb.checked = false);

    // Clear search bar
    document.getElementById('searchInput').value = '';

    // Update the displayed results
    updateResults();
});


document.getElementById('searchInput').addEventListener('input', updateResults);

document.querySelectorAll('.facet-checkbox[data-facet-type="category"], .facet-radio[data-facet-type="price"]').forEach(input => {
    input.addEventListener('change', updateResults);
}




);

updateResults(); // Initial display