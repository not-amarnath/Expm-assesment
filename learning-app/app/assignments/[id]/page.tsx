"use client";

import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";

// Mock assignment data
const assignmentData = {
    id: "1",
    title: "Data Structures Lab Report",
    courseName: "Data Structures & Algorithms",
    instructor: "Dr. Sarah Johnson",
    dueDate: "February 7, 2026 at 11:59 PM",
    daysLeft: 1,
    status: "pending" as const,
    points: 100,
    description: `Write a comprehensive lab report analyzing the implementation and performance of three different sorting algorithms: Bubble Sort, Merge Sort, and Quick Sort.

Your report should include:
• Implementation details for each algorithm
• Time complexity analysis (Big-O notation)
• Space complexity analysis
• Performance comparison with test cases
• Graphs showing execution time vs. input size
• Conclusion with recommendations`,
    requirements: [
        "Report must be 5-8 pages in PDF format",
        "Include code snippets with syntax highlighting",
        "Use proper academic citation format",
        "Submit original work only (plagiarism check enabled)",
    ],
    relatedMaterials: [
        { id: "1", title: "Sorting Algorithms Lecture Slides", type: "PPT" },
        { id: "2", title: "Algorithm Complexity Cheatsheet", type: "PDF" },
        { id: "3", title: "Lab Report Template", type: "DOCX" },
    ],
};

export default function AssignmentDetailPage() {
    return (
        <div className="pb-6">
            {/* Header */}
            <header className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 pt-12 pb-6 rounded-b-3xl">
                <Link href="/courses/1" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm">Back to Course</span>
                </Link>

                <div className="flex items-start justify-between mb-2">
                    <h1 className="text-xl font-bold flex-1 pr-4">{assignmentData.title}</h1>
                    <span className="badge bg-white/20 text-white border-white/30 animate-pulse-gentle">
                        Due Tomorrow!
                    </span>
                </div>
                <p className="text-orange-100 text-sm">{assignmentData.courseName}</p>

                {/* Due Date Card */}
                <div className="bg-white/20 backdrop-blur rounded-xl p-4 mt-4 flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold">7</span>
                        <span className="text-xs">FEB</span>
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">Due Date</p>
                        <p className="text-sm text-orange-100">{assignmentData.dueDate}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold">{assignmentData.points}</p>
                        <p className="text-xs text-orange-100">Points</p>
                    </div>
                </div>
            </header>

            <div className="px-4 -mt-4 space-y-4">
                {/* Status Card */}
                <div className="card flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Submission Status</p>
                        <p className="font-semibold text-gray-900">Not Submitted</p>
                    </div>
                    <StatusBadge status="pending" size="lg" />
                </div>

                {/* Description */}
                <div className="card">
                    <h2 className="font-semibold text-gray-900 mb-3">Assignment Description</h2>
                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                        {assignmentData.description}
                    </p>
                </div>

                {/* Requirements */}
                <div className="card">
                    <h2 className="font-semibold text-gray-900 mb-3">Requirements</h2>
                    <ul className="space-y-2">
                        {assignmentData.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {req}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Related Materials */}
                <div className="card">
                    <h2 className="font-semibold text-gray-900 mb-3">Related Materials</h2>
                    <div className="space-y-2">
                        {assignmentData.relatedMaterials.map((material) => (
                            <button
                                key={material.id}
                                className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${material.type === "PDF" ? "bg-red-100" :
                                        material.type === "PPT" ? "bg-orange-100" : "bg-blue-100"
                                    }`}>
                                    <svg className={`w-5 h-5 ${material.type === "PDF" ? "text-red-600" :
                                            material.type === "PPT" ? "text-orange-600" : "text-blue-600"
                                        }`} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 text-sm">{material.title}</p>
                                    <p className="text-xs text-gray-500">{material.type}</p>
                                </div>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <Link href="/assignments/1/submit" className="block">
                    <button className="btn-primary w-full text-lg py-4 shadow-lg shadow-primary/30">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Submit Assignment
                    </button>
                </Link>
            </div>
        </div>
    );
}
