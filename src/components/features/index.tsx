import React from "react";
import { Card, CardTitle, CardDescription, CardSkeleton } from "./Card";
import WorkflowDropdown from "./skeleton/workflow-dropdown";
import AgentSchedule from "./skeleton/agent-schedule";
import DateScheduler from "./skeleton/date-scheduler";
import TaskMarquee from "./skeleton/task-marquee";
import AiSummary from "./skeleton/ai-summary";

const featureList = [
  {
    title: "Intelligent Task Organizer",
    description:
      "Automatically prioritizes your workload using advanced heuristics.",
    skeleton: <WorkflowDropdown />,
    className: "col-span-1",
  },
  {
    title: "Smooth Teamwork",
    description:
      "Collaborate seamlessly with automated scheduling and updates.",
    skeleton: <AgentSchedule />,
    className: "col-span-1",
  },
  {
    title: "Smart Workflow",
    description: "Automate recurring tasks with intelligent scheduling.",
    skeleton: <DateScheduler />,
    className: "col-span-1",
  },
  {
    title: "Advanced Reporting",
    description: "Deep dive into your metrics with AI-powered analysis.",
    skeleton: <TaskMarquee />,
    className: "col-span-2",
  },
  {
    title: "Meeting Summaries",
    description: "Instant AI-generated summaries of your team syncs.",
    skeleton: <AiSummary />,
    className: "col-span-1",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featureList.map((feature, index) => (
          <Card
            key={index}
            className={`hover:border-neutral-600/50 border-neutral-700/30 transition-all duration-300 ${feature.className}`}
          >
            <CardSkeleton className="h-48 md:h-60">
              {feature.skeleton}
            </CardSkeleton>
            <CardTitle className="text-lg">{feature.title}</CardTitle>
            <CardDescription className="leading-relaxed">
              {feature.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
};
