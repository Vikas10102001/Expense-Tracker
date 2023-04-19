import "./FilterExpense.css"
const FilterExpense=(props)=>{
    const onFilterChange=(event)=>
    {
      props.setYear(event.target.value)
    }
    return (
        <div className="dropdown">
            <label className="filter_label">Filter By Year</label>
            <select value={props.selectedYear} name="year" id="filter" onChange={onFilterChange}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
            </select>
        </div>
    )
}
export default FilterExpense;