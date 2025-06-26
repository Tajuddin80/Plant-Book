import React from "react";

const Faq = () => {
  return (
    <div className=" mb-10 py-15 bg-base-200 rounded-2xl">
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="garden-accordion" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I share a gardening tip with the community?
        </div>
        <div className="collapse-content text-sm">
          Go to the "Share a Garden Tip" page from the navbar, fill out the form
          with your tip details, and click submit to publish it.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="garden-accordion" />
        <div className="collapse-title font-semibold">
          Can I connect with local gardeners near me?
        </div>
        <div className="collapse-content text-sm">
          Yes! Visit the "Explore Gardeners" page to browse gardener profiles,
          see their experience, and connect for help or collaboration.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="garden-accordion" />
        <div className="collapse-title font-semibold">
          How do I ask a plant care question?
        </div>
        <div className="collapse-content text-sm">
          Navigate to the "Browse Tips" page and use the Ask button to post your
          question. Other members can view and respond to your post.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="garden-accordion" />
        <div className="collapse-title font-semibold">
          What kind of gardening events can I find or post?
        </div>
        <div className="collapse-content text-sm">
          Members can post or join events like plant swaps, composting
          workshops, balcony gardening meetups, hydroponic sessions, and more.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="garden-accordion" />
        <div className="collapse-title font-semibold">
          How do I update my gardener profile?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" or click your avatar, then choose "Edit Profile" to
          update your gardening skills, interests, and location.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="garden-accordion" />
        <div className="collapse-title font-semibold">
          I’m new to gardening. Where should I start?
        </div>
        <div className="collapse-content text-sm">
          Start with beginner tips in the "Browse Tips" section or follow tags
          like #BeginnerGardening, #BalconyGarden, or #EasyPlants.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="garden-accordion" />
        <div className="collapse-title font-semibold">
          Is this platform free to use?
        </div>
        <div className="collapse-content text-sm">
          Yes! Our gardening community is completely free. Just sign up, create
          your profile, and start planting ideas with others.
        </div>
      </div>
    </div>
  );
};

export default Faq;
