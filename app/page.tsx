import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProfileHeaderSection from "./components/ProfileHeaderSection";
import ProfileSidebar from "./components/ProfileSidebar";
import ProjectsSection from "./components/ProjectsSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import StackSection from "./components/StackSection";
import { profileData } from "./data/profile";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-slate-100">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -right-16 h-72 w-72 rounded-full bg-gradient-to-br from-slate-200/20 via-slate-300/10 to-emerald-300/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-slate-300/15 via-emerald-200/20 to-slate-100/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>

      <SiteHeader name={profileData.name} />

      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:gap-12 lg:px-8 lg:py-16">
        <ProfileSidebar
          name={profileData.name}
          role={profileData.role}
          location={profileData.location}
          availability={profileData.availability}
          summary={profileData.summary}
          email={profileData.contactEmail}
          socialLinks={profileData.socialLinks}
        />
        <div className="space-y-12">
          <ProfileHeaderSection
            status={profileData.status}
            headlineLead={profileData.headlineLead}
            headlineAccent={profileData.headlineAccent}
            intro={profileData.intro}
            highlights={profileData.highlights}
            stats={profileData.stats}
          />
          <AboutSection insights={profileData.insights} />
          <StackSection stack={profileData.stack} />
          <ExperienceSection timeline={profileData.timeline} />
          <ProjectsSection
            projects={profileData.projects}
            categories={profileData.projectCategories}
          />
          <ContactSection
            email={profileData.contactEmail}
            linkedInLabel={profileData.linkedInLabel}
            linkedInUrl={profileData.linkedInUrl}
          />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
