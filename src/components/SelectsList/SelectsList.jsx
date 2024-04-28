import { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import { ListWrapper, SelectWrapper } from "./SelectsList.styled";

export default function SelectsList() {
  const [language, setLanguage] = useState(null);
  const [level, setLevel] = useState(null);
  const [price, setPrice] = useState(null);

  const languageOptions = [
    { value: "french", label: "French" },
    { value: "english", label: "English" },
    { value: "german", label: "German" },
    { value: "ukrainian", label: "Ukrainian" },
    { value: "polish", label: "Polish" },
  ];

  const levelOptions = [
    { value: "beginner", label: "A1 Beginner" },
    { value: "elementary", label: "A2 Elementary" },
    { value: "intermediate", label: "B1 Intermediate" },
    { value: "upper-Intermediate", label: "B2 Upper-Intermediate" },
  ];

  const priceOptions = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
    { value: "40", label: "40" },
  ];

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  const handleLevelChange = (selectedLevel) => {
    setLevel(selectedLevel);
  };
  const handlePriceChange = (selectedPrice) => {
    setPrice(selectedPrice);
  };

  if (language && level && price) {
    console.log(language, level, price);
    }
    
  return (
    <>
      <ListWrapper>
        <SelectWrapper>
          <h3>Languages</h3>
          <CustomSelect
            options={languageOptions}
            placeholder="Languages"
            handleChange={handleLanguageChange}
          />
        </SelectWrapper>
        <SelectWrapper>
          <h3>Level of knowledge</h3>
          <CustomSelect
            options={levelOptions}
            placeholder="Level of knowledge"
            handleChange={handleLevelChange}
          />
        </SelectWrapper>
        <SelectWrapper>
          <h3>Price</h3>
          <CustomSelect
            options={priceOptions}
            placeholder="Price"
            handleChange={handlePriceChange}
          />
        </SelectWrapper>
      </ListWrapper>
    </>
  );
}
