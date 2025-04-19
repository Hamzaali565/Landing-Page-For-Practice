import React from "react";

const Testimonial = ({
  Newstyle = "lg:flex-row",
  imageUrl,
  heading,
  description,
}) => {
  return (
    <div className="bg-[#f8f9fa]">
      <div
        className={`flex flex-col ${Newstyle} w-full max-w-6xl mx-auto p-6 gap-6 `}
      >
        {/* Text Section */}
        <div className="flex-1 bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">{heading}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
          <button className="mt-6 w-fit bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 h-72 lg:h-auto bg-gray-100 shadow-xl rounded-2xl overflow-hidden">
          <img
            src={
              imageUrl ||
              "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small_2x/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg"
            }
            alt="Technology"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
