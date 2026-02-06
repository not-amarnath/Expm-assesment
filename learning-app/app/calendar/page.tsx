import AssignmentCard from "@/components/AssignmentCard";

const assignments = [
    { id: "1", title: "Data Structures Lab Report", courseName: "Data Structures & Algorithms", dueDate: "Feb 7, 2026", daysLeft: 1, status: "pending" as const },
    { id: "2", title: "UI/UX Case Study Analysis", courseName: "Human-Computer Interaction", dueDate: "Feb 9, 2026", daysLeft: 3, status: "pending" as const },
    { id: "3", title: "Database Normalization", courseName: "Database Management", dueDate: "Feb 12, 2026", daysLeft: 6, status: "pending" as const },
    { id: "4", title: "React Component Project", courseName: "Web Development", dueDate: "Feb 5, 2026", daysLeft: 0, status: "submitted" as const },
    { id: "5", title: "SQL Query Assignment", courseName: "Database Management", dueDate: "Feb 1, 2026", daysLeft: 0, status: "graded" as const, grade: "95/100" },
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDate = new Date(2026, 1, 6); // Feb 6, 2026

export default function CalendarPage() {
    const getDaysInMonth = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        return days;
    };

    const hasAssignment = (day: number) => {
        return assignments.some(a => {
            const dueDay = parseInt(a.dueDate.split(" ")[1]);
            return dueDay === day && a.status === "pending";
        });
    };

    return (
        <div className="pb-6">
            {/* Header */}
            <header className="bg-white px-4 pt-12 pb-4 border-b border-gray-100">
                <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
                <p className="text-gray-500 text-sm mt-1">February 2026</p>
            </header>

            {/* Calendar Grid */}
            <div className="px-4 py-4">
                <div className="card">
                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {weekDays.map(day => (
                            <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                        {getDaysInMonth().map((day, index) => (
                            <div
                                key={index}
                                className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm ${day === 6
                                        ? "bg-primary text-white font-bold"
                                        : day && hasAssignment(day)
                                            ? "bg-amber-100 text-amber-700 font-medium"
                                            : day
                                                ? "hover:bg-gray-50 cursor-pointer"
                                                : ""
                                    }`}
                            >
                                {day}
                                {day && hasAssignment(day) && day !== 6 && (
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-0.5" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Upcoming Assignments */}
            <div className="px-4">
                <h2 className="section-title">Upcoming Deadlines</h2>
                <div className="space-y-3">
                    {assignments.filter(a => a.status === "pending").map(assignment => (
                        <AssignmentCard key={assignment.id} {...assignment} />
                    ))}
                </div>
            </div>
        </div>
    );
}
