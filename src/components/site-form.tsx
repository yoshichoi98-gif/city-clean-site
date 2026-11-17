"use client";

import { useState } from "react";
import { submitForm, type FormName } from "@/lib/submit";
import { Field, FormSuccess, SubmitButton, inputClass } from "./form-fields";

export type FieldSpec = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  help?: string;
  placeholder?: string;
  full?: boolean;
};

export function SiteForm({
  form,
  fields,
  submitLabel,
  successTitle,
  successMessage,
}: {
  form: FormName;
  fields: FieldSpec[];
  submitLabel: string;
  successTitle: string;
  successMessage: string;
}) {
  const initial = Object.fromEntries(
    fields.map((f) => [f.name, f.type === "select" ? (f.options?.[0] ?? "") : ""]),
  );

  const [values, setValues] = useState<Record<string, string>>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function update(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function validate() {
    const found: Record<string, string> = {};
    for (const field of fields) {
      const value = (values[field.name] ?? "").trim();
      if (field.required && !value) {
        found[field.name] = `${field.label} is required.`;
        continue;
      }
      if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        found[field.name] = "That email address looks incomplete.";
      }
    }
    return found;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }

    setPending(true);
    const result = await submitForm(form, values);
    setPending(false);

    if (result.ok) {
      setDone(true);
    } else {
      setFormError(result.message);
    }
  }

  if (done) {
    return (
      <FormSuccess
        title={successTitle}
        message={successMessage}
        onReset={() => {
          setValues(initial);
          setDone(false);
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        {fields.map((field) => {
          const id = field.name;
          const error = errors[id];
          const described = error
            ? `${id}-error`
            : field.help
              ? `${id}-help`
              : undefined;

          return (
            <Field
              key={id}
              id={id}
              label={field.label}
              error={error}
              help={field.help}
              optional={!field.required}
              className={field.full || field.type === "textarea" ? "sm:col-span-2" : ""}
            >
              {field.type === "textarea" ? (
                <textarea
                  id={id}
                  name={id}
                  rows={4}
                  value={values[id]}
                  onChange={(e) => update(id, e.target.value)}
                  aria-invalid={!!error}
                  aria-describedby={described}
                  placeholder={field.placeholder}
                  className={`${inputClass} resize-y`}
                />
              ) : field.type === "select" ? (
                <select
                  id={id}
                  name={id}
                  value={values[id]}
                  onChange={(e) => update(id, e.target.value)}
                  aria-invalid={!!error}
                  aria-describedby={described}
                  className={`${inputClass} cursor-pointer`}
                >
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={id}
                  type={field.type ?? "text"}
                  value={values[id]}
                  onChange={(e) => update(id, e.target.value)}
                  aria-invalid={!!error}
                  aria-describedby={described}
                  placeholder={field.placeholder}
                  className={inputClass}
                />
              )}
            </Field>
          );
        })}
      </div>

      {formError && (
        <p role="alert" className="mt-6 text-sm font-medium text-danger">
          {formError}
        </p>
      )}

      <SubmitButton pending={pending}>{submitLabel}</SubmitButton>
      <p className="mt-4 text-sm text-muted">
        We reply within one business day. Your details are never shared.
      </p>
    </form>
  );
}
