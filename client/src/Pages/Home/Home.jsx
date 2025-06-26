import Slider from "../../components/Slider/Slider";
import { Link } from "react-router";
import PlantCard from "./PlantCard";
import { Helmet } from "react-helmet";
import Newsletter from "./Newsletter";
import Faq from "../../components/Faq/Faq";
import Blog from "./Blog";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import CardLoader from "../../components/CardLoader/CardLoader";

const Home = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTips = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://plant-book-server.vercel.app/recenttips"
        );
        setTips(data);
      } catch (error) {
        console.error("Error fetching recent tips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTips();
  }, []);
  const claimNow = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "you will get it soon.",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Plant Book 🌱 Home Page</title>
      </Helmet>

      <Slider />

      {/* Top Trending Tips */}
      <section className="mb-10 py-15 rounded-2xl bg-base-200">
      <h2 className="text-center text-primary text-3xl font-semibold uppercase pb-16">
        Top Trending Tips
      </h2>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16">
  {loading
    ? <CardLoader count={6} />
    : tips.map((data) => (
        <PlantCard key={data._id} data={data} />
      ))
  }
</div>

    </section>
      {/* Blog Highlights */}

      <Blog></Blog>

      {/* Promotional Section */}
      <section className="text-center py-15 mb-10 bg-base-200 rounded-2xl">
        <h2 className="text-3xl font-bold text-primary">
          Get Your First Plant Care Guide Free!
        </h2>
        <p className="mt-4 text-base-content max-w-xl mx-auto">
          Sign up today and receive a free PDF guide to indoor plant care.
        </p>
        <button onClick={claimNow} className="mt-6 btn btn-success">
          Claim Now
        </button>
      </section>

      {/* Offer Section */}
      <section className="py-15 mb-10 rounded-2xl text-center bg-gradient-to-r from-primary/10 to-secondary/10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          🌿 Summer Offer: Flat 25% Off!
        </h2>
        <p className="mb-6 text-base-content max-w-lg mx-auto">
          On all plant tips and accessories. Limited time only.
        </p>
        <Link to="/browsetips" className="btn btn-accent">
          Explore Offers
        </Link>
      </section>

      {/* FAQ Section */}
      <Faq />

      {/* Newsletter Section */}
      <Newsletter />
    </>
  );
};

export default Home;
