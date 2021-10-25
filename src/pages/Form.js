import React, { useState } from "react";

export default function Form() {
    const [fields, setFields] = useState({
        fullName: "", email: "", subject: "", message: ""
    });
    const [errors, setErrors] = useState({});

    // Initial State for character count of a message
    const [count, setCount] = useState(0);


    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
    };

    const handleCount = (event) => {
        setCount(event.target.value.length);
    };

    const handleChangeCount = (event) => {
        handleInputChange(event);
        handleCount(event);
    };

    return (
        <div className="container mt-3">
            <form className="mx-5" onSubmit={handleSubmit}>
                <div className="form-group formLabel my-4">
                    <label htmlFor="fullName"><i className="fa fa-user-circle larger"></i> Name</label>
                    <input type="text" name="fullName" className="form-control borderInput" id="fullName"
                        placeholder="Enter Your Name" value={fields.fullName} onChange={handleInputChange}></input>
                </div>
                <div className="form-group formLabel">
                    <label htmlFor="email"><i className="fa fa-envelope larger"></i> Email</label>
                    <input type="text" name="email" className="form-control borderInput" id="email"
                        placeholder="Enter Your Email" pattern="\S+\.\S+@\S+\.\S+" // Regex for email
                        title="Please enter a valid email address" value={fields.email} onChange={handleInputChange}></input>
                </div>
                <div className="form-group formLabel my-4">
                    <label htmlFor="subject"><i className="fa fa-tag larger"></i> Subject</label>
                    <input type="text" name="subject" className="form-control borderInput" id="subject"
                        placeholder="Enter Subject" pattern="^[A-Z\s]+$" // Regex for only Capital Letters
                        title="Subject must be typed in Capital Letters Only" value={fields.subject}
                        onChange={handleInputChange}></input>
                </div>
                <div className="form-group formLabel my-4">
                    <label htmlFor="message"><i className="fa fa-pencil larger"></i> Message (Max Length: 200 Characters)</label>
                    <textarea name="message" className="form-control borderInput" id="message" maxLength="200"
                        rows="3" placeholder="Enter Your Message" value={fields.message} onChange={handleChangeCount}></textarea>
                        <h6 className="mt-2 text-danger">{count}/200</h6>
                </div>
                <div className="form-group formLabel mb-5">
                    <button type="submit" className="btn btn-outline-primary">Send <i class="fa fa-paper-plane-o"></i></button>
                </div>
            </form>
        </div>
    )
}