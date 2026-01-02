const Wrapper = ({ children, className }) => (
  <div className="w-full color-theme">
    <div className={`container ${className}`}>
      {children}
    </div>
  </div>
)

export default Wrapper;