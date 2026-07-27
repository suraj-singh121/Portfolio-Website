import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SQL Trainer & Data Support</h4>
                <h5>Zylentrix</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Delivered SQL training covering joins, aggregations, filtering, and database concepts.
              Assisted teams with writing optimized queries, troubleshooting database issues, creating dashboards, and performing data analysis to generate operational insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>EDUCATION</h3>
            </div>
            <p>
              Undergraduate degree in Computer Science and Engineering at LPU Punjab. Completed XII from St. Joseph International School (Kota) and X from Army Public School Kirkee (Pune).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Achievements</h4>
                <h5>Global Certs & Sports</h5>
              </div>
              <h3>HONORS</h3>
            </div>
            <p>
              • Theory of Computation (Coursera), DSA in C++ (GeeksforGeeks), Python Foundations (NxtWave)<br />
              • Solved 200+ LeetCode problems & built 100+ web apps<br />
              • Represented Telangana State in National Football Championship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
