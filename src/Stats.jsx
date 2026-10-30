import { useState, useEffect, useRef } from "react";

function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, experience: 0, technologies: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const stats = [
      { label: "Projects Completed", value: 4, suffix: "+" },
      { label: "Years Experience", value: 2, suffix: "+" },
      { label: "Technologies", value: 12, suffix: "" }
    ];

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep <= steps) {
        const progress = currentStep / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCounts({
          projects: Math.floor(stats[0].value * easeOutQuart),
          experience: Math.floor(stats[1].value * easeOutQuart),
          technologies: Math.floor(stats[2].value * easeOutQuart)
        });

        currentStep++;
      } else {
        setCounts({
          projects: stats[0].value,
          experience: stats[1].value,
          technologies: stats[2].value
        });
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    { label: "Projects Completed", value: counts.projects, suffix: "+" },
    { label: "Years Experience", value: counts.experience, suffix: "+" },
    { label: "Technologies", value: counts.technologies, suffix: "" }
  ];

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">
              {stat.value}{stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
