import CourseCard from "@/components/CourseCard";
import AssignmentCard from "@/components/AssignmentCard";
import AnnouncementCard from "@/components/AnnouncementCard";

// Mock data for the dashboard
const urgentAssignments = [
    {
        id: "1",
        title: "Data Structures Lab Report",
        courseName: "Data Structures & Algorithms",
        dueDate: "Feb 7, 2026 • 11:59 PM",
        daysLeft: 1,
        status: "pending" as const,
    },
    {
        id: "2",
        title: "UI/UX Case Study Analysis",
        courseName: "Human-Computer Interaction",
        dueDate: "Feb 9, 2026 • 11:59 PM",
        daysLeft: 3,
        status: "pending" as const,
    },
    {
        id: "3",
        title: "Database Normalization Exercise",
        courseName: "Database Management",
        dueDate: "Feb 12, 2026 • 11:59 PM",
        daysLeft: 6,
        status: "pending" as const,
    },
];

const courses = [
    {
        id: "1",
        title: "Data Structures & Algorithms",
        instructor: "Dr. Sarah Johnson",
        progress: 72,
        imageColor: "bg-gradient-to-br from-violet-500 to-purple-600",
        totalLessons: 24,
        completedLessons: 17,
    },
    {
        id: "2",
        title: "Human-Computer Interaction",
        instructor: "Prof. Michael Chen",
        progress: 45,
        imageColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
        totalLessons: 18,
        completedLessons: 8,
    },
    {
        id: "3",
        title: "Database Management",
        instructor: "Dr. Emily Brown",
        progress: 30,
        imageColor: "bg-gradient-to-br from-emerald-500 to-green-600",
        totalLessons: 20,
        completedLessons: 6,
    },
    {
        id: "4",
        title: "Web Development",
        instructor: "Prof. James Wilson",
        progress: 88,
        imageColor: "bg-gradient-to-br from-orange-500 to-red-500",
        totalLessons: 32,
        completedLessons: 28,
    },
];

const announcements = [
    {
        id: "1",
        title: "Assignment Deadline Extended",
        courseName: "Data Structures & Algorithms",
        instructor: "Dr. Sarah Johnson",
        message: "The deadline for Lab Report 3 has been extended by 2 days. Please check the updated submission guidelines.",
        timestamp: "2 hours ago",
        isNew: true,
    },
    {
        id: "2",
        title: "Guest Lecture Tomorrow",
        courseName: "Human-Computer Interaction",
        instructor: "Prof. Michael Chen",
        message: "We have a guest speaker from Google UX team tomorrow. Attendance is mandatory.",
        timestamp: "Yesterday",
        isNew: false,
    },
];

export default function Dashboard() {
    return (
        <div className="pb-6">
            {/* Header */}
            <header className="bg-gradient-to-r from-primary to-indigo-500 text-white px-4 pt-12 pb-8 rounded-b-3xl">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <p className="text-indigo-100 text-sm mb-1">Welcome back,</p>
                        <h1 className="text-2xl font-bold">Alex Student</h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="relative p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <span className="font-semibold text-sm">AS</span>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                        <p className="text-2xl font-bold">4</p>
                        <p className="text-xs text-indigo-100">Courses</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                        <p className="text-2xl font-bold text-amber-300">3</p>
                        <p className="text-xs text-indigo-100">Pending</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                        <p className="text-2xl font-bold text-green-300">58%</p>
                        <p className="text-xs text-indigo-100">Progress</p>
                    </div>
                </div>
            </header>

            <div className="px-4 -mt-4">
                {/* Due Soon Section */}
                <section className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="section-title flex items-center gap-2 mb-0">
                            <span className="w-2 h-2 bg-danger rounded-full animate-pulse"></span>
                            Due Soon
                        </h2>
                        <button className="text-sm text-primary font-medium">View All</button>
                    </div>
                    <div className="space-y-3">
                        {urgentAssignments.map((assignment, index) => (
                            <div key={assignment.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <AssignmentCard {...assignment} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* My Courses Section */}
                <section className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="section-title mb-0">My Courses</h2>
                        <button className="text-sm text-primary font-medium">See All</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        {courses.map((course, index) => (
                            <div key={course.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                                <CourseCard {...course} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Announcements Section */}
                <section>
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="section-title mb-0">Announcements</h2>
                        <button className="text-sm text-primary font-medium">View All</button>
                    </div>
                    <div className="space-y-3">
                        {announcements.map((announcement) => (
                            <AnnouncementCard key={announcement.id} {...announcement} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
