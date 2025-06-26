import React from "react";
import { useParams, useNavigate } from "react-router";

// The same blogs data array (or import from a shared file)
const blogs = [
  {
    id: 1,
    title: "Top 5 Gardening Tips for Summer",
    description:
      "Learn how to keep your plants hydrated and fresh in the summer heat.",
    excerpt:
      "Summer can be harsh on your garden, but with the right strategies like mulching, early morning watering, and shade management, your plants can thrive all season long.",
    image: "https://i.ibb.co/RkbNwq76/5.jpg",
    author: "Lily Green",
    date: "2025-06-20",
    tags: ["summer", "gardening", "hydration", "plant care"],
    content: `
      As temperatures rise, your garden requires extra care to stay lush and vibrant. Start with early morning watering to reduce evaporation. Apply mulch to retain soil moisture and prevent weeds. Choose heat-tolerant plants like zinnias and succulents. Provide shade using garden cloths or strategic plant placement. And finally, regularly check soil moisture and adjust your routine based on the weather forecast.
    `
  },
  {
    id: 2,
    title: "Indoor Plants That Purify Air",
    description:
      "Discover the best indoor plants to improve air quality in your home.",
    excerpt:
      "From Snake Plants to Peace Lilies, find out which houseplants not only beautify your home but also help remove toxins from the air.",
    image: "https://i.ibb.co/gFwbGpwF/air2.jpg",
    author: "Jake Bloom",
    date: "2025-06-15",
    tags: ["indoor", "plants", "air quality", "home decor"],
    content: `
      Did you know your living room could be cleaner with the help of plants? NASA's Clean Air Study found that common plants like Spider Plant, Aloe Vera, and Areca Palm can filter toxins like benzene and formaldehyde. These green companions require low maintenance, making them perfect for beginners. Just a few well-placed plants can dramatically enhance the air you breathe daily.
    `
  },
  {
    id: 3,
    title: "Organic Fertilizer: DIY Guide",
    description:
      "Make your own natural fertilizer using kitchen waste and save money!",
    excerpt:
      "Don’t throw away your kitchen scraps! Learn to turn them into rich compost that feeds your plants naturally and sustainably.",
    image: "https://i.ibb.co/fdYRNZJm/1.jpg",
    author: "Nadia Earthwell",
    date: "2025-06-10",
    tags: ["organic", "fertilizer", "DIY", "composting"],
    content: `
      Creating organic fertilizer at home is easier than you think. Start by collecting vegetable peels, eggshells, and coffee grounds. Mix them in a compost bin with dried leaves and garden clippings. Turn the mixture weekly to aerate. After 4–6 weeks, you’ll have rich, crumbly compost that you can sprinkle at the base of your plants. This eco-friendly method not only saves money but also enriches the soil without chemicals.
    `
  }
];




const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Blog not found</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <button
        className="btn btn-outline mb-6"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <article className="bg-base-100 shadow-lg rounded-xl overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-500 mb-6">
            By <span className="font-semibold">{blog.author}</span> on{" "}
            {new Date(blog.date).toLocaleDateString()}
          </p>

          <div className="mb-6 flex flex-wrap gap-3">
            {blog.tags.map((tag, i) => (
              <span key={i} className="badge badge-outline badge-lg">
                #{tag}
              </span>
            ))}
          </div>

          <div className="prose max-w-none whitespace-pre-line text-lg ">
            {blog.content.trim()}
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogDetails;
