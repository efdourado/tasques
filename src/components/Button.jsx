function Button(props) {
    return (
      <button {...props} className="text-white p-2 rounded-md" style={{ backgroundColor:'#d85d3f' }}>
        {props.children}
      </button>
); }
  
export default Button;