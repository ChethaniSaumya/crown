import './App.css';
import { ToastContainer } from "react-toastify"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivacyPolicy from './pages/PrivacyPolicy';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import EmailUnverified from './pages/EmailUnverified';
import EmailVerified from './pages/EmailVerified';
import FAQs from './pages/FAQs';
import ForgotPassword from './pages/ForgotPassword';
import Minting from './pages/Minting';
import Products from './pages/Products';
import Product from './pages/Product';
import Profile from './pages/Profile';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import TermsAndConditions from './pages/TermsAndConditions';
import SpecialRoute from './components/SpecialRoute';
import PrivateRoute from './components/PrivateRoute';
import Checkout from './pages/Checkout';
import OrderSuccessfull from './pages/OrderSuccessfull';
import ReplacementStatus from './pages/ReplacementStatus';
import Success from './pages/Success';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* <Route element={<SpecialRoute />}>
          <Route path="/verify/:token" element={<EmailVerified />} />
        </Route> */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/order-successfull" element={<OrderSuccessfull />} />
          <Route path="/replacement" element={<ReplacementStatus />} />
          <Route path="/success" element={<Success />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/minting" element={<Minting />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/emailverified" element={<EmailVerified />} />
        <Route path="/verifyemail" element={<EmailUnverified />} />
        <Route path="/verify/:token" element={<SpecialRoute />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
