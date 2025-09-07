function extractMoveNames(jsonData: any): string[] {
	if (!jsonData || !jsonData.moves || !Array.isArray(jsonData.moves)) {
		return [];
	}

	return jsonData.moves.map((move: any) => move.name);
}

export default extractMoveNames;
