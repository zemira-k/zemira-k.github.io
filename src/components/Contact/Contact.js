export const Contact = () => {
  return (
    <section className="container contact__container" id="contact">
      <div className="inner__container">
        <div className="contact__text">
          <h2 className="contact__title">Get in touch</h2>
          <p className="contact__Subtitle">Drop me a line.</p>
          <p className="contact__Subtitle">I would like to hear from you.</p>
        </div>
        <form className="contact__form" name="form" novalidate>
          <fieldset className="contact__form-formset">
            <input
              className="contact__form-input"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="contact__form-input"
              type="Email"
              placeholder="your_email@mail.com"
              required
            />
            <textarea
              class="contact__form-textarea"
              placeholder="Message"
            ></textarea>
            <button
              className="button contact__button"
              aria-label="submit"
              type="button"
            >
              Send Message
            </button>
          </fieldset>
        </form>
      </div>
      {/* <nav class="footer__column footer__column_type_contact">
        <h2 class="footer__column-heading">Email us</h2>
        
      </nav> */}
    </section>
  );
};
