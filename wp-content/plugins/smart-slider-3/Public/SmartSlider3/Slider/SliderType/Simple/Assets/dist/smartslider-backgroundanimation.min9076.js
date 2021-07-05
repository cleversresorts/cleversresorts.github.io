(function(){var t=this;t.N2_=t.N2_||{r:[],d:[]},t.N2R=t.N2R||function(){t.N2_.r.push(arguments)},t.N2D=t.N2D||function(){t.N2_.d.push(arguments)}}).call(window),N2D("SmartSliderFrontendBackgroundAnimation",["SmartSliderMainAnimationSimple"],function(a,t){function e(t,e,i){this._currentBackgroundAnimation=!1,N2Classes.SmartSliderMainAnimationSimple.prototype.constructor.call(this,t,e),this.isReverseAllowed=!1,this.bgAnimationElement=this.sliderElement.find(".n2-ss-background-animation"),0<this.slider.parameters.perspective&&NextendTween.set(this.bgAnimationElement,{perspective:this.slider.parameters.perspective}),this.backgroundAnimations=a.extend({global:0,color:"RGBA(51,51,51,1)",speed:"normal"},i),this.backgrounds=t.backgrounds.getBackgroundImages(),t.backgrounds.hack()}return((e.prototype=Object.create(N2Classes.SmartSliderMainAnimationSimple.prototype)).constructor=e).prototype.getBackgroundAnimation=function(t,e){if(e.hasBackgroundVideo()||t.hasBackgroundVideo())return!1;var i=this.backgroundAnimations.global,n=this.backgroundAnimations.speed;if(e.backgroundAnimation){var o=e.backgroundAnimation;i=o.animation,n=o.speed}return!!i&&[i[Math.floor(Math.random()*i.length)],n]},e.prototype._initAnimation=function(t,e,i){this._currentBackgroundAnimation=!1;var n=t.background,o=e.background;if(n&&o){var r=this.getBackgroundAnimation(t,e);if(!1!==r){var s=1;switch(r[1]){case"superSlow10":s=10;break;case"superSlow":s=3;break;case"slow":s=1.5;break;case"fast":s=.75;break;case"superFast":s=.5}return this._currentBackgroundAnimation=new N2Classes["SmartSliderBackgroundAnimation"+r[0].type](this,n.element,o.element,r[0],s,i),N2Classes.SmartSliderMainAnimationSimple.prototype._initAnimation.apply(this,arguments),this._currentBackgroundAnimation.postSetup(),void this.timeline.set(a("<div></div>"),{opacity:1,onComplete:function(){this._currentBackgroundAnimation&&(this._currentBackgroundAnimation.ended(),this._currentBackgroundAnimation=!1)}.bind(this)})}}N2Classes.SmartSliderMainAnimationSimple.prototype._initAnimation.apply(this,arguments)},e.prototype.onChangeToComplete=function(t,e){this._currentBackgroundAnimation&&(this._currentBackgroundAnimation.ended(),this._currentBackgroundAnimation=!1),N2Classes.SmartSliderMainAnimationSimple.prototype.onChangeToComplete.apply(this,arguments)},e.prototype.onReverseChangeToComplete=function(t,e,i){this._currentBackgroundAnimation&&(this._currentBackgroundAnimation.revertEnded(),this._currentBackgroundAnimation=!1),N2Classes.SmartSliderMainAnimationSimple.prototype.onReverseChangeToComplete.apply(this,arguments)},e.prototype.getExtraDelay=function(){return this._currentBackgroundAnimation?this._currentBackgroundAnimation.getExtraDelay():0},e.prototype.hasBackgroundAnimation=function(){return this._currentBackgroundAnimation},e}),N2D("SmartSliderBackgroundAnimationAbstract",function(t,e){function i(t,e,i,n,o,r){this.durationMultiplier=o,this.original={currentImage:e,nextImage:i},this.animationProperties=n,this.reversed=r,this.sliderBackgroundAnimation=t,this.timeline=t.timeline,this.containerElement=t.bgAnimationElement,this.shiftedBackgroundAnimation=t.parameters.shiftedBackgroundAnimation,this.clonedImages={}}return i.prototype.postSetup=function(){},i.prototype.ended=function(){},i.prototype.revertEnded=function(){},i.prototype.placeNextImage=function(){this.clonedImages.nextImage=this.original.nextImage.clone().css({position:"absolute",top:"0",left:"0"}),NextendTween.set(this.clonedImages.nextImage,{transform:"none"}),this.containerElement.append(this.clonedImages.nextImage)},i.prototype.placeCurrentImage=function(){this.clonedImages.currentImage=this.original.currentImage.clone().css({position:"absolute",top:"0",left:"0"}),NextendTween.set(this.clonedImages.currentImage,{transform:"none"}),this.containerElement.append(this.clonedImages.currentImage)},i.prototype.hideOriginals=function(){this.original.currentImage.css("opacity","0"),this.original.nextImage.css("opacity","0")},i.prototype.resetAll=function(){this.original.currentImage.css("opacity","1"),this.original.nextImage.css("opacity","1"),this.containerElement.html("")},i.prototype.getExtraDelay=function(){return 0},i}),N2D("SmartSliderBackgroundAnimationCubic",["SmartSliderBackgroundAnimationTiled"],function(c,e){function t(){n2const.isFirefox&&c("html").addClass("n2-firefox"),N2Classes.SmartSliderBackgroundAnimationTiled.prototype.constructor.apply(this,arguments)}return((t.prototype=Object.create(N2Classes.SmartSliderBackgroundAnimationTiled.prototype)).constructor=t).prototype.setup=function(){var t=c.extend(!0,{columns:1,rows:1,fullCube:!0,tiles:{delay:.2,sequence:"Parallel"},depth:50,main:{side:"Left",duration:.5,ease:"easeInOutCubic",direction:"horizontal",real3D:!0},pre:[],post:[]},this.animationProperties);t.fullCube=!0,this.reversed&&(t.invert!==e&&c.extend(!0,t.main,t.invert),t.invertTiles!==e&&c.extend(t.tiles,t.invertTiles)),N2Classes.SmartSliderBackgroundAnimationTiled.prototype.setup.call(this,t)},t.prototype.renderTile=function(t,e,i,n,o,r){var s=n.depth;switch(s){case"width":s=e;break;case"height":s=i}switch(n.main.side){case"Top":case"Bottom":s=i;break;case"Left":case"Right":s=e}n.main.real3D&&NextendTween.set(t.get(0),{transformStyle:"preserve-3d"});var a=c('<div class="cuboid"></div>').css({position:"absolute",left:"0",top:"0",width:"100%",height:"100%"}).appendTo(t);NextendTween.set(a.get(0),{transformStyle:"preserve-3d",z:-s/2});var l=0;"horizontal"===n.main.direction&&(l=180);var d=this.getSide(a,e,i,0,0,-s/2,180,0,l),p={Back:d,BackInvert:d};return!n.fullCube&&"vertical"!==n.main.direction||(p.Bottom=this.getSide(a,e,s,0,i-s/2,0,-90,0,0),p.Top=this.getSide(a,e,s,0,-s/2,0,90,0,0)),p.Front=this.getSide(a,e,i,0,0,s/2,0,0,0),!n.fullCube&&"horizontal"!==n.main.direction||(p.Left=this.getSide(a,s,i,-s/2,0,0,0,-90,0),p.Right=this.getSide(a,s,i,e-s/2,0,0,0,90,0)),p.Front.append(this.clonedCurrent().clone().css({position:"absolute",top:-r+"px",left:-o+"px"})),p[n.main.side].append(this.clonedNext().clone().css({position:"absolute",top:-r+"px",left:-o+"px"})),a},t.prototype.getSide=function(t,e,i,n,o,r,s,a,l){var d=c('<div class="n2-3d-side"></div>').css({width:e+"px",height:i+"px"}).appendTo(t);return NextendTween.set(d.get(0),{x:n,y:o,z:r,rotationX:s,rotationY:a,rotationZ:l,backfaceVisibility:"hidden"}),d},t.prototype.addAnimation=function(t,e){var i=t.duration;delete t.duration,this.timeline.to(e,i*this.durationMultiplier,t)},t.prototype.transform=function(t,e,i){for(var n=0;n<t.pre.length;n++){var o=(r=t.pre[n]).duration*this.durationMultiplier;this.timeline.to(e,o,r,i),i+=o}this["transform"+t.main.side](t.main,e,i),i+=t.main.duration;for(n=0;n<t.post.length;n++){var r;o=(r=t.post[n]).duration*this.durationMultiplier;this.timeline.to(e,o,r,i),i+=o}},t.prototype.transformLeft=function(t,e,i){this._transform(t,e,i,0,90,0)},t.prototype.transformRight=function(t,e,i){this._transform(t,e,i,0,-90,0)},t.prototype.transformTop=function(t,e,i){this._transform(t,e,i,-90,0,0)},t.prototype.transformBottom=function(t,e,i){this._transform(t,e,i,90,0,0)},t.prototype.transformBack=function(t,e,i){"horizontal"==t.direction?this._transform(t,e,i,0,180,0):this._transform(t,e,i,180,0,0)},t.prototype.transformBackInvert=function(t,e,i){"horizontal"==t.direction?this._transform(t,e,i,0,-180,0):this._transform(t,e,i,-180,0,0)},t.prototype._transform=function(t,e,i,n,o,r){this.timeline.to(e,t.duration*this.durationMultiplier,{rotationX:n,rotationY:o,rotationZ:r,ease:t.ease},i)},t}),N2D("SmartSliderBackgroundAnimationExplode",["SmartSliderBackgroundAnimationTiled"],function(a,t){function e(){N2Classes.SmartSliderBackgroundAnimationTiled.prototype.constructor.apply(this,arguments)}return((e.prototype=Object.create(N2Classes.SmartSliderBackgroundAnimationTiled.prototype)).constructor=e).prototype.setup=function(){var t=a.extend(!0,{columns:1,rows:1,reverse:!1,tiles:{delay:0,sequence:"Parallel"},main:{duration:.5,zIndex:2,current:{ease:"easeInOutCubic"}}},this.animationProperties);this.placeNextImage(),this.clonedImages.nextImage.css({overflow:"hidden",width:"100%",height:"100%"}),N2Classes.SmartSliderBackgroundAnimationTiled.prototype.setup.call(this,t)},e.prototype.renderTile=function(t,e,i,n,o,r){var s=a("<div></div>").css({position:"absolute",left:"0",top:"0",width:e+"px",height:i+"px",overflow:"hidden",zIndex:String(n.main.zIndex)}).append(this.clonedCurrent().clone().css({position:"absolute",top:-r+"px",left:-o+"px"})).appendTo(t);return NextendTween.set(t.get(0),{transformPerspective:1e3,transformStyle:"preserve-3d"}),{current:s,tile:t}},e.prototype.transform=function(t,e,i){var n=a.extend(!0,{},t.main.current);n.rotationX=90*(3*Math.random()-1),n.rotationY=90*(3*Math.random()-1),n.rotationZ=90*(3*Math.random()-1),this.timeline.to(e.tile,t.main.duration*this.durationMultiplier,n,i)},e}),N2D("SmartSliderBackgroundAnimationExplodeReversed",["SmartSliderBackgroundAnimationTiled"],function(a,t){function e(){N2Classes.SmartSliderBackgroundAnimationTiled.prototype.constructor.apply(this,arguments)}return((e.prototype=Object.create(N2Classes.SmartSliderBackgroundAnimationTiled.prototype)).constructor=e).prototype.setup=function(){var t=a.extend(!0,{columns:1,rows:1,reverse:!1,tiles:{delay:0,sequence:"Parallel"},main:{duration:.5,zIndex:2,current:{ease:"easeInOutCubic"}}},this.animationProperties);this.placeCurrentImage(),this.clonedImages.currentImage.css({overflow:"hidden",width:"100%",height:"100%"}),N2Classes.SmartSliderBackgroundAnimationTiled.prototype.setup.call(this,t)},e.prototype.renderTile=function(t,e,i,n,o,r){var s=a("<div></div>").css({position:"absolute",left:"0",top:"0",width:e+"px",height:i+"px",overflow:"hidden",zIndex:String(n.main.zIndex)}).append(this.clonedNext().clone().css({position:"absolute",top:-r+"px",left:-o+"px"})).appendTo(t);return NextendTween.set(t.get(0),{transformPerspective:1e3,transformStyle:"preserve-3d"}),{next:s,tile:t}},e.prototype.transform=function(t,e,i){var n=a.extend(!0,{},t.main.current);n.rotationX=90*(3*Math.random()-1),n.rotationY=90*(3*Math.random()-1),n.rotationZ=30*(3*Math.random()-1),this.timeline.from(e.tile,t.main.duration*this.durationMultiplier,n,i)},e}),N2D("SmartSliderBackgroundAnimationFlat",["SmartSliderBackgroundAnimationTiled"],function(l,e){function t(){N2Classes.SmartSliderBackgroundAnimationTiled.prototype.constructor.apply(this,arguments)}return((t.prototype=Object.create(N2Classes.SmartSliderBackgroundAnimationTiled.prototype)).constructor=t).prototype.setup=function(){var t=l.extend(!0,{columns:1,rows:1,tiles:{cropOuter:!1,crop:!0,delay:0,sequence:"Parallel"},main:{type:"next",duration:.5,real3D:!0,zIndex:1,current:{ease:"easeInOutCubic"},next:{ease:"easeInOutCubic"}}},this.animationProperties);this.reversed&&(t.invert!==e&&l.extend(!0,t.main,t.invert),t.invertTiles!==e&&l.extend(t.tiles,t.invertTiles)),N2Classes.SmartSliderBackgroundAnimationTiled.prototype.setup.call(this,t),t.tiles.cropOuter&&this.container.css("overflow","hidden")},t.prototype.renderTile=function(t,e,i,n,o,r){n.tiles.crop&&t.css("overflow","hidden");var s=l("<div></div>").css({position:"absolute",left:"0",top:"0",width:e+"px",height:i+"px",overflow:"hidden",zIndex:String(n.main.zIndex)}).append(this.clonedCurrent().clone().css({position:"absolute",top:-r+"px",left:-o+"px"})).appendTo(t),a=l("<div></div>").css({position:"absolute",left:"0",top:"0",width:e+"px",height:i+"px",overflow:"hidden",zIndex:"1"}).append(this.clonedNext().clone().css({position:"absolute",top:-r+"px",left:-o+"px"})).appendTo(t);return n.main.real3D&&(NextendTween.set(t.get(0),{transformStyle:"preserve-3d"}),NextendTween.set(s.get(0),{transformStyle:"preserve-3d"}),NextendTween.set(a.get(0),{transformStyle:"preserve-3d"})),{current:s,next:a}},t.prototype.transform=function(t,e,i){var n=t.main;"current"!=n.type&&"both"!=n.type||this.timeline.to(e.current,n.duration*this.durationMultiplier,n.current,i),"next"!=n.type&&"both"!=n.type||this.timeline.from(e.next,n.duration*this.durationMultiplier,n.next,i)},t}),N2D("SmartSliderBackgroundAnimationSlices",["SmartSliderBackgroundAnimationFluxAbstract"],function(w,A){function t(){N2Classes.SmartSliderBackgroundAnimationFluxAbstract.prototype.constructor.apply(this,arguments),this.setup()}return((t.prototype=Object.create(N2Classes.SmartSliderBackgroundAnimationFluxAbstract.prototype)).constructor=t).prototype.setup=function(){var t=w.extend(!0,{slices:6,direction:"horizontal",isReversed:!1,tiles:{delay:.05,sequence:"normal",duration:.6,stages:[{},{},{}]}},this.animationProperties),e=w("<div></div>").css({position:"absolute",left:"0",top:"0",width:this.w+"px",height:this.h+"px",overflow:"hidden"});this.container=e,NextendTween.set(e.get(0),{force3D:!0,perspective:1e3});var i,n=[];if("horizontal"===t.direction){for(var o=Math.floor(this.h/t.slices),r=this.h-t.slices*o,s=Math.ceil(r/t.slices),a=r,l=0,d=0;d<t.slices;d++){var p=o;0<a&&(p+=i=s<=a?s:a,a-=i),n.push(w('<div class="tile tile-colored-overlay tile-'+d+'"></div>').css({position:"absolute",top:l+"px",left:"0",width:"100%",height:p+"px",zIndex:"1000000"}).appendTo(e)),l+=p}t.tiles.stages[0].x=this.w,t.tiles.stages[1].x=0,t.tiles.stages[2].x=-this.w}else if("vertical"===t.direction){for(var c=Math.floor(this.w/t.slices),u=this.w-t.slices*c,h=Math.ceil(u/t.slices),m=0,g=0;g<t.slices;g++){var f=c;0<u&&(f+=i=h<=u?h:u,u-=i),n.push(w('<div class="tile tile-colored-overlay tile-'+d+'"></div>').css({position:"absolute",top:"0",left:m+"px",width:f+"px",height:"100%",zIndex:"1000000"}).appendTo(e)),m+=f}t.tiles.stages[0].y=this.h,t.tiles.stages[1].y=0,t.tiles.stages[2].y=-this.h}(this.reversed&&!t.isReversed||!this.reversed&&t.isReversed)&&(t.tiles.stages=t.tiles.stages.reverse());var x=w("<div></div>").css({position:"absolute",left:"0",top:"0",width:"100%",height:"100%",overflow:"hidden",zIndex:"99999"}).append(this.clonedCurrent().clone().css({position:"absolute",top:"0",left:"0"})).appendTo(e),v=w("<div></div>").css({position:"absolute",left:"0",top:"0",width:"100%",height:"100%",overflow:"hidden",zIndex:"99999",opacity:"0"}).append(this.clonedNext().clone().css({position:"absolute",top:"0",left:"0"})).appendTo(e),y=this.timeline.totalDuration();switch(t.tiles.sequence){case"FromSide":for(var S=Math.floor(t.slices/2),b=0;b<n.length;b++)this.timeline.fromTo(n[b],t.tiles.duration*this.durationMultiplier,t.tiles.stages[0],t.tiles.stages[1],y+t.tiles.delay*Math.abs(Math.abs(S-b)-S));break;case"FromCenter":for(S=Math.floor(t.slices/2),b=0;b<n.length;b++)this.timeline.fromTo(n[b],t.tiles.duration*this.durationMultiplier,t.tiles.stages[0],t.tiles.stages[1],y+t.tiles.delay*Math.abs(S-b));break;default:for(b=0;b<n.length;b++)this.timeline.fromTo(n[b],t.tiles.duration*this.durationMultiplier,t.tiles.stages[0],t.tiles.stages[1],y+t.tiles.delay*b)}this.timeline.set(x,{display:"none"}),this.timeline.set(v,{opacity:1});var k=this.timeline.totalDuration()+.3;switch(t.tiles.sequence){case"FromSide":for(S=Math.floor(t.slices/2),b=0;b<n.length;b++)this.timeline.to(n[b],t.tiles.duration*this.durationMultiplier,t.tiles.stages[2],k+t.tiles.delay*Math.abs(Math.abs(S-b)-S));break;case"FromCenter":for(S=Math.floor(t.slices/2),b=0;b<n.length;b++)this.timeline.to(n[b],t.tiles.duration*this.durationMultiplier,t.tiles.stages[2],k+t.tiles.delay*Math.abs(S-b));break;default:for(b=0;b<n.length;b++)this.timeline.to(n[b],t.tiles.duration*this.durationMultiplier,t.tiles.stages[2],k+t.tiles.delay*b)}t.nextImage!==A&&this.timeline.fromTo(v,this.timeline.totalDuration()-k+1,t.nextImage[0],t.nextImage[1],k),this.duration=this.timeline.totalDuration()-y,e.appendTo(this.containerElement),this.preSetup()},t}),N2D("SmartSliderBackgroundAnimationSlixes",["SmartSliderBackgroundAnimationTiled"],function(a,t){function e(){N2Classes.SmartSliderBackgroundAnimationTiled.prototype.constructor.apply(this,arguments)}return((e.prototype=Object.create(N2Classes.SmartSliderBackgroundAnimationTiled.prototype)).constructor=e).prototype.setup=function(){var t=a.extend(!0,{columns:2,rows:2,main:{duration:2,zIndex:2}},this.animationProperties);this.placeNextImage(),this.clonedImages.nextImage.css({overflow:"hidden",width:"100%",height:"100%"}),N2Classes.SmartSliderBackgroundAnimationTiled.prototype.setup.call(this,t)},e.prototype.renderTile=function(t,e,i,n,o,r){this.container.css("overflow","hidden");var s=a("<div></div>").css({position:"absolute",left:"0",top:"0",width:e+"px",height:i+"px",overflow:"hidden",zIndex:String(n.main.zIndex)}).append(this.clonedCurrent().clone().css({position:"absolute",top:-r+"px",left:-o+"px"})).appendTo(t);return NextendTween.set(t.get(0),{transformPerspective:1e3,transformStyle:"preserve-3d"}),{current:s,tile:t}},e.prototype.animate=function(t,e,i){this.timeline.to(i[0][0].tile,t.main.duration*this.durationMultiplier,{left:"-50%",ease:"easeInOutCubic"},0),this.timeline.to(i[0][1].tile,t.main.duration*this.durationMultiplier,{left:"-50%",ease:"easeInOutCubic"},.3),this.timeline.to(i[1][0].tile,t.main.duration*this.durationMultiplier,{left:"100%",ease:"easeInOutCubic"},.15),this.timeline.to(i[1][1].tile,t.main.duration*this.durationMultiplier,{left:"100%",ease:"easeInOutCubic"},.45),a("<div></div>").css({position:"absolute",left:"0",top:"0",width:"100%",height:"100%",overflow:"hidden"}).prependTo(this.clonedImages.nextImage.parent()).append(this.clonedImages.nextImage),this.timeline.fromTo(this.clonedImages.nextImage,t.main.duration*this.durationMultiplier,{scale:1.3},{scale:1},.45)},e}),N2D("SmartSliderBackgroundAnimationTiled",["SmartSliderBackgroundAnimationFluxAbstract"],function(k,t){function e(){N2Classes.SmartSliderBackgroundAnimationFluxAbstract.prototype.constructor.apply(this,arguments),this.setup()}return((e.prototype=Object.create(N2Classes.SmartSliderBackgroundAnimationFluxAbstract.prototype)).constructor=e).prototype.setup=function(t){var e=k("<div></div>").css({position:"absolute",left:"0",top:"0",width:this.w+"px",height:this.h+"px"});this.container=e,NextendTween.set(e.get(0),{force3D:!0,perspective:1e3});for(var i=[],n=[],o=t.columns,r=t.rows,s=Math.floor(this.w/o),a=Math.floor(this.h/r),l=this.w-o*s,d=Math.ceil(l/o),p=this.h-r*a,c=Math.ceil(p/r),u=0,h=0;h<o;h++){i[h]=[];var m=s,g=0;if(0<l)m+=v=d<=l?d:l,l-=v;for(var f=p,x=0;x<r;x++){var v,y=a;if(0<f)y+=v=c<=f?c:f,f-=v;var S=k('<div class="tile tile-'+h+"-"+x+'"></div>').css({position:"absolute",top:g+"px",left:u+"px",width:m+"px",height:y+"px",zIndex:String(-Math.abs(h-parseInt(o/2))+o-Math.abs(x-parseInt(r/2)))}).appendTo(e),b=this.renderTile(S,m,y,t,u,g);n.push(b),i[h][x]=b,g+=y}u+=m}e.appendTo(this.containerElement),this.preSetup(),this.animate(t,n,i)},e.prototype.animate=function(t,e,i){this["sequence"+t.tiles.sequence](this.transform.bind(this,t),e,i,t.tiles.delay*this.durationMultiplier)},e.prototype.sequenceParallel=function(t,e){t(e,null)},e.prototype.sequenceRandom=function(t,e,i,n){for(var o=this.timeline.totalDuration(),r=0;r<e.length;r++)t(e[r],o+Math.random()*n)},e.prototype.sequenceForwardCol=function(t,e,i,n){for(var o=this.timeline.totalDuration(),r=0;r<e.length;r++)t(e[r],o+n*r)},e.prototype.sequenceBackwardCol=function(t,e,i,n){for(var o=this.timeline.totalDuration(),r=e.length-1,s=0;s<e.length;s++)t(e[s],o+n*(r-s))},e.prototype.sequenceForwardRow=function(t,e,i,n){for(var o=this.timeline.totalDuration(),r=0,s=0;s<i[0].length;s++)for(var a=0;a<i.length;a++)t(i[a][s],o+n*r),r++},e.prototype.sequenceBackwardRow=function(t,e,i,n){for(var o=this.timeline.totalDuration(),r=e.length-1,s=0;s<i[0].length;s++)for(var a=0;a<i.length;a++)t(i[a][s],o+n*r),r--},e.prototype.sequenceForwardDiagonal=function(t,e,i,n){for(var o=this.timeline.totalDuration(),r=0;r<i[0].length;r++)for(var s=0;s<i.length;s++)t(i[s][r],o+n*(s+r))},e.prototype.sequenceBackwardDiagonal=function(t,e,i,n){for(var o=this.timeline.totalDuration(),r=i[0].length+i.length-2,s=0;s<i[0].length;s++)for(var a=0;a<i.length;a++)t(i[a][s],o+n*(r-a-s))},e}),N2D("SmartSliderBackgroundAnimationTurn",["SmartSliderBackgroundAnimationFluxAbstract"],function(l,t){function e(){N2Classes.SmartSliderBackgroundAnimationFluxAbstract.prototype.constructor.apply(this,arguments);var t=l.extend(!0,{perspective:1.5*this.w,duration:.8,direction:"left"},this.animationProperties);this.reversed&&("left"==t.direction?t.direction="right":t.direction="left");var e=parseInt(this.w/2);this.clonedCurrent().css({position:"absolute",top:"0",left:("left"==t.direction?this.w/2*-1:0)+"px"}),this.clonedNext().css({position:"absolute",top:"0",left:("left"==t.direction?0:this.w/2*-1)+"px"});var i=l('<div class="tab"></div>').css({width:e+"px",height:this.h+"px",position:"absolute",top:"0px",left:("left"==t.direction?e:"0")+"px","z-index":"101"});NextendTween.set(i,{transformStyle:"preserve-3d",transformOrigin:"left"==t.direction?"0px 0px":e+"px 0px"});var n=l('<div class="n2-ff-3d"></div>').append(this.clonedCurrent()).css({width:e+"px",height:this.h+"px",position:"absolute",top:"0",left:"0","-webkit-transform":"translateZ(0.1px)",overflow:"hidden"}).appendTo(i);NextendTween.set(n,{backfaceVisibility:"hidden",transformStyle:"preserve-3d"});var o=l('<div class="n2-ff-3d"></div>').append(this.clonedNext()).appendTo(i).css({width:e+"px",height:this.h+"px",position:"absolute",top:"0",left:"0",overflow:"hidden"});NextendTween.set(o,{backfaceVisibility:"hidden",transformStyle:"preserve-3d",rotationY:180,rotationZ:0});var r=l("<div></div>").append(this.clonedCurrent().clone().css("left",("left"==t.direction?0:-e)+"px")).css({position:"absolute",top:0,left:"left"==t.direction?"0":e,width:e,height:this.h,zIndex:100,overflow:"hidden"}),s=l('<div class="overlay"></div>').css({position:"absolute",top:"0",left:("left"==t.direction?e:0)+"px",width:e+"px",height:this.h+"px",background:"#000",opacity:"1",overflow:"hidden"}),a=l("<div></div>").css({width:this.w+"px",height:this.h+"px",position:"absolute",top:"0",left:"0"}).append(i).append(r).append(s);NextendTween.set(a,{perspective:t.perspective,perspectiveOrigin:"50% 50%"}),this.placeNextImage(),this.clonedImages.nextImage.css({overflow:"hidden",width:"100%",height:"100%"}),this.containerElement.append(a),this.preSetup(),this.timeline.to(i.get(0),t.duration*this.durationMultiplier,{rotationY:"left"==t.direction?-180:180},0),this.timeline.to(s.get(0),t.duration*this.durationMultiplier,{opacity:0},0)}return((e.prototype=Object.create(N2Classes.SmartSliderBackgroundAnimationFluxAbstract.prototype)).constructor=e).prototype.getExtraDelay=function(){return 0},e}),N2D("SmartSliderBackgroundAnimationFluxAbstract",["SmartSliderBackgroundAnimationAbstract"],function(e,t){function i(){this.shiftedPreSetup=!1,this._clonedCurrent=!1,this._clonedNext=!1,N2Classes.SmartSliderBackgroundAnimationAbstract.prototype.constructor.apply(this,arguments),this.w=this.original.currentImage.width(),this.h=this.original.currentImage.height(),this.initCSS()}i.prototype=Object.create(N2Classes.SmartSliderBackgroundAnimationAbstract.prototype);var n=!1;return(i.prototype.constructor=i).prototype.initCSS=function(){if(!n){var t=[".n2-ss-background-animation{position:absolute;top:0;left:0;width:100%;height:100%;z-index:3}",".n2-ss-background-animation .n2-ss-slide-background {z-index: auto;}",".n2-ss-background-animation img{max-width:none}",".n2-ss-background-animation .n2-3d-side{position:absolute;left:0;top:0;overflow:hidden;background:"+this.sliderBackgroundAnimation.backgroundAnimations.color+"}",".n2-firefox .n2-ss-background-animation .n2-3d-side{outline:transparent solid 1px}",".n2-ss-background-animation .n2-ff-3d,.n2-ss-background-animation .tile{outline:transparent solid 1px}",".tile-colored-overlay{z-index:100000;background:"+this.sliderBackgroundAnimation.backgroundAnimations.color+"}"];e('<style type="text/css">'+t.join("")+"</style>").appendTo("head"),n=!0}},i.prototype.clonedCurrent=function(){return this._clonedCurrent||(this._clonedCurrent=this.original.currentImage.clone().css({width:this.w+"px",height:this.h+"px"}),NextendTween.set(this._clonedCurrent,{transform:"none"})),this._clonedCurrent},i.prototype.clonedNext=function(){return this._clonedNext||(this._clonedNext=this.original.nextImage.clone().css({width:this.w+"px",height:this.h+"px"}),NextendTween.set(this._clonedNext,{transform:"none"})),this._clonedNext},i.prototype.preSetup=function(){0!=this.shiftedBackgroundAnimation?this.shiftedPreSetup=!0:this._preSetup()},i.prototype._preSetup=function(t){this.timeline.to(this.original.currentImage.get(0),this.getExtraDelay(),{opacity:0},0),this.original.nextImage.css("opacity","0")},i.prototype.postSetup=function(){this.timeline.to(this.original.nextImage.get(0),this.getExtraDelay(),{opacity:1})},i.prototype.getExtraDelay=function(){return.2},i.prototype.ended=function(){this.original.currentImage.css("opacity","1"),this.containerElement.html("")},i.prototype.revertEnded=function(){this.original.nextImage.css("opacity","1"),this.containerElement.html("")},i}),N2D("smartslider-backgroundanimation");