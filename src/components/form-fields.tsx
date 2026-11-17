"use client";

import type { ReactNode } from "react";

export const inputClass =
  "mt-2 w-full rounded-none border-0 border-b border-line-strong bg-transparent px-0 py-3 text-ink transition-colors duration-200 placeholder:text-muted/55 hover:border-ink focus:border-accent focus:outline-none focus:ring-0";

export function Field({
  id,
  label,
  error,
  help,
  optional,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  help?: string;
  optional?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label-mono block">
        {label}
        {optional && <span className="normal-case tracking-normal"> (optional)</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-danger">
          {error}
        </p>
      ) : help ? (
        <p id={`${id}-help`} className="mt-2 text-sm text-muted">
          {help}
        </p>
      ) : null}
    </div>
  );
}

export function SubmitButton({
  pending,
  children,
}: {
  pending: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-10 inline-flex cursor-pointer items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors duration-200 hover:bg-accent disabled:cursor-wait disabled:opacity-60"
    >
      {pending ? "Sending…" : children}
    </button>
  );
}

export function FormSuccess({
  title,
  message,
  onReset,
}: {
  title: string;
  message: string;
  onReset: () => void;
}) {
  return (
    <div role="status" className="border-t border-line-strong py-12">
      <p className="label-mono">Received</p>
      <h3 className="mt-4 text-3xl">{title}</h3>
      <p className="mt-4 max-w-md leading-relaxed text-muted">{message}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 cursor-pointer rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink"
      >
        Send another
      </button>
    </div>
  );
}
