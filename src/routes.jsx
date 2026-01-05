import App from './App.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';

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
                path: "portfolio",
                element: <Portfolio />
            },
            {
                path: "Contact",
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