import './form-input.scss'
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' type='text' {...otherProps} />
      {label && (
        <label
          htmlFor=''
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  )
}
export default FormInput
