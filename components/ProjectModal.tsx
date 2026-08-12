"use client";

import { useEffect, useState, FormEvent } from "react";
import { useProjectModal } from "@/components/ModalContext";

const SERVICE_OPTIONS = ["Content Production", "Brand Identity", "Paid Advertising", "Other"];
const INDUSTRY_OPTIONS = [
  "Restaurants & Cafes",
  "Real Estate",
  "Hotels & Resorts",
  "Gyms & Fitness",
  "Luxury Brands",
  "E-commerce",
  "Other",
];
const BUDGET_OPTIONS = ["Less than 500 BHD", "500 - 1,500 BHD", "1,500 - 5,000 BHD", "5,000+ BHD", "Not sure yet"];

type Status = "idle" | "submitting" | "success" | "activation" | "error";

export default function ProjectModal() {
  const { isOpen, closeModal } = useProjectModal();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setStatus("idle"), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const nextErrors: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) nextErrors.name = "Please enter your full name.";
    if (!String(data.get("brand") || "").trim()) nextErrors.brand = "Please enter your brand name.";
    if (!String(data.get("whatsapp") || "").trim()) nextErrors.whatsapp = "Please enter a WhatsApp number.";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("https://formsubmit.co/ajax/cinmachproductions@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json().catch(() => null);
      if (res.ok) {
        setStatus("success");
      } else if (json && /activate/i.test(JSON.stringify(json))) {
        setStatus("activation");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <button
        type="button"
        aria-label="Close"
        onClick={closeModal}
        className="modal-backdrop absolute inset-0 bg-black-primary/85 backdrop-blur-sm"
      />

      <div className="modal-pop relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto bg-black-secondary border border-border-dark">
        <div className="sticky top-0 flex items-center justify-between border-b border-border-dark bg-black-secondary px-6 py-5 sm:px-10">
          <div>
            <span className="text-label text-red">Start Your Project</span>
            <h2 className="text-h3 text-white-primary mt-1">Tell us what you're building</h2>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close modal"
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-border-dark text-white-primary hover:border-white-primary transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {status === "success" || status === "activation" ? (
            <div className="flex flex-col items-center text-center gap-4 py-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-red">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
                  <path d="M1 8L7 14L19 1" stroke="#C81E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {status === "success" ? (
                <>
                  <h3 className="text-h3 text-white-primary">Request Received</h3>
                  <p className="text-body text-gray-light max-w-sm">
                    Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-h3 text-white-primary">Activation Needed</h3>
                  <p className="text-body text-gray-light max-w-sm">
                    FormSubmit has sent an activation email to cinmachproductions@gmail.com. Please check your inbox
                    and click the confirmation link.
                  </p>
                </>
              )}
              <button type="button" onClick={closeModal} className="btn btn-outline-dark mt-2">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="hidden" name="_subject" value="New project inquiry -- Cinmach Productions" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {status === "error" && (
                <div className="border-2 border-red bg-red-tint px-4 py-3">
                  <p className="text-body-sm text-red">
                    Please correct the fields below, or email us directly at contact@cinmachproductions.com.
                  </p>
                </div>
              )}

              <Field label="Full Name" name="name" required error={errors.name} />
              <Field label="Brand Name" name="brand" required error={errors.brand} />
              <Field label="WhatsApp Number" name="whatsapp" type="tel" required error={errors.whatsapp} />

              <SelectField label="Service Needed" name="service" options={SERVICE_OPTIONS} />
              <SelectField label="Industry" name="industry" options={INDUSTRY_OPTIONS} />
              <SelectField label="Estimated Budget" name="budget" options={BUDGET_OPTIONS} />

              <label className="flex flex-col gap-2">
                <span className="text-body-sm text-gray-light">Project Details & Vision</span>
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Tell us about your brand, timeline, and what you're hoping to achieve..."
                  className="field resize-none"
                />
              </label>

              <button type="submit" disabled={status === "submitting"} className="btn btn-primary mt-2 w-full">
                {status === "submitting" ? "Submitting..." : "Submit Request →"}
              </button>
              <p className="text-caption text-gray text-center">* Required fields</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-body-sm text-gray-light">
        {label} {required && <span className="text-red">*</span>}
      </span>
      <input name={name} type={type} className={`field ${error ? "field-error" : ""}`} />
      {error && <span className="text-caption text-red">{error}</span>}
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-body-sm text-gray-light">{label}</span>
      <select name={name} defaultValue="" className="field appearance-none">
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
