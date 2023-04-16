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
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}
export default FilterExpense;