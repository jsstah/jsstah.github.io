//
// !function(t,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var s=i();for(var e in s)("object"==typeof exports?exports:t)[e]=s[e]}}(this,(function(){return(()=>{"use strict";var t={511:(t,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.Explosion=void 0;var e=s(909);i.Explosion=class{constructor(t){var{x:i,y:s,ctx:h,hue:n,exp:o,gravity:a,friction:r,brightness:c,explosionLength:_}=t;for(this._coordinates=[],this._alpha=1,this._x=i,this._y=s,this._exp=o,this._ctx=h,this._gravity=a,this._friction=r,this._explosionLength=_;this._explosionLength--;)this._coordinates.push([i,s]);this._angle=(0,e.randomFloat)(0,2*Math.PI),this._speed=(0,e.randomInt)(1,10),this._hue=(0,e.randomInt)(n-20,n+20),this._brightness=(0,e.randomInt)(c.min,c.max),this._decay=(0,e.randomFloat)(c.decay.min,c.decay.max)}update(t){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._friction,this._x+=Math.cos(this._angle)*this._speed,this._y+=Math.sin(this._angle)*this._speed+this._gravity,this._alpha-=this._decay,this._alpha<=this._decay&&t()}draw(){var t=this._coordinates.length-1;this._ctx.beginPath(),this._exp&&(this._ctx.arc(this._x,this._y,(0,e.randomFloat)(.5,1.5),0,2*Math.PI),this._ctx.fill()),this._ctx.fillStyle=(0,e.hsla)(this._hue,this._brightness,this._alpha),this._ctx.moveTo(this._coordinates[t][0],this._coordinates[t][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,e.hsla)(this._hue,this._brightness,this._alpha),this._ctx.stroke()}}},909:(t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.hsla=i.getDistance=i.randomInt=i.randomFloat=void 0,i.randomFloat=function(t,i){return Math.random()*(i-t)+t},i.randomInt=function(t,i){return Math.floor(t+Math.random()*(i+1-t))},i.getDistance=function(t,i,s,e){var h=Math.pow;return Math.sqrt(h(t-s,2)+h(i-e,2))},i.hsla=function(t,i){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return"hsla(".concat(t,", 100%, ").concat(i,"%, ").concat(s,")")}},449:function(t,i,s){var e=this&&this.__awaiter||function(t,i,s,e){return new(s||(s=Promise))((function(h,n){function o(t){try{r(e.next(t))}catch(t){n(t)}}function a(t){try{r(e.throw(t))}catch(t){n(t)}}function r(t){var i;t.done?h(t.value):(i=t.value,i instanceof s?i:new s((function(t){t(i)}))).then(o,a)}r((e=e.apply(t,i||[])).next())}))};Object.defineProperty(i,"__esModule",{value:!0}),i.Sound=void 0;var h=s(909);i.Sound=class{constructor(t){this._buffer=[],this.onInit=!0,this._audioContext=new(window.AudioContext||window.webkitAudioContext),this.options=Object.assign({enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},t),this.init()}init(){this.onInit&&this.options.enabled&&(this.onInit=!1,this.load())}load(){return e(this,void 0,void 0,(function*(){for(var t of this.options.files){var i=yield(yield fetch(t)).arrayBuffer();this._audioContext.decodeAudioData(i).then((t=>{this._buffer.push(t)})).catch((t=>{throw t}))}}))}play(){if(this.options.enabled&&this._buffer.length){var t=this._audioContext.createBufferSource(),i=this._buffer[(0,h.randomInt)(0,this._buffer.length-1)],s=this._audioContext.createGain();t.buffer=i,s.gain.value=(0,h.randomFloat)(this.options.volume.min/100,this.options.volume.max/100),s.connect(this._audioContext.destination),t.connect(s),t.start(0)}else this.init()}}},668:(t,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.Trace=void 0;var e=s(909);i.Trace=class{constructor(t){var{x:i,y:s,dx:h,dy:n,ctx:o,hue:a,speed:r,traceLength:c,acceleration:_}=t;for(this._coordinates=[],this._currentDistance=0,this._x=i,this._y=s,this._sx=i,this._sy=s,this._dx=h,this._dy=n,this._ctx=o,this._hue=a,this._speed=r,this._traceLength=c,this._acceleration=_,this._totalDistance=(0,e.getDistance)(i,s,h,n);this._traceLength--;)this._coordinates.push([i,s]);this._angle=Math.atan2(n-s,h-i),this._brightness=(0,e.randomInt)(50,70)}update(t){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._acceleration;var i=Math.cos(this._angle)*this._speed,s=Math.sin(this._angle)*this._speed;this._currentDistance=(0,e.getDistance)(this._sx,this._sy,this._x+i,this._y+s),this._currentDistance>=this._totalDistance?t(this._dx,this._dy,this._hue):(this._x+=i,this._y+=s)}draw(){var t=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[t][0],this._coordinates[t][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,e.hsla)(this._hue,this._brightness),this._ctx.stroke()}}}},i={};function s(e){var h=i[e];if(void 0!==h)return h.exports;var n=i[e]={exports:{}};return t[e].call(n.exports,n,n.exports,s),n.exports}var e={};return(()=>{var t=e;Object.defineProperty(t,"__esModule",{value:!0}),t.Fireworks=void 0;var i=s(668),h=s(449),n=s(511),o=s(909);t.Fireworks=class{constructor(t){var{autoresize:i=!0,boundaries:s,brightness:e,delay:n,hue:o,mouse:a,sound:r,trace:c=3,speed:_=2,explosion:d=5,gravity:u=1.5,opacity:l=.5,particles:p=50,friction:x=.95,rocketsPoint:m=50,acceleration:v=1.05}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._tick=0,this._version="1.3.5",this._running=!1,this._randomRocketsPoint=!1,this._experimentals=!1,this._m=!1,this._container=t,this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._container.appendChild(this._canvas),this._sound=new h.Sound(r),this.setSize(),this.setBoundaries(Object.assign({visible:!1,x:50,y:50},s)),this.autoresize=i,this.trace=c,this.speed=_,this.explosion=d,this.gravity=u,this.opacity=l,this.particles=p,this.friction=x,this.rocketsPoint=m,this.acceleration=v,this.hue=Object.assign({min:0,max:360},o),this.mouse=Object.assign({click:!1,move:!1,max:1},a),this.delay=Object.assign({min:15,max:30},n),this.brightness=Object.assign({min:50,max:80,decay:{min:.015,max:.03}},e),this.autoresize&&window.addEventListener("resize",(()=>this.windowResize())),this._canvas.addEventListener("mousedown",(t=>this.mouseDown(t))),this._canvas.addEventListener("mouseup",(t=>this.mouseUp(t))),this._canvas.addEventListener("mousemove",(t=>this.mouseMove(t)))}get isRunning(){return this._running}get version(){return this._version}start(){this._running||(this._running=!0,this.clear(),this.render())}stop(){this._running&&(this._running=!1,this.clear())}unmount(){window.removeEventListener("resize",this.windowResize),this._canvas.addEventListener("mousedown",this.mouseDown),this._canvas.addEventListener("mouseup",this.mouseUp),this._canvas.addEventListener("mousemove",this.mouseMove)}pause(){this._running=!this._running}clear(){this._ctx&&(this._traces=[],this._explosions=[],this._ctx.clearRect(0,0,this._width,this._height))}setOptions(t){for(var[i,s]of Object.entries(t)){var e=Object.prototype.hasOwnProperty.call(this,i);if("function"==typeof this[i])throw new Error("You cannot change the methods of the class!");e&&("object"==typeof this[i]?Object.assign(this[i],s):this[i]=s),"sound"===i&&Object.assign(this._sound.options,s)}}setSize(){var{width:t=this._container.clientWidth,height:i=this._container.clientHeight}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._width=t,this._height=i,this._canvas.width=t,this._canvas.height=i,this.setBoundaries({width:t,height:i})}setBoundaries(t){this.boundaries=Object.assign(Object.assign({},this.boundaries),t)}useMouse(t,i){(this.mouse.click||this.mouse.move)&&(this._mx=t.pageX-this._canvas.offsetLeft,this._my=t.pageY-this._canvas.offsetTop,this._m=i)}windowResize(){this.setSize()}mouseDown(t){this.useMouse(t,this.mouse.click)}mouseUp(t){this.useMouse(t,!1)}mouseMove(t){this.useMouse(t,this._m)}render(){this._ctx&&this._running&&(requestAnimationFrame((()=>this.render())),this._ctx.globalCompositeOperation="destination-out",this._ctx.fillStyle="rgba(0, 0, 0, ".concat(this.opacity,")"),this._ctx.fillRect(0,0,this._width,this._height),this._ctx.globalCompositeOperation="lighter",this.drawBoundaries(),this.initTrace(),this.drawTrace(),this.drawExplosion(),this._tick++)}drawBoundaries(){this.boundaries.visible&&(this._ctx.beginPath(),this._ctx.strokeStyle="red",this._ctx.rect(this.boundaries.x,this.boundaries.y,this.boundaries.width-2*this.boundaries.x,.5*this.boundaries.height),this._ctx.stroke())}initTrace(){this._ds=(0,o.randomInt)(this.delay.min,this.delay.max),(2*this._ds<this._tick||this._m&&this.mouse.max>this._traces.length)&&(this._traces.push(new i.Trace({x:this._width*(this._randomRocketsPoint?(0,o.randomInt)(0,100):this.rocketsPoint)/100,y:this._height,dx:this._mx&&this.mouse.move||this._m?this._mx:(0,o.randomInt)(this.boundaries.x,this.boundaries.width-2*this.boundaries.x),dy:this._my&&this.mouse.move||this._m?this._my:(0,o.randomInt)(this.boundaries.y,.5*this.boundaries.height),ctx:this._ctx,hue:(0,o.randomInt)(this.hue.min,this.hue.max),speed:this.speed,acceleration:this.acceleration,traceLength:this.trace})),this._tick=0)}drawTrace(){for(var t=this._traces.length;t--;)this._traces[t].draw(),this._traces[t].update(((i,s,e)=>{this.initExplosion(i,s,e),this._sound.play(),this._traces.splice(t,1)}))}initExplosion(t,i,s){for(var e=this.particles;e--;)this._explosions.push(new n.Explosion({x:t,y:i,ctx:this._ctx,hue:s,friction:this.friction,gravity:this.gravity,explosionLength:this.explosion,brightness:this.brightness,exp:this._experimentals}))}drawExplosion(){for(var t=this._explosions.length;t--;)this._explosions[t].draw(),this._explosions[t].update((()=>{this._explosions.splice(t,1)}))}}})(),e})()}));



// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
// not supported in all browsers though and sometimes needs a prefix, so we need a shim
window.requestAnimFrame = ( function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function( callback ) {
            window.setTimeout( callback, 1000 / 60 );
        };
})();

// now we will setup our basic variables for the demo
var canvas = document.getElementById( 'canvas' ),
    ctx = canvas.getContext( '2d' ),
    // full screen dimensions
    cw = window.innerWidth,
    ch = window.innerHeight,
    // firework collection
    fireworks = [],
    // particle collection
    particles = [],
    // starting hue
    hue = 120,
    // when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
    limiterTotal = 5,
    limiterTick = 0,
    // this will time the auto launches of fireworks, one launch per 80 loop ticks
    timerTotal = 80,
    timerTick = 0,
    mousedown = false,
    // mouse x coordinate,
    mx,
    // mouse y coordinate
    my;

// set canvas dimensions
canvas.width = cw;
canvas.height = ch;
canvas.style.position = 'absolute';
canvas.style.top = "0";
canvas.style.left = "0";
// now we are going to setup our function placeholders for the entire demo

// get a random number within a range
function random( min, max ) {
    return Math.random() * ( max - min ) + min;
}

// calculate the distance between two points
function calculateDistance( p1x, p1y, p2x, p2y ) {
    var xDistance = p1x - p2x,
        yDistance = p1y - p2y;
    return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
}

// create firework
function Firework( sx, sy, tx, ty ) {
    // actual coordinates
    this.x = sx;
    this.y = sy;
    // starting coordinates
    this.sx = sx;
    this.sy = sy;
    // target coordinates
    this.tx = tx;
    this.ty = ty;
    // distance from starting point to target
    this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
    this.distanceTraveled = 0;
    // track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
    this.coordinates = [];
    this.coordinateCount = 3;
    // populate initial coordinate collection with the current coordinates
    while( this.coordinateCount-- ) {
        this.coordinates.push( [ this.x, this.y ] );
    }
    this.angle = Math.atan2( ty - sy, tx - sx );
    this.speed = 2;
    this.acceleration = 1.05;
    this.brightness = random( 50, 70 );
    // circle target indicator radius
    this.targetRadius = 1;
}

// update firework
Firework.prototype.update = function( index ) {
    // remove last item in coordinates array
    this.coordinates.pop();
    // add current coordinates to the start of the array
    this.coordinates.unshift( [ this.x, this.y ] );

    // cycle the circle target indicator radius
    if( this.targetRadius < 8 ) {
        this.targetRadius += 0.3;
    } else {
        this.targetRadius = 1;
    }

    // speed up the firework
    this.speed *= this.acceleration;

    // get the current velocities based on angle and speed
    var vx = Math.cos( this.angle ) * this.speed,
        vy = Math.sin( this.angle ) * this.speed;
    // how far will the firework have traveled with velocities applied?
    this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );

    // if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
    if( this.distanceTraveled >= this.distanceToTarget ) {
        createParticles( this.tx, this.ty );
        // remove the firework, use the index passed into the update function to determine which to remove
        fireworks.splice( index, 1 );
    } else {
        // target not reached, keep traveling
        this.x += vx;
        this.y += vy;
    }
}

// draw firework
Firework.prototype.draw = function() {
    ctx.beginPath();
    // move to the last tracked coordinate in the set, then draw a line to the current x and y
    ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
    ctx.lineTo( this.x, this.y );
    ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
    ctx.stroke();

    ctx.beginPath();
    // draw the target for this firework with a pulsing circle
    ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
    ctx.stroke();
}

// create particle
function Particle( x, y ) {
    this.x = x;
    this.y = y;
    // track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
    this.coordinates = [];
    this.coordinateCount = 5;
    while( this.coordinateCount-- ) {
        this.coordinates.push( [ this.x, this.y ] );
    }
    // set a random angle in all possible directions, in radians
    this.angle = random( 0, Math.PI * 2 );
    this.speed = random( 1, 10 );
    // friction will slow the particle down
    this.friction = 0.95;
    // gravity will be applied and pull the particle down
    this.gravity = 1;
    // set the hue to a random number +-20 of the overall hue variable
    this.hue = random( hue - 20, hue + 20 );
    this.brightness = random( 50, 80 );
    this.alpha = 1;
    // set how fast the particle fades out
    this.decay = random( 0.015, 0.03 );
}

// update particle
Particle.prototype.update = function( index ) {
    // remove last item in coordinates array
    this.coordinates.pop();
    // add current coordinates to the start of the array
    this.coordinates.unshift( [ this.x, this.y ] );
    // slow down the particle
    this.speed *= this.friction;
    // apply velocity
    this.x += Math.cos( this.angle ) * this.speed;
    this.y += Math.sin( this.angle ) * this.speed + this.gravity;
    // fade out the particle
    this.alpha -= this.decay;

    // remove the particle once the alpha is low enough, based on the passed in index
    if( this.alpha <= this.decay ) {
        particles.splice( index, 1 );
    }
}

// draw particle
Particle.prototype.draw = function() {
    ctx. beginPath();
    // move to the last tracked coordinates in the set, then draw a line to the current x and y
    ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
    ctx.lineTo( this.x, this.y );
    ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
    ctx.stroke();
}

// create particle group/explosion
function createParticles( x, y ) {
    // increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
    var particleCount = 30;
    while( particleCount-- ) {
        particles.push( new Particle( x, y ) );
    }
}

// main demo loop
function loop() {
    // this function will run endlessly with requestAnimationFrame
    requestAnimFrame( loop );

    // increase the hue to get different colored fireworks over time
    hue += 0.5;

    // normally, clearRect() would be used to clear the canvas
    // we want to create a trailing effect though
    // setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
    ctx.globalCompositeOperation = 'destination-out';
    // decrease the alpha property to create more prominent trails
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect( 0, 0, cw, ch );
    // change the composite operation back to our main mode
    // lighter creates bright highlight points as the fireworks and particles overlap each other
    ctx.globalCompositeOperation = 'lighter';

    // loop over each firework, draw it, update it
    var i = fireworks.length;
    while( i-- ) {
        fireworks[ i ].draw();
        fireworks[ i ].update( i );
    }

    // loop over each particle, draw it, update it
    var i = particles.length;
    while( i-- ) {
        particles[ i ].draw();
        particles[ i ].update( i );
    }

    // launch fireworks automatically to random coordinates, when the mouse isn't down
    if( timerTick >= timerTotal ) {
        if( !mousedown ) {
            // start the firework at the bottom middle of the screen, then set the random target coordinates, the random y coordinates will be set within the range of the top half of the screen
            fireworks.push( new Firework( cw / 2, ch, random( 0, cw ), random( 0, ch / 2 ) ) );
            timerTick = 0;
        }
    } else {
        timerTick += 2;
    }

    // limit the rate at which fireworks get launched when mouse is down
    if( limiterTick >= limiterTotal ) {
        if( mousedown ) {
            // start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
            fireworks.push( new Firework( cw / 2, ch, mx, my ) );
            limiterTick = 0;
        }
    } else {
        limiterTick++;
    }
}

// mouse event bindings
// update the mouse coordinates on mousemove
canvas.addEventListener( 'mousemove', function( e ) {
    mx = e.pageX - canvas.offsetLeft;
    my = e.pageY - canvas.offsetTop;
});

// toggle mousedown state and prevent canvas from being selected
canvas.addEventListener( 'mousedown', function( e ) {
    e.preventDefault();
    mousedown = true;
});

canvas.addEventListener( 'mouseup', function( e ) {
    e.preventDefault();
    mousedown = false;
});

// once the window loads, we are ready for some fireworks!
window.onload = loop;

