"use client";
import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PendingType from '../Pending';
import typeIcon from '@/assets/type-icons-color-dark/15-ice.svg';
import '../TypeStyles.scss';
import './IceTypeStyles.scss';
import prettyName from '@/utilities/prettyName';


const PokemonTypeIcePage = () => {
 
	const { data, error, isLoading } = useQuery({
		queryKey: ['ice'],
		queryFn: async () => {
		const id = 15;
		const response = await axios.get(`https://pokeapi.co/api/v2/type/${id}`);
		return response.data;
		},
	});
	  
	if (isLoading) return <PendingType />;
	
	if (error) return( 
		<>
			<h1>There has been an error trying to retreive data on this Pokemon Type.</h1>
			<p>Please try again!</p>
		</>
	);
	if (data) console.log('Ice Type Pokemon Data: ', data);
	if (data) console.log('Ice Type Pokemon Abilities: ', data.abilities);

	if(data) return (
		<div className='App nes-container'>
			<section className='nesContainer'>
				<section>
					<h1>{prettyName(data.name)} Type</h1>
					<Image 
						src={typeIcon} 
						alt={`${prettyName(data.name)} Type Logo`} 
						height={64}
						width={64}
						className="typeIcon"
					/>
				</section>
				<section>
					<h2>Abilities</h2>
					<p>Coming Soon.</p>
				</section>
				<section>
					<h2>Moves</h2>
					<p>Coming Soon.</p>
				</section>
				<section>
					<h2>Pokemon</h2>
					<p>Coming Soon.</p>
				</section>
			</section>
		</div>
	);
}


export default PokemonTypeIcePage;
