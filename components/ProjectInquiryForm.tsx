"use client";
import React, { useState, useRef } from "react";
import { sendForm } from "@emailjs/browser";

function ProjectInquiryForm() {
  const form: any = useRef();
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    website: "",
    projectDescription: "",
    projectGoals: "",
    targetAudience: "",
    websiteType: "",
    mainPages: "",
    specificFunctionalities: "",
    colorSchemes: "",
    websiteExamples: "",
    contentProvided: "",
    logoAndBranding: "",
    projectTimeline: "",
    projectBudget: "$",
    additionalInfo: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    sendForm(
      "service_sw3cp2d",
      "template_ix6s99a",
      form.current,
      "t6TeNeADJegHTc6gK"
    ).then(
      () => {
        alert("Your message has been sent successfully!");
      },
      (error) => {
        console.error("FAILED...", error.text);
        alert("Failed to send the message, please try again.");
      }
    );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="mx-auto p-5 my-5 md:max-w-6xl"
      style={{ zIndex: 2 }}
    >
      <h2 className="text-white font-semibold text-3xl text-center pt-5 mb-5">
        Project Submittal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Dynamically generate form fields with the grid layout */}
        {Object.keys(formData).map((key) =>
          key === "contentProvided" ? (
            <label key={key} className="block text-gray-300">
              Content Provided:
              <select
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
              >
                <option value="">Please select</option>
                <option value="all">Providing all content</option>
                <option value="partial">Need assistance with content</option>
                <option value="none">No content available</option>
              </select>
            </label>
          ) : (
            <label key={key} className="block text-gray-300">
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              :
              <input
                type={
                  key.includes("email")
                    ? "email"
                    : key.includes("website")
                    ? "url"
                    : "text"
                }
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
                required={key !== "companyName" && key !== "website"}
              />
            </label>
          )
        )}
      </div>
      <button
        type="submit"
        className="mt-8 w-full bg-gradient-to-r from-purple-700 to-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      >
        Submit Form
      </button>
    </form>
  );
}

export default ProjectInquiryForm;
