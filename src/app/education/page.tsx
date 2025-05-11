export default function Education() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Education</h1>
      
      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-2xl font-semibold mb-2">Singapore University of Technology and Design</h2>
          <p className="text-gray-600 mb-2">Bachelor of Engineering in Computer Science</p>
          <p className="text-sm text-gray-500">2020 - 2024</p>
          
          <div className="mt-4">
            <h3 className="font-medium mb-2">Relevant Coursework</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Data Structures and Algorithms</li>
              <li>Software Engineering</li>
              <li>Database Systems</li>
              <li>Computer Networks</li>
              <li>Operating Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 