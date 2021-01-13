import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import Comment from "./components/Comment";
import Course from "../../components/Course";
import Different from "./components/Different";
import Team from "./components/Team";
import Ready from "./components/Ready";


function index(props) {
  return (
    <div>
      <Header />
      <div className="overlay_nav" />
      <main>
        <Banner />
        <section className="section online">
          <div className="container">
            <div className="introduce">
              The readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </div>
            <div className="course">
              <h2 className="title">Khoá học</h2>
              <h2 className="type">online</h2>
              <div className="row">
                <Course name="HTML + CSS căn bản" thumnail="img/img-1.jpg" desc="Học và thực hành html + css"/>       
                <Course name="React JS" thumnail="img/img-2.jpg" desc="......"/>     
                <Course name="Bla Bla" thumnail="img/img-3.jpg" desc="Bla Bla Bla"/>     
              </div>
              <div className="row">
              <Course name="Bla Bla" thumnail="img/img-4.jpg" desc="Bla Bla Bla"/>       
              <Course name="Bla Bla" thumnail="img/img-5.jpg" desc="Bla Bla Bla"/>       
              <Course name="Bla Bla" thumnail="img/img-3.jpg" desc="Bla Bla Bla"/>       
              </div>
            </div>
          </div>
        </section>
        <section className="section offline">
          <div className="container">
            <div className="course">
              <h2 className="title">Khoá học</h2>
              <h2 className="type">offline</h2>
              <div className="row">
              <Course name="Khóa Học 7" thumnail="img/img-7.jpg" desc="Course 7"/>     
              <Course name="Khóa Học 8" thumnail="img/img-8.jpg" desc="Course 8"/>      
              <Course name="Khóa Học 9" thumnail="img/img-8.jpg" desc="Course 9"/>  
              </div>
            </div>
          </div>
        </section>
        <Different />
        <Comment />
        <Team />
        <Ready />
      </main>
        <Footer />
      <div className="popup-signin" style={{ display: "none" }}>
        <div className="wrap">
          <form id="login">
            <div className="ct_login">
              <h2 className="title">Đăng nhập</h2>
              <input type="hidden" className="url_post" defaultValue />
              <input
                name="email"
                type="text"
                placeholder="Email / Số điện thoại"
              />
              <input name="password" type="password" placeholder="Mật khẩu" />
              <p className="mess-error" id="message_login" />
              <div className="remember">
                <label className="btn-remember">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <p>Nhớ mật khẩu</p>
                </label>
                <a
                  href="#"
                  className="forget btn-open-popup"
                  data-id="reset-password"
                >
                  Quên mật khẩu?
                </a>
              </div>
              <div className="btn btn-login btn-register">đăng nhập</div>
              <div className="text-register" style={{ fontWeight: 700 }}>
                <strong>Hoặc đăng nhập bằng</strong>
              </div>
              <div>
                <div className="btn btn-login btn-google " id="googleSignIn">
                  <img src="img/google.svg" alt />
                  Google
                </div>
                <p className="mess-error" id="message_login_by_g" />
              </div>
              <div className="close">
                <img src="img/close-icon.png" alt />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default index;
