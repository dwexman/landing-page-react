import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Navbar} from "./Navbar.jsx";
import {Footer} from "./Footer.jsx";
import {Card} from "./Card.jsx";
//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Card/>
		<Card/>
		<Card/>
		<Footer/>
		</>
	);
};

export default Home;
