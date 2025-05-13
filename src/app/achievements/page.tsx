export default function Achievements() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Achievements</h1>

      {/* Academic Achievements */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Academic Achievements</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Gold Medalist, Indonesian National Olympiad of Informatics (NOI/OSN)</h3>
          <p className="text-sm text-gray-500">Oct 2022</p>
          <p className="text-gray-700">Awarded for outstanding academic performance at SUTD.</p>
          <a href="https://osn.toki.id/statistik/peserta/1332" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            View Competition
          </a>
        </div>
        {/* Add more academic achievements here */}
      </section>

      {/* Professional Achievements */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Professional Achievements</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Employee of the Month</h3>
          <p className="text-sm text-gray-500">NTT Data Indonesia, Sep 2024</p>
          <p className="text-gray-700">Recognized for exceptional contributions to the AI team.</p>
        </div>
        {/* Add more professional achievements here */}
      </section>

      {/* Programming & Tech Achievements */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Programming & Tech Achievements</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Top 100, Google Code Jam</h3>
          <p className="text-sm text-gray-500">April 2023</p>
          <p className="text-gray-700">Ranked in the top 100 globally in Google's annual coding competition.</p>
          <a href="https://codingcompetitions.withgoogle.com/codejam" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            View Competition
          </a>
        </div>
        {/* Add more programming achievements here */}
      </section>

      {/* Other Achievements */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Other Achievements</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">JLPT N2 Certification</h3>
          <p className="text-sm text-gray-500">2021</p>
          <p className="text-gray-700">Passed the Japanese Language Proficiency Test N2 level.</p>
        </div>
        {/* Add more other achievements here */}
      </section>
    </div>
  );
} 