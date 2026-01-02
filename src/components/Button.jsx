const Button = ({ children, fun, }) => (
  <button
    className="action-btn"
    onClick={fun}>{children}</button>
);

export default Button;