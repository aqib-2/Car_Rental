
const Button = ({text,width}) => {
  return (
    <button className={`py-3 bg-reddish ${width} font-semibold shadow-md shadow-reddish rounded text-white text-md`}>
    {text}
    </button>
  )
}

export default Button      