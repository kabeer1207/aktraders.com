document.getElementById('yr').textContent=new Date().getFullYear();
window.addEventListener('scroll',function(){document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>50);});
document.getElementById('hamburger').addEventListener('click',function(){var m=document.getElementById('mobile-menu');m.style.display=m.style.display==='flex'?'none':'flex';});
function closeMob(){document.getElementById('mobile-menu').style.display='none';}
var obs=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:0.12,rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(function(el){obs.observe(el);});
(function(){
  var c=document.getElementById('particle-canvas'),ctx=c.getContext('2d');
  var pts=[];
  function resize(){c.width=window.innerWidth;c.height=window.innerHeight;init();}
  function Pt(){var self=this;self.reset=function(){self.x=Math.random()*c.width;self.y=c.height+Math.random()*80;self.sz=Math.random()*2.5+.5;self.sx=Math.random()*.8-.4;self.sy=-(Math.random()*1.5+.4);var cols=['245,158,11','251,191,36','217,119,6','252,211,77'];self.col=cols[Math.floor(Math.random()*cols.length)];self.op=Math.random()*.45+.05;self.fade=Math.random()*.004+.001;};self.reset();self.y=Math.random()*c.height;}
  Pt.prototype.update=function(){this.x+=this.sx;this.y+=this.sy;this.op-=this.fade;if(this.op<=0||this.y<-10)this.reset();};
  Pt.prototype.draw=function(){ctx.beginPath();ctx.arc(this.x,this.y,this.sz,0,Math.PI*2);ctx.fillStyle='rgba('+this.col+','+this.op+')';ctx.shadowBlur=8;ctx.shadowColor='rgba('+this.col+',.6)';ctx.fill();ctx.shadowBlur=0;};
  function init(){pts=[];var n=window.innerWidth<768?60:140;for(var i=0;i<n;i++){var p=new Pt();pts.push(p);}}
  function animate(){ctx.clearRect(0,0,c.width,c.height);var g=ctx.createLinearGradient(0,0,0,c.height);g.addColorStop(0,'#080808');g.addColorStop(1,'#141414');ctx.fillStyle=g;ctx.fillRect(0,0,c.width,c.height);pts.forEach(function(p){p.update();p.draw();});requestAnimationFrame(animate);}
  window.addEventListener('resize',resize);resize();animate();
})();
function submitForm(e){e.preventDefault();var b=e.target.querySelector('.submit-btn');b.textContent='Sending...';b.disabled=true;setTimeout(function(){b.innerHTML='Submit Inquiry &rarr;';b.disabled=false;e.target.reset();var t=document.getElementById('toast');t.style.display='block';setTimeout(function(){t.style.display='none';},3500);},1400);}