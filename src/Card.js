import axios from "axios";
import React, {Component, useState, useEffect} from 'react';
import fifa from './files/fifa21X.png';
import ps4Icon from './files/ps4-icon.png';
import gameCss from './gameCss.css';
import {Collapse} from 'react-collapse';



const CardProfile = () =>{
    let statex = true;
    const [card, setCardProfile] = useState([]);
    const fetchCard = () =>{
        axios.get("http://localhost:8080/Home").then(res => {
            setCardProfile(res.data);
        });
    };

    useEffect(() =>{
        fetchCard();
    }, []);

    return card.map((userProfie , index) => {

        return <div className="row">
            <div className="card cardSize" id="accordion">
                <div className="card-img">
                    <img src={fifa} className="center2 pedlTop5"/>
                </div>

                <div className="pedlTop4">
                    <span className="gold">${userProfie.price}</span>
                    <img src={ps4Icon} className="iconImgPos"/>
                </div>

                <div className="card-content">
                    <p style={{padding: '3px;'}}>{userProfie.shortMessage}</p>
                </div>

                <div className="ReactCollapse--collapse">
                    <button
                            className="btn btn-primary btn-circle cardSize"  style={{height: '20px;'}}
                            href="#collapseOne2">
                        <i  className="fas fa-chevron-down center"></i>
                    </button>
                </div>

                <div  class="ReactCollapse--content">
                    <p style={{padding: '25px;', borderTop: '1px solid silver'}}>
                        <img src="files/fifa21.jpg" style={{padding: '5px;', width: '60px'}} />
                        {userProfie.fullMessage}
                    </p>
                </div>
                <button className="btn" onClick={ () => {statex = !statex; console.log(statex)}} >
                    Collapse Div
                </button>
                <Collapse isOpened={statex}>
                    <div>Random content</div>
                </Collapse>

            </div>
        </div>
    });
};

function changeCardShowMoreBtn(value) {
    let childElemnt = document.getElementById(value);
    if (childElemnt.classList.contains("fa-chevron-down")) {
        childElemnt.classList.remove("fa-chevron-down");
        childElemnt.classList.add("fa-chevron-up");
    }
    else{
        childElemnt.classList.remove("fa-chevron-up");
        childElemnt.classList.add("fa-chevron-down");
    }
}

export default CardProfile;