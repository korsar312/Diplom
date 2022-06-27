/**
 * Возвращает текущее время в формате "25-10-2022 15:38:45"
 */
export function getStringCurrentTime() {
	const date = new Date();
	const DMY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
	const HMS = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	return `${DMY} ${HMS}`;
}
