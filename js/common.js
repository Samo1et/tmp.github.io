	$("#black").bind("change click", function () {
		if (this.checked){
			$('.page-order__form-order-black').show();
		} 
		else {
			$('.page-order__form-order-black').hide();
		}});

	$("#white").bind("change click", function () {
		if (this.checked){
			$('.page-order__form-order-white').show();
		} 
		else {
			$('.page-order__form-order-white').hide();
		}});

	$("#colors").bind("change click", function () {
		if (this.checked){
			$('.page-order__form-order-colors').show();
		} 
		else {
			$('.page-order__form-order-colors').hide();
		}});









