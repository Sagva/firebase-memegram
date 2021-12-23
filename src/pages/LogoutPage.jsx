import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const LogoutPage = () => {
	const ASSET_URL = import.meta.env.BASE_URL;

	const { logout } = useAuthContext();
	const navigate = useNavigate();

	useEffect(async () => {
		await logout();
		navigate(`${ASSET_URL}`);
	}, []);

	return (
		<>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body>
							<Card.Title>Log Out</Card.Title>

							<Card.Text>
								Please wait while you're being logged out...
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default LogoutPage;
