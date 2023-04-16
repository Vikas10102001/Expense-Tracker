import "./date.css"
const date_container = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()
    // console.log(month, day, year)
    return (
        <div className={props.className + " date_container"}>
            <div>{month}</div>
            <div className="date_day">{day}</div>
            <div>{year}</div>
        </div>
    )
}
export default date_container