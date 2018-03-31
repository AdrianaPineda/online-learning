import '../stylesheets/ui.scss'
// React import removed cause we are not using it

// Functions extracted from the SkiDayCount component
// As functions not methods
const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

// As a stateless functional component
// No render nor return here
// Props are sent via params, no `this`
export const SkiDayCount = ({total, powder, backcountry, goal}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total,
						goal
					)}
				</span>
			</div>
		</div>
)
