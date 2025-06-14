const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    minWidth: "204px",
    backgroundColor: "var(--inputs)",
    border: "1px solid var(--inputs)",
    borderRadius: "12px",
    boxShadow: "none",
    minHeight: "44px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid #8d929a",
    },
    "&:active": {
      border: "1px solid #8d929a",
    },
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "var(--white)",
    borderRadius: "8px",
    padding: "5px",
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    color: state.isSelected
      ? "var(--main)"
      : state.isFocused
      ? "var(--main)"
      : "var(--gray)",
    cursor: "pointer",
    fontWeight: "500",
  }),
  //   singleValue: (provided) => ({
  //     ...provided,
  //     color: "#081222",
  //   }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--main)",
    fontSize: "16px",
  }),
  //   input: (provided) => ({
  //     ...provided,
  //     color: "var(--main);",
  //   }),
};

export default customSelectStyles;
