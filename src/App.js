// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Test from "./pages/Test";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";




function App() {
  const router = createBrowserRouter([
    //this is where we add out endpoints
    {
      path: "/",
      element: <Test />,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/portfolio',
      element: <Portfolio />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/resume',
      element: <Resume />
    }

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
