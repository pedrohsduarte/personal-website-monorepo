import React from "react";
import Image from "next/image";

interface Experience {
  startDate: string;
  endDate: string;
  companyName: string;
  jobRole: string;
  description: string;
  logo: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6 flex flex-row  ">
          <div className="flex flex-col items-center">
            {/* Logo */}
            <div
              className="relative flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-zinc-800
           border-2 border-gray-100 z-10 flex items-center justify-center overflow-hidden"
            >
              <div className="relative w-6 h-6">
                {" "}
                {/* Smaller container for the image */}
                <Image
                  src={exp.logo}
                  alt={`${exp.companyName} logo`}
                  fill
                  sizes="2rem"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div
                className="w-0.5 bg-gray-100 dark:bg-gray-800"
                style={{ height: "calc(100%)" }}
              ></div>
            )}
          </div>
          {/* Content */}
          <div className="flex-grow text-left pr-4">
            <div className="text-sm text-gray-500 uppercase">
              {exp.startDate} - {exp.endDate}
            </div>
            <h3 className="text-xl font-bold">{exp.jobRole}</h3>
            <h4 className="text-lg font-semibold text-gray-600">
              {exp.companyName}
            </h4>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
