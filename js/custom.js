$('.prod-qt').change(function() {
  const productIndex = $(this).data('product-index');
  $('#btn' + productIndex).data('item-quantity', $(this).val());
});