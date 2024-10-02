import { Provider } from "react-redux";
import Body from "./Components/Body";
import { Head } from "./Components/Head";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./Components/MainContainer";
import { WatchPage } from "./Components/WatchPage";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
   <Provider store={Store}>
 
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </Provider>
  );
}

export default App;
