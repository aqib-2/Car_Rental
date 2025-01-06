
const Button = ({text,width,disabled,onClickHandler}) => {
  return (
    <button className={`py-3 bg-reddish ${width} font-semibold shadow-md shadow-reddish rounded text-white text-md ${disabled && 'bg-slate-300 text-slate-700 shadow-none'}`} disabled={disabled} onClick={() => onClickHandler()}>
      {text}
    </button>
  )
}

export default Button      