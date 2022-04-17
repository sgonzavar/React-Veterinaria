import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
	return (
		<>
			<header>
				<h1 className="text-center text-capitalize">{title}</h1>
			</header>
		</>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired
}

export default Header