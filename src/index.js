import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Reset } from "styled-reset";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "layout/Layout";
import Eisenhower from "pages/Eisenhower";
import "./styles/global.css";
import { TodoContextProvider } from "context/todoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Eisenhower />,
            },
        ],
    },
]);
root.render(
    <>
        <Reset />
        <TodoContextProvider>
            <RouterProvider router={router} />
        </TodoContextProvider>
    </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
