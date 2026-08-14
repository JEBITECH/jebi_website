import JsonLd from "./JsonLd";

export default function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "JebiTech Solutions Pvt. Ltd.",
        url: "https://jebitech.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "12, Sweet Watervilla, Amanora",
          addressLocality: "Pune",
          addressCountry: "India",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "18.5204",
          longitude: "73.9373",
        },
      }}
    />
  );
}
