import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProjectItem from './components/ProjectItem';

function Project(props) {
    return (
      <>
      <Header />
        <main>
          <section className="section project">
            <div className="container">
              <div className="course">
                <h2 className="type">dự án</h2>
                <h2 className="title">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  <br />
                  aliquam tincidunt elementum sem non luctus
                </h2>
              </div>
              <div className="project__wrap">
                <div className="row">
                    <ProjectItem img="img/project-1.jpg" name="BEAUTIFUL" owner="Kahn Jog" /> 
                    <ProjectItem img="img/project-2.jpg" name="WONDER" owner="Khánh Duy" /> 
                    <ProjectItem img="img/project-3.jpg" name="SKY" owner="Trường Phúc" /> 
                    <ProjectItem img="img/project-4.jpg" name="BLA BLA" owner="Thành Khôi" /> 
                    <ProjectItem img="img/project-5.jpg" name="BEAUTIFUL" owner="Lee Sin" /> 
                    <ProjectItem img="img/project-6.jpg" name="ABC" owner="Yasuo" /> 
                    <ProjectItem img="img/project-7.jpg" name="XYZ" owner="Kahn Jog" /> 
                    <ProjectItem img="img/project-8.jpg" name="BEAUTIFUL" owner="Akali" /> 
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
}

export default Project;