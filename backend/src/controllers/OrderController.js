const connection = require('../database/connection');
module.exports = {
    async store(req, res){
        try {            
            const {isOrderCompleted, total_value, payment_type, payment_status, items=[]} = req.body;
            if(req.userPermission !== 'client'){
                return res.status(401)
            }
            const user = await connection('clients').select('*').where({id: req.userId}).limit(1).first();
        if(!user){
            return res.status(404).json({error: 'User not exists'});
        }
        const orderId = await connection('orders').insert({
            isOrderCompleted,
            total_value,
            payment_type,
            payment_status,
            adress_id: user.adress_id,
            client_id: user.id
        });
        
        if(item.length === 0){
            return res.status(400).json({error: "No items in cart"})
        }

        items.map(item=>{
            await connection('order_items').insert({
                order_id: orderId[0],
                name: item.name,
                subtotal_value: item.value,
                quantity: item.quantity
            })
        });
    } catch (error) {
        return res.status(400).json({error})
    }

    }
}