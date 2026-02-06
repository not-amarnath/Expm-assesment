interface ProgressBarProps {
    progress: number;
    size?: "sm" | "md" | "lg";
    showLabel?: boolean;
    label?: string;
    color?: "primary" | "success" | "warning" | "danger";
}

export default function ProgressBar({
    progress,
    size = "md",
    showLabel = true,
    label,
    color = "primary",
}: ProgressBarProps) {
    const getSizeStyles = () => {
        switch (size) {
            case "sm":
                return "h-1.5";
            case "lg":
                return "h-3";
            default:
                return "h-2";
        }
    };

    const getColorStyles = () => {
        switch (color) {
            case "success":
                return "from-emerald-500 to-green-400";
            case "warning":
                return "from-amber-500 to-yellow-400";
            case "danger":
                return "from-red-500 to-rose-400";
            default:
                return "from-primary to-indigo-400";
        }
    };

    return (
        <div className="w-full">
            {showLabel && (
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500">{label || "Progress"}</span>
                    <span className="text-xs font-semibold text-gray-700">{progress}%</span>
                </div>
            )}
            <div className={`w-full bg-gray-100 rounded-full overflow-hidden ${getSizeStyles()}`}>
                <div
                    className={`h-full bg-gradient-to-r ${getColorStyles()} rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                />
            </div>
        </div>
    );
}
