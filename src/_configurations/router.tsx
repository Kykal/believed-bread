//React router
import { createBrowserRouter } from 'react-router-dom';


//Routes
import Root from '../_routes/Root';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
]);


export default router;
