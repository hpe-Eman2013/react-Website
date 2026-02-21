import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toCloudinaryTransformedUrl } from "../utils/cloudinary";
import { likeTestimony, dislikeTestimony } from "../services/testimonyService";

const TestimonyCard = ({ testimony, userVote, onVoteUpdated }) => {
  const name = testimony?.name?.trim() || "Anonymous";
  const message = testimony?.message || "";
  const id = testimony?._id;

  const [likes, setLikes] = useState(testimony?.likes ?? 0);
  const [dislikes, setDislikes] = useState(testimony?.dislikes ?? 0);
  const [voting, setVoting] = useState(false);

  // Keep local counters in sync if parent list refreshes / re-fetches
  useEffect(() => {
    setLikes(testimony?.likes ?? 0);
    setDislikes(testimony?.dislikes ?? 0);
  }, [testimony?.likes, testimony?.dislikes]);

  async function onLike() {
    if (!id || voting) return;

    try {
      setVoting(true);
      const updated = await likeTestimony(id); // { likes, dislikes, userVote, message? }

      setLikes(typeof updated.likes === "number" ? updated.likes : 0);
      setDislikes(typeof updated.dislikes === "number" ? updated.dislikes : 0);

      // ✅ update parent vote map (per testimony)
      if (typeof onVoteUpdated === "function") {
        onVoteUpdated(id, updated.userVote || "like");
      }
    } catch (e) {
      console.error("Like failed", e);
    } finally {
      setVoting(false);
    }
  }

  async function onDislike() {
    if (!id || voting) return;

    try {
      setVoting(true);
      const updated = await dislikeTestimony(id);

      setLikes(typeof updated.likes === "number" ? updated.likes : likes);
      setDislikes(
        typeof updated.dislikes === "number" ? updated.dislikes : dislikes,
      );

      if (typeof onVoteUpdated === "function") {
        onVoteUpdated(id, updated.userVote || "dislike");
      }
    } catch (e) {
      console.error("Like failed", e);
    } finally {
      setVoting(false);
    }
  }

  // Prefer Cloudinary imageUrl (DB stores this), then avatarUrl if you still use it
  const rawAvatarUrl = testimony?.imageUrl || testimony?.avatarUrl || "";

  const avatarUrl = useMemo(() => {
    if (!rawAvatarUrl) return "";
    return toCloudinaryTransformedUrl(rawAvatarUrl, {
      width: 112,
      height: 112,
      crop: "fill",
      quality: "auto",
      format: "auto",
    });
  }, [rawAvatarUrl]);

  const [imgOk, setImgOk] = useState(Boolean(avatarUrl));

  useEffect(() => {
    setImgOk(Boolean(avatarUrl));
  }, [avatarUrl]);

  const likeDisabled = voting || userVote === "like";
  const dislikeDisabled = voting || userVote === "dislike";

  return (
    <article className="card shadow-sm" aria-label={`Testimony from ${name}`}>
      <div className="card-body d-flex gap-3">
        <div className="flex-shrink-0" style={{ width: 56, height: 56 }}>
          {avatarUrl && imgOk ? (
            <img
              src={avatarUrl}
              alt={`Avatar of ${name}`}
              className="rounded-circle border"
              style={{ width: 56, height: 56, objectFit: "cover" }}
              loading="lazy"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div
              className="rounded-circle border bg-light d-flex align-items-center justify-content-center text-secondary fw-semibold"
              style={{ width: 56, height: 56 }}
              title={name}
            >
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <div className="w-100">
          <header className="mb-2">
            <h2 className="h5 mb-1">{name}</h2>
          </header>

          <p className="mb-0" style={{ lineHeight: 1.6, fontSize: "1rem" }}>
            {message}
          </p>

          <div className="d-flex gap-2 mt-3 align-items-center">
            <button
              type="button"
              className="btn btn-sm btn-outline-success"
              onClick={onLike}
              disabled={likeDisabled}
              title={userVote === "like" ? "You already liked." : "Like"}
            >
              👍 Like <span className="ms-1">{likes}</span>
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={onDislike}
              disabled={dislikeDisabled}
              title={
                userVote === "dislike" ? "You already disliked." : "Dislike"
              }
            >
              👎 Dislike <span className="ms-1">{dislikes}</span>
            </button>
            {userVote ? (
              <span className="badge bg-secondary ms-2">Voted: {userVote}</span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

TestimonyCard.propTypes = {
  testimony: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    message: PropTypes.string,
    avatarUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
  }).isRequired,

  // ✅ per-testimony vote from server session map
  userVote: PropTypes.oneOf(["like", "dislike", null]),

  // ✅ callback to update votesById in parent
  onVoteUpdated: PropTypes.func.isRequired,
};

export default TestimonyCard;
