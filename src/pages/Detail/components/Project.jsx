import React from "react";
import Course from "../../../components/Course";

function Project(props) {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="course">
                        <h2 className="title">Dự án</h2>
                        <h2 className="type">học viên</h2>
                        <div className="row">
                            <Course name="HTML + CSS căn bản" thumnail="img/img-1.jpg" desc="Học và thực hành html + css" />
                            <Course name="React JS" thumnail="img/img-2.jpg" desc="......" />
                            <Course name="Bla Bla" thumnail="img/img-3.jpg" desc="Bla Bla Bla" />


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project;
