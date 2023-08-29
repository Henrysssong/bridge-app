import { useState } from 'react';

export default function Applicant() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we'll send the data to the backend.
    // For now, we'll just log it.
    console.log({ name, description, email, resume, company });
  };

  return (
    <div>
      <h1>Applicant Portal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Resume (URL):</label>
          <input type="text" value={resume} onChange={(e) => setResume(e.target.value)} required />
        </div>
        <div>
          <label>Company:</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
