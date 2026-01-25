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
			<div className="header-top">
				<div className="header-inner">
					<div className="logo-section">
						<div className="logo">RJ</div>
						<div className="header-info">
							<h1 className="header-name">Rishabh Hitesh Jain</h1>
							<p className="header-title">Full-Stack & ML Engineer</p>
						</div>
					</div>

					<button className={`nav-toggle ${open ? 'open' : ''}`} aria-expanded={open} onClick={toggle} aria-label="Toggle navigation">
						<span className="hamburger" />
					</button>
				</div>

				<nav className={`site-nav ${open ? 'open' : ''}`}>
					<a href="#summary" onClick={(e) => navTo(e, 'summary')}>Summary</a>
					<a href="#education" onClick={(e) => navTo(e, 'education')}>Education</a>
					<a href="#experience" onClick={(e) => navTo(e, 'experience')}>Experience</a>
					<a href="#skills" onClick={(e) => navTo(e, 'skills')}>Skills</a>
					<a href="#publications" onClick={(e) => navTo(e, 'publications')}>Publications</a>
					<a href="#projects" onClick={(e) => navTo(e, 'projects')}>Projects</a>
					<a href="#contact" onClick={(e) => navTo(e, 'contact')}>Contact</a>
				</nav>
			</div>
		</header>
	);
}
