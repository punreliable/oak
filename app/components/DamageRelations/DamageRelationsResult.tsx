'use client';
import React from 'react';
import prettyName from '@/utilities/prettyName';

const DamageRelationsResult = (props: any) => {
	const doubleDamageFrom = props.damage_relations.damage_relations.double_damage_from;
	const halfDamageFrom = props.damage_relations.damage_relations.half_damage_from;
	const noDamageFrom = props.damage_relations.damage_relations.no_damage_from;
	const doubleDamageTo = props.damage_relations.damage_relations.double_damage_to;
	const halfDamageTo = props.damage_relations.damage_relations.half_damage_to;
	const noDamageTo = props.damage_relations.damage_relations.no_damage_to;
	const doubleDamageFromOutput = doubleDamageFrom.map((obj: { name: any }) => (
		<a
			key={obj.name}
			className={`nes-btn type-${obj.name} is-${obj.name} pr-4`}
			href={'/type/' + obj.name}
		>
			{prettyName(obj.name)}
		</a>
	));
	const doubleDamageToOutput = doubleDamageTo.map((obj: { name: any }) => (
		<a
			key={obj.name}
			className={`nes-btn type-${obj.name} is-${obj.name} pr-4`}
			href={'/type/' + obj.name}
		>
			{prettyName(obj.name)}
		</a>
	));
	const halfDamageFromOutput = halfDamageFrom.map((obj: { name: any }) => (
		<a
			key={obj.name}
			className={`nes-btn type-${obj.name} is-${obj.name} pr-4`}
			href={'/type/' + obj.name}
		>
			{prettyName(obj.name)}
		</a>
	));
	const halfDamageToOutput = halfDamageTo.map((obj: { name: any }) => (
		<a
			key={obj.name}
			className={`nes-btn type-${obj.name} is-${obj.name} pr-4`}
			href={'/type/' + obj.name}
		>
			{prettyName(obj.name)}
		</a>
	));
	const noDamageFromOutput = noDamageFrom.map((obj: { name: any }) => (
		<a
			key={obj.name}
			className={`nes-btn type-${obj.name} is-${obj.name} pr-4`}
			href={'/type/' + obj.name}
		>
			{prettyName(obj.name)}
		</a>
	));
	const noDamageToOutput = noDamageTo.map((obj: { name: any }) => (
		<a
			key={obj.name}
			className={`nes-btn type-${obj.name} is-${obj.name} pr-4`}
			href={'/type/' + obj.name}
		>
			{prettyName(obj.name)}
		</a>
	));
	return (
		<>
			<div className='row'>
				<h2 className='responsive-h2 text-center gameboy'>Damage Guide</h2>
			</div>

			<div className='row py-4'>
				{doubleDamageFrom && doubleDamageFrom.length > 0 && (
					<div className='col mb-4'>
						<h3>2x Weakness To</h3>
						{doubleDamageFromOutput}
					</div>
				)}
				{doubleDamageTo && doubleDamageTo.length > 0 && (
					<div className='col mb-4'>
						<h3>Super Effective Against</h3>
						{doubleDamageToOutput}
					</div>
				)}
				{halfDamageFrom && halfDamageFrom.length > 0 && (
					<div className='col mb-4'>
						<h3>Resistant To</h3>
						{halfDamageFromOutput}
					</div>
				)}
				{halfDamageTo && halfDamageTo.length > 0 && (
					<div className='col mb-4'>
						<h3>Weak Against</h3>
						{halfDamageToOutput}
					</div>
				)}
				{noDamageFrom && noDamageFrom.length > 0 && (
					<div className='col mb-4'>
						<h3>Immune To</h3>
						{noDamageFromOutput}
					</div>
				)}
				{noDamageTo && noDamageTo.length > 0 && (
					<div className='col mb-4'>
						<h3>No Effect</h3>
						{noDamageToOutput}
					</div>
				)}
			</div>
		</>
	);
};

export default DamageRelationsResult;
