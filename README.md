A brief description:

The project starts with setting up the routing using BrowserRouter from React Router and a Provider component for displaying toast notifications.

There are two main pages in the application: HOME and CART.

HOME Page: Makes an API call to fetch product data using useEffect. It manages loading state and stores the fetched products using useState. The fetched products are then mapped into individual product components for display. If no data is found, a message indicating the absence of products is shown.

CART Page: Utilizes Redux for managing the shopping cart state. It fetches the cart items using useSelector and calculates the total amount using useState. The cart items are mapped into CartItem components, displaying each item's image, title, description, price, and a delete button to remove items from the cart. If the cart is empty, a message is displayed with a link back to the HOME page.

Redux setup includes defining a cartSlice to manage adding and removing products from the cart. The store is configured with this reducer using configureStore.

Components like CartItem and Product are created to render individual items in the cart and product listings, respectively. These components utilize Redux's useDispatch to dispatch actions for adding or removing items from the cart.

The PRODUCTS page displays a list of products, each with an option to add or remove them from the cart. It interacts with the cart state using Redux and dispatches actions to modify the cart state.

Overall, this project demonstrates the use of React for building a user interface, Redux for state management, and React Router for navigation, providing a seamless shopping experience with functionalities like adding/removing items from the cart and browsing product listings.
