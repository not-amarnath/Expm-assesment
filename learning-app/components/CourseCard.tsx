import Link from "next/link";

interface CourseCardProps {
    id: string;
    title: string;
    instructor: string;
    progress: number;
    imageColor: string;
    totalLessons: number;
    completedLessons: number;
}

export default function CourseCard({
    id,
    title,
    instructor,
    progress,
    imageColor,
    totalLessons,
    completedLessons,
}: CourseCardProps) {
    return (
        <Link href={`/courses/${id}`}>
            <div className="card cursor-pointer group">
                {/* Course Image Placeholder */}
                <div
                    className={`w-full h-24 rounded-lg mb-3 flex items-center justify-center ${imageColor} transition-transform duration-200 group-hover:scale-[1.02]`}
                >
                    <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>

                {/* Course Info */}
                <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                    {title}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{instructor}</p>

                {/* Progress Bar */}
                <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-500">{completedLessons}/{totalLessons} lessons</span>
                        <span className="font-medium text-primary">{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-indigo-400 rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}
