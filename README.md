## Food Ordering System(Frontend)

**Description:**

This is a full-stack Food Ordering System, where users can browse and order food from a variety of options, while admins can manage the food menu, view orders, and update their status. It also integrates Stripe for payment processing and features JWT-based authentication and authorization for secure access.

**Key Features:**

**User Panel:** Browse food categories, add to cart, place orders, view order history, and make payments using Stripe.

**Admin Panel:** Manage food items (add, remove), view orders, and update order status.

**Payment Integration:** Stripe is integrated for secure payment transactions.

**Authentication:** JWT-based token authentication for secure user login and admin access.

**Responsive Design:** Fully responsive UI built with React and TailwindCSS.

**Tech Stack:**

**React** - For building the user interface.

**TailwindCSS** - For styling the app.

**Axios** - For making HTTP requests to the backend.

**React Router** - For routing between different pages.

**React Toastify** - For displaying notifications and alerts.

## Features

**User Panel:**

View food items categorized by type (e.g., Salad, Rolls, Desserts).
Add items to the cart and proceed to checkout.
Secure payment integration using Stripe.
Track order status and view order history.

![Screenshot (143)](https://github.com/user-attachments/assets/84fa0ae3-cbd2-4045-b221-b5c15cfc195f)


**Cart Section :**

![Screenshot (144)](https://github.com/user-attachments/assets/11d53ad7-6ec3-4a07-9fc7-62eb37f5a61c)



**Delivery Section :**

![Screenshot (147)](https://github.com/user-attachments/assets/822944e3-c0f6-4534-aec4-9d5e3f8da2d4)



**Payment Processing Using Stripe:**

![Screenshot (148)](https://github.com/user-attachments/assets/f76cc76c-3e48-4df4-8963-f281d8314a85)



**My Orders Section :**


![Screenshot (149)](https://github.com/user-attachments/assets/63d1713c-4844-4f33-8555-cdbe66e7e294)



**Admin Panel:**

Add, remove, and update food items in the menu.
Manage food categories, prices, and descriptions.
View all orders with options to update the order status.

![Screenshot (146)](https://github.com/user-attachments/assets/9c5c5bfc-cb59-45b2-b26e-6bca5e836288)


## Food Ordering System(Backend)

**Description:**

The backend provides RESTful APIs for user authentication, managing food items, processing orders, and integrating payment systems like Stripe. It uses JWT for user authentication and Multer for handling file uploads (e.g., food images).

**Tech Stack:**

**Node.js** - Backend runtime environment.

**Express.js** - For handling HTTP requests.

**MongoDB** - For storing food items, orders, and user data.

**JWT** - For secure user authentication.

**Stripe API** - For processing payments.

**Multer** - For handling file uploads (food images).

## Features:

**User Authentication:**

Sign up, login, and JWT token-based authentication for users.
Secure authentication for admin routes.

**Food Management:**

Admins can add, remove, and update food items.
Images are uploaded using Multer and served through the backend.

**Order Management:**

Users can place orders and track order status.
Admins can update order statuses (e.g., “Food Processing”, “Out For Delivery”).

**Payment Integration:**

Stripe is integrated to handle payments securely.
