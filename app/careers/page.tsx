"use client";

import Link from 'next/link';
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

import AnimatedSection from '@/components/AnimatedSection';
import FloatingElements from '@/components/FloatingElements';

const jobOpenings = [
  {
    id: 1,
    title: "Full Stack Developer (Angular + Node.js/Nest.js)",
    company: "JEBI SOFTECH SERVICES PVT LTD",
    type: "Full Time",
    location: "On-site",
    region: "India, Maharashtra",
    salary: "Not Disclosed",
    applyLink: "https://live.digisme.in/ATS/JobApplication.aspx?q=MHBlRmp2L0N0a0hFOGNzZlN6SVJpcUFPVVR0dllQektVdlp5djE5emlLRT0=",
    description: "We're looking for a talented Full Stack Developer to join our team and help build innovative hospitality technology solutions.",
    requirements: [
      "Strong experience with Angular framework",
      "Proficiency in Node.js and Nest.js",
      "Experience with RESTful APIs and microservices",
      "Knowledge of database systems (SQL/NoSQL)",
      "Understanding of cloud platforms (AWS/Azure/GCP)"
    ]
  }
];

const benefits = [
  {
    title: "Learning & Growth",
    description: "Continuous learning opportunities and skill development",
    icon: AcademicCapIcon
  },
  {
    title: "Great Team",
    description: "Work with passionate and talented professionals",
    icon: UserGroupIcon
  },
  {
    title: "Work-Life Balance",
    description: "Flexible work arrangements and supportive culture",
    icon: HeartIcon
  },
  {
    title: "Innovation",
    description: "Work on cutting-edge hospitality technology",
    icon: RocketLaunchIcon
  }
];

export default function Careers() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-24 pb-16 md:pt-28 md:pb-20 lg:px-8 overflow-hidden bg-gradient-to-br from-primary-purple via-purple-700 to-purple-800">
        <FloatingElements />

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '48px 48px'
            }}></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-white text-sm font-semibold">💼 Join Our Team</span>
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-heading mb-8">
                Careers at JebiTech
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto">
                Build the future of hospitality technology with a team of passionate innovators and industry experts.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="relative bg-white section-padding overflow-hidden">
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
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                Why Join JebiTech?
              </h2>
              <p className="text-xl leading-8 text-gray-600">
                Be part of a team that's transforming the hospitality industry through innovative technology
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} direction="up" delay={0.1 * index}>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-purple/30 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-purple to-purple-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg flex-shrink-0">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm flex-1">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #4A1A5C 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-purple/10 to-primary-orange/10 rounded-full border border-primary-purple/20 mb-6">
                <BriefcaseIcon className="w-5 h-5 text-primary-purple" />
                <span className="text-primary-purple text-sm font-semibold">Open Positions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 font-heading mb-6">
                Current Openings
              </h2>
              <p className="text-xl leading-8 text-gray-600">
                Explore opportunities to grow your career with us
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job, index) => (
              <AnimatedSection key={job.id} direction="up" delay={0.1 * index}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-purple/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-purple/10 rounded-full">
                          <ClockIcon className="w-4 h-4 text-primary-purple" />
                          <span className="text-sm font-medium text-primary-purple">{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-orange/10 rounded-full">
                          <MapPinIcon className="w-4 h-4 text-primary-orange" />
                          <span className="text-sm font-medium text-primary-orange">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
                          <MapPinIcon className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-medium text-gray-600">{job.region}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircleIcon className="w-5 h-5 text-primary-orange flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:w-64 flex-shrink-0">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                        <div className="mb-4">
                          <div className="text-sm text-gray-500 mb-1">Company</div>
                          <div className="text-sm font-semibold text-gray-900">{job.company}</div>
                        </div>
                        <div className="mb-6">
                          <div className="text-sm text-gray-500 mb-1">Salary</div>
                          <div className="text-sm font-semibold text-gray-900">{job.salary}</div>
                        </div>
                        <Link
                          href={job.applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-purple text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                        >
                          Apply Now
                          <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-purple to-purple-800 section-padding">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl leading-8 text-white/90 mb-8">
                We're always looking for talented individuals. Send us your resume and let's talk about future opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-purple rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Get in Touch
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
