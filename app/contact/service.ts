import { ContactForm } from "@/types";

export class ContactService {
  async submitContactForm(
    data: ContactForm,
  ): Promise<{ success: boolean; message: string }> {
    try {
      // In a real implementation, this would send to an API endpoint
      console.log("Contact form submitted:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      };
    } catch (error) {
      return {
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again.",
      };
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateForm(data: ContactForm): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.name.trim()) {
      errors.push("Name is required");
    }

    if (!data.email.trim()) {
      errors.push("Email is required");
    } else if (!this.validateEmail(data.email)) {
      errors.push("Please enter a valid email address");
    }

    if (!data.subject.trim()) {
      errors.push("Subject is required");
    }

    if (!data.message.trim()) {
      errors.push("Message is required");
    } else if (data.message.trim().length < 10) {
      errors.push("Message must be at least 10 characters long");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

export const contactService = new ContactService();
