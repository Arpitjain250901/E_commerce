import {createStore,combineReducers,applyMiddleware}  from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReducer, productsReducer,newReviewReducer,newProductReducer,productReducer,productReviewsReducer,reviewReducer } from "./reducers/productreducer";
import {fortgotPasswordReducer, profileReducer, userReducer,allUsersReducer ,userDetailsReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { myOrdersReducer, newOrderReducer,orderDetailsReducer,allOrdersReducer, orderReducer } from "./reducers/orderReducer";


const reducer=combineReducers({

   products:productsReducer,
   productDetail:productDetailsReducer,
    user:userReducer,
    profile:profileReducer,
    forgotPassword:fortgotPasswordReducer,
    cart:cartReducer,
    newOrder:newOrderReducer,
    myOrders:myOrdersReducer,
    
    orderDetails: orderDetailsReducer,
    newReview:newReviewReducer,
    newProduct:newProductReducer,
    product:productReducer,
   
    allOrders:allOrdersReducer,
     order:orderReducer,
     
     allUsers:allUsersReducer,
   userDetails:userDetailsReducer,
   productReviews:productReviewsReducer,
    review:reviewReducer,
});


let initialState={
   
    cart:{
        cartItems:localStorage.getItem("cartItems") 
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
    },

};

const middleware=[thunk];

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
 