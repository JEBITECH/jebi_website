import JsonLd from "./JsonLd";

interface ServiceSchemaProps {
  services: Array<{ name: string; description: string; serviceType: string }>;
}

export default function ServiceSchema({ services }: ServiceSchemaProps) {
  return (
    <>
      {services.map((service) => (
        <JsonLd
          key={service.name}
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            serviceType: service.serviceType,
            provider: {
              "@type": "Organization",
              name: "JebiTech Solutions Pvt. Ltd.",
              url: "https://jebitech.com",
            },
          }}
        />
      ))}
    </>
  );
}
