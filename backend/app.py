from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization", "Accept"],
        "max_age": 3600
    }
})

@app.route('/test', methods=['GET'])
def test():
    return jsonify({"message": "Test endpoint working!"})

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        print("Received request") # Debug print
        if not request.is_json:
            print("Request is not JSON")
            return jsonify({"error": "Request must be JSON"}), 400
            
        data = request.get_json()
        print("Request data:", data) # Debug print
        
        if not data:
            return jsonify({"error": "No data received"}), 400
            
        message = data.get('message', '')
        if not message:
            return jsonify({"error": "No message found"}), 400
            
        response = generate_response(message)
        print("Sending response:", response) # Debug print
        return jsonify({"response": response})
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

# Add a test route
@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Server is running!"})

# Knowledge base about you
knowledge = {
    "name": "Aseem Sethi",
    "skills": {
        "Advanced": ["Python", "SQL", "R", "Snowflake", "Databricks", "C++", "Java"],
        "Intermediate": ["Data Visualization (Power BI, Tableau)", "Machine Learning", 
                        "ETL Pipelines", "OpenCV"]
    },
    "about": """I'm Aseem Sethi, a tech enthusiast with a passion for AI, data, and innovation. 
    Currently pursuing my Bachelor's in Information Systems at the University of Washington, 
    I specialize in creating impactful solutions that bridge technology and everyday life. 
    My interests lie in building intuitive applications, leveraging AI for personalization, 
    and tackling data-driven challenges.""",
    "education": {
        "university": "University of Washington",
        "degree": "Bachelor's in Information Systems",
        "graduation": "Expected December 2025"
    },
    "projects": [
        {
            "name": "Podcast Summarizer",
            "description": "AI-driven tool to generate concise summaries of podcast episodes, helping users quickly grasp key insights without listening to entire episodes."
        },
        {
            "name": "Video Analytics System",
            "description": "AI-powered system to analyze video footage for actionable insights, with applications ranging from security monitoring to audience engagement tracking."
        },
        {
            "name": "News Recommender",
            "description": "AI-based recommendation engine that curates personalized news feeds based on user preferences and reading history."
        },
        {
            "name": "Subtitle Streaming Extension",
            "description": "Browser extension to improve video accessibility by streaming high-quality subtitles in real-time for online content."
        }
    ],
    "experience": [
        {
            "company": "Centene Corporation",
            "role": "Intern",
            "description": "Enhanced data quality and efficiency through SQL mapping, Python scripts for QA automation, and streamlined data visualization migrations from Tableau to Power BI."
        }
    ],
    "interests": [
        "AI applications in personal productivity and accessibility",
        "Data engineering and visualization",
        "Mental health and AI-powered therapeutic tools",
        "Basketball",
        "Fitness",
        "Drawing",
        "Reading"
    ]
}

def generate_response(message: str) -> str:
    message = message.lower()
    
    # Basic response logic
    if "skills" in message or "technologies" in message:
        advanced = ", ".join(knowledge["skills"]["Advanced"])
        intermediate = ", ".join(knowledge["skills"]["Intermediate"])
        return f"Aseem is skilled in several technologies. He's particularly strong in {advanced}. He also works with {intermediate}. Would you like to know more about any specific technology or his projects where he's applied these skills?"
    
    elif "background" in message or "about" in message:
        return f"{knowledge['about']} Feel free to ask about any specific aspect of his background!"
    
    elif "podcast" in message or "summarizer" in message:
        project = next(p for p in knowledge["projects"] if "Podcast" in p["name"])
        return f"The Podcast Summarizer is one of Aseem's most interesting projects! {project['description']} He used Python and AI to build this tool. Would you like to know about the technical details or his other AI projects?"
    
    elif "video" in message or "analytics" in message:
        project = next(p for p in knowledge["projects"] if "Video" in p["name"])
        return f"Great question! {project['description']} This project combines computer vision with data analytics. Want to know more about how it works?"
    
    elif "what else" in message or "tell me more" in message:
        return "I can tell you about his education at UW, his internship experience at Centene, his technical skills, or his interests outside of tech. What interests you most?"
    
    elif "project" in message:
        return """Let me tell you about some of Aseem's coolest projects:

1. A Podcast Summarizer that uses AI to create quick summaries
2. A Video Analytics System for smart monitoring
3. A News Recommender for personalized content
4. A Subtitle Streaming Extension for better accessibility

Which one sounds interesting to you? I'd love to share more details about any of them!"""
    
    elif "education" in message or "university" in message:
        edu = knowledge["education"]
        return f"Aseem is studying {edu['degree']} at {edu['university']} and will graduate in {edu['graduation']}. He's really passionate about applying what he learns to real-world problems. Want to hear about some of his practical projects?"
    
    elif "experience" in message or "work" in message or "internship" in message:
        exp = knowledge["experience"][0]
        return f"At {exp['company']}, Aseem did some really cool work! {exp['description']} This experience really showed his ability to combine technical skills with practical solutions. Would you like to know more about his technical background?"
    
    elif "interest" in message or "hobby" in message:
        tech_interests = ", ".join(knowledge["interests"][:3])
        personal_interests = ", ".join(knowledge["interests"][3:])
        return f"Beyond coding, Aseem is really passionate about {tech_interests}. He also enjoys {personal_interests} in his free time. This mix of interests gives him a unique perspective in his work. Want to hear more about any of these areas?"
    
    elif "hello" in message or "hi" in message:
        return "Hi there! I'd be happy to tell you about Aseem. Are you interested in his projects, skills, or background? I can share lots of interesting details!"
    
    return "I can tell you about Aseem's projects, skills, education, or interests. What would you like to know more about?"

if __name__ == '__main__':
    app.run(port=5001, debug=True) 