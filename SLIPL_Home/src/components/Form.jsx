import { styles } from "../styles/Desc_styles";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms and conditions";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        ...styles.rowcontainer,
        marginTop: "5px",
      }}
    >
      <div>
        <div style={{ position: "relative", marginBottom: "20px" }}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            style={{
              width: "100%",
              height:"40px",
              padding: "10px",
              borderRadius: "4px",
              position: "relative",
              backgroundColor:"black",
              color:"var(--primary-color)"
            }}
          />
          {errors.name && (
            <small style={{ color: "red" }}>{errors.name}</small>
          )}
        </div>

        <div style={{ position: "relative", marginBottom: "20px" }}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              height:"40px",
              borderRadius: "4px",
              position: "relative",
              backgroundColor:"black",
              color:"var(--primary-color)"
            }}
          />
          {errors.email && (
            <small style={{ color: "red" }}>{errors.email}</small>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />{" "}
            I have read and accept terms and conditions
          </label>
          {errors.termsAccepted && (
            <small style={{ color: "red", display: "block" }}>
              {errors.termsAccepted}
            </small>
          )}
        </div>

        <button
          type="submit"
          style={{
            fontSize: "18px",
            padding: "10px 15px",
            color: "var(--primary-color)",
            backgroundColor: "var(--accent-color)",
            width: "100%",
            height: "50px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          REQUEST A MANAGER'S CONSULTATION
        </button>
      </div>
    </form>
  );
}
