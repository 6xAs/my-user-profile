"use client";

import { useEffect, useState } from "react";
import { BiCheck, BiCopy, BiEnvelope } from "react-icons/bi";

type CopyEmailButtonProps = {
  email: string;
  label?: string;
  className?: string;
};

export default function CopyEmailButton({
  email,
  label = "Copiar e-mail",
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={className}
      aria-label={`Copiar e-mail ${email}`}
    >
      {copied ? (
        <>
          <BiCheck className="text-lg" />
          E-mail copiado
        </>
      ) : (
        <>
          <BiEnvelope className="text-lg" />
          {label}
          <BiCopy className="text-base" />
        </>
      )}
    </button>
  );
}
