import './StatCard.css';

const StatCard = ({ label, value }) => (
  <div className="stat-card">
    <p>{label}</p>
    <h2>{value}</h2>
  </div>
);

export default StatCard;
