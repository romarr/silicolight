$('.prod-qt').change(function() {
  const productIndex = $(this).data('data-product-index');
  $('#btn' + productIndex).data('data-item-quantity', $(this).val());
});