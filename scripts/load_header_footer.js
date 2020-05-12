$(function() {
		$("._header").load("./../../h_f_html/header.html");
	});

	$(function() {
		$("._footer").load("./../../h_f_html/footer.html");
	});

//create linkh Element - - - >css-header.css
let cssId = 'myCss';
let head  = document.getElementsByTagName('head')[0];
let linkh  = document.createElement('link');
linkh.id   = cssId;
linkh.rel  = 'stylesheet';
linkh.type = 'text/css';
linkh.href = './../h_f_html/css-header.css';
linkh.media = 'all';
head.appendChild(linkh);

//create linkf Element - - - >css-fo.css
let linkf  = document.createElement('link');
linkf.id   = cssId;
linkf.rel  = 'stylesheet';
linkf.type = 'text/css';
linkf.href = './../h_f_html/css-footer.css';
linkf.media = 'all';
head.appendChild(linkf);

