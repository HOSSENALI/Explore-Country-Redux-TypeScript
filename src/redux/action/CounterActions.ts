export function Increment() {
    return {
        type: "INCREMENT_VALUE"
    }
}
export function Decrement() {
    return {
        type: "DECREMENT_VALUE"
    }
}
export function IncrementByPayload(value:number) {
    return {
        type: "INCREMENT_PAYLOAD",
        payload: value
    }
}
export function SetInput(value:number) {
    return {
        type: "SET_INPUT",
        payload: value
    } 
 
}
export function IncrementByButton(value:number) {
    return {
        type: "INCREMENT_BY_BUTTON",
        payload: value
    }
}