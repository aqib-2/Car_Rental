import React from 'react';

const InputField = ({ label, icon, type, name, options, placeholder, value, onChange, min, max }) => {
  return (
    <div>
      <div className="flex flex-row font-semibold py-2 my-1">
        <img src={icon} alt="icon" className="w-[13px]" />
        &nbsp;{label} <span className="text-reddish">*</span>
      </div>
      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="p-3 w-full text-slate-500 bg-gray-200"
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}s
        </select>
      ) : type === 'date' ? (
        <input
          type="date"
          name={name}
          value={value}
          onChange={onChange}
          className="p-3 w-full bg-gray-200 text-slate-500"
          min={min}
          max={max}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="p-3 w-full bg-gray-200 text-slate-500"
        />
      )}
    </div>
  );
};

export default InputField;
