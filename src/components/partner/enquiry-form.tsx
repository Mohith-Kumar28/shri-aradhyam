"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/site-data";

/**
 * Five blanks and a button.
 *
 * There is no submission endpoint for this project yet, so the form does not
 * pretend to have sent anything: it validates, then hands the completed
 * enquiry to the visitor's own mail client, addressed to the enquiries
 * mailbox. To wire a real backend, replace the body of `send` with a POST.
 */

type Fields = "name" | "phone" | "email" | "city" | "message";

const BLANKS: { key: Fields; label: string; type: string; required: boolean }[] = [
  { key: "name", label: "Name", type: "text", required: true },
  { key: "phone", label: "Phone", type: "tel", required: true },
  { key: "email", label: "Email", type: "email", required: false },
  { key: "city", label: "City", type: "text", required: true },
];

const EMPTY: Record<Fields, string> = {
  name: "",
  phone: "",
  email: "",
  city: "",
  message: "",
};

export function EnquiryForm() {
  const [fields, setFields] = useState(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [handedOff, setHandedOff] = useState(false);

  const send = (event: React.FormEvent) => {
    event.preventDefault();

    const missing = BLANKS.filter((b) => b.required && !fields[b.key].trim());
    if (missing.length) {
      setError(`Please fill in ${missing.map((b) => b.label.toLowerCase()).join(", ")}.`);
      return;
    }
    setError(null);

    /* The subject carries who is writing and from where, so the enquiry is
       identifiable in the mailbox before it is opened. */
    const subject = `Partnership enquiry — ${fields.name.trim()}, ${fields.city.trim()}`;

    /* Every blank the visitor filled, labelled, in the order the form asks
       them. Optional blanks left empty are dropped rather than sent as
       headings with nothing under them. */
    const body = [
      "Partnership enquiry via shriaradhyam.com",
      "",
      `Name: ${fields.name.trim()}`,
      `Phone: ${fields.phone.trim()}`,
      fields.email.trim() ? `Email: ${fields.email.trim()}` : null,
      `City: ${fields.city.trim()}`,
      ...(fields.message.trim() ? ["", "Message:", fields.message.trim()] : []),
      "",
      "—",
      `Sent from the Partner With Us page on ${new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}.`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setHandedOff(true);
  };

  return (
    <form onSubmit={send} className="mt-10" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        {BLANKS.map((blank) => (
          <label key={blank.key} className="block">
            <span className="label text-[0.5625rem] text-granite-500">
              {blank.label}
              {blank.required ? null : " (optional)"}
            </span>
            <input
              type={blank.type}
              name={blank.key}
              value={fields[blank.key]}
              onChange={(e) =>
                setFields((f) => ({ ...f, [blank.key]: e.target.value }))
              }
              className="mt-2 w-full border-b border-bone-400 bg-transparent pb-2 text-[1.0625rem] text-ink-800 outline-none transition-colors duration-300 focus:border-brass-600"
            />
          </label>
        ))}
      </div>

      <label className="mt-6 block">
        <span className="label text-[0.5625rem] text-granite-500">Message (optional)</span>
        <textarea
          name="message"
          rows={4}
          value={fields.message}
          onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
          className="mt-2 w-full resize-y border-b border-bone-400 bg-transparent pb-2 text-[1.0625rem] text-ink-800 outline-none transition-colors duration-300 focus:border-brass-600"
        />
      </label>

      {error ? (
        <p role="alert" className="mt-6 text-[0.9375rem] text-ink-800">
          {error}
        </p>
      ) : null}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="label border border-ink-700 px-7 py-4 text-[0.625rem] text-ink-800 transition-colors duration-500 hover:bg-ink-800 hover:text-bone-100"
        >
          Send enquiry
        </button>
        {handedOff ? (
          <p className="text-[0.9375rem] text-granite-500">
            Your mail app should have opened with the enquiry ready to send.
          </p>
        ) : null}
      </div>
    </form>
  );
}
