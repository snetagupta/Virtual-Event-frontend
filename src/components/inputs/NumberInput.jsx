const NumberInput = ({ name, value, onChange, label, required }) => (
    <div>
      <label className='block mb-1 text-black'>{label} {required && <span className="text-red-500">*</span>}</label>
      <input
        type='number'
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none  focus:border-black focus:border ${
            !value && required ? '' : ''
          }`}
      />
    </div>
  );

  export default NumberInput