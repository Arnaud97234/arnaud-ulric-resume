import "../../../styles/globals.css";
export default function AppHeader(props) {
  return (
    <div className="app-header">
      <div className="appTitle">
        <span>{props.appIcon}</span>
        <span>{props.appTitle}</span>
      </div>
      <div className="appButtons">
        <span className="dot-green"></span>
        <span className="dot-orange"></span>
        <span className="dot-red"></span>
      </div>
    </div>
  );
}
