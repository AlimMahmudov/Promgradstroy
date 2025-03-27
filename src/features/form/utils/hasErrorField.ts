export const hasErrorField = (err: unknown): err is { message: string } => {
	return (
		typeof err === 'object' &&
		err !== null &&
		'message' in err &&
		err.message !== null
	);
};
