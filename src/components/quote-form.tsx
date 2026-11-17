"use client";

import { useState } from "react";
import { business, finalCta } from "@/lib/content";
import { CheckIcon, PhoneIcon } from "./icons";

type Fields = {
  name: string;
  email: string;
  phone: string;
  zip: string;
  bedrooms: string;
  frequency: string;
  notes: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  zip: "",
  bedrooms: "2",
  frequency: "Biweekly",
  notes: "",
};

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email so we can send the quote.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email address looks incomplete.";
  }
  if (!values.zip.trim()) {
    errors.zip = "Please enter your ZIP code.";
  } else if (!/^\d{5}$/.test(values.zip.trim())) {
    errors.zip = "Enter a 5-digit ZIP code.";
  }
  return errors;
}

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground transition-colors duration-200 placeholder:text-muted-foreground/70 hover:border-secondary";
const labelClass = "block text-sm font-bold text-foreground";
const errorClass = "mt-1.5 flex items-center gap-1.5 text-sm font-medium text-destructive";

export function QuoteForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof Fields, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    // Clear the error as soon as the person starts fixing it
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.getElementById(Object.keys(found)[0]);
      first?.focus();
      return;
    }
    // TODO: connect to email, CRM, or booking system. Nothing is sent yet.
    setSubmitted(true);
  }

  return (
    <section id="quote" className="scroll-mt-20 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">{finalCta.heading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {finalCta.subheading}
          </p>

          <ul className="mt-8 grid gap-3">
            {[
              "Same-day quote, every weekday",
              "No walkthrough or in-home estimate",
              "Free re-clean if anything is missed",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-medium text-foreground">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-border bg-card p-5">
            <p className="font-bold text-foreground">Would rather just talk?</p>
            <a
              href={business.phoneHref}
              className="mt-1 inline-flex cursor-pointer items-center gap-2 py-2 text-lg font-bold text-primary transition-colors duration-200 hover:text-primary-hover"
            >
              <PhoneIcon className="h-5 w-5" />
              {business.phone}
            </a>
            <p className="mt-1 text-sm text-muted-foreground">{business.hours}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-7 shadow-lg shadow-primary/5 sm:p-9">
          {submitted ? (
            <div role="status" className="py-8 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/10 text-success">
                <CheckIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold">Request received</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Thanks {values.name.split(" ")[0]}. We will send your flat-rate quote to{" "}
                <span className="font-semibold text-foreground">{values.email}</span> by the end
                of the day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setValues(empty);
                  setSubmitted(false);
                }}
                className="mt-6 cursor-pointer rounded-lg border-2 border-primary px-5 py-3 font-bold text-primary transition-colors duration-200 hover:bg-surface"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className={labelClass}>
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldClass}
                    placeholder="Alex Rivera"
                  />
                  {errors.name && (
                    <p id="name-error" className={errorClass}>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : "email-help"}
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                  {errors.email ? (
                    <p id="email-error" className={errorClass}>
                      {errors.email}
                    </p>
                  ) : (
                    <p id="email-help" className="mt-1.5 text-sm text-muted-foreground">
                      Where we send the quote.
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone <span className="font-medium text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={fieldClass}
                    placeholder="(206) 555-0100"
                  />
                </div>

                <div>
                  <label htmlFor="zip" className={labelClass}>
                    ZIP code
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    inputMode="numeric"
                    value={values.zip}
                    onChange={(e) => update("zip", e.target.value)}
                    aria-invalid={!!errors.zip}
                    aria-describedby={errors.zip ? "zip-error" : undefined}
                    className={fieldClass}
                    placeholder="98107"
                  />
                  {errors.zip && (
                    <p id="zip-error" className={errorClass}>
                      {errors.zip}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="bedrooms" className={labelClass}>
                    Bedrooms
                  </label>
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    value={values.bedrooms}
                    onChange={(e) => update("bedrooms", e.target.value)}
                    className={`${fieldClass} cursor-pointer`}
                  >
                    {["Studio", "1", "2", "3", "4", "5+"].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="frequency" className={labelClass}>
                    How often?
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    value={values.frequency}
                    onChange={(e) => update("frequency", e.target.value)}
                    className={`${fieldClass} cursor-pointer`}
                  >
                    {["Weekly", "Biweekly", "Monthly", "One-time deep clean", "Move in / move out"].map(
                      (option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ),
                    )}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="notes" className={labelClass}>
                    Anything we should know?{" "}
                    <span className="font-medium text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={values.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    className={`${fieldClass} resize-y`}
                    placeholder="Pets, parking, stairs, or areas that need extra attention."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full cursor-pointer rounded-xl bg-accent px-7 py-4 text-base font-bold text-on-accent transition-all duration-200 hover:bg-accent-hover hover:shadow-md"
              >
                Send my free quote request
              </button>
              <p className="mt-3.5 text-center text-sm text-muted-foreground">
                No obligation. We never share your details.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
