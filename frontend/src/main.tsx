import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LandingView} from "./views/LandingView";
import {createTheme, ThemeProvider} from "@mui/material";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingView/>,
    },
]);

const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, sans-serif',
    },
    palette: {
        primary: {
            main: '#ffffff',
            dark: '#ffffff',
        },
        secondary: {
            main: '#b73337',
        },
        text: {
            primary: '#000000',
            secondary: 'whitesmoke',
        },
        background: {
            paper: '#b73337',
        },
        divider: 'whitesmoke',

    },

});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>,
)
