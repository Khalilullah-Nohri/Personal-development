import React, { useState } from "react"; // Importing React and useState hook for state management
import axios from "axios"; // Importing axios for making HTTP requests
import logo from "./download.png"

// Navigation component rendering the header section
function Navigation() {
  return (
    <div className="flex items-center bg-gradient-to-r from-green-500 via-yellow-500 to-green-500">
      {/* Logo Image */}
      <img src={logo} alt="NBP Logo" className="h-20 w-20 mr-4" />
      {/* Centered Heading */}
      <div className="flex-grow">
        <h1 className="text-4xl text-black font-extrabold text-center  bg-clip-text bg-gradient-to-r from-green-250 via-yellow-500 to-green-250">
          NBP Pakistan
        </h1>
      </div>
    </div>
  );
}



// Fields component containing the form and its state management
function Fields() {
  const [formData, setFormData] = useState({
    fullName: "",
    cnic: "",
    gender: "",
    accountNo: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    cnic: "",
    gender: "",
    accountNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error message for the current field when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) {
      newErrors.fullName = "Please enter your full name.";
    } else if (!/^[A-Za-z ]*$/.test(formData.fullName)) {
      newErrors.fullName = "Please enter a valid name with only alphabets and spaces.";
    }

    if (!formData.cnic) {
      newErrors.cnic = "Please enter your CNIC.";
    } else if (!/^\d{13}$/.test(formData.cnic)) {
      newErrors.cnic = "CNIC must be 13 digits.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!formData.accountNo) {
      newErrors.accountNo = "Please enter your account number.";
    } else if (!/^\d{10}$/.test(formData.accountNo)) {
      newErrors.accountNo = "Account Number must be 10 digits.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        cnic: "",
        gender: "",
        accountNo: "",
      });

      try {
        const response = await axios.post(
          "http://localhost:8000/apii/registrations/",
          formData
        );
        console.log(response.data, formData);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form>
      <div className="mt-10 py-5 flex justify-around flex-row">
        <div>
          <label
            htmlFor="fullName"
            className="text-gray-700 text-sm font-bold mr-5"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            className={`w-80 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 ${
              errors.fullName && "bg-red-100"
            }`}
            type="text"
            placeholder="Muhammad Ali"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <div className="text-red-600 text-sm mt-1">{errors.fullName}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="cnic"
            className="text-gray-700 text-sm font-bold mr-16"
          >
            CNIC *
          </label>
          <input
            id="cnic"
            name="cnic"
            className={`w-80 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 ${
              errors.cnic && "bg-red-100"
            }`}
            type="text"
            maxLength="13"
            placeholder="443024578986"
            value={formData.cnic}
            onChange={handleChange}
          />
          {errors.cnic && (
            <div className="text-red-600 text-sm mt-1">{errors.cnic}</div>
          )}
        </div>
      </div>

      <div className="mt-10 flex justify-around flex-row">
        <div>
          <label
            htmlFor="gender"
            className="text-gray-700 text-sm font-bold mr-10"
          >
            Gender *
          </label>
          <select
            id="gender"
            name="gender"
            className={`w-80 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 ${
              errors.gender && "bg-red-100"
            }`}
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select a gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <div className="text-red-600 text-sm mt-1">{errors.gender}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="accountNo"
            className="text-gray-700 text-sm font-bold mr-5"
          >
            Account No. *
          </label>
          <input
            id="accountNo"
            name="accountNo"
            className={`w-80 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 ${
              errors.accountNo && "bg-red-100"
            }`}
            type="text"
            maxLength="10"
            placeholder="4244789654"
            value={formData.accountNo}
            onChange={handleChange}
          />
          {errors.accountNo && (
            <div className="text-red-600 text-sm mt-1">{errors.accountNo}</div>
          )}
        </div>
      </div>

      <div className="text-center mt-20">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-36 font-bold px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
 
// Main Form component rendering the Navigation and Fields components
export default function Form() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <Fields />
    </div>
  );
}

