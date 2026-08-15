"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_CONTACT } from "@/constants/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    country: "India",
    city: "",
    message: "",
    subscribePromotional: false,
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      setErrorMsg("Please agree to the Terms & Conditions before submitting.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        contactNo: "",
        email: "",
        country: "India",
        city: "",
        message: "",
        subscribePromotional: false,
        agreeTerms: false,
      });
    }, 1000);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-lg max-w-3xl mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold font-display text-gray-900 leading-tight">
          Get Started With <span className="text-kc-orange">Y2K Exim</span>
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mt-2 font-medium">
          <span className="text-red-500 font-bold">*</span> Fill out the form and we will get back to you within 24 hours
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 font-display">Thank You!</h3>
          <p className="text-sm text-gray-600 font-medium max-w-md mx-auto">
            Your inquiry has been submitted successfully. Our trade compliance experts will get back to you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2.5 bg-kc-orange text-white font-bold text-xs rounded-xl shadow-xs hover:bg-orange-600 transition"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMsg && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-semibold flex items-center gap-2">
              <i className="fas fa-exclamation-circle text-sm"></i>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-kc-orange focus:ring-2 focus:ring-orange-100 transition outline-none font-medium"
            />
          </div>

          {/* Contact No & Email Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                Contact No (With country code) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNo"
                required
                value={formData.contactNo}
                onChange={handleChange}
                placeholder="Enter Contact No"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-kc-orange focus:ring-2 focus:ring-orange-100 transition outline-none font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-kc-orange focus:ring-2 focus:ring-orange-100 transition outline-none font-medium"
              />
            </div>
          </div>

          {/* Country & City Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:bg-white focus:border-kc-orange focus:ring-2 focus:ring-orange-100 transition outline-none font-medium cursor-pointer"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Singapore">Singapore</option>
                <option value="Germany">Germany</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-kc-orange focus:ring-2 focus:ring-orange-100 transition outline-none font-medium"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="write your message"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-kc-orange focus:ring-2 focus:ring-orange-100 transition outline-none font-medium resize-y"
            ></textarea>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2.5 pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600 leading-normal">
              <input
                type="checkbox"
                name="subscribePromotional"
                checked={formData.subscribePromotional}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-kc-orange focus:ring-kc-orange accent-orange-600 cursor-pointer"
              />
              <span>
                I wish to Subscribe for receive promotional update on RCS sms / call / emails / whatsapp by{" "}
                <Link
                  href="/"
                  className="text-kc-orange font-semibold hover:underline"
                >
                  y2kexim.com
                </Link>
              </span>
            </label>

            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600 leading-normal">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-kc-orange focus:ring-kc-orange accent-orange-600 cursor-pointer"
              />
              <span>
                <span className="text-red-500 font-bold">*</span> I agree with{" "}
                <Link href="/terms-and-conditions" target="_blank" className="text-kc-orange font-semibold hover:underline">
                  Terms & Conditions
                </Link>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-base shadow-md hover:shadow-lg transition duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-circle-notch fa-spin text-sm"></i>
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
