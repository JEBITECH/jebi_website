"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  TrophyIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  ScaleIcon,
  UsersIcon,
  FaceSmileIcon,
  LightBulbIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

import AnimatedSection from '@/components/AnimatedSection';
import FloatingElements from '@/components/FloatingElements';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingSidebar from '@/components/FloatingSidebar';

const stats = [
  { number: "7+", label: "Benefit Pillars" },
  { number: "360°", label: "Well-being Focus" },
  { number: "∞", label: "Growth Paths" }
];

const benefitPillars = [
  {
    icon: ShieldCheckIcon,
    title: "Security",
    subtitle: "Full insurance coverage",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: TrophyIcon,
    title: "Recognition",
    subtitle: "Meaningful appreciation",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: AcademicCapIcon,
    title: "Learning",
    subtitle: "Continuous growth",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: RocketLaunchIcon,
    title: "Growth",
    subtitle: "Career pathways",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: ScaleIcon,
    title: "Balance",
    subtitle: "Work-life harmony",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: FaceSmileIcon,
    title: "Engagement",
    subtitle: "Community & fun",
    color: "from-indigo-500 to-blue-600"
  }
];

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: "Security & Wellness",
    description: "Comprehensive employee insurance for complete peace of mind — from life and medical to dental benefits and extended protection.",
    features: [
      "Gym membership reimbursement",
      "Employee Assistance Program (EAP)",
      "Wellness podcasts — health, nutrition & finance",
      "Personal & professional stress support"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrophyIcon,
    title: "Recognition",
    description: "Our rewards platform fosters a culture of appreciation where contributions are celebrated across all levels — non-hierarchical, transparent, and inclusive.",
    tagline: "Great work deserves to be seen — and celebrated.",
    features: [],
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: AcademicCapIcon,
    title: "Learning & Development",
    description: "Curated learning platforms, leadership programs, online academies, certification support, and mentoring opportunities to continuously strengthen your skills.",
    tagline: "At Jebitech, growth is a mindset — not a milestone.",
    features: [],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: RocketLaunchIcon,
    title: "Career Growth",
    description: "Through Internal Job Postings and transparent career pathways, Jebitechers explore lateral and vertical movements across functions — shaping their own careers.",
    tagline: "Your ambition deserves room to grow.",
    features: [],
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: ScaleIcon,
    title: "Work-Life Balance",
    description: "Paid time off, parental leaves, birthday & marriage celebrations, supportive facilities and employee-friendly policies — all designed to make life easier.",
    tagline: "Perform at your best, in every aspect of life.",
    features: [],
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: SparklesIcon,
    title: "Engagement & Fun",
    description: "Employee Impact Groups, Fun Fridays, festive celebrations, themed events, sports activities and cultural initiatives — the spirit of celebration is always alive.",
    tagline: "Energy and enthusiasm are part of life here.",
    features: [],
    gradient: "from-indigo-500 to-purple-600"
  }
];

const whyJoinReasons = [
  "Work on innovative and impactful projects",
  "Be part of a collaborative and supportive team",
  "Opportunities for continuous learning and growth",
  "Performance-driven culture with recognition and rewards",
  "Transparent leadership and open communication"
];

const jobTags = ["Angular", "Node.js", "Nest.js", "Full-time"];

// Job Data
const jobsData = [
  {
    id: 1,
    title: "Support Engineer / Customer Success Associate",
    company: "JEBI SOFTECH SERVICES PVT LTD",
    type: "Contract",
    location: "On-site",
    region: "India, Maharashtra",
    salary: "Not Disclosed",
    experience: "0-1 years",
    skills: ["Analytical Skills", "Cloud Services", "Communication Skills", "Documentation", "Product Knowledge", "Ticketing Systems"],
    applyLink: "https://itslink.net/jDTlJLZh5s",
    description: {
      about: "We are looking for a motivated Support Engineer / Customer Success Associate who will assist customers by resolving technical issues and ensuring smooth product usage. This role is ideal for fresh graduates interested in customer interaction, troubleshooting, and gaining hands-on experience with software products.",
      responsibilities: [
        {
          title: "Customer Support & Issue Resolution",
          items: [
            "Respond to customer support tickets and assist in resolving issues within defined service timelines.",
            "Troubleshoot product-related queries and provide timely resolutions to customers.",
            "Ensure issues are properly documented and followed through until closure.",
            "Escalate complex issues to the appropriate internal teams when necessary."
          ]
        },
        {
          title: "Operational Support",
          items: [
            "Assist in configuring new projects or system setups as per defined guidelines.",
            "Maintain documentation for configurations and common issues for internal reference.",
            "Learn product features and workflows to better support customers."
          ]
        },
        {
          title: "Communication & Coordination",
          items: [
            "Participate in Daily Stand-up Meetings (DSM) and provide updates on support tickets and open issues.",
            "Collaborate with Engineering and Product teams to resolve customer issues.",
            "Communicate clearly and professionally with internal teams and stakeholders."
          ]
        }
      ],
      requiredSkills: [
        "Basic understanding of software applications and troubleshooting concepts.",
        "Strong communication and interpersonal skills.",
        "Ability to analyze issues and provide logical solutions.",
        "Willingness to learn new technologies and support tools."
      ],
      preferredProfile: "Candidates from Hotel Management, Hospitality, BBA, MBA, or similar customer-facing backgrounds who are tech-savvy and comfortable working with software systems are encouraged to apply. Strong customer service orientation and problem-solving mindset. Internship or academic exposure to customer service, technical support, will be an advantage."
    }
  },
  {
    id: 2,
    title: "Software QA Engineer",
    company: "JEBI SOFTECH SERVICES PVT LTD",
    type: "Full Time",
    location: "On-site",
    region: "India, Maharashtra",
    salary: "Not Disclosed",
    experience: "3-5 years",
    skills: ["Agile Methodologies", "Black Box Testing", "Continuous Integration", "Load Testing", "Performance Testing", "Regression Testing"],
    applyLink: "https://itslink.net/Gfz7jdyaKg",
    description: {
      about: "We are looking for a detail-oriented Software Quality Assurance Engineer responsible for ensuring the quality, reliability, and performance of software applications. The role involves designing and executing test strategies, identifying defects early in the development cycle, and collaborating with development and product teams to deliver high-quality releases.",
      responsibilities: [
        {
          title: "Quality Assurance & Release Excellence",
          items: [
            "Ensure high-quality software releases with minimal production defects.",
            "Identify critical issues early in the development lifecycle.",
            "Monitor and reduce defect leakage through effective testing strategies.",
            "Validate fixes and ensure stable releases before deployment."
          ]
        },
        {
          title: "Testing & Documentation",
          items: [
            "Design, create, and execute comprehensive test cases, test plans, and test scenarios.",
            "Maintain accurate testing documentation and reports in tools such as Confluence or similar platforms.",
            "Participate in requirement analysis and refinement discussions to ensure clear and testable requirements."
          ]
        },
        {
          title: "Automation & Process Improvement",
          items: [
            "Improve test coverage through automation testing and efficient testing strategies.",
            "Identify opportunities to optimize testing processes, tools, and frameworks.",
            "Work closely with developers to improve application testability and prevent defects early."
          ]
        },
        {
          title: "Collaboration & Communication",
          items: [
            "Collaborate with Developers, Product Managers, and QA teams to ensure shared ownership of product quality.",
            "Participate in Daily Stand-up Meetings (DSM) and provide updates on testing progress, risks, and blockers.",
            "Support release readiness by ensuring all quality standards are met before deployment."
          ]
        }
      ],
      requiredSkills: [
        "Strong understanding of software testing principles, SDLC, and STLC.",
        "Experience with manual testing and test case design.",
        "Familiarity with defect tracking tools such as JIRA or similar platforms.",
        "Knowledge of API testing, web application testing, and database validation.",
        "Strong analytical, debugging, and problem-solving skills.",
        "Good communication and collaboration abilities."
      ],
      preferredProfile: "Experience with automation testing tools such as Selenium, Cypress, or Playwright. Familiarity with CI/CD pipelines and DevOps practices."
    }
  },
  {
    id: 3,
    title: "Software Engineer - Trainee",
    company: "JEBI SOFTECH SERVICES PVT LTD",
    type: "Full Time",
    location: "On-site",
    region: "India, Maharashtra",
    salary: "Not Disclosed",
    experience: "0-1 years",
    skills: ["React JS", "Next.js", "Node.js", "Git", "Cloud Platforms", "SDLC"],
    applyLink: "https://itslink.net/g5m9kvLYiP",
    description: {
      about: "We are seeking motivated Software Engineer - Trainee with a keen interest in web development and cloud technologies. This role is ideal for fresh graduates or candidates looking to start their career in software development. You will work under mentorship, gain hands-on experience, and contribute to real-world projects.",
      responsibilities: [
        {
          title: "Development & Learning",
          items: [
            "Assist in developing and maintaining web applications using frameworks such as React JS, Next.js, Node.js, and related technologies.",
            "Collaborate with the team to design and implement software solutions.",
            "Gain exposure to DevOps concepts and CI/CD pipelines.",
            "Work with Git and follow version control workflows.",
            "Learn and work with cloud platforms such as AWS, Azure, or GCP.",
            "Participate in code reviews and help troubleshoot issues in existing applications.",
            "Continuously learn and adopt best practices in web development and cloud technologies."
          ]
        }
      ],
      requiredSkills: [
        "Basic understanding of web development frameworks such as React JS, Next.js, Node.js",
        "Familiarity with Git and version control workflows.",
        "Awareness of cloud platforms (AWS, Azure, or GCP) and their services.",
        "Good problem-solving and debugging skills.",
        "Strong eagerness to learn and adapt to new technologies."
      ],
      preferredProfile: "Exposure to frontend and backend development concepts. Academic or personal projects demonstrating web or cloud development skills. Basic understanding of databases and APIs."
    }
  },
  {
    id: 4,
    title: "Software QA Engineer - Trainee",
    company: "JEBI SOFTECH SERVICES PVT LTD",
    type: "Contract",
    location: "On-site",
    region: "India, Maharashtra",
    salary: "Not Disclosed",
    experience: "0-1 years",
    skills: ["Agile Methodologies", "Black Box Testing", "Functional Testing", "Non-functional Testing", "Performance Testing", "Quality Assurance Processes", "Regression Testing"],
    applyLink: "https://itslink.net/nZGZPUrppO",
    description: {
      about: "We are looking for a motivated Quality Assurance Trainee who is passionate about software quality and testing. This role is ideal for fresh graduates who want to start their career in software testing and quality engineering. The candidate will work closely with developers and QA engineers to learn testing processes, execute test cases, and ensure high-quality software releases.",
      responsibilities: [
        {
          title: "Quality Assurance & Release Support",
          items: [
            "Support the QA team in ensuring high-quality product releases.",
            "Assist in identifying issues early during testing cycles.",
            "Help verify fixes and ensure defects are properly validated before release."
          ]
        },
        {
          title: "Testing & Documentation",
          items: [
            "Assist in creating and executing test cases and test scenarios.",
            "Support maintenance of test documentation and reports in tools such as Confluence or similar platforms.",
            "Participate in requirement discussions to understand product functionality."
          ]
        },
        {
          title: "Automation & Process Learning",
          items: [
            "Learn basic test automation concepts and tools used within the team.",
            "Support efforts to improve testing efficiency and coverage.",
            "Work with developers to understand application behavior and improve testing practices."
          ]
        },
        {
          title: "Collaboration & Communication",
          items: [
            "Work closely with developers, QA team members, and product managers.",
            "Participate in Daily Stand-up Meetings (DSM) and provide testing updates.",
            "Communicate issues clearly and assist in tracking defects."
          ]
        }
      ],
      requiredSkills: [
        "Basic understanding of software testing concepts (manual testing, SDLC, STLC).",
        "Basic knowledge of web applications and APIs.",
        "Familiarity with test case writing and defect tracking tools.",
        "Strong attention to detail and problem-solving ability.",
        "Good communication and willingness to learn."
      ],
      preferredProfile: "Internship or academic project experience in software testing. Basic exposure to automation testing tools or scripting languages. Understanding of databases and APIs."
    }
  }
];

// JobListings Component with Search, Filters, and Enhanced UX
function JobListings() {
  const [selectedJob, setSelectedJob] = useState(jobsData[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterExperience, setFilterExperience] = useState('All');
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  // Filter jobs based on search and filters
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = filterType === 'All' || job.type === filterType;
    const matchesExperience = filterExperience === 'All' || 
                              (filterExperience === 'Entry Level' && job.experience.includes('0-1')) ||
                              (filterExperience === 'Mid Level' && job.experience.includes('3-5'));
    return matchesSearch && matchesType && matchesExperience;
  });

  // Update selected job if it's filtered out
  if (!filteredJobs.find(job => job.id === selectedJob.id) && filteredJobs.length > 0) {
    setSelectedJob(filteredJobs[0]);
  }

  // Lock body scroll when modal is open on mobile
  useEffect(() => {
    if (isMobileModalOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Prevent touch scrolling on mobile
      
      // Restore scroll position when modal closes
      return () => {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobileModalOpen]);

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by job title or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-purple focus:outline-none transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-purple focus:outline-none transition-colors bg-white cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Contract">Contract</option>
            </select>

            <select
              value={filterExperience}
              onChange={(e) => setFilterExperience(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-purple focus:outline-none transition-colors bg-white cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {(searchQuery || filterType !== 'All' || filterExperience !== 'All') && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
            <span className="text-sm text-gray-600 font-medium">Active filters:</span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-purple/10 text-primary-purple rounded-full text-sm">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="hover:bg-primary-purple/20 rounded-full p-0.5">
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            )}
            {filterType !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-orange/10 text-primary-orange rounded-full text-sm">
                Type: {filterType}
                <button onClick={() => setFilterType('All')} className="hover:bg-primary-orange/20 rounded-full p-0.5">
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            )}
            {filterExperience !== 'All' && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-purple/10 text-primary-purple rounded-full text-sm">
                Level: {filterExperience}
                <button onClick={() => setFilterExperience('All')} className="hover:bg-primary-purple/20 rounded-full p-0.5">
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing <span className="font-semibold text-primary-purple">{filteredJobs.length}</span> {filteredJobs.length === 1 ? 'position' : 'positions'}
        </div>
      </div>

      {/* Job List and Details */}
      {filteredJobs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Side - Job List */}
            <div className="lg:col-span-1 space-y-3 lg:max-h-[800px] lg:overflow-y-auto lg:pr-2">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job, index) => (
                  <motion.button
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setSelectedJob(job);
                      setIsMobileModalOpen(true);
                    }}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 ${
                      selectedJob.id === job.id
                        ? 'border-primary-purple bg-gradient-to-br from-primary-purple/10 via-primary-orange/5 to-transparent shadow-xl'
                        : 'border-gray-200 bg-white hover:border-primary-purple/50 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-gray-900 text-base leading-tight pr-2">{job.title}</h4>
                      {selectedJob.id === job.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex-shrink-0 w-6 h-6 bg-primary-purple rounded-full flex items-center justify-center"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPinIcon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{job.location} • {job.region}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <ClockIcon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        job.type === 'Full Time' 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}>
                        {job.type}
                      </span>
                      <span className="lg:hidden text-xs text-primary-purple font-semibold">View Details →</span>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Right Side - Job Details (Hidden on mobile, shown on desktop) */}
            <div className="hidden lg:block lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedJob.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              >
                {/* Header with Clean Design */}
                <div className="bg-white border-b-2 border-gray-100 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedJob.title}</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <BuildingOfficeIcon className="w-5 h-5 text-primary-purple flex-shrink-0" />
                      <span className="text-sm">{selectedJob.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPinIcon className="w-5 h-5 text-primary-orange flex-shrink-0" />
                      <span className="text-sm">{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BriefcaseIcon className="w-5 h-5 text-primary-purple flex-shrink-0" />
                      <span className="text-sm">{selectedJob.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <ClockIcon className="w-5 h-5 text-primary-orange flex-shrink-0" />
                      <span className="text-sm">{selectedJob.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 col-span-2">
                      <CurrencyDollarIcon className="w-5 h-5 text-primary-purple flex-shrink-0" />
                      <span className="text-sm">{selectedJob.salary}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 max-h-[700px] overflow-y-auto">
                  {/* Skills */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedJob.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 text-primary-purple rounded-full text-sm font-semibold border border-primary-purple/20 hover:scale-105 transition-transform"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Link
                    href={selectedJob.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-orange to-orange-600 text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl mb-8"
                  >
                    Apply for this Position
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>

                  {/* About */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-primary-orange rounded-full"></div>
                      About the Role
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{selectedJob.description.about}</p>
                  </div>

                  {/* Responsibilities */}
                  {selectedJob.description.responsibilities.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary-purple rounded-full"></div>
                        Key Responsibilities
                      </h4>
                      <div className="space-y-6">
                        {selectedJob.description.responsibilities.map((section, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                          >
                            <h5 className="text-lg font-semibold text-gray-800 mb-3">{section.title}</h5>
                            <ul className="space-y-2">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-3">
                                  <CheckCircleIcon className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Required Skills */}
                  {selectedJob.description.requiredSkills.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary-orange rounded-full"></div>
                        What We're Looking For
                      </h4>
                      <div className="bg-gradient-to-br from-primary-purple/5 to-primary-orange/5 rounded-xl p-5 border border-primary-purple/10">
                        <ul className="space-y-3">
                          {selectedJob.description.requiredSkills.map((skill, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircleIcon className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm leading-relaxed">{skill}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Preferred Profile */}
                  {selectedJob.description.preferredProfile && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary-purple rounded-full"></div>
                        Preferred Candidate Profile
                      </h4>
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <p className="text-gray-700 leading-relaxed text-sm">{selectedJob.description.preferredProfile}</p>
                      </div>
                    </div>
                  )}

                  {/* Bottom Apply Button */}
                  <div className="pt-6 border-t border-gray-200">
                    <Link
                      href={selectedJob.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-orange to-orange-600 text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    >
                      Apply for this Position
                      <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Ready to join our team? Submit your application now!
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Modal */}
        <AnimatePresence>
          {isMobileModalOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileModalOpen(false)}
                className="fixed inset-0 bg-black/50 z-[9998] lg:hidden"
              />
              
              {/* Modal */}
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed inset-x-0 bottom-0 top-20 bg-white rounded-t-3xl shadow-2xl z-[9999] lg:hidden overflow-hidden flex flex-col"
              >
                {/* Modal Header */}
                <div className="bg-white border-b-2 border-gray-100 p-4 flex items-center justify-between flex-shrink-0">
                  <h3 className="text-xl font-bold text-gray-900">{selectedJob.title}</h3>
                  <button
                    onClick={() => setIsMobileModalOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6 text-gray-600" />
                  </button>
                </div>

                {/* Modal Content - Scrollable */}
                <div className="flex-1 overflow-y-auto p-6">
                  {/* Job Info */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <BuildingOfficeIcon className="w-4 h-4 text-primary-purple flex-shrink-0" />
                      <span className="text-xs">{selectedJob.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPinIcon className="w-4 h-4 text-primary-orange flex-shrink-0" />
                      <span className="text-xs">{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BriefcaseIcon className="w-4 h-4 text-primary-purple flex-shrink-0" />
                      <span className="text-xs">{selectedJob.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <ClockIcon className="w-4 h-4 text-primary-orange flex-shrink-0" />
                      <span className="text-xs">{selectedJob.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 col-span-2">
                      <CurrencyDollarIcon className="w-4 h-4 text-primary-purple flex-shrink-0" />
                      <span className="text-xs">{selectedJob.salary}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Required Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedJob.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 text-primary-purple rounded-full text-xs font-semibold border border-primary-purple/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Link
                    href={selectedJob.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-orange to-orange-600 text-white rounded-xl font-bold text-base hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg mb-6"
                  >
                    Apply for this Position
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>

                  {/* About */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-1 h-5 bg-primary-orange rounded-full"></div>
                      About the Role
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm">{selectedJob.description.about}</p>
                  </div>

                  {/* Responsibilities */}
                  {selectedJob.description.responsibilities.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="w-1 h-5 bg-primary-purple rounded-full"></div>
                        Key Responsibilities
                      </h4>
                      <div className="space-y-4">
                        {selectedJob.description.responsibilities.map((section, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                            <h5 className="text-base font-semibold text-gray-800 mb-2">{section.title}</h5>
                            <ul className="space-y-2">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2">
                                  <CheckCircleIcon className="w-4 h-4 text-primary-orange flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 text-xs leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Required Skills */}
                  {selectedJob.description.requiredSkills.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="w-1 h-5 bg-primary-orange rounded-full"></div>
                        What We're Looking For
                      </h4>
                      <div className="bg-gradient-to-br from-primary-purple/5 to-primary-orange/5 rounded-xl p-4 border border-primary-purple/10">
                        <ul className="space-y-2">
                          {selectedJob.description.requiredSkills.map((skill, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircleIcon className="w-4 h-4 text-primary-purple flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-xs leading-relaxed">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Preferred Profile */}
                  {selectedJob.description.preferredProfile && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="w-1 h-5 bg-primary-purple rounded-full"></div>
                        Preferred Candidate Profile
                      </h4>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <p className="text-gray-700 leading-relaxed text-xs">{selectedJob.description.preferredProfile}</p>
                      </div>
                    </div>
                  )}

                  {/* Bottom Apply Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href={selectedJob.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-orange to-orange-600 text-white rounded-xl font-bold text-base hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
                    >
                      Apply for this Position
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <p className="text-center text-xs text-gray-500 mt-3">
                      Ready to join our team? Submit your application now!
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-200"
        >
          <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilterType('All');
              setFilterExperience('All');
            }}
            className="px-6 py-3 bg-primary-purple text-white rounded-xl font-semibold hover:bg-purple-800 transition-colors"
          >
            Clear All Filters
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default function LifeAtJebitech() {
  const sections = [
    { id: 'hero', label: 'Overview' },
    { id: 'promise', label: 'Our Promise' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'careers', label: 'Careers' },
    { id: 'apply', label: 'How to Apply' },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Floating Sidebar Navigation */}
      <FloatingSidebar sections={sections} />

      {/* Hero Section - Enhanced */}
      <div id="hero" className="relative isolate px-6 pt-24 pb-20 md:pt-32 md:pb-28 lg:px-8 overflow-hidden bg-gradient-to-br from-primary-purple via-purple-700 to-purple-900">
        <FloatingElements />

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-primary-orange/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }}></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <UserGroupIcon className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-semibold">People First Culture</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-heading mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Life at Jebitech
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-4xl mx-auto mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Step into a workplace where total rewards go beyond pay — where employee well-being is truly paramount. Physical, mental, emotional, and financial — we've got you covered.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="#benefits"
                  className="group px-8 py-4 bg-white text-primary-purple rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
                >
                  Explore Life Here
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#careers"
                  className="group px-8 py-4 bg-primary-orange text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2"
                >
                  View Open Roles
                  <BriefcaseIcon className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Our People Promise Section */}
      <div id="promise" className="relative bg-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <HeartIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Our People Promise</span>
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                Benefits beyond compensation
              </h2>
              <p className="text-xl leading-relaxed text-gray-600 mb-6">
                At Jebitech, we focus on holistic well-being — physical, mental, emotional, and financial — ensuring our people feel supported in every aspect of life.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 font-medium">
                Our thoughtfully designed benefits and people practices empower Jebitechers to thrive both professionally and personally, every single day.
              </p>
            </div>
          </AnimatedSection>

          {/* Benefit Pillars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {benefitPillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} direction="up" delay={0.1 * index}>
                <motion.div
                  className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-purple to-purple-700 rounded-xl flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{pillar.title}</h3>
                    <p className="text-xs text-gray-600">{pillar.subtitle}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Everything You Need to Thrive Section */}
      <div id="benefits" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-4">
                Everything You Need to Thrive
              </h2>
              <p className="text-xl leading-8 text-gray-600">
                A workplace that truly cares
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} direction="up" delay={0.1 * index}>
                <motion.div
                  className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className="w-14 h-14 bg-gradient-to-br from-primary-purple to-purple-700 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <benefit.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    
                    {/* Tagline */}
                    {benefit.tagline && (
                      <p className="text-primary-purple font-semibold italic mb-4">
                        {benefit.tagline}
                      </p>
                    )}
                    
                    {/* Features */}
                    {benefit.features && benefit.features.length > 0 && (
                      <ul className="space-y-3 mt-auto">
                        {benefit.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <CheckCircleIcon className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Careers at Jebitech Section */}
      <div id="careers" className="relative bg-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <BriefcaseIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Join Our Team</span>
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                Careers at Jebitech
              </h2>
              <p className="text-xl leading-8 text-gray-600 mb-6">
                Great technology starts with great people
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We are a growing, innovation-driven organization committed to delivering excellence to our clients while building a collaborative and inspiring workplace for our team.
              </p>
            </div>
          </AnimatedSection>

          {/* Why Join Us */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="max-w-6xl mx-auto mb-16">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-4">
                  <SparklesIcon className="w-5 h-5 text-primary-purple" />
                  <span className="text-primary-purple text-sm font-semibold">Why Choose Jebitech</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Why Join Us?
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Be part of a team that's transforming hospitality technology
                </p>
              </div>

              {/* Reasons Grid - First 3 items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {whyJoinReasons.slice(0, 3).map((reason, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-orange/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 to-primary-orange/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <CheckCircleIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1 pt-1">
                        <p className="text-base text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                          {reason}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-purple via-primary-orange to-orange-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </motion.div>
                ))}
              </div>

              {/* Last 2 items - Centered */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {whyJoinReasons.slice(3).map((reason, idx) => (
                  <motion.div
                    key={idx + 3}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-orange/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (idx + 3) }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 to-primary-orange/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-orange to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <CheckCircleIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1 pt-1">
                        <p className="text-base text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                          {reason}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-purple via-primary-orange to-orange-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Open Positions */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="max-w-7xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Open Positions</h3>
              
              <JobListings />

              {/* Open Application CTA */}
              <motion.div 
                className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 border-2 border-dashed border-gray-300 text-center"
                whileHover={{ scale: 1.01 }}
              >
                <LightBulbIcon className="w-12 h-12 text-primary-orange mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Don't see a role that fits?
                </h4>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We're always excited to connect with talented professionals.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-orange text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Open Application
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* How to Apply Section */}
      <div id="apply" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="bg-blue-50 rounded-3xl p-10 border-2 border-blue-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <LightBulbIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">How to Apply</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Explore current openings and submit through our career portal. Ensure your resume is updated and highlights your key skills, experience, and achievements.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      If you do not find a suitable opening, you can still share your profile with us, we are always excited to connect with talented professionals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative bg-gradient-to-br from-primary-purple via-purple-700 to-purple-900 section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        
        <motion.div 
          className="absolute top-20 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading mb-6">
                  Ready to Join Our Team?
                </h2>
                <p className="text-xl leading-8 text-white/90 mb-10">
                  Be part of a team that's transforming the hospitality industry through innovative technology and exceptional people.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary-purple rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  Get in Touch
                  <ArrowRightIcon className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
