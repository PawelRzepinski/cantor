const initialState = {
    currency: [
        {
            "currency": "dolar amerykański",
            "code": "USD",
            "bid": 3.7077,
            "ask": 3.7827
        },
        {
            "currency": "dolar australijski",
            "code": "AUD",
            "bid": 2.8589,
            "ask": 2.9167
        },
        {
            "currency": "dolar kanadyjski",
            "code": "CAD",
            "bid": 2.9108,
            "ask": 2.9696
        },
        {
            "currency": "euro",
            "code": "EUR",
            "bid": 4.4941,
            "ask": 4.5849
        },
        {
            "currency": "forint (Węgry)",
            "code": "HUF",
            "bid": 0.012578,
            "ask": 0.012832
        },
        {
            "currency": "frank szwajcarski",
            "code": "CHF",
            "bid": 4.1715,
            "ask": 4.2557
        },
        {
            "currency": "funt szterling",
            "code": "GBP",
            "bid": 5.0643,
            "ask": 5.1667
        },
        {
            "currency": "jen (Japonia)",
            "code": "JPY",
            "bid": 0.035685,
            "ask": 0.036405
        },
        {
            "currency": "korona czeska",
            "code": "CZK",
            "bid": 0.1720,
            "ask": 0.1754
        },
        {
            "currency": "korona duńska",
            "code": "DKK",
            "bid": 0.6040,
            "ask": 0.6162
        },
        {
            "currency": "korona norweska",
            "code": "NOK",
            "bid": 0.4331,
            "ask": 0.4419
        },
        {
            "currency": "korona szwedzka",
            "code": "SEK",
            "bid": 0.4468,
            "ask": 0.4558
        },
        {
            "currency": "SDR (MFW)",
            "code": "XDR",
            "bid": 5.3319,
            "ask": 5.4397
        }
    ]
}

const rootReducers = (state = initialState, action) => {
    return state
}

export default rootReducers;