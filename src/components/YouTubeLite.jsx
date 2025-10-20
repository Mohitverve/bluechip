import React, { useEffect, useRef, useState } from "react";

/**
 * Lightweight YouTube facade:
 *  - shows a poster thumbnail + play button
 *  - only loads the real iframe after user interaction (or when visible)
 */
export default function YouTubeLite({
  videoId,
  title = "YouTube video",
  autoLoadOnView = false,          // set true if you want to load iframe when scrolled into view
  aspect = "16 / 9",
  posterQuality = "hqdefault",     // 'maxresdefault' | 'sddefault' | 'hqdefault'
  className = "",
}) {
  const [activated, setActivated] = useState(false);
  const host = "https://www.youtube-nocookie.com";
  const containerRef = useRef(null);
  const posterUrl = `https://i.ytimg.com/vi/${videoId}/${posterQuality}.jpg`;

  useEffect(() => {
    if (!autoLoadOnView || activated) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setActivated(true);
          io.disconnect();
        }
      });
    }, { rootMargin: "200px" });
    if (containerRef.current) io.observe(containerRef.current);
    return () => io.disconnect();
  }, [autoLoadOnView, activated]);

  const onActivate = () => setActivated(true);

  return (
    <div
      ref={containerRef}
      className={`ytlite ${activated ? "is-activated" : ""} ${className}`}
      style={{ aspectRatio: aspect }}
      aria-label={title}
    >
      {!activated ? (
        <button
          type="button"
          className="ytlite__button"
          onClick={onActivate}
          aria-label={`Play video: ${title}`}
        >
          {/* progressive poster */}
          <img
            className="ytlite__poster"
            src={posterUrl}
            alt=""
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
          />
          <span className="ytlite__play" aria-hidden="true" />
        </button>
      ) : (
        <iframe
          className="ytlite__iframe"
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          // using privacy-enhanced domain + playsinline + modest UI
          src={`${host}/embed/${videoId}?autoplay=1&playsinline=1&modestbranding=1&rel=0`}
          loading="eager"
        />
      )}
      {/* noscript fallback links to YouTube */}
      <noscript>
        <a className="ytlite__fallback" href={`${host}/watch?v=${videoId}`}>
          Watch on YouTube
        </a>
      </noscript>
    </div>
  );
}
