import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProfileHeaderSection from "./components/ProfileHeaderSection";
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

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-12">
          <div className="w-full">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-0">
              <ProfileHeaderSection
                name={profileData.name}
                role={profileData.role}
                location={profileData.location}
                avatarSrc={profileData.avatarSrc}
                avatarAlt={profileData.avatarAlt}
                status={profileData.status}
                headlineLead={profileData.headlineLead}
                headlineAccent={profileData.headlineAccent}
                intro={profileData.intro}
                highlights={profileData.highlights}
                stats={profileData.stats}
              />
            </div>
          </div>
          <AboutSection
            title={profileData.aboutTitle}
            body={profileData.aboutBody}
            mission={profileData.mission}
            focus={profileData.aboutFocus}
          />
          <StackSection stackGroups={profileData.stackGroups} />
          <ExperienceSection experience={profileData.experience} />
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
