/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";
import { usePos } from "@point_of_sale/app/store/pos_hook";

patch(PaymentScreen.prototype, {
    setup() {
        super.setup();
        this.pos = usePos();

        const order = this.pos.get_order();
        if (order && order.set_to_invoice) {
            order.set_to_invoice(true);
        }
    },
});
