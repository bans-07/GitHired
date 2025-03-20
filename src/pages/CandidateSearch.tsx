// import { useState, useEffect } from 'react';
// import { searchGithub, searchGithubUser } from '../api/API';

// const CandidateSearch = () => {
//   return <h1>CandidateSearch</h1>;
// };

// export default CandidateSearch;

import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCandidate = async () => {
    setLoading(true);
    const users = await searchGithub();
    if (users.length > 0) {
      const user = await searchGithubUser(users[0].login);
      setCandidate(user);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (!candidate) return <h2>No more candidates available</h2>;

  return (
    <div>
      <h1>{candidate.name || candidate.login}</h1>
      <img src={candidate.avatar_url} alt="Avatar" width="100" />
      <p>Location: {candidate.location || 'N/A'}</p>
      <p>Company: {candidate.company || 'N/A'}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>
      <br />
      <button onClick={fetchCandidate}>Reject (-)</button>
    </div>
  );
};



export default CandidateSearch;
