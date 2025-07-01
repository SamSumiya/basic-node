import { data, Location } from "./data";

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))

export async function dbAsync(): Promise<Location[]> {
    await delay(1000)
    return data 
}

export function dbPromise(): Promise<Location[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}