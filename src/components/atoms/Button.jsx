const Button = ({ children, type }) => {
  return (
    <button className={`btn ${type} btn-xs sm:btn-sm md:btn-md lg:btn-lg`}>
      {children}
    </button>
  );
};

export default Button;
