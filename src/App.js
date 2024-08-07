import React from 'react'
import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Work from "./Sections/Work";
import Contact from "./Sections/Contact";
import ContactBar from "./Components/ContactBar";
import Footer from "./Components/Footer";
import SoundBar from './Components/SoundBar/Soudbar';
import "./App.css";


function App() {

	return (
		<main className="main">
			<Navbar />
			<div className="app_section_container">
				<Home />
				<About />
				<Work />
				<Contact />
			</div>
			<SoundBar />
			<ContactBar />
			<Footer />
		</main>
	);
}

export default App;



