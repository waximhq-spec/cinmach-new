"use client";

import { useProjectModal } from "@/components/ModalContext";

export default function BookCallButton({
  className = "btn btn-primary",
  children = "Book a Strategy Call",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openModal } = useProjectModal();
  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
