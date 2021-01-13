import React from 'react';

function TeacherTeam(props) {
    return (
        <>
            <div className="col-md-6 coreteam__teacher--item">
                <div className="wrap">
                    <img src={props.img} alt />
                </div>
                <div className="text">
                    <div className="name">{props.name}</div>
                    <div className="job">{props.job}</div>
                </div>
            </div>

        </>
    );
}

export default TeacherTeam;