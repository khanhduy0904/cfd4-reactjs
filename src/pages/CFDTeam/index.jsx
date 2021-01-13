import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import StudentTeam from "./components/StudentTeam";
import TeacherTeam from "./components/TeacherTeam";

function CFDTeam(props) {
  return (
    <>
      <Header />  
      <main>
        <section className="section coreteam">
          <div className="container">
            <div className="course">
              <h2 className="type">CFD TEAM</h2>
              <h2 className="title">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                <br />
                aliquam tincidunt elementum sem non luctus
              </h2>
            </div>
            <div className="coreteam__teacher">
              <div className="row">
                <TeacherTeam img="img/teacher-1.jpg" name="Trần Nghĩa" job="Founder &amp; Creative Front-End Developer" />
                <TeacherTeam img="img/teacher-2.jpg" name="Đặng Thuyền Vương" job="Founder &amp; Creative Front-End Developer" />
                <TeacherTeam img="img/teacher-3.jpg" name="Đặng Thuyền Quân" job="Founder &amp; Creative Front-End Developer" />
                <TeacherTeam img="img/teacher-4.jpg" name="Nguyễn Đức Huy" job="Founder &amp; Creative Front-End Developer" />
              </div>
            </div>
            <div className="coreteam__student">
              <div className="row">
                <StudentTeam name="Diệp Anh Thyy" classCFD="CFD-1" img="img/student-5.jpg"/>
                <StudentTeam name="Mã Thành Khôi" classCFD="CFD-" img="img/student-2.jpg"/>
                <StudentTeam name="Bla Bla Bla" classCFD="CFD-" img="img/student-1.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-3.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-2.jpg"/>
                <StudentTeam name="Mã Thành Khôi" classCFD="CFD-" img="img/student-5.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-1.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-2.jpg"/>
                <StudentTeam name="Phan Đức Trí" classCFD="CFD-" img="img/student-2.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-1.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-2.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-5.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-2.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-3.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-2.jpg"/>
                <StudentTeam name="Nguyễn Khánh Duy" classCFD="CFD-" img="img/student-4.jpg"/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CFDTeam;
