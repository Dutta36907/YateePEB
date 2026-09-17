"use client";

import React, { useState } from "react";
import { UploadCloud, Send, Check } from "lucide-react";
import { JobOpening } from "@/types";

interface JobApplicationFormProps {
  job: JobOpening;
}

export function JobApplicationForm({ job }: JobApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    currentLocation: "",
    resumeFileName: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs lg:sticky lg:top-28">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
              Fast-Track Application
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-heading mt-2">
              Apply for this Position
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Fill out your details to submit your profile directly to our HR leadership.
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="rahul@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 90390 52643"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Experience (Years) *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 6 Years"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Current City *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Pune, Maharashtra"
                value={formData.currentLocation}
                onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Resume Upload Box */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Upload Resume (PDF / DOCX) *
            </label>
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center bg-white hover:border-blue-400 transition-colors cursor-pointer">
              <UploadCloud className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <p className="text-xs font-semibold text-slate-700">
                {formData.resumeFileName ? formData.resumeFileName : "Click to select or drag your CV here"}
              </p>
              <span className="text-[10px] text-slate-400">PDF or Word file (Max 10MB)</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setFormData({ ...formData, resumeFileName: e.target.files[0].name });
                  }
                }}
                className="hidden"
                id="resume-file"
              />
              <label htmlFor="resume-file" className="block mt-1 text-[11px] font-bold text-blue-600 cursor-pointer">
                Browse File
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Cover Note / Portfolio Link
            </label>
            <textarea
              rows={3}
              placeholder="Brief note on your structural steel / PEB projects experience..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#1D3A74] hover:bg-[#162E60] text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <Send className="w-4 h-4" />
            <span>Submit Application</span>
          </button>
        </form>
      ) : (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-heading">
            Application Received!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            Thank you, <span className="font-bold">{formData.name}</span>. Your application for <span className="font-bold">{job.title}</span> has been routed to our recruitment team.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-blue-600 hover:underline pt-2"
          >
            Submit another application
          </button>
        </div>
      )}
    </div>
  );
}
