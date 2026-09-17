interface ButtonProps {
    type?: "button" | "submit" | "reset";
    color?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}

export const Button = ({
    type = "button",
    color = "primary",
    size = "medium",
    disabled = false,
    onClick,    
children,
}: ButtonProps) => {
    const baseClasses = "rounded-md font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";
    const colorClasses = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
        secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    };
    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-5 py-3 text-lg",
    };
    const classes = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

    return (
        <button type={type} className={classes} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}