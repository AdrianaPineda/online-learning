import React from 'react'
import '../stylesheets/ui.scss'

// Create class > creates React component. Not recommended in newer versions
// 'export' is needed so we can import it in index.js
export const SkiDayCount = React.createClass({
	render() {
		return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>5 days</span>
				</div>
				<div className="powder-days">
					<span>2 days</span>
				</div>
				<div className="backcountry-days">
					<span>1 hiking day</span>
				</div>
			</div>
		)
	}
})
