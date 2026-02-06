import Link from "next/link";

interface AssignmentCardProps {
    id: string;
    title: string;
    courseName: string;
    dueDate: string;
    daysLeft: number;
    status: "pending" | "submitted" | "late" | "graded";
    grade?: string;
}

export default function AssignmentCard({
    id,
    title,
    courseName,
    dueDate,
    daysLeft,
    status,
    grade,
}: AssignmentCardProps) {
    const getStatusBadge = () => {
        switch (status) {
            case "pending":
                if (daysLeft <= 1) {
                    return <span className="badge badge-danger animate-pulse-gentle">Due Tomorrow!</span>;
                } else if (daysLeft <= 3) {
                    return <span className="badge badge-warning">Due in {daysLeft} days</span>;
                }
                return <span className="badge badge-primary">Due in {daysLeft} days</span>;
            case "submitted":
                return <span className="badge badge-success">Submitted ✓</span>;
            case "late":
                return <span className="badge badge-danger">Late</span>;
            case "graded":
                return <span className="badge badge-success">Graded: {grade}</span>;
            default:
                return null;
        }
    };

    const getUrgencyColor = () => {
        if (status === "pending" && daysLeft <= 1) return "border-l-4 border-l-danger";
        if (status === "pending" && daysLeft <= 3) return "border-l-4 border-l-warning";
        if (status === "submitted" || status === "graded") return "border-l-4 border-l-success";
        return "border-l-4 border-l-primary";
    };

    return (
        <Link href={`/assignments/${id}`}>
            <div className={`card cursor-pointer ${getUrgencyColor()} animate-fade-in`}>
                <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
                        <p className="text-xs text-gray-500">{courseName}</p>
                    </div>
                    {getStatusBadge()}
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{dueDate}</span>
                </div>
            </div>
        </Link>
    );
}
