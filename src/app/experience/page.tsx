import Image from "next/image";

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Work Experience</h1>
      
      <div className="space-y-12">
        <div className="flex items-start gap-6 border-b border-gray-200 pb-8">
          <div className="flex-shrink-0">
            <a href="https://www.nttdata.com/global/en/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/ntt-data.jpg"
                alt="NTT Data logo"
                width={56}
                height={56}
                className="rounded-lg object-contain bg-white border border-gray-200"
              />
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">AI Engineer Intern</h2>
            <p className="text-gray-600 mb-1">NTT Data Indonesia</p>
            <p className="text-sm text-gray-500 mb-4">Aug 2024 - Nov 2024</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
              <li>Applied machine learning and data analysis techniques to tasks involving clustering, classification, sentiment analysis, and time series modeling, deriving meaningful insights from datasets.</li>
              <li>Developed skills in dataset cleaning, preprocessing, feature engineering, and assessing model performance.</li>
              <li>Gained hands-on experience with NLP frameworks and tools to implement analytical solutions.</li>
            </ul>
            <p className="text-gray-600 mb-5">Technologies used: Python, Pandas, Scikit-learn, TensorFlow, Keras, PyTorch, OpenCV, and more.</p>

            <h2 className="text-2xl font-semibold mb-2">Front-end Engineer Intern</h2>
            <p className="text-sm text-gray-500 mb-4">Jun 2024 - Jul 2024</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
              <li>Developed the front-end of an internal product for regulatory reporting using Next.js 12 and Tailwind CSS.</li>
              <li>Responsible for debugging and enhancing features developed by other team members.</li>
            </ul>
            <p className="text-gray-600 mb-3">Technologies used: Next.js, Tailwind CSS, and TypeScript.</p>
          </div>
        </div>

        <div className="flex items-start gap-6 border-b border-gray-200 pb-8">
          <div className="flex-shrink-0">
            <a href="https://kokocoder.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/kokocoder.png"
                alt="Kokocoder logo"
                width={56}
                height={56}
                className="rounded-lg object-contain bg-white border border-gray-200"
              />
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Competitive Programmer Coach</h2>
            <p className="text-gray-600 mb-1">Kokocoder</p>
            <p className="text-sm text-gray-500 mb-4">Jun 2023 - Dec 2024</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-2">
              <li>Conducted over 150+ hours of comprehensive coaching sessions using C++ and Python.</li>
              <li>Employed bilingual instruction in English and Indonesian to broaden accessibility and inclusivity for students.</li>
              <li>Customized teaching strategies to align with individual learning styles and requirements.</li>
              <li>Offered emotional and strategic support to students preparing for competitive programming competitions including the Indonesian National Olympiad of Informatics (NOI).</li>
            </ul>
            <p className="text-gray-600 mb-3">Technologies used: C++, Python, LaTeX, Markdown, and git.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 