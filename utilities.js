
//converts a Normal String to kebab-case
export const convert = (string) => string.split(" ").join("-").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
