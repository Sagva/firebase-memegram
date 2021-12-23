import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuthContext } from "../../contexts/AuthContext";

const Navigation = () => {
	const ASSET_URL = import.meta.env.BASE_URL;
	const { currentUser } = useAuthContext();
	console.log(`ASSET_URL from Navigation`, ASSET_URL);

	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Link to={`${ASSET_URL}`} className="navbar-brand">
					<span role="img" aria-label="A laughing crying face">
						😂
					</span>{" "}
					Memegram
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<NavLink to={`${ASSET_URL}`} className="nav-link">
							All memes
						</NavLink>
						{currentUser ? (
							<>
								<NavLink
									to={`${ASSET_URL}/upload`}
									className="nav-link"
								>
									Upload
								</NavLink>

								<NavDropdown
									title={
										currentUser.displayName ||
										currentUser.email
									}
									id="basic-nav-dropdown"
								>
									<NavLink
										to={`${ASSET_URL}/update-profile`}
										className="dropdown-item"
									>
										Update Profile
									</NavLink>
									<NavLink
										to={`${ASSET_URL}/my-memes`}
										className="dropdown-item"
									>
										My memes
									</NavLink>
									<NavDropdown.Divider />
									<NavLink
										to={`${ASSET_URL}/logout`}
										className="dropdown-item"
									>
										Log Out
									</NavLink>
								</NavDropdown>
							</>
						) : (
							<>
								<NavLink
									to={`${ASSET_URL}/login`}
									className="nav-link"
								>
									Login
								</NavLink>
								<NavLink
									to={`${ASSET_URL}/signup`}
									className="nav-link"
								>
									Signup
								</NavLink>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
