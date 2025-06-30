import { useState, useEffect } from "react"

function DateSelector(){
    const [years, setYears] = useState([])
    const [months, setMonths] = useState([])
    const [selectedYear, setSelectedYear] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleYearChange = (e) => {
        const year = e.target.value;
        setSelectedYear(year)
    }

    const handleMonthChange = (e) => {
        const month = e.target.value;
        setSelectedMonth(month)
    }

    const fetchYears = async () => {
        setLoading(true)
        try {
            const fakeYears = [2024, 2025]
            setYears(fakeYears)
        } catch(error){
            console.error("Error fetching years: ", error)
        } finally{
            setLoading(false)
        }
    }

    const fetchMonths = async () => {
        setLoading(true)
        try{
            const fakeMonths = []
            if (selectedYear === "2024"){
                fakeMonths.push("February")
            }
            else if (selectedYear === "2025"){
                fakeMonths.push("April")
            }
            else {
                fakeMonths.push("")
            }
            setMonths(fakeMonths)
        } catch(error){
            console.error("Error fetching months: ", error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchYears()
    }, [])

    useEffect(() => {
        fetchMonths()
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