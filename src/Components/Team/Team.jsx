import React, { useEffect, useState } from "react";

const Team = () => {

    return(
        <>
        <section class="team">
            <div className="container">
                <div className="row">
                    <h1>Nosso Time</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, sequi. Molestiae cumque recusandae accusamus repellat placeat nulla ad animi asperiores temporibus molestias, suscipit voluptatem soluta voluptatum expedita numquam quae iure.</p>
                </div>
                <div className="linha mtg50px">
                    <div className="coluna">
                        <div className="imgBox">
                            <img src="" alt="" />
                        </div>
                        <div className="details">
                            <h3>Member Name<br></br><span>Member position</span></h3>
                            <ul>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Team;