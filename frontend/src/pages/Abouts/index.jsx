// pages/Abouts/index.jsx

import AboutBrand from "./AboutBrand";
import BrandStory from "./BrandStory";
import ContactUs from "./ContactUs";

import "./index.css";

function Abouts() {
	return (
		<main className="abouts-page">
			<AboutBrand />
			<BrandStory />
			<ContactUs />
		</main>
	);
}

export default Abouts;
