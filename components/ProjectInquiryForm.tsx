"use client";

import React, { useState } from "react";

function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
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
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    // Ideally, here you would send the data to a server or some other form handling service
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-4xl mx-auto p-5"
      style={{ zIndex: 2 }}
    >
      <h2 className="text-white font-semibold text-3xl text-center pt-5">
        Contact Information
      </h2>
      <div className="flex flex-col space-y-3">
        <label className="block text-gray-300">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Company Name (if applicable):
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Website (if you already have one):
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Project Description:
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          ></textarea>
        </label>

        <label className="block text-gray-300">
          Project Goals:
          <textarea
            name="projectGoals"
            value={formData.projectGoals}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          ></textarea>
        </label>

        <label className="block text-gray-300">
          Target Audience:
          <input
            type="text"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Website Type:
          <input
            type="text"
            name="websiteType"
            value={formData.websiteType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Main Pages:
          <input
            type="text"
            name="mainPages"
            value={formData.mainPages}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Specific Functionalities:
          <textarea
            name="specificFunctionalities"
            value={formData.specificFunctionalities}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          ></textarea>
        </label>

        <label className="block text-gray-300">
          Color Schemes:
          <input
            type="text"
            name="colorSchemes"
            value={formData.colorSchemes}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Website Examples:
          <input
            type="text"
            name="websiteExamples"
            value={formData.websiteExamples}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Content Provided:
          <select
            name="contentProvided"
            value={formData.contentProvided}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          >
            <option value="">Please select</option>
            <option value="all">Providing all content</option>
            <option value="partial">Need assistance with content</option>
            <option value="none">No content available</option>
          </select>
        </label>

        <label className="block text-gray-300">
          Logo and Branding:
          <select
            name="logoAndBranding"
            value={formData.logoAndBranding}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          >
            <option value="">Please select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label className="block text-gray-300">
          Project Timeline:
          <input
            type="text"
            name="projectTimeline"
            value={formData.projectTimeline}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Project Budget:
          <input
            type="text"
            name="projectBudget"
            value={formData.projectBudget}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          />
        </label>

        <label className="block text-gray-300">
          Additional Information:
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-800 border-transparent focus:border-purple-500 focus:ring-0 text-white"
          ></textarea>
        </label>
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
