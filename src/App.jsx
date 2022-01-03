
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css"
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User";
import NewUser from "./pages/NewUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import NewProduct from "./pages/NewProduct/NewProduct";
import Product from "./pages/Product/Product"
import Login from "./pages/Login/Login"
import AddProduct from "./pages/AddProduct/AddProduct";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId : process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);


function App() {
    const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin || false;

    return ( 
      <Router>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
        {
          admin &&
          <>
          <Topbar/>
          <div className="container">
            <Sidebar/>
              <Route exact path="/">
                <Home/>
              </Route> 
              <Route path="/users">
                <UserList/>
              </Route>
              <Route path="/user/:userId">
                <User/>
              </Route>
              <Route path="/newUser">
                <NewUser/>
              </Route>
              <Route path="/products">
                <ProductList/>
              </Route>
              <Route path="/product/:productId">
                <Product/>
              </Route>
              <Route path="/newProduct">
                <NewProduct firebaseApp = {app}/>
              </Route>
              <Route path="/addProduct">
                <AddProduct firebaseApp = {app}/>
              </Route>
          </div>
          </>
        }
            </Switch>
      </Router>

    );
}

export default App;