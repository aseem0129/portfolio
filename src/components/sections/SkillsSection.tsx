'use client';
import React, { useRef } from 'react';
import { useInView } from '@/hooks/useInView';

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillsRef);

  const skills = [
    { name: "Python", level: 100 },
    { name: "SQL", level: 100 },
    { name: "R", level: 90 },
    { name: "Snowflake", level: 100 },
    { name: "Databricks", level: 90 },
    { name: "C++", level: 70 },
    { name: "Java", level: 100 }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">Skills</h2>
        <div ref={skillsRef} className="space-y-6 max-w-3xl">
          {skills.map((skill, index) => (
            <div key={skill.name} className="flex items-center">
              <span className="w-32 text-xl text-gray-700">{skill.name}</span>
              <div className="flex-1 ml-10">
                <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r from-blue-500 to-purple-600 
                    transition-all duration-1000 ease-out`}
                    style={{
                      width: isInView ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 