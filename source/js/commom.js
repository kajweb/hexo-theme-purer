function randomString(len) {
	len = len || 32;
/****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    
	var maxPos = $chars.length;
	var pwd = '';
	for (i = 0; i < len; i++) {
		pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return pwd;
}

function trackUnload( tracker ){
	return ()=>{
		window.onpageshow = ()=>{
			console.log( "[track] ${tracker.id} 页面返回" )
			getTrack();
		}
		AV.Cloud.run( 'trackUnload', tracker ).then( tracked=>{
			console.log( `[track] ${tracker.id} 结束访问 ${tracked.timer}s` )
		}).catch(()=>{
			console.log( "退出服务异常" )
		})
	}
}

function getFinger(){
	return FingerprintJS.load().then( fp =>
		fp.get().then(result => {
			const visitorId = result.visitorId;
			return visitorId;
		})
	)
}

function getTrack(){
	let blogTrack = sessionStorage.getItem( 'blogTrack' );
	let blogTrackId = sessionStorage.getItem( 'blogTrackId' );
	if( !blogTrack ){
		blogTrack = 1;
		blogTrackId = randomString();
		sessionStorage.setItem( 'blogTrackId', blogTrackId );
	} else {
		blogTrack = parseInt(blogTrack) + 1;
	}
	sessionStorage.setItem( 'blogTrack', blogTrack );

	let params = {
		host: window.location.host,
		url: window.location.pathname,
		title: document.title,
		referrer: document.referrer,
		blogTrack,
		blogTrackId
	}

	getFinger().then(visitorId=>{
		params.visitorId = visitorId;
		return AV.Cloud.run( 'recorder', params ).then( tracker=>{
			console.log( `[track] ${tracker.id} 开始访问` )
			window.onbeforeunload = trackUnload(tracker);
		}).catch(()=>{
			console.log( "track服务异常" )
		})
	}).catch(e=>{
		console.error( "获得指纹失败" )
		return AV.Cloud.run( 'recorder', params ).then( tracker=>{
			console.log( `[track] ${tracker.id} 开始访问` )
			window.onbeforeunload = trackUnload(tracker);
		}).catch(()=>{
			console.log( "track服务异常" )
		})
	})

}