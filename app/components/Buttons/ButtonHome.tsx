"use client";
import { useSearchParams } from "next/navigation";

const ButtonHome = () => {
	const searchParams = useSearchParams(); // Use the hook
	const from = searchParams.get('from');
	return(
		<div className='col-md-12 my-4'>
			<a href={`/pokemon/${from}`} className={`nes-btn is-warning`}>
				Home
			</a>
		</div>
	);

};

export default ButtonHome;
