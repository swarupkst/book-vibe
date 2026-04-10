import { createBrowserRouter } from "react-router";
import Book from "../component/book/Book";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../page/homepage/Homepage";
import ErrorPage from "../component/errorpage/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/book",
        element: <Book />
      },
      
    ],

      errorElement: <ErrorPage />
  
}
]);