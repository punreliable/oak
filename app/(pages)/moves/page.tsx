"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const MovesPage = () => {
	const [input, setInput] = useState('');
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim()) {
			router.push(`/move/${input}`);
		}
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Enter a move"
					style={{ padding: '10px', fontSize: '16px' }}
				/>
				<button type="submit" style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px' }}>
					Search
				</button>
			</form>
		</div>
	);
};

export default MovesPage;