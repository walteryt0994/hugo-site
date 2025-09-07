"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

type SectionProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

function Section({ title, icon, children }: SectionProps) {
  return (
    <Card className="mb-6 shadow-md">
      <CardContent>
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          {icon} {title}
        </h2>
        {children}
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const [lang, setLang] = useState<"en" | "zh">("en");

  const DATA = {
    name: "Jiayi (Hugo) Yang",
    bio: {
      en: "Graduate student in Information Systems at Northeastern University. Background in Electrical Engineering, robotics entrepreneurship, and data-driven projects. Passionate about AI, data science, and building impactful solutions.",
      zh: "东北大学信息系统专业研究生。本科电气工程背景，参与过机器人创业与数据项目，热衷于人工智能与数据科学并致力于打造有影响力的解决方案。",
    },
    resume: "/Resume.pdf",
    contact: {
      email: "yang.jiay@northeastern.edu",
      phone: "+1 (857) 315-xxxx",
      github: "https://github.com/walteryt0994",
      linkedin: "https://www.linkedin.com/in/jiayi-yang/",
    },
    experience: [
      {
        en: "Co-founder of logistics robotics startup, led technical development.",
        zh: "物流机器人创业公司联合创始人，负责技术研发。",
      },
      {
        en: "Research on AI handwriting recognition and safety inspection systems.",
        zh: "人工智能手写识别与安全检测系统研究。",
      },
      {
        en: "Internship in data analysis and electrical engineering projects.",
        zh: "数据分析与电气工程实习经历。",
      },
    ],
    projects: [
      {
        en: "Developed handwriting recognition system with deep learning.",
        zh: "开发基于深度学习的手写识别系统。",
      },
      {
        en: "Built data pipelines and visualization dashboards for analytics.",
        zh: "搭建数据管道与可视化分析仪表盘。",
      },
    ],
    skills: [
      "Java",
      "Python",
      "R",
      "SQL",
      "Data Analysis",
      "Machine Learning",
      "Robotics",
      "Photography",
    ],
  };

  return (
    <main className="container mx-auto p-4 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{DATA.name}</h1>
        <div className="flex gap-2">
          <Button onClick={() => setLang(lang === "en" ? "zh" : "en")}>
            {lang === "en" ? "中文" : "EN"}
          </Button>
          <Button asChild variant="outline">
            <a href={DATA.resume} download>
              Download Résumé
            </a>
          </Button>
        </div>
      </div>

      <Section title={lang === "en" ? "About Me" : "关于我"}>
        <p>{DATA.bio[lang]}</p>
      </Section>

      <Section title={lang === "en" ? "Experience" : "经历"}>
        <ul className="list-disc ml-6">
          {DATA.experience.map((item, idx) => (
            <li key={idx}>{item[lang]}</li>
          ))}
        </ul>
      </Section>

      <Section title={lang === "en" ? "Projects" : "项目"}>
        <ul className="list-disc ml-6">
          {DATA.projects.map((item, idx) => (
            <li key={idx}>{item[lang]}</li>
          ))}
        </ul>
      </Section>

      <Section title={lang === "en" ? "Skills" : "技能"}>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 rounded-md text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section title={lang === "en" ? "Contact" : "联系方式"}>
        <div className="flex flex-col gap-2">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="flex items-center gap-2 text-blue-600"
          >
            <Mail size={16} /> {DATA.contact.email}
          </a>
          <a
            href={`tel:${DATA.contact.phone}`}
            className="flex items-center gap-2 text-blue-600"
          >
            <Phone size={16} /> {DATA.contact.phone}
          </a>
          <a
            href={DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </Section>
  

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 pb-12 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {DATA.name}. Built with 🍅 by Hugo.
      </footer>
    </main>
  );
}