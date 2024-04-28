import Select from 'react-select';

// eslint-disable-next-line react/prop-types
export default function CustomSelect({ options, placeholder, handleChange }) {
    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '121417',
            fontWeight: 'bold',
            backgroundColor: 'FFFFFF',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '121417',
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: 'none',
        }),
        option: (provided) =>({
            ...provided,
            cursor: 'pointer',
            backgroundColor: 'none',
            '&:hover': {
                color: '121417',
                fontWeight: 'bold',
            },
            color: '121417',
        }),
}

    return <Select
        options={options}
        onChange={handleChange}
            placeholder={placeholder}
            styles={customStyles}
        />;    
}
