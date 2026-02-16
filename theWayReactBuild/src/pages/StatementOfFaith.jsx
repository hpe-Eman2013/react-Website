import React from "react";

export default function StatementOfFaith() {
  return (
    <div className="container py-4">
      <h1 className="h3 mb-3">Statement of Faith</h1>

      <div className="card shadow-sm">
        <div className="card-body">
          <p className="text-muted mb-4">
            This statement summarizes our core beliefs. It is intended to be
            clear, simple, and grounded in Scripture.
          </p>

          <ol className="mb-0">
            <li className="mb-3">
              <strong>Scripture</strong>
              <div className="text-muted">
                We believe the Scriptures are inspired and serve as the
                authoritative foundation for faith and practice.
              </div>
            </li>

            <li className="mb-3">
              <strong>The Most High</strong>
              <div className="text-muted">
                We believe in the One Almighty Elohim, Creator of heaven and
                earth, holy and righteous in all His ways.
              </div>
            </li>

            <li className="mb-3">
              <strong>The Messiah</strong>
              <div className="text-muted">
                We believe the Messiah is the promised Redeemer, sent to save,
                restore, and reconcile—calling all people to repentance and
                faith.
              </div>
            </li>

            <li className="mb-3">
              <strong>Salvation</strong>
              <div className="text-muted">
                We believe salvation is the gift of mercy and grace, received by
                faith, and evidenced by a transformed life.
              </div>
            </li>

            <li className="mb-3">
              <strong>Obedience and discipleship</strong>
              <div className="text-muted">
                We believe believers are called to love Elohim, love neighbor,
                and walk in obedience—bearing fruit worthy of repentance.
              </div>
            </li>

            <li>
              <strong>Community</strong>
              <div className="text-muted">
                We believe in gathering, encouraging one another, and building
                up families and communities in truth.
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
