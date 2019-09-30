Snipcart.subscribe('item.adding', function (ev, item, items) {
  const quantity = $('#prod-qt' + item.id).val().trim();
  if (quantity.match(/^[0-9]+$/)) {
    item.quantity = quantity;
  } else {
    item.quantity = 1;
  }
});