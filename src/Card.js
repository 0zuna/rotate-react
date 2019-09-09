import React from 'react'

const Card = ({name,sub,url}) => {
	return (
		<div className='card'>
			<div className='card-image' style={{backgroundImage: 'url('+url+')'}}>
			</div>
			<div className='card-description'>
				<h2>{name}</h2>
				<p>{sub}</p>
			</div>
		</div>
	)
}

export default Card
