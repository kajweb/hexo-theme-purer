---
title: 关于
description: This page will show you everything you want to know about me.
layout: about
comments: false
sidebar: custom
---
Committed to Website Construction and Front-End User Experience Design.  

Like New Things, Pay Attention to Front-End Dynamics, and Pursue new Technologies;  

Like Products, Design, and Coding. 

```javascript
{
	name: 'kajweb'
	gender: '男',
	profession: 'Web Developer & Designer',
	address: "People's Republic of China",
	github: 'https://github.com/kajweb',
	blog: 'http://iwwee.com',
	email: 'kajweb@163.com',
	email: 'kajweb.me@gmail.com',

	skills: [
		['Html', 'Javascript',  'CSS'],
		['Vue', 'PHP', 'Python'],
		['Webpack', 'Gulp'],
		['Less','Sass'],
		['Git', 'SVN']
	],

	devTools: [
		['Sublime Text', 'Visual Studio Code', 'Notepad++'],
		['Navicat', 'XAMPP', 'Sequelpro'],
		['Chrome DevTools', 'Fiddler'],
		['XSwitch', 'CORS Toggle'],
		['Mac OS X', 'Windows 7'],
		['Opera', 'Chrome']
	]  
}
```

<script type="text/javascript">
	function addLoadEvent(func) {
	    var oldonload = window.onload;
	    if (typeof window.onload != 'function') {
	        window.onload = func;
	    } else {
	        window.onload = function() {
	            oldonload();
	            func();
	        }
	    }
	}

	addLoadEvent( ()=>{getBuildTime()} )

	// 2020-10-09 获得网页自动生成的时间
	function getBuildTime( path ) {
		if( !path ){
			path = "../build.txt?now=" + Date.parse(new Date())/1000;
		}
	    $.get( path, (e)=>{
	        console.log("获得生成时间成功")
	        let build = document.createElement("div");
	        let hr = document.createElement("hr");
	        let buildTime = document.createElement("span");
	        let TextNode = document.createTextNode("This Website Was Generated On ");
	        buildTime.innerText = e;
	        build.append( TextNode, buildTime );
	        $(".article-body").append( hr, build )
	    }).error(e=>{
	        console.log("获得生成时间失败")
	        let hr = document.createElement("hr");
	        let build = document.createElement("div");
	        let TextNode = document.createTextNode("Failed To Get Build Time.");
	        build.append( TextNode );
	        $(".article-body").append( hr, build )
	    });
	}
</script>