const Button = ({ children, fun, className, ...actions }) => (
  <button
    className={`action-btn ${className || ''}`}
    {...actions}
    onClick={fun}>{children}</button>
);

export default Button;