const DateInput = ({ name, value, onChange, label, required }) => (
  <div>
    <label className={`block mb-1`}>
      {label} {required && <span className='text-red-500'>*</span>}
    </label>
    <input
      type='date'
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border rounded-md focus:outline-none  focus:border-black focus:border ${
        !value && required ? '' : ''
      }`}
      required={required}
    />
  </div>
);

export default DateInput;
