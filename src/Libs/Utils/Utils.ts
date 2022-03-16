export function getStringCurrentTime() {
    const date = new Date()
    const DMY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    const HMS = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return `${DMY} ${HMS}`
}