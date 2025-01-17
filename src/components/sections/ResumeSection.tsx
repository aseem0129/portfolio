'use client';
import React from 'react';

export default function ResumeSection() {
  const experiences = [
    {
      title: "Data Engineering Intern",
      company: "Centene Corporation",
      period: "Jun 2024 - September 2024",
      tech: "Python, SQL, PowerBI, Git, Snowflake, Databricks, Kubernetes",
      description: [
        "Developed Snowflake tables with clustering keys and materialized views, boosting query speed by 50% in 3 weeks",
        "Designed Python scripts to automate database connections, reducing retrieval times by 70% for 100k+ records",
        "Built Power BI dashboards to visualize 100k+ records, increasing data accessibility by 35% for non-tech stakeholders"
      ]
    },
    {
      title: "Machine Learning Researcher",
      company: "University of Washington",
      period: "Jun 2023 - December 2023",
      tech: "Python, SQL, R, Git, Databricks, Tensorflow",
      description: [
        "Built NLP-driven chatbots in Python and R, improving therapeutic response accuracy by 35% based on user feedback",
        "Developed ML models in Python and scikit-learn, increasing caregiver engagement by 40% using weekly interaction logs",
        "Designed model evaluation pipelines in PyTorch and SQL, reducing error rates by 20% measured by prediction accuracy"
      ]
    },
    {
      title: "Software Engineering Tutor",
      company: "University of Washington",
      period: "Jan 2023 - Jun 2023",
      tech: "Python, SQL, Java",
      description: [
        "Built lesson plans in Python, SQL, and Java to mentor 15+ students, improving pass rates by 20% based on evaluations",
        "Designed algorithm modules in Python and Java, boosting coding efficiency by 30% across 50+ problem sets",
        "Created data structures tutorials, including hands-on coding labs, to strengthen core technical skills for 10+ projects"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor's in Information Systems",
      school: "University of Washington",
      period: "2021 - 2025",
      details: "GPA: 3.8, Dean's List"
    }
    // Add more education
  ];

  return (
    <section id="resume" className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">Resume</h2>
          <a
            href="/resume.pdf" // Add your resume PDF to the public folder
            download
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg 
              hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-gray-800 mb-6">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.title} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-medium text-gray-900">{exp.title}</h4>
                    <p className="text-purple-600">{exp.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{exp.tech}</p>
                  </div>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-4">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-base">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-6">Education</h3>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.degree} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-medium text-gray-900">{edu.degree}</h4>
                    <p className="text-purple-600">{edu.school}</p>
                  </div>
                  <span className="text-gray-500">{edu.period}</span>
                </div>
                <p className="text-gray-600">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 