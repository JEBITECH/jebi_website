import JsonLd from "./JsonLd";

interface ProductSchemaProps {
  name: string;
  description: string;
}

export default function ProductSchema({ name, description }: ProductSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        brand: {
          "@type": "Organization",
          name: "JebiTech",
        },
      }}
    />
  );
}
