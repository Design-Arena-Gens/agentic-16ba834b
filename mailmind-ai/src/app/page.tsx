import { ArchitectureLayers } from "@/components/ArchitectureLayers";
import { DataFlowMap } from "@/components/DataFlowMap";
import { DeploymentPlan } from "@/components/DeploymentPlan";
import { ExtensionModules } from "@/components/ExtensionModules";
import { Hero } from "@/components/Hero";
import { IntelligencePipeline } from "@/components/IntelligencePipeline";
import { IntegrationMatrix } from "@/components/IntegrationMatrix";
import { NextSteps } from "@/components/NextSteps";
import { OperationalView } from "@/components/OperationalView";
import { Roadmap } from "@/components/Roadmap";
import { Section } from "@/components/Section";
import { SecurityChecklist } from "@/components/SecurityChecklist";
import { TechStack } from "@/components/TechStack";
import { UserJourneys } from "@/components/UserJourneys";
import { WorkflowTimeline } from "@/components/WorkflowTimeline";

export default function Page() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
      <Hero />

      <Section
        id="problem"
        eyebrow="Opportunity"
        title="Why MailMind AI"
        description="Knowledge workers drown in time-sensitive email threads. MailMind AI turns Gmail and Outlook inbox noise into proactive scheduling intelligence that keeps commitments on track."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Inbox Overload
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Detect meetings, deadlines, and RSVP asks hidden across sprawling threads without adding manual triage effort.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Scheduling Chaos
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Suggest reminders and calendar blocks that respect existing workload, timezone, and personal focus windows.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">
              Privacy First
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Process data locally whenever possible, delivering enterprise-grade controls for regulated environments.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="solution-architecture"
        eyebrow="High-Level Blueprint"
        title="Architecture Layers"
        description="Modular extension stack separates inbox instrumentation, AI insight generation, and action delivery for resilient cross-provider coverage."
      >
        <ArchitectureLayers />
      </Section>

      <Section
        id="modules"
        eyebrow="Extension Surface"
        title="Chrome Extension Modules"
        description="Manifest V3 foundation with dedicated content scripts and UI primitives tailored for Gmail and Outlook ecosystems."
      >
        <ExtensionModules />
      </Section>

      <Section
        id="workflow"
        eyebrow="User Journey"
        title="End-to-End Workflow"
        description="From DOM change detection to confirmed reminders, MailMind AI keeps the human in control while automating the heavy lifting."
      >
        <WorkflowTimeline />
      </Section>

      <Section
        id="data-flow"
        eyebrow="Data Movement"
        title="Data Flow & Messaging Contracts"
        description="Clear hand-offs ensure minimal privilege, tight latency, and observability at every hop."
      >
        <DataFlowMap />
      </Section>

      <Section
        id="intelligence-pipeline"
        eyebrow="AI Stack"
        title="Intelligence Pipeline"
        description="Hybrid AI approach blends deterministic parsing with explainable LLM insights to produce trustworthy scheduling suggestions."
      >
        <IntelligencePipeline />
      </Section>

      <Section
        id="integrations"
        eyebrow="Provider Support"
        title="Gmail & Outlook Integration Matrix"
        description="Capability-level view across the two ecosystems to guarantee parity and highlight provider-specific levers."
      >
        <IntegrationMatrix />
      </Section>

      <Section
        id="security"
        eyebrow="Trust"
        title="Security & Privacy Guardrails"
        description="Guardrail blueprint to meet enterprise security expectations from day one."
      >
        <SecurityChecklist />
      </Section>

      <Section
        id="tech-stack"
        eyebrow="Engineering Foundations"
        title="Core Technology Stack"
        description="Opinionated stack optimized for extension ergonomics, AI orchestration, and cross-suite scheduling integrations."
      >
        <TechStack />
      </Section>

      <Section
        id="operations"
        eyebrow="Operational Excellence"
        title="Operational Monitoring Targets"
        description="KPIs that keep MailMind AI reliable, relevant, and trustworthy in production."
      >
        <OperationalView />
      </Section>

      <Section
        id="journeys"
        eyebrow="Personas"
        title="Representative User Journeys"
        description="Anchor the experience around high-value personas to guide prioritization and UX decisions."
      >
        <UserJourneys />
      </Section>

      <Section
        id="deployment"
        eyebrow="Go-To-Market"
        title="Deployment & Release Strategy"
        description="Road-tested rollout path balancing rapid iteration with governance requirements."
      >
        <DeploymentPlan />
      </Section>

      <Section
        id="roadmap"
        eyebrow="Trajectory"
        title="Roadmap Phases"
        description="Sequencing investments to deliver value fast while building toward enterprise depth."
      >
        <Roadmap />
      </Section>

      <NextSteps />
    </main>
  );
}
