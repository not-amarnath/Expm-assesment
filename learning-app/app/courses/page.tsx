import CourseCard from "@/components/CourseCard";

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
    {
        id: "5",
        title: "Machine Learning Basics",
        instructor: "Dr. Lisa Wang",
        progress: 15,
        imageColor: "bg-gradient-to-br from-pink-500 to-rose-600",
        totalLessons: 28,
        completedLessons: 4,
    },
    {
        id: "6",
        title: "Computer Networks",
        instructor: "Prof. Robert Taylor",
        progress: 60,
        imageColor: "bg-gradient-to-br from-teal-500 to-cyan-600",
        totalLessons: 22,
        completedLessons: 13,
    },
];

export default function CoursesPage() {
    return (
        <div className="pb-6">
            {/* Header */}
            <header className="bg-white px-4 pt-12 pb-4 border-b border-gray-100">
                <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
                <p className="text-gray-500 text-sm mt-1">6 courses enrolled</p>
            </header>

            {/* Search */}
            <div className="px-4 py-4">
                <div className="relative">
                    <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                </div>
            </div>

            {/* Courses Grid */}
            <div className="px-4">
                <div className="grid grid-cols-2 gap-3">
                    {courses.map((course, index) => (
                        <div key={course.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                            <CourseCard {...course} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
