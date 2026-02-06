interface StatusBadgeProps {
    status: "pending" | "submitted" | "late" | "graded" | "in-progress" | "not-started";
    text?: string;
    size?: "sm" | "md" | "lg";
}

export default function StatusBadge({ status, text, size = "md" }: StatusBadgeProps) {
    const getStyles = () => {
        switch (status) {
            case "pending":
                return "bg-amber-100 text-amber-700 border-amber-200";
            case "submitted":
                return "bg-green-100 text-green-700 border-green-200";
            case "late":
                return "bg-red-100 text-red-700 border-red-200";
            case "graded":
                return "bg-indigo-100 text-indigo-700 border-indigo-200";
            case "in-progress":
                return "bg-blue-100 text-blue-700 border-blue-200";
            case "not-started":
                return "bg-gray-100 text-gray-600 border-gray-200";
            default:
                return "bg-gray-100 text-gray-600 border-gray-200";
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case "sm":
                return "px-2 py-0.5 text-xs";
            case "lg":
                return "px-4 py-2 text-sm";
            default:
                return "px-3 py-1 text-xs";
        }
    };

    const getDefaultText = () => {
        switch (status) {
            case "pending":
                return "Pending";
            case "submitted":
                return "Submitted";
            case "late":
                return "Late";
            case "graded":
                return "Graded";
            case "in-progress":
                return "In Progress";
            case "not-started":
                return "Not Started";
            default:
                return status;
        }
    };

    const getIcon = () => {
        switch (status) {
            case "submitted":
            case "graded":
                return (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                );
            case "pending":
                return (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                );
            case "late":
                return (
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <span className={`inline-flex items-center gap-1 rounded-full font-medium border ${getStyles()} ${getSizeStyles()}`}>
            {getIcon()}
            {text || getDefaultText()}
        </span>
    );
}
