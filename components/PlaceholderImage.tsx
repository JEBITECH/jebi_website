'use client'

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
  bgColor?: string
  textColor?: string
}

export default function PlaceholderImage({
  width,
  height,
  text,
  className = '',
  bgColor = '#f3f4f6',
  textColor = '#6b7280'
}: PlaceholderImageProps) {
  const displayText = text || `${width}×${height}`
  
  return (
    <div
      className={`flex items-center justify-center text-sm font-medium ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      {displayText}
    </div>
  )
}

// Utility function to generate placeholder image URLs
export function getPlaceholderImage(
  width: number, 
  height: number, 
  text?: string,
  bgColor: string = 'f3f4f6',
  textColor: string = '6b7280'
): string {
  const displayText = text || `${width}x${height}`
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(displayText)}`
}

// Professional placeholder images for different use cases
export const placeholderImages = {
  // Team photos
  team: {
    ceo: 'https://via.placeholder.com/400x400/e5e7eb/374151?text=CEO',
    cto: 'https://via.placeholder.com/400x400/e5e7eb/374151?text=CTO',
    coo: 'https://via.placeholder.com/400x400/e5e7eb/374151?text=COO',
    developer: 'https://via.placeholder.com/400x400/e5e7eb/374151?text=Developer',
    designer: 'https://via.placeholder.com/400x400/e5e7eb/374151?text=Designer',
    qa: 'https://via.placeholder.com/400x400/e5e7eb/374151?text=QA+Engineer',
  },
  
  // Client logos
  clients: {
    hotel1: 'https://via.placeholder.com/200x100/ffffff/4A1A5C?text=Hotel+Chain',
    resort1: 'https://via.placeholder.com/200x100/ffffff/4A1A5C?text=Resort+Group',
    property1: 'https://via.placeholder.com/200x100/ffffff/4A1A5C?text=Property+Mgmt',
    vacation1: 'https://via.placeholder.com/200x100/ffffff/4A1A5C?text=Vacation+Rentals',
    boutique1: 'https://via.placeholder.com/200x100/ffffff/4A1A5C?text=Boutique+Hotels',
    enterprise1: 'https://via.placeholder.com/200x100/ffffff/4A1A5C?text=Enterprise',
  },
  
  // Case study images
  caseStudies: {
    hero1: 'https://via.placeholder.com/800x400/f3f4f6/6b7280?text=Luxury+Resort',
    hero2: 'https://via.placeholder.com/800x400/f3f4f6/6b7280?text=Hotel+Chain',
    hero3: 'https://via.placeholder.com/800x400/f3f4f6/6b7280?text=Property+Management',
    dashboard: 'https://via.placeholder.com/600x400/f8fafc/475569?text=Dashboard+UI',
    mobile: 'https://via.placeholder.com/300x600/f8fafc/475569?text=Mobile+App',
    analytics: 'https://via.placeholder.com/600x400/f8fafc/475569?text=Analytics',
  },
  
  // Product screenshots
  products: {
    bookingEngine: 'https://via.placeholder.com/600x400/fef3f2/FF6B35?text=Booking+Engine',
    virtueInspect: 'https://via.placeholder.com/600x400/fef3f2/FF6B35?text=Virtue+Inspect',
    virtueConnect: 'https://via.placeholder.com/600x400/fef3f2/FF6B35?text=Virtue+Connect',
    guestHandbook: 'https://via.placeholder.com/600x400/fef3f2/FF6B35?text=Guest+Handbook',
    dataAudit: 'https://via.placeholder.com/600x400/fef3f2/FF6B35?text=Data+Audit',
  },
  
  // Testimonial photos
  testimonials: {
    person1: 'https://via.placeholder.com/80x80/e5e7eb/374151?text=SM',
    person2: 'https://via.placeholder.com/80x80/e5e7eb/374151?text=JD',
    person3: 'https://via.placeholder.com/80x80/e5e7eb/374151?text=MR',
    person4: 'https://via.placeholder.com/80x80/e5e7eb/374151?text=AL',
  },
  
  // Hero and banner images
  hero: {
    main: 'https://via.placeholder.com/1200x600/f8fafc/64748b?text=JebiTech+Platform',
    about: 'https://via.placeholder.com/800x500/f8fafc/64748b?text=Our+Team',
    contact: 'https://via.placeholder.com/600x400/f8fafc/64748b?text=Get+in+Touch',
    services: 'https://via.placeholder.com/800x500/f8fafc/64748b?text=Our+Services',
  }
}