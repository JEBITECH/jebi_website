import JsonLd from "./JsonLd";

export default function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "JebiTech Solutions Pvt. Ltd.",
        url: "https://jebitech.com",
        logo: "https://jebitech.com/images/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          email: "sales@jebitech.com",
        },
        foundingDate: "2017",
        sameAs: ["https://www.linkedin.com/company/jebi-softech-services/"],
      }}
    />
  );
}
