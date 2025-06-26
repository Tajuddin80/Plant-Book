import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios"; // make sure axios is installed

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://plant-book-server.vercel.app/newsletter",
        { email }
      );
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "You're In! 🌿",
          text: "Thanks for subscribing — you'll now receive weekly plant care tips, exclusive offers, and updates right in your inbox.",
          timer: 3000,
          showConfirmButton: false,
        });

        setEmail("");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Try again later.",
      });
    }
  };

  return (
    <section className="bg-base-200 mb-10 py-15 rounded-2xl">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">
          🌱 Subscribe to Our Newsletter
        </h2>
        <p className="mb-6 text-base-content">
          Get weekly plant care tips, special offers, and updates directly in
          your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full md:w-2/3"
          />
          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-base-content">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
