var Engine = (function(global) {

	var doc = global.document,
		win = global.window,
		canvas = doc.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		lastTime;

	canvas.width = 500;
	canvas.height = 500;
	doc.body.appendChild(canvas);


	function main(){

		var now = Date.now(),
			dt = (now - lastTime) / 1000.0;

		update();
		render();

		lastTime = now;

		win.requestAnimationFrame(main);

	}

	function init(){
		reset();
		lastTime = Date.now();
		main();
	}

	function update(){

	}

	function render(){

	}

	function reset(){

	}

})(this);