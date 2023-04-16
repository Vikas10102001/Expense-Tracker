import Card from "../../ui/Card"
import ChartBar from "./ChartBar";
import "./ExpenseChart.css"
const ExpenseChart = (props) => {
    const dataPoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "Apr", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 }
    ]
    for (const expense of props.items) {
        const expenseMonth = expense.date.getMonth();
        dataPoints[expenseMonth].value += expense.amount;
    }
    const dataPointValues=dataPoints.map((dataPoint)=>dataPoint.value);
    const totalMax=Math.max(...dataPointValues)
    // console.log(dataPoints,totalMax)
    return (
        <Card className="chart_container">
            {dataPoints.map((dataPoint) => <ChartBar label={dataPoint.label} 
            key={dataPoint.label}
            value={dataPoint.value} 
            maxVal={totalMax}/>)}
        </Card>
    )

}
export default ExpenseChart