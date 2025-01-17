'use client';
import React from 'react';

export default function AboutSection() {
  const activities = [
    {
      title: "Intern Peer Leader",
      organization: "Centene Corporation",
      subtitle: "50+ Interns | Cross-Departmental Collaboration",
      period: "Jun 2024 - Sep 2024",
      achievements: [
        "Organized intern events, boosting engagement by 80%, improved resource access via mentorship programs",
        "Designed feedback loops using surveys, raising satisfaction ratings by 25% and identifying resource gaps"
      ]
    },
    {
      title: "Co-Lead",
      organization: "TrickFire Robotics Club",
      subtitle: "2 Regional Wins | Led 10 Members",
      period: "Mar 2023 - Dec 2023",
      achievements: [
        "Directed development of autonomous navigation algorithms, leading to 2 first-place finishes in regional competitions",
        "Designed and implemented real-time mapping and sensor fusion tools for competition scenarios"
      ]
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">About Me</h2>
        
        {/* Bio Section */}
        <div className="mb-16">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I am a passionate Information Systems student at the University of Washington, 
            focusing on data engineering and machine learning. With experience in both 
            technical development and team leadership, I strive to create impactful 
            solutions that bridge technology and business needs.
          </p>
        </div>

        {/* Leadership & Activities Section */}
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-8">Leadership & Activities</h3>
          <div className="space-y-8">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xl font-medium text-gray-900">{activity.title}</h4>
                      <span className="text-purple-600">|</span>
                      <span className="text-purple-600">{activity.organization}</span>
                    </div>
                    <p className="text-sm text-gray-500">{activity.subtitle}</p>
                  </div>
                  <span className="text-gray-500">{activity.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {activity.achievements.map((achievement, index) => (
                    <li key={index} className="text-base">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 