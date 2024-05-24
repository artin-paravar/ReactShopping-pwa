import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [errors, setErrors] = useState({});
  const [userData, setuserData] = useState([]);
  const fetch = async () => {
    try {
      const res = await axios.get("http://localhost:8000/users");
      setuserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailORusername: "",
    password: "",
  });

  useEffect(() => {
    fetch();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (formData.emailORusername.length <= 0) {
      validationErrors.emailORusername = "email or username is required";
    } else if (formData.emailORusername.length < 6) {
      validationErrors.emailORusername =
        "email or username should be at least 6 char";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 char";
    }

    setErrors(validationErrors);
    //

    const data = userData.find(
      (item) =>
        (item.email === formData.emailORusername ||
          item.username === formData.emailORusername) &&
        item.password === formData.password
    );

    if (Object.keys(validationErrors).length === 0 && data) {
      navigate("/ReactShopping-pwa");
    } else if (Object.keys(validationErrors).length === 0 && !data) {
      validationErrors.notfound =
        "The email/username or password you’ve entered is wrong.";
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-[430px] m-auto p-[20px]  rounded-[5px] shadow-md flex flex-col gap-4"
      >
        <div>
          <label>Email or username:</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px] rounded-[5px] text-[16px]"
            name="emailORusername"
            placeholder=""
            onChange={handleChange}
          />
          {errors.emailORusername && (
            <span className="text-[#e74c3c] text-[14px] mt-[15px] block">
              {errors.emailORusername}
            </span>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            className="w-full p-[10px] border-state-300 border-[1px]  outline-none rounded-[5px] text-[16px]"
            type="password"
            name="password"
            placeholder=""
            onChange={handleChange}
          />
          {errors.password && (
            <span className="text-[#e74c3c] text-[14px] mt-[15px] block">
              {errors.password}
            </span>
          )}
        </div>

        <button
          className=" rounded-[5px] bg-[#3498db] text-[#fff] p-[10px_15px] border-[none] rounded[5px] text-[16px] cursor-pointer transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
        {errors.notfound && (
          <span className="text-[#e74c3c] text-[14px]  block text-center">
            {errors.notfound}
          </span>
        )}
        <Link className="text-[#3498db] text-center text-[18px]" to="/signup">
          "Don't have an account yet?
        </Link>
      </form>
    </div>
  );
}
export default Login;
