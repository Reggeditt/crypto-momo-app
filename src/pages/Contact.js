const ContactUs = () => {
    return (
    <section className="contact-section-wrap">
      <h1>Get in Touch</h1>
      <p>Contact us for any inquiries or feedback.</p>
      <div className="contact-details-wrap">
        <ul>
          <li>Email: info@cryptomomoafrica.com</li>
          <li>Phone: +234-xxx-xxx-xxxx</li>
          <li>Social Media Links: 
            <a href="https://www.facebook.com/cryptomomoafrica">Facebook</a>, 
            <a href="https://twitter.com/cryptomomoafrica">Twitter</a>, 
            <a href="https://www.instagram.com/cryptomomoafrica">Instagram</a>
          </li>
          <li>Physical Address: 1234 Example Street, Lagos, Nigeria</li>
        </ul>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
