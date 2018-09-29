// 左右轮播
function lrban(img,dot,w,lbt,rbt,hot,ban,time){
		let t;
		let next=0;
		let now=0;
		img[0].style.left=0;
		dot[0].classList.add(hot)
		for (let i = 0; i<dot.length; i++) {
			dot[i].onclick=function(){
				for (let j = 0; j <dot.length; j++) {
				img[j].style.left=-w+'px'
				dot[j].classList.remove(hot)
				}
				img[i].style.left=0;
				dot[i].classList.add(hot)
				next=i
				now=i
			}
		}
		t=setInterval(mo,time)
		function mo(){
			next++;
			if (next==img.length) {
				// next=img.length-1;
				next=0;
				// return;

			}
			img[now].style.left=0;
			img[next].style.left=w+'px'
			animate(img[now],{left:-w},function(){
				dot[now].classList.remove(hot)
			});
			animate(img[next],{left:0},function(){
				for (let j=0;j<dot.length ;j++) {
				dot[j].classList.remove(hot)
				}
				dot[next].classList.add(hot)
			});
			now=next;
		}
		ban.onmouseover=function(){
			clearInterval(t)
		}
		ban.onmouseout=function(){
			t=setInterval(mo,1200);
		}

		function mol(){
			next--;
			if (next<0) {
				next=img.length-1;
				// next=0;
				// return;

			}
			img[now].style.left=0;
			img[next].style.left=-w+'px'
			animate(img[now],{left:w},function(){
				dot[now].classList.remove(hot)
			});
			animate(img[next],{left:0},function(){
				for (let j=0;j<dot.length ;j++) {
				dot[j].classList.remove(hot)
				}
				dot[next].classList.add(hot)
			});
			now=next;
		}
		rbt.onclick=function(){
			mo();
		}
		lbt.onclick=function(){
			mol();
		}
	}



function anxujiazai(nav,word,su,su1,li,one,two){
	window.onscroll=function () {
		let bodytop=document.body.scrollTop||document.documentElement.scrollTop;
		if (bodytop>0) {
			nav.style.background='#fff'
			word.forEach((val,index)=>{
				if(index!=0){
					val.style.color='#333'
				} 
			})
		}
		else {
			nav.style.background=' rgba(0,0,0,0.15)'
			word.forEach((val,index)=>{
				if(index!=0){
					val.style.color='#fff'
				} 
			})
		}
		// console.log(su.offsetTop)
		if (bodytop+window.innerHeight/2>su.offsetTop-150) {
			su.style.opacity=1;
			su.style.transform='translateY(0px)'
		}
		if (bodytop+window.innerHeight/2>su1.offsetTop-150) {
			su1.style.opacity=1;
			su1.style.transform='translateY(0px)'
		}
		li.forEach((val1)=>{
			if (bodytop+window.innerHeight/2>val1.offsetTop-150) {
				val1.style.opacity=1;
				val1.style.transform='translateX(0px)'
			}
		})
		if (bodytop+window.innerHeight/2>one.offsetTop-120) {
			one.style.opacity=1;
			one.style.transform='translateY(0px)'
		}
		if (bodytop+window.innerHeight/2>su1.offsetTop-100) {
			two.style.opacity=1;
			two.style.transform='translateY(0px)'
		}
	}
}


// function py(lb,rb,box,wid){
// 	let nu=0;
// 	rb.onclick=function(){
// 		nu++;
// 		if (nu==4) {
// 			nu=3;
// 			return;
// 		}
// 		box.style.transform='translateX('+(-wid*nu)+'px)'
// 	}
// 	lb.onclick=function(){
// 		nu--;
// 		if (nu==-1) {
// 			nu=0;
// 			return;
// 		}
// 		box.style.transform='translateX('+(-wid*nu)+'px)'
// 	}

// }