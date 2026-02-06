"use client";

import { useState } from "react";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";
import StatusBadge from "@/components/StatusBadge";

// Mock course data
const courseData = {
    id: "1",
    title: "Data Structures & Algorithms",
    instructor: "Dr. Sarah Johnson",
    description: "Learn fundamental data structures and algorithms including arrays, linked lists, trees, graphs, sorting, and searching algorithms.",
    progress: 72,
    totalLessons: 24,
    completedLessons: 17,
    schedule: "Mon, Wed, Fri • 10:00 AM",
};

const tabs = ["Overview", "Videos", "Materials", "Assignments"];

const videos = [
    { id: "1", title: "Introduction to Data Structures", duration: "45:30", completed: true },
    { id: "2", title: "Arrays and Linked Lists", duration: "52:15", completed: true },
    { id: "3", title: "Stacks and Queues", duration: "38:45", completed: true },
    { id: "4", title: "Trees and Binary Search Trees", duration: "55:20", completed: false },
    { id: "5", title: "Graph Algorithms", duration: "48:10", completed: false },
];

const materials = [
    { id: "1", title: "Course Syllabus", type: "PDF", size: "245 KB" },
    { id: "2", title: "Week 1 Slides - Introduction", type: "PPT", size: "1.2 MB" },
    { id: "3", title: "Week 2 Slides - Arrays", type: "PPT", size: "980 KB" },
    { id: "4", title: "Algorithm Complexity Cheatsheet", type: "PDF", size: "156 KB" },
    { id: "5", title: "Practice Problems Set 1", type: "PDF", size: "320 KB" },
];

const assignments = [
    { id: "1", title: "Data Structures Lab Report", dueDate: "Feb 7, 2026", status: "pending" as const, daysLeft: 1 },
    { id: "2", title: "Binary Tree Implementation", dueDate: "Feb 14, 2026", status: "pending" as const, daysLeft: 8 },
    { id: "3", title: "Sorting Algorithms Analysis", dueDate: "Feb 1, 2026", status: "submitted" as const, grade: "A" },
    { id: "4", title: "Linked List Quiz", dueDate: "Jan 25, 2026", status: "graded" as const, grade: "95/100" },
];

export default function CourseDetailPage() {
    const [activeTab, setActiveTab] = useState("Overview");

    const renderTabContent = () => {
        switch (activeTab) {
            case "Overview":
                return (
                    <div className="space-y-4">
                        <div className="card">
                            <h3 className="font-semibold text-gray-900 mb-2">About This Course</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{courseData.description}</p>
                        </div>

                        <div className="card">
                            <h3 className="font-semibold text-gray-900 mb-3">Your Progress</h3>
                            <ProgressBar progress={courseData.progress} label="Course Completion" />
                            <p className="text-xs text-gray-500 mt-2">
                                {courseData.completedLessons} of {courseData.totalLessons} lessons completed
                            </p>
                        </div>

                        <div className="card">
                            <h3 className="font-semibold text-gray-900 mb-2">Schedule</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {courseData.schedule}
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="font-semibold text-gray-900 mb-2">Instructor</h3>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-indigo-400 flex items-center justify-center">
                                    <span className="text-white font-semibold">SJ</span>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{courseData.instructor}</p>
                                    <p className="text-xs text-gray-500">Computer Science Department</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "Videos":
                return (
                    <div className="space-y-3">
                        {videos.map((video, index) => (
                            <div key={video.id} className="card flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${video.completed ? "bg-green-100" : "bg-gray-100"}`}>
                                    {video.completed ? (
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900 text-sm">{index + 1}. {video.title}</h4>
                                    <p className="text-xs text-gray-500">{video.duration}</p>
                                </div>
                                {video.completed && <StatusBadge status="submitted" text="Watched" size="sm" />}
                            </div>
                        ))}
                    </div>
                );

            case "Materials":
                return (
                    <div className="space-y-3">
                        {materials.map((material) => (
                            <div key={material.id} className="card flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${material.type === "PDF" ? "bg-red-100" : "bg-orange-100"
                                    }`}>
                                    <svg className={`w-6 h-6 ${material.type === "PDF" ? "text-red-600" : "text-orange-600"}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900 text-sm">{material.title}</h4>
                                    <p className="text-xs text-gray-500">{material.type} • {material.size}</p>
                                </div>
                                <button className="p-2 text-primary hover:bg-indigo-50 rounded-lg transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                );

            case "Assignments":
                return (
                    <div className="space-y-3">
                        {assignments.map((assignment) => (
                            <Link key={assignment.id} href={`/assignments/${assignment.id}`}>
                                <div className={`card flex items-center gap-3 ${assignment.status === "pending" && assignment.daysLeft <= 1
                                        ? "border-l-4 border-l-danger"
                                        : assignment.status === "pending" && assignment.daysLeft <= 3
                                            ? "border-l-4 border-l-warning"
                                            : assignment.status === "submitted" || assignment.status === "graded"
                                                ? "border-l-4 border-l-success"
                                                : ""
                                    }`}>
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${assignment.status === "submitted" || assignment.status === "graded"
                                            ? "bg-green-100"
                                            : assignment.daysLeft <= 1
                                                ? "bg-red-100"
                                                : "bg-amber-100"
                                        }`}>
                                        <svg className={`w-6 h-6 ${assignment.status === "submitted" || assignment.status === "graded"
                                                ? "text-green-600"
                                                : assignment.daysLeft <= 1
                                                    ? "text-red-600"
                                                    : "text-amber-600"
                                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900 text-sm">{assignment.title}</h4>
                                        <p className="text-xs text-gray-500">Due: {assignment.dueDate}</p>
                                    </div>
                                    <StatusBadge
                                        status={assignment.status}
                                        text={assignment.status === "graded" ? assignment.grade : undefined}
                                        size="sm"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="pb-6">
            {/* Header */}
            <header className="bg-gradient-to-br from-violet-500 to-purple-600 text-white px-4 pt-12 pb-6 rounded-b-3xl">
                <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm">Back</span>
                </Link>

                <h1 className="text-xl font-bold mb-1">{courseData.title}</h1>
                <p className="text-purple-100 text-sm mb-4">{courseData.instructor}</p>

                <div className="bg-white/20 backdrop-blur rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Course Progress</span>
                        <span className="font-bold">{courseData.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white rounded-full transition-all duration-500"
                            style={{ width: `${courseData.progress}%` }}
                        />
                    </div>
                </div>
            </header>

            {/* Tabs */}
            <div className="px-4 -mt-4">
                <div className="bg-white rounded-xl shadow-sm p-1.5 flex gap-1 mb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === tab
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="animate-fade-in">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
}
