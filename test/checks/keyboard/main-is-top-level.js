describe('main-is-top-level', function () {
	'use strict';

	var fixture = document.getElementById('fixture');

	afterEach(function () {
		fixture.innerHTML = '';
	});

	it('should return false if main landmark is in another landmark', function () {
		var mainLandmark = document.createElement('main');
		var bannerDiv = document.createElement('div');
		bannerDiv.setAttribute('role','banner');
		fixture.appendChild(bannerDiv);
		bannerDiv.appendChild(mainLandmark);
		assert.isFalse(checks['main-is-top-level'].evaluate(mainLandmark));
	});
	
	it('should return false if div with role set to main is in another landmark', function () {
		var mainDiv = document.createElement('div');
		mainDiv.setAttribute('role','main');
		var navDiv = document.createElement('div');
		navDiv.setAttribute('role','navigation');
		fixture.appendChild(navDiv);
		navDiv.appendChild(mainDiv);
		assert.isFalse(checks['main-is-top-level'].evaluate(mainDiv));
	});
	
	it('should return true if main landmark is not in another landmark', function () {
		var mainLandmark = document.createElement('main');
		var bannerDiv = document.createElement('div');
		bannerDiv.setAttribute('role','banner');
		fixture.appendChild(bannerDiv);
		fixture.appendChild(mainLandmark);
		assert.isTrue(checks['main-is-top-level'].evaluate(mainLandmark));
	});
	
	it('should return true if div with role set to main is not in another landmark', function () {
		var mainDiv = document.createElement('div');
		mainDiv.setAttribute('role','main');
		var navDiv = document.createElement('div');
		navDiv.setAttribute('role','navigation');
		fixture.appendChild(navDiv);
		fixture.appendChild(mainDiv);
		assert.isTrue(checks['main-is-top-level'].evaluate(mainDiv));
	});

});