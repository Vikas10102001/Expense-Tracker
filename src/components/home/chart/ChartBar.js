import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.value > 0)
    barFillHeight = Math.round((props.value / props.maxVal) * 100) + "%";
  return (
    <div className="bar_container">
      <div className="bar_label">{props.value}</div>
      <div className="bar">
        <div className="bar_fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="bar_label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
