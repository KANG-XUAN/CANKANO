// routes/index.jsx

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Abouts from "../pages/Abouts";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import Contact from "../pages/Contact";

import Auth from "../pages/Auth";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Design from "../pages/Design";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import OrderSuccess from "../pages/OrderSuccess";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/abouts" element={<Abouts />} />
			<Route path="/news" element={<News />} />
			<Route path="/news/:id" element={<NewsDetail />} />
			<Route path="/Contact" element={<Contact />} />
			
			<Route path="/auth" element={<Auth />} />
			<Route path="/products" element={<Products />} />
			<Route path="/products/:id" element={<ProductDetail />} />
			<Route path="/design" element={<Design />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/orders" element={<Orders />} />
			<Route path="/ordersuccess" element={<OrderSuccess />} />
		</Routes>
	);
}
