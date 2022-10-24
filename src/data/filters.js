const filters = [
    {id: 1, text: "High ABV (> 6/0%)", checked: false, field: "abv", operator: ">", value: 6 },
    {id: 2, text: "Acidic (ph < 4)", checked: false, field: "ph", operator: "<", value: 4 },
    {id: 3, text: "Classic Range", checked: false, field: "first_brewed", operator: "<", value: 2010 }
]
export default filters;