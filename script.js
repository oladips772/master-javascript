/** @format */

// * STRINGS..............

// ? charAt() method
// const str = "HELLO WORLD"
// const res = str.charAt(0)
// console.log(res);

// ? Concat method
// const str1 = "Hello "
// const str2 = "World"
// const res = str1.concat(str2);
// console.log(res);

// ? charcodeAt method
// const str = "HELLO World"
// const res = str.charCodeAt(0)
// console.log(res);

// ? endsWith method
// const str = "hello world, welcome to the universe";
// const res = str.endsWith("universe")
// console.log(res);

// ? starstwith method
// const str = "hello world, welcome to the universe";
// const res = str.startsWith("hello")
// console.log(res);

// ? fromcharcode method
// const res = String.fromCharCode(35);
// console.log(res);

// ? indexof method
// const str = "hello world, welcome to the universe"
// const res = str.indexOf("welcome");
// console.log(res);

// ? localcopare method
// const str1 = "ab"
// const str2 = "cd"
// const res = str1.localeCompare(str2)
// console.log(res);
// ? the localeCompare method comapares the given parameter with the target , and returns a negative value if the comaparison returns in an (ascending order) and positive in an (descending order).

// ? includes method
// const str = "hello world"
// const res = str.includes(" ")
// console.log(res);

// ? lastindexof method
// const str = "hello planet earth, you are a great planet";
// const res = str.lastIndexOf("planet");
// console.log(res);

// ? match method
// const str = "The rain in SPAIN, stays mainly in plain"
// const res = str.match(/ain/g)
// console.log(res);
// ? the match method returns an array containing the results of that search

// ? reapeat method
// const str = "hello world"
// const res =  str.repeat(2)
// console.log(res);
// ? returns the given value with the number of repeat called.

// ? slice method
// const str = "hello world"
// const res = str.slice(0, 5)
// console.log(res);
// ? the slice methods returns a section of a given string, it takes two parameters(index-start,index-end) indicating where the section starts and where the section ends but not upto the ending index.

// ? substring method
// const str = "hello world"
// const res = str.substring(0, 7)
// console.log(res);
// ? the substring method also returns a section , and takes two paramters just like the slice method().

// ? toLoacleLowerCase method
// const str = "HELLO WORLD"
// const res = str.toLocaleLowerCase()
// console.log(res);

// ? tolowerCase
// const str = "HELLO WORLD"
// const res = str.toLowerCase()
// console.log(res);

// ? trim method
// const str = "hello world";
// const res = str.trim()
// console.log(res);
// ? the trim method removes the leading and trailing white spaces from a text or a writable element.

// ? tolocaleUppercase
// const str = "hello world"
// const res = str.toLocaleUpperCase()
// console.log(res);

// ? toupperCase
// const str = "hello world"
// const res = str.toUpperCase()
// console.log(res);

// * Arrays..............
// ? concat method
// const fruits = ["Bannana", "oranges", "mangoes"];
// const vegies = ["tomatoes", "pepper", "onions"]
// const newArray = fruits.concat(vegies)
// console.log(newArray);

// ! copywithin method
// const fruits = ["Bannana", "oranges", "mangoes", "pears", "melon"];
// console.log(fruits);
// const newF = fruits.copyWithin(0, 2, 2);
// console.log(newF);

// ? every method
// const ages = [19, 22, 34, 55, 19];
// function checkAges(age) {
//   return age >= 18;
// }
// console.log(ages.every(checkAges));
// ? the every method accepts a function which takes upto three agrs and return a Bolean value if they pass the test.

// ? fill method
// const fruits = ["Bannana", "oranges", "mangoes", "pineapple"];
// console.log(fruits.fill("kiwi", 1, 3));
// ? the fill method takes in (3 parameters) the value to fill the array section with , the index to start , and the index to stop before - i.e stop before the given index.

// ? find method
// const ages = [11, 22, 34, 18, 55, 19];
// function checkAges(age) {
//   return age >= 18;
// }
// console.log(ages.find(checkAges));
// ? the find method takes a param e.g (a function) which predicate or loop once through all elements and returns the value of the element which returns "true" in the given test.

// ? foreach method
// let ages = [19, 22, 34, 18, 55, 19];

// function timesAge(age, index, arr) {
//   arr[index] = age * 10;
// }

// ages.forEach(timesAge);
// console.log(ages);
// ? the forEach method performs a specified function for each item in array.

//  ? filter method..............
// let ages = [19, 22, 34, 12, 18, 55, 19];

// function lessThan20(age) {
//   return age <= 20;
// }

// console.log(ages.filter(lessThan20));
// ? the filter method returns the element of an array that meets the condition specified in a callback function

// ? findindex method..............
// let ages = [29, 22, 34, 18, 55, 19];
// function lessThan20(age) {
//     return age <= 20
// }

// console.log(ages.findIndex(lessThan20));
// ? the findIndex method takes in a param (e.g a function) that loops or predicate once over every element and returns the index of the value (the first element) which meets the condition given.

// ? CONSOLE METHODS..................

//* console.assert() method
// console.assert(document.getElementById("demo"), "you have no element with the ID demo")
// * info: the console.assert() writes a message to the console but only if an expression evaluates to false!!

// //* console.count() methods
// console.count("my label");
// console.count("my label");
// console.count("my label 1");
// console.count("my label 2");
// * this writes a message containing the number of times console.count() was called;

// * console.group() method
// console.log("hello world");
// console.group();
// console.log("hello world inside a group with index of 0");
// console.log("hello world inside a group with index of 1");
// * the console.group() method adds all console.logs() inside a group when called above and before any console.log() messages.

// * console.error()
// console.error("you made a mistake")
// * this writes an error message in the console

// * console,groupCollapsed()
// console.groupCollapsed();
// console.log("hello again, this time inside a collapsed group");
// * this console.groupCollapsed() writes the to the console inside a collapsed group

// * console.groupEnd()
// console.log("hello world as a single console message");
// console.group()
// console.log("hello world as a console group message 1");
// console.log("hello world as a console group message 2");
// console.groupEnd()
// console.log("hello world as a single console message again");
// * console.groupEnd() indicates the end of a group message

// * console.info()
// console.info("hello world");
// * console.info() also writes a message to the console;

// * console.time()
// for (i = 0; i < 199250; i++) {
//   console.time();
// }
// console.timeEnd();
// console.log("time stopped");
// * the console.time() is use to start a timer in the browser and the the console.timeEnd() is used to end the timer and writes the result in the console.

// * console.table()
// console.table(["mangoe", "rice", "orange", "beans"]);
// * the console.table() writes a message to the console in a table form , including each item having their own index . the parameter should be an arrray[] with items or values in it.

// * console.warn()
// console.warn("this is a warning");
// * this methods writes a warning message to the console.

// * DOM EVENTS PROPERTIES AND METHODS.......

// * mouse event_altkey
// if (Event.altKey) {
//   console.log("the alt key was pressed");
// } else {
//   console.log("the alt key was not pressed");
// }
// * the altKey returns a Boolean value that indicates whether or not the alKey was pressed

// * mouse event_realted target
// function getRelatedElement(event) {
//   console.log("the cusor just exited the" + event.relatedTarget.tagName + "element");
// }
// * the relatedTarget property returns the element related to the element that triggerd the mouse event.

// * stopImmediatePropagation()
// const x = document.getElementById("myBtn");
// x.addEventListener("click", myFunction);
// x.addEventListener("click", someOtherFunction);

// function myFunction(event) {
//   console.log("hello world");
//   event.stopImmediatePropagation();
// }

// function someOtherFunction(event) {
//   console.log("i will not get to say hello world");
// }

// * the stopImmediatePropagation() method prevents other listners of the same event from beign called.

// ? SCREEN OBJECT ....................

// * avail height--property
// const x = "available height : " + screen.availHeight;
// console.log(x);
// * the availHeight property, returns the height of the user's screen in pixels, minus interface features like windows taskbar.

// * color depth--property
// const x = "color depth : " + screen.colorDepth;
// console.log(x);
// * the color property,returns the bit depth of thhe color palette for displaying images (in bits per pixel)

// * pixel-depth--property
// const x = "color resolution" + screen.pixelDepth
// console.log(x);
// * the pixelDepth returns the color resolution in bits per pixel of the user's screen

// * availWidth--property
// const x = "available width " + screen.availWidth;
// console.log(x);
// * the availWidth property, returns the width of the user's screen in pixels,minus the interface features like windows taskbar.

// * height--property
// const x = "total height " + screen.height;
// console.log(x);
// * the height property, returns the total height of the user's screen in pixels.

// * width--property
// const x = "total width " + screen.width;
// console.log(x);
// * the width property, returns the total width of the user's screen in pixels.

// ? BROWSER WINDOW.........

// * loccalStorage
// localStorage.setItem("lastName", "john doe")
// const res = localStorage.getItem("lastName");
// console.log(res);
// * the localStorage/sessionStorage properties allow to save key/pair values in a web browser

// * pagexoffest and pageyoffset
// window.scrollBy(100, 100);
// console.log(window.pageXOffset + window.pageYOffset);
// * the pageXOffset and pageYoffset returns the pixels the current doucmuent has been scrolled from the upper left corner of the window,horrizontally and vertically.

// * blur()
// let myWindow = window.open("", "", "width=200,height=100");
// myWindow.blur();
// myWindow.document.write('<p>im a new window</p>');
// * the blur method removes focus from the current window;

// * atob()
// let str = "Hello world"
// let enc = window.btoa(str);
// let dec = window.atob(enc);
// console.log(enc);
// let res = `encoded string :${enc} \n decoded string : ${dec}`
// console.log(res);
// * the atob method decodes a base-64 encoded string.this method decodes a string of data which has been encoded by the btoa() method.

// * btoa() method
// let str = "ISUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E9";
// let enc = window.btoa(str)
//  let dec = window.atob(enc);
// console.log(enc);
// console.log(dec);

// * the btoa method encodes a string in base-64;

// * clearInterval();
// let myVar = setInterval(myTimer, 6000);

// function myTimer() {
//   let d = new Date();
//   let t = d.toLocaleTimeString();
//   document.getElementById("demo").innerHTML = t;
// }

// function stopFunction() {
//   clearInterval(myVar);
// }
// * the clearInterval method clears a timer set with the setInterval method, the Id value returned by the setInterval is used as parameter for the clearInterval() method;

// * confirm();
// confirm("press a button")
// * the confirm method displays a dialogue box with a specified button along with an okay and a cancel button.

// * getComputedStyle()
// const element = document.getElementById("myBtn");
// const CssProp = window
//   .getComputedStyle(element, null)
//   .getPropertyValue("color");
// console.log(CssProp);
// * the getComputedStyle() method gets all the actual (computed) CSS property and values of the specified element;

// * setInterval()
// setInterval(() => alert("hello world"), 3000);
// * the setInterval method calls a function or evaluates an expression at specified intervals (in miliseconds);

// * setTimeout()
// setTimeout(() => alert("hello world"), 3000);
// * the setInterval method calls a function or evaluates an expression at specified intervals (in miliseconds);

// ? THE DOCUMENT OBJECT ................

// * baseURI
// const x = document.baseURI;
// console.log(x);
// the baseURI returns the base uri of the html document. this property is read only.

// * anchors;
// const x = document.anchors;
// console.log(x);
// * the anchors collection returns a collection of all <a></a> elements iin the documentr that have a name attribute;

// * body;
// document.body.style.backgroundColor = "black"
// * the body property sets or returns the document's body;

// * cookie;
// const x = document.cookie;
// console.log(x);
// * the cookie property sets or returns all name/value pairs of cookies in the current document.

// * characterSet ;
// const x = document.characterSet;
// console.log(x);
// * the characterSet property, returns the character encoding of the document.

// * createAttribute;
// let H1 = document.getElementsByTagName("h1")[0];
// let att = document.createAttribute("class");
// att.value = "democlass"
// H1.setAttributeNode(att);
// * the createAttribute method creates an attribute with specified name,and returns the attribute as attr object;

// * createElement;
// const btn = document.createElement("button");
// btn.innerHTML = "Click me";
// let att = document.createAttribute("id")
// att.value="myBtn2"
// btn.setAttributeNode(att)
// document.body.appendChild(btn);
// * the createElement method creates an element node with the specified name;

// * createDocumentFragment()
// const d = document.createDocumentFragment();
// d.appendChild(document.getElementsByTagName("LI")[0]);
// d.childNodes[0].childNodes[0].nodeValue = "milk";
// document.getElementsByTagName("UL")[0].appendChild(d);
// * the createDocumentFragment method creates an imaginary node object,with all the properties and methods of the node object;

// * createTextNode()
// const h = document.createElement("h1");
// const t = document.createTextNode("hello world!")
// h.appendChild(t)
// console.log(h);
// * the createTextNode method create a text node with the specified text

// * domain
// const x = document.domain;
// console.log(x);
// * the domain method gets the name of the server that loaded the current document.

// * documentURI
// const x = document.documentURI;
// console.log(x);
// * the documentURI,sets or returns the location of a document,if the document was created by the DocumentImplementation object,or if it is undefined it returns null;

// * lastModified;
// const x = document.lastModified;
// console.log(x);
// * the lastModified method gets and returns the date the current document was last modified;

// * addEventListener;
// document.addEventListener("mousemove", () =>
//   document.write("<h1>hello world</h1>")
// );

// * the addEventListener method, adds an event to the document yet,only if the evenLisnter has been performed.

// * title
// const x = document.title;
// console.log(x);
// * the title property, returns the title of the current document.

// ? HISTORY OBJECT ..............................

// * length
// const x = history.length;
// console.log(x);
// * the length property, returns the number of URLs in the history list of the current browser window;

// * forward()
// function goForward() {
//     window.history.forward()
// }
// * the forward method loads the next URL in the history list.

// * back()
// function goBack() {
//   window.history.back();
// }
// * the forward method loads the previous URL in the history list.

// * go()
// function goBack() {
//   window.history.go(-2);
// }
// * the forward method loads a specific URL in the history list.

// ? NAVIGATOR OBJECT ......................

// * appCodeName;
// const x = "browser code name : " + navigator.appCodeName;
// console.log(x);
// * the appCodeName returns the code name of the browser.

// * appVerion;
// const x = "browser app version : " + navigator.appVersion;
// console.log(x);
// * the appVerion returns the version information about the browser.

// * Geolocation;
// navigator.geolocation.getCurrentPosition(showPosition);
// function showPosition(position) {
//   console.log(position);
// }
// showPosition();
// * the geolocation property returns a geolocation object that can be used to locate the user's position.

// * appName
// const x = "browser name : " + navigator.appName;
// console.log(x);
// * the appName returns the name information about the browser.

// * cookieEnabled;
// const x = "cookie enabled : " + navigator.cookieEnabled
// console.log(x);
// * the cookieEnabled property returns a Boolaen value whether cookies are enabled in the browser.

// * language;
// const x = "browser name : " + navigator.language;
// console.log(x);
// * the language property, returns the language version of the browser.

// * online
// const x = "browser online : " + navigator.onLine
// console.log(x);
// * online property,returns a Boolean value whether the browser is online or not.

// * userAgent;
// const x = "browser agent header sent : " + navigator.userAgent;
// console.log(x);
// * the userAgent property, returns the user-agent header sent by the browser to the server;

// * product;
// const x = "browser engine name : " + navigator.product;
// console.log(x);
// * the product property, returns the engine (product) name of the browser.

// * platform;
// const x = "browser platform : " + navigator.platform;
// console.log(x);
// * the platform property, returns for which platform the browser is compiled.

// ? LOCATION OBJECT ....................

// * hash;
// const x = location.hash;
// console.log(x);
// * the hash property, returns the anchore part of a URL,including the hash sign.

// * hostName;
// const x = location.hostname;
// console.log(x);
// * the hostname property, returns the hostname of a URL.

// * origin;
// const x = location.origin;
// console.log(x);
// * the origin property, returns the protocol,hostname and port number of a URL.

// * host;
// const x = location.host;
// console.log(x);
// * the host property, returns or set the hostname and posrt of a URL.

// * HREF
// const x = location.href;
// console.log(x);
// * the href property, returns the entire URL of the current page.

// * pathName;
// const x = location.pathname;
// console.log(x);
// * the pathname property, returns or set the pathname of a URL.

// * port;
// const x = location.port;
// console.log(x);
// * the property, returns or set the port number the server uses for a URL.

// reload
// location.reload
// * the reload property reloads the current document.

// ? HTML DOM EVENTS....................

// * onabort()
// onabort();
// * the abort event occurs when the loading of an audio/video has been aborted,and not because of an error.

// * animationEnd
// animationEnd()
// * the animationend event occurs when a CSS animation has competed

// * animationStart;
// animationStart
// * the animationstart event occurs when a CSS animation has started to play.

// * afterPrint
// onafterprint
// * the afterPrint event occurs when a page has started printing or if the print dialogue box has been closed

// * animationIteration
// animationIteration
// * the animationIteration event occurs when a CSS animation is repeated.

// * beforeprint;
// onbeforeprint;
// * the onbeforeprint event occurs when a page is about to be printed (before the print dialogue box appears);

// * beforeunload;
// onbeforeunload;
// * the onbeforeunload event occurs when the document is about to be unloaded;

// * can play;
// oncanplay;
// * the oncanplay event occurs when the browser can start playing a specified audio/video (when it has buffered enough to begin)

// * change
// onchange
// * the onchange event occurs when the value of an element has been changed;

// * contextmenu
// oncontextmenu
// * the oncontextmenu event occurs when the user right-clicks on an element.

// * blur;
// onblur;
// * the onblur event occurs when an object losses focus.the onblur events is most often used with form validation code (e.g when the user leaves a form field);

// * canplayThrough
// oncanplaythrough;
// * the oncanplaythrough event occurs when the browser estimates it can play through the specified media without having to stop for buffering

// * click
// onclick;
// * the onclick event occurs when the user clicks on element(mostly some functions are attached to this and its commonly used).

// * copy;
// oncopy;
// * the oncopy event occurs when the user copies the content of an element;

// * cut
// oncut;
// * the oncut event occurs when a user cuts the content of an element;

// * drag
// ondrag;
// * the ondrag event occurs when an element or text is beign dragged;

// * dragEnter;
// ondragenter;
// * the ondrag event occurs when a dragable element or text enters a valid target

// * dragover;
// ondragover;
// * the ondrag event occurs when a dragable element or text is beign dragged over a valid drop target.

// * doubleclick;
// ondblclick;
// * the ondouble click event occurs when a user doubleclicks on an element.

// * dragend;
// ondragend;
// * the ondragend event occurs when a user has finished dragging an element or text-selection.

// * ondragleave;
// ondragleave;
// * the ondragleave event occurs when an element or text selection leaves a valid drop target.

// * ondragstart;
// ondragstart;
// * the ondragstart event occurs when the user starts to drag an element or text selection.

// * drop;
// ondrop;
// * the ondrop event occurs when a draggable element or text selection  is dropped on a valid drop target.

// * ended;
// onended;
// * the onended event occurs when the audio/video has reached the end.

// * focus;
// onfocus;
// * the onfocus event occurs when an element gets focus,the onfocus event is most often used with input,select,a.

// * focusout
// onfocusout;
// * the onfocus event occurs when an element is about to loose focus.

// * durationChange
// ondurationchange;
// * the ondurationchange event occurs when the duration of the audio/video is cahnged.

// * error;
// onerror;
// * the onerror event occurs when loading an external file (e,g document or an image).

// * focusin;
// onfocusin;
// * the onfocus event occurs when an element is about to get focus.

// * input;
// oninput;
// * the oninput event occurs when an element gets user input.this event occurs when the value of an input or textarea is changed.

// * keydown;
// onkeydown;
// * the onkeydown event occurs when the user is pressing a key (on the keyboard);

// * keyup;
// onkeydown;
// * the onkeyup event occurs when the user releases a key (on the keyboard);

// * invalid
// oninvalid;
// * the oninvalid event occurs when a submitable input is invalid;

// * keypress;
// onkeydown;
// * the onkeypress event occurs when the user presses a key (on the keyboard);

// * load;
// onload;
// * the onload event occurs when an object has been loaded

// * loadeddata
// onloadeddata;
// * the onloadeddata event occurs when data for the current frame is loaded,but ni=ot enough data to play next frame of the specified auido/video.

// * loadstart;
// onloadstart;
// * the onloadstart event occurs when the browser starts looking for a specified video.This is when the loading process starts.

// * mousedown;
// onmousedown;
// * the onmousedown event occurs when a user presses a mouse button over an element.

// * mouseleave
// onmouseleave;
// * the onmouseleave event occurs when the cursor of the mouse is moved out of an element.

// * loadmetadata;
// onloadedmetadata;
//  * the onloadedmetadata event occurs when meta data for the specified auido/video has been loaded.

// * message;
// onmessage;
// * the onmessage event occurs when a message is recieved through an event source.

// * mosueenter
// onmouseenter;
// * the onmouseenter event occurs when the mouse pointer is moved onto an element.

// * mousemove;
// onmousemove;
// * the onmousemove event occurs when the mouse pointer is moving while it's over an element.

// * mouseover
// onmouseover;
// * the onmousemove event occurs when the mouse pointer is moving over an element.

// * mouseup
// onmouseup;
// * the onmouseup event occurs when a user releases a mouse button over an element.

// * online;
// ononline;
// * the ononline event occurs when the browser starts to work online.

// * pagehide;
// onpagehide;
// * the onpagehide event occurs when the user is navigating away from a webpage.

// * mouseout
// onmouseout;
// * the onmouseout event occurs when the mouse pointer is moved out of  an element.

// * offline
// onoffline;
// * the offline event occurs when the browser starts to work offline.

// open;
// onopen;
// * the onopen event occurs when a connection with an event source is opened.

// * pageshow;
// onpageshow;
// * the onpageshow event occurs when the user is navigates to  a webpage.

// * paste
// onpaste;
// * the onpaste event occurs when a user paste some content in an element.

// * play;
// onplay;
// * the onplay event occurs when the video/audio has been started or is no longer paued.

// * progress
// onprogress;
// * the onprogress event occurs when the browser is downloading the specified audio/video.

// * resize;
// onresize;
// * the onresize event occurs when the browser windo has been resized.

// * pause;
// onpause;
// * the onpause event occurs when the auido/video is paused either by the user or programtically.

// playing
// onplaying;
// * the onplaying event occurs when the video is playing after beign stopped for uffering or stopped.

// * ratechange
// onratechange;
// * the onratechange event occurs when the playing speed of the auido is changed

// * reset;
// onreset;
// * the onreset event occurs when a form is reset

// * scroll
// onscroll;
// * the onscroll event occurs when an element scrollbar is beign scrolled.

// * seeking;
// onseeking;
// * the onseeking event occurs when the user starts moving/skipping to a new position in the audio/video.

// * submit;
// onsubmit;
// * the onsubmit event occurs when a form is submitted

// * seeked;
// onseeked;
//  * the onseeked event occurs when the user has moving/skipping to a new position in the audio/video.

// * select;
// onselect;
// * the onselect event occurs when sometext has been sumtiiedd

// * stalled;
// onstalled;
// * the onstalled event occurs when the browser trys to get metada , buts info is not available.

// * suspend
// onsuspend;
//  * the onsuspend event occurs when the browser is intentionally not getting media dats

// * timeupdate
// ontimeupdate;
// * the ontimeupdate event occurs when the playing position of an auido/video has changed.

// * touchhcancel;
// ontouchcancel;
// * the ontouchcancel event occurs when the touch event gets interrupted.

// * touchmove
// ontouchmove;
// * the ontouchmove event occurs when the user moves the finger accross the screen

// * transitionend;
// ontransitionend;
// * the ontransitionend event occurs when a css transition has completed.

// * toggle;
// ontoggle;
// * the ontoggle event occurs when opens or closed the <details> element.

// * touchend;
// ontouchend;
// * the ontouchend event occurs when the user removes the finger from an element.

// * touchstart;
// ontouchstart;
// * the ontouchstart event occurs when the user touches an element.

// * unload;
// onunload;
// * the onunload event occurs once a page has unloaded (or the browser window has been closed).

// * volumechanged
// onvolumechange;
// * the onvolumechange event occurs when the volume of the auido/video is adjusted each time.

// * wheel;
// onwheel;
// * the onwheel event occurs when the mouse wheel is rolled or down over an element.

// * waiting
// onwaiting;
// * the onwaiting event occurs when the video stops because its need to buffer the next frame.

// function moveRight() {
//   const ball = document.getElementById("ball");
//   ball.classList.add("right");
//   ball.style.translate = ("Y",20)
// }

// function moveDown() {
//   const ball = document.getElementById("ball");
//   ball.classList.add("down");
// }
