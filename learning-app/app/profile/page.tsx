import ProgressBar from "@/components/ProgressBar";

export default function ProfilePage() {
    const stats = [
        { label: "Courses", value: "6" },
        { label: "Completed", value: "12" },
        { label: "Certificates", value: "3" },
    ];

    const achievements = [
        { icon: "🔥", title: "7 Day Streak", description: "Studied every day this week" },
        { icon: "⭐", title: "Top Performer", description: "Scored A in 5 courses" },
        { icon: "📚", title: "Bookworm", description: "Completed 50 lessons" },
    ];

    return (
        <div className="pb-6">
            {/* Header */}
            <header className="bg-gradient-to-r from-primary to-indigo-500 text-white px-4 pt-12 pb-8 rounded-b-3xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                        AS
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Alex Student</h1>
                        <p className="text-indigo-100 text-sm">Computer Science • Year 3</p>
                        <p className="text-indigo-200 text-xs mt-1">alex.student@university.edu</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {stats.map(stat => (
                        <div key={stat.label} className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
                            <p className="text-2xl font-bold">{stat.value}</p>
                            <p className="text-xs text-indigo-100">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </header>

            <div className="px-4 -mt-4 space-y-4">
                {/* Overall Progress */}
                <div className="card">
                    <h2 className="font-semibold text-gray-900 mb-3">Overall Progress</h2>
                    <ProgressBar progress={58} label="Semester Completion" />
                </div>

                {/* Achievements */}
                <div className="card">
                    <h2 className="font-semibold text-gray-900 mb-3">Recent Achievements</h2>
                    <div className="space-y-3">
                        {achievements.map(achievement => (
                            <div key={achievement.title} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl shadow-sm">
                                    {achievement.icon}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">{achievement.title}</p>
                                    <p className="text-xs text-gray-500">{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Settings */}
                <div className="card">
                    <h2 className="font-semibold text-gray-900 mb-3">Settings</h2>
                    <div className="space-y-1">
                        {["Notifications", "Dark Mode", "Language", "Help & Support", "Log Out"].map(item => (
                            <button key={item} className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <span className={`text-sm ${item === "Log Out" ? "text-red-600" : "text-gray-700"}`}>{item}</span>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
