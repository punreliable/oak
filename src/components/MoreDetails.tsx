import React, { useEffect, useState } from 'react'
import { axios } from 'axios'
import { useQuery } from '@tanstack/react-query'
import prettyName from '../utilities/prettyName'

const MoreDetails = (props: any) => {

	return(
		<div className="nesContainer">
			<h1>{ 'Hello World,' + props.name}</h1>
		</div>
	)
}

export default MoreDetails
