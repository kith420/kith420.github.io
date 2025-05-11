export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-8">
        <article className="border-b border-gray-200 pb-8">
          <h2 className="text-2xl font-semibold mb-2">Getting Started with Next.js</h2>
          <p className="text-sm text-gray-500 mb-4">January 1, 2024</p>
          <p className="text-gray-600 mb-4">
            A comprehensive guide to building modern web applications with Next.js, covering the basics and advanced features.
          </p>
          <a 
            href="#" 
            className="text-blue-600 hover:underline"
          >
            Read more →
          </a>
        </article>

        <article className="border-b border-gray-200 pb-8">
          <h2 className="text-2xl font-semibold mb-2">The Future of Web Development</h2>
          <p className="text-sm text-gray-500 mb-4">December 15, 2023</p>
          <p className="text-gray-600 mb-4">
            Exploring upcoming trends and technologies that will shape the future of web development.
          </p>
          <a 
            href="#" 
            className="text-blue-600 hover:underline"
          >
            Read more →
          </a>
        </article>
      </div>
    </div>
  );
} 