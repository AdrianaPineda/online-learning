import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React

render(
	// Properties: for string the `{}` are not needed
	<SkiDayCount total={50}
				 powder={20}
				 backcountry={10}
				 goal={100}/>,
	document.getElementById('react-container')
)
