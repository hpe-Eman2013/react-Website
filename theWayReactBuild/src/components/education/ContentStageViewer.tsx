import { useState } from "react";

export default function ContentStageViewer({
  stages,
}: {
  stages: React.ComponentType[];
}) {
  const [index, setIndex] = useState(0);

  const ActiveStage = stages[index];

  return (
    <div className="stage-viewer">
      <ActiveStage />

      <div className="stage-nav">
        <button disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
          Prev
        </button>

        <span>
          {index + 1} / {stages.length}
        </span>

        <button
          disabled={index === stages.length - 1}
          onClick={() => setIndex((i) => i + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
