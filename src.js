// https://dwitter.net submission functions
const c = document.querySelector('canvas');
c.width = 1920;
c.height = 1080;
const x = c.getContext('2d');
const S = Math.sin;
const C = Math.cos;
const T = Math.tan;
const R = (r, g, b, a) => `#${parseInt(r, 10).toString(16).padStart(2, '0')}${parseInt(g, 10).toString(16).padStart(2, '0')}${parseInt(b, 10).toString(16).padStart(2, '0')}${parseInt(a, 10).toString(16).padStart(2, '0')}`;

// dwitter submission function
function u(t)
{
	
}

// Timing vars
var t0, t1;
t0 = performance.now();

// Run u(t) 60 times / second
var interval = setInterval(() => {
	t1 = performance.now();
	u((t1 - t0) / 1000);
}, 1/60);