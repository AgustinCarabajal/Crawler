var url = 'https://www.dragonmuonline.com/index.php?page_id=login';
var page = require('webpage').create();

// Mensajes en consola
page.onConsoleMessage = function(msg) {
    console.log(msg);
};
// Flag para que abra la segunda pagina solo una vez
var i = 0

// Hago un posta a la pagina de login (falla y me redirecciona a otra pagina donde hago el login manual)
page.open(url, 'post', {
	uss_id:'catwin',
	uss_password:'warpten513',
	process_login:''
}, function () {
		// Agrego jquery
		page.injectJs('jquery.min.js');	

		// Esto es para despues de hacer el login manual
		page.onLoadFinished = function(status) {
	
			if (i === 0) {
				// saco capura lo que esta haciendo el navegador
				page.render('after.png');

				// Le digo que espere y ejecute la segunda pagina (para votar)
				setTimeout(function() {
					// Abro otro navegador
					var page2 = require('webpage').create();

					page2.open('https://www.dragonmuonline.com/index.php?page_id=user_cp&panel=votecredits', function() {
						page2.injectJs('jquery.min.js');
						page2.onLoadFinished = function(status) {
							// saco capura lo que esta haciendo el navegador
							page2.render('test.png')
							
						}
						// Aca es donde selecciono el/los botones para clickear
						page2.evaluate(function() {
							$('input[value="Vote Now!"]').eq(0).click()
						})
						
					})
				
				}, 1000)
				i++
			
			} else 
				//phantom.exit()
				if (i === 1) {
					// saco capura lo que esta haciendo el navegador
					page.render('after.png');
	
					// Le digo que espere y ejecute la segunda pagina (para votar)
					setTimeout(function() {
						// Abro otro navegador
						var page2 = require('webpage').create();
	
						page2.open('https://www.dragonmuonline.com/index.php?page_id=user_cp&panel=votecredits', function() {
							page2.injectJs('jquery.min.js');
							page2.onLoadFinished = function(status) {
								// saco capura lo que esta haciendo el navegador
								page2.render('test.png')
								
							}
							// Aca es donde selecciono el/los botones para clickear
							page2.evaluate(function() {
								$('input[value="Vote Now!"]').eq(1).click()
							})
							
						})
					
					}, 1000)
					i++
				
				} else
				if (i === 2) {
					// saco capura lo que esta haciendo el navegador
					page.render('after.png');
	
					// Le digo que espere y ejecute la segunda pagina (para votar)
					setTimeout(function() {
						// Abro otro navegador
						var page2 = require('webpage').create();
	
						page2.open('https://www.dragonmuonline.com/index.php?page_id=user_cp&panel=votecredits', function() {
							page2.injectJs('jquery.min.js');
							page2.onLoadFinished = function(status) {
								// saco capura lo que esta haciendo el navegador
								page2.render('test.png')
								
							}
							// Aca es donde selecciono el/los botones para clickear
							page2.evaluate(function() {
								$('input[value="Vote Now!"]').eq(2).click()
							})
							
						})
					
					}, 1000)
					i++
				
				} else
				if (i === 3) {
					// saco capura lo que esta haciendo el navegador
					page.render('after.png');
	
					// Le digo que espere y ejecute la segunda pagina (para votar)
					setTimeout(function() {
						// Abro otro navegador
						var page2 = require('webpage').create();
	
						page2.open('https://www.dragonmuonline.com/index.php?page_id=user_cp&panel=votecredits', function() {
							page2.injectJs('jquery.min.js');
							page2.onLoadFinished = function(status) {
								// saco capura lo que esta haciendo el navegador
								page2.render('test.png')
								
							}
							// Aca es donde selecciono el/los botones para clickear
							page2.evaluate(function() {
								$('input[value="Vote Now!"]').eq(3).click()
							})
							
						})
					
					}, 1000)
					i++
				
				} else
				if (i === 4) {
					// saco capura lo que esta haciendo el navegador
					page.render('after.png');
	
					// Le digo que espere y ejecute la segunda pagina (para votar)
					setTimeout(function() {
						// Abro otro navegador
						var page2 = require('webpage').create();
	
						page2.open('https://www.dragonmuonline.com/index.php?page_id=user_cp&panel=votecredits', function() {
							page2.injectJs('jquery.min.js');
							page2.onLoadFinished = function(status) {
								// saco capura lo que esta haciendo el navegador
								page2.render('test.png')
								
							}
							// Aca es donde selecciono el/los botones para clickear
							page2.evaluate(function() {
								$('input[value="Vote Now!"]').eq(4).click()
							})
							
						})
					
					}, 1000)
					i++
				
				} else
				if (i === 5) {
					// saco capura lo que esta haciendo el navegador
					page.render('after.png');
	
					// Le digo que espere y ejecute la segunda pagina (para votar)
					setTimeout(function() {
						// Abro otro navegador
						var page2 = require('webpage').create();
	
						page2.open('https://www.dragonmuonline.com/index.php?page_id=user_cp&panel=votecredits', function() {
							page2.injectJs('jquery.min.js');
							page2.onLoadFinished = function(status) {
								// saco capura lo que esta haciendo el navegador
								page2.render('test.png')
								
							}
							// Aca es donde selecciono el/los botones para clickear
							page2.evaluate(function() {
								$('input[value="Vote Now!"]').eq(5).click()
							})
							
						})
					
					}, 1000)
					i++
				
				}
		};

		// Con jquery submiteo el formulario de login
    page.evaluate(function () {
			$('input[name="uss_id"]').val('catwin');
			$('input[name="uss_password"]').val('warpten513');
			
			$('button:contains(ENTRAR!)').click();
		});

		// saco capura lo que esta haciendo el navegador
		page.render('before.png')
});




