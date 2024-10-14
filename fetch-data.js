document.addEventListener('DOMContentLoaded', () => {
    // Asynchronous function to fetch user data
    async function fetchUserData() {
        // API URL to fetch user data from
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the element where the data will be displayed
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);

            // Check if the response is OK
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Convert the response to JSON
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create an unordered list element
            const userList = document.createElement('ul');

            // Loop through each user and create a list item for each one
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the list item text to the user's name
                userList.appendChild(listItem);   // Append the list item to the unordered list
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);

        } catch (error) {
            // In case of error, clear the content and show an error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching data:', error);
        }
    }

    // Invoke the fetchUserData function when the DOM content has loaded
    fetchUserData();
});
