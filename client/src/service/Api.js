import axios from 'axios'
import { base_url } from '../util/url'
export async function connect(
    endpoint,
    method,
    body
) {
    const url = base_url + endpoint
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
    try {
        const request = await axios({
            url,
            method,
            headers,
            data: JSON.stringify(body)
        })

        if (
            request.status.toString().startsWith('4') ||
            request.status.toString().startsWith('5')
        ) {
            // console.error(` error returned by the API: ${request.statusText}`)
            return { status: false, message: request.statusText }
            // throw new Error(request.statusText)
        }
        return request.data
    } catch (e) {
        let message = e.response ? e.response.data.message : e.message
        // console.log(`There was an error connecting to the API: ${e.message}`)
        return { status: false, message }
    }
}