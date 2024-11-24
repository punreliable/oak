import React from 'react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom';

// expect.extend({ toBeInTheDocument });
import { render, screen } from '@testing-library/react';

import HomePage from './Home';
import Search from '../components/Search';

describe('HomePage', () => {
	test('should render without crashing', () => {
		const { container } = render(<HomePage />);
		expect(screen.getByTestId('home-page')).toBeInTheDocument();
	});

	// test('should render the Search component', () => {
	// 	const { getByTestId } = render(<HomePage />);
	// 	expect(getByTestId('search-component')).toBeInTheDocument();
	// });
});
