import "./LinkButton.css";

function LinkButton({ to, children, isActive=false, className='', external=false, variant='primary', ...props }) {
    const baseClass = {
        'primary': 'btn-theme-primary',
        'outline': 'btn-theme-outline',
        'ghost-outline': 'btn-theme-ghost-outline',
        'ghost-underline': 'btn-theme-ghost-underline'
    }

    const buttonClass = `btn ${baseClass[variant]} ${className} ${isActive ? 'active' : ''}`.trim();

    if (external) {
        return (
            <a href={to} className={buttonClass} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        )
    }

    return (
        <>
            <a href={to} className={buttonClass} {...props}>
                {children}
            </a>
        </>
    )
}

export default LinkButton;