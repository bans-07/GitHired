// const SavedCandidates = () => {
//   return (
//     <>
//       <h1>Potential Candidates</h1>
//     </>
//   );
// };

// export default SavedCandidates;

import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setCandidates(saved);
  }, []);

  if (candidates.length === 0) return <h2>No candidates saved</h2>;

  return (
    <div>
      <h1>Saved Candidates</h1>
      {candidates.map((c) => (
        <div key={c.login}>
          <h2>{c.name || c.login}</h2>
          <img src={c.avatar_url} alt="Avatar" width="100" />
          <p>Location: {c.location || 'N/A'}</p>
          <p>Company: {c.company || 'N/A'}</p>
          <a href={c.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidates;
