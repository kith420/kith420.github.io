export default function Resume() {
  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col items-center py-10 bg-white">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <iframe
        className="w-[800px] h-full flex justify-center mb-4"
        src="https://docs.google.com/document/d/15hqpXspiZcus18S9oPujC6xXHFxiYDLq/preview"
      />
      <a
        href="https://docs.google.com/document/d/15hqpXspiZcus18S9oPujC6xXHFxiYDLq/export?format=pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 px-4 py-2 bg-gray-300 text-gray-900 rounded-full text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Download PDF
      </a>
    </div>
  );
} 