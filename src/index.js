import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Reset } from "styled-reset";

import Layout from "layout/Layout";
import Eisenhower from "pages/Eisenhower";
import "./styles/global.css";
import { EisenContextProvider } from "context/eisenContext";
import { FilterContextProvider } from "context/filterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Reset />
        <FilterContextProvider>
            <EisenContextProvider>
                <Layout>
                    <Eisenhower />
                </Layout>
            </EisenContextProvider>
        </FilterContextProvider>
    </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
