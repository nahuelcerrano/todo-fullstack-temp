import "../../App.css"

function StatsTodo({ stats }) {
    return (
        <div className="stats">
            {stats.map((stat, index) => (
                <span key={index} className="stat-item">
                    <strong>{stat.value}</strong> {stat.label}
                </span>
            ))}
        </div>
    )
}

export default StatsTodo;