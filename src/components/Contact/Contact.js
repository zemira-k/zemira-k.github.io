import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const resetForm = (e) => {
    e.target.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q47y34h",
        "contact_form",
        form.current,
        "lpQc1P_XPQXoEiJxi",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      )
      .catch((error) => {
        console.log(error.text);
      })
      .finally(resetForm(e));
  };

  return (
    <section className="container contact__container" id="contact">
      <div className="inner__container">
        <div className="contact__text">
          <h2 className="contact__title">Get in touch</h2>
          <p className="contact__Subtitle">Drop me a line.</p>
          <p className="contact__Subtitle">I would like to hear from you.</p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact__form"
          name="form"
          noValidate
        >
          <fieldset className="contact__form-formset">
            <input
              className="contact__form-input"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              className="contact__form-input"
              type="Email"
              placeholder="your_email@mail.com"
              name="user_email"
              required
            />
            <textarea
              className="contact__form-textarea"
              placeholder="Message"
              name="message"
            ></textarea>
            <button
              className="button contact__button"
              aria-label="submit"
              type="submit"
            >
              Send Message
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
