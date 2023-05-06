import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avataralinura.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}></h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Alinura Askar</h3>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://twitter.com/"}  >
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/"}  >
                            <Instagram/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;