Project Description and Learning

// index js 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Provider store={store}>
          <App />   
          <Toaster/>  
        </Provider>
    </BrowserRouter>

);


renders app.js

const App = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>)
};
export default App;

renders NavBar , Routes to pages HOME and CART

I created 2 pages now HOME and CART

HOME 

API call take response via useEffect 
define useStates of loading and posts
if posts found map them into product 
else no data found 

CART

fetch from useSelector redux 
useState for total amount
map the cart items to CartItems and summary of cart if no items display cart empty and NavLink to home(Router)

then 
render NavBar (components)
loading Spinner (components)

then create Redux cartSlice to add and remove products
redux => cartSlice add and remove state
export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;

Then redux store state for the reducer 

export const store = configureStore({
    reducer: {
       // Accessing the reducer property of the CounterSlice
      cart : CartSlice.reducer
    },
  })


once these are defined then create inside components
cartItem and Product

CARTITEM displays items in cart

1 useDispatch REDUX for reducer function

2 then use that dispatch mapped to a function to delete items from the cart 

3 then render a DIV image title description and price and a delete button which onclick takes the reducer from useDispatch and removes them using the slice method stored in Store.js

PRODUCTS page

define a state for the cart via useSelector from redux

useDispatch method called on add and remove from the cart from slice => store of the redux

then render the div with title description and image of the product

then render a button on add to cart or remove item with the functions created for it and useDispatch applied on it 

this renders in HOME and then HOME is set via ROUTE in APP and then this APP renders in Index.js
