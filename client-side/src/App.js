
import { RouterProvider } from 'react-router-dom';
import AOS from "aos" ;
import './App.css';
import { routers } from './components/routers/routers';
import 'react-photo-view/dist/react-photo-view.css';
import { useEffect } from 'react';
import PageLoader from './components/share/PageLoader/PageLoader';
function App() {
  useEffect(() => {
    AOS.init({
      duration : 3000
    });
  }, []);
  return (
    <>
    <RouterProvider router={routers} fallbackElement={<PageLoader></PageLoader> }></RouterProvider>
    </>
  );
}

export default App;
