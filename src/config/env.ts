export const ENV = {
  appName: import.meta.env.VITE_APP_NAME,
  appUrl: import.meta.env.VITE_APP_URL,
  apiUrl: import.meta.env.VITE_API_BASE_URL,
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL,

  features: {
    destinations: import.meta.env.VITE_ENABLE_DESTINATIONS === "true",
    contactForm: import.meta.env.VITE_ENABLE_CONTACT_FORM === "true"
  }
}
