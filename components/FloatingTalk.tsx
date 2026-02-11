"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingTalk() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    if (isOpen) document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [isOpen]);

  useEffect(() => {
    const onOutsideClick = (event: MouseEvent) => {
      if (!dialogRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    if (isOpen) document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, [isOpen]);

  return (
    <div className="talkDock">
      {isOpen ? (
        <div className="talkDialog" role="dialog" aria-modal="false" aria-label="Contact options" ref={dialogRef}>
          <p className="talkTitle">Let&apos;s Talk</p>
          <a href="mailto:alex.c.marroig@gmail.com" className="talkLink">
            Email Alex
          </a>
          <a href="https://www.linkedin.com/in/alexmarroig/" className="talkLink" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      ) : null}

      <button className="talkFab" type="button" onClick={() => setIsOpen((value) => !value)}>
        Let&apos;s Talk
      </button>
    </div>
  );
}
