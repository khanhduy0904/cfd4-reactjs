import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Collab(props) {
    return (
        <>
            <Header />
            <main>
                <section className="section register">
                    <div className="container">
                        <div className="course">
                            <h2 className="title">liên hệ</h2>
                            <h2 className="type">hợp tác cùng CFD</h2>
                        </div>
                        <div className="register__wrap">
                            <form action="/" method="POST" className="register__form">
                                <div className="field">
                                    <label>Họ và Tên<span>*</span></label>
                                    <input type="text" name="title" defaultValue placeholder="Họ và tên bạn" />
                                </div>
                                <div className="field">
                                    <label>Số điện thoại<span>*</span></label>
                                    <input type="text" name="phone" defaultValue placeholder="Số điện thoại" />
                                </div>
                                <div className="field">
                                    <label>Email<span>*</span></label>
                                    <input type="text" name="email" defaultValue placeholder="Email của bạn" />
                                </div>
                                <div className="field">
                                    <label>Website</label>
                                    <input type="text" name="website" defaultValue placeholder="Đường dẫn website https://" />
                                </div>
                                <div className="field">
                                    <label>Tiêu đề <span>*</span></label>
                                    <input type="text" name="payment" defaultValue placeholder="Tiêu đề liên hệ" />
                                </div>
                                <div className="field">
                                    <label>Nội dung <span>*</span></label>
                                    <input type="text" name="content" defaultValue style={{ height: 150 }} />
                                </div>
                                <div className="btn-register btn-save">
                                    GỬI TIN
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </>
    );
}

export default Collab;