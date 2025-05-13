"use client";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Hi there, I'm Nathan Keith!</h1>
      <p className="text-xl text-gray-600 mb-8">
        I am a{' '}
        <span className="font-semibold text-black">
          <Typewriter
            words={[
              'software developer.',
              'competitive programmer.',
              'problem solver.',
              'tech enthusiast.'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </span>
      </p>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600">
            
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid gap-6">
            {/* Add your project cards here */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Project Name</h3>
              <p className="text-gray-600 mb-4">Project description goes here.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Next.js</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
