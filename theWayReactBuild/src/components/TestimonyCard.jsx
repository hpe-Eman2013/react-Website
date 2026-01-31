const TestimonyCard = ({ testimony }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-1">{testimony?.name || "Anonymous"}</h5>
        <p className="card-text mb-0">{testimony?.message || ""}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
