Snipcart.subscribe('item.adding', function (ev, item, items) {
  const quantity = $('#prod-qt' + item.id).val().trim();
  if (quantity.match(/^[0-9]+$/)) {
    item.quantity = quantity;
  } else {
    item.quantity = 1;
  }
});

Snipcart.execute('config', 'show_continue_shopping', true);
var bulbIds = ['201', '202']; // liste des ids qui forcent le colissimo
// var freeShipping = 59;

function setSnipcartShippingMethods() {
//     if(Snipcart.api.cart.get().total >= freeShipping) {
//         return Snipcart.execute('config', 'allowed_shipping_methods', ['frais-de-ports-offerts']);
//     }

    var bulbs = Snipcart.api.items.all().filter(function(item){
        return bulbIds.indexOf(item.pid) > -1;
    });

    if (bulbs.length > 0) {
        Snipcart.execute('config', 'allowed_shipping_methods', ['colissimo']);
    }
    else {
        Snipcart.execute('config', 'allowed_shipping_methods', ['colissimo', 'enveloppe']);
    }
}

Snipcart.execute('bind', 'itme.updated', setSnipcartShippingMethods);
Snipcart.execute('bind', 'app.ready', setSnipcartShippingMethods);
Snipcart.execute('bind', 'item.added', setSnipcartShippingMethods);
Snipcart.execute('bind', 'item.removed', setSnipcartShippingMethods);