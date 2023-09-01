import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LandingView} from "./views/LandingView";
import {createTheme, ThemeProvider} from "@mui/material";
import {VisitingPolicyView} from "./views/VisitingPolicyView";
import {FareView} from "./views/FareView";
import {CatalogueView} from "./views/CatalogueView";
import {ContactView} from "./views/ContactView";
import {OpeningHoursView} from "./views/OpeningHoursView";
import {RecoilRoot} from "recoil";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingView/>,
    },
    {
        path: "visiting-policy",
        element: <VisitingPolicyView/>,
    },
    {
        path: 'fares',
        element: <FareView/>
    },
    {
        path: 'contact',
        element: <ContactView/>
    },
    {
        path: 'animals',
        element: <CatalogueView/>
    },
    {
        path: 'opening-hours',
        element: <OpeningHoursView/>
    }
]);

const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, sans-serif',
    },
    palette: {
        primary: {
            main: '#f6efe3',
            dark: '#ffffff',
        },
        secondary: {
            main: '#b73337',
        },
        text: {
            primary: '#000000',
            secondary: '#44321e',
        },
        background: {
            paper: '#b73337',
        },
        divider: '#442e1d',
    },

});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>,
)
