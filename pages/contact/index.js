import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../config/variants";
import { useState } from "react";
import { data } from "autoprefixer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Aceept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      alert(data.msg);
    } catch (error) {
      console.error("Error:", error);
      alert(data.msg);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center my-10"
          >
            Let's <span className="text-accent">connect</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                name="email"
                autoComplete="off"
                autoCapitalize="none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              placeholder="subject"
              className="input"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="message"
              className="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              onClick={handleSubmit}
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.subject ||
                !formData.message
              }
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
