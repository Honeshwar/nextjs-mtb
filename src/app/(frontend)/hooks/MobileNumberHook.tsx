import { useState } from "react";

export default function useMobileNumber() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState(false);

  const validatePhoneNumber = (e: any) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
      return;
    }
    setError(false);
    const phoneNumber = e.target.value;
    const sliceNumber = phoneNumber.slice(0, 10);
    e.target.value = sliceNumber;
    setMobileNumber(sliceNumber);

    console.log("slice number", phoneNumber.slice(0, 10), phoneNumber.length);
  };
  return {
    mobileNumber,
    setMobileNumber,
    error,
    setError,
    validatePhoneNumber,
  };
}
