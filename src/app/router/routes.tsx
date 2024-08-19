import Main from "pages/Main/Main";

interface IRoute {
	path: string;
	element: React.ReactNode;
}

interface IRoutes extends IRoute {
	children?: IRoute[];
}

const INIT_ROUTES: IRoutes[] = [{ path: "/", element: <Main /> }];

export default INIT_ROUTES;
