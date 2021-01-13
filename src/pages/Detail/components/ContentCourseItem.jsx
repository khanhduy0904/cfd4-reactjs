import React from 'react';

function ContentCourseItem(props) {
    return (
        <>
            <div className="item__course">
                  <div className="item__course--tt">
                    <span className="day">{props.date}</span>
                    <span className="details">{props.title}</span>
                  </div>
                  <div className="item__course--dropdown">
                    {props.dropdown}
                  </div>
            </div>   
        </>
    );
}

export default ContentCourseItem;