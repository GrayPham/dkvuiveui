import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormPopup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const onSubmit = (data: any) => {
    // Xử lý dữ liệu khi submit form
    console.log("Form data submitted:", data);

    // Đóng popup sau khi xử lý
    onClose();
  };

  return (
    <div className={`popup ${isOpen ? "block" : "hidden"}`}>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Enter Contact Information</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Name:</label>
                <input {...register("name")} type="text" id="name" className="border p-2 w-full" />
                </div>

                <div className="mb-4">
                <label htmlFor="dob" className="block mb-2">Date of Birth:</label>
                <input {...register("dob")} type="date" id="dob" className="border p-2 w-full" />
                </div>

                <div className="mb-4">
                <label htmlFor="contactLink" className="block mb-2">Contact Link:</label>
                <input {...register("contactLink")} type="text" id="contactLink" className="border p-2 w-full" />
                </div>

                <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">Phone Number:</label>
                <input {...register("phone")} type="tel" id="phone" className="border p-2 w-full" />
                </div>

                <div className="mb-4">
                <label htmlFor="email" className="block mb-2">Email:</label>
                <input {...register("email")} type="email" id="email" className="border p-2 w-full" />
                </div>
            </div>

            <div className="col-span-2 flex justify-end mt-4">
                <div className="space-x-5">
                    <button type="button" className="px-4 py-2 bg-gray-300 hover:bg-gray-400 transition-colors duration-200" onClick={onClose}>
                    Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-200">
                    Confirm
                    </button>
                </div>
            </div>
            </form>

        </div>
      </div>
    </div>
  );
};

export default FormPopup;
