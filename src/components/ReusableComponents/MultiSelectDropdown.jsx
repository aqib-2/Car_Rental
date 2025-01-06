import React from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/24/solid';


const MultiSelectDropdown = ({
  options,
  selectedOptions,
  onChange,
  placeholder = "Select options",
  label,
  icon,
}) => {
  const toggleOption = (id) => {
    const updatedSelection = selectedOptions.includes(id)
      ? selectedOptions.filter((option) => option !== id)
      : [...selectedOptions, id];
    onChange(updatedSelection);
  };
  
  return (
    <>
    <div className="flex flex-row font-semibold py-2 my-1">
        <img src={icon} alt="icon" className="w-[13px]" />
        &nbsp;{label} <span className="text-reddish">*</span>
    </div>
    <Listbox as="div" className="relative w-full">
      <Listbox.Button className="flex justify-between items-center w-full text-slate-500 bg-gray-200 px-4 py-2 text-left shadow-sm focus:outline-none">
        <span>
          {selectedOptions.length > 0
            ? selectedOptions
                .map((id) => options.find((opt) => opt.id === id)?.name)
                .join(", ")
            : placeholder}
        </span>
        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
      </Listbox.Button>

      <Listbox.Options className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-60 overflow-y-auto">
        {options.map((option) => (
          <Listbox.Option
            key={option.id}
            as="div"
            className={({ active }) =>
              `cursor-pointer select-none px-4 py-2 ${
                active ? "bg-blue-100 text-blue-900" : ""
              }`
            }
            value={option.id}
            onClick={() => toggleOption(option.id)}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 mr-2"
                checked={selectedOptions.includes(option.id)}
                readOnly
              />
              <span>{option.name}</span>
            </div>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
    </>
  );
};

export default MultiSelectDropdown;
