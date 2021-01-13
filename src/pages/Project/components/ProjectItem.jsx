import React from 'react';

function ProjectItem(props) {
    return (
        <>
            <div className="col-md-6 project__item">
                <a href="#" className="wrap">
                    <img src={props.img} alt />
                </a>
                <div className="text">
                    <div className="name">{props.name}</div>
                    <div className="owner">{props.owner}</div>
                </div>
            </div>
        </>
    );
}

export default ProjectItem;    