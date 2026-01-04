const Button = ({ title, className, ...args }) => (
  <button className={className} {...args}>{title}</button>
)

export default Button;