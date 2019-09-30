Snipcart.subscribe('item.adding', function (ev, item, items) {
  item.quantity = $('#prod-qt'+item.id).val();
  });