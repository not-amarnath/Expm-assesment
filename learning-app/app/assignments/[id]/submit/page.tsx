"use client";

import { useState } from "react";
import Link from "next/link";

export default function AssignmentSubmitPage() {
    const [file, setFile] = useState<File | null>(null);
    const [notes, setNotes] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (!file) return;

        setIsSubmitting(true);
        // Simulate upload delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center px-4">
                <div className="text-center animate-fade-in">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Submitted Successfully!</h1>
                    <p className="text-gray-500 mb-8">Your assignment has been submitted and is awaiting review.</p>

                    <div className="card mb-6 text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium text-gray-900 text-sm">{file?.name}</p>
                                <p className="text-xs text-gray-500">{file?.size ? (file.size / 1024).toFixed(1) + " KB" : ""}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-green-600 text-sm">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Submitted on {new Date().toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            })}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link href="/" className="block">
                            <button className="btn-primary w-full">
                                Back to Dashboard
                            </button>
                        </Link>
                        <Link href="/assignments/1" className="block">
                            <button className="btn-secondary w-full">
                                View Submission
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pb-6">
            {/* Header */}
            <header className="bg-gradient-to-r from-primary to-indigo-500 text-white px-4 pt-12 pb-6 rounded-b-3xl">
                <Link href="/assignments/1" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm">Back</span>
                </Link>

                <h1 className="text-xl font-bold mb-1">Submit Assignment</h1>
                <p className="text-indigo-100 text-sm">Data Structures Lab Report</p>
            </header>

            <div className="px-4 -mt-4 space-y-4">
                {/* File Upload Area */}
                <div className="card">
                    <h2 className="font-semibold text-gray-900 mb-3">Upload Your File</h2>

                    <div
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${dragActive
                                ? "border-primary bg-indigo-50"
                                : file
                                    ? "border-green-300 bg-green-50"
                                    : "border-gray-200 hover:border-gray-300"
                            }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    >
                        {file ? (
                            <div className="animate-fade-in">
                                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-900 mb-1">{file.name}</p>
                                <p className="text-sm text-gray-500 mb-4">{(file.size / 1024).toFixed(1)} KB</p>
                                <button
                                    onClick={() => setFile(null)}
                                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                                >
                                    Remove file
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                </div>
                                <p className="font-medium text-gray-900 mb-1">Drag and drop your file here</p>
                                <p className="text-sm text-gray-500 mb-4">or</p>
                                <label className="btn-primary cursor-pointer inline-block">
                                    Browse Files
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept=".pdf,.doc,.docx,.zip"
                                        onChange={handleFileChange}
                                    />
                                </label>
                                <p className="text-xs text-gray-400 mt-4">Supported: PDF, DOC, DOCX, ZIP (Max 25MB)</p>
                            </>
                        )}
                    </div>
                </div>

                {/* Notes */}
                <div className="card">
                    <h2 className="font-semibold text-gray-900 mb-3">Additional Notes (Optional)</h2>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Add any comments for your instructor..."
                        className="w-full h-32 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    />
                </div>

                {/* Submission Info */}
                <div className="card bg-amber-50 border-amber-100">
                    <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <p className="font-medium text-amber-800 text-sm">Important</p>
                            <p className="text-sm text-amber-700 mt-1">
                                Once submitted, you cannot edit your submission. Make sure your file is correct before submitting.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    disabled={!file || isSubmitting}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 ${file && !isSubmitting
                            ? "btn-primary shadow-lg shadow-primary/30"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    {isSubmitting ? (
                        <>
                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Submit Assignment
                        </>
                    )}
                </button>

                {/* Cancel */}
                <Link href="/assignments/1" className="block text-center">
                    <button className="text-gray-500 hover:text-gray-700 font-medium text-sm">
                        Cancel
                    </button>
                </Link>
            </div>
        </div>
    );
}
