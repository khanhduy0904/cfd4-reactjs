import React from 'react';

function StudentTeam(props) {
    return (
        <>
            <div className="col-md-3 coreteam__student--item">
                <div className="wrap">
                    <img src={props.img} alt />
                </div>
                <div className="text">
                    <div className="name">{props.name}</div>
                    <div className="class">{props.classCFD}</div>
                </div>
            </div>
        </>
    );
}

export default StudentTeam;