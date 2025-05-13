import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Tappin' Queen",
    description: "1978's Simon Game on FPGA with a twist",
    image: "/images/project1.png",
    tags: ["Assembly", "Lucid", "FPGA"],
    link: "/blog/project1"
  },
  {
    title: "kNow",
    description: "Snapchat maps + Instagram stories in one application",
    image: "/images/project2.jpg",
    tags: ["Java", "Firebase", "Google Maps API"],
    link: "/blog/project2"
  },
  {
    title: "Pic' A Pixel",
    description: "An interactive installation for the Upper Changi bus stop",
    image: "/images/project3.jpg",
    tags: ["React", "Arduino", "C++"],
    link: "/blog/project3"
  },
  {
    title: "Mastermind II",
    description: "A buffed, multiplayer version of Mastermind with a terminal interface.",
    image: "/images/project4.jpg",
    tags: ["Python", "OOP"],
    link: "/blog/project4"
  },
  {
    title: "TOKI Regular Open Contest #33",
    description: "A competitive programming contest",
    image: "/images/troc-33.png",
    tags: ["C++", "tcframe", "Markdown"],
    link: "/blog/project5"
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Link
            href={project.link}
            key={idx}
            className="group block rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-transform duration-200 hover:scale-105 focus:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx === 0}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
