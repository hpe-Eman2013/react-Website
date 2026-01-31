import { useEffect, useState } from "react";
import TestimonyCard from "../components/TestimonyCard";
import { fetchApprovedTestimonies } from "../services/testimonyService";

const Testimonies = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setStatus("loading");
        setError("");

        const data = await fetchApprovedTestimonies();
        setItems(Array.isArray(data) ? data : []);
        setStatus("success");
      } catch (e) {
        setStatus("error");
        setError(e?.message || "Failed to load testimonies.");
      }
    };

    load();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-3">Testimonies</h1>

      {status === "loading" && <div className="alert alert-info">Loading…</div>}
      {status === "error" && (
        <div className="alert alert-danger">
          <div className="fw-bold">Could not load testimonies</div>
          <div className="small">{error}</div>
          <div className="small mt-2">
            This is expected until the Node/Express API is running at{" "}
            <code>{import.meta.env.VITE_API_BASE_URL}</code>.
          </div>
        </div>
      )}

      {status === "success" && items.length === 0 && (
        <div className="alert alert-secondary">No testimonies yet.</div>
      )}

      <div className="d-grid gap-3">
        {items.map((t) => (
          <TestimonyCard key={t._id || t.id} testimony={t} />
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
