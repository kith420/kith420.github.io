export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Work Experience</h1>
      
      <div className="space-y-12">
        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-2xl font-semibold mb-2">Full-stack Engineer Intern</h2>
          <p className="text-gray-600 mb-2">Singtel</p>
          <p className="text-sm text-gray-500">May 2023 - Aug 2023</p>
          
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li>Developed and maintained web applications using React and Node.js</li>
            <li>Collaborated with cross-functional teams to deliver features</li>
            <li>Implemented responsive designs and optimized application performance</li>
            <li>Participated in code reviews and agile development processes</li>
          </ul>
        </div>

        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-2xl font-semibold mb-2">Front-end Engineer Intern</h2>
          <p className="text-gray-600 mb-2">Terrascope</p>
          <p className="text-sm text-gray-500">May 2022 - Aug 2022</p>
          
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li>Built user interfaces using React and TypeScript</li>
            <li>Worked on data visualization components</li>
            <li>Implemented responsive designs and accessibility features</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 