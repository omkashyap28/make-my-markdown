const Button = ({ children, className, ...actions }) => (
  <button
    className={`action-btn ${className || ''}`}
    {...actions}
  >
    {children}
  </button>
);

export default Button;