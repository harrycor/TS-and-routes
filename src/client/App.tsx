import * as React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import People from './pages/People';
import PersonalPage from './pages/PersonalPage';


const App = () => {
	return(
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='/people' element={<People />}/>
			<Route path='/people/:name' element={<PersonalPage />} />
		</Routes>
		</BrowserRouter>
	)
}

export default App;