##Food Ordering System(Frontend)

Description

This is a full-stack Food Ordering System, where users can browse and order food from a variety of options, while admins can manage the food menu, view orders, and update their status. It also integrates Stripe for payment processing and features JWT-based authentication and authorization for secure access.

Key Features:

User Panel: Browse food categories, add to cart, place orders, view order history, and make payments using Stripe.
Admin Panel: Manage food items (add, remove), view orders, and update order status.
Payment Integration: Stripe is integrated for secure payment transactions.
Authentication: JWT-based token authentication for secure user login and admin access.
Responsive Design: Fully responsive UI built with React and TailwindCSS.

Tech Stack

React - For building the user interface.
TailwindCSS - For styling the app.
Axios - For making HTTP requests to the backend.
React Router - For routing between different pages.
React Toastify - For displaying notifications and alerts.

Features

User Panel:

View food items categorized by type (e.g., Salad, Rolls, Desserts).
Add items to the cart and proceed to checkout.
Secure payment integration using Stripe.
Track order status and view order history.

![Screenshot (143)](https://github.com/user-attachments/assets/c110a976-658e-4d37-a24d-332d34c1fc55)

Cart Section :

![Screenshot (144)](https://github.com/user-attachments/assets/21bdbe70-8594-4f9f-a664-7bc93cbc8559)

Delivery Section :

![Screenshot (147)](https://github.com/user-attachments/assets/b6201386-0e68-4f69-886b-39884f4b4a7b)

Payment Processing Using Stripe:

![Screenshot (148)](https://github.com/user-attachments/assets/a9b8902f-f51f-4fb7-83f2-4d5984ebdc98)

My Orders Section :

![Screenshot (149)](https://github.com/user-attachments/assets/02e87c32-4a5a-4d5b-86d5-2d5233df6a48)


Admin Panel:

Add, remove, and update food items in the menu.
Manage food categories, prices, and descriptions.
View all orders with options to update the order status.

![Screenshot (146)](https://github.com/user-attachments/assets/9c5c5bfc-cb59-45b2-b26e-6bca5e836288)

Food Ordering System(Backend)

Description

The backend provides RESTful APIs for user authentication, managing food items, processing orders, and integrating payment systems like Stripe. It uses JWT for user authentication and Multer for handling file uploads (e.g., food images).

Tech Stack

Node.js - Backend runtime environment.
Express.js - For handling HTTP requests.
MongoDB - For storing food items, orders, and user data.
JWT - For secure user authentication.
Stripe API - For processing payments.
Multer - For handling file uploads (food images).

Features

User Authentication:

Sign up, login, and JWT token-based authentication for users.
Secure authentication for admin routes.

Food Management:

Admins can add, remove, and update food items.
Images are uploaded using Multer and served through the backend.

Order Management:

Users can place orders and track order status.
Admins can update order statuses (e.g., “Food Processing”, “Out For Delivery”).

Payment Integration:

Stripe is integrated to handle payments securely.
