"use client";

import { IconButton, Media, type MediaProps } from "@once-ui-system/core";
import Image from "next/image";
import { type KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./EnlargeableMedia.module.scss";

interface EnlargeableMediaProps extends Omit<MediaProps, "enlarge"> {
  /** Quality of the full screen image. Higher than the grid thumbnails on purpose. */
  enlargedQuality?: number;
}

const isYouTube = (src: string) => /youtube\.com|youtu\.be/.test(src);

/**
 * Media with a full screen view on click.
 *
 * Once UI's own `enlarge` only CSS-scales the thumbnail, so the browser keeps the
 * small `sizes` candidate and the result looks blurry. Here the overlay renders a
 * separate image asking for the full viewport width, and it can be dismissed with
 * the close button, the backdrop or Escape.
 */
export function EnlargeableMedia({
  src,
  alt = "",
  enlargedQuality = 90,
  ...rest
}: EnlargeableMediaProps) {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const isPlayable = src.endsWith(".mp4") || isYouTube(src);

  useEffect(() => setIsMounted(true), []);

  const close = useCallback(() => setIsEnlarged(false), []);
  const open = useCallback(() => setIsEnlarged(true), []);

  // Modal dialog handles Escape and focus trapping, we only lock the page scroll.
  useEffect(() => {
    if (!isEnlarged) return;

    dialogRef.current?.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isEnlarged]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  };

  return (
    <>
      <Media
        src={src}
        alt={alt}
        cursor={isPlayable ? undefined : "interactive"}
        {...(isPlayable
          ? {}
          : {
              role: "button",
              tabIndex: 0,
              "aria-label": alt ? `Enlarge image: ${alt}` : "Enlarge image",
              onClick: open,
              onKeyDown: handleKeyDown,
            })}
        {...rest}
      />
      {isMounted &&
        isEnlarged &&
        createPortal(
          <dialog
            ref={dialogRef}
            className={styles.dialog}
            aria-label={alt || "Enlarged image"}
            onClose={close}
          >
            {/* Full surface dismiss target, so clicking anywhere around the image closes it */}
            <button
              type="button"
              className={styles.backdrop}
              aria-label="Close image"
              onClick={close}
            />
            <IconButton
              className={styles.close}
              icon="close"
              variant="secondary"
              size="l"
              aria-label="Close image"
              onClick={close}
            />
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              priority
              sizes="100vw"
              quality={enlargedQuality}
              className={styles.image}
            />
          </dialog>,
          document.body,
        )}
    </>
  );
}
