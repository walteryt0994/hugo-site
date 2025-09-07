"use client";

import React, { useMemo, useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Camera,
  Database,
  Cpu,
  Brain,
  Rocket,
  Award,
  GraduationCap,
  Phone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- Single-file, ready-to-deploy personal site for Jiayi (Hugo) Yang ---
// Styling: Tailwind + shadcn/ui. Icons: lucide-react. No external CSS required.
// How to use: Drop into a Next.js/React project. This file default-exports a component the canvas can preview.
// You can customize the DATA object below to update content quickly.

const DATA = {
  name: "Hugo Yang",
  headlineEN: "MS in Information Systems @ Northeastern | Robotics • AI • Data",
  headlineZH: "东北大学信息系统硕士｜机器人 • 人工智能 • 数据",
  location: "Boston, MA, USA",
  email: "hugoyang9117@gmail.com",
  phone: "+1 (857) 315-****",
  links: {
    github: "#",
    linkedin: "#",
    resume: "/Resume.pdf", // 放置于 public/Resume.pdf
  },
  aboutEN:
    "Hugo is an NEU Information Systems graduate student with a B.Eng. in Electrical Engineering from Tiangong University. He has hands-on experience across robotics (ROS), ML (TensorFlow/Keras), and data tooling (Python/SQL). Hugo previously co-founded a logistics robotics project and contributed to award-winning drone and wireless charging systems.",
  aboutZH:
    "Hugo 现为东北大学信息系统硕士，本科就读于天津工业大学电气工程及其自动化。擅长机器人（ROS）、机器学习（TensorFlow/Keras）与数据工具链（Python/SQL）。曾联合发起物流机器人项目，并参与过获奖的无人机与无线充电系统研发。",
  sections: {
    experience: [
      {
        org: "State Grid Xiongan New Area",
        role: "Safety Inspector Intern",
        period: "07/2023 – 08/2023",
        bullets: [
          "Monitored safety compliance on power construction sites and standardized documentation",
        ],
      },
      {
        org: "Chinese Academy of Sciences",
        role: "Research Assistant (MNIST)",
        period: "06/2023 – 07/2023",
        bullets: [
          "Trained handwriting recognition models; built simple data pipelines",
        ],
      },
      {
        org: "Internet King USA (Remote)",
        role: "Data Analyst Intern",
        period: "08/2021 – 04/2022",
        bullets: [
          "Built customer analysis and proposed personalized plans; collaborated across time zones",
        ],
      },
      {
        org: "Kaiwu Chuangxing (Startup)",
        role: "Founder & R&D Engineer",
        period: "08/2022 – 08/2023",
        bullets: [
          "Led logistics robot R&D (hardware + control); managed timelines and prototyping",
        ],
      },
    ],
    projects: [
      {
        name: "RoboMaster Drone",
        tag: "Computer Vision / Control",
        blurb:
          "Designed and built a physical drone; implemented algorithms for field tasks — Third Prize (RMU)",
      },
      {
        name: "Wireless Dynamic Charging for Robots",
        tag: "Power / Systems",
        blurb:
          "Wireless dynamic charging for cluster warehousing robots — Bronze Award (Internet+)",
      },
      {
        name: "MOSS: ROS-based Intelligent Material Robot",
        tag: "ROS / LiDAR / Planning",
        blurb:
          "Optimized mechanics and closed-loop control with LiDAR-based path planning; supported patent work",
      },
    ],
    skills: [
      { group: "Programming", items: ["Python", "C/C++", "MATLAB/Simulink", "SQL"] },
      { group: "Robotics & Embedded", items: ["ROS", "STM32/ARM", "Keil", "CubeMX"] },
      { group: "Machine Learning", items: ["TensorFlow/Keras", "(Basic) PyTorch"] },
      { group: "Data & Viz", items: ["NumPy", "pandas", "Matplotlib", "Seaborn"] },
      { group: "Simulation", items: ["ANSYS HFSS"] },
      { group: "Languages", items: ["Mandarin (Native)", "English (Fluent)"] },
    ],
    awards: [
      "RoboMaster University Series – Third Prize",
      "China Internet+ Innovation Competition – Bronze Award",
      "Utility Model Patent – Logistics Transport Vehicle with Lens Protection",
    ],
  },
};

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-3 py-1 rounded-full border text-sm">{children}</span>;
}

function Section({ title, icon, children }: any) {
  return (
    <section className="max-w-5xl mx-auto mb-10">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <Card className="shadow-sm">
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </section>
  );
}

export default function PersonalSite() {
  const [lang, setLang] = useState<"EN" | "ZH">("EN");

  const headline = useMemo(
    () => (lang === "EN" ? DATA.headlineEN : DATA.headlineZH),
    [lang]
  );
  const about = useMemo(
    () => (lang === "EN" ? DATA.aboutEN : DATA.aboutZH),
    [lang]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header / Hero */}
      <header className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{DATA.name}</h1>
            <p className="mt-2 text-slate-600">{headline}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-700">
              <span className="inline-flex items-center gap-1">
                <MapPin size={16} />
                {DATA.location}
              </span>
              <a
                className="inline-flex items-center gap-1 hover:underline"
                href={`mailto:${DATA.email}`}
              >
                <Mail size={16} />
                {DATA.email}
              </a>
              <span className="inline-flex items-center gap-1">
                <Phone size={16} />
                {DATA.phone}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="rounded-2xl"
              onClick={() => setLang(lang === "EN" ? "ZH" : "EN")}
            >
              {lang === "EN" ? "中文" : "EN"}
            </Button>
            <a href={DATA.links.resume} target="_blank" rel="noreferrer">
              <Button className="rounded-2xl">Download Résumé</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Quick badges */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Badge>
            <GraduationCap className="inline mr-1" size={16} /> NEU MSIS
          </Badge>
          <Badge>
            <Cpu className="inline mr-1" size={16} /> Robotics / ROS
          </Badge>
          <Badge>
            <Database className="inline mr-1" size={16} /> Python / SQL
          </Badge>
          <Badge>
            <Brain className="inline mr-1" size={16} /> ML: TF/Keras
          </Badge>
        </div>
      </div>

      {/* About */}
      <Section
        title={lang === "EN" ? "About" : "关于我"}
        icon={<Camera size={18} className="text-slate-700" />}
      >
        <p className="text-slate-700 leading-7">{about}</p>
      </Section>

      {/* Experience */}
      <Section
        title={lang === "EN" ? "Experience" : "经历"}
        icon={<Rocket size={18} className="text-slate-700" />}
      >
        <div className="space-y-6">
          {DATA.sections.experience.map((exp, idx) => (
            <div key={idx} className="grid sm:grid-cols-6 gap-2">
              <div className="sm:col-span-2">
                <p className="font-medium">{exp.org}</p>
                <p className="text-xs text-slate-500">{exp.period}</p>
              </div>
              <div className="sm:col-span-4">
                <p className="font-medium">{exp.role}</p>
                <ul className="list-disc pl-4 text-slate-700 text-sm">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section
        title={lang === "EN" ? "Projects" : "项目"}
        icon={<Award size={18} className="text-slate-700" />}
      >
        <div className="grid md:grid-cols-3 gap-4">
          {DATA.sections.projects.map((p, i) => (
            <Card key={i} className="border rounded-2xl">
              <CardContent className="p-4">
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-slate-500 mt-1">{p.tag}</p>
                <p className="text-sm text-slate-700 mt-2">{p.blurb}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section
        title={lang === "EN" ? "Skills" : "技能"}
        icon={<Cpu size={18} className="text-slate-700" />}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {DATA.sections.skills.map((s, i) => (
            <div key={i}>
              <p className="font-medium mb-2">{s.group}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 rounded-xl bg-slate-100 text-slate-700 text-sm"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section
        title={lang === "EN" ? "Contact" : "联系"}
        icon={<Mail size={18} className="text-slate-700" />}
      >
        <div className="flex flex-wrap items-center gap-3 text-slate-700">
          <a
            className="inline-flex items-center gap-2 hover:underline"
            href={`mailto:${DATA.email}`}
          >
            <Mail size={16} /> {DATA.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <Phone size={16} /> {DATA.phone}
          </span>
          <a
            className="inline-flex items-center gap-2 hover:underline"
            href={DATA.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            className="inline-flex items-center gap-2 hover:underline"
            href={DATA.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 pb-12 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {DATA.name}. Built with 🍅 by Hugo.
      </footer>
    </div>
  );
}