interface AnnouncementCardProps {
    id: string;
    title: string;
    courseName: string;
    instructor: string;
    message: string;
    timestamp: string;
    isNew?: boolean;
}

export default function AnnouncementCard({
    title,
    courseName,
    instructor,
    message,
    timestamp,
    isNew = false,
}: AnnouncementCardProps) {
    return (
        <div className={`card ${isNew ? "border-l-4 border-l-primary bg-indigo-50/50" : ""}`}>
            <div className="flex items-start gap-3">
                {/* Instructor Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-indigo-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">
                        {instructor.split(" ").map(n => n[0]).join("")}
                    </span>
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{title}</h3>
                        {isNew && (
                            <span className="badge badge-primary text-[10px] px-1.5 py-0.5">NEW</span>
                        )}
                    </div>

                    <p className="text-xs text-gray-500 mb-2">
                        {instructor} • {courseName}
                    </p>

                    <p className="text-sm text-gray-700 line-clamp-2">{message}</p>

                    <p className="text-xs text-gray-400 mt-2">{timestamp}</p>
                </div>
            </div>
        </div>
    );
}
