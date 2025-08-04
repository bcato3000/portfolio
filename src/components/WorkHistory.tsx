import React from 'react';
import { workHistory } from '../data/workHistoryData';

interface WorkEntry {
  date: string;
  company: string;
  companyUrl: string;
  location: string;
  title: string;
  description: string;
  formerCareer?: boolean;
}

const WorkHistory: React.FC = () => {
  return (
    <section id="history">
      <h2>Work History</h2>
      <div className="work-history">
        {workHistory.map((job: WorkEntry, index: number) => {
          const isFormer = job.formerCareer;
          return (
            <React.Fragment key={index}>
              <div className={`date${isFormer ? ' former-career' : ''}`}>
                <h3>{job.date}</h3>
              </div>
              <div className={`description${isFormer ? ' former-career' : ''}`}>
                <h3>
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <h4>{job.location}<br />{job.title}</h4>
                <p>{job.description}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default WorkHistory;
