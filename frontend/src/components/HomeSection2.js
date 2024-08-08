import React from "react";

import "../utils/css/home.css";

export default function HomeSection2({section2Data}) {

    if(!section2Data){
        return null;
    }

    const header = section2Data.header;
    const cta_buttons = section2Data.cta_buttons;
    console.log("cta_buttons",cta_buttons)

    return (
        <div className="homesection2">
            <div className="container">
            
                {header && <div className="header" dangerouslySetInnerHTML={{ __html: header }} />}
         {/**  <h3>Healthier buildings mean more confident occupants</h3>
            <h5>Now’s the time to start making your building healthier. 
                Draw on our building control expertise to address the key concerns—air quality,
                 touchless systems and social distance monitoring. We’ll make a healthy building operational faster than you thought possible.
                 </h5> / */}
           
            <div className="footer">
                {
                    cta_buttons && cta_buttons.map((button, index) => {
                        return (
                            <button key={index} className="button-primary">{button?.button_link?.title}</button>
                        )
                    })
                }
            </div>
            </div>
           
        </div>
    );
}