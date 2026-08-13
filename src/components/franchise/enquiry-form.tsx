"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/site-data";
import { RuleDiamond } from "@/components/site/ornament";

/**
 * The enquiry form, drawn as a printed application: ruled blanks on bone paper
 * rather than rounded boxes.
 *
 * No submission endpoint has been chosen for this project yet, so the form does
 * not pretend to have sent anything. It validates, then hands the completed
 * enquiry to the visitor's mail client addressed to the franchise mailbox.
 *
 * TO WIRE A REAL BACKEND: replace the body of `send` with a POST to your
 * endpoint and set `MODE` to "api". Everything else, including the states
 * below, already handles the result.
 */
const MODE: "mailto" | "api" = "mailto";

type Fields = {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  site: string;
  capital: string;
  experience: string;
  message: string;
  consent: boolean;
};

const EMPTY: Fields = {
  name: "",
  phone: "",
  email: "",
  city: "",
  state: "",
  site: "",
  capital: "",
  experience: "",
  message: "",
  consent: false,
};

const SITE_OPTIONS = [
  "I own a suitable property",
  "I have identified a site",
  "I am still looking",
];

const CAPITAL_OPTIONS = [
  "Funds are in place now",
  "Funds available within three months",
  "Arranging finance",
];

const EXPERIENCE_OPTIONS = [
  "I run a food business already",
  "I have worked in food service",
  "This would be my first",
];

const STATE_OPTIONS = [
  "Karnataka",
  "Tamil Nadu",
  "Andhra Pradesh",
  "Telangana",
  "Kerala",
  "Maharashtra",
  "Other",
];

export function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "handed-off" | "failed">("idle");

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Tell us who to reply to.";
    if (!/^[+\d][\d\s-]{7,}$/.test(fields.phone.trim()))
      next.phone = "A number we can reach you on, with the country code.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim()))
      next.email = "This address does not look complete.";
    if (!fields.city.trim()) next.city = "Which city are you proposing?";
    if (!fields.state) next.state = "Choose a state.";
    if (!fields.site) next.site = "Tell us where you stand on a location.";
    if (!fields.capital) next.capital = "Tell us where the capital stands.";
    if (!fields.consent)
      next.consent = "We need your permission to contact you about this enquiry.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const send = async () => {
    if (!validate()) {
      const first = document.querySelector<HTMLElement>("[data-field-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("sending");

    if (MODE === "mailto") {
      const body = [
        `Name: ${fields.name}`,
        `Phone: ${fields.phone}`,
        `Email: ${fields.email}`,
        `Proposed city: ${fields.city}, ${fields.state}`,
        `Location: ${fields.site}`,
        `Capital: ${fields.capital}`,
        `Experience: ${fields.experience || "Not stated"}`,
        "",
        "Message:",
        fields.message || "(none)",
      ].join("\n");

      const href = `mailto:${CONTACT.franchiseEmail}?subject=${encodeURIComponent(
        `Unit franchise enquiry, ${fields.city}`,
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = href;
      setStatus("handed-off");
      return;
    }

    setStatus("failed");
  };

  if (status === "handed-off") {
    return (
      <div className="paper relative overflow-hidden bg-bone-100 px-8 py-14 text-center sm:px-14 sm:py-20">
        <div className="relative">
          <RuleDiamond className="mx-auto max-w-[12rem]" />
          <h3 className="mt-8 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold leading-tight tracking-[-0.025em]">
            Your enquiry is ready to send.
          </h3>
          <p className="mx-auto mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-granite-500">
            We have opened it in your mail application, addressed to{" "}
            <span className="text-ink-700">{CONTACT.franchiseEmail}</span>. Send
            it and we will reply within three working days.
          </p>
          <p className="mx-auto mt-6 max-w-[46ch] text-[0.9375rem] leading-relaxed text-granite-400">
            If nothing opened, write to us at that address directly and paste
            your details in.
          </p>
          <button
            type="button"
            onClick={() => {
              setFields(EMPTY);
              setStatus("idle");
            }}
            className="label link-brass mt-10 text-[0.625rem] text-ink-700"
          >
            Start another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void send();
      }}
      className="paper lift-panel relative overflow-hidden bg-bone-100"
    >
      <div
        aria-hidden="true"
        className="jaali jaali-dense absolute inset-x-0 top-0 h-5 opacity-45"
      />

      <div className="relative px-7 pb-12 pt-14 sm:px-12 sm:pb-14 sm:pt-16">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-semibold leading-tight tracking-[-0.025em]">
            Unit franchise enquiry
          </h3>
          <p className="label text-[0.625rem] text-granite-400">
            All fields marked are required
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          <Field
            label="Full name"
            required
            error={errors.name}
            value={fields.name}
            onChange={(v) => set("name", v)}
            autoComplete="name"
          />
          <Field
            label="Telephone"
            required
            error={errors.phone}
            value={fields.phone}
            onChange={(v) => set("phone", v)}
            type="tel"
            placeholder="+91"
            autoComplete="tel"
          />
          <Field
            label="Email"
            required
            error={errors.email}
            value={fields.email}
            onChange={(v) => set("email", v)}
            type="email"
            autoComplete="email"
          />
          <Field
            label="Proposed city"
            required
            error={errors.city}
            value={fields.city}
            onChange={(v) => set("city", v)}
          />
          <Choice
            label="State"
            required
            error={errors.state}
            value={fields.state}
            onChange={(v) => set("state", v)}
            options={STATE_OPTIONS}
          />
          <Choice
            label="Where you stand on a location"
            required
            error={errors.site}
            value={fields.site}
            onChange={(v) => set("site", v)}
            options={SITE_OPTIONS}
          />
          <Choice
            label="Capital readiness"
            required
            error={errors.capital}
            value={fields.capital}
            onChange={(v) => set("capital", v)}
            options={CAPITAL_OPTIONS}
          />
          <Choice
            label="Food business experience"
            value={fields.experience}
            onChange={(v) => set("experience", v)}
            options={EXPERIENCE_OPTIONS}
          />

          <div className="sm:col-span-2">
            <FieldShell label="Anything we should know" htmlFor="message">
              <textarea
                id="message"
                rows={4}
                value={fields.message}
                onChange={(e) => set("message", e.target.value)}
                className="w-full resize-none border-0 border-b border-bone-400 bg-transparent px-0 pb-3 pt-2 text-[1.0625rem] leading-relaxed text-ink-800 outline-none transition-colors duration-500 placeholder:text-granite-400 focus:border-brass-500"
                placeholder="The catchment, the frontage, your timeline"
              />
            </FieldShell>
          </div>
        </div>

        {/* Consent */}
        <div className="mt-11" data-field-error={errors.consent ? "true" : "false"}>
          <label className="flex cursor-pointer items-start gap-4">
            <span className="relative mt-1 flex h-4.5 w-4.5 shrink-0 items-center justify-center border border-granite-500">
              <input
                type="checkbox"
                checked={fields.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="peer absolute inset-0 cursor-pointer opacity-0"
                aria-describedby={errors.consent ? "consent-error" : undefined}
              />
              <span
                aria-hidden="true"
                className="h-2 w-2 rotate-45 bg-kumkum-600 opacity-0 transition-opacity duration-300 peer-checked:opacity-100"
              />
            </span>
            <span className="max-w-[62ch] text-[0.9375rem] leading-relaxed text-granite-500">
              I would like Shri Aradhyam to contact me about this enquiry by
              telephone and email.
            </span>
          </label>
          {errors.consent && (
            <p id="consent-error" className="label mt-3 text-[0.625rem] text-kumkum-600">
              {errors.consent}
            </p>
          )}
        </div>

        <div className="mt-11 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <button
            type="submit"
            disabled={status === "sending"}
            className="label group relative inline-flex items-center justify-center overflow-hidden bg-ink-800 px-9 py-5 text-[0.625rem] text-bone-100 transition-opacity disabled:opacity-60"
          >
            <span className="absolute inset-0 -translate-x-full bg-kumkum-700 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
            <span className="relative">
              {status === "sending" ? "Preparing" : "Send the enquiry"}
            </span>
          </button>

          <p className="max-w-[40ch] text-[0.9375rem] leading-relaxed text-granite-400">
            Or telephone the office on{" "}
            <span className="data text-ink-700">{CONTACT.phone}</span> between
            ten and six.
          </p>
        </div>

        {status === "failed" && (
          <p className="mt-6 border border-kumkum-600/45 px-4 py-3 text-[0.9375rem] text-kumkum-700">
            The enquiry could not be sent. Write to {CONTACT.franchiseEmail} and
            we will pick it up from there.
          </p>
        )}

        <p className="label mt-10 max-w-[60ch] text-[0.625rem] leading-relaxed text-granite-400">
          This form is not yet connected to a submission endpoint. It composes
          your enquiry in your own mail application so that nothing is lost.
        </p>
      </div>
    </form>
  );
}

/* --------------------------------------------------------------------------
   Field primitives, drawn as blanks on a ruled form.
   -------------------------------------------------------------------------- */

function FieldShell({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div data-field-error={error ? "true" : "false"}>
      <label
        htmlFor={htmlFor}
        className="label flex items-baseline gap-1.5 text-[0.625rem] text-granite-500"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="text-kumkum-600">
            &bull;
          </span>
        )}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p
          id={`${htmlFor}-error`}
          className="label mt-2.5 text-[0.625rem] leading-relaxed text-kumkum-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full border-0 border-b bg-transparent px-0 pb-3 pt-2 text-[1.0625rem] text-ink-800 outline-none transition-colors duration-500 placeholder:text-granite-400";

function Field({
  label,
  value,
  onChange,
  required,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <FieldShell label={label} htmlFor={id} required={required} error={error}>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} ${
          error ? "border-kumkum-600" : "border-bone-400 focus:border-brass-500"
        }`}
      />
    </FieldShell>
  );
}

function Choice({
  label,
  value,
  onChange,
  options,
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <FieldShell label={label} htmlFor={id} required={required} error={error}>
      <div className="relative">
        <select
          id={id}
          value={value}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} appearance-none pr-8 ${
            value ? "text-ink-800" : "text-granite-400"
          } ${error ? "border-kumkum-600" : "border-bone-400 focus:border-brass-500"}`}
        >
          <option value="">Choose one</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 right-1 h-1.5 w-1.5 rotate-45 border-b border-r border-brass-600"
        />
      </div>
    </FieldShell>
  );
}
