import React from "react";

export default function Form() {
    return (
        <div className="container mt-3">
            <form className="mx-5">
                <div className="form-group formLabel my-4">
                    <label htmlFor="fullName"><i className="fa fa-user-circle larger"></i> Name</label>
                    <input type="text" name="fullName" className="form-control borderInput" id="fullName"
                        placeholder="Enter Your Name"></input>
                </div>
                <div className="form-group formLabel">
                    <label htmlFor="email"><i className="fa fa-envelope larger"></i> Email</label>
                    <input type="text" name="email" className="form-control borderInput" id="email"
                        placeholder="Enter Your Email" pattern="\S+\.\S+@\S+\.\S+"
                        title="Please enter a valid email address"></input>
                </div>
                <div className="form-group formLabel my-4">
                    <label htmlFor="subject"><i className="fa fa-tag larger"></i> Subject</label>
                    <input type="text" name="subject" className="form-control borderInput" id="subject"
                        placeholder="Enter Subject"></input>
                </div>
                <div className="form-group formLabel my-4">
                    <label htmlFor="message"><i className="fa fa-pencil larger"></i> Message (Max Length: 200 Characters)</label>
                    <textarea name="message" className="form-control borderInput" id="message" maxLength="200"
                    rows="3" placeholder="Enter Your Message"></textarea>
                </div>
                <div className="form-group formLabel mb-5">
                    <button type="submit" className="btn btn-outline-primary btn-lg">Send <i class="fa fa-paper-plane-o"></i></button>
                </div>
            </form>
        </div>
    )
}