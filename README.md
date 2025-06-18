# React + Vite: RentalCar🚘 Frontend

## General Information
This project is the frontend part of the "RentalCar" web application, designed for car rentals. It's built to interact with the backend API, available at: [https://car-rental-api.goit.global/api-docs/](https://car-rental-api.goit.global/api-docs/).
The main goal of this project is to provide users with a convenient interface for viewing available cars, filtering them, adding them to favorites, and making reservations.

---
## Key Features

-   **Car Catalog View**: Displays a list of all available vehicles.
-   **Filtering**: Users can filter cars by brand, price, and mileage range. Filtering is performed on the backend.
-   **Add to Favorites**: Users can add and remove cars from their favorites list. The favorites list is stored locally in the user's browser and persists upon page refresh.
-   **Detailed Car Description**: View detailed information about each car on a separate page.
-   **Booking Form**: Ability to fill out a form to rent a selected car.
-   **Pagination**: Dynamic loading of additional car cards when clicking the "Load More" button, considering applied filters.
-   **Mileage Formatting**: Car mileage is displayed in a user-friendly format (e.g., "5 000 km").
    
---
## Technologies and Libraries

-   **Framework**: React (with Vite bundler)
-   **State Management**: Redux Toolkit
-   **Routing**: React Router
-   **HTTP Requests**: Axios
-   **Styling**: CSS Modules
-   **Form Validation**: Formik, Yup
-   **DatePicker**: react-datepicker

---
## Route Structure

-   `/` - Home page with a banner and call to action.
-   `/catalog` - Catalog page with filtering and a list of cars.
-   `/catalog/:id` - Page with a detailed description of a specific car and a booking form.

---
## Installation

To run the project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone git@github.com:olenkachovgun/RentalCar.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd rentalcar-frontend # Or the name of your project folder
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Start the project**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
After completing these steps, the application will be available in your browser at the address provided by Vite (usually `http://localhost:5173/`).

---
## Author 👩🏻‍💼

**Olena Chovgun**
