import React from 'react'

const BlogPage = ({params}) => {
    console.log(params.slug)
    const {title, description} = blogs.find((blog) => blog.slug === params.slug)

  return (
    <div>
       <h5>{title}</h5>
       <p>{description}</p>
    </div>
  )
}

      const blogs = [
    {
      slug: "how-to-start-a-minimalist-bullet-journal",
      title: "How to Start a Minimalist Bullet Journal",
      description:
        "A step-by-step guide to setting up a clean, distraction-free bullet journal that helps you track habits, goals, and daily tasks without the clutter.",
    },
    {
      slug: "weekend-bangladesh-food-trip-guide",
      title: "Weekend Food Trip Guide: Hidden Eats in Bangladesh",
      description:
        "Explore local flavors with this weekend itinerary that highlights street snacks, home-style meals, and the best late-night bites.",
    },
    {
      slug: "css-grid-vs-flexbox-when-to-use-each",
      title: "CSS Grid vs Flexbox — When to Use Each",
      description:
        "Practical rules and examples to help frontend developers decide between Grid and Flexbox for layout problems large and small.",
    },
    {
      slug: "plant-parenting-101-indoor-plants-for-beginners",
      title: "Plant Parenting 101: Best Indoor Plants for Beginners",
      description:
        "A friendly primer on low-maintenance indoor plants, watering schedules, light needs, and simple troubleshooting tips.",
    },
    {
      slug: "build-a-simple-rest-api-with-node-express",
      title: "Build a Simple REST API with Node & Express",
      description:
        "Follow this hands-on tutorial to create a CRUD API, test endpoints, and understand routing and middleware in Express.",
    },
    {
      slug: "budget-photography-gear-for-new-creators",
      title: "Budget Photography Gear for New Creators",
      description:
        "Curated picks and buying tips for cameras, lenses, and accessories that give great results without breaking the bank.",
    },
    {
      slug: "selfcare-evenings-30-minute-routine",
      title: "Self-Care Evenings: A 30-Minute Reset Routine",
      description:
        "Simple evening rituals to help you unwind, sleep better, and mentally separate work from personal time.",
    },
    {
      slug: "beginners-guide-to-german-a1",
      title: "Beginner’s Guide to German (A1): First Steps",
      description:
        "Key vocabulary, study schedule, and quick pronunciation tips to get you started on A1-level German with confidence.",
    },
    {
      slug: "small-business-branding-on-a-shoestring",
      title: "Small Business Branding on a Shoestring Budget",
      description:
        "Practical branding tactics for startups and micro-businesses that create a professional look while keeping costs low.",
    },
    {
      slug: "quick-and-easy-veg-burger-recipe",
      title: "Quick & Easy Veg Burger Recipe",
      description:
        "A tasty, customizable veg burger recipe you can make in under 30 minutes — plus sauce ideas and serving suggestions.",
    },
    {
      slug: "how-to-organize-github-for-team-workflows",
      title: "How to Organize GitHub for Team Workflows",
      description:
        "Best practices for repositories, branching, PR reviews, and CI setup that keep small teams productive and sane.",
    },
    {
      slug: "designing-eye-catching-social-posts-with-figma",
      title: "Designing Eye-Catching Social Posts with Figma",
      description:
        "A quick walkthrough of templates, typography choices, and export tips to make scroll-stopping social graphics fast.",
    },
  ];

export default BlogPage
