 // header.js
function createHeader() {
    // Create header elements
    const headerContainer = document.getElementById('headerContainer');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const title = document.createElement('h1');

    // Set content and attributes
    logo.textContent = 'Logo';
    title.textContent = 'Header Component';

    // Styling (you can add more styles or use CSS classes)
    header.style.backgroundColor = '#333';
    header.style.color = '#fff';
    header.style.padding = '10px';
    logo.style.fontSize = '24px';
    logo.style.fontWeight = 'bold';

    // Append elements to the header
    header.appendChild(logo);
    header.appendChild(title);

    // Append the header to the container
    headerContainer.appendChild(header);
}

// Call the function to create the header when the page loads
document.addEventListener('DOMContentLoaded', createHeader);
