"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="large"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Experience", id: "#experience" },
        { name: "Menu", id: "#menu" },
        { name: "Gallery", id: "#gallery" },
      ]}
      brandName="AURA ROOFTOP"
    />
  </div>

  <div id="hero" data-section="hero" className="pt-24 md:pt-32">
      <HeroBillboardCarousel
      background={{ variant: "plain" }}
      title="Karachi’s Finest Rooftop Experience"
      description="Where culinary artistry meets panoramic city views. Indulge in an elevated dining experience crafted for the refined palate."
      buttons={[
        { text: "Order Now", href: "#menu" },
        { text: "Reserve Your Experience", href: "#contact" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/western-woman-having-teatime-cafe-udaipur_53876-65359.jpg", imageAlt: "Luxury Rooftop Ambiance" },
        { imageSrc: "http://img.b2bpic.net/free-photo/wedding-reception-room-with-decorated-table-setting-sea-view-through-window_637285-984.jpg", imageAlt: "City Lights View" },
        { imageSrc: "http://img.b2bpic.net/free-photo/spoon-fork-with-red-flower-napkin_23-2147990899.jpg", imageAlt: "Intimate Dining Setup" },
        { imageSrc: "http://img.b2bpic.net/free-photo/view-chef-working-kitchen_23-2149727989.jpg", imageAlt: "Culinary Art" },
        { imageSrc: "http://img.b2bpic.net/free-photo/bartender-making-refreshing-cocktail_23-2149093632.jpg", imageAlt: "Signature Bar" },
        { imageSrc: "http://img.b2bpic.net/free-photo/dining-table-with-chairs-tableware_140725-7823.jpg", imageAlt: "Luxury Interior" },
      ]}
    />
  </div>

  <div id="experience" data-section="experience">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Chef-Crafted Menu", description: "Precision-engineered dishes using globally sourced ingredients.", imageSrc: "http://img.b2bpic.net/free-photo/professional-chef-preparing-food-kitchen_23-2149728015.jpg", imageAlt: "Fine Dining Kitchen" },
        { title: "Panoramic Rooftop", description: "Stunning views of the DHA skyline paired with curated atmosphere.", imageSrc: "http://img.b2bpic.net/free-photo/lamb-bone-covered-with-dough-finely-cooked_114579-2429.jpg", imageAlt: "Plated Perfection" },
        { title: "Refined Hospitality", description: "Service designed to ensure a seamless, luxurious evening.", imageSrc: "http://img.b2bpic.net/free-photo/luxury-meeting-dining-room-table-multiple-chairs_114579-2067.jpg", imageAlt: "Interior Ambiance" },
      ]}
      title="A Curated Culinary Journey"
      description="Discover perfection in every detail, from hand-selected ingredients to our signature rooftop ambiance."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Truffle Infused Steak", price: "PKR 5,500", imageSrc: "http://img.b2bpic.net/free-photo/beverage-topped-with-fried-orange-slice_141793-1126.jpg", imageAlt: "Truffle Steak" },
        { id: "2", name: "Wagyu Signature Burger", price: "PKR 3,200", imageSrc: "http://img.b2bpic.net/free-photo/big-hamburger_53876-31076.jpg", imageAlt: "Wagyu Burger" },
        { id: "3", name: "Gold Leaf Chocolate Lava", price: "PKR 1,800", imageSrc: "http://img.b2bpic.net/free-photo/delicious-ice-cream-winter-time_23-2149618913.jpg", imageAlt: "Luxury Dessert" },
        { id: "4", name: "Hibiscus Infusion Mocktail", price: "PKR 1,200", imageSrc: "http://img.b2bpic.net/free-photo/still-life-sotol-drink-with-ingredients_52683-148472.jpg", imageAlt: "Signature Mocktail" },
        { id: "5", name: "Seared Scallops Trio", price: "PKR 2,500", imageSrc: "http://img.b2bpic.net/free-photo/front-view-cooked-squashes-designed-meal-inside-plate-dark-grey-space_140725-83767.jpg", imageAlt: "Gourmet Appetizer" },
        { id: "6", name: "Artisan Roasted Espresso", price: "PKR 850", imageSrc: "http://img.b2bpic.net/free-photo/coffee-beans-black-background-with-pralines_114579-16619.jpg", imageAlt: "Artisan Coffee" },
      ]}
      title="Best Sellers & Signature Menu"
      description="Explore our chef’s most revered creations."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Karachi’s Destination for Luxury"
      description="At Aura, we believe dining is an extension of lifestyle. From our DHA/Clifton location to our meticulously balanced menu, we deliver a cohesive experience that elevates the Karachi culinary scene."
      buttons={[{ text: "Order Now", href: "#menu" }]}
      bulletPoints={[
        { title: "Impeccable Quality", description: "Farm-to-table freshness redefined." },
        { title: "Modern Atmosphere", description: "Designed for intimate moments and professional engagement." },
        { title: "Seamless Ordering", description: "Effortless process for direct online orders." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-safari-party-with-golden-cutlery_23-2149707848.jpg"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Mansoor", role: "Food Critic", testimonial: "An unparalleled rooftop experience in DHA. The attention to detail is remarkable.", imageSrc: "http://img.b2bpic.net/free-photo/happy-redhead-waitress-serving-customers-restaurant-bringing-food-their-table_637285-1714.jpg" },
        { id: "2", name: "Ali Khan", role: "Architect", testimonial: "The atmosphere is unmatched in Karachi. Modern, sleek, and perfect for meetings.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-transgender-wearing-shells-necklace_23-2149105401.jpg" },
        { id: "3", name: "Zoya Ahmed", role: "Entrepreneur", testimonial: "Seamless booking and the finest steak I've had in the city. Truly premium.", imageSrc: "http://img.b2bpic.net/free-photo/couples-celebrating-birthday_23-2149891048.jpg" },
        { id: "4", name: "Omar Farooq", role: "Local Resident", testimonial: "My go-to place for date nights. Aura Rooftop redefined luxury dining.", imageSrc: "http://img.b2bpic.net/free-photo/friends-talking-by-lunch_1098-14622.jpg" },
        { id: "5", name: "Sara H.", role: "Socialite", testimonial: "The desserts are pieces of art. Truly a world-class experience.", imageSrc: "http://img.b2bpic.net/free-photo/woman-kissing-man-forehead-restaurant_23-2148014524.jpg" },
      ]}
      title="Voices of the Experience"
      description="Hear what our patrons have to say about their journey with us."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "City Skyline", description: "Night view of Clifton", imageSrc: "http://img.b2bpic.net/free-photo/tower-landmarks-famous-skyscrapers-pearl_1417-298.jpg", imageAlt: "City View" },
        { title: "Tables", description: "Elegant setting", imageSrc: "http://img.b2bpic.net/free-photo/valentine-s-day-still-life-decorations_23-2151934469.jpg", imageAlt: "Table" },
        { title: "Art", description: "Fine dining plates", imageSrc: "http://img.b2bpic.net/free-photo/top-view-tasty-dinner-with-meat-potatoes-served-with-green-black-plate-pepper-garlic-oil-bottle-cutlery-set_179666-19991.jpg", imageAlt: "Food Art" },
      ]}
      title="A Glimpse of Aura"
      description="Visualizing your next evening out."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "Where are you located?", content: "Located centrally in the Clifton/DHA area with valet parking available for your convenience." },
        { id: "2", title: "What are your operating hours?", content: "We welcome you daily from 6:00 PM until 1:00 AM." },
        { id: "3", title: "Do you offer delivery?", content: "Yes, premium delivery service is available for our curated selection." },
        { id: "4", title: "Is parking available?", content: "Valet services are provided on-site to ensure your arrival is as smooth as your experience." },
      ]}
      title="Your Visit Questions"
      description="Find essential information for your next luxury experience at Aura."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      text="Ready to experience Aura Rooftop? Reserve your table now or place a delivery order for an elevated evening."
      buttons={[
        { text: "Order Now", href: "#menu" },
        { text: "Reserve Your Experience", href: "#" },
      ]}
    />
  </div>

  <div id="map" data-section="map">
      <ContactText
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      text="Find us in the heart of Clifton/DHA. Click below to open directions."
      buttons={[{ text: "View on Google Maps", href: "https://maps.google.com" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Location", items: [{ label: "DHA Phase 6, Clifton, Karachi" }] },
        { title: "Contact", items: [{ label: "+92 (21) 123-4567", href: "tel:+92211234567" }, { label: "info@aurarooftop.pk", href: "mailto:info@aurarooftop.pk" }] },
        { title: "Socials", items: [{ label: "Instagram", href: "#" }, { label: "WhatsApp", href: "#" }] },
      ]}
      bottomLeftText="© 2024 Aura Rooftop. All rights reserved."
      bottomRightText="Crafted with Luxury in Mind"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}