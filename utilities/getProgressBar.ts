export default function getProgressBar(percentage: number) {

	let progressClass = `nes-progress`;
	let max: number = 100;

return(
	<>
		<progress className="nes-progress" value="90" max={max}></progress>
		<progress className="nes-progress is-primary" value="80" max={max}></progress>
		<progress className="nes-progress is-success" value="50" max={max}></progress>
		<progress className="nes-progress is-warning" value="30" max={max}></progress>
		<progress className="nes-progress is-error" value="10" max={max}></progress>
		<progress className="nes-progress is-pattern" value="50" max={max}></progress>
	</>
);

}
