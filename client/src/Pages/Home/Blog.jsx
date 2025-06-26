import React from "react";
import { Link } from "react-router";

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

const Blog = () => {
  return (
    <section className="mb-10 py-15 rounded-2xl bg-base-200">
      <h2 className="text-center text-4xl font-bold pb-16 text-primary">
        🌿 Recent Blog Articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-base-100 shadow-xl rounded-2xl overflow-hidden flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 ">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                By {blog.author} — {new Date(blog.date).toLocaleDateString()}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span key={i} className="badge badge-outline badge-sm">
                    #{tag}
                  </span>
                ))}
              </div>

              <p className=" mb-4 flex-grow">{blog.excerpt}</p>

              <Link to={`blog/${blog.id}` }className="btn btn-primary btn-sm self-start">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
