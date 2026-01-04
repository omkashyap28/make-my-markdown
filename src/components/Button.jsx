const Button = ({ children, className, ...args }) => (
  <button className={className} {...args}>{children}</button>
)

export default Button;