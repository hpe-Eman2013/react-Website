type ScriptureProps = {
  reference: string;
  verse: React.ReactNode;
  version: string;
};

function Scripture({ reference, verse, version }: ScriptureProps) {
  return (
    <details className="scripture">
      <summary className="scripture-ref">{reference}</summary>

      <div className="scripture-panel">
        <div className="scripture-panel__ref">{reference}</div>
        <div className="scripture-panel__verse">{verse}</div>
        <div className="scripture-panel__version">— {version}</div>
      </div>
    </details>
  );
}
export default Scripture;
