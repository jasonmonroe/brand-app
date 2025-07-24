import { useState } from 'react';
import './PromoCarousel.css';


let promos = [];


export function PromoCarousel() {

    function currentPromo (id: any) {
        alert('showing promo thumb ' + id);
    }

    return (
        <>
            <div id="header-promo">
                <img src="" alt="" />

                <div>
                    <span className="dot" onClick={() => currentPromo(1)}></span>
                    <span className="dot" onClick={() => currentPromo(2)}></span>
                    <span className="dot" onClick={() => currentPromo(3)}></span>
                </div>
            </div>
        </>
    );
}
