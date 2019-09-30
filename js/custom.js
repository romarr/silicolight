const quantity = parseInt($('#prod-qt' + item.id).val(), 10);
Snipcart.subscribe('item.adding', function (ev, item, items) {
  if (quantity > 0) {
    item.quantity = quantity;
  } else item.quantity = 1;
});