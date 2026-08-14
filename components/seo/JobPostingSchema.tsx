import JsonLd from "./JsonLd";

export interface JobPostingSchemaProps {
  jobs: Array<{
    title: string;
    description: string;
    datePosted: string;
    location: { city: string; region: string; country: string };
  }>;
}

export default function JobPostingSchema({ jobs }: JobPostingSchemaProps) {
  if (jobs.length === 0) {
    return null;
  }

  return (
    <>
      {jobs.map((job, index) => (
        <JsonLd
          key={index}
          data={{
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: job.title,
            description: job.description,
            datePosted: job.datePosted,
            hiringOrganization: {
              "@type": "Organization",
              name: "JEBI SOFTECH SERVICES PVT LTD",
              sameAs: "https://jebitech.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: job.location.city || "Pune",
                addressRegion: job.location.region || "Maharashtra",
                addressCountry: job.location.country || "India",
              },
            },
          }}
        />
      ))}
    </>
  );
}
