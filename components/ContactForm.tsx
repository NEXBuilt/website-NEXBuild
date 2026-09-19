"use client";

import { useState } from "react";
import Arrow from "./Arrow";
import { budgets, site } from "@/lib/data";

/**
 * Sends the inquiry by opening the visitor's email app (mailto).
 * To receive submissions without that, swap `handleSubmit` for a fetch() to
 * Formspree / Resend / your own API route — see README.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "");
    const email = String(f.get("email") ?? "");
    const message = String(f.get("message") ?? "");
    const budget = String(f.get("budget") ?? "");

    const subject = `New project inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6 md:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-soft">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className="input" placeholder="Jane Cooper" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-soft">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="input"
          placeholder="jane@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-soft">
          What are you building?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input resize-none"
          placeholder="A short description of the product, who it's for, and any deadline."
        />
      </div>
      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-ink-soft">
          Approx. budget
        </label>
        <select id="budget" name="budget" className="input appearance-none" defaultValue={budgets[0]}>
          {budgets.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send inquiry
        <Arrow />
      </button>

      {sent && (
        <p role="status" className="text-sm text-ink-soft">
          Your email app should open with the message ready to send. If it doesn&apos;t, write to{" "}
          <a className="font-medium text-accent underline underline-offset-2" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
