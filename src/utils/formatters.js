export const parseAddress = (addressString) => {
  const addressParts = addressString ? addressString.split(", ") : [];
  const city = addressParts[addressParts.length - 2] || "";
  const country = addressParts[addressParts.length - 1] || "";
  return { city, country };
};

export const formatMileage = (mileage) => {
  if (mileage === null || mileage === undefined) {
    return "N/A";
  }
  return `${Math.round(mileage).toLocaleString("en-US").replace(/,/g, " ")} km`;
};

export const carTypeFormat = (str) => {
  const carTypeUpp = str;
  const carTypeLow =
    carTypeUpp.charAt(0).toUpperCase() + carTypeUpp.slice(1).toLowerCase();
  return carTypeLow;
};
