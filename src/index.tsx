import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ImageGallery from "./components/ImageGallery";
import {mockData} from "./mockData";
import CalendarDemo from "@/registry/default/example/calendar-demo";
import {DialogDemo as MyDialogDemo} from "./DialogDemo";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    //     <div style={{display: "inline-block", width: "100%"}} data-ignore="used only for top most containter width">
    //         <ImageGallery {...mockData} />
    //     </div>
    // </React.StrictMode>

    <CalendarDemo></CalendarDemo>
);
