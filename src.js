// https://dwitter.net submission functions
/// The document cnavas.
const c = document.querySelector('canvas');
/// Canvas size configuration.
c.width = 1920;
c.height = 1080;
/// The 2D canvas context.
const x = c.getContext('2d');
/// Alias for Math.sin
const S = Math.sin;
/// Alias for Math.cos
const C = Math.cos;
/// Alias for Math.tan
const T = Math.tan;
/// Generates RGBA strings. I.E. R(255, 255, 127, 255) => '#FFFF7FFF'
const R = (r, g, b, a) => `#${parseInt(r, 10).toString(16).padStart(2, '0')}${parseInt(g, 10).toString(16).padStart(2, '0')}${parseInt(b, 10).toString(16).padStart(2, '0')}${parseInt(a, 10).toString(16).padStart(2, '0')}`;

/**
 * @brief The actual function where all the code inside is run in dwitter.
 * 
 * @param t The time elapsed in seconds.
 */
function u(t)
{
	
}

// Variables for timing.
var t0, t1;
t0 = performance.now();

// Run u(t) 60 times / second.
var interval = setInterval(() => {
	t1 = performance.now();
	u((t1 - t0) / 1000);
}, 1/60);