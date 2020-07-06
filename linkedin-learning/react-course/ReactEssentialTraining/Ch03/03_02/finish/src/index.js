import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React
// Sometimes we'll have some errors pop up where it says React is not defined,
// Adding React to the window will deal with this problem

render(
	<SkiDayCount />,
	document.getElementById('react-container')
)
