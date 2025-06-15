
import { Link } from "react-router-dom";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const demoPosts: Post[] = [
  {
    slug: "why-data-viz-matters",
    title: "Why Data Visualization Matters",
    date: "2025-06-12",
    excerpt: "A look at how good visualization transforms analytics, with real-world project examples.",
  },
  {
    slug: "choosing-ml-algorithms",
    title: "Choosing the Right ML Algorithm",
    date: "2025-05-29",
    excerpt: "How to match data characteristics to model families for effective predictions.",
  },
];

const Insights = () => (
  <div className="max-w-3xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-[#B8B8CA]">Insights & Articles</h1>
    <ul>
      {demoPosts.map(post => (
        <li key={post.slug} className="mb-6">
          <Link to={`/insights/${post.slug}`}>
            <h2 className="text-xl font-semibold text-[#00BFFF] hover:underline">{post.title}</h2>
          </Link>
          <div className="text-xs text-[#B8B8CA]/70 mb-2">{post.date}</div>
          <p className="text-[#B8B8CA]/90">{post.excerpt}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Insights;
