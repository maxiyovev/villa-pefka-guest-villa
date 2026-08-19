import { useState } from "react";
import type { FormEvent } from "react";
import { rates } from "~/data/rates";

// ============================================================================
// WEB3FORMS CONFIGURATION
// ----------------------------------------------------------------------------
// The inquiry form emails submissions to the owner via Web3Forms
// (https://web3forms.com). To activate it:
//
//   1. Sign up for a free account at https://web3forms.com
//   2. Add the owner's inbox (michaela.manolova@gmail.com) as the destination
//   3. Copy the generated access key and paste it below, replacing the
//      placeholder, e.g.:
//        const WEB3FORMS_ACCESS_KEY = "a1b2c3d4-....";
//
// Until the real key is provided, the form shows a friendly "contact us
// directly" message instead of submitting.
// ============================================================================
const WEB3FORMS_ACCESS_KEY = "dummy-test-key-00000000-0000";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// NOTE: checked at runtime (not `===` on the literal) so bundlers keep the
// fetch pipeline in the build; once the real key replaces the placeholder
// below, the form switches from "email us directly" to live Web3Forms submits.
const IS_PLACEHOLDER_KEY =
  !WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith("YOUR_WEB3FORMS_");

const OWNER_EMAIL = "michaela.manolova@gmail.com"; // fallback contact until the key is set

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-sand bg-white px-4 py-3 text-sm text-deep-blue placeholder:text-warm-gray/50 shadow-sm outline-none transition-all duration-300 focus:border-terracotta focus:ring-2 focus:ring-terracotta/30";

const labelClasses =
  "mb-1.5 block text-sm font-semibold text-deep-blue";

export function Reservation() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const checkIn = String(formData.get("check_in") ?? "").trim();
    const checkOut = String(formData.get("check_out") ?? "").trim();

    setStatus("submitting");
    setErrorMessage("");

    // Guard against the unconfigured placeholder key — fail gracefully so the
    // owner's guests always get a working path to reach them.
    if (IS_PLACEHOLDER_KEY) {
      setStatus("error");
      setErrorMessage(
        `Our online form isn't connected just yet — please email us directly at ${OWNER_EMAIL} and we'll get back to you shortly.`
      );
      return;
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${name} — Villa Pefka Guest Villa`,
          from_name: name,
          name,
          email,
          message,
          check_in: checkIn || undefined,
          check_out: checkOut || undefined,
          // Append dates to the message too, so they're visible even in
          // clients that only surface the core fields.
          ...(checkIn || checkOut
            ? {
                message: `${message}\n\nPreferred stay: ${
                  checkIn || "—"
                } to ${checkOut || "—"}`,
              }
            : {}),
          botcheck: String(formData.get("botcheck") ?? ""),
        }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || data.success !== true) {
        throw new Error(data.message || "The form could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Please try again, or email us directly at " +
          OWNER_EMAIL +
          "."
      );
    }
  }

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      {/* Decorative element */}
      <div
        className="pointer-events-none absolute -left-12 top-10 select-none text-[14rem] leading-none text-olive/5"
        aria-hidden="true"
      >
        🌲
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
            Reservation
          </span>
          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-deep-blue sm:text-5xl">
            Plan Your Stay
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-warm-gray">
            Check our seasonal rates below, then send us an inquiry — we'll
            confirm availability and reply shortly.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-5">
          {/* ============ RATES TABLE ============ */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border-t-4 border-gold bg-white shadow-md shadow-deep-blue/4 transition-all duration-300 hover:shadow-xl hover:shadow-deep-blue/8">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-left">
                  <thead>
                    <tr className="border-b border-sand/60 bg-cream-dark/40">
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-terracotta">
                        Season
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-deep-blue-light">
                        Dates
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-widest text-deep-blue-light">
                        Nightly Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rates.map((rate) => (
                      <tr
                        key={rate.season}
                        className="border-b border-sand/40 transition-colors last:border-0 hover:bg-cream/70"
                      >
                        <td className="px-6 py-5 font-serif text-base font-semibold text-deep-blue">
                          {rate.season}
                        </td>
                        <td className="px-6 py-5 text-sm text-warm-gray">
                          {rate.dates}
                        </td>
                        <td className="whitespace-nowrap px-6 py-5 text-right font-serif text-base font-bold text-terracotta">
                          {rate.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="border-t border-sand/40 bg-cream/60 px-6 py-4 text-xs leading-relaxed text-warm-gray">
                Prices are per night for the whole villa. Final rates and
                availability are confirmed with the owner — just ask via the
                form.
              </p>
            </div>

            {/* Small trust note */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/25 bg-gold/10 px-5 py-4">
              <span className="mt-0.5 text-gold" aria-hidden="true">
                ★
              </span>
              <p className="text-sm leading-relaxed text-deep-blue">
                Every guest who has stayed at Villa Pefka rated their visit{" "}
                <strong>10/10</strong> — book with confidence.
              </p>
            </div>
          </div>

          {/* ============ INQUIRY FORM ============ */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-8 shadow-md shadow-deep-blue/4 transition-all duration-300 hover:shadow-xl hover:shadow-deep-blue/8 sm:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-olive/10 text-olive">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <h3 className="mt-6 font-serif text-3xl font-bold text-deep-blue">
                    Thank You!
                  </h3>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-warm-gray">
                    Your inquiry has been sent — we'll reply shortly. We can't
                    wait to welcome you to Villa Pefka.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 inline-flex items-center rounded-full border border-terracotta/40 px-6 py-2.5 text-sm font-semibold text-terracotta transition-all duration-300 hover:bg-terracotta hover:text-white"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-2xl font-bold text-deep-blue">
                    Send Us an Inquiry
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                    Tell us about your stay — dates, guests, questions. We
                    usually reply within 24 hours.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                    noValidate
                  >
                    {/* Honeypot (hidden anti-spam field, ignored by real users) */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      style={{ display: "none" }}
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="inquiry-name" className={labelClasses}>
                          Name
                        </label>
                        <input
                          id="inquiry-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder="Your full name"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiry-email" className={labelClasses}>
                          Email
                        </label>
                        <input
                          id="inquiry-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="you@example.com"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="inquiry-checkin" className={labelClasses}>
                          Check-in{" "}
                          <span className="font-normal text-warm-gray/70">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="inquiry-checkin"
                          name="check_in"
                          type="date"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiry-checkout" className={labelClasses}>
                          Check-out{" "}
                          <span className="font-normal text-warm-gray/70">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="inquiry-checkout"
                          name="check_out"
                          type="date"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiry-message" className={labelClasses}>
                        Your Question or Reservation Request
                      </label>
                      <textarea
                        id="inquiry-message"
                        name="message"
                        rows={5}
                        placeholder="Dates you're considering, number of guests, anything we should know…"
                        className={`${inputClasses} resize-y`}
                      />
                    </div>

                    {status === "error" && (
                      <div
                        role="alert"
                        className="rounded-xl border border-terracotta/30 bg-terracotta/10 px-4 py-3 text-sm leading-relaxed text-terracotta-dark"
                      >
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-base font-semibold text-white shadow-lg shadow-terracotta/25 transition-all duration-300 hover:bg-terracotta-dark hover:shadow-xl hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg
                            className="h-5 w-5 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <span aria-hidden="true">→</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-warm-gray/80">
                      We'll never share your details — your inquiry goes
                      straight to the villa's inbox.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
