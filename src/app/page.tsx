import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import GitHubStats from "@/components/GithubStats";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <Header />
      <div id="about">
        <AboutSection />
      </div>
      <div id="work">
        <WorkSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <div id="github" className="mt-2 p-16">
        <GitHubStats />
      </div>
      {/* Footer */}
    </div>
  );
}
