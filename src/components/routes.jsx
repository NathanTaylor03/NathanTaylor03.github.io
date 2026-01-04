import App from '../App.jsx';
import AboutMe from '../pages/AboutMe';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Error from '../pages/Error';

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <AboutMe />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
];

export default routes;