import React, { useState } from "react";
import "@/assets/css/Contact.css";
import heroImg from "@/assets/images/contact/contact-us.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function setField(key: string, value: string) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thanks! Contact form submission wiring can be added next.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <main className="container page-with-hero contact-page">
      <section className="contact-hero" aria-label="Contact">
        <img
          src={heroImg}
          alt="presenting the various forms of contact"
          className="contact-hero__media"
          loading="eager"
        />
        <div className="contact-hero__overlay" />
        <div className="contact-hero__content">
          <p className="contact-hero__eyebrow">Get In Touch</p>
          <h1 className="contact-hero__title">Contact</h1>
          <p className="contact-hero__subtitle">
            Send us a message, ask a question, or reach out about fellowship,
            education, support, or ministry matters.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card__header">
              <h2>Send a Message</h2>
              <p>
                We welcome sincere questions, ministry inquiries, and requests
                for more information.
              </p>
            </div>

            <form className="contact-form" onSubmit={onSubmit}>
              <div className="contact-form__group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  className="contact-input"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  autoComplete="name"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="contact-input"
                  type="email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  className="contact-input"
                  value={form.subject}
                  onChange={(e) => setField("subject", e.target.value)}
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="contact-input contact-textarea"
                  rows={6}
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  required
                />
              </div>

              <button className="contact-submit" type="submit">
                Send Message
              </button>
            </form>
          </div>

          <aside className="contact-sidecard">
            <h2>Other Ways to Reach Us</h2>
            <p className="contact-sidecard__text">
              If you prefer, you can also reach us directly by email.
            </p>

            <p className="contact-sidecard__email">
              <a href="mailto:info@wayofmessiah.net">info@wayofmessiah.net</a>
            </p>

            <div className="contact-sidecard__note">
              Change this address to the one you want to receive inquiries.
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
