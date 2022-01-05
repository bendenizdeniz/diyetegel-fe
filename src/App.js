import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import 'font-awesome/css/font-awesome.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Communicate from "./components/Communicate";
import Profile from "./components/Profile";
import { Calculator } from "./components/Calculator";
import { UpdateAddress } from "./components/UpdateAddress";
import { UpdateCard } from "./components/UpdateCard";
import { AddAddress } from "./components/AddAddress";
import { AddCard } from "./components/AddCard";
import { Cart } from "./components/Cart";
import { BuyMembership } from "./components/BuyMembership";
import { MembershipCart } from "./components/MembershipCart";
import { AllFoods } from "./components/AllFoods";
import { Blog } from "./components/Blog";
import { SocialNews } from "./components/SocialNews";
import { MealCart } from "./components/MealCart";
import { Recipe } from "./components/Recipe";
import { OrderHistory } from "./components/OrderHistory";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/communucate' element={<Communicate />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/updateAddress/:id' element={<UpdateAddress />} />
          <Route path='/updateCard/:id' element={<UpdateCard />} />
          <Route path='/addAddress' element={<AddAddress />} />
          <Route path='/addCard' element={<AddCard />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/buyMembership' element={<BuyMembership />} />
          <Route path='/membershipCart/:id' element={<MembershipCart />} />
          <Route path='/allFoods' element={<AllFoods />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/socialNews' element={<SocialNews />} />
          <Route path='/mealCart' element={<MealCart />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/orderHistory' element={<OrderHistory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
