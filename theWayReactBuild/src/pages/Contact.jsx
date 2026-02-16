import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function setField(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // Simple now: UI only (no backend wiring yet)
    alert("Thanks! Contact form submission wiring can be added next.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="container py-4">
      <h1 className="h3 mb-3">Contact</h1>

      <div className="row g-3">
        <div className="col-12 col-lg-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="form-control"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    autoComplete="name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    className="form-control"
                    type="email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="form-control"
                    value={form.subject}
                    onChange={(e) => setField("subject", e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    required
                  />
                </div>

                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5">Other ways to reach us</h2>
              <p className="text-muted mb-2">
                If you prefer, you can also reach us by email:
              </p>
              <p className="mb-0">
                <a href="mailto:info@wayofmessiah.net">info@wayofmessiah.net</a>
              </p>
              <div className="text-muted small mt-3">
                (Change this address to the one you want to receive inquiries.)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
