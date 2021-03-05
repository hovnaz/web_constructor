// is empty string
String.prototype.isEmpty = function() {
	return (this.length === 0 || !this.trim());
};


// replace last item array

Array.prototype.replaceLastArr = function(replace) {
	if (!replace) replace = '';
	let NewArray = [];

	for (let i = 0; i < this.length-1; i++) {
		NewArray.push(this[i]);
	}
	if (replace != '') NewArray.push(replace);

	return NewArray;
};



// replace 
Array.prototype.replaceArray = function(replace,replaceItem) {
	if (!replaceItem) replaceItem = '_';
	let Result = [];
	for (let i = 0; i < this.length; i++) {
		if (this[i] != replace) Result.push(this[i]);
		else if (replaceItem != '_') Result.push(this[i]);
	}
	
	return Result;
};

// replace Class
function replaceClass(el,replace,add){
	el = $(el);
	if (el.length == 0) return;
	el.addClass(add).removeClass(replace);
}



function NextSlide($target,duration){
	if (!duration) duration = 300;
	$target = $($target);
	
	$target.next('[data-slide-toggle]').slideToggle(duration);
}


function NextMenu($target){
	$target = $($target);
	$('[data-dropdown-toggle]').hide();
	$target.next('[data-dropdown-toggle]').toggle();
	// let toggleItem = $target.next('[data-dropdown-toggle]').find('[data-dropdown-toggle]');

	// console.log(toggleItem)
}

function MenuData(DataAttrName,DataAttrNameCategory,duration){
	if (!duration) duration = 300;

	DataAttrName = $(`[data-attr-toggle='${DataAttrName}']`);
	if (!DataAttrNameCategory) {
		$('[data-attr-toggle]').hide();

	}
	else{
		$(`[data-attr-toggle-category="${DataAttrNameCategory}"]`).hide();
	}
	DataAttrName.fadeIn(duration);
}
// make id
function makeid(length) {
	 var result           = '';
	 var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	 var charactersLength = characters.length;
	 for ( var i = 0; i < length; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	 }
	 return result;
}




// send request socket


function ReturnKey(key,message,code){
	if (code === undefined) {code == '_'}
	if (Array.isArray(message)) {
		let concate = '';
		for (var i = 0; i < message.length; i++) {

			concate += String(message[i]) + ' ';
		}

		message = concate.slice(0, -1); ;
		concate = '';

	}
	message = String(message);

	socket.emit(key, message,code)
}
// undefined

function SendEmit(message,code) {
  if (message === undefined) message = '_';
  if (code === undefined) code = '_';
  socket.emit('Send', message,code);
}