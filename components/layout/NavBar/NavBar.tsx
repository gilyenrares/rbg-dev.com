"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button/Button";
import "./NavBar.css";
import Link from "next/link";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const [showButton, setShowButton] = useState(true);

	const toggleMenu = () => setOpen((v) => !v);
	const closeMenu = () => setOpen(false);

	useEffect(() => {
		const handleResize = () => {
			setShowButton(window.innerWidth > 960);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// lock body scroll when menu is open
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
	}, [open]);

	return (
		<>
			<nav>
				<div className="nav-container">
					<a href="#top" className="logo">
						NeoNexus
					</a>

					<ul className="nav-links $">
						<li><a href="#features" onClick={closeMenu}>Features</a></li>
						<li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
						<li><a href="#stats" onClick={closeMenu}>Stats</a></li>
						<li><a href="#contact" onClick={closeMenu}>Contact</a></li>
					</ul>

					{showButton && (
            <Link href="/account">
              <Button
                className="btn--clip"
                buttonSize="btn--large"
                buttonStyle="btn--info"
              >Terminal
              </Button>
            </Link>
					)}

					{/* hamburger */}
					<button
						className={`mobile-menu-button ${open ? "active" : ""}`}
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						<div className="hamburger">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>
				</div>
			</nav>

			{/* overlay */}
			<div
				className={`mobile-menu-overlay ${open ? "active" : ""}`}
				onClick={closeMenu}
			/>

			{/* mobile menu */}
			<div className={`mobile-menu ${open ? "active" : ""}`}>
				<div className="mobile-menu-header">
					<a href="#top" className="mobile-menu-logo">
						NeoNexus
					</a>

					<button
						className="mobile-menu-close"
						onClick={closeMenu}
					>
						✕
					</button>
				</div>

				<div className="mobile-menu-cta">
					<a href="#" className="cyber-button">
						Access Terminal
					</a>
          <a href="#" className="cyber-button">
						Access Terminal
					</a>
				</div>

				<nav className="mobile-menu-nav">
					<ul>
						<li><a href="#features" onClick={closeMenu}>Features</a></li>
						<li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
						<li><a href="#stats" onClick={closeMenu}>Stats</a></li>
						<li><a href="#contact" onClick={closeMenu}>Contact</a></li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default NavBar;