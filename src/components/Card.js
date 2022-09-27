import React from "react";

const Card=({id,name,email})=>{
    //const {id,name,email}=props; umesto ove linije i umesto da u 3 liniju zagradi pise props uradicu sleedece,umesto props u zagradi stavljam {id,name,email} radi bolje strukture koda
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;

//ovo u 5 liniji nam sve dolazi iz tachyons bg light-green je za background,dib ne znam sta je ,br3 je border ,pa3 je padding ,ma2 su margine ,grow je animacija,bw2 i shadow-5 je da izgleda 3d
//prilikom pravljenja aplikacije robofriends dodali smo robots.js da bi razumeo pogledaj klip u sekciji React klip Buliding react app 1-od nekog 9 minuta