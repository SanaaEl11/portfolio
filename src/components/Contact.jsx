import React from "react";
import Swal from 'sweetalert2'

export default function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7936eb42-6431-4ef5-b1f4-46b7746e81cd");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Good job!",
                text: "Message sent",
                icon: "success",
                background: "black",
                customClass: {
                    title: 'custom-title',
                    htmlContainer: 'custom-content', // Use this for the text
                    confirmButton: 'custom-button',
                }
            });
        }}
      // Add custom styles
const style = document.createElement('style');
style.innerHTML = `
    .custom-title {
        color: white;
    }
    .custom-content {
        color: white;
    }
    .custom-button {
        background: linear-gradient(to right, #f97316,#ec4899);
        color: white;
        border: none;
        padding: 10px 30px;
        border-radius: 5px;
    }

    }
`;
document.head.appendChild(style);
      
  return (
    <div className="max-w-[1200^x] mx-auto bg-black sm:py-20 p-5 " id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">
          Contact Me
        </h2>
      </div>
      <div className="max-w-[800px] mx-auto ">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700
                                rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5 ">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700
                                rounded-md focus:outline-none focus:border-pink-600"
                    required/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="mt-2.5 ">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      rows="4" required
                    ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white  bg-gradient-to-r from-orange-400 to-pink-600 rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
