import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "Face Recognition System",
    category: "Computer Vision & ML",
    tools: "Python, OpenCV, ML (90%+ Accuracy)",
    image: "/images/placeholder.webp",
    link: "https://github.com/suraj-singh121/Face-Recognition-Code",
  },
  {
    title: "Heart Disease Prediction",
    category: "Healthcare Analytics",
    tools: "R, Machine Learning, Feature Importance",
    image: "/images/placeholder.webp",
    link: "https://github.com/suraj-singh121/Health-Data-Prediction-Dashboard",
  },
  {
    title: "Marketing Campaign Analytics",
    category: "BI & Data Analytics",
    tools: "SQL, Power BI, 40K+ Customer Records",
    image: "/images/placeholder.webp",
    link: "https://github.com/suraj-singh121",
  },
  {
    title: "Banking Customer Risk Analysis",
    category: "Data Science & Clustering",
    tools: "Python, SQL, Power BI, EDA",
    image: "/images/placeholder.webp",
    link: "https://github.com/suraj-singh121",
  },
  {
    title: "Task Management Web App",
    category: "Full Stack Development",
    tools: "Django, Python, REST APIs",
    image: "/images/placeholder.webp",
    link: "https://github.com/suraj-singh121",
  },
];

const Work = () => {
  const workSectionRef = useRef<HTMLDivElement>(null);
  const workFlexRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const workSection = workSectionRef.current;
      const workFlex = workFlexRef.current;
      if (!workSection || !workFlex) return;

      const getScrollAmount = () => {
        const amount = workFlex.scrollWidth - workSection.clientWidth;
        return Math.max(0, amount + 150);
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: workSection,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(workFlex, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);

      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    },
    { scope: workSectionRef }
  );

  return (
    <div className="work-section" id="work" ref={workSectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex" ref={workFlexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="disable"
                      >
                        {project.title}
                      </a>
                    </h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
