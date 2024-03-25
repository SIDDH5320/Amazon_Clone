# Amazon Clone
An Amazon clone built using React would typically mimic the user interface and functionality of the original Amazon website. Here's a general description of what such a clone might include:

Homepage: The homepage would display featured products, promotions, and categories similar to Amazon's layout. It would have a search bar at the top for users to search for products.

Product Listings: Users can browse through various categories and subcategories of products. Each product listing would include a product image, title, price, and ratings. Users can filter and sort products based on different criteria such as price range, brand, or customer ratings.

Product Detail Page: Clicking on a product would take the user to a detailed page showing more information about the product, including multiple images, detailed description, specifications, customer reviews, and related products.

User Authentication: Users can create accounts, sign in, and sign out. This feature allows users to track their orders, save items to their wishlist, and manage their account information.

Shopping Cart: Users can add products to their shopping cart and proceed to checkout. The shopping cart would display all the items added by the user along with their quantities and total prices.

Checkout Process: The checkout process would involve entering shipping and billing information, selecting a payment method, and reviewing the order before confirming it.

## Demo

You can find the Demo [here](https://challenge-beee1.web.app/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Firebase Deployemnt

### Application deployment

```bash
firebase deploy --only hosting
```

### Functions deployment

```bash
cd functions
firebase deploy --only functions
```
