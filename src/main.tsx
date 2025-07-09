import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout';
import ProductsPage from 'pages/client/product';
import LoginPage from 'pages/client/auth/login';
import RegisterPage from 'pages/client/auth/register';
import HomePage from 'pages/client/home';
import { CartProvider } from './context/CartContext';
import Profile from './pages/client/auth/profile';
import ForgotPasswordPage from './pages/client/auth/forgot-password';
import WishlistPage from './pages/client/wishlist';
import CartPage from './pages/client/cart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/product",
        element: <ProductsPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/new",
        element: <div>Trang tin tức</div>,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ]
  },


]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
)
