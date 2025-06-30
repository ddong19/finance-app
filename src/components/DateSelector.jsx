import { useState, useEffect } from "react"
import '../css/DateSelector.css';
import { fetchYears, fetchMonths } from "../apis/DateSelector";

function DateSelector(){
    const [years, setYears] = useState([])
    const [months, setMonths] = useState([])
    const [selectedYear, setSelectedYear] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleYearChange = (e) => {
        const year = parseInt(e.target.value);
        setSelectedYear(year)
        setSelectedMonth(null)
    }

    const handleMonthChange = (e) => {
        const month = e.target.value;
        setSelectedMonth(month)
    }

    const getYears = async () => {
        setLoading(true)
        try {
            const years = await fetchYears()
            setYears(years)
        } catch(error){
            console.error("Error fetching years: ", error)
        } finally{
            setLoading(false)
        }
    }

    const getMonths = async () => {
        setLoading(true)
        try{
            const months = await fetchMonths(selectedYear)
            setMonths(months)
        } catch(error){
            console.error("Error fetching months: ", error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getYears()
    }, [])

    useEffect(() => {
        getMonths()
    }, [selectedYear])

    return (
        <div className="date-selector">
            <select
                value={selectedYear || ''}
                disabled={loading}
                onChange={handleYearChange}
            >
                <option value="">Select Year</option>
                {years.map(year => {
                    return <option key={year} value={year}>{year}</option>
                })}
            </select>

            <select
                value={selectedMonth || ''}
                disabled={loading}
                onChange={handleMonthChange}
            >
                <option value="">Select Month</option>
                {months.map(month => {
                    return <option key={month} value={month}>{month}</option>
                })}
            </select>
        </div>
    )
}

export default DateSelector;