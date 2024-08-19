import { Navigate, Route, Routes } from "react-router";
import INIT_ROUTES from "./routes";

const AppRouter = () => {
	return (
		<Routes>
			{INIT_ROUTES.map(({ path, element, children }) => (
				<Route key={path} element={element} path={path}>
					{children && (
						<Route index element={<Navigate to={children[0].path} replace />} />
					)}
					{children &&
						children.map((child) => (
							<Route path={child.path} element={child.element} key={child.path} />
						))}
				</Route>
			))}
		</Routes>
	);
};

export default AppRouter;
