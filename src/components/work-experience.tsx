import { Calendar, MapPin, Briefcase } from "lucide-react"

interface WorkExperience {
  id: number
  company: string
  role: string
  location: string
  date: string
  description: string[]
  logo: string
}

export default function WorkExperience() {
  const experiences: WorkExperience[] = [
    {
      id: 1,
      company: "Microsoft",
      role: "Software Engineer & Product Manager Intern (Explore Intern)",
      location: "Redmond, WA",
      date: "May 2024 - August 2024",
      description: [
        "Improved Xbox login credential storage by developing a new cache system that increased token capacity by 100 percent",
        "Implemented encryption techniques for securing credentials in a user-specific location",
        "Designed and presented a technical design document in weekly sprints",
        "Conducted 7 user interviews for Outlook Calendar and designed a Figma prototype for an upcoming feature",
        "Successfully pitched a PRD to the Outlook Calendar team, leading to feature inclusion in the backlog",
      ],
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      company: "Capital One",
      role: "HACU HSI Immersion Program",
      location: "Plano, TX",
      date: "July 2023",
      description: [
        "Directed a team of 9 in developing a credit card product for new and prime credit customers",
        "Implemented customer journey mapping to identify diverse user segments",
        "Successfully pitched the final MVP to Capital One associates and stakeholders",
      ],
      logo: "/CapitalOneLogo.jpg",
    },
    {
      id: 3,
      company: "StartUP FIU",
      role: "Student Leader",
      location: "Miami, FL",
      date: "January 2023 - Present",
      description: [
        "Designed and executed 45 plus student entrepreneurship workshops",
        "Facilitated a weekly design thinking roundtable for student ideation and feedback",
        "Assisted 60 plus students with user interviews and data analysis in two 13-week innovation challenges",
      ],
      logo: "/SUPLogo.jpg",
    },
    {
      id: 4,
      company: "ServiceNow",
      role: "Discover ServiceNow Engineering Extern",
      location: "San Diego, CA",
      date: "August 2023",
      description: [
        "1st place winner of the engineering hackathon",
        "Built a project on the NOW platform showcasing Data Management, Security, Automation, and User Experience",
      ],
      logo: "/ServiceNowLogo.png",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 mt-8 relative">
      {/* Timeline central line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/50 top-0 rounded-full"></div>

      <div className="relative">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="mb-16 relative">
            {/* Timeline dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10"></div>

            {/* Experience card */}
            <div
              className={`w-full md:w-[calc(50%-20px)] bg-white rounded-lg shadow-md border border-border p-6 hover:shadow-lg transition-all duration-300 ${
                index % 2 === 0 ? "md:mr-auto animate-slideInLeft" : "md:ml-auto animate-slideInRight"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {exp.company === "Microsoft" ? (
                    <div className="w-12 h-12 grid grid-cols-2 grid-rows-2 gap-0.5">
                      <div className="bg-red-500"></div>
                      <div className="bg-green-500"></div>
                      <div className="bg-blue-500"></div>
                      <div className="bg-yellow-500"></div>
                    </div>
                  ) : exp.logo ? (
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 relative bg-secondary/30 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>

                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-foreground">{exp.company}</h4>
                  <p className="text-primary font-medium">{exp.role}</p>

                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mt-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

