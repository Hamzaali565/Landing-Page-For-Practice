import { useState } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [errors, setErrors] = useState({});

  // Handle form validation
  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!productDetail.trim())
      newErrors.productDetail = "Product detail is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (validateForm()) {
      onSubmit({ name, email, productDetail });
      // Reset form
      setName("");
      setEmail("");
      setProductDetail("");
      setErrors({});
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden transform transition-all">
        {/* Modal Header */}
        <div className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-semibold">Product Information</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-indigo-100 focus:outline-none"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${
                errors.name
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-indigo-200 focus:border-indigo-400"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${
                errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-indigo-200 focus:border-indigo-400"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Product Detail Input */}
          <div>
            <label
              htmlFor="productDetail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Detail
            </label>
            <textarea
              id="productDetail"
              value={productDetail}
              onChange={(e) => setProductDetail(e.target.value)}
              rows="3"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${
                errors.productDetail
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-indigo-200 focus:border-indigo-400"
              }`}
              placeholder="Enter product details"
            />
            {errors.productDetail && (
              <p className="mt-1 text-sm text-red-600">
                {errors.productDetail}
              </p>
            )}
          </div>

          {/* Modal Footer with Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
