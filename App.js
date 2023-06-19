import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    image: '',
    gender: '',
    skills: [],
  });

  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevState) => ({
        ...prevState,
        skills: [...prevState.skills, value],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        skills: prevState.skills.filter((skill) => skill !== value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnrolledStudents((prevState) => [...prevState, formData]);
    setFormData({
      name: '',
      email: '',
      website: '',
      image: '',
      gender: '',
      skills: [],
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      website: '',
      image: '',
      gender: '',
      skills: [],
    });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Students Enrollment Form</h1>
      </nav>

      <div className="container">
        <div className="registration-form">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image Link</label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Skills</label>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    value="html"
                    checked={formData.skills.includes('html')}
                    onChange={handleSkillsChange}
                  />
                  HTML
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="css"
                    checked={formData.skills.includes('css')}
                    onChange={handleSkillsChange}
                  />
                  CSS
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="javascript"
                    checked={formData.skills.includes('javascript')}
                    onChange={handleSkillsChange}
                  />
                  JavaScript
                </label>
              </div>
            </div>
            <div className="form-buttons">
              <button type="submit">Enroll Student</button>
              <button type="button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>
        </div>

        <div className="enrolled-students">
          <h2>Enrolled Students:</h2>
          {enrolledStudents.map((student, index) => (
            <div className="student-card" key={index}>
              <div className="student-details">
                <img src={student.image} alt="Student" className="student-avatar" />
                <div>
                  <p>
                    <strong>Name:</strong> {student.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {student.email}
                  </p>
                  <p>
                    <strong>Website:</strong> {student.website}
                  </p>
                  <p>
                    <strong>Gender:</strong> {student.gender}
                  </p>
                  <p>
                    <strong>Skills:</strong> {student.skills.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;