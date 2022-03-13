type  TlogAction = {
    currentPage?: string,
    action?: string,
    element?: string,
    data?: string,
    comment?: string,
}

class RestApi {
    public logAction({currentPage, action, element, data, comment}: TlogAction) {
        const log = Object.entries(arguments[0]).filter(el => el[1])
        return console.log(log.map(el => `${el[0]}: ${el[1]}`))
    }
}

export default new RestApi