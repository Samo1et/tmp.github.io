// Функция scrinBlock показывает блок с формой заказа
// Функция addBlok добавляет новый блок с формой заказа продукции (не больше 10 блоков)

function scrinBlock() {
	checkBoxBlack.addEventListener('click', function() {
		if (formOrderBlack.classList.contains('page-order__form-order--closed')) {
			formOrderBlack.classList.remove('page-order__form-order--closed');
			formOrderBlack.classList.add('page-order__form-order--opened');
		} else {
			formOrderBlack.classList.add('page-order__form-order--closed');
			formOrderBlack.classList.remove('page-order__form-order--opened'); 
		}
	});

	checkBoxWhite.addEventListener('click', function() {
		if (formOrderWhite.classList.contains('page-order__form-order--closed')) {
			formOrderWhite.classList.remove('page-order__form-order--closed');
			formOrderWhite.classList.add('page-order__form-order--opened');
		} else {
			formOrderWhite.classList.add('page-order__form-order--closed');
			formOrderWhite.classList.remove('page-order__form-order--opened'); 
		}
	});

	checkBoxColors.addEventListener('click', function() {
		if (formOrderColors.classList.contains('page-order__form-order--closed')) {
			formOrderColors.classList.remove('page-order__form-order--closed');
			formOrderColors.classList.add('page-order__form-order--opened');
		} else {
			formOrderColors.classList.add('page-order__form-order--closed');
			formOrderColors.classList.remove('page-order__form-order--opened'); 
		}
	});
}

function set(){

	var insertCode = ['<select name="color" id="color"><option value="Выберите марку">Выберите марку</option>','<a class="page-order__form-link" href="masterbatch.html">Подробнее о марках</a>'];
	document.getElementById('addBlackform').innerHTML = insertCode[1];

	
};






