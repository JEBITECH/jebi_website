// chatConfig.ts
export const pageContent: Record<string, { title: string; message: string; buttons: string[] }> = {
    "/": {
        title: "Welcome to Jebitech!",
        message: "I'm Sophia. Ready to automate your short-term rental business?",
        buttons: ["Get Started", "View Demo"],
    },
    "/products": {
        title: "Explore our Products",
        message: "Interested in our Channel Manager or Unified Inbox?",
        buttons: ["Channel Manager", "Pricing"],
    },
    "/services": {
        title: "Our Professional Services",
        message: "Need help managing your listings? Our experts are here.",
        buttons: ["Consulting", "Setup Help"],
    },
};