import React from "react";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import CardAgents from "@components/fragments/CardAgents";

const AgentsSection = () => {
  return (
    <div className="my-80">
      <div className="justify-between flex">
        <div className="text-heading-2 font-syne">Meet Our Agents</div>
        <div className="text-lg-bold flex gap-8">
          Browse All Agents
          <ArrowRight className="w-24 h-24" />
        </div>
      </div>
      <div className="pt-64 grid grid-cols-3 gap-32 w-full">
        <CardAgents />
      </div>
    </div>
  );
};

export default AgentsSection;
