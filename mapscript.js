function trimTrailingSlash(string)
{
  if(string != null) {
    return string.replace(/\/+$/, '');
  } else {
    return string;
  }
}

if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
ctrHref = trimTrailingSlash('http://www.embedgooglemap.net'.trim());
ctrHref2 = trimTrailingSlash('http://www.embedgooglemap.net'.trim());
eInDoc = function(e) {
  while (e=e.parentNode) {
   if (e==document) {
      return true;
    }
   }
   return false;
};

linkfound = false;
window.onload = function () {
    els = document.getElementsByTagName('a');
    l = els.length;
    for (i = 0; i < l; i++) {
       el = els[i];
       if (trimTrailingSlash(el.href) === ctrHref || trimTrailingSlash(el.getAttribute('href')) === ctrHref || trimTrailingSlash(el.href) === ctrHref2 || trimTrailingSlash(el.getAttribute('href')) === ctrHref2) {
        linkfound = true;
        if(el.getAttribute('rel')=='nofollow' || !eInDoc(el) || !lCheck(el)) {
          linkfound = false;
        }
        linktext = el.innerHTML;
        if(linktext == undefined) {
          linkfound = false;
        }
        else if(linktext.trim() == '') {
          linkfound = false;
        }
        if(el.offsetHeight != undefined && el.offsetHeight < 8) {
          linkfound = false;
        }
      }
    }

    if(linkfound) {
  linkToHide = el;
  linkToHide.innerHTML = '';
}

    if (linkfound == false) {
      
            var div = document.createElement('div');
            div.id = 'error_';
            div.innerHTML = 'Google Maps Error: Do not change the code.</a>';
            
 if(document.getElementById('gmap_canvas') != null) { document.getElementById('gmap_canvas').parentNode.insertBefore(div, document.getElementById('gmap_canvas').nextSibling); } else { document.body.appendChild(div); }

      widget = document.getElementById('gmap_canvas');
      if(widget) {
        widget.style.visibility = 'hidden';
      }
    }
}