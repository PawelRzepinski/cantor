export const currencyUpdate = (currency) => {
    return {
        type: 'UPDATE_CURRENCY',
        payload: {currency}
    }
}