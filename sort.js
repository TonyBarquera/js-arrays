const months = ["March", "Jan", "Feb", "Dec"];

const orders = [{
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    }, {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    }, {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    }, {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

months.sort((a, b) => b - a);
console.log(months);

orders.sort((a, b) => a.total - b.total);
console.log(orders);