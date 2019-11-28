import React, { useState } from 'react'
import './App.css'
import Card from './Card'

const App = () => {

	const [cards, setCards]=useState([
		{name:'Kumi',sub:'Japanese',url:'http://lorempixel.com/200/201/people'},
		{name:'Sayuri',sub:'Japanese',url:'http://lorempixel.com/200/202/people'},
		{name:'Haruka',sub:'Japanese',url:'http://lorempixel.com/200/203/people'},
		{name:'Aiko',sub:'Japanese',url:'http://lorempixel.com/200/204/people'},
		{name:'Ayaka',sub:'Japanese',url:'http://lorempixel.com/200/205/people'},
		{name:'Kasumi',sub:'Japanese',url:'http://lorempixel.com/200/205/people'},
	])

	return (
		<div className='App'>
			<div className='container'>
				<div id='carousel'>
				{cards.map((c,i)=>
					<Card key={i} name={c.name} sub={c.sub} url={c.url}/>
				)}
				</div>
			</div>
		</div>
	)
}

export default App
