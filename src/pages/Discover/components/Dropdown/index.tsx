import React from "react";
import { ReactComponent as CaretDown } from "../../../../assets/caret-down.svg";

type DropdownProps = {
  label: string;
  options?: { value: string; name: string }[];
};

export const Dropdown = ({
  label,
  options = [],
}: DropdownProps): React.ReactElement => {
  const [value, setValue] = React.useState("");

  function handleSelect(event: React.FocusEvent<HTMLSelectElement>): void {
    setValue(event.target.value);
  }

  return (
    <div className="relative mt-2 sm:m-0 sm:mr-1 w-full">
      <select
        value={value}
        className="appearance-none cursor-pointer w-full bg-transparent border border-gray-800 text-gray-800 py-2 sm:py-1 pl-3 pr-6 lowercase focus:outline-none"
        onBlur={handleSelect}
        onChange={handleSelect}
        disabled={options.length === 0}
      >
        <option value="" disabled hidden>
          {label}
        </option>
        <option value="">All</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
        <CaretDown />
      </div>
    </div>
  );
};
