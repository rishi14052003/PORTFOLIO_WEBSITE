import React, { useState } from "react";

export default function Header() {
	const [open, setOpen] = useState(false);

	const toggle = () => setOpen((s) => !s);

	const navTo = (e, id) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
		setOpen(false);
	};

	return (
		<header className="site-header">
			<div className="header-inner container">
				<div className="brand">
					<a href="#summary" onClick={(e) => navTo(e, 'summary')} className="brand-link">Rishabh Hitesh Jain</a>
					<div className="brand-sub">Software Engineer — Full-Stack & ML</div>
				</div>

				<button className={`nav-toggle ${open ? 'open' : ''}`} aria-expanded={open} onClick={toggle} aria-label="Toggle navigation">
					<span className="hamburger" />
				</button>

				<nav className={`site-nav ${open ? 'open' : ''}`}>
					<a href="#summary" onClick={(e) => navTo(e, 'summary')}>Summary</a>
					<a href="#skills" onClick={(e) => navTo(e, 'skills')}>Skills</a>
					<a href="#education" onClick={(e) => navTo(e, 'education')}>Education</a>
					<a href="#experience" onClick={(e) => navTo(e, 'experience')}>Experience</a>
					<a href="#publications" onClick={(e) => navTo(e, 'publications')}>Publications</a>
					<a href="#contact" onClick={(e) => navTo(e, 'contact')}>Contact</a>
				</nav>
			</div>
		</header>
	);
}
