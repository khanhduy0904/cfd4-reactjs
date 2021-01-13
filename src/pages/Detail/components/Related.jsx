import React from 'react';
import Course from '../../../components/Course';

function Related(props) {
    return (
        <>
            <section className="section related">
                <div className="container">
                    <div className="course">
                        <h2 className="title">Khoá học</h2>
                        <h2 className="type">Liên quan</h2>
                        <div className="row">
                            <Course name="HTML + CSS căn bản" thumnail="img/img-7.jpg" desc="Học và thực hành html + css" />
                            <Course name="React JS" thumnail="img/img-8.jpg" desc="......" />
                            <Course name="Bla Bla" thumnail="img/img-9.jpg" desc="Bla Bla Bla" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Related;