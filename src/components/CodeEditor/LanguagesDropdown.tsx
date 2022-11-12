import Select from "components/Select";
import React from "react";
import LanguageOptions, { LanguageOption } from "constants/LanguageOptions";

const LanguagesDropdown = ({
  onSelectChange,
  options,
  defaultValue,
}: {
  onSelectChange: (value: string) => void;
  options?: LanguageOption[];
  defaultValue?: string;
}) => {
  return (
    <Select
      title="Language"
      name="language"
      placeholder={`Select a language`}
      options={options ? options : LanguageOptions}
      defaultValue={defaultValue ? defaultValue : LanguageOptions[1].value}
      onChange={(value: string) => {
        onSelectChange(value);
      }}
    />
  );
};

export default LanguagesDropdown;
