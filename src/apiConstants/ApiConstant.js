export let apiHeader = () => {
    return [
        {
            key: "Authorization",
            value: "Bearer " + userService.authToken()
        },
        {
            key: "Accept",
            value: "application/json"
        },
        {
            key: "Content-Type",
            value: "application/json "
        },
    ]
}

let localURL = '';
let prodURL = '';

export let baseUrl = process.env.NODE_ENV === 'production' ? prodURL : localURL