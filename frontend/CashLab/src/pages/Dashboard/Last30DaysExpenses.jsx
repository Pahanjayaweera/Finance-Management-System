import React, { useEffect } from 'react'

const Last30DaysExpenses = ({data}) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseBarChartData(data);
        setChartData(result);

        return () => {};
    }, [data]);

  return (
    <div>
      <div className="card col-span-1">
        <div className="flex items-center justify-between">
            <h5 className="text-lg">Last 30 Days Expense</h5>
        </div>
      </div>
    </div>
  )
}

export default Last30DaysExpenses
