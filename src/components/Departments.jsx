import './Departments.css';

const departments = [
  "Computer Science", "Electronics & Communication", "Electrical & Electronics",
  "Mechanical", "Civil", "Computer Applications", "Mathematics", "Science & Humanities"
];

const Departments = () => (
  <div className="departments">
    <h1>DEPARTMENTS</h1>
    <div className="dept-grid">
      {departments.map((dept, i) => (
        <button key={i}>{dept}</button>
      ))}
    </div>
  </div>
);

export default Departments;
