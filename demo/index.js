var elements = document.getElementsByTagName('a');
for(var i = 1; i < elements.length; i++) {
    elements[i].onclick = function(e) {
				e.preventDefault();
        var hash = this.hash.substr(1),
            elementTop = document.getElementById(hash).offsetTop;
        window.scrollTo(0, elementTop + 125);
				window.scrollTo(0,elementTop + 126);
        window.location.hash = '';
        return false;
    }
}
