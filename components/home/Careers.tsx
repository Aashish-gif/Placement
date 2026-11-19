'use client';

import { Building2 } from 'lucide-react';

const COMPANIES = [
  'Google', 'Microsoft', 'Amazon', 'Apple', 'IBM', 'Meta',
  'Netflix', 'Salesforce', 'Oracle', 'Adobe', 'Intel', 'Deloitte',
];

const CAREER_GROUPS = [
  {
    title: 'Engineering',
    emoji: '⚙️',
    roles: ['Data Engineer', 'Cloud Engineer', 'DevOps Engineer', 'Full Stack Developer', 'Civil Engineer', 'Mechanical Engineer'],
  },
  {
    title: 'Business & Finance',
    emoji: '💼',
    roles: ['Business Analyst', 'Financial Analyst', 'Revenue Cycle Analyst', 'Risk & Policy Analyst', 'Accounts Manager', 'Bookkeeper'],
  },
  {
    title: 'Sales & Customer Success',
    emoji: '🤝',
    roles: ['Inside Sales Representative', 'Business Development Executive', 'Account Manager', 'Client Relationship Manager', 'Customer Success Manager', 'Sales Operations Analyst'],
  },
  {
    title: 'Healthcare & Admin',
    emoji: '🏥',
    roles: ['Patient Care Coordinator', 'Healthcare Data Analyst', 'Medical Coder', 'Medical Biller', 'HR Admin', 'Administrative Assistant'],
  },
  {
    title: 'Operations & Supply Chain',
    emoji: '📦',
    roles: ['Supply Chain Analyst', 'Inventory Planner', 'Procurement Specialist', 'Vendor Management Specialist', 'Operations Manager'],
  },
  {
    title: 'Data & Analytics',
    emoji: '📊',
    roles: ['Data Analyst', 'Business Intelligence Analyst', 'Quality Analyst', 'Clinical Documentation Specialist', 'Technical Writer'],
  },
  {
    title: 'Support & Coordination',
    emoji: '🎧',
    roles: ['Customer Service Representative (CSR)', 'Medical Administrative Assistant', 'Payroll Specialist', 'Executive Assistant'],
  },
  {
    title: 'IT & Cloud',
    emoji: '☁️',
    roles: ['AWS Solutions Architect', 'Azure Administrator', 'Google Cloud Engineer', 'Cybersecurity Analyst', 'Database Administrator'],
  },
];

export default function Careers() {
  return (
    <section id="careers" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex -rotate-1 items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold shadow-[3px_3px_0_0_var(--ink)]">
            🎯 Career Opportunities
          </span>
          <h2 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-5xl">
            We prepare you for roles at{' '}
            <span className="doodle-circle text-primary">top companies</span>
          </h2>
          <p className="mt-4 text-ink/70">
            Our courses and services help you land roles at top companies like Google, Apple,
            Microsoft, Amazon, and more
          </p>
        </div>

        {/* company marquee */}
        <div className="marquee-paused relative mt-12 overflow-hidden rounded-2xl border-2 border-ink bg-white py-4 shadow-[5px_5px_0_0_var(--ink)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
          <div className="flex overflow-hidden">
            <div className="flex min-w-max animate-marquee-slow items-center gap-10 pr-10">
              {[...COMPANIES, ...COMPANIES].map((c, i) => (
                <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                  <span className="flex items-center gap-2 font-display text-lg font-bold text-ink/50 transition-colors hover:text-ink">
                    <Building2 className="h-4 w-4" />
                    {c}
                  </span>
                  <span className="text-primary">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAREER_GROUPS.map((g, i) => (
            <div
              key={g.title}
              style={{ animationDelay: `${i * 60}ms` }}
              className="reveal group rounded-3xl border-2 border-ink bg-white p-6 shadow-[5px_5px_0_0_var(--ink)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_0_var(--ink)]"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6">
                  {g.emoji}
                </span>
                <h3 className="font-display text-lg font-bold leading-tight">{g.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {g.roles.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2 text-sm text-ink/70 transition-colors hover:text-primary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
