interface IRoute {
    isAuthenticated: boolean;
    component: any,
    path?: string;
    exact?: any,
}

export default IRoute;
