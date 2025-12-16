{
    "name": "POS Force Invoice Default",
    "version": "18.0.1.0.0",
    "summary": "Force POS orders to always be invoiced",
    "depends": ["point_of_sale"],
    "assets": {
        "point_of_sale.assets": [
            "pos_force_invoice/static/src/js/force_invoice_payment.js"
        ]
    },
    "installable": true,
    "application": false
}
