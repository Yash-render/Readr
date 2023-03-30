# Readr

A complete e-commerce app built on the MERN stack that sells developer books.

## Project Setup

```javascript
1. npm install
2. make a .env file with the following keys: DATABASE, JWT_SECRET, BRAINTREE_MERCHANT_ID, BRAINTREE_PUBLIC_KEY, BRAINTREE_PRIVATE_KEY, EMAILID, EMAILPASSWORD, NAME
3. cd client
4. npm install
5. cd ..
6. npm run dev
7. Open the project on 127.0.0.1:3010
```

## Features

- User signup/signin with welcome email
- Create Category and Product by Admin
- CRUD operations on products
- Payment gateway (Braintree and Paypal)
- View Product and Add to cart for a user
- Update Profile for user
- Checkout using credit card and paypal (using Braintree as the payment gateway)
- Advanced search filters based on category and price range
- Books also categorized upon arrival date and bestsellers
- Order confirmation through email
- The admin can change the order status

## Technology Stack

##### MERN stack

- MongoDB
- Express.js
- React.js
- Node.js
