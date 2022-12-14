import "./sidebar.scss";

const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">AgeBoard</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Civilizations</span>
          </li>
          <li>
            <span>Maps</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;
