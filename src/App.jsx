import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { Container } from "react-bootstrap";
import RequireAuth from "./components/RequireAuth";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import Navigation from "./pages/partials/Navigation";
import PageNotFound from "./pages/PageNotFound";
import SignupPage from "./pages/SignupPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import UploadPage from "./pages/UploadPage";
import MyMemesPage from "./pages/MyMemesPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {
	const ASSET_URL = import.meta.env.BASE_URL;

	return (
		<>
			<Navigation />

			<Container id="App" className="py-3">
				<Routes>
					{/* Guest routes */}
					<Route
						path={`${ASSET_URL}/login`}
						element={<LoginPage />}
					/>
					<Route
						path={`${ASSET_URL}/logout`}
						element={<LogoutPage />}
					/>
					<Route
						path={`${ASSET_URL}/signup`}
						element={<SignupPage />}
					/>
					<Route path={`${ASSET_URL}`} element={<HomePage />} />
					<Route
						path={`${ASSET_URL}/forgot-password`}
						element={<ForgotPasswordPage />}
					/>

					{/* Protected routes */}

					<Route
						path={`${ASSET_URL}/update-profile`}
						element={
							<RequireAuth redirectTo="/login">
								<UpdateProfilePage />
							</RequireAuth>
						}
					/>
					<Route
						path={`${ASSET_URL}/upload`}
						element={
							<RequireAuth redirectTo="/login">
								<UploadPage />
							</RequireAuth>
						}
					/>
					<Route
						path={`${ASSET_URL}/my-memes`}
						element={
							<RequireAuth redirectTo="/login">
								<MyMemesPage />
							</RequireAuth>
						}
					/>

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Container>

			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</>
	);
}

export default App;
