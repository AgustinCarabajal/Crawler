// var page = require('webpage').create();
// page.open('http://dragonmuonline.com', function(status) {
// 	// page.includeJs('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', function() {
// 	page.injectJs('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js')
// 	page.evaluate(function() {
// 		document.GetElementById('#account').value = 'assssssssssssssssssssssss';

// 	})
// 	page.render('example.png');

// 	// })
// 	page.onLoadFinished = function(status) {
// 		console.log('Status: ' + status);
// 		page.render('after.png');
// 		// Do other things here...
// 	};

// 	phantom.exit();
// });

var x = 0

const wait = function(ms) {
	var start = new Date().getTime();
	var end = start;
	while (end < start + ms) {
		end = new Date().getTime();
	}
}

var urlv = 'https://www.dragonmuonline.com/index.php?page_id=login';


// var url = 'http://dragonmuonline.com/';
var url = 'https://www.dragonmuonline.com/index.php?page_id=login';
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};
var i = 0


page.open(url, 'post', {
	uss_id:'catwin',
	uss_password:'warpten513',
	process_login:''
}, function () {
		page.injectJs('jquery.min.js');
		

		page.onLoadFinished = function(status) {
	
			if (i === 0) {
			// console.log('Status: ' + status);

				page.render('after.png');

				setTimeout(function() {
					var page2 = require('webpage').create();

					page2.open('https://www.dragonmuonline.com/index.php?page_id=user_cp&panel=votecredits', function() {
						page2.injectJs('jquery.min.js');
						page2.onLoadFinished = function(status) {
							// console.log('Status 2: ' + status);
							page2.render('test.png')
						}

						page2.evaluate(function() {
							$('input[value="Vote Now!"]').click()
						})
						
					})
				
				}, 1000)
				i++
			
			} else {
				//phantom.exit()
			}
			// Do other things here...
		};

    page.evaluate(function () {
			$('input[name="uss_id"]').val('catwin');
			$('input[name="uss_password"]').val('warpten513');
			
			$('button:contains(ENTRAR!)').click();
			// $('form[name="login_process"]').submit();
			// $.post('https://www.dragonmuonline.com/index.php?page_id=login', {
			// 	uss_id:'catwin',
			// 	uss_password:'warpten513',
			// 	process_login:''

			// })
      // console.log('TITLE', $('title').text());
		});

		
		
		page.render('before.png')
    //phantom.exit()
});




