import React from 'react';

import {Header} from "components/Header";
import {Footer} from "components/Footer";

export function PageNotFound() {
	return (
			<div className="layout">
				<Header/>
				<div>
					<h1>Oooops... Page not found</h1>
				</div>
				<Footer/>
			</div>
	);
}