(function() {
	(function() {
		var g = void 0,
			aa = !0,
			h = null,
			i = !1,
			j = google_exportSymbol,
			k = Number,
			l = Error,
			m = parseInt,
			o = document,
			ba = isNaN,
			q = google_exportProperty,
			r = Array,
			t = Math;

		function u(a, b) {
			return a.format = b
		}

		function ca(a, b) {
			return a.type = b
		}
		var x = "push",
			da = "test",
			y = "round",
			ea = "slice",
			z = "replace",
			A = "floor",
			C = "charAt",
			fa = "indexOf",
			D = "format",
			ga = "getColumnType",
			ha = "getHours",
			ia = "getValue",
			ja = "getTime",
			ka = "getElementsByTagName",
			la = "substr",
			E = "toString",
			ma = "getNumberOfRows",
			F = "length",
			na = "propertyIsEnumerable",
			G = "prototype",
			oa = "setFormattedValue",
			H = "call",
			pa = "setProperty",
			I = "substring",
			qa = "apply",
			J = "join",
			sa = "toLowerCase",
			ta = "getTimezoneOffset",
			K = "",
			ua = " ",
			va = '" />',
			wa = "#",
			xa = "#$1$1$2$2$3$3",
			ya = "$1",
			za = "%",
			Aa = "'",
			Ba = "''",
			Ca = "(",
			Da = "(\\d*)(\\D*)",
			Ea = ")",
			Fa = "+",
			Ga = ",",
			L = "-",
			M = ".",
			Ha = '.png" height="12" width="',
			Ia = "/static/modules/gviz/",
			Ja = "/util/bar_",
			Ka = "/util/format.css",
			N = "0",
			La = "0000000000000000",
			Ma = "1",
			Na = "1.0",
			Oa = ":",
			Pa = ";",
			Qa = "</span>\u00a0",
			Ra = '<img style="padding: 0" src="',
			Sa = '<span style="padding: 0; float: left; white-space: nowrap;">',
			Ta = "E",
			Ua = "Etc/GMT",
			Va = "G",
			Wa = "GMT",
			Xa = "H",
			Ya = "K",
			Za = "L",
			$a = "LINK",
			bb = "M",
			cb = "Q",
			db = "S",
			eb = "Too many percent/permill",
			fb = "UTC",
			gb = "Z",
			hb = "[object Array]",
			ib = "[object Function]",
			jb = "[object Window]",
			kb = "\\",
			lb = "_bar_format_old_value",
			mb = "a",
			nb = "addGradientRange",
			ob = "array",
			pb = "b",
			qb = "background-color:",
			rb = "body",
			sb = "boolean",
			tb = "c",
			ub = "call",
			vb = "className",
			wb = "color:",
			xb = "d",
			yb = "date",
			zb = "datetime",
			Ab = "decimalSymbol",
			Bb = "false",
			O = "format",
			Cb = "formatType",
			Db = "fractionDigits",
			Eb = "full",
			Fb = "function",
			Gb = "g",
			Hb = "google-visualization-formatters-arrow-dr",
			Ib = "google-visualization-formatters-arrow-empty",
			Jb = "google-visualization-formatters-arrow-ug",
			Kb = "google.loader.GoogleApisBase",
			Lb = "google.visualization.Version",
			Mb = "groupingSymbol",
			Nb = "h",
			Ob = "head",
			Pb = "hex",
			Qb = "html",
			Rb = "http://ajax.googleapis.com/ajax",
			Sb = "k",
			Tb = "link",
			Ub = "long",
			Vb = "m",
			Wb = "medium",
			Xb = "named",
			Yb = "native code",
			Zb = "negativeColor",
			$b = "negativeParens",
			ac = "none",
			bc = "null",
			P = "number",
			cc = "object",
			dc = "pattern",
			ec = "prefix",
			gc = "r",
			hc = "rgb",
			ic = "s",
			jc = "scaleFactor",
			kc = "short",
			lc = "solid",
			mc = "splice",
			nc = "string",
			oc = "style",
			pc = "stylesheet",
			qc = "suffix",
			rc = "text/css",
			sc = "time",
			tc = "timeZone",
			uc = "timeofday",
			vc = "transparent",
			wc = "true",
			xc = "v",
			yc = "valueType",
			zc = "w",
			Ac = "y",
			Bc = "z",
			Cc = "\u00a0",
			Dc = "\u00a4",
			Ec = "\u2030",
			R, Fc = this;

		function Gc(a, b) {
			for(var c = a.split(M), d = b || Fc, e; e = c.shift();)
				if(S(d[e])) d = d[e];
				else return h;
			return d
		}

		function Hc(a) {
			var b = typeof a;
			if(b == cc)
				if(a) {
					if(a instanceof r) return ob;
					if(a instanceof Object) return b;
					var c = Object[G][E][H](a);
					if(c == jb) return cc;
					if(c == hb || typeof a[F] == P && "undefined" != typeof a.splice && "undefined" != typeof a[na] && !a[na](mc)) return ob;
					if(c == ib || "undefined" != typeof a[H] && "undefined" != typeof a[na] && !a[na](ub)) return Fb
				} else return bc;
			else if(b == Fb && "undefined" == typeof a[H]) return cc;
			return b
		}

		function S(a) {
			return a != h
		}

		function Ic(a) {
			var b = Hc(a);
			return(b == cc || b == ob || b == Fb) && typeof a.getFullYear == Fb
		}

		function Jc(a, b, c) {
			return a[H][qa](a.bind, arguments)
		}

		function Kc(a, b, c) {
			if(!a) throw l();
			if(2 < arguments[F]) {
				var d = r[G][ea][H](arguments, 2);
				return function() {
					var c = r[G][ea][H](arguments);
					r[G].unshift[qa](c, d);
					return a[qa](b, c)
				}
			}
			return function() {
				return a[qa](b, arguments)
			}
		}

		function Lc(a, b, c) {
			Lc = Function[G].bind && -1 != Function[G].bind[E]()[fa](Yb) ? Jc : Kc;
			return Lc[qa](h, arguments)
		}

		function Mc(a, b) {
			var c = r[G][ea][H](arguments, 1);
			return function() {
				var b = r[G][ea][H](arguments);
				b.unshift[qa](b, c);
				return a[qa](this, b)
			}
		}

		function Nc(a, b) {
			function c() {}
			c.prototype = b[G];
			a.Zb = b[G];
			a.prototype = new c
		};

		function Oc(a) {
			this.L = a || {};
			a: {
				for(var b = Pc() + Ka, a = o[ka]($a), c = 0; c < a[F]; c++)
					if(a[c] && a[c].href && a[c].href == b) break a;a = o.createElement(Tb);a.href = b;a.rel = pc;ca(a, rc);
				if(0 == o[ka](Ob)[F]) {
					var b = o[ka](Qb)[0],
						c = o[ka](rb)[0],
						d = o.createElement(Ob);
					b.insertBefore(d, c)
				}
				o[ka](Ob)[0].appendChild(a)
			}
		}
		u(Oc[G], function(a, b) {
			if(a[ga](b) == P)
				for(var c = this.L.base || 0, d = 0; d < a[ma](); d++) {
					var e = a[ia](d, b),
						f = h,
						f = e < c ? Hb : e > c ? Jb : Ib;
					a[pa](d, b, vb, f)
				}
		});

		function T(a, b, c) {
			a = c !== g ? a.toFixed(c) : K + a;
			c = a[fa](M); - 1 == c && (c = a[F]);
			b = t.max(0, b - c);
			return r(b + 1)[J](N) + a
		}

		function Qc(a, b) {
			for(var c = 0, d = (K + a)[z](/^[\s\xa0]+|[\s\xa0]+$/g, K).split(M), e = (K + b)[z](/^[\s\xa0]+|[\s\xa0]+$/g, K).split(M), f = t.max(d[F], e[F]), n = 0; 0 == c && n < f; n++) {
				var p = d[n] || K,
					B = e[n] || K,
					Q = RegExp(Da, Gb),
					W = RegExp(Da, Gb);
				do {
					var v = Q.exec(p) || [K, K, K],
						s = W.exec(B) || [K, K, K];
					if(0 == v[0][F] && 0 == s[0][F]) break;
					c = ((0 == v[1][F] ? 0 : m(v[1], 10)) < (0 == s[1][F] ? 0 : m(s[1], 10)) ? -1 : (0 == v[1][F] ? 0 : m(v[1], 10)) > (0 == s[1][F] ? 0 : m(s[1], 10)) ? 1 : 0) || ((0 == v[2][F]) < (0 == s[2][F]) ? -1 : (0 == v[2][F]) > (0 == s[2][F]) ? 1 : 0) || (v[2] < s[2] ? -1 : v[2] > s[2] ?
						1 : 0)
				} while (0 == c)
			}
			return c
		};
		var Rc = {
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#00ffff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000000",
			blanchedalmond: "#ffebcd",
			blue: "#0000ff",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#00ffff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgreen: "#006400",
			darkgrey: "#a9a9a9",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkslategrey: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dimgrey: "#696969",
			dodgerblue: "#1e90ff",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#ff00ff",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			gold: "#ffd700",
			goldenrod: "#daa520",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			grey: "#808080",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavender: "#e6e6fa",
			lavenderblush: "#fff0f5",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgray: "#d3d3d3",
			lightgreen: "#90ee90",
			lightgrey: "#d3d3d3",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslategray: "#778899",
			lightslategrey: "#778899",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#00ff00",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#ff00ff",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370d8",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#d87093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			red: "#ff0000",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			slategrey: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			wheat: "#f5deb3",
			white: "#ffffff",
			whitesmoke: "#f5f5f5",
			yellow: "#ffff00",
			yellowgreen: "#9acd32"
		};

		function Sc(a) {
			var b = {},
				a = K + a,
				c = a[C](0) == wa ? a : wa + a;
			if(Tc[da](c)) return b.k = Uc(c), ca(b, Pb), b;
			a: {
				var d = a.match(Vc);
				if(d) {
					var c = k(d[1]),
						e = k(d[2]),
						d = k(d[3]);
					if(0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
						c = [c, e, d];
						break a
					}
				}
				c = []
			}
			if(c[F]) return b.k = Wc(c[0], c[1], c[2]), ca(b, hc), b;
			if(Rc && (c = Rc[a[sa]()])) return b.k = c, ca(b, Xb), b;
			throw l(a + " is not a valid color string");
		}
		var Xc = /#(.)(.)(.)/;

		function Uc(a) {
			if(!Tc[da](a)) throw l(Aa + a + "' is not a valid hex color");
			4 == a[F] && (a = a[z](Xc, xa));
			return a[sa]()
		}

		function Yc(a) {
			a = Uc(a);
			return [m(a[la](1, 2), 16), m(a[la](3, 2), 16), m(a[la](5, 2), 16)]
		}

		function Wc(a, b, c) {
			a = k(a);
			b = k(b);
			c = k(c);
			if(ba(a) || 0 > a || 255 < a || ba(b) || 0 > b || 255 < b || ba(c) || 0 > c || 255 < c) throw l('"(' + a + Ga + b + Ga + c + '") is not a valid RGB color');
			return wa + (1 == a[E](16)[F] ? N + a[E](16) : a[E](16)) + (1 == b[E](16)[F] ? N + b[E](16) : b[E](16)) + (1 == c[E](16)[F] ? N + c[E](16) : c[E](16))
		}
		var Tc = /^#(?:[0-9a-f]{3}){1,2}$/i,
			Vc = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

		function Zc(a) {
			return a == ac || a == K || a == vc ? ac : Sc(a).k
		};

		function $c(a) {
			S(a) || (a = {});
			this.wa = ac;
			S(a.fill) && this.xa(a.fill);
			this.va = 1;
			S(a.Q) && this.ya(a.Q);
			this.sa = ac;
			S(a.stroke) && this.Aa(a.stroke);
			this.Ha = 1;
			S(a.Ga) && this.P(a.Ga);
			this.Fa = 1;
			S(a.R) && this.Ca(a.R);
			this.Ea = lc;
			S(a.Da) && this.Ba(a.Da);
			this.e = h;
			if(a.e) {
				var b = a.e,
					c = {},
					d;
				for(d in b) c[d] = b[d];
				this.e = c;
				this.e.ta = Zc(this.e.ta);
				this.e.ua = Zc(this.e.ua)
			}
			this.b = h;
			a.pattern && this.za(a.pattern)
		}
		R = $c[G];
		R.xa = function(a) {
			this.wa = Zc(a)
		};
		R.ya = function(a) {
			this.va = t.min(t.max(a, 0), 1)
		};
		R.Aa = function(a, b) {
			this.sa = Zc(a);
			S(b) && this.P(b)
		};
		R.P = function(a) {
			this.Ha = a
		};
		R.Ca = function(a) {
			this.Fa = t.min(t.max(a, 0), 1)
		};
		R.Ba = function(a) {
			this.Ea = a
		};
		R.za = function(a) {
			this.b = a
		};
		new $c({
			Q: 0,
			fill: "white",
			R: 0,
			stroke: "white"
		});

		function ad(a) {
			this.qa = a
		}

		function bd(a, b, c) {
			a = Gc(b, a);
			return S(a) && Hc(c) == Fb ? c(a) : a
		}
		R = ad[G];
		R.d = function(a, b, c) {
			for(var d = h, e = 0; e < this.qa[F]; e++) {
				a: {
					var d = this.qa[e],
						f = a,
						n = c;
					if(typeof f == nc) d = bd(d, f, n);
					else {
						for(var p = 0; p < f[F]; ++p) {
							var B = bd(d, f[p], n);
							if(S(B)) {
								d = B;
								break a
							}
						}
						d = h
					}
				}
				if(S(d)) return d
			}
			d = b;
			return d !== g ? d : h
		};

		function cd(a) {
			if(!S(a)) return h;
			if(typeof a == sb) return a;
			a = K + a;
			return a == Ma || a[sa]() == wc ? aa : a == N || a[sa]() == Bb ? i : h
		}
		R.La = function(a, b) {
			var c = this.Nb(a);
			if(S(c)) return c;
			b !== g || (b = i);
			return b
		};
		R.Nb = function(a) {
			return this.d(a, h, cd)
		};

		function dd(a) {
			if(!S(a)) return h;
			if(typeof a == P) return a;
			var a = K + a,
				b = k(a),
				a = 0 == b && /^[\s\xa0]*$/ [da](a) ? NaN : b;
			return ba(a) ? h : a
		}
		R.Na = function(a, b) {
			var c = this.X(a);
			if(S(c)) return c;
			b !== g || (b = 0);
			return b
		};
		R.X = function(a) {
			return this.d(a, h, dd)
		};

		function ed(a) {
			a = dd(a);
			return S(a) && 0 <= a ? a : h
		}
		R.Ma = function(a, b) {
			var c = this.Ob(a);
			if(S(c)) return c;
			b !== g || (b = 0);
			return b
		};
		R.Ob = function(a) {
			return this.d(a, h, ed)
		};

		function fd(a) {
			return !S(a) ? h : K + a
		}
		R.r = function(a, b) {
			b !== g || (b = K);
			return this.d(a, b, fd)
		};
		R.Pa = function(a) {
			return this.d(a, h, fd)
		};

		function gd(a) {
			return(a = fd(a)) ? a : h
		}
		R.Oa = function(a) {
			return this.d(a, h, gd)
		};

		function hd(a, b) {
			var c = fd(b),
				d;
			a: {
				for(d in a)
					if(a[d] == c) {
						d = aa;
						break a
					}
				d = i
			}
			return d ? c : h
		}
		R.W = function(a, b) {
			return this.d(a, h, Lc(hd, h, b))
		};
		var id, jd, kd, ld;

		function md() {
			return Fc.navigator ? Fc.navigator.userAgent : h
		}
		ld = kd = jd = id = i;
		var nd;
		if(nd = md()) {
			var od = Fc.navigator;
			id = 0 == nd[fa]("Opera");
			jd = !id && -1 != nd[fa]("MSIE");
			kd = !id && -1 != nd[fa]("WebKit");
			ld = !id && !kd && "Gecko" == od.product
		}
		var pd = jd,
			qd = ld,
			rd = kd,
			sd;
		a: {
			var td = K,
				ud;
			if(id && Fc.opera) var vd = Fc.opera.version,
				td = typeof vd == Fb ? vd() : vd;
			else if(qd ? ud = /rv\:([^\);]+)(\)|;)/ : pd ? ud = /MSIE\s+([^\);]+)(\)|;)/ : rd && (ud = /WebKit\/(\S+)/), ud) var wd = ud.exec(md()),
				td = wd ? wd[1] : K;
			if(pd) {
				var xd, yd = Fc.document;
				xd = yd ? yd.documentMode : g;
				if(xd > parseFloat(td)) {
					sd = K + xd;
					break a
				}
			}
			sd = td
		}
		var zd = sd,
			Ad = {},
			Bd = {};

		function Cd(a) {
			return Bd[a] || (Bd[a] = pd && o.documentMode && o.documentMode >= a)
		};
		!pd || Cd(9);
		!qd && !pd || pd && Cd(9) || qd && (Ad["1.9.1"] || (Ad["1.9.1"] = 0 <= Qc(zd, "1.9.1")));
		pd && (Ad["9"] || (Ad["9"] = 0 <= Qc(zd, "9")));

		function Pc() {
			var a = Gc(Kb);
			S(a) || (a = Rb);
			var b = Gc(Lb);
			S(b) || (b = Na);
			return a + Ia + b
		};

		function Dd(a) {
			this.L = a || {};
			Ed || (Ed = Pc() + Ja)
		}
		var Ed = h,
			Fd = {
				red: gc,
				blue: pb,
				green: Gb
			};

		function U(a, b, c) {
			0 < b && c[x](Ra, Ed, a, Ha, b, va)
		}
		u(Dd[G], function(a, b) {
			if(a[ga](b) == P) {
				var c = this.L,
					d = c.min,
					e = c.max,
					f = h;
				if(d == h || e == h) f = a.getColumnRange(b), e == h && (e = f.max), d == h && (d = t.min(0, f.min));
				if(d >= e) f = f || a.getColumnRange(b), e = f.max, d = f.min;
				d == e && (0 == d ? e = 1 : 0 < d ? d = 0 : e = 0);
				var f = e - d,
					n = c.base || 0,
					n = t.max(d, t.min(e, n)),
					p = c.width || 100,
					B = c.showValue;
				B == h && (B = aa);
				for(var Q = t[y]((n - d) / f * p), W = p - Q, v = 0; v < a[ma](); v++) {
					var s = a[ia](v, b),
						w = [],
						s = t.max(d, t.min(e, s)),
						ra = t.ceil((s - d) / f * p);
					w[x](Sa);
					U(ic, 1, w);
					var fc = Gd(c.colorPositive, pb),
						Td = Gd(c.colorNegative, gc),
						ab = c.drawZeroLine ? 1 : 0;
					0 < Q ? s < n ? (U(zc, ra, w), U(Td, Q - ra, w), 0 < ab && U(Bc, ab, w), U(zc, W, w)) : (U(zc, Q, w), 0 < ab && U(Bc, ab, w), U(fc, ra - Q, w), U(zc, p - ra, w)) : (U(fc, ra, w), U(zc, p - ra, w));
					U(ic, 1, w);
					s = a.getProperty(v, b, lb);
					s == h && (s = a.getFormattedValue(v, b), a[pa](v, b, lb, s));
					B && (w[x](Cc), w[x](s));
					w[x](Qa);
					a[oa](v, b, w[J](K))
				}
			}
		});

		function Gd(a, b) {
			a = (a || K)[sa]();
			return Fd[a] || b
		};

		function Hd(a, b, c, d) {
			Ic(a) && (a = a[ja]());
			Ic(b) && (b = b[ja]());
			Hc(a) == ob && (a = Id(a));
			Hc(b) == ob && (b = Id(b));
			this.ha = a;
			this.rb = b;
			this.pb = c;
			this.sb = d
		}
		Hd[G].contains = function(a) {
			var b = this.ha,
				c = this.rb;
			if(a == h) return b == h && c == h;
			Ic(a) ? a = a[ja]() : Hc(a) == ob && (a = Id(a));
			return(b == h || a >= b) && (c == h || a < c)
		};
		Hd[G].na = function() {
			return this.sb
		};

		function Jd(a, b, c, d, e) {
			Hd[H](this, a, b, c, K);
			this.I = b - a;
			if(0 >= this.I) this.I = 1;
			this.nb = Yc(Sc(d).k);
			this.ob = Yc(Sc(e).k)
		}
		Nc(Jd, Hd);
		Jd[G].na = function(a) {
			var b;
			b = this.nb;
			var c = this.ob,
				a = 1 - (a - this.ha) / this.I,
				a = t.min(t.max(a, 0), 1);
			b = [t[y](a * b[0] + (1 - a) * c[0]), t[y](a * b[1] + (1 - a) * c[1]), t[y](a * b[2] + (1 - a) * c[2])];
			return Wc(b[0], b[1], b[2])
		};

		function V() {
			this.w = []
		}
		V[G].addRange = function(a, b, c, d) {
			this.w[x](new Hd(a, b, c, d))
		};
		V[G].addGradientRange = function(a, b, c, d, e) {
			this.w[x](new Jd(a, b, c, d, e))
		};
		u(V[G], function(a, b) {
			var c = a[ga](b);
			if(c == P || c == nc || c == yb || c == zb || c == uc)
				for(c = 0; c < a[ma](); c++) {
					for(var d = a[ia](c, b), e = K, f = 0; f < this.w[F]; f++) {
						var n = this.w[f];
						if(n.contains(d)) {
							f = n.pb;
							d = n.na(d);
							f && (e += wb + f + Pa);
							d && (e += qb + d + Pa);
							break
						}
					}
					a[pa](c, b, oc, e)
				}
		});

		function Id(a) {
			return 36E5 * a[0] + 6E4 * a[1] + 1E3 * a[2] + (4 == a[F] ? a[3] : 0)
		};
		var X = {
			Db: ["\u516c\u5143\u524d", "\u516c\u5143"],
			Cb: ["\u516c\u5143\u524d", "\u516c\u5143"],
			ub: [Ma, "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			xb: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
			tb: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
			wb: "\u4e00\u6708,\u4e8c\u6708,\u4e09\u6708,\u56db\u6708,\u4e94\u6708,\u516d\u6708,\u4e03\u6708,\u516b\u6708,\u4e5d\u6708,\u5341\u6708,\u5341\u4e00\u6708,\u5341\u4e8c\u6708".split(","),
			vb: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
			zb: "\u4e00\u6708,\u4e8c\u6708,\u4e09\u6708,\u56db\u6708,\u4e94\u6708,\u516d\u6708,\u4e03\u6708,\u516b\u6708,\u4e5d\u6708,\u5341\u6708,\u5341\u4e00\u6708,\u5341\u4e8c\u6708".split(","),
			Hb: "\u661f\u671f\u65e5,\u661f\u671f\u4e00,\u661f\u671f\u4e8c,\u661f\u671f\u4e09,\u661f\u671f\u56db,\u661f\u671f\u4e94,\u661f\u671f\u516d".split(","),
			Bb: "\u661f\u671f\u65e5,\u661f\u671f\u4e00,\u661f\u671f\u4e8c,\u661f\u671f\u4e09,\u661f\u671f\u56db,\u661f\u671f\u4e94,\u661f\u671f\u516d".split(","),
			Gb: "\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","),
			Ab: "\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","),
			Wb: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
			yb: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),
			Fb: ["1\u5b63", "2\u5b63", "3\u5b63", "4\u5b63"],
			Eb: ["\u7b2c1\u5b63\u5ea6", "\u7b2c2\u5b63\u5ea6", "\u7b2c3\u5b63\u5ea6", "\u7b2c4\u5b63\u5ea6"],
			Mb: ["\u4e0a\u5348",
				"\u4e0b\u5348"
			],
			ia: ["y\u5e74M\u6708d\u65e5EEEE", "y\u5e74M\u6708d\u65e5", "yyyy-M-d", "yy-M-d"],
			ja: ["zzzzah\u65f6mm\u5206ss\u79d2", "zah\u65f6mm\u5206ss\u79d2", "ah:mm:ss", "ah:mm"],
			Rb: 6,
			Yb: [5, 6],
			Sb: 2
		};

		function Kd() {}

		function Ld(a) {
			if(typeof a == P) {
				var b = new Kd;
				b.ka = a;
				var c;
				c = a;
				if(0 == c) c = Ua;
				else {
					var d = [Ua, 0 > c ? L : Fa];
					c = t.abs(c);
					d[x](t[A](c / 60) % 100);
					c %= 60;
					0 != c && d[x](Oa, T(c, 2));
					c = d[J](K)
				}
				b.ma = c;
				0 == a ? a = fb : (c = [fb, 0 > a ? Fa : L], a = t.abs(a), c[x](t[A](a / 60) % 100), a %= 60, 0 != a && c[x](Oa, a), a = c[J](K));
				b.J = [a, a];
				b.v = [];
				return b
			}
			b = new Kd;
			b.ma = a.id;
			b.ka = -a.std_offset;
			b.J = a.names;
			b.v = a.transitions;
			return b
		}
		R = Kd[G];
		R.pa = function(a) {
			for(var a = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes()) / 36E5, b = 0; b < this.v[F] && a >= this.v[b];) b += 2;
			return 0 == b ? 0 : this.v[b - 1]
		};
		R.Ib = function(a) {
			var a = this.K(a),
				b = [Wa];
			b[x](0 >= a ? Fa : L);
			a = t.abs(a);
			b[x](T(t[A](a / 60) % 100, 2), Oa, T(a % 60, 2));
			return b[J](K)
		};
		R.Jb = function(a) {
			return this.J[this.oa(a) ? 3 : 1]
		};
		R.K = function(a) {
			return this.ka - this.pa(a)
		};
		R.Kb = function(a) {
			var a = -this.K(a),
				b = [0 > a ? L : Fa],
				a = t.abs(a);
			b[x](T(t[A](a / 60) % 100, 2), T(a % 60, 2));
			return b[J](K)
		};
		R.Lb = function(a) {
			return this.J[this.oa(a) ? 2 : 0]
		};
		R.oa = function(a) {
			return 0 < this.pa(a)
		};

		function Md(a) {
			this.u = [];
			typeof a == P ? this.q(a) : this.c(a)
		}
		var Nd = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvzZ]+/];
		R = Md[G];
		R.c = function(a) {
			for(; a;)
				for(var b = 0; b < Nd[F]; ++b) {
					var c = a.match(Nd[b]);
					if(c) {
						c = c[0];
						a = a[I](c[F]);
						0 == b && (c == Ba ? c = Aa : (c = c[I](1, c[F] - 1), c = c[z](/\'\'/, Aa)));
						this.u[x]({
							text: c,
							type: b
						});
						break
					}
				}
		};
		u(R, function(a, b) {
			var c = b ? 6E4 * (a[ta]() - b.K(a)) : 0,
				d = c ? new Date(a[ja]() + c) : a,
				e = d;
			b && d[ta]() != a[ta]() && (e = new Date(a[ja]() + (c + (0 < c ? -864E5 : 864E5))));
			for(var c = [], f = 0; f < this.u[F]; ++f) {
				var n = this.u[f].text;
				1 == this.u[f].type ? c[x](this.qb(n, a, d, e, b)) : c[x](n)
			}
			return c[J](K)
		});
		R.q = function(a) {
			if(4 > a) a = X.ia[a];
			else if(8 > a) a = X.ja[a - 4];
			else if(12 > a) a = X.ia[a - 8] + ua + X.ja[a - 8];
			else {
				this.q(10);
				return
			}
			this.c(a)
		};
		R.Ya = function(a, b) {
			var c = 0 < b.getFullYear() ? 1 : 0;
			return 4 <= a ? X.Cb[c] : X.Db[c]
		};
		R.jb = function(a, b) {
			var c = b.getFullYear();
			0 > c && (c = -c);
			return 2 == a ? T(c % 100, 2) : K + c
		};
		R.ab = function(a, b) {
			var c = b.getMonth();
			switch(a) {
				case 5:
					return X.ub[c];
				case 4:
					return X.tb[c];
				case 3:
					return X.vb[c];
				default:
					return T(c + 1, a)
			}
		};
		R.Ua = function(a, b) {
			return T(b[ha]() || 24, a)
		};
		R.Za = function(a, b) {
			return(b[ja]() % 1E3 / 1E3).toFixed(t.min(3, a))[la](2) + (3 < a ? T(0, a - 3) : K)
		};
		R.Xa = function(a, b) {
			var c = b.getDay();
			return 4 <= a ? X.Hb[c] : X.Gb[c]
		};
		R.Va = function(a, b) {
			var c = b[ha]();
			return X.Mb[12 <= c && 24 > c ? 1 : 0]
		};
		R.Ta = function(a, b) {
			return T(b[ha]() % 12 || 12, a)
		};
		R.Ra = function(a, b) {
			return T(b[ha]() % 12, a)
		};
		R.Sa = function(a, b) {
			return T(b[ha](), a)
		};
		R.eb = function(a, b) {
			var c = b.getDay();
			switch(a) {
				case 5:
					return X.yb[c];
				case 4:
					return X.Bb[c];
				case 3:
					return X.Ab[c];
				default:
					return T(c, 1)
			}
		};
		R.fb = function(a, b) {
			var c = b.getMonth();
			switch(a) {
				case 5:
					return X.xb[c];
				case 4:
					return X.wb[c];
				case 3:
					return X.zb[c];
				default:
					return T(c + 1, a)
			}
		};
		R.bb = function(a, b) {
			var c = t[A](b.getMonth() / 3);
			return 4 > a ? X.Fb[c] : X.Eb[c]
		};
		R.Wa = function(a, b) {
			return T(b.getDate(), a)
		};
		R.$a = function(a, b) {
			return T(b.getMinutes(), a)
		};
		R.cb = function(a, b) {
			return T(b.getSeconds(), a)
		};
		R.hb = function(a, b, c) {
			c = c || Ld(b[ta]());
			return 4 > a ? c.Kb(b) : c.Ib(b)
		};
		R.ib = function(a, b, c) {
			c = c || Ld(b[ta]());
			return 4 > a ? c.Lb(b) : c.Jb(b)
		};
		R.gb = function(a, b) {
			b = b || Ld(a[ta]());
			return b.ma
		};
		R.qb = function(a, b, c, d, e) {
			var f = a[F];
			switch(a[C](0)) {
				case Va:
					return this.Ya(f, c);
				case Ac:
					return this.jb(f, c);
				case bb:
					return this.ab(f, c);
				case Sb:
					return this.Ua(f, d);
				case db:
					return this.Za(f, d);
				case Ta:
					return this.Xa(f, c);
				case mb:
					return this.Va(f, d);
				case Nb:
					return this.Ta(f, d);
				case Ya:
					return this.Ra(f, d);
				case Xa:
					return this.Sa(f, d);
				case tb:
					return this.eb(f, c);
				case Za:
					return this.fb(f, c);
				case cb:
					return this.bb(f, c);
				case xb:
					return this.Wa(f, c);
				case Vb:
					return this.$a(f, d);
				case ic:
					return this.cb(f, d);
				case xc:
					return this.gb(b,
						e);
				case Bc:
					return this.ib(f, b, e);
				case gb:
					return this.hb(f, b, e);
				default:
					return K
			}
		};

		function Y(a) {
			a = new ad([a || {}, {
				formatType: kc,
				valueType: zb
			}]);
			this.b = a.d(dc);
			this.H = h;
			this.lb = a.W(Cb, Od);
			this.kb = a.W(yc, Pd);
			this.Y = h;
			a = a.X(tc);
			if(a != h) this.Y = Ld(60 * -a)
		}
		var Od = {
				Tb: Eb,
				Ub: Ub,
				Vb: Wb,
				SHORT: kc
			},
			Pd = {
				Pb: yb,
				Qb: zb,
				Xb: sc
			};

		function Qd(a, b) {
			switch(a) {
				case yb:
					switch(b) {
						case Eb:
							return 0;
						case Ub:
							return 1;
						case Wb:
							return 2;
						case kc:
							return 3
					}
				case zb:
					switch(b) {
						case Eb:
							return 8;
						case Ub:
							return 9;
						case Wb:
							return 10;
						case kc:
							return 11
					}
				case sc:
					switch(b) {
						case Eb:
							return 4;
						case Ub:
							return 5;
						case Wb:
							return 6;
						case kc:
							return 7
					}
			}
		}
		u(Y[G], function(a, b) {
			var c = a[ga](b);
			if(!(c != yb && c != zb))
				for(var c = this.la(c), d = a[ma](), e = 0; e < d; e++) {
					var f = a[ia](e, b),
						f = this.s(c, f);
					a[oa](e, b, f)
				}
		});
		Y[G].formatValue = function(a) {
			if(!this.H) this.H = this.la(this.kb);
			return this.s(this.H, a)
		};
		Y[G].la = function(a) {
			var b = this.b;
			S(b) || (b = Qd(a, this.lb));
			return new Md(b)
		};
		Y[G].s = function(a, b) {
			if(b === h) return K;
			var c = this.Y;
			c == h && (c = Ld(b[ta]()));
			return a[D](b, c)
		};

		function Rd(a, b) {
			var c = [N],
				d = Sd[b][0] & 7;
			if(0 < d) {
				c[x](M);
				for(var e = 0; e < d; e++) c[x](N)
			}
			return a[z](/0.00/g, c[J](K))
		}
		var Sd = {
			AED: [2, "dh", "\u062f.\u0625.", "DH"],
			AUD: [2, "$", "AU$"],
			BDT: [2, "\u09f3", "Tk"],
			BRL: [2, "R$", "R$"],
			CAD: [2, "$", "C$"],
			CHF: [2, "CHF", "CHF"],
			CLP: [0, "$", "CL$"],
			CNY: [2, "\u00a5", "RMB\u00a5"],
			COP: [0, "$", "COL$"],
			CRC: [0, "\u20a1", "CR\u20a1"],
			CZK: [2, "K\u010d", "K\u010d"],
			DKK: [18, "kr", "kr"],
			DOP: [2, "$", "RD$"],
			EGP: [2, "\u00a3", "LE"],
			EUR: [18, "\u20ac", "\u20ac"],
			GBP: [2, "\u00a3", "GB\u00a3"],
			HKD: [2, "$", "HK$"],
			ILS: [2, "\u20aa", "IL\u20aa"],
			INR: [2, "\u20b9", "Rs"],
			ISK: [0, "kr", "kr"],
			JMD: [2, "$", "JA$"],
			JPY: [0, "\u00a5", "JP\u00a5"],
			KRW: [0, "\u20a9", "KR\u20a9"],
			LKR: [2, "Rs", "SLRs"],
			MNT: [0, "\u20ae", "MN\u20ae"],
			MXN: [2, "$", "Mex$"],
			MYR: [2, "RM", "RM"],
			NOK: [18, "kr", "NOkr"],
			PAB: [2, "B/.", "B/."],
			PEN: [2, "S/.", "S/."],
			PHP: [2, "\u20b1", "Php"],
			PKR: [0, "Rs", "PKRs."],
			RUB: [2, "Rup", "Rup"],
			SAR: [2, "Rial", "Rial"],
			SEK: [2, "kr", "kr"],
			SGD: [2, "$", "S$"],
			THB: [2, "\u0e3f", "THB"],
			TRY: [2, "TL", "YTL"],
			TWD: [2, "NT$", "NT$"],
			USD: [2, "$", "US$"],
			UYU: [2, "$", "UY$"],
			VND: [0, "\u20ab", "VN\u20ab"],
			YER: [0, "Rial", "Rial"],
			ZAR: [2, "R", "ZAR"]
		};
		var Z = {
				DECIMAL_SEP: M,
				GROUP_SEP: Ga,
				fa: za,
				j: N,
				ca: Fa,
				aa: L,
				$: Ta,
				ga: Ec,
				U: "\u221e",
				V: "NaN",
				DECIMAL_PATTERN: "#,##0.###",
				da: "#E0",
				ba: "#,##0%",
				Z: "\u00a4#,##0.00;(\u00a4#,##0.00)",
				O: "USD"
			},
			Z = {
				DECIMAL_SEP: M,
				GROUP_SEP: Ga,
				fa: za,
				j: N,
				ca: Fa,
				aa: L,
				$: Ta,
				ga: Ec,
				U: "\u221e",
				V: "NaN",
				DECIMAL_PATTERN: "#,##0.###",
				da: "#E0",
				ba: "#,##0%",
				Z: "\u00a4#,##0.00",
				O: "CNY"
			};

		function Ud(a, b, c) {
			this.g = b || Z.O;
			this.ra = c || 0;
			this.p = 40;
			this.a = 1;
			this.C = 3;
			this.o = this.h = 0;
			this.M = i;
			this.A = this.z = K;
			this.l = L;
			this.m = K;
			this.f = 1;
			this.B = 3;
			this.n = this.N = i;
			typeof a == P ? this.q(a) : this.c(a)
		}
		R = Ud[G];
		R.c = function(a) {
			this.b = a[z](/ /g, Cc);
			var b = [0];
			this.z = this.t(a, b);
			var c = b[0];
			this.mb(a, b);
			c = b[0] - c;
			this.A = this.t(a, b);
			b[0] < a[F] && a[C](b[0]) == Pa ? (b[0]++, this.l = this.t(a, b), b[0] += c, this.m = this.t(a, b)) : (this.l = this.z + this.l, this.m += this.A)
		};
		R.q = function(a) {
			switch(a) {
				case 1:
					this.c(Z.DECIMAL_PATTERN);
					break;
				case 2:
					this.c(Z.da);
					break;
				case 3:
					this.c(Z.ba);
					break;
				case 4:
					this.c(Rd(Z.Z, this.g));
					break;
				default:
					throw l("Unsupported pattern type.");
			}
		};
		u(R, function(a) {
			if(ba(a)) return Z.V;
			var b = [],
				c = 0 > a || 0 == a && 0 > 1 / a;
			b[x](c ? this.l : this.z);
			if(isFinite(a)) a = a * (c ? -1 : 1) * this.f, this.n ? this.Qa(a, b) : this.D(a, this.a, b);
			else b[x](Z.U);
			b[x](c ? this.m : this.A);
			return b[J](K)
		});
		R.D = function(a, b, c) {
			for(var d = t.pow(10, this.C), a = t[y](a * d), e = t[A](a / d), f = t[A](a - e * d), n = 0 < this.h || 0 < f, p = K, a = e; 1.0E20 < a;) p = N + p, a = t[y](a / 10);
			var p = a + p,
				B = Z.DECIMAL_SEP,
				Q = Z.GROUP_SEP,
				a = Z.j.charCodeAt(0),
				W = p[F];
			if(0 < e || 0 < b) {
				for(e = W; e < b; e++) c[x](Z.j);
				for(e = 0; e < W; e++) c[x](String.fromCharCode(a + 1 * p[C](e))), 1 < W - e && 0 < this.B && 1 == (W - e) % this.B && c[x](Q)
			} else n || c[x](Z.j);
			(this.N || n) && c[x](B);
			b = K + (f + d);
			for(d = b[F]; b[C](d - 1) == N && d > this.h + 1;) d--;
			for(e = 1; e < d; e++) c[x](String.fromCharCode(a + 1 * b[C](e)))
		};
		R.ea = function(a, b) {
			b[x](Z.$);
			0 > a ? (a = -a, b[x](Z.aa)) : this.M && b[x](Z.ca);
			for(var c = K + a, d = c[F]; d < this.o; d++) b[x](Z.j);
			b[x](c)
		};
		R.Qa = function(a, b) {
			if(0 == a) this.D(a, this.a, b), this.ea(0, b);
			else {
				var c = t[A](t.log(a) / t.log(10)),
					a = a / t.pow(10, c),
					d = this.a;
				if(1 < this.p && this.p > this.a) {
					for(; 0 != c % this.p;) a *= 10, c--;
					d = 1
				} else 1 > this.a ? (c++, a /= 10) : (c -= this.a - 1, a *= t.pow(10, this.a - 1));
				this.D(a, d, b);
				this.ea(c, b)
			}
		};
		R.t = function(a, b) {
			for(var c = K, d = i, e = a[F]; b[0] < e; b[0]++) {
				var f = a[C](b[0]);
				if(f == Aa) b[0] + 1 < e && a[C](b[0] + 1) == Aa ? (b[0]++, c += Aa) : d = !d;
				else if(d) c += f;
				else switch(f) {
					case wa:
					case N:
					case Ga:
					case M:
					case Pa:
						return c;
					case Dc:
						if(b[0] + 1 < e && a[C](b[0] + 1) == Dc) b[0]++, c += this.g;
						else switch(this.ra) {
							case 0:
								c += Sd[this.g][1];
								break;
							case 2:
								var f = this.g,
									n = Sd[f],
									c = c + (f == n[1] ? f : f + ua + n[1]);
								break;
							case 1:
								c += Sd[this.g][2]
						}
						break;
					case za:
						if(1 != this.f) throw l(eb);
						this.f = 100;
						c += Z.fa;
						break;
					case Ec:
						if(1 != this.f) throw l(eb);
						this.f = 1E3;
						c += Z.ga;
						break;
					default:
						c += f
				}
			}
			return c
		};
		R.mb = function(a, b) {
			for(var c = -1, d = 0, e = 0, f = 0, n = -1, p = a[F], B = aa; b[0] < p && B; b[0]++) switch(a[C](b[0])) {
				case wa:
					0 < e ? f++ : d++;
					0 <= n && 0 > c && n++;
					break;
				case N:
					if(0 < f) throw l('Unexpected "0" in pattern "' + a + '"');
					e++;
					0 <= n && 0 > c && n++;
					break;
				case Ga:
					n = 0;
					break;
				case M:
					if(0 <= c) throw l('Multiple decimal separators in pattern "' + a + '"');
					c = d + e + f;
					break;
				case Ta:
					if(this.n) throw l('Multiple exponential symbols in pattern "' + a + '"');
					this.n = aa;
					this.o = 0;
					if(b[0] + 1 < p && a[C](b[0] + 1) == Fa) b[0]++, this.M = aa;
					for(; b[0] + 1 < p && a[C](b[0] + 1) == N;) b[0]++,
						this.o++;
					if(1 > d + e || 1 > this.o) throw l('Malformed exponential pattern "' + a + '"');
					B = i;
					break;
				default:
					b[0]--, B = i
			}
			0 == e && 0 < d && 0 <= c && (e = c, 0 == e && e++, f = d - e, d = e - 1, e = 1);
			if(0 > c && 0 < f || 0 <= c && (c < d || c > d + e) || 0 == n) throw l('Malformed pattern "' + a + '"');
			f = d + e + f;
			this.C = 0 <= c ? f - c : 0;
			if(0 <= c && (this.h = d + e - c, 0 > this.h)) this.h = 0;
			this.a = (0 <= c ? c : f) - d;
			if(this.n && (this.p = d + this.a, 0 == this.C && 0 == this.a)) this.a = 1;
			this.B = t.max(0, n);
			this.N = 0 == c || c == f
		};

		function $(a) {
			a = new ad([a || {}, {
				decimalSymbol: Vd,
				groupingSymbol: Wd,
				fractionDigits: 2,
				negativeParens: i,
				prefix: K,
				suffix: K,
				scaleFactor: 1
			}]);
			this.i = a.Ma(Db);
			this.Ka = a.r(Ab);
			this.F = a.r(Mb);
			this.Ia = a.r(ec);
			this.Ja = a.r(qc);
			this.G = a.Oa(Zb);
			this.S = a.La($b);
			this.b = a.Pa(dc);
			this.T = a.Na(jc);
			if(0 >= this.T) throw "Scale factor must be a positive number.";
		}
		var Vd = Z.DECIMAL_SEP,
			Wd = Z.GROUP_SEP,
			Xd = Z.DECIMAL_PATTERN;
		u($[G], function(a, b) {
			if(a[ga](b) == P)
				for(var c = 0; c < a[ma](); c++) {
					var d = a[ia](c, b);
					if(d != h) {
						var e = this.formatValue(d);
						a[oa](c, b, e);
						!/^[\s\xa0]*$/ [da](this.G == h ? K : K + this.G) && 0 > d && a[pa](c, b, oc, wb + this.G + Pa)
					}
				}
		});
		$[G].formatValue = function(a) {
			var b = h,
				b = a / this.T;
			this.b === h ? (this.S && (b = t.abs(b)), b = this.s(b), b = this.Ia + b + this.Ja, this.S && 0 > a && (b = Ca + b + Ea)) : b = (new Ud(this.b))[D](b);
			return b
		};
		$[G].s = function(a) {
			0 == this.i && (a = t[y](a));
			var b = [];
			0 > a && (a = -a, b[x](L));
			var c = t.pow(10, this.i),
				d = t[y](a * c),
				a = K + t[A](d / c),
				c = K + d % c;
			if(3 < a[F] && this.F) {
				d = a[F] % 3;
				0 < d && (b[x](a[I](0, d), this.F), a = a[I](d));
				for(; 3 < a[F];) b[x](a[I](0, 3), this.F), a = a[I](3)
			}
			b[x](a);
			0 < this.i && (b[x](this.Ka), c[F] < this.i && (c = La + c), b[x](c[I](c[F] - this.i)));
			return b[J](K)
		};

		function Yd(a) {
			this.b = a || K
		}

		function Zd(a, b, c, d, e, f, n) {
			return 0 < f && n[f - 1] == kb ? d : b.getFormattedValue(a, c[m(e, 10)])
		}
		u(Yd[G], function(a, b, c, d) {
			var e = b[0];
			c != h && Hc(c) == P && (e = c);
			c = d || h;
			for(d = 0; d < a[ma](); d++) {
				var f = this.b[z](/{(\d+)}/g, Mc(Zd, d, a, b)),
					f = f[z](/\\(.)/g, ya);
				c ? a[pa](d, e, c, f) : a[oa](d, e, f)
			}
		});
		j("google.visualization.NumberFormat", $);
		q($[G], O, $[G][D]);
		q($[G], "formatValue", $[G].formatValue);
		j("google.visualization.NumberFormat.DECIMAL_SEP", Vd);
		j("google.visualization.NumberFormat.GROUP_SEP", Wd);
		j("google.visualization.NumberFormat.DECIMAL_PATTERN", Xd);
		j("google.visualization.ColorFormat", V);
		q(V[G], O, V[G][D]);
		q(V[G], "addRange", V[G].addRange);
		q(V[G], nb, V[G].addGradientRange);
		j("google.visualization.BarFormat", Dd);
		q(Dd[G], O, Dd[G][D]);
		j("google.visualization.ArrowFormat", Oc);
		q(Oc[G], O, Oc[G][D]);
		j("google.visualization.PatternFormat", Yd);
		q(Yd[G], O, Yd[G][D]);
		j("google.visualization.DateFormat", Y);
		q(Y[G], O, Y[G][D]);
		q(Y[G], "formatValue", Y[G].formatValue);
		j("google.visualization.TableNumberFormat", $);
		q($[G], O, $[G][D]);
		j("google.visualization.TableColorFormat", V);
		q(V[G], O, V[G][D]);
		q(V[G], "addRange", V[G].addRange);
		q(V[G], nb, V[G].addGradientRange);
		j("google.visualization.TableBarFormat", Dd);
		q(Dd[G], O, Dd[G][D]);
		j("google.visualization.TableArrowFormat", Oc);
		q(Oc[G], O, Oc[G][D]);
		j("google.visualization.TablePatternFormat", Yd);
		q(Yd[G], O, Yd[G][D]);
		j("google.visualization.TableDateFormat", Y);
		q(Y[G], O, Y[G][D]);
	})();

	(function() {
		if(window["__gvizguard__"]) return;

		function e(a) {
			throw a;
		}
		var g = void 0,
			i = !0,
			k = null,
			l = !1,
			aa = encodeURIComponent,
			m = google_exportSymbol,
			ba = window,
			ca = Number,
			da = Object,
			ea = Infinity,
			n = Error,
			fa = parseInt,
			ga = parseFloat,
			ha = isFinite,
			ja = document,
			ka = decodeURIComponent,
			la = isNaN,
			p = google_exportProperty,
			na = RegExp,
			oa = Array,
			q = Math;

		function pa(a, b) {
			return a.width = b
		}

		function qa(a, b) {
			return a.innerHTML = b
		}

		function sa(a, b) {
			return a.currentTarget = b
		}

		function ua(a, b) {
			return a.left = b
		}

		function va(a, b) {
			return a.screenX = b
		}

		function wa(a, b) {
			return a.screenY = b
		}

		function xa(a, b) {
			return a.format = b
		}

		function ya(a, b) {
			return a.keyCode = b
		}

		function za(a, b) {
			return a.handleEvent = b
		}

		function Ba(a, b) {
			return a.depth = b
		}

		function Ca(a, b) {
			return a.type = b
		}

		function Ea(a, b) {
			return a.clear = b
		}

		function Fa(a, b) {
			return a.setContent = b
		}

		function Ga(a, b) {
			return a.getValue = b
		}

		function Ha(a, b) {
			return a.clientX = b
		}

		function Ia(a, b) {
			return a.clientY = b
		}

		function Ka(a, b) {
			return a.visibility = b
		}

		function La(a, b) {
			return a.setState = b
		}

		function Ma(a, b) {
			return a.length = b
		}

		function Na(a, b) {
			return a.setValue = b
		}

		function Oa(a, b) {
			return a.className = b
		}

		function Pa(a, b) {
			return a.next = b
		}

		function Qa(a, b) {
			return a.visualization = b
		}

		function Ra(a, b) {
			return a.clone = b
		}

		function Sa(a, b) {
			return a.target = b
		}

		function Ta(a, b) {
			return a.bottom = b
		}

		function Ua(a, b) {
			return a.contains = b
		}

		function Va(a, b) {
			return a.display = b
		}

		function Wa(a, b) {
			return a.height = b
		}

		function Xa(a, b) {
			return a.right = b
		}
		var Ya = "appendChild",
			s = "push",
			Za = "isCollapsed",
			$a = "getBoundingClientRect",
			ab = "getParent",
			bb = "open",
			cb = "test",
			eb = "relatedTarget",
			fb = "clearTimeout",
			t = "width",
			gb = "collapse",
			hb = "slice",
			u = "replace",
			ib = "nodeType",
			jb = "events",
			kb = "floor",
			lb = "getElementById",
			mb = "getOptions",
			nb = "RequestParameters",
			ob = "concat",
			pb = "charAt",
			qb = "createTextNode",
			rb = "getNumberOfColumns",
			sb = "value",
			tb = "getDataTable",
			ub = "preventDefault",
			vb = "insertBefore",
			wb = "targetTouches",
			v = "indexOf",
			xb = "metaKey",
			yb = "setEnd",
			x = "dispatchEvent",
			zb =
			"capture",
			Ab = "getColumnProperties",
			Bb = "nodeName",
			Cb = "currentTarget",
			y = "left",
			Db = "setColumnProperties",
			Eb = "screenX",
			Fb = "screenY",
			Gb = "match",
			Hb = "format",
			Ib = "getBoxObjectFor",
			Jb = "send",
			Kb = "getName",
			Lb = "charCode",
			Mb = "remove",
			Nb = "isError",
			Ob = "focus",
			Pb = "createElement",
			Qb = "getColumnLabel",
			Rb = "toDataTable",
			Sb = "scrollHeight",
			Tb = "keyCode",
			Ub = "getColumnType",
			Vb = "firstChild",
			Wb = "getSortedRows",
			Xb = "forEach",
			Yb = "clientLeft",
			Zb = "getTableRowIndex",
			$b = "setAttribute",
			ac = "clientTop",
			bc = "handleEvent",
			cc = "getRowProperties",
			dc = "getTableProperties",
			fc = "setRefreshInterval",
			gc = "depth",
			z = "type",
			hc = "childNodes",
			ic = "defaultView",
			jc = "setCell",
			kc = "bind",
			lc = "source",
			mc = "setContent",
			nc = "name",
			A = "getValue",
			oc = "nextSibling",
			pc = "addRows",
			qc = "setActive",
			rc = "getElementsByTagName",
			sc = "clientX",
			tc = "clientY",
			uc = "documentElement",
			vc = "substr",
			wc = "setState",
			xc = "scrollTop",
			yc = "toString",
			zc = "altKey",
			Ac = "getMonth",
			Bc = "setStart",
			Cc = "getView",
			Dc = "getNumberOfRows",
			B = "length",
			Ec = "propertyIsEnumerable",
			Fc = "getProperties",
			Gc = "addError",
			D = "prototype",
			Hc = "toJSON",
			Ic = "setValue",
			Jc = "clientWidth",
			Kc = "abort",
			Lc = "setTimeout",
			Mc = "setDataSourceUrl",
			Nc = "document",
			Oc = "ctrlKey",
			Pc = "split",
			Qc = "getColumnProperty",
			Rc = "constructor",
			Sc = "stopPropagation",
			Tc = "getColumnPattern",
			Uc = "location",
			Vc = "setOptions",
			E = "visualization",
			Wc = "disabled",
			Xc = "message",
			Yc = "hasOwnProperty",
			F = "style",
			Zc = "setView",
			$c = "setQuery",
			ad = "body",
			bd = "removeChild",
			cd = "clone",
			dd = "getDataSourceUrl",
			ed = "target",
			fd = "lastChild",
			G = "call",
			gd = "isEnabled",
			hd = "setDataTable",
			id = "removeAll",
			jd = "lastIndexOf",
			kd = "draw",
			ld = "getFullYear",
			md = "DataView",
			nd = "getRefreshInterval",
			od = "getState",
			pd = "clientHeight",
			qd = "scrollLeft",
			rd = "charCodeAt",
			sd = "getPackages",
			td = "getContainerId",
			ud = "bottom",
			vd = "currentStyle",
			wd = "href",
			xd = "substring",
			yd = "getQuery",
			zd = "rows",
			Ad = "apply",
			Bd = "shiftKey",
			Cd = "tagName",
			Dd = "addColumn",
			Ed = "element",
			Fd = "getFormattedValue",
			Gd = "errors",
			Hd = "parentNode",
			Id = "label",
			Jd = "offsetTop",
			I = "height",
			Kd = "splice",
			Ld = "join",
			Md = "setColumns",
			Nd = "execScript",
			Od = "toLowerCase",
			Pd = "right",
			J = "",
			Qd = "\n",
			Rd = "\n<\/script>",
			Sd = " ",
			Td = " [",
			Ud = " is duplicate in sortColumns.",
			Vd = ' name="',
			Wd = ' type="',
			Xd = '"',
			Yd = '" />',
			Zd = '" src="http://www.google.com/ig/ifr?url=',
			$d = '">\n',
			ae = "#",
			be = "#$1$1$2$2$3$3",
			ce = "%",
			de = "%22",
			ee = "%27",
			fe = "&",
			ge = "&amp;",
			he = "&gt;",
			ie = "&lt;",
			je = "&quot;",
			ke = "&requireauth=1&",
			le = "&up_",
			me = "&up__table_query_url=",
			ne = "').send(\n     function(response) {\n      new ",
			oe = "']});\n\n   function drawVisualization() {\n    new google.visualization.Query('",
			pe = "(",
			qe = '(\n       document.getElementById(\'visualization\')).\n        draw(response.getDataTable(), null);\n      });\n   }\n\n   google.setOnLoadCallback(drawVisualization);\n  <\/script>\n </head>\n <body>\n  <div id="visualization" style="width: 500px; height: 500px;"></div>\n </body>\n</html>',
			re = "(\\d*)(\\D*)",
			se = ")",
			te = "*",
			ue = ",",
			ve = ", ",
			we = "-active",
			xe = "-bg",
			ye = "-buttons",
			ze = "-caption",
			Ae = "-checkbox",
			Be = "-checked",
			Ce = "-content",
			De = "-default",
			Ee = "-disabled",
			Fe = "-dropdown",
			Ge = "-focused",
			He = "-highlight",
			Ie = "-horizontal",
			Je = "-hover",
			Ke = "-inner-box",
			Le = "-open",
			Me = "-outer-box",
			Ne = "-rtl",
			Pe = "-selected",
			Qe = "-title",
			Re = "-title-close",
			Se = "-title-draggable",
			Te = "-title-text",
			Ue = "-vertical",
			Ve = ".",
			We = "..",
			Xe = "./",
			Ye = "/",
			Ze = "/.",
			$e = "//",
			af = "/chart.html",
			bf = "/chart.js",
			cf = "/static/modules/gviz/",
			df =
			"/tq",
			ef = "/util/toolbar.css",
			ff = "0",
			gf = "0.5",
			hf = "0.6",
			jf = "00",
			kf = "000",
			lf = "1",
			mf = "1.0",
			nf = "1.9",
			of = "500",
			pf = "525",
			qf = "528",
			rf = "533.17.9",
			sf = "7",
			tf = "8",
			uf = ":",
			vf = ";",
			wf = ";sig:",
			xf = ";type:",
			yf = "<",
			zf = '<html>\n <head>\n  <title>Google Visualization API</title>\n  <script type="text/javascript" src="http://www.google.com/jsapi"><\/script>\n  <script type="text/javascript">\n   google.load(\'visualization\', \'1\', {packages: [\'',
			Af = '<iframe style="',
			Bf = '<script type="text/javascript" src="',
			Cf = "=",
			Df =
			">",
			Ef = "?",
			Ff = "@",
			Gf = "APPLET",
			Hf = "AREA",
			If = "Add to iGoogle",
			Jf = "BASE",
			Kf = "BODY",
			Lf = "BR",
			Mf = "BUTTON",
			Nf = "BarChart",
			Of = "BubbleChart",
			Pf = "COL",
			Qf = "CSS1Compat",
			Rf = "Chart options",
			Sf = "Column index ",
			Tf = "Component already rendered",
			Uf = "Content-Type",
			Vf = "Copy-Paste this code to an HTML page",
			Wf = "Dashboard",
			Xf = "Date(",
			Yf = "End",
			Zf = "EndToEnd",
			$f = "Export data as CSV",
			ag = "Export data as HTML",
			bg = "FRAME",
			cg = "GET",
			dg = "GeoChart",
			eg = "Google Visualization",
			fg = "Google_Visualization",
			gg = "HR",
			hg = "HTML",
			ig = "IFRAME",
			jg =
			"IMG",
			kg = "INPUT",
			lg = "ISINDEX",
			mg = "ImageChart",
			ng = "ImageRadarChart",
			og = "Invalid DataView column type.",
			pg = "Invalid listener argument",
			qg = "JavaScript",
			rg = "Javascript code",
			sg = "LINK",
			tg = "META",
			ug = "MSXML2.XMLHTTP",
			vg = "MSXML2.XMLHTTP.3.0",
			wg = "MSXML2.XMLHTTP.6.0",
			xg = "Microsoft.XMLHTTP",
			yg = "MozOpacity",
			zg = "NOFRAMES",
			Ag = "NOSCRIPT",
			Bg = "Name",
			Cg = "Not a valid 2D array.",
			Dg = "OBJECT",
			Eg = "PARAM",
			Fg = "POST",
			Gg = "Publish to web page",
			Hg = "Q",
			Ig = "Request timed out",
			Jg = "SCRIPT",
			Kg = "SELECT",
			Lg = "STYLE",
			Mg = "ScatterChart",
			Ng = "Start",
			Og = "StartToEnd",
			Pg = "StartToStart",
			Qg = "Style",
			Rg = "TEXTAREA",
			Sg = "TR",
			Tg = "Timed out after ",
			Ug = "To",
			Vg = "Type",
			Wg = "Unable to set parent component",
			Xg = "W",
			Yg = "Width",
			Zg = "[",
			$g = "[object Array]",
			ah = "[object Function]",
			bh = "[object Window]",
			ch = "\\\\",
			dh = "\\c",
			eh = "\\s",
			fh = "\\u",
			gh = "]",
			hh = "_",
			ih = "_table_query_refresh_interval",
			jh = "_table_query_url",
			kh = "abort",
			lh = "absolute",
			mh = "action",
			nh = "activate",
			oh = "activedescendant",
			ph = "afterhide",
			qh = "aftershow",
			rh = "alpha(opacity=",
			sh = "application/x-www-form-urlencoded;charset=utf-8",
			th = "aria-",
			uh = "array",
			vh = "auto",
			wh = "beforedrag",
			xh = "beforehide",
			yh = "beforeshow",
			zh = "block",
			Ah = "blur",
			Bh = "body",
			Ch = "boolean",
			Dh = "border-box",
			Eh = "border:0;vertical-align:bottom;",
			Fh = "borderBottom",
			Gh = "borderBottomWidth",
			Hh = "borderLeft",
			Ih = "borderLeftWidth",
			Jh = "borderRight",
			Kh = "borderRightWidth",
			Lh = "borderTop",
			Mh = "borderTopWidth",
			Nh = "br",
			Oh = "button",
			Ph = "call",
			Qh = "callee",
			Rh = "character",
			Sh = "chart",
			Th = "check",
			Uh = "checked",
			Vh = "cht",
			Wh = "class",
			Xh = "click",
			Yh = "close",
			Zh = "column",
			$h = "columnFilters[",
			ai = "complete",
			bi = "control",
			ci = "controls",
			di = "corechart",
			ei = "csv",
			fi = "dashboard",
			gi = "date",
			hi = "datetime",
			ii = "dblclick",
			ji = "deactivate",
			ki = "desc",
			li = "detailed_message",
			mi = "dialog",
			ni = "dialogselect",
			oi = "direction",
			pi = "disable",
			qi = "disabled",
			ri = "display",
			si = "display: none; padding-top: 2px",
			ti = "div",
			ui = "drag",
			vi = "dragstart",
			wi = "draw",
			xi = "earlycancel",
			yi = "emptyString",
			zi = "enable",
			Ai = "end",
			Bi = "enter",
			Ci = "error",
			Di = "expanded",
			Ei = "false",
			Fi = "filter",
			Gi = "fixed",
			Hi = "focus",
			Ii = "focusin",
			Ji = "focusout",
			Ki = "for",
			Li = "full",
			Mi =
			"function",
			Ni = "g",
			Oi = "gadgets.io.makeRequest",
			Pi = "gadgets.io.makeRequest failed",
			Qi = "getColumnIndex",
			Ri = "getColumnLabel",
			Si = "getColumnPattern",
			Ti = "getColumnProperties",
			Ui = "getColumnProperty",
			Vi = "getColumnRange",
			Wi = "getContainerId",
			Xi = "getDataSourceUrl",
			Yi = "getDataTable",
			Zi = "getDistinctValues",
			$i = "getFilteredRows",
			aj = "getFormattedValue",
			bj = "getNumberOfColumns",
			cj = "getNumberOfRows",
			dj = "getPackages",
			ej = "getQuery",
			fj = "getRefreshInterval",
			gj = "getRowProperties",
			hj = "getRowProperty",
			ij = "getSnapshot",
			jj = "getTableProperties",
			kj = "getTableProperty",
			lj = "goog-button",
			mj = "goog-container",
			nj = "goog-control",
			oj = "goog-custom-button",
			pj = "goog-inline-block ",
			qj = "goog-menu",
			rj = "goog-menu-button",
			sj = "goog-menuheader",
			tj = "goog-menuitem",
			uj = "goog-menuitem-accel",
			vj = "goog-menuitem-mnemonic-separator",
			wj = "goog-menuseparator",
			xj = "goog-modalpopup",
			yj = "goog-option",
			zj = "goog-option-selected",
			Aj = "google-visualization-toolbar-big-dialog",
			Bj = "google-visualization-toolbar-export-data",
			Cj = "google-visualization-toolbar-export-igoogle",
			Dj = "google-visualization-toolbar-html-code",
			Ej = "google-visualization-toolbar-html-code-explanation",
			Fj = "google-visualization-toolbar-small-dialog",
			Gj = "google-visualization-toolbar-triangle",
			Hj = "google.loader.GoogleApisBase",
			Ij = "google.visualization.",
			Jj = "google.visualization.Version",
			Kj = "hasLabelsColumn",
			Lj = "haspopup",
			Mj = "head",
			Nj = "hex",
			Oj = "hidden",
			Pj = "hide",
			Qj = "highlight",
			Rj = "horizontal",
			Sj = "html",
			Tj = "htmlcode",
			Uj = "http",
			Vj = "http%",
			Wj = "http://ajax.googleapis.com/ajax",
			Xj = "http://dummy.com",
			Yj = "http://www.google.com/ig/adde?moduleurl=",
			Zj =
			"https",
			$j = "https%",
			ak = "identity",
			bk = "iframe",
			ck = "igoogle",
			dk = "img",
			ek = "inline",
			fk = "innerText",
			gk = "input",
			hk = "invalid_query",
			ik = 'javascript:""',
			jk = "jscode",
			kk = "json",
			lk = "key",
			mk = "keydown",
			ok = "keypress",
			pk = "keyup",
			qk = "labelledby",
			rk = "leave",
			sk = "left",
			tk = "link",
			uk = "listbox",
			vk = "losecapture",
			wk = "makeRequest",
			xk = "make_request_failed",
			yk = "maxValue",
			zk = "medium",
			Ak = "menu",
			Bk = "menuitem",
			Ck = "message",
			Dk = "minValue",
			Ek = "modal-dialog",
			Fk = "modifier",
			Gk = "mousedown",
			Hk = "mousemove",
			Ik = "mouseout",
			Jk = "mouseover",
			Kk =
			"mouseup",
			Lk = "ms, aborting",
			Mk = "named",
			Nk = "native code",
			Ok = "new ",
			Pk = "nodeType",
			Qk = "none",
			Rk = "not_modified",
			Sk = "null",
			K = "number",
			Tk = "o",
			Uk = "object",
			Vk = "on",
			Wk = "opacity",
			Xk = "open",
			Yk = "option",
			Zk = "options",
			$k = "out:csv;",
			al = "out:html;",
			bl = "outerHTML",
			cl = "overflow",
			dl = "package",
			el = "padding: 2px",
			fl = "paddingBottom",
			gl = "paddingLeft",
			hl = "paddingRight",
			il = "paddingTop",
			jl = "pixelLeft",
			kl = "position",
			ll = "position:fixed;width:0;height:0;left:0;top:0;",
			ml = "pre",
			nl = "pressed",
			ol = "pub",
			pl = "px",
			ql = "r",
			rl = "range",
			sl =
			"ready",
			tl = "readystatechange",
			ul = "reason",
			vl = "refresh",
			wl = "relative",
			xl = "reqId:",
			yl = "resize",
			zl = "rgb",
			Al = "right",
			Bl = "role",
			Cl = "rs",
			Dl = "rtl",
			El = "script",
			Fl = "scroll",
			Gl = "select",
			Hl = "selected",
			Il = "separator",
			Jl = "setContainerId",
			Kl = "setDataSourceUrl",
			Ll = "setDataTable",
			Ml = "setOptions",
			Nl = "setPackages",
			Ol = "setQuery",
			Pl = "setRefreshInterval",
			Ql = "show",
			Rl = "solid",
			Sl = "sortColumns",
			Tl = "sortColumns[",
			Ul = "span",
			Vl = "splice",
			Wl = "start",
			Xl = "statechange",
			Yl = "static",
			M = "string",
			Zl = "stringify",
			$l = "style",
			am = "stylesheet",
			bm = "success",
			cm = "tabIndex",
			dm = "tabindex",
			em = "text/css",
			fm = "text/javascript",
			gm = "textContent",
			hm = "tick",
			im = "timeofday",
			jm = "timeout",
			km = "toJSON",
			lm = "touchcancel",
			mm = "touchend",
			nm = "touchmove",
			om = "touchstart",
			pm = "tqrt",
			qm = "tqx",
			rm = "transparent",
			sm = "true",
			tm = "type",
			um = "uncheck",
			vm = "unhighlight",
			wm = "unselect",
			xm = "unselectable",
			ym = "user_not_authenticated",
			zm = "value",
			Am = "var ",
			Bm = "var _et_ = 1;",
			Cm = "vertical",
			Dm = "visible",
			Em = "visualization",
			Fm = "warning",
			Gm = "width: 700px; height: 500px;",
			Hm = "window.event",
			Im = "withCredentials",
			Jm = "xhr",
			Km = "xhrpost",
			Lm = "zx",
			Mm = "{",
			Nm = "}",
			Om = "\u00a0",
			Pm = "\u00d7",
			Qm = "\u25bc",
			N, Rm = Rm || {},
			O = this;

		function Sm(a, b) {
			for(var c = a[Pc](Ve), d = b || O, f; f = c.shift();)
				if(P(d[f])) d = d[f];
				else return k;
			return d
		}

		function Tm() {}

		function Um(a) {
			a.qa = function() {
				return a.tk || (a.tk = new a)
			}
		}

		function Vm(a) {
			var b = typeof a;
			if(b == Uk)
				if(a) {
					if(a instanceof oa) return uh;
					if(a instanceof da) return b;
					var c = da[D][yc][G](a);
					if(c == bh) return Uk;
					if(c == $g || typeof a[B] == K && "undefined" != typeof a[Kd] && "undefined" != typeof a[Ec] && !a[Ec](Vl)) return uh;
					if(c == ah || "undefined" != typeof a[G] && "undefined" != typeof a[Ec] && !a[Ec](Ph)) return Mi
				} else return Sk;
			else if(b == Mi && "undefined" == typeof a[G]) return Uk;
			return b
		}

		function Wm(a) {
			return a !== g
		}

		function Xm(a) {
			return a === k
		}

		function P(a) {
			return a != k
		}

		function Q(a) {
			return Vm(a) == uh
		}

		function Ym(a) {
			var b = Vm(a);
			return b == uh || b == Uk && typeof a[B] == K
		}

		function Zm(a) {
			return $m(a) && typeof a[ld] == Mi
		}

		function R(a) {
			return typeof a == M
		}

		function an(a) {
			return typeof a == K
		}

		function bn(a) {
			return Vm(a) == Mi
		}

		function $m(a) {
			a = Vm(a);
			return a == Uk || a == uh || a == Mi
		}

		function cn(a) {
			return a[dn] || (a[dn] = ++en)
		}
		var dn = "closure_uid_" + q[kb](2147483648 * q.random())[yc](36),
			en = 0;

		function fn(a) {
			var b = Vm(a);
			if(b == Uk || b == uh) {
				if(a[cd]) return a[cd]();
				var b = b == uh ? [] : {},
					c;
				for(c in a) b[c] = fn(a[c]);
				return b
			}
			return a
		}

		function gn(a, b, c) {
			return a[G][Ad](a[kc], arguments)
		}

		function hn(a, b, c) {
			a || e(n());
			if(2 < arguments[B]) {
				var d = oa[D][hb][G](arguments, 2);
				return function() {
					var c = oa[D][hb][G](arguments);
					oa[D].unshift[Ad](c, d);
					return a[Ad](b, c)
				}
			}
			return function() {
				return a[Ad](b, arguments)
			}
		}

		function jn(a, b, c) {
			jn = Function[D][kc] && -1 != Function[D][kc][yc]()[v](Nk) ? gn : hn;
			return jn[Ad](k, arguments)
		}

		function kn(a, b) {
			var c = oa[D][hb][G](arguments, 1);
			return function() {
				var b = oa[D][hb][G](arguments);
				b.unshift[Ad](b, c);
				return a[Ad](this, b)
			}
		}
		var ln = Date.now || function() {
			return +new Date
		};

		function mn(a) {
			if(O[Nd]) O[Nd](a, qg);
			else if(O.eval)
				if(nn == k && (O.eval(Bm), "undefined" != typeof O._et_ ? (delete O._et_, nn = i) : nn = l), nn) O.eval(a);
				else {
					var b = O[Nc],
						c = b[Pb](El);
					Ca(c, fm);
					c.defer = l;
					c[Ya](b[qb](a));
					b[ad][Ya](c);
					b[ad][bd](c)
				}
			else e(n("goog.globalEval not available"))
		}
		var nn = k;

		function S(a, b) {
			function c() {}
			c.prototype = b[D];
			a.b = b[D];
			a.prototype = new c;
			a[D].constructor = a
		};

		function on(a) {
			var b;
			if(0 == ja[rc](Mj)[B]) {
				b = ja[rc](Sj)[0];
				var c = ja[rc](Bh)[0],
					d = ja[Pb](Mj);
				b[vb](d, c)
			}
			b = ja[rc](Mj)[0];
			c = ja[Pb](El);
			Ca(c, fm);
			c.src = a;
			b[Ya](c)
		}

		function pn(a) {
			return function(b) {
				google[E][Gd][id](a);
				var c = b[Nb]();
				c && google[E][Gd].addErrorFromQueryResponse(a, b);
				return !c
			}
		};

		function qn(a) {
			a = J + a;
			if(/^\s*$/ [cb](a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/ [cb](a[u](/\\["\\\/bfnrtu]/g, Ff)[u](/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, gh)[u](/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, J))) try {
				return eval(pe + a + se)
			} catch(b) {}
			e(n("Invalid JSON string: " + a))
		}

		function rn(a) {
			this.Wd = a
		}
		rn[D].cl = function(a) {
			var b = [];
			this.Bf(a, b);
			return b[Ld](J)
		};
		rn[D].Bf = function(a, b) {
			switch(typeof a) {
				case M:
					this.nh(a, b);
					break;
				case K:
					this.wk(a, b);
					break;
				case Ch:
					b[s](a);
					break;
				case "undefined":
					b[s](Sk);
					break;
				case Uk:
					if(a == k) {
						b[s](Sk);
						break
					}
					if(Q(a)) {
						this.vk(a, b);
						break
					}
					this.xk(a, b);
					break;
				case Mi:
					break;
				default:
					e(n("Unknown type: " + typeof a))
			}
		};
		var sn = {
				'"': '\\"',
				"\\": ch,
				"/": "\\/",
				"\u0008": "\\b",
				"\u000c": "\\f",
				"\n": "\\n",
				"\r": "\\r",
				"\t": "\\t",
				"\u000b": "\\u000b"
			},
			tn = /\uffff/ [cb]("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
		rn[D].nh = function(a, b) {
			b[s](Xd, a[u](tn, function(a) {
				if(a in sn) return sn[a];
				var b = a[rd](0),
					f = fh;
				16 > b ? f += kf : 256 > b ? f += jf : 4096 > b && (f += ff);
				return sn[a] = f + b[yc](16)
			}), Xd)
		};
		rn[D].wk = function(a, b) {
			b[s](ha(a) && !la(a) ? a : Sk)
		};
		rn[D].vk = function(a, b) {
			var c = a[B];
			b[s](Zg);
			for(var d = J, f = 0; f < c; f++) b[s](d), d = a[f], this.Bf(this.Wd ? this.Wd[G](a, J + f, d) : d, b), d = ue;
			b[s](gh)
		};
		rn[D].xk = function(a, b) {
			b[s](Mm);
			var c = J,
				d;
			for(d in a)
				if(da[D][Yc][G](a, d)) {
					var f = a[d];
					typeof f != Mi && (b[s](c), this.nh(d, b), b[s](uf), this.Bf(this.Wd ? this.Wd[G](a, d, f) : f, b), c = ue)
				}
			b[s](Nm)
		};

		function un(a) {
			a = vn(a, wn);
			return(new rn(g)).cl(a)
		}

		function xn(a) {
			qn(a);
			return yn(a)
		}

		function yn(a) {
			a = zn(a);
			return eval(pe + a + se)
		}

		function vn(a, b) {
			var a = b(a),
				c = Vm(a);
			if(c == Uk || c == uh) {
				var c = c == uh ? [] : {},
					d;
				for(d in a) {
					var f = vn(a[d], b);
					Wm(f) && (c[d] = f)
				}
			} else c = a;
			return c
		}

		function zn(a) {
			return a[u](/"(Date\([\d,\s]*\))"/g, function(a, c) {
				return Ok + c
			})
		}

		function wn(a) {
			Zm(a) && (a = 0 !== a.getMilliseconds() ? [a[ld](), a[Ac](), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()] : 0 !== a.getSeconds() || 0 !== a.getMinutes() || 0 !== a.getHours() ? [a[ld](), a[Ac](), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()] : [a[ld](), a[Ac](), a.getDate()], a = Xf + a[Ld](ve) + se);
			return a
		};

		function An(a) {
			return /^[\s\xa0]*$/ [cb](a == k ? J : J + a)
		}

		function Bn(a) {
			return a[u](/[\t\r\n ]+/g, Sd)[u](/^[\t\r\n ]+|[\t\r\n ]+$/g, J)
		}

		function Cn(a) {
			return a[u](/^[\s\xa0]+|[\s\xa0]+$/g, J)
		}
		var Dn = /^[a-zA-Z0-9\-_.!~*'()]*$/;

		function En(a) {
			a = J + a;
			return !Dn[cb](a) ? aa(a) : a
		}

		function Fn(a, b) {
			if(b) return a[u](Gn, ge)[u](Hn, ie)[u](In, he)[u](Jn, je);
			if(!Kn[cb](a)) return a; - 1 != a[v](fe) && (a = a[u](Gn, ge)); - 1 != a[v](yf) && (a = a[u](Hn, ie)); - 1 != a[v](Df) && (a = a[u](In, he)); - 1 != a[v](Xd) && (a = a[u](Jn, je));
			return a
		}
		var Gn = /&/g,
			Hn = /</g,
			In = />/g,
			Jn = /\"/g,
			Kn = /[&<>\"]/;

		function Ln(a, b) {
			this.x = Wm(a) ? a : 0;
			this.y = Wm(b) ? b : 0
		}
		Ra(Ln[D], function() {
			return new Ln(this.x, this.y)
		});

		function Mn(a, b) {
			return new Ln(a.x - b.x, a.y - b.y)
		};

		function Nn(a, b) {
			pa(this, a);
			Wa(this, b)
		}
		Ra(Nn[D], function() {
			return new Nn(this[t], this[I])
		});
		Nn[D].floor = function() {
			pa(this, q[kb](this[t]));
			Wa(this, q[kb](this[I]));
			return this
		};
		Nn[D].round = function() {
			pa(this, q.round(this[t]));
			Wa(this, q.round(this[I]));
			return this
		};
		var On = na("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

		function Pn(a) {
			return a && ka(a)
		}

		function Qn(a, b) {
			return b[Gb](On)[a] || k
		}
		var Rn = /#|$/;
		var Sn = /\/spreadsheet/,
			Tn = /\/(ccc|tq|pub)$/,
			Un = /^\/a\/(\w+.)*\w+/,
			Vn = /^(\/a\/(\w+.)*\w+)?/,
			Wn = /^spreadsheets?[0-9]?\.google\.com$/,
			Xn = /^docs\.google\.com*$/,
			Yn = /^(trix|spreadsheets|docs|webdrive)-[a-z]+\.corp\.google\.com/,
			Zn = /^(\w*\.){1,2}corp\.google\.com$/;

		function $n(a) {
			var b = Pn(Qn(3, a)),
				c = Wn[cb](b),
				d = Yn[cb](b),
				f = Zn[cb](b),
				b = Xn[cb](b),
				h = Pn(Qn(5, a)),
				j = na(Vn[lc] + Tn[lc]),
				h = (a = na(Vn[lc] + Sn[lc] + Tn[lc])[cb](h)) || j[cb](h);
			return b && a || (d || f || c) && h
		};
		var ao = oa[D],
			bo = ao[v] ? function(a, b, c) {
				return ao[v][G](a, b, c)
			} : function(a, b, c) {
				c = c == k ? 0 : 0 > c ? q.max(0, a[B] + c) : c;
				if(R(a)) return !R(b) || 1 != b[B] ? -1 : a[v](b, c);
				for(; c < a[B]; c++)
					if(c in a && a[c] === b) return c;
				return -1
			},
			co = ao[Xb] ? function(a, b, c) {
				ao[Xb][G](a, b, c)
			} : function(a, b, c) {
				for(var d = a[B], f = R(a) ? a[Pc](J) : a, h = 0; h < d; h++) h in f && b[G](c, f[h], h, a)
			},
			eo = ao.filter ? function(a, b, c) {
				return ao.filter[G](a, b, c)
			} : function(a, b, c) {
				for(var d = a[B], f = [], h = 0, j = R(a) ? a[Pc](J) : a, o = 0; o < d; o++)
					if(o in j) {
						var r = j[o];
						b[G](c, r, o, a) &&
							(f[h++] = r)
					}
				return f
			},
			fo = ao.map ? function(a, b, c) {
				return ao.map[G](a, b, c)
			} : function(a, b, c) {
				for(var d = a[B], f = oa(d), h = R(a) ? a[Pc](J) : a, j = 0; j < d; j++) j in h && (f[j] = b[G](c, h[j], j, a));
				return f
			},
			go = ao.every ? function(a, b, c) {
				return ao.every[G](a, b, c)
			} : function(a, b, c) {
				for(var d = a[B], f = R(a) ? a[Pc](J) : a, h = 0; h < d; h++)
					if(h in f && !b[G](c, f[h], h, a)) return l;
				return i
			};

		function ho(a, b) {
			return 0 <= bo(a, b)
		}

		function io(a, b) {
			var c = bo(a, b),
				d;
			(d = 0 <= c) && ao[Kd][G](a, c, 1);
			return d
		}

		function jo(a) {
			return ao[ob][Ad](ao, arguments)
		}

		function ko(a) {
			if(Q(a)) return jo(a);
			for(var b = [], c = 0, d = a[B]; c < d; c++) b[c] = a[c];
			return b
		}

		function lo(a, b) {
			for(var c = 1; c < arguments[B]; c++) {
				var d = arguments[c],
					f;
				if(Q(d) || (f = Ym(d)) && d[Yc](Qh)) a[s][Ad](a, d);
				else if(f)
					for(var h = a[B], j = d[B], o = 0; o < j; o++) a[h + o] = d[o];
				else a[s](d)
			}
		}

		function mo(a, b, c, d) {
			return ao[Kd][Ad](a, no(arguments, 1))
		}

		function no(a, b, c) {
			return 2 >= arguments[B] ? ao[hb][G](a, b) : ao[hb][G](a, b, c)
		}

		function oo(a, b) {
			ao.sort[G](a, b || po)
		}

		function qo(a, b) {
			for(var c = 0; c < a[B]; c++) a[c] = {
				index: c,
				value: a[c]
			};
			var d = b || po;
			oo(a, function(a, b) {
				return d(a[sb], b[sb]) || a.index - b.index
			});
			for(c = 0; c < a[B]; c++) a[c] = a[c][sb]
		}

		function po(a, b) {
			return a > b ? 1 : a < b ? -1 : 0
		};

		function ro(a, b, c) {
			for(var d in a) b[G](c, a[d], d, a)
		}

		function so(a) {
			var b = [],
				c = 0,
				d;
			for(d in a) b[c++] = a[d];
			return b
		}

		function to(a) {
			var b = [],
				c = 0,
				d;
			for(d in a) b[c++] = d;
			return b
		}

		function uo(a, b) {
			for(var c in a)
				if(a[c] == b) return i;
			return l
		}

		function vo(a, b) {
			var c;
			(c = b in a) && delete a[b];
			return c
		}

		function wo(a) {
			var b = {},
				c;
			for(c in a) b[c] = a[c];
			return b
		}

		function xo(a) {
			var b = Vm(a);
			if(b == Uk || b == uh) {
				if(a[cd]) return a[cd]();
				var b = b == uh ? [] : {},
					c;
				for(c in a) b[c] = xo(a[c]);
				return b
			}
			return a
		}
		var yo = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");

		function zo(a, b) {
			for(var c, d, f = 1; f < arguments[B]; f++) {
				d = arguments[f];
				for(c in d) a[c] = d[c];
				for(var h = 0; h < yo[B]; h++) c = yo[h], da[D][Yc][G](d, c) && (a[c] = d[c])
			}
		};
		var Ao, Bo, Co, Do, Eo, Fo;

		function Go() {
			return O.navigator ? O.navigator.userAgent : k
		}

		function Ho() {
			return O.navigator
		}
		Eo = Do = Co = Bo = Ao = l;
		var Io;
		if(Io = Go()) {
			var Jo = Ho();
			Ao = 0 == Io[v]("Opera");
			Bo = !Ao && -1 != Io[v]("MSIE");
			Do = (Co = !Ao && -1 != Io[v]("WebKit")) && -1 != Io[v]("Mobile");
			Eo = !Ao && !Co && "Gecko" == Jo.product
		}
		var Ko = Ao,
			T = Bo,
			Lo = Eo,
			Mo = Co,
			No = Do,
			Oo = Ho(),
			Po = Oo && Oo.platform || J;
		Fo = -1 != Po[v]("Mac");
		Po[v]("Win");
		Po[v]("Linux");
		var Qo = !!Ho() && -1 != (Ho().appVersion || J)[v]("X11"),
			Ro;
		a: {
			var So = J,
				To;
			if(Ko && O.opera) var Uo = O.opera.version,
				So = typeof Uo == Mi ? Uo() : Uo;
			else if(Lo ? To = /rv\:([^\);]+)(\)|;)/ : T ? To = /MSIE\s+([^\);]+)(\)|;)/ : Mo && (To = /WebKit\/(\S+)/), To) var Vo = To.exec(Go()),
				So = Vo ? Vo[1] : J;
			if(T) {
				var Wo, Xo = O[Nc];
				Wo = Xo ? Xo.documentMode : g;
				if(Wo > ga(So)) {
					Ro = J + Wo;
					break a
				}
			}
			Ro = So
		}
		var Yo = Ro,
			Zo = {};

		function $o(a) {
			var b;
			if(!(b = Zo[a])) {
				b = 0;
				for(var c = Cn(J + Yo)[Pc](Ve), d = Cn(J + a)[Pc](Ve), f = q.max(c[B], d[B]), h = 0; 0 == b && h < f; h++) {
					var j = c[h] || J,
						o = d[h] || J,
						r = na(re, Ni),
						w = na(re, Ni);
					do {
						var C = r.exec(j) || [J, J, J],
							L = w.exec(o) || [J, J, J];
						if(0 == C[0][B] && 0 == L[0][B]) break;
						b = ((0 == C[1][B] ? 0 : fa(C[1], 10)) < (0 == L[1][B] ? 0 : fa(L[1], 10)) ? -1 : (0 == C[1][B] ? 0 : fa(C[1], 10)) > (0 == L[1][B] ? 0 : fa(L[1], 10)) ? 1 : 0) || ((0 == C[2][B]) < (0 == L[2][B]) ? -1 : (0 == C[2][B]) > (0 == L[2][B]) ? 1 : 0) || (C[2] < L[2] ? -1 : C[2] > L[2] ? 1 : 0)
					} while (0 == b)
				}
				b = Zo[a] = 0 <= b
			}
			return b
		}
		var ap = {};

		function bp(a) {
			return ap[a] || (ap[a] = T && ja.documentMode && ja.documentMode >= a)
		};
		var cp, dp = !T || bp(9);
		!Lo && !T || T && bp(9) || Lo && $o("1.9.1");
		var ep = T && !$o("9");

		function fp(a) {
			return(a = a.className) && typeof a[Pc] == Mi ? a[Pc](/\s+/) : []
		}

		function gp(a, b) {
			var c = fp(a),
				d = no(arguments, 1),
				f;
			f = c;
			for(var h = 0, j = 0; j < d[B]; j++) ho(f, d[j]) || (f[s](d[j]), h++);
			f = h == d[B];
			Oa(a, c[Ld](Sd));
			return f
		}

		function hp(a, b) {
			var c = fp(a),
				d = no(arguments, 1),
				f;
			f = c;
			for(var h = 0, j = 0; j < f[B]; j++) ho(d, f[j]) && (mo(f, j--, 1), h++);
			f = h == d[B];
			Oa(a, c[Ld](Sd));
			return f
		};

		function ip(a) {
			return a ? new jp(kp(a)) : cp || (cp = new jp)
		}

		function lp(a) {
			return R(a) ? ja[lb](a) : a
		}

		function mp(a, b) {
			ro(b, function(b, d) {
				d == $l ? a[F].cssText = b : d == Wh ? Oa(a, b) : d == Ki ? a.htmlFor = b : d in np ? a[$b](np[d], b) : 0 == d[jd](th, 0) ? a[$b](d, b) : a[d] = b
			})
		}
		var np = {
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			colspan: "colSpan",
			rowspan: "rowSpan",
			valign: "vAlign",
			height: "height",
			width: "width",
			usemap: "useMap",
			frameborder: "frameBorder",
			maxlength: "maxLength",
			type: tm
		};

		function op(a) {
			var b = a[Nc];
			if(Mo && !$o( of ) && !No) {
				"undefined" == typeof a.innerHeight && (a = ba);
				var b = a.innerHeight,
					c = a[Nc][uc][Sb];
				a == a.top && c < b && (b -= 15);
				return new Nn(a.innerWidth, b)
			}
			a = pp(b) ? b[uc] : b[ad];
			return new Nn(a[Jc], a[pd])
		}

		function qp(a) {
			return a ? a.parentWindow || a[ic] : ba
		}

		function rp(a, b, c) {
			return sp(ja, arguments)
		}

		function sp(a, b) {
			var c = b[0],
				d = b[1];
			if(!dp && d && (d[nc] || d[z])) {
				c = [yf, c];
				d[nc] && c[s](Vd, Fn(d[nc]), Xd);
				if(d[z]) {
					c[s](Wd, Fn(d[z]), Xd);
					var f = {};
					zo(f, d);
					d = f;
					delete d[z]
				}
				c[s](Df);
				c = c[Ld](J)
			}
			c = a[Pb](c);
			d && (R(d) ? Oa(c, d) : Q(d) ? gp[Ad](k, [c][ob](d)) : mp(c, d));
			2 < b[B] && tp(a, c, b, 2);
			return c
		}

		function tp(a, b, c, d) {
			function f(c) {
				c && b[Ya](R(c) ? a[qb](c) : c)
			}
			for(; d < c[B]; d++) {
				var h = c[d];
				Ym(h) && !up(h) ? co(vp(h) ? ko(h) : h, f) : f(h)
			}
		}

		function pp(a) {
			return a.compatMode == Qf
		}

		function wp(a, b) {
			tp(kp(a), a, arguments, 1)
		}

		function xp(a) {
			for(var b; b = a[Vb];) a[bd](b)
		}

		function yp(a, b) {
			b[Hd] && b[Hd][vb](a, b)
		}

		function zp(a) {
			return a && a[Hd] ? a[Hd][bd](a) : k
		}

		function up(a) {
			return $m(a) && 0 < a[ib]
		}

		function Ap(a, b) {
			if(a.contains && 1 == b[ib]) return a == b || a.contains(b);
			if("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
			for(; b && a != b;) b = b[Hd];
			return b == a
		}

		function kp(a) {
			return 9 == a[ib] ? a : a.ownerDocument || a[Nc]
		}

		function Bp(a, b) {
			if(gm in a) a.textContent = b;
			else if(a[Vb] && 3 == a[Vb][ib]) {
				for(; a[fd] != a[Vb];) a[bd](a[fd]);
				a[Vb].data = b
			} else xp(a), a[Ya](kp(a)[qb](b))
		}

		function Cp(a) {
			if(bl in a) return a.outerHTML;
			var b = kp(a)[Pb](ti);
			b[Ya](a.cloneNode(i));
			return b.innerHTML
		}
		var Dp = {
				SCRIPT: 1,
				STYLE: 1,
				HEAD: 1,
				IFRAME: 1,
				OBJECT: 1
			},
			Ep = {
				IMG: Sd,
				BR: Qd
			};

		function Fp(a) {
			var b = a.getAttributeNode(dm);
			return b && b.specified ? (a = a.tabIndex, an(a) && 0 <= a && 32768 > a) : l
		}

		function Gp(a, b) {
			b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute(cm))
		}

		function Hp(a) {
			var b = [];
			Ip(a, b, l);
			return b[Ld](J)
		}

		function Ip(a, b, c) {
			if(!(a[Bb] in Dp))
				if(3 == a[ib]) c ? b[s]((J + a.nodeValue)[u](/(\r\n|\r|\n)/g, J)) : b[s](a.nodeValue);
				else if(a[Bb] in Ep) b[s](Ep[a[Bb]]);
			else
				for(a = a[Vb]; a;) Ip(a, b, c), a = a[oc]
		}

		function vp(a) {
			if(a && typeof a[B] == K) {
				if($m(a)) return typeof a.item == Mi || typeof a.item == M;
				if(bn(a)) return typeof a.item == Mi
			}
			return l
		}

		function jp(a) {
			this.o = a || O[Nc] || ja
		}
		N = jp[D];
		N.t = ip;
		N.a = function(a) {
			return R(a) ? this.o[lb](a) : a
		};
		N.setProperties = mp;
		N.Tj = function(a) {
			a = a || this.ed();
			return op(a || ba)
		};
		N.d = function(a, b, c) {
			return sp(this.o, arguments)
		};
		N.createElement = function(a) {
			return this.o[Pb](a)
		};
		N.createTextNode = function(a) {
			return this.o[qb](a)
		};
		N.ff = function() {
			return pp(this.o)
		};
		N.ed = function() {
			return this.o.parentWindow || this.o[ic]
		};
		N.Sj = function() {
			return !Mo && pp(this.o) ? this.o[uc] : this.o[ad]
		};
		N.ac = function() {
			var a = this.o,
				b = !Mo && pp(a) ? a[uc] : a[ad],
				a = a.parentWindow || a[ic];
			return new Ln(a.pageXOffset || b[qd], a.pageYOffset || b[xc])
		};
		N.appendChild = function(a, b) {
			a[Ya](b)
		};
		N.vg = xp;
		N.se = yp;
		N.removeNode = zp;
		Ua(N, Ap);
		var Jp = "StopIteration" in O ? O.StopIteration : n("StopIteration");

		function Kp() {}
		Pa(Kp[D], function() {
			e(Jp)
		});
		Kp[D].Qd = function() {
			return this
		};

		function Lp(a) {
			if(typeof a.Ja == Mi) return a.Ja();
			if(R(a)) return a[Pc](J);
			if(Ym(a)) {
				for(var b = [], c = a[B], d = 0; d < c; d++) b[s](a[d]);
				return b
			}
			return so(a)
		}

		function Mp(a, b, c) {
			if(typeof a[Xb] == Mi) a[Xb](b, c);
			else if(Ym(a) || R(a)) co(a, b, c);
			else {
				var d;
				if(typeof a.Tb == Mi) d = a.Tb();
				else if(typeof a.Ja != Mi)
					if(Ym(a) || R(a)) {
						d = [];
						for(var f = a[B], h = 0; h < f; h++) d[s](h)
					} else d = to(a);
				else d = g;
				for(var f = Lp(a), h = f[B], j = 0; j < h; j++) b[G](c, f[j], d && d[j], a)
			}
		};

		function Np(a, b) {
			this.O = {};
			this.D = [];
			var c = arguments[B];
			if(1 < c) {
				c % 2 && e(n("Uneven number of arguments"));
				for(var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
			} else a && this.mf(a)
		}
		N = Np[D];
		N.m = 0;
		N.Jb = 0;
		N.Nd = function() {
			return this.m
		};
		N.Ja = function() {
			this.Bd();
			for(var a = [], b = 0; b < this.D[B]; b++) a[s](this.O[this.D[b]]);
			return a
		};
		N.Tb = function() {
			this.Bd();
			return this.D[ob]()
		};
		N.Pa = function(a) {
			return Op(this.O, a)
		};
		Ea(N, function() {
			this.O = {};
			Ma(this.D, 0);
			this.Jb = this.m = 0
		});
		N.remove = function(a) {
			return Op(this.O, a) ? (delete this.O[a], this.m--, this.Jb++, this.D[B] > 2 * this.m && this.Bd(), i) : l
		};
		N.Bd = function() {
			if(this.m != this.D[B]) {
				for(var a = 0, b = 0; a < this.D[B];) {
					var c = this.D[a];
					Op(this.O, c) && (this.D[b++] = c);
					a++
				}
				Ma(this.D, b)
			}
			if(this.m != this.D[B]) {
				for(var d = {}, b = a = 0; a < this.D[B];) c = this.D[a], Op(d, c) || (this.D[b++] = c, d[c] = 1), a++;
				Ma(this.D, b)
			}
		};
		N.get = function(a, b) {
			return Op(this.O, a) ? this.O[a] : b
		};
		N.set = function(a, b) {
			Op(this.O, a) || (this.m++, this.D[s](a), this.Jb++);
			this.O[a] = b
		};
		N.mf = function(a) {
			var b;
			a instanceof Np ? (b = a.Tb(), a = a.Ja()) : (b = to(a), a = so(a));
			for(var c = 0; c < b[B]; c++) this.set(b[c], a[c])
		};
		Ra(N, function() {
			return new Np(this)
		});
		N.Qd = function(a) {
			this.Bd();
			var b = 0,
				c = this.D,
				d = this.O,
				f = this.Jb,
				h = this,
				j = new Kp;
			Pa(j, function() {
				for(;;) {
					f != h.Jb && e(n("The map has changed since the iterator was created"));
					b >= c[B] && e(Jp);
					var j = c[b++];
					return a ? j : d[j]
				}
			});
			return j
		};

		function Op(a, b) {
			return da[D][Yc][G](a, b)
		};

		function Pp(a) {
			this.O = new Np;
			a && this.mf(a)
		}

		function Qp(a) {
			var b = typeof a;
			return b == Uk && a || b == Mi ? Tk + cn(a) : b[vc](0, 1) + a
		}
		N = Pp[D];
		N.Nd = function() {
			return this.O.Nd()
		};
		N.add = function(a) {
			this.O.set(Qp(a), a)
		};
		N.mf = function(a) {
			for(var a = Lp(a), b = a[B], c = 0; c < b; c++) this.add(a[c])
		};
		N.removeAll = function(a) {
			for(var a = Lp(a), b = a[B], c = 0; c < b; c++) this[Mb](a[c])
		};
		N.remove = function(a) {
			return this.O[Mb](Qp(a))
		};
		Ea(N, function() {
			this.O.clear()
		});
		Ua(N, function(a) {
			return this.O.Pa(Qp(a))
		});
		N.Ng = function(a) {
			for(var b = new Pp, a = Lp(a), c = 0; c < a[B]; c++) {
				var d = a[c];
				this.contains(d) && b.add(d)
			}
			return b
		};
		N.Ja = function() {
			return this.O.Ja()
		};
		Ra(N, function() {
			return new Pp(this)
		});
		N.Qd = function() {
			return this.O.Qd(l)
		};

		function Rp() {}
		Rp[D].Rc = l;
		Rp[D].Q = function() {
			if(!this.Rc) this.Rc = i, this.k()
		};
		Rp[D].k = function() {
			this.Uk && Sp[Ad](k, this.Uk)
		};

		function Tp(a) {
			a && typeof a.Q == Mi && a.Q()
		}

		function Sp(a) {
			for(var b = 0, c = arguments[B]; b < c; ++b) {
				var d = arguments[b];
				Ym(d) ? Sp[Ad](k, d) : Tp(d)
			}
		};

		function Up(a) {
			Up[Sd](a);
			return a
		}
		Up[Sd] = Tm;
		var Vp = !T || bp(9),
			Wp = !T || bp(9),
			Xp = T && !$o(tf);
		!Mo || $o(qf);
		Lo && $o("1.9b") || T && $o(tf) || Ko && $o("9.5") || Mo && $o(qf);
		!Lo || $o(tf);

		function Yp(a, b) {
			Ca(this, a);
			Sa(this, b);
			sa(this, this[ed])
		}
		S(Yp, Rp);
		N = Yp[D];
		N.k = function() {
			delete this[z];
			delete this[ed];
			delete this[Cb]
		};
		N.Rb = l;
		N.Lc = i;
		N.stopPropagation = function() {
			this.Rb = i
		};
		N.preventDefault = function() {
			this.Lc = l
		};

		function Zp(a) {
			a[ub]()
		};

		function $p(a, b) {
			a && this.Pb(a, b)
		}
		S($p, Yp);
		var aq = [1, 4, 2];
		N = $p[D];
		Sa(N, k);
		N.relatedTarget = k;
		N.offsetX = 0;
		N.offsetY = 0;
		Ha(N, 0);
		Ia(N, 0);
		va(N, 0);
		wa(N, 0);
		N.button = 0;
		ya(N, 0);
		N.charCode = 0;
		N.ctrlKey = l;
		N.altKey = l;
		N.shiftKey = l;
		N.metaKey = l;
		N.Ze = l;
		N.Y = k;
		N.Pb = function(a, b) {
			var c = Ca(this, a[z]);
			Yp[G](this, c);
			Sa(this, a[ed] || a.srcElement);
			sa(this, b);
			var d = a[eb];
			if(d) {
				if(Lo) {
					var f;
					a: {
						try {
							Up(d[Bb]);
							f = i;
							break a
						} catch(h) {}
						f = l
					}
					f || (d = k)
				}
			} else if(c == Jk) d = a.fromElement;
			else if(c == Ik) d = a.toElement;
			this.relatedTarget = d;
			this.offsetX = Mo || a.offsetX !== g ? a.offsetX : a.layerX;
			this.offsetY = Mo || a.offsetY !== g ? a.offsetY : a.layerY;
			Ha(this, a[sc] !== g ? a[sc] : a.pageX);
			Ia(this, a[tc] !== g ? a[tc] : a.pageY);
			va(this, a[Eb] || 0);
			wa(this, a[Fb] || 0);
			this.button = a.button;
			ya(this, a[Tb] || 0);
			this.charCode =
				a[Lb] || (c == ok ? a[Tb] : 0);
			this.ctrlKey = a[Oc];
			this.altKey = a[zc];
			this.shiftKey = a[Bd];
			this.metaKey = a[xb];
			this.Ze = Fo ? a[xb] : a[Oc];
			this.state = a.state;
			this.Y = a;
			delete this.Lc;
			delete this.Rb
		};
		N.Xk = function(a) {
			return Vp ? this.Y.button == a : this[z] == Xh ? 0 == a : !!(this.Y.button & aq[a])
		};
		N.ne = function() {
			return this.Xk(0) && !(Mo && Fo && this[Oc])
		};
		N.stopPropagation = function() {
			$p.b[Sc][G](this);
			this.Y[Sc] ? this.Y[Sc]() : this.Y.cancelBubble = i
		};
		N.preventDefault = function() {
			$p.b[ub][G](this);
			var a = this.Y;
			if(a[ub]) a[ub]();
			else if(a.returnValue = l, Xp) try {
				(a[Oc] || 112 <= a[Tb] && 123 >= a[Tb]) && ya(a, -1)
			} catch(b) {}
		};
		N.sj = function() {
			return this.Y
		};
		N.k = function() {
			$p.b.k[G](this);
			this.Y = k;
			Sa(this, k);
			sa(this, k);
			this.relatedTarget = k
		};

		function bq() {}
		var cq = 0;
		N = bq[D];
		N.key = 0;
		N.Ib = l;
		N.gh = l;
		N.Pb = function(a, b, c, d, f, h) {
			bn(a) ? this.eh = i : a && a[bc] && bn(a[bc]) ? this.eh = l : e(n(pg));
			this.kc = a;
			this.Ig = b;
			this.src = c;
			Ca(this, d);
			this.capture = !!f;
			this.td = h;
			this.gh = l;
			this.key = ++cq;
			this.Ib = l
		};
		za(N, function(a) {
			return this.eh ? this.kc[G](this.td || this.src, a) : this.kc[bc][G](this.kc, a)
		});
		var dq = {},
			eq = {},
			fq = {},
			gq = {};

		function hq(a, b, c, d, f) {
			if(b) {
				if(Q(b)) {
					for(var h = 0; h < b[B]; h++) hq(a, b[h], c, d, f);
					return k
				}
				var d = !!d,
					j = eq;
				b in j || (j[b] = {
					m: 0,
					la: 0
				});
				j = j[b];
				d in j || (j[d] = {
					m: 0,
					la: 0
				}, j.m++);
				var j = j[d],
					o = cn(a),
					r;
				j.la++;
				if(j[o]) {
					r = j[o];
					for(h = 0; h < r[B]; h++)
						if(j = r[h], j.kc == c && j.td == f) {
							if(j.Ib) break;
							return r[h].key
						}
				} else r = j[o] = [], j.m++;
				h = iq();
				h.src = a;
				j = new bq;
				j.Pb(c, h, a, b, d, f);
				c = j.key;
				h.key = c;
				r[s](j);
				dq[c] = j;
				fq[o] || (fq[o] = []);
				fq[o][s](j);
				a.addEventListener ? (a == O || !a.Dg) && a.addEventListener(b, h, d) : a.attachEvent(b in gq ? gq[b] :
					gq[b] = Vk + b, h);
				return c
			}
			e(n("Invalid event type"))
		}

		function iq() {
			var a = jq,
				b = Wp ? function(c) {
					return a[G](b.src, b.key, c)
				} : function(c) {
					c = a[G](b.src, b.key, c);
					if(!c) return c
				};
			return b
		}

		function kq(a, b, c, d, f) {
			if(Q(b)) {
				for(var h = 0; h < b[B]; h++) kq(a, b[h], c, d, f);
				return k
			}
			d = !!d;
			a = lq(a, b, d);
			if(!a) return l;
			for(h = 0; h < a[B]; h++)
				if(a[h].kc == c && a[h][zb] == d && a[h].td == f) return mq(a[h].key);
			return l
		}

		function mq(a) {
			if(!dq[a]) return l;
			var b = dq[a];
			if(b.Ib) return l;
			var c = b.src,
				d = b[z],
				f = b.Ig,
				h = b[zb];
			c.removeEventListener ? (c == O || !c.Dg) && c.removeEventListener(d, f, h) : c.detachEvent && c.detachEvent(d in gq ? gq[d] : gq[d] = Vk + d, f);
			c = cn(c);
			f = eq[d][h][c];
			if(fq[c]) {
				var j = fq[c];
				io(j, b);
				0 == j[B] && delete fq[c]
			}
			b.Ib = i;
			f.Rg = i;
			nq(d, h, c, f);
			delete dq[a];
			return i
		}

		function nq(a, b, c, d) {
			if(!d.Id && d.Rg) {
				for(var f = 0, h = 0; f < d[B]; f++) d[f].Ib ? d[f].Ig.src = k : (f != h && (d[h] = d[f]), h++);
				Ma(d, h);
				d.Rg = l;
				0 == h && (delete eq[a][b][c], eq[a][b].m--, 0 == eq[a][b].m && (delete eq[a][b], eq[a].m--), 0 == eq[a].m && delete eq[a])
			}
		}

		function oq(a, b, c) {
			var d = 0,
				f = b == k,
				h = c == k,
				c = !!c;
			if(a == k) ro(fq, function(a) {
				for(var j = a[B] - 1; 0 <= j; j--) {
					var o = a[j];
					if((f || b == o[z]) && (h || c == o[zb])) mq(o.key), d++
				}
			});
			else if(a = cn(a), fq[a])
				for(var a = fq[a], j = a[B] - 1; 0 <= j; j--) {
					var o = a[j];
					if((f || b == o[z]) && (h || c == o[zb])) mq(o.key), d++
				}
			return d
		}

		function lq(a, b, c) {
			var d = eq;
			return b in d && (d = d[b], c in d && (d = d[c], a = cn(a), d[a])) ? d[a] : k
		}

		function pq(a, b, c, d, f) {
			var h = 1,
				b = cn(b);
			if(a[b]) {
				a.la--;
				a = a[b];
				a.Id ? a.Id++ : a.Id = 1;
				try {
					for(var j = a[B], o = 0; o < j; o++) {
						var r = a[o];
						r && !r.Ib && (h &= qq(r, f) !== l)
					}
				} finally {
					a.Id--, nq(c, d, b, a)
				}
			}
			return Boolean(h)
		}

		function qq(a, b) {
			var c = a[bc](b);
			a.gh && mq(a.key);
			return c
		}

		function rq(a, b) {
			var c = b[z] || b,
				d = eq;
			if(!(c in d)) return i;
			if(R(b)) b = new Yp(b, a);
			else if(b instanceof Yp) Sa(b, b[ed] || a);
			else {
				var f = b,
					b = new Yp(c, a);
				zo(b, f)
			}
			var f = 1,
				h, d = d[c],
				c = i in d,
				j;
			if(c) {
				h = [];
				for(j = a; j; j = j.md) h[s](j);
				j = d[i];
				j.la = j.m;
				for(var o = h[B] - 1; !b.Rb && 0 <= o && j.la; o--) sa(b, h[o]), f &= pq(j, h[o], b[z], i, b) && b.Lc != l
			}
			if(l in d)
				if(j = d[l], j.la = j.m, c)
					for(o = 0; !b.Rb && o < h[B] && j.la; o++) sa(b, h[o]), f &= pq(j, h[o], b[z], l, b) && b.Lc != l;
				else
					for(d = a; !b.Rb && d && j.la; d = d.md) sa(b, d), f &= pq(j, d, b[z], l, b) && b.Lc != l;
			return Boolean(f)
		}

		function jq(a, b) {
			if(!dq[a]) return i;
			var c = dq[a],
				d = c[z],
				f = eq;
			if(!(d in f)) return i;
			var f = f[d],
				h, j;
			if(!Wp) {
				h = b || Sm(Hm);
				var o = i in f,
					r = l in f;
				if(o) {
					if(0 > h[Tb] || h.returnValue != g) return i;
					a: {
						var w = l;
						if(0 == h[Tb]) try {
							ya(h, -1);
							break a
						} catch(C) {
							w = i
						}
						if(w || h.returnValue == g) h.returnValue = i
					}
				}
				w = new $p;
				w.Pb(h, this);
				h = i;
				try {
					if(o) {
						for(var L = [], ta = w[Cb]; ta; ta = ta[Hd]) L[s](ta);
						j = f[i];
						j.la = j.m;
						for(var ia = L[B] - 1; !w.Rb && 0 <= ia && j.la; ia--) sa(w, L[ia]), h &= pq(j, L[ia], d, i, w);
						if(r) {
							j = f[l];
							j.la = j.m;
							for(ia = 0; !w.Rb && ia < L[B] && j.la; ia++) sa(w,
								L[ia]), h &= pq(j, L[ia], d, l, w)
						}
					} else h = qq(c, w)
				} finally {
					L && Ma(L, 0), w.Q()
				}
				return h
			}
			d = new $p(b, this);
			try {
				h = qq(c, d)
			} finally {
				d.Q()
			}
			return h
		};

		function sq() {}
		S(sq, Rp);
		N = sq[D];
		N.Dg = i;
		N.md = k;
		N.Qe = function(a) {
			this.md = a
		};
		N.addEventListener = function(a, b, c, d) {
			hq(this, a, b, c, d)
		};
		N.removeEventListener = function(a, b, c, d) {
			kq(this, a, b, c, d)
		};
		N.dispatchEvent = function(a) {
			return rq(this, a)
		};
		N.k = function() {
			sq.b.k[G](this);
			oq(this);
			this.md = k
		};

		function tq(a, b) {
			this.Kd = a || 1;
			this.Dc = b || uq;
			this.nf = jn(this.ek, this);
			this.of = ln()
		}
		S(tq, sq);
		tq[D].enabled = l;
		var uq = O.window;
		N = tq[D];
		N.ga = k;
		N.ek = function() {
			if(this.enabled) {
				var a = ln() - this.of;
				if(0 < a && a < 0.8 * this.Kd) this.ga = this.Dc[Lc](this.nf, this.Kd - a);
				else if(this.Rj(), this.enabled) this.ga = this.Dc[Lc](this.nf, this.Kd), this.of = ln()
			}
		};
		N.Rj = function() {
			this[x](hm)
		};
		N.start = function() {
			this.enabled = i;
			if(!this.ga) this.ga = this.Dc[Lc](this.nf, this.Kd), this.of = ln()
		};
		N.stop = function() {
			this.enabled = l;
			if(this.ga) this.Dc[fb](this.ga), this.ga = k
		};
		N.k = function() {
			tq.b.k[G](this);
			this.stop();
			delete this.Dc
		};

		function vq() {}
		vq[D].Gh = k;
		vq[D].getOptions = function() {
			return this.Gh || (this.Gh = this.Jk())
		};
		var wq;

		function xq() {}
		S(xq, vq);
		xq[D].Ah = function() {
			var a = this.Jh();
			return a ? new ActiveXObject(a) : new XMLHttpRequest
		};
		xq[D].Jk = function() {
			var a = {};
			this.Jh() && (a[0] = i, a[1] = i);
			return a
		};
		xq[D].If = k;
		xq[D].Jh = function() {
			if(!this.If && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
				for(var a = [wg, vg, ug, xg], b = 0; b < a[B]; b++) {
					var c = a[b];
					try {
						return new ActiveXObject(c), this.If = c
					} catch(d) {}
				}
				e(n("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
			}
			return this.If
		};
		wq = new xq;

		function yq(a) {
			this.headers = new Np;
			this.ud = a || k
		}
		S(yq, sq);
		var zq = /^https?$/i,
			Aq = [];

		function Bq(a) {
			a.Q();
			io(Aq, a)
		}
		N = yq[D];
		N.eb = l;
		N.u = k;
		N.od = k;
		N.mg = J;
		N.ui = J;
		N.Bc = 0;
		N.Hb = J;
		N.Ge = l;
		N.ld = l;
		N.Ce = l;
		N.Fb = l;
		N.vd = 0;
		N.Nb = k;
		N.ng = J;
		N.wi = l;
		N.gl = function(a) {
			this.vd = q.max(0, a)
		};
		N.send = function(a, b, c, d) {
			this.u && e(n("[goog.net.XhrIo] Object is active with another request"));
			b = b ? b.toUpperCase() : cg;
			this.mg = a;
			this.Hb = J;
			this.Bc = 0;
			this.ui = b;
			this.Ge = l;
			this.eb = i;
			this.u = this.ti();
			this.od = this.ud ? this.ud[mb]() : wq[mb]();
			this.u.onreadystatechange = jn(this.cg, this);
			try {
				this.Ce = i, this.u[bb](b, a, i), this.Ce = l
			} catch(f) {
				this.lg(5, f);
				return
			}
			var a = c || J,
				h = this.headers[cd]();
			d && Mp(d, function(a, b) {
				h.set(b, a)
			});
			b == Fg && !h.Pa(Uf) && h.set(Uf, sh);
			Mp(h, function(a, b) {
				this.u.setRequestHeader(b, a)
			}, this);
			if(this.ng) this.u.responseType = this.ng;
			if(Im in this.u) this.u.withCredentials = this.wi;
			try {
				if(this.Nb) uq[fb](this.Nb), this.Nb = k;
				if(0 < this.vd) this.Nb = uq[Lc](jn(this.vi, this), this.vd);
				this.ld = i;
				this.u[Jb](a);
				this.ld = l
			} catch(j) {
				this.lg(5, j)
			}
		};
		N.ti = function() {
			return this.ud ? this.ud.Ah() : wq.Ah()
		};
		N.vi = function() {
			if("undefined" != typeof Rm && this.u) this.Hb = Tg + this.vd + Lk, this.Bc = 8, this[x](jm), this[Kc](8)
		};
		N.lg = function(a, b) {
			this.eb = l;
			if(this.u) this.Fb = i, this.u[Kc](), this.Fb = l;
			this.Hb = b;
			this.Bc = a;
			this.wg();
			this.dd()
		};
		N.wg = function() {
			if(!this.Ge) this.Ge = i, this[x](ai), this[x](Ci)
		};
		N.abort = function(a) {
			if(this.u && this.eb) this.eb = l, this.Fb = i, this.u[Kc](), this.Fb = l, this.Bc = a || 7, this[x](ai), this[x](kh), this.dd()
		};
		N.k = function() {
			if(this.u) {
				if(this.eb) this.eb = l, this.Fb = i, this.u[Kc](), this.Fb = l;
				this.dd(i)
			}
			yq.b.k[G](this)
		};
		N.cg = function() {
			!this.Ce && !this.ld && !this.Fb ? this.xf() : this.lh()
		};
		N.xf = function() {
			this.lh()
		};
		N.lh = function() {
			if(this.eb && "undefined" != typeof Rm && (!this.od[1] || !(4 == this.Kc() && 2 == this.df())))
				if(this.ld && 4 == this.Kc()) uq[Lc](jn(this.cg, this), 0);
				else if(this[x](tl), this.vj()) this.eb = l, this.Lg() ? (this[x](ai), this[x](bm)) : (this.Bc = 6, this.Hb = this.uj() + Td + this.df() + gh, this.wg()), this.dd()
		};
		N.dd = function(a) {
			if(this.u) {
				var b = this.u,
					c = this.od[0] ? Tm : k;
				this.od = this.u = k;
				if(this.Nb) uq[fb](this.Nb), this.Nb = k;
				a || this[x](sl);
				try {
					b.onreadystatechange = c
				} catch(d) {}
			}
		};
		N.Da = function() {
			return !!this.u
		};
		N.vj = function() {
			return 4 == this.Kc()
		};
		N.Lg = function() {
			var a = this.df(),
				b;
			a: switch(a) {
				case 200:
				case 201:
				case 202:
				case 204:
				case 304:
				case 1223:
					b = i;
					break a;
				default:
					b = l
			}
			return b || 0 === a && !this.Gk()
		};
		N.Gk = function() {
			var a = Qn(1, J + this.mg);
			if(!a && self[Uc]) a = self[Uc].protocol, a = a[vc](0, a[B] - 1);
			return zq[cb](a ? a[Od]() : J)
		};
		N.Kc = function() {
			return this.u ? this.u.readyState : 0
		};
		N.df = function() {
			try {
				return 2 < this.Kc() ? this.u.status : -1
			} catch(a) {
				return -1
			}
		};
		N.uj = function() {
			try {
				return 2 < this.Kc() ? this.u.statusText : J
			} catch(a) {
				return J
			}
		};
		N.Dk = function() {
			try {
				return this.u ? this.u.responseText : J
			} catch(a) {
				return J
			}
		};
		N.Ck = function() {
			return R(this.Hb) ? this.Hb : J + this.Hb
		};
		yq.send = function(a, b, c, d, f, h) {
			var j = new yq;
			Aq[s](j);
			b && hq(j, ai, b);
			hq(j, sl, kn(Bq, j));
			h && j.gl(h);
			j[Jb](a, c, d, f)
		};
		yq.Fl = function() {
			for(; Aq[B];) Aq.pop().Q()
		};
		yq.Hl = function(a) {
			yq[D].xf = a.ol(yq[D].xf)
		};
		yq.Gl = Bq;
		yq.sl = Uf;
		yq.vl = sh;
		yq.Jl = Aq;

		function Cq(a, b) {
			var c;
			a instanceof Cq ? (this.fc(b == k ? a.Fa : b), this.zc(a.Ga), this.jd(a.Eb), this.gd(a.hb), this.yc(a.Qa), this.xc(a.ja), this.Ae(a.Z[cd]()), this.hd(a.Db)) : a && (c = (J + a)[Gb](On)) ? (this.fc(!!b), this.zc(c[1] || J, i), this.jd(c[2] || J, i), this.gd(c[3] || J, i), this.yc(c[4]), this.xc(c[5] || J, i), this[$c](c[6] || J, i), this.hd(c[7] || J, i)) : (this.fc(!!b), this.Z = new Dq(k, this, this.Fa))
		}
		N = Cq[D];
		N.Ga = J;
		N.Eb = J;
		N.hb = J;
		N.Qa = k;
		N.ja = J;
		N.Db = J;
		N.Yk = l;
		N.Fa = l;
		N.toString = function() {
			if(this.ra) return this.ra;
			var a = [];
			this.Ga && a[s](Eq(this.Ga, Fq), uf);
			this.hb && (a[s]($e), this.Eb && a[s](Eq(this.Eb, Fq), Ff), a[s](R(this.hb) ? aa(this.hb) : k), this.Qa != k && a[s](uf, J + this.Qa));
			this.ja && (this.xe() && this.ja[pb](0) != Ye && a[s](Ye), a[s](Eq(this.ja, this.ja[pb](0) == Ye ? Gq : Hq)));
			var b = J + this.Z;
			b && a[s](Ef, b);
			this.Db && a[s](ae, Eq(this.Db, Iq));
			return this.ra = a[Ld](J)
		};
		N.Pj = function(a) {
			var b = this[cd](),
				c = a.Fi();
			c ? b.zc(a.Ga) : c = a.Gi();
			c ? b.jd(a.Eb) : c = a.xe();
			c ? b.gd(a.hb) : c = a.Di();
			var d = a.ja;
			if(c) b.yc(a.Qa);
			else if(c = a.ug()) {
				if(d[pb](0) != Ye)
					if(this.xe() && !this.ug()) d = Ye + d;
					else {
						var f = b.ja[jd](Ye); - 1 != f && (d = b.ja[vc](0, f + 1) + d)
					}
				f = d;
				if(f == We || f == Ve) d = J;
				else if(-1 == f[v](Xe) && -1 == f[v](Ze)) d = f;
				else {
					for(var d = 0 == f[jd](Ye, 0), f = f[Pc](Ye), h = [], j = 0; j < f[B];) {
						var o = f[j++];
						o == Ve ? d && j == f[B] && h[s](J) : o == We ? ((1 < h[B] || 1 == h[B] && h[0] != J) && h.pop(), d && j == f[B] && h[s](J)) : (h[s](o), d = i)
					}
					d = h[Ld](Ye)
				}
			}
			c ?
				b.xc(d) : c = a.Ei();
			c ? b[$c](a.Bi()) : c = a.Ci();
			c && b.hd(a.Db);
			return b
		};
		Ra(N, function() {
			var a = this.Ga,
				b = this.Eb,
				c = this.hb,
				d = this.Qa,
				f = this.ja,
				h = this.Z[cd](),
				j = this.Db,
				o = new Cq(k, this.Fa);
			a && o.zc(a);
			b && o.jd(b);
			c && o.gd(c);
			d && o.yc(d);
			f && o.xc(f);
			h && o.Ae(h);
			j && o.hd(j);
			return o
		});
		N.zc = function(a, b) {
			this.Ua();
			delete this.ra;
			if(this.Ga = b ? a ? ka(a) : J : a) this.Ga = this.Ga[u](/:$/, J);
			return this
		};
		N.Fi = function() {
			return !!this.Ga
		};
		N.jd = function(a, b) {
			this.Ua();
			delete this.ra;
			this.Eb = b ? a ? ka(a) : J : a;
			return this
		};
		N.Gi = function() {
			return !!this.Eb
		};
		N.gd = function(a, b) {
			this.Ua();
			delete this.ra;
			this.hb = b ? a ? ka(a) : J : a;
			return this
		};
		N.xe = function() {
			return !!this.hb
		};
		N.yc = function(a) {
			this.Ua();
			delete this.ra;
			a ? (a = ca(a), (la(a) || 0 > a) && e(n("Bad port number " + a)), this.Qa = a) : this.Qa = k;
			return this
		};
		N.Di = function() {
			return this.Qa != k
		};
		N.xc = function(a, b) {
			this.Ua();
			delete this.ra;
			this.ja = b ? a ? ka(a) : J : a;
			return this
		};
		N.ug = function() {
			return !!this.ja
		};
		N.Ei = function() {
			return this.Z[yc]() !== J
		};
		N.Ae = function(a, b) {
			this.Ua();
			delete this.ra;
			a instanceof Dq ? (this.Z = a, this.Z.af = this, this.Z.fc(this.Fa)) : (b || (a = Eq(a, Jq)), this.Z = new Dq(a, this, this.Fa));
			return this
		};
		N.setQuery = function(a, b) {
			return this.Ae(a, b)
		};
		N.Wk = function() {
			return this.Z[yc]()
		};
		N.Bi = function() {
			return this.Z.pk()
		};
		N.getQuery = function() {
			return this.Wk()
		};
		N.nd = function(a, b) {
			this.Ua();
			delete this.ra;
			this.Z.set(a, b);
			return this
		};
		N.kh = function(a) {
			return this.Z.get(a)
		};
		N.hd = function(a, b) {
			this.Ua();
			delete this.ra;
			this.Db = b ? a ? ka(a) : J : a;
			return this
		};
		N.Ci = function() {
			return !!this.Db
		};
		N.Jj = function() {
			this.Ua();
			this.nd(Lm, q[kb](2147483648 * q.random())[yc](36) + q.abs(q[kb](2147483648 * q.random()) ^ ln())[yc](36));
			return this
		};
		N.Ua = function() {
			this.Yk && e(n("Tried to modify a read-only Uri"))
		};
		N.fc = function(a) {
			this.Fa = a;
			this.Z && this.Z.fc(a);
			return this
		};
		var Kq = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;

		function Eq(a, b) {
			var c = k;
			R(a) && (c = a, Kq[cb](c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c[u](b, Lq)));
			return c
		}

		function Lq(a) {
			a = a[rd](0);
			return ce + (a >> 4 & 15)[yc](16) + (a & 15)[yc](16)
		}
		var Fq = /[#\/\?@]/g,
			Hq = /[\#\?:]/g,
			Gq = /[\#\?]/g,
			Jq = /[\#\?@]/g,
			Iq = /#/g;

		function Dq(a, b, c) {
			this.Za = a || k;
			this.af = b || k;
			this.Fa = !!c
		}
		N = Dq[D];
		N.Ta = function() {
			if(!this.z && (this.z = new Np, this.m = 0, this.Za))
				for(var a = this.Za[Pc](fe), b = 0; b < a[B]; b++) {
					var c = a[b][v](Cf),
						d = k,
						f = k;
					0 <= c ? (d = a[b][xd](0, c), f = a[b][xd](c + 1)) : d = a[b];
					d = ka(d[u](/\+/g, Sd));
					d = this.Kb(d);
					this.add(d, f ? ka(f[u](/\+/g, Sd)) : J)
				}
		};
		N.z = k;
		N.m = k;
		N.Nd = function() {
			this.Ta();
			return this.m
		};
		N.add = function(a, b) {
			this.Ta();
			this.Fc();
			a = this.Kb(a);
			if(this.Pa(a)) {
				var c = this.z.get(a);
				Q(c) ? c[s](b) : this.z.set(a, [c, b])
			} else this.z.set(a, b);
			this.m++;
			return this
		};
		N.remove = function(a) {
			this.Ta();
			a = this.Kb(a);
			if(this.z.Pa(a)) {
				this.Fc();
				var b = this.z.get(a);
				Q(b) ? this.m -= b[B] : this.m--;
				return this.z[Mb](a)
			}
			return l
		};
		Ea(N, function() {
			this.Fc();
			this.z && this.z.clear();
			this.m = 0
		});
		N.Pa = function(a) {
			this.Ta();
			a = this.Kb(a);
			return this.z.Pa(a)
		};
		N.Tb = function() {
			this.Ta();
			for(var a = this.z.Ja(), b = this.z.Tb(), c = [], d = 0; d < b[B]; d++) {
				var f = a[d];
				if(Q(f))
					for(var h = 0; h < f[B]; h++) c[s](b[d]);
				else c[s](b[d])
			}
			return c
		};
		N.Ja = function(a) {
			this.Ta();
			if(a)
				if(a = this.Kb(a), this.Pa(a)) {
					var b = this.z.get(a);
					if(Q(b)) return b;
					a = [];
					a[s](b)
				} else a = [];
			else
				for(var b = this.z.Ja(), a = [], c = 0; c < b[B]; c++) {
					var d = b[c];
					Q(d) ? lo(a, d) : a[s](d)
				}
			return a
		};
		N.set = function(a, b) {
			this.Ta();
			this.Fc();
			a = this.Kb(a);
			if(this.Pa(a)) {
				var c = this.z.get(a);
				Q(c) ? this.m -= c[B] : this.m--
			}
			this.z.set(a, b);
			this.m++;
			return this
		};
		N.get = function(a, b) {
			this.Ta();
			a = this.Kb(a);
			if(this.Pa(a)) {
				var c = this.z.get(a);
				return Q(c) ? c[0] : c
			}
			return b
		};
		N.toString = function() {
			if(this.Za) return this.Za;
			if(!this.z) return J;
			for(var a = [], b = 0, c = this.z.Tb(), d = 0; d < c[B]; d++) {
				var f = c[d],
					h = En(f),
					f = this.z.get(f);
				if(Q(f))
					for(var j = 0; j < f[B]; j++) 0 < b && a[s](fe), a[s](h), f[j] !== J && a[s](Cf, En(f[j])), b++;
				else 0 < b && a[s](fe), a[s](h), f !== J && a[s](Cf, En(f)), b++
			}
			return this.Za = a[Ld](J)
		};
		N.pk = function() {
			if(!this.pc) this.pc = this[yc]() ? ka(this[yc]()) : J;
			return this.pc
		};
		N.Fc = function() {
			delete this.pc;
			delete this.Za;
			this.af && delete this.af.ra
		};
		Ra(N, function() {
			var a = new Dq;
			if(this.pc) a.pc = this.pc;
			if(this.Za) a.Za = this.Za;
			if(this.z) a.z = this.z[cd]();
			return a
		});
		N.Kb = function(a) {
			a = J + a;
			this.Fa && (a = a[Od]());
			return a
		};
		N.fc = function(a) {
			a && !this.Fa && (this.Ta(), this.Fc(), Mp(this.z, function(a, c) {
				var d = c[Od]();
				c != d && (this[Mb](c), this.add(d, a))
			}, this));
			this.Fa = a
		};
		N.extend = function(a) {
			for(var b = 0; b < arguments[B]; b++) Mp(arguments[b], function(a, b) {
				this.add(b, a)
			}, this)
		};

		function Mq(a, b, c) {
			(typeof b != Uk || !(Zh in b)) && e(n(c + ' must have a property "column"'));
			ki in b && typeof b.desc != Ch && e(n('Property "desc" in ' + c + " must be boolean."));
			U(a, b.column)
		}

		function Nq(a, b) {
			if(typeof b == K) return U(a, b), [{
				column: b
			}];
			if(typeof b == Uk) {
				if(Ym(b)) {
					1 > b[B] && e(n("sortColumns is an empty array. Must have at least one element."));
					var c = {};
					if(typeof b[0] == Uk) {
						for(var d = 0; d < b[B]; d++) {
							Mq(a, b[d], Tl + d + gh);
							var f = b[d].column;
							f in c && e(n(Sf + f + Ud));
							c[f] = i
						}
						return b
					}
					if(typeof b[0] == K) {
						for(var h = [], d = 0; d < b[B]; d++) U(a, b[d]), b[d] in c && e(n(Sf + f + Ud)), c[f] = i, h[s]({
							column: b[d]
						});
						return h
					}
					e(n("sortColumns is an array, but neither of objects nor of numbers. Must be either of those."))
				}
				Mq(a,
					b, Sl);
				return [b]
			}
		}

		function Oq(a, b) {
			var c = a[Dc]();
			0 < c ? (q[kb](b) !== b || 0 > b || b >= c) && e(n("Invalid row index " + b + ". Should be in the range [0-" + (c - 1) + "].")) : e(n("Table has no rows."))
		}

		function U(a, b) {
			var c = a[rb]();
			0 < c ? (q[kb](b) !== b || 0 > b || b >= c) && e(n("Invalid column index " + b + ". Should be an integer in the range [0-" + (c - 1) + "].")) : e(n("Table has no columns."))
		}

		function Pq(a, b, c) {
			if(c != k) {
				var a = a[Ub](b),
					d = typeof c;
				switch(a) {
					case K:
						if(d == K) return;
						break;
					case M:
						if(d == M) return;
						break;
					case Ch:
						if(d == Ch) return;
						break;
					case gi:
					case hi:
						if(Zm(c)) return;
						break;
					case im:
						if(Ym(c) && 2 < c[B] && 5 > c[B]) {
							for(var d = i, f = 0; f < c[B]; f++) {
								var h = c[f];
								if(typeof h != K || h != q[kb](h)) {
									d = l;
									break
								}
							}
							if(0 > c[0] || 23 < c[0] || 0 > c[1] || 59 < c[1] || 0 > c[2] || 59 < c[2]) d = l;
							if(4 == c[B] && (0 > c[3] || 999 < c[3])) d = l;
							if(d) return
						}
				}
				e(n("Type mismatch. Value " + c + " does not match type " + a + " in column index " + b))
			}
		}

		function Qq(a, b, c) {
			if(b == k) return c == k ? 0 : -1;
			if(c == k) return 1;
			switch(a) {
				case Ch:
				case K:
				case M:
				case gi:
				case hi:
					return b < c ? -1 : c < b ? 1 : 0;
				case im:
					for(a = 0; 3 > a; a++) {
						if(b[a] < c[a]) return -1;
						if(c[a] < b[a]) return 1
					}
					b = 4 > b[B] ? 0 : b[3];
					c = 4 > c[B] ? 0 : c[3];
					return b < c ? -1 : c < b ? 1 : 0
			}
		}

		function Rq(a, b) {
			U(a, b);
			var c = a[Ub](b),
				d = k,
				f = k,
				h, j, o = a[Dc]();
			for(h = 0; h < o; h++)
				if(j = a[A](h, b), P(j)) {
					f = d = j;
					break
				}
			if(d == k) return {
				min: k,
				max: k
			};
			for(h++; h < o; h++) j = a[A](h, b), P(j) && (0 > Qq(c, j, d) ? d = j : 0 > Qq(c, f, j) && (f = j));
			return {
				min: d,
				max: f
			}
		}

		function Sq(a, b) {
			for(var b = Nq(a, b), c = [], d = a[Dc](), f = 0; f < d; f++) c[s](f);
			qo(c, function(c, d) {
				for(var f = 0; f < b[B]; f++) {
					var r = b[f],
						w = r.column,
						w = Qq(a[Ub](w), a[A](c, w), a[A](d, w));
					if(0 != w) return w * (r.desc ? -1 : 1)
				}
				return 0
			});
			return c
		}

		function Tq(a, b) {
			U(a, b);
			var c = a[Dc]();
			if(0 == c) return [];
			for(var d = [], f = 0; f < c; ++f) d[s](a[A](f, b));
			var h = a[Ub](b);
			qo(d, function(a, b) {
				return Qq(h, a, b)
			});
			var c = d[0],
				j = [];
			j[s](c);
			for(f = 1; f < d[B]; f++) {
				var o = d[f];
				0 != Qq(h, o, c) && j[s](o);
				c = o
			}
			return j
		}

		function Uq(a, b, c) {
			for(var d = 0; d < b[B]; d++) {
				var f = b[d],
					h = f.column,
					j = a[A](c, h),
					h = a[Ub](h);
				if(f.minValue != k || f.maxValue != k) {
					if(j == k) return l;
					if(f.minValue != k && 0 > Qq(h, j, f.minValue)) return l;
					if(f.maxValue != k && 0 < Qq(h, j, f.maxValue)) return l
				} else if(0 != Qq(h, j, f[sb])) return l
			}
			return i
		}

		function Vq(a, b) {
			(!Ym(b) || 0 == b[B]) && e(n("columnFilters must be a non-empty array"));
			for(var c = {}, d = 0; d < b[B]; d++) {
				if(typeof b[d] != Uk || !(Zh in b[d])) zm in b[d] || Dk in b[d] || yk in b[d] ? zm in b[d] && (Dk in b[d] || yk in b[d]) && e(n($h + d + '] must specify either "value" or range properties ("minValue" and/or "maxValue"')) : e(n($h + d + '] must have properties "column" and "value", "minValue"or "maxValue"'));
				var f = b[d].column;
				f in c && e(n(Sf + f + " is duplicate in columnFilters."));
				U(a, f);
				Pq(a, f, b[d][sb]);
				c[f] = i
			}
			c = [];
			d = a[Dc]();
			for(f = 0; f < d; f++) Uq(a, b, f) && c[s](f);
			return c
		}

		function Wq(a, b) {
			var c;
			b == im ? (c = [], c[s](a[0]), c[s]((10 > a[1] ? ff : J) + a[1]), c[s]((10 > a[2] ? ff : J) + a[2]), c = c[Ld](uf), 3 < a[B] && 0 < a[3] && (c += Ve + (10 > a[3] ? jf : 100 > a[3] ? ff : J) + a[3])) : b == gi ? (c = new google[E].DateFormat({
				formatType: zk,
				valueType: gi
			}), c = c.formatValue(a)) : b == hi ? (c = new google[E].DateFormat({
				formatType: zk,
				valueType: hi
			}), c = c.formatValue(a)) : c = J + a;
			return c
		}

		function Xq(a, b, c, d) {
			for(var f = k, h = a[Dc]();
				(d ? 0 <= b : b < h) && Xm(f);) f = a[A](b, c), b += d ? -1 : 1;
			return f
		};

		function V(a, b) {
			this.Jb = b ? b == gf ? gf : hf : hf;
			if(a) {
				if(R(a)) a = xn(a);
				else a: for(var c = a.cols || [], d = a[zd] || [], f = c[B], h = 0; h < f; h++) {
					var j = c[h][z];
					if(j == gi || j == hi)
						for(var j = d[B], o = 0; o < j; o++) {
							var r = d[o].c[h];
							if(r) {
								var w = r.v;
								if(Zm(w)) break a;
								R(w) && (r = un(r), r = xn(r), d[o].c[h] = r)
							}
						}
				}
				this.B = a.cols || [];
				this.G = a[zd] || [];
				this.$a = a.p || k
			} else this.B = [], this.G = [], this.$a = k
		}
		var Yq = {
			rl: Ch,
			xl: K,
			zl: M,
			tl: gi,
			Al: im,
			ul: hi
		};
		N = V[D];
		N.B = k;
		N.Jb = k;
		N.G = k;
		N.$a = k;
		N.getNumberOfRows = function() {
			return this.G[B]
		};
		N.getNumberOfColumns = function() {
			return this.B[B]
		};
		Ra(N, function() {
			return new V(this[Hc]())
		});
		N.getColumnId = function(a) {
			U(this, a);
			return this.B[a].id || J
		};
		N.getColumnIndex = function(a) {
			for(var b = this.B, c = 0; c < b[B]; c++)
				if(b[c].id == a) return c;
			return -1
		};
		N.getColumnLabel = function(a) {
			U(this, a);
			return this.B[a][Id] || J
		};
		N.getColumnPattern = function(a) {
			U(this, a);
			return this.B[a].pattern
		};
		N.getColumnRole = function(a) {
			a = this[Qc](a, Bl);
			return a = R(a) ? a : J
		};
		N.getColumnType = function(a) {
			U(this, a);
			return this.B[a][z]
		};
		Ga(N, function(a, b) {
			Oq(this, a);
			U(this, b);
			var c = this.Nc(a, b),
				d = k;
			if(c) d = c.v, d = Wm(d) ? d : k;
			return d
		});
		N.Nc = function(a, b) {
			return this.G[a].c[b]
		};
		N.getFormattedValue = function(a, b) {
			Oq(this, a);
			U(this, b);
			var c = this.Nc(a, b),
				d = J;
			if(c)
				if("undefined" != typeof c.f && c.f != k) d = c.f;
				else if(c = this[A](a, b), !Xm(c)) return Wq(c, this[Ub](b));
			return d
		};
		N.getProperty = function(a, b, c) {
			Oq(this, a);
			U(this, b);
			return(a = (a = this.Nc(a, b)) && a.p) && c in a ? a[c] : k
		};
		N.getProperties = function(a, b) {
			Oq(this, a);
			U(this, b);
			var c = this.Nc(a, b);
			c || (c = {
				v: k,
				f: k
			}, this.G[a].c[b] = c);
			c.p || (c.p = {});
			return c.p
		};
		N.getTableProperties = function() {
			return this.$a
		};
		N.getTableProperty = function(a) {
			var b = this.$a;
			return b && a in b ? b[a] : k
		};
		N.setTableProperties = function(a) {
			this.$a = a
		};
		N.setTableProperty = function(a, b) {
			if(!this.$a) this.$a = {};
			this.$a[a] = b
		};
		Na(N, function(a, b, c) {
			this[jc](a, b, c, g, g)
		});
		N.setFormattedValue = function(a, b, c) {
			this[jc](a, b, g, c, g)
		};
		N.setProperties = function(a, b, c) {
			this[jc](a, b, g, g, c)
		};
		N.setProperty = function(a, b, c, d) {
			this[Fc](a, b)[c] = d
		};
		N.setCell = function(a, b, c, d, f) {
			Oq(this, a);
			U(this, b);
			var h = this.Nc(a, b);
			h || (h = {}, this.G[a].c[b] = h);
			if("undefined" != typeof c) Pq(this, b, c), h.v = c;
			"undefined" != typeof d && (h.f = d);
			Wm(f) && (h.p = $m(f) ? f : {})
		};
		N.setRowProperties = function(a, b) {
			Oq(this, a);
			this.G[a].p = b
		};
		N.setRowProperty = function(a, b, c) {
			this[cc](a)[b] = c
		};
		N.getRowProperty = function(a, b) {
			Oq(this, a);
			var c = this.G[a];
			return(c = c && c.p) && b in c ? c[b] : k
		};
		N.getRowProperties = function(a) {
			Oq(this, a);
			a = this.G[a];
			a.p || (a.p = {});
			return a.p
		};
		N.setColumnLabel = function(a, b) {
			U(this, a);
			this.B[a].label = b
		};
		N.setColumnProperties = function(a, b) {
			U(this, a);
			this.B[a].p = b
		};
		N.setColumnProperty = function(a, b, c) {
			this[Ab](a)[b] = c
		};
		N.getColumnProperty = function(a, b) {
			U(this, a);
			var c = this.B[a];
			return(c = c && c.p) && b in c ? c[b] : k
		};
		N.getColumnProperties = function(a) {
			U(this, a);
			a = this.B[a];
			a.p || (a.p = {});
			return a.p
		};
		N.insertColumn = function(a, b, c, d) {
			a !== this.B[B] && U(this, a);
			$m(b) || (b = {
				id: d || J,
				label: c || J,
				pattern: J,
				type: b
			});
			c = b[z];
			uo(Yq, c) || e(n("Invalid type: " + c + Ve));
			if(c = b.role) d = b.p || {}, d.role = c, b.p = d;
			this.B[Kd](a, 0, b);
			for(b = 0; b < this.G[B]; b++) this.G[b].c[Kd](a, 0, {
				v: k,
				f: k
			})
		};
		N.addColumn = function(a, b, c) {
			this.insertColumn(this.B[B], a, b, c);
			return this.B[B] - 1
		};
		N.Hj = function(a, b) {
			var c = {};
			if(Vm(b) == Uk && !Zm(b)) {
				c.v = "undefined" == typeof b.v ? k : b.v;
				var d = typeof b.f;
				"undefined" == d || d == Sk ? c.f = k : d == M ? c.f = b.f : e(n("Formatted value ('f'), if specified, must be a string."));
				d = typeof b.p;
				d == Uk ? c.p = b.p : d != Sk && "undefined" != d && e(n("Properties ('p'), if specified, must be an Object."))
			} else c.v = P(b) ? b : k, c.f = k;
			Pq(this, a, c.v);
			return c
		};
		N.insertRows = function(a, b) {
			a !== this.G[B] && Oq(this, a);
			var c;
			if(Q(b)) c = b;
			else if(typeof b == K) {
				(b != q[kb](b) || 0 > b) && e(n("Invalid value for numOrArray: " + b + ". If numOrArray is a number it should be a nonnegative integer."));
				c = [];
				for(var d = 0; d < b; d++) c[d] = k
			} else e(n("Invalid value for numOrArray. Should be a number or an array of arrays of cells."));
			for(var d = [], f = 0; f < c[B]; f++) {
				var h = c[f],
					j = [];
				if(h === k)
					for(h = 0; h < this.B[B]; h++) j[s]({
						v: k,
						f: k
					});
				else if(Q(h)) {
					h[B] != this.B[B] && e(n("Row given with size different than " +
						this.B[B] + " (the number of columns in the table)."));
					for(var o = 0; o < h[B]; o++) j[s](this.Hj(o, h[o]))
				} else e(n("Every row given must be either null or an array."));
				h = {};
				h.c = j;
				d[s](h)
			}
			kn(mo, this.G, a, 0)[Ad](k, d);
			return a + d[B] - 1
		};
		N.addRows = function(a) {
			if(typeof a == K || Q(a)) return this.insertRows(this.G[B], a);
			e(n("Argument given to addRows must be either a number or an array"))
		};
		N.addRow = function(a) {
			if(Q(a)) return this[pc]([a]);
			P(a) && e(n("If argument is given to addRow, it must be an array, or null"));
			return this[pc](1)
		};
		N.getColumnRange = function(a) {
			return Rq(this, a)
		};
		N.getSortedRows = function(a) {
			return Sq(this, a)
		};
		N.sort = function(a) {
			var a = Nq(this, a),
				b = this;
			qo(this.G, function(c, d) {
				for(var f = 0; f < a[B]; f++) {
					var h = a[f],
						j = h.column,
						o = c.c[j],
						r = d.c[j],
						o = o ? o.v : k,
						r = r ? r.v : k,
						j = Qq(b[Ub](j), o, r);
					if(0 != j) return j * (h.desc ? -1 : 1)
				}
				return 0
			})
		};
		N.toJSON = function() {
			return un({
				cols: this.B,
				rows: this.G,
				p: this.$a
			})
		};
		N.getDistinctValues = function(a) {
			return Tq(this, a)
		};
		N.getFilteredRows = function(a) {
			return Vq(this, a)
		};
		N.removeRows = function(a, b) {
			0 >= b || (Oq(this, a), a + b > this.G[B] && (b = this.G[B] - a), this.G[Kd](a, b))
		};
		N.removeRow = function(a) {
			this.removeRows(a, 1)
		};
		N.removeColumns = function(a, b) {
			if(!(0 >= b)) {
				U(this, a);
				a + b > this.B[B] && (b = this.B[B] - a);
				this.B[Kd](a, b);
				for(var c = 0; c < this.G[B]; c++) this.G[c].c[Kd](a, b)
			}
		};
		N.removeColumn = function(a) {
			this.removeColumns(a, 1)
		};

		function Zq(a) {
			var b = a.version || hf;
			this.rj = uo($q, b) ? b : hf;
			this.ef = a.status;
			this.pb = [];
			this.qb = [];
			this.qb = a.warnings || [];
			this.pb = a[Gd] || [];
			ar(this.qb);
			ar(this.pb);
			if(this.ef != Ci) this.Mg = a.sig, this.h = new V(a.table, this.rj)
		}

		function ar(a) {
			for(var b = 0; b < a[B]; b++) {
				var c = a[b].detailed_message;
				c && (a[b].detailed_message = !c ? J : c[Gb](br) && !c[Gb](cr) ? c : c[u](/&/g, ge)[u](/</g, ie)[u](/>/g, he)[u](/\"/g, je))
			}
		}
		var br = /^[^<]*(<a(( )+target=('_blank')?("_blank")?)?( )+(href=('[^']*')?("[^"]*")?)>[^<]*<\/a>[^<]*)*$/,
			cr = /javascript((s)?( )?)*:/,
			$q = {
				Bl: gf,
				Cl: hf
			};
		N = Zq[D];
		N.Mg = k;
		N.h = k;
		N.isError = function() {
			return this.ef == Ci
		};
		N.hasWarning = function() {
			return this.ef == Fm
		};
		N.containsReason = function(a) {
			for(var b = 0; b < this.pb[B]; b++)
				if(this.pb[b].reason == a) return i;
			for(b = 0; b < this.qb[B]; b++)
				if(this.qb[b].reason == a) return i;
			return l
		};
		N.getDataSignature = function() {
			return this.Mg
		};
		N.getDataTable = function() {
			return this.h
		};
		N.Ff = function(a) {
			return this[Nb]() && this.pb && this.pb[0] && this.pb[0][a] ? this.pb[0][a] : this.hasWarning() && this.qb && this.qb[0] && this.qb[0][a] ? this.qb[0][a] : k
		};
		N.getReasons = function() {
			var a = this.Ff(ul);
			return P(a) && a != J ? [a] : []
		};
		N.getMessage = function() {
			return this.Ff(Ck) || J
		};
		N.getDetailedMessage = function() {
			return this.Ff(li) || J
		};

		function dr(a, b) {
			var c = b || {};
			this.qf = c.sendMethod || vh;
			uo(er, this.qf) || e(n("Send method not supported: " + this.qf));
			this.Og = c.makeRequestParams_ || {};
			$n(a) && (a = this.kk(a));
			var d = a,
				c = $n(d),
				d = Pn(Qn(5, d)),
				d = Un[cb](d);
			this.Lj = c && d;
			this.Kj = a;
			this.Gg = fr++;
			gr[s](this)
		}
		var er = {
				Dl: Jm,
				El: Km,
				yl: "scriptInjection",
				wl: wk,
				ql: vh
			},
			hr = new Np({
				"X-DataSource-Auth": "a"
			}),
			fr = 0,
			ir = {};
		dr[D].rh = 30;
		var gr = [],
			jr = O.gadgets;

		function kr() {
			for(var a = 0; a < gr[B]; a++) {
				var b = gr[a];
				b.tf && b.Jd()
			}
		}
		N = dr[D];
		N.kk = function(a) {
			var b = new Cq(a);
			433 == b.Qa && b.yc(k);
			var c = b.ja,
				c = c[u](/\/ccc$/, df);
			/\/pub$/ [cb](c) && (c = c[u](/\/pub$/, df), b.nd(ol, lf));
			b.xc(c);
			var c = Pn(Qn(3, a)),
				a = (ca(Qn(4, a)) || k) != k,
				d = Yn[cb](c),
				c = Zn[cb](c) && !d && a;
			b.zc(c ? Uj : Zj);
			return b[yc]()
		};

		function lr(a) {
			a[ed].Lg() ? (a = Cn(a[ed].Dk()), a[Gb](/^({.*})$/) ? (a = yn(a), mr(a)) : mn(zn(a))) : e(n("google.visualization.Query: " + a[ed].Ck()))
		}

		function mr(a) {
			var b = a.reqId,
				c = ir[b];
			c ? (ir[b] = k, c.Od(a)) : e(n("Missing query for request id: " + b))
		}
		N.vf = k;
		N.Md = k;
		N.Vd = k;
		N.Ra = k;
		N.kf = k;
		N.rc = k;
		N.tf = i;
		N.Gb = 0;
		N.$e = k;
		N.Da = l;
		N.setRefreshInterval = function(a) {
			(typeof a != K || 0 > a) && e(n("Refresh interval must be a non-negative number"));
			this.Gb = a;
			this.sh()
		};
		N.sf = function() {
			if(this.Vd) ba[fb](this.Vd), this.Vd = k
		};
		N.sk = function() {
			this.Lh(jm, Ig)
		};
		N.Lh = function(a, b, c) {
			this.Od({
				version: hf,
				status: Ci,
				errors: [{
					reason: a,
					message: b,
					detailed_message: c
				}]
			})
		};
		N.Nj = function(a) {
			var b = {};
			this.Ra && (b.tq = J + this.Ra);
			var c = xl + this.Gg,
				d = this.$e;
			d && (c += wf + d);
			this.kf && (c += xf + this.kf);
			b.tqx = c;
			if(this.rc) {
				var c = [],
					f;
				for(f in this.rc) c[s](f + uf + this.rc[f]);
				b.tqh = c[Ld](vf)
			}
			f = a;
			a = f[v](ae); - 1 != a && (f = f[xd](0, a));
			c = f[v](Ef);
			d = a = J;
			d = []; - 1 == c ? a = f : (a = f[xd](0, c), d = f[xd](c + 1), d = d[Pc](fe));
			f = [];
			for(c = 0; c < d[B]; c++) {
				var h = {};
				h.name = d[c][Pc](Cf)[0];
				h.pf = d[c];
				f[s](h)
			}
			for(var j in b) {
				d = b[j];
				h = l;
				for(c = 0; c < f[B]; c++)
					if(f[c][nc] == j) {
						f[c].pf = j + Cf + aa(d);
						h = i;
						break
					}
				if(!h) c = {}, c.name = j, c.pf =
					j + Cf + aa(d), f[s](c)
			}
			b = a;
			if(0 < f[B]) {
				b += Ef;
				j = [];
				for(c = 0; c < f[B]; c++) j[s](f[c].pf);
				b += j[Ld](fe)
			}
			a = b;
			this.Gb && (b = new Cq(a), Mo && b.Jj(), a = b[yc]());
			return a
		};
		N.Jd = function() {
			var a = this.Nj(this.Kj);
			ir[J + this.Gg] = this;
			var b = this.qf,
				c = cg;
			b == Km && (b = Jm, c = Fg);
			if(b == vh)
				if(/[?&]alt=gviz(&[^&]*)*$/ [cb](a)) b = wk;
				else {
					var b = a.search(Rn),
						d;
					b: {
						for(d = 0; 0 <= (d = a[v](pm, d)) && d < b;) {
							var f = a[rd](d - 1);
							if(38 == f || 63 == f)
								if(f = a[rd](d + 4), !f || 61 == f || 38 == f || 35 == f) break b;
							d += 5
						}
						d = -1
					}
					if(0 > d) b = k;
					else {
						f = a[v](fe, d);
						if(0 > f || f > b) f = b;
						d += 5;
						b = ka(a[vc](d, f - d)[u](/\+/g, Sd))
					}
					b = b || vh;
					uo(er, b) || (b = vh)
				}
			if(b == wk) Sm(Oi) ? this.Qj(a, this.Og) : e(n("gadgets.io.makeRequest is not defined."));
			else {
				if(!(d = b ==
						Jm)) {
					if(b = b == vh) d = (new Cq(O[Uc][wd])).Pj(new Cq(a))[yc](), b = O[Uc][wd][Gb](On), d = d[Gb](On), b = b[3] == d[3] && b[1] == d[1] && b[4] == d[4];
					d = b
				}
				d ? (b = g, d = a, c == Fg && (a = a[Pc](Ef), 1 <= a[B] && (d = a[0]), 2 <= a[B] && (b = a[1])), yq[Jb](d, lr, c, b, hr)) : (c = ja[rc](Bh)[0], b = Xm(this.$e), this.Lj && b ? (b = ja[Pb](dk), this.Oj(b, a), c[Ya](b)) : this.uf(a))
			}
		};
		N.Oj = function(a, b) {
			var c = this;
			a.onerror = function() {
				c.uf(b)
			};
			a.onload = function() {
				c.uf(b)
			};
			Va(a[F], Qk);
			a.src = b + ke + (new Date).getTime()
		};
		N.Qj = function(a, b) {
			if(b[jr.io[nb].CONTENT_TYPE] == k) b[jr.io[nb].CONTENT_TYPE] = jr.io.ContentType.TEXT;
			if(b[jr.io[nb].AUTHORIZATION] == k) b[jr.io[nb].AUTHORIZATION] = jr.io.AuthorizationType.SIGNED;
			b.OAUTH_ENABLE_PRIVATE_NETWORK == k && (b.OAUTH_ENABLE_PRIVATE_NETWORK = i);
			b.OAUTH_ADD_EMAIL == k && (b.OAUTH_ADD_EMAIL = i);
			jr.io.makeRequest(a, jn(this.Ik, this), b);
			this.zh()
		};
		N.Ik = function(a) {
			if(a != k && a.data) mn(zn(a.data));
			else {
				var b = J;
				a && a[Gd] && (b = a[Gd][Ld](Sd));
				this.Lh(xk, Pi, b)
			}
		};
		N.uf = function(a) {
			this.zh();
			on(a);
			this.sh()
		};
		N.zh = function() {
			var a = this;
			this.sf();
			this.Vd = ba[Lc](function() {
				a.sk()
			}, 1E3 * this.rh)
		};
		N.$g = function() {
			if(this.Md) ba[fb](this.Md), this.Md = k
		};
		N.sh = function() {
			this.$g();
			if(0 != this.Gb && this.tf && this.Da) {
				var a = this;
				this.Md = ba[Lc](function() {
					a.Jd()
				}, 1E3 * this.Gb)
			}
		};
		N.send = function(a) {
			this.Da = i;
			this.vf = a;
			this.Jd()
		};
		N.makeRequest = function(a, b) {
			this.Da = i;
			this.vf = a;
			this.jl = wk;
			this.Og = b || {};
			this.Jd()
		};
		N.abort = function() {
			this.Da = l;
			this.sf();
			this.$g()
		};
		N.Od = function(a) {
			this.sf();
			a = new Zq(a);
			if(!a.containsReason(Rk)) {
				this.$e = a[Nb]() ? k : a.getDataSignature();
				var b = this.vf;
				b[G](b, a)
			}
		};
		N.setTimeout = function(a) {
			(typeof a != K || la(a) || 0 >= a) && e(n("Timeout must be a positive number"));
			this.rh = a
		};
		N.setRefreshable = function(a) {
			typeof a != Ch && e(n("Refreshable must be a boolean"));
			return this.tf = a
		};
		N.setQuery = function(a) {
			typeof a != M && e(n("queryString must be a string"));
			this.Ra = a
		};
		N.el = function(a) {
			this.kf = a;
			a != k && this.Ch(tm, a)
		};
		N.Ch = function(a, b) {
			a = a[u](/\\/g, ch);
			b = b[u](/\\/g, ch);
			a = a[u](/:/g, dh);
			b = b[u](/:/g, dh);
			a = a[u](/;/g, eh);
			b = b[u](/;/g, eh);
			if(!this.rc) this.rc = {};
			this.rc[a] = b
		};

		function nr() {
			var a;
			or || (or = i, O.IDIModule && O.IDIModule.registerListener(kr, {
				pollingInterval: 100
			}), O.gadgets && (pr(We), this.yh()));
			a = ja;
			a = a.querySelectorAll && a.querySelector && (!Mo || pp(ja) || $o(qf)) ? a.querySelectorAll(Kf) : a[rc](Kf);
			this.Kk = pn(a[0])
		}
		var or = l;
		nr[D].Fh = 200;

		function qr() {
			return !!O.gadgets && !!O.gadgets.rpc
		}
		nr[D].yh = function() {
			if(qr()) {
				var a = O.gadgets;
				bn(a.rpc.register) && a.rpc.register(vl, kr)
			} else 0 < this.Fh && (this.Fh--, ba[Lc](jn(this.yh, this), 100))
		};
		nr[D].createQueryFromPrefs = function(a) {
			var b = a.getString(jh),
				c = b[Od]();
			if(0 == c[v](Vj) || 0 == c[v]($j)) b = ka(b);
			b = new dr(b);
			a = a.getInt(ih);
			b[fc](a);
			return b
		};
		nr[D].validateResponse = function(a) {
			return this.Kk(a)
		};

		function pr(a) {
			if(qr()) {
				var b = O.gadgets;
				try {
					b.rpc.getRelayUrl(a) || b.rpc.setRelayUrl(a, Xj)
				} catch(c) {
					bn(b.rpc.setRelayUrl) && b.rpc.setRelayUrl(a, Xj)
				}
			}
		}
		O.gadgets && !qr() && on("http://www.gmodules.com/gadgets/rpc/rpc.v.js");
		pr(We);

		function rr(a) {
			var b = a.__eventTarget;
			if(!P(b)) b = new sq, a.__eventTarget = b;
			return a = b
		}

		function sr(a) {
			return function(b) {
				a(b.al)
			}
		}

		function tr(a) {
			this.Zk = a
		}
		tr[D].getKey = function() {
			return this.Zk
		};

		function ur(a, b) {
			Yp[G](this, a);
			this.al = b
		}
		S(ur, Yp);

		function vr(a, b, c, d) {
			this.Ra = a;
			this.Cg = b;
			this.jb = c || {};
			this.ec = d;
			this.Jc = k;
			if(d) this.Jc = this.rf = pn(d);
			(!b || !(wi in b) || typeof b[kd] != Mi) && e(n("Visualization must have a draw method."))
		}
		N = vr[D];
		N.rf = k;
		N.hh = k;
		N.ih = k;
		N.h = k;
		N.setOptions = function(a) {
			this.jb = a || {}
		};
		N.draw = function() {
			this.h && this.Cg[kd](this.h, this.jb)
		};
		N.dl = function(a) {
			var b = this.ec;
			this.Jc = a ? a : b ? this.Jc = this.rf : k
		};
		N.sendAndDraw = function() {
			this.Jc || e(n("If no container was supplied, a custom error handler must be supplied instead."));
			var a = this;
			this.Ra[Jb](function(b) {
				var c = a.hh;
				c && c(b);
				a.Od(b);
				(c = a.ih) && c(b)
			})
		};
		N.Od = function(a) {
			var b = this.Jc;
			if(b(a)) this.h = a[tb](), this.Cg[kd](this.h, this.jb)
		};
		N.setCustomResponseHandler = function(a) {
			a == k ? this.pl = k : (typeof a != Mi && e(n("Custom response handler must be a function.")), this.hh = a)
		};
		N.setCustomPostResponseHandler = function(a) {
			if(a != k) typeof a != Mi && e(n("Custom post response handler must be a function.")), this.ih = a
		};
		N.abort = function() {
			this.Ra[Kc]()
		};

		function W(a) {
			this.h = a;
			for(var b = [], a = a[rb](), c = 0; c < a; c++) b[s](c);
			this.s = b;
			this.Xa = i;
			this.Wa = k;
			this.Le = [];
			this.Ke = i
		}
		N = W[D];
		N.mj = function() {
			for(var a = 0; a < this.s[B]; a++) $m(this.s[a]) && (this.Le[a] = []);
			this.Ke = l
		};
		N.Ic = function() {
			this.Ke = i
		};
		N.Xj = function() {
			for(var a = [], b = this.h[Dc](), c = 0; c < b; c++) a[s](c);
			this.Wa = a;
			this.Ic()
		};
		N.setColumns = function(a) {
			for(var b = this.h, c = to(wr), d = 0; d < a[B]; d++) {
				var f = a[d];
				if(an(f)) U(b, f);
				else if($m(f)) {
					var h = f.sourceColumn,
						f = f.calc;
					R(f) && ((!c || c && !ho(c, f)) && e(n('Unknown function "' + f + Xd)), P(h) && U(b, h))
				} else e(n("Invalid column input, expected either a number or an object."))
			}
			this.s = fn(a);
			a = this.h;
			b = this.s;
			for(c = 0; c < b[B]; c++)
				if(d = b[c], $m(d)) {
					if(h = d.role) f = d.properties || {}, f.role = h, d.properties = f;
					h = d.sourceColumn;
					if(an(h)) U(a, h), d.calc = d.calc || ak, Ca(d, d[z] || a[Ub](h))
				}
			this.Ic()
		};
		N.dh = function(a, b) {
			if(Q(a)) {
				Wm(b) && e(n("If the first parameter is an array, no second parameter is expected"));
				for(var c = 0; c < a[B]; c++) Oq(this.h, a[c]);
				return ko(a)
			}
			if(Vm(a) == K) {
				!Vm(b) == K && e(n("If first parameter is a number, second parameter must be specified and be a number."));
				a > b && e(n("The first parameter (min) must be smaller than or equal to the second parameter (max)."));
				Oq(this.h, a);
				Oq(this.h, b);
				for(var d = [], c = a; c <= b; c++) d[s](c);
				return d
			}
			e(n("First parameter must be a number or an array."))
		};
		N.setRows = function(a, b) {
			this.Wa = this.dh(a, b);
			this.Xa = l;
			this.Ic()
		};
		N.getViewColumns = function() {
			return fn(this.s)
		};
		N.getViewRows = function() {
			if(this.Xa) {
				for(var a = [], b = this.h[Dc](), c = 0; c < b; c++) a[s](c);
				return a
			}
			return ko(this.Wa)
		};
		N.hideColumns = function(a) {
			this[Md](eo(this.s, function(b) {
				return !ho(a, b)
			}));
			this.Ic()
		};
		N.hideRows = function(a, b) {
			var c = this.dh(a, b);
			if(this.Xa) this.Xj(), this.Xa = l;
			this.setRows(eo(this.Wa, function(a) {
				return !ho(c, a)
			}));
			this.Ic()
		};
		N.getViewColumnIndex = function(a) {
			for(var b = 0; b < this.s[B]; b++) {
				var c = this.s[b];
				if(c == a) return b;
				if($m(c) && c.sourceColumn == a) return b
			}
			return -1
		};
		N.getViewRowIndex = function(a) {
			return this.Xa ? 0 > a || a >= this.h[Dc]() ? -1 : a : bo(this.Wa, a)
		};
		N.getTableColumnIndex = function(a) {
			U(this, a);
			a = this.s[a];
			return an(a) ? a : $m(a) && an(a.sourceColumn) ? a.sourceColumn : -1
		};
		N.getUnderlyingTableColumnIndex = function(a) {
			a = this.getTableColumnIndex(a);
			if(-1 == a) return a;
			bn(this.h.getUnderlyingTableColumnIndex) && (a = this.h.getUnderlyingTableColumnIndex(a));
			return a
		};
		N.getTableRowIndex = function(a) {
			Oq(this, a);
			return this.Xa ? a : this.Wa[a]
		};
		N.getUnderlyingTableRowIndex = function(a) {
			a = this[Zb](a);
			bn(this.h.getUnderlyingTableRowIndex) && (a = this.h.getUnderlyingTableRowIndex(a));
			return a
		};
		N.getNumberOfRows = function() {
			return this.Xa ? this.h[Dc]() : this.Wa[B]
		};
		N.getNumberOfColumns = function() {
			return this.s[B]
		};
		N.getColumnId = function(a) {
			U(this, a);
			a = this.s[a];
			return an(a) ? this.h.getColumnId(a) : a.id || J
		};
		N.getColumnIndex = function(a) {
			for(var b = 0; b < this.s[B]; b++) {
				var c = this.s[b];
				if($m(c) && c.id == a) return b
			}
			return this.getViewColumnIndex(this.h.getColumnIndex(a))
		};
		N.getColumnLabel = function(a) {
			U(this, a);
			a = this.s[a];
			return an(a) ? this.h[Qb](a) : a[Id] || J
		};
		N.getColumnPattern = function(a) {
			U(this, a);
			a = this.s[a];
			return an(a) ? this.h[Tc](a) : k
		};
		N.getColumnRole = function(a) {
			a = this[Qc](a, Bl);
			return a = R(a) ? a : J
		};
		N.getColumnType = function(a) {
			U(this, a);
			a = this.s[a];
			return an(a) ? this.h[Ub](a) : a[z]
		};
		Ga(N, function(a, b) {
			U(this, b);
			var c = this[Zb](a),
				d = this.s[b];
			return an(d) ? this.h[A](c, d) : this.qj(c, b)
		});
		N.qj = function(a, b) {
			this.Ke && this.mj();
			var c = this.Le[b][a];
			if(Wm(c)) return c;
			var c = this.s[b],
				d = c.calc;
			R(d) ? (d = wr[d], c = d(this.h, a, c.sourceColumn)) : c = d[G](k, this.h, a);
			return this.Le[b][a] = c
		};
		N.getFormattedValue = function(a, b) {
			U(this, b);
			var c = this.s[b];
			return $m(c) ? Wq(this[A](a, b), this[Ub](b)) : an(c) ? this.h[Fd](this[Zb](a), c) : J
		};
		N.getProperty = function(a, b, c) {
			U(this, b);
			b = this.s[b];
			return an(b) ? this.h.getProperty(this[Zb](a), b, c) : k
		};
		N.getProperties = function(a, b) {
			U(this, b);
			var c = this.s[b];
			return an(c) ? this.h[Fc](this[Zb](a), c) : {}
		};
		N.getColumnProperty = function(a, b) {
			U(this, a);
			var c = this.s[a];
			return an(c) ? this.h[Qc](c, b) : this[Ab](a)[b] || k
		};
		N.getColumnProperties = function(a) {
			U(this, a);
			a = this.s[a];
			return an(a) ? this.h[Ab](a) : a.properties || {}
		};
		N.getTableProperty = function(a) {
			return this.h.getTableProperty(a)
		};
		N.getTableProperties = function() {
			return this.h[dc]()
		};
		N.getRowProperty = function(a, b) {
			return this.h.getRowProperty(this[Zb](a), b)
		};
		N.getRowProperties = function(a) {
			Oq(this, a);
			return this.h[cc](this[Zb](a))
		};
		N.getColumnRange = function(a) {
			return Rq(this, a)
		};
		N.getDistinctValues = function(a) {
			return Tq(this, a)
		};
		N.getSortedRows = function(a) {
			return Sq(this, a)
		};
		N.getFilteredRows = function(a) {
			return Vq(this, a)
		};
		N.toDataTable = function() {
			var a = this.h;
			bn(a[Rb]) && (a = a[Rb]());
			var a = xn(a[Hc]()),
				b = this[rb](),
				c = this[Dc](),
				d, f, h, j = [],
				o = [];
			for(d = 0; d < b; d++) h = this.s[d], $m(h) ? (f = wo(h), delete f.calc, delete f.sourceColumn) : an(h) ? f = a.cols[h] : e(n(og)), j[s](f);
			for(f = 0; f < c; f++) {
				var r = a[zd][this.Xa ? f : this.Wa[f]],
					w = [];
				for(d = 0; d < b; d++) {
					h = this.s[d];
					var C;
					$m(h) ? C = {
						v: this[A](f, d)
					} : an(h) ? C = r.c[this.s[d]] : e(n(og));
					w[s](C)
				}
				r.c = w;
				o[s](r)
			}
			a.cols = j;
			a.rows = o;
			return a = new V(a)
		};
		N.toJSON = function() {
			for(var a = {}, b = [], c = 0; c < this.s[B]; c++) {
				var d = this.s[c];
				(!$m(d) || R(d.calc)) && b[s](d)
			}
			0 == b[B] || (a.columns = b);
			this.Xa || (a.rows = ko(this.Wa));
			return un(a)
		};
		var wr = {
			emptyString: function() {
				return J
			},
			stringify: function(a, b, c) {
				return a[Fd](b, c)
			},
			fillFromTop: function(a, b, c) {
				return Xq(a, b, c, i)
			},
			fillFromBottom: function(a, b, c) {
				return Xq(a, b, c, l)
			},
			identity: function(a, b, c) {
				return a[A](b, c)
			}
		};
		var X = {
			Ef: "google-visualization-errors"
		};
		X.yg = X.Ef + "-";
		X.vh = X.Ef + uf;
		X.Af = X.Ef + "-all-";
		X.Me = X.vh + " container is null";
		X.Mi = "background-color: #c00000; color: white; padding: 2px;";
		X.Oi = "background-color: #fff4c2; color: black; white-space: nowrap; padding: 2px; border: 1px solid black;";
		X.Pi = "font: normal 0.8em arial,sans-serif; margin-bottom: 5px;";
		X.Ni = "font-size: 1.1em; color: #0000cc; font-weight: bold; cursor: pointer; padding-left: 10px; color: black;text-align: right; vertical-align: top;";
		X.xg = 0;
		X.addError = function(a, b, c, d) {
			X.Ne(a) || e(n(X.Me + ". message: " + b));
			var c = X.Ri(b, c, d),
				f = c.errorMessage,
				b = c.detailedMessage,
				c = c.options,
				h = P(c.showInTooltip) ? !!c.showInTooltip : i,
				j = (c[z] == Fm ? Fm : Ci) == Ci ? X.Mi : X.Oi,
				j = j + (c[F] ? c[F] : J),
				o = !!c.removable,
				d = ip(),
				f = d.d(Ul, {
					style: j
				}, d[qb](f)),
				j = X.yg + X.xg++,
				r = d.d(ti, {
					id: j,
					style: X.Pi
				}, f);
			if(b) h ? f.title = b : (h = ja[Pb](Ul), qa(h, b), d[Ya](r, d.d(ti, {
				style: el
			}, h)));
			if(o) b = d.d(Ul, {
				style: X.Ni
			}, d[qb](Pm)), b.onclick = kn(X.Pe, r), d[Ya](f, b);
			X.Qi(a, r);
			c.removeDuplicates && X.Si(a, r);
			return j
		};
		X.removeAll = function(a) {
			X.Ne(a) || e(n(X.Me));
			if(a = X.zf(a, l)) Va(a[F], Qk), xp(a)
		};
		X.addErrorFromQueryResponse = function(a, b) {
			X.Ne(a) || e(n(X.Me));
			b || e(n(X.vh + " response is null"));
			if(!b[Nb]() && !b.hasWarning()) return k;
			var c = b.getReasons(),
				d = i;
			b[Nb]() && (d = !(ho(c, ym) || ho(c, hk)));
			var c = b.getMessage(),
				f = b.getDetailedMessage(),
				d = {
					showInTooltip: d
				};
			Ca(d, b[Nb]() ? Ci : Fm);
			d.removeDuplicates = i;
			return X[Gc](a, c, f, d)
		};
		X.removeError = function(a) {
			a = ja[lb](a);
			return X.Cf(a) ? (X.Pe(a), i) : l
		};
		X.getContainer = function(a) {
			a = ja[lb](a);
			return X.Cf(a) ? a[Hd][Hd] : k
		};
		X.createProtectedCallback = function(a, b) {
			return function() {
				try {
					a[Ad](k, arguments)
				} catch(c) {
					bn(b) ? b(c) : google[E][Gd][Gc](b, c[Xc])
				}
			}
		};
		X.Pe = function(a) {
			var b = a[Hd];
			zp(a);
			0 == b[hc][B] && Va(b[F], Qk)
		};
		X.Cf = function(a) {
			return up(a) && a.id && 0 == a.id[jd](X.yg, 0) && (a = a[Hd]) && a.id && 0 == a.id[jd](X.Af, 0) && a[Hd] ? i : l
		};
		X.Ri = function(a, b, c) {
			var d = P(a) && a ? a : Ci,
				f = J,
				h = {},
				j = arguments[B];
			2 == j ? b && Vm(b) == Uk ? h = b : f = P(b) ? b : f : 3 == j && (f = P(b) ? b : f, h = c || {});
			d = Cn(d);
			f = Cn(f);
			return {
				errorMessage: d,
				detailedMessage: f,
				options: h
			}
		};
		X.Ne = function(a) {
			return P(a) && up(a)
		};
		X.zf = function(a, b) {
			for(var c = a[hc], d = k, f = ip(), h = 0; h < c[B]; h++)
				if(c[h].id && 0 == c[h].id[jd](X.Af, 0)) {
					d = c[h];
					f.removeNode(d);
					break
				}!d && b && (d = X.Af + X.xg++, d = rp(ti, {
				id: d,
				style: si
			}, k));
			d && ((c = a[Vb]) ? f.se(d, c) : f[Ya](a, d));
			return d
		};
		X.Qi = function(a, b) {
			var c = X.zf(a, i);
			Va(c[F], zh);
			c[Ya](b)
		};
		X.Fk = function(a, b) {
			var c = X.zf(a, i);
			co(c && c[hc], function(a) {
				X.Cf(a) && b(a)
			})
		};
		X.Si = function(a, b) {
			var c = /id="?google-visualization-errors-[0-9]*"?/,
				d = Cp(b),
				d = d[u](c, J),
				f = [];
			X.Fk(a, function(a) {
				if(a != b) {
					var j = Cp(a),
						j = j[u](c, J);
					j == d && f[s](a)
				}
			});
			co(f, X.Pe);
			return f[B]
		};
		var xr = {
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#00ffff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000000",
			blanchedalmond: "#ffebcd",
			blue: "#0000ff",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#00ffff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgreen: "#006400",
			darkgrey: "#a9a9a9",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkslategrey: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dimgrey: "#696969",
			dodgerblue: "#1e90ff",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#ff00ff",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			gold: "#ffd700",
			goldenrod: "#daa520",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			grey: "#808080",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavender: "#e6e6fa",
			lavenderblush: "#fff0f5",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgray: "#d3d3d3",
			lightgreen: "#90ee90",
			lightgrey: "#d3d3d3",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslategray: "#778899",
			lightslategrey: "#778899",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#00ff00",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#ff00ff",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370d8",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#d87093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			red: "#ff0000",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			slategrey: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			wheat: "#f5deb3",
			white: "#ffffff",
			whitesmoke: "#f5f5f5",
			yellow: "#ffff00",
			yellowgreen: "#9acd32"
		};

		function yr(a) {
			var b = {},
				a = J + a,
				c = a[pb](0) == ae ? a : ae + a;
			if(zr[cb](c)) return a = c, zr[cb](a) || e(n("'" + a + "' is not a valid hex color")), 4 == a[B] && (a = a[u](Ar, be)), b.Hf = a[Od](), Ca(b, Nj), b;
			a: {
				var d = a[Gb](Br);
				if(d) {
					var c = ca(d[1]),
						f = ca(d[2]),
						d = ca(d[3]);
					if(0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= d && 255 >= d) {
						c = [c, f, d];
						break a
					}
				}
				c = []
			}
			if(c[B]) return f = c[0], a = c[1], c = c[2], f = ca(f), a = ca(a), c = ca(c), (la(f) || 0 > f || 255 < f || la(a) || 0 > a || 255 < a || la(c) || 0 > c || 255 < c) && e(n('"(' + f + ue + a + ue + c + '") is not a valid RGB color')), f = Cr(f[yc](16)), a = Cr(a[yc](16)),
				c = Cr(c[yc](16)), b.Hf = ae + f + a + c, Ca(b, zl), b;
			if(xr && (c = xr[a[Od]()])) return b.Hf = c, Ca(b, Mk), b;
			e(n(a + " is not a valid color string"))
		}
		var Ar = /#(.)(.)(.)/,
			zr = /^#(?:[0-9a-f]{3}){1,2}$/i,
			Br = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

		function Cr(a) {
			return 1 == a[B] ? ff + a : a
		};

		function Dr(a) {
			return a == Qk || a == J || a == rm ? Qk : yr(a).Hf
		};

		function Er(a, b) {
			this.start = a < b ? a : b;
			this.end = a < b ? b : a
		}
		Ra(Er[D], function() {
			return new Er(this.start, this.end)
		});

		function Fr(a, b) {
			return a.start <= b && a.end >= b
		};

		function Gr(a) {
			P(a) || (a = {});
			this.Ve = Qk;
			P(a.fill) && this.dj(a.fill);
			this.Ue = 1;
			P(a.Fg) && this.ej(a.Fg);
			this.Te = Qk;
			P(a.stroke) && this.gj(a.stroke);
			this.Ye = 1;
			P(a.kj) && this.Eg(a.kj);
			this.Xe = 1;
			P(a.Hg) && this.ij(a.Hg);
			this.We = Rl;
			P(a.jj) && this.hj(a.jj);
			this.Ka = k;
			if(a.Ka) this.Ka = wo(a.Ka), this.Ka.bj = Dr(this.Ka.bj), this.Ka.cj = Dr(this.Ka.cj);
			this.Cd = k;
			a.pattern && this.fj(a.pattern)
		}
		N = Gr[D];
		Ra(N, function() {
			var a = new Gr;
			a.Ve = this.Ve;
			a.Ue = this.Ue;
			a.Te = this.Te;
			a.Ye = this.Ye;
			a.Xe = this.Xe;
			a.We = this.We;
			a.Ka = this.Ka ? wo(this.Ka) : k;
			a.Cd = this.Cd ? this.Cd[cd]() : k;
			return a
		});
		N.dj = function(a) {
			this.Ve = Dr(a)
		};
		N.ej = function(a) {
			this.Ue = q.min(q.max(a, 0), 1)
		};
		N.gj = function(a, b) {
			this.Te = Dr(a);
			P(b) && this.Eg(b)
		};
		N.Eg = function(a) {
			this.Ye = a
		};
		N.ij = function(a) {
			this.Xe = q.min(q.max(a, 0), 1)
		};
		N.hj = function(a) {
			this.We = a
		};
		N.fj = function(a) {
			this.Cd = a
		};
		new Gr({
			Fg: 0,
			fill: "white",
			Hg: 0,
			stroke: "white"
		});

		function Hr(a, b, c, d) {
			this.top = a;
			Xa(this, b);
			Ta(this, c);
			ua(this, d)
		}
		Ra(Hr[D], function() {
			return new Hr(this.top, this[Pd], this[ud], this[y])
		});
		Ua(Hr[D], function(a) {
			return !this || !a ? l : a instanceof Hr ? a[y] >= this[y] && a[Pd] <= this[Pd] && a.top >= this.top && a[ud] <= this[ud] : a.x >= this[y] && a.x <= this[Pd] && a.y >= this.top && a.y <= this[ud]
		});

		function Ir(a, b, c, d) {
			ua(this, a);
			this.top = b;
			pa(this, c);
			Wa(this, d)
		}
		Ra(Ir[D], function() {
			return new Ir(this[y], this.top, this[t], this[I])
		});
		Ir[D].Ng = function(a) {
			var b = q.max(this[y], a[y]),
				c = q.min(this[y] + this[t], a[y] + a[t]);
			if(b <= c) {
				var d = q.max(this.top, a.top),
					a = q.min(this.top + this[I], a.top + a[I]);
				if(d <= a) return ua(this, b), this.top = d, pa(this, c - b), Wa(this, a - d), i
			}
			return l
		};
		Ua(Ir[D], function(a) {
			return a instanceof Ir ? this[y] <= a[y] && this[y] + this[t] >= a[y] + a[t] && this.top <= a.top && this.top + this[I] >= a.top + a[I] : a.x >= this[y] && a.x <= this[y] + this[t] && a.y >= this.top && a.y <= this.top + this[I]
		});

		function Jr(a, b) {
			var c = kp(a);
			return c[ic] && c[ic].getComputedStyle && (c = c[ic].getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : J
		}

		function Kr(a, b) {
			return Jr(a, b) || (a[vd] ? a[vd][b] : k) || a[F] && a[F][b]
		}

		function Lr(a) {
			return Kr(a, kl)
		}

		function Mr(a, b, c) {
			var d, f = Lo && (Fo || Qo) && $o(nf);
			b instanceof Ln ? (d = b.x, b = b.y) : (d = b, b = c);
			ua(a[F], Nr(d, f));
			a[F].top = Nr(b, f)
		}

		function Or(a) {
			var b = a[$a]();
			if(T) a = a.ownerDocument, ua(b, b[y] - (a[uc][Yb] + a[ad][Yb])), b.top -= a[uc][ac] + a[ad][ac];
			return b
		}

		function Pr(a) {
			if(T && !bp(8)) return a.offsetParent;
			for(var b = kp(a), c = Kr(a, kl), d = c == Gi || c == lh, a = a[Hd]; a && a != b; a = a[Hd])
				if(c = Kr(a, kl), d = d && c == Yl && a != b[uc] && a != b[ad], !d && (a.scrollWidth > a[Jc] || a[Sb] > a[pd] || c == Gi || c == lh || c == wl)) return a;
			return k
		}

		function Qr(a) {
			for(var b = new Hr(0, ea, ea, 0), c = ip(a), d = c.o[ad], f = c.o[uc], h = c.Sj(); a = Pr(a);)
				if((!T || 0 != a[Jc]) && (!Mo || 0 != a[pd] || a != d) && a != d && a != f && Kr(a, cl) != Dm) {
					var j = Rr(a),
						o;
					o = a;
					if(Lo && !$o(nf)) {
						var r = ga(Jr(o, Ih));
						if(Sr(o)) var w = o.offsetWidth - o[Jc] - r - ga(Jr(o, Kh)),
							r = r + w;
						o = new Ln(r, ga(Jr(o, Mh)))
					} else o = new Ln(o[Yb], o[ac]);
					j.x += o.x;
					j.y += o.y;
					b.top = q.max(b.top, j.y);
					Xa(b, q.min(b[Pd], j.x + a[Jc]));
					Ta(b, q.min(b[ud], j.y + a[pd]));
					ua(b, q.max(b[y], j.x))
				}
			d = h[qd];
			h = h[xc];
			ua(b, q.max(b[y], d));
			b.top = q.max(b.top, h);
			c = c.Tj();
			Xa(b, q.min(b[Pd], d + c[t]));
			Ta(b, q.min(b[ud], h + c[I]));
			return 0 <= b.top && 0 <= b[y] && b[ud] > b.top && b[Pd] > b[y] ? b : k
		}

		function Rr(a) {
			var b, c = kp(a),
				d = Kr(a, kl),
				f = Lo && c[Ib] && !a[$a] && d == lh && (b = c[Ib](a)) && (0 > b[Eb] || 0 > b[Fb]),
				h = new Ln(0, 0),
				j;
			b = c ? 9 == c[ib] ? c : kp(c) : ja;
			j = T && !bp(9) && !ip(b).ff() ? b[ad] : b[uc];
			if(a == j) return h;
			if(a[$a]) b = Or(a), a = ip(c).ac(), h.x = b[y] + a.x, h.y = b.top + a.y;
			else if(c[Ib] && !f) b = c[Ib](a), a = c[Ib](j), h.x = b[Eb] - a[Eb], h.y = b[Fb] - a[Fb];
			else {
				b = a;
				do {
					h.x += b.offsetLeft;
					h.y += b[Jd];
					b != a && (h.x += b[Yb] || 0, h.y += b[ac] || 0);
					if(Mo && Lr(b) == Gi) {
						h.x += c[ad][qd];
						h.y += c[ad][xc];
						break
					}
					b = b.offsetParent
				} while (b && b != a);
				if(Ko || Mo && d ==
					lh) h.y -= c[ad][Jd];
				for(b = a;
					(b = Pr(b)) && b != c[ad] && b != j;)
					if(h.x -= b[qd], !Ko || b[Cd] != Sg) h.y -= b[xc]
			}
			return h
		}

		function Tr(a, b, c) {
			b instanceof Nn ? (c = b[I], b = b[t]) : c == g && e(n("missing height argument"));
			pa(a[F], Nr(b, i));
			Wa(a[F], Nr(c, i))
		}

		function Nr(a, b) {
			typeof a == K && (a = (b ? q.round(a) : a) + pl);
			return a
		}

		function Ur(a) {
			if(Kr(a, ri) != Qk) return Vr(a);
			var b = a[F],
				c = b.display,
				d = b.visibility,
				f = b.position;
			Ka(b, Oj);
			b.position = lh;
			Va(b, ek);
			a = Vr(a);
			Va(b, c);
			b.position = f;
			Ka(b, d);
			return a
		}

		function Vr(a) {
			var b = a.offsetWidth,
				c = a.offsetHeight,
				d = Mo && !b && !c;
			return(!Wm(b) || d) && a[$a] ? (a = Or(a), new Nn(a[Pd] - a[y], a[ud] - a.top)) : new Nn(b, c)
		}

		function Wr(a) {
			var b = Rr(a),
				a = Ur(a);
			return new Ir(b.x, b.y, a[t], a[I])
		}

		function Xr(a, b) {
			var c = a[F];
			if(Wk in c) c.opacity = b;
			else if(yg in c) c.MozOpacity = b;
			else if(Fi in c) c.filter = b === J ? J : rh + 100 * b + se
		}

		function Yr(a, b) {
			Va(a[F], b ? J : Qk)
		}

		function Sr(a) {
			return Dl == Kr(a, oi)
		}
		var Zr = Lo ? "MozUserSelect" : Mo ? "WebkitUserSelect" : k;

		function $r(a, b, c) {
			c = !c ? a[rc](te) : k;
			if(Zr) {
				if(b = b ? Qk : J, a[F][Zr] = b, c)
					for(var a = 0, d; d = c[a]; a++) d[F][Zr] = b
			} else if(T || Ko)
				if(b = b ? Vk : J, a[$b](xm, b), c)
					for(a = 0; d = c[a]; a++) d[$b](xm, b)
		}

		function as(a, b, c, d) {
			if(/^\d+px?$/ [cb](b)) return fa(b, 10);
			var f = a[F][c],
				h = a.runtimeStyle[c];
			a.runtimeStyle[c] = a[vd][c];
			a[F][c] = b;
			b = a[F][d];
			a[F][c] = f;
			a.runtimeStyle[c] = h;
			return b
		}

		function bs(a, b) {
			return as(a, a[vd] ? a[vd][b] : k, sk, jl)
		}
		var cs = {
			thin: 2,
			medium: 4,
			thick: 6
		};

		function ds(a, b) {
			if((a[vd] ? a[vd][b + Qg] : k) == Qk) return 0;
			var c = a[vd] ? a[vd][b + Yg] : k;
			return c in cs ? cs[c] : as(a, c, sk, jl)
		};

		function es() {
			var a = Sm(Hj);
			P(a) || (a = Wj);
			var b = Sm(Jj);
			P(b) || (b = mf);
			return a + cf + b
		}

		function fs(a) {
			var b = Sm(a);
			bn(b) || (b = Sm(Ij + a), bn(b) || (b = k));
			return b
		};

		function gs() {}
		N = gs[D];
		N.$ = function(a) {
			(!$m(a) || !bn(a[rb]) || !bn(a[Dc])) && e(n("Invalid data table."))
		};
		N.rk = function(a) {
			this.$(a);
			a = new google[E][md](a);
			if(this.W(a)) return a;
			a = this.Ij(a);
			a = this.Ub(a);
			a = this.Zg(a);
			return this.W(a) ? a : k
		};
		N.e = function(a, b, c) {
			return a[rb]() > b && c == a[Ub](b)
		};
		N.indexOf = function(a, b) {
			for(var c = 0; c < a[rb](); c++)
				if(a[Ub](c) == b) return c;
			return -1
		};
		N.bf = function(a, b) {
			return this.e(a, b, K) ? this.Sb(a, b, function(a) {
				return 0 <= a
			}) : l
		};
		N.Sb = function(a, b, c) {
			for(var d = q.min(a[Dc](), 20), f = 0; f < d; f++) {
				var h = a[A](f, b);
				if(h != k && !c(h)) return l
			}
			return i
		};
		N.tj = function(a, b, c) {
			if(!this.e(a, b, K)) return l;
			if(!this.e(a, c, K)) return l;
			var d = jn(this.wj, this),
				f = jn(this.xj, this);
			return this.Sb(a, b, d) && this.Sb(a, c, f)
		};
		N.wj = function(a) {
			return Fr(new Er(-90, 90), a) && !(ha(a) && 0 == a % 1)
		};
		N.xj = function(a) {
			return Fr(new Er(-180, 180), a) && !(ha(a) && 0 == a % 1)
		};
		N.Ia = function(a, b) {
			var c = new google[E][md](a);
			c[Md](b);
			return c
		};
		N.ta = function(a, b) {
			for(var c = a[rb](), d = 0; d < c; d++) b(d)
		};
		N.Ed = function(a, b) {
			var c = this,
				d = 0;
			this.ta(a, function(f) {
				c.e(a, f, b) && d++
			});
			return d
		};
		N.Ub = function(a) {
			var b = this,
				c = [],
				d = this.Ed(a, M);
			this.ta(a, function(f) {
				b.e(a, f, K) ? c[s](f) : b.e(a, f, M) && 1 == d && c[s](f)
			});
			return this.Ia(a, c)
		};
		N.Zg = function(a) {
			if(1 == this.Ed(a, M)) {
				var b = this[v](a, M),
					c = [b];
				this.ta(a, function(a) {
					a != b && c[s](a)
				});
				a = this.Ia(a, c)
			}
			return a
		};
		N.Ij = function(a) {
			var b = this,
				c = [];
			this.ta(a, function(d) {
				b.e(a, d, M) ? b.Sb(a, d, function(a) {
					return /^[\s\xa0]*$/ [cb](a)
				}) || c[s](d) : c[s](d)
			});
			return this.Ia(a, c)
		};
		N.Kg = function(a) {
			for(var b = a.getDistinctValues(0), c = q.min(a[Dc](), 20), d = 0, f = 0; f < c; f++) {
				var h = a[A](f, 1);
				(!h || ho(b, h)) && d++
			}
			return 0.6 < d / c
		};

		function hs() {}
		S(hs, gs);
		hs[D].W = function(a) {
			this.$(a);
			var b = a[rb]();
			if(2 > b) return l;
			var c = a[Ub](0);
			if(c != gi && c != hi) return l;
			if(a[Ub](1) != K) return l;
			for(var c = 0, d = 1; d < b; d++) {
				var f = a[Ub](d);
				if(f == K) c = 0;
				else if(f == M) {
					if(c++, 2 < c) return l
				} else return l
			}
			return i
		};
		hs[D].Ub = function(a) {
			var b = this,
				c = [];
			this.ta(a, function(d) {
				(b.e(a, d, M) || b.e(a, d, K) || b.e(a, d, gi) || b.e(a, d, hi)) && c[s](d)
			});
			return this.Ia(a, c)
		};
		hs[D].Zg = function(a) {
			var b;
			b = 0 + this.Ed(a, gi);
			b += this.Ed(a, hi);
			if(1 == b) {
				var c = this[v](a, gi),
					c = -1 == c ? this[v](a, hi) : c,
					d = [c];
				this.ta(a, function(a) {
					a != c && d[s](a)
				});
				a = this.Ia(a, d)
			}
			return a
		};

		function is(a) {
			this.Jg = !!(a || {}).Dh
		}
		S(is, gs);
		is[D].W = function(a) {
			this.$(a);
			var b = 0,
				c = a[rb]();
			if(1 > c) return l;
			if(!this.e(a, 0, K) && (b++, this.Jg))
				for(; b < c && this.e(a, b, M);) b++;
			for(var d = k; b < c;) {
				var f = a[Ub](b);
				if(f == K) d = {};
				else if(this.Jg && f == M) {
					if(!d) return l
				} else if(f == Ch) {
					if(!d) return l;
					if(d.pj) return l;
					d.pj = b
				} else return l;
				b++
			}
			return !Xm(d)
		};

		function js(a) {
			is[G](this, a)
		}
		S(js, is);

		function ks() {}
		S(ks, gs);
		ks[D].W = function(a) {
			this.$(a);
			var b = a[rb]();
			return 3 > b || 5 < b ? l : !this.e(a, 0, M) ? l : !this.e(a, 1, K) ? l : !this.e(a, 2, K) ? l : 3 < b && !this.e(a, 3, M) ? l : 4 < b && !this.e(a, 4, K) ? l : i
		};

		function ls() {}
		S(ls, gs);
		ls[D].W = function(a) {
			this.$(a);
			if(5 != a[rb]()) return l;
			if(!this.e(a, 0, M) || !this.e(a, 1, K) || !this.e(a, 2, K) || !this.e(a, 3, K) || !this.e(a, 4, K)) return l;
			for(var b = q.min(a[Dc](), 20), c = 0; c < b; c++) {
				var d = a[A](c, 1),
					f = a[A](c, 2),
					h = a[A](c, 3),
					j = a[A](c, 4);
				if(d != q.min(d, f, h, j)) return l;
				if(j != q.max(d, f, h, j)) return l
			}
			return i
		};
		ls[D].Ub = function(a) {
			var b = this,
				c = [];
			this.ta(a, function(d) {
				(b.e(a, d, M) || b.e(a, d, K)) && c[s](d)
			});
			return this.Ia(a, c)
		};

		function ms() {
			is[G](this)
		}
		S(ms, is);

		function ns() {}
		S(ns, gs);
		ns[D].W = function(a) {
			this.$(a);
			return this.gk(a) || this.hk(a)
		};
		ns[D].gk = function(a) {
			var b = a[rb]();
			if(1 > b || 2 < b) return l;
			var c = i;
			2 == b && (c = c && this.e(a, 0, M));
			return c = c && this.bf(a, b - 1)
		};
		ns[D].hk = function(a) {
			var b = a[rb](),
				c = a[Dc]();
			if(0 == b || 1 != c) return l;
			for(var c = i, d = 0; d < b; d++)
				if(!this.e(a, d, K)) {
					c = l;
					break
				}
			return c
		};

		function os() {}
		S(os, gs);
		os[D].W = function(a) {
			var b = a[rb]();
			if(1 > b || 2 < b) return l;
			var c = this.e(a, 0, M);
			2 == b && (c = c && this.e(a, 1, K));
			return c
		};

		function ps() {}
		S(ps, gs);
		ps[D].W = function(a) {
			return this.Ok(a) || this.Nk(a)
		};
		ps[D].Ok = function(a) {
			this.$(a);
			var b = a[rb]();
			if(2 > b || 3 < b) return l;
			var c = this.e(a, 0, K),
				c = c && this.e(a, 1, K);
			3 == b && (c = c && this.e(a, 2, M));
			return c && this.tj(a, 0, 1)
		};
		ps[D].Nk = function(a) {
			this.$(a);
			var b = a[rb]();
			return 1 > b || 2 < b ? l : !this.e(a, 0, M) ? l : 2 == b && !this.e(a, 1, M) ? l : i
		};

		function qs() {}
		S(qs, gs);
		qs[D].W = function(a) {
			this.$(a);
			var b = a[rb]();
			if(3 > b) return l;
			if(a[Ub](0) != M) return l;
			var c = a[Ub](1);
			if(c != K && c != gi && c != M) return l;
			if(c == M && !this.ak(a, 1) && !this.$j(a, 1)) return l;
			if(c == K && !this.Sb(a, 1, function(a) {
					return ha(a) && 0 == a % 1
				})) return l;
			for(c = 2; c < b; c++) {
				var d = a[Ub](c);
				if(d != K && d != M) return l
			}
			return i
		};
		qs[D].ak = function(a, b) {
			return this.Sb(a, b, function(a) {
				return 7 != a[B] ? l : la(a[xd](0, 3)) ? l : a[pb](4) != Xg ? l : la(a[xd](6, 7)) ? l : i
			})
		};
		qs[D].$j = function(a, b) {
			return this.Sb(a, b, function(a) {
				return 6 != a[B] ? l : la(a[xd](0, 3)) ? l : a[pb](4) != Hg ? l : la(a[pb](5)) ? l : i
			})
		};

		function rs() {}
		S(rs, gs);
		rs[D].W = function(a) {
			this.$(a);
			var b = a[rb]();
			if(2 > b || 3 < b) return l;
			var c = this.e(a, 0, M) && this.e(a, 1, M);
			3 == b && (c = c && this.e(a, 2, M));
			return c && this.Kg(a)
		};
		rs[D].Ub = function(a) {
			var b = this,
				c = [];
			this.ta(a, function(d) {
				b.e(a, d, M) && c[s](d)
			});
			return this.Ia(a, c)
		};

		function ss() {}
		S(ss, gs);
		ss[D].W = function(a) {
			this.$(a);
			var b = a[rb]();
			if(1 > b || 2 < b) return l;
			var c = this.e(a, b - 1, K);
			return c = c && this.bf(a, b - 1)
		};

		function ts() {}
		S(ts, gs);
		ts[D].W = function(a) {
			this.$(a);
			var b = a[rb]();
			if(0 == b) return l;
			for(var c = this.e(a, 0, M) ? 1 : 0, d = b > c; c < b; c++)
				if(!this.e(a, c, K)) {
					d = l;
					break
				}
			return d
		};

		function us() {}
		S(us, gs);
		us[D].W = function(a) {
			this.$(a);
			var b = a[rb]();
			if(2 > b) return l;
			if(this.e(a, 0, Ch) || this.e(a, 0, M)) return l;
			for(var c = 1, d = 0, f = 0; c < b;) {
				var h = a[Ub](c);
				if(h == K) d++, f = 0;
				else if(h == Ch) {
					f++;
					if(0 == d) return l;
					if(1 < f) return l
				} else return l;
				c++
			}
			return 0 < d
		};
		us[D].Ub = function(a) {
			var b = this,
				c = [];
			this.ta(a, function(d) {
				!b.e(a, d, M) && !b.e(a, d, Ch) && c[s](d)
			});
			return this.Ia(a, c)
		};

		function vs() {}
		S(vs, gs);
		vs[D].W = function(a) {
			this.$(a);
			for(var b = i, c = a[rb](), d = 0; d < c; d++)
				if(!this.e(a, d, K)) {
					b = l;
					break
				}
			return b
		};
		vs[D].Ub = function(a) {
			var b = this,
				c = [];
			this.ta(a, function(d) {
				b.e(a, d, K) && c[s](d)
			});
			return this.Ia(a, c)
		};

		function ws() {}
		S(ws, gs);
		ws[D].W = function() {
			return i
		};

		function xs() {}
		S(xs, gs);
		xs[D].W = function(a) {
			this.$(a);
			var b = a[rb]();
			if(2 > b || 4 < b) return l;
			var c = this.e(a, 0, M) && this.e(a, 1, M);
			2 < b && (c = c && this.bf(a, 2)) && 3 < b && (c = c && this.e(a, 3, K));
			return c && this.Kg(a)
		};
		xs[D].Ub = function(a) {
			var b = this,
				c = [];
			this.ta(a, function(d) {
				(b.e(a, d, M) || b.e(a, d, K)) && c[s](d)
			});
			return this.Ia(a, c)
		};
		var ys = {
			AnnotatedTimeLine: {
				format: new hs,
				J: 3
			},
			AreaChart: {
				format: new js({
					Dh: i
				}),
				J: 2
			},
			BarChart: {
				format: new is,
				J: 2
			},
			BubbleChart: {
				format: new ks,
				J: 2
			},
			CandlestickChart: {
				format: new ls,
				J: 2
			},
			ColumnChart: {
				format: new is,
				J: 2
			},
			ComboChart: {
				format: new ms,
				J: 2
			},
			Gauge: {
				format: new ns,
				J: 1
			},
			GeoChart: {
				format: new os,
				J: 3
			},
			LineChart: {
				format: new is({
					Dh: i
				}),
				J: 2
			},
			ImageRadarChart: {
				format: new ts,
				J: 1
			},
			ImageSparkLine: {
				format: new vs,
				J: 1
			},
			Map: {
				format: new ps,
				J: 2
			},
			MotionChart: {
				format: new qs,
				J: 3
			},
			OrgChart: {
				format: new rs,
				J: 2
			},
			PieChart: {
				format: new ss,
				J: 2
			},
			ScatterChart: {
				format: new us,
				J: 2
			},
			SteppedAreaChart: {
				format: new js,
				J: 2
			},
			Table: {
				format: new ws,
				J: 0
			},
			TreeMap: {
				format: new xs,
				J: 2
			},
			WordTree: {
				format: new os,
				J: 2
			}
		};

		function zs(a) {
			An(a) || (a = a[u](/\d/g, ff), a = a[u](/#{10,}/, oa(11)[Ld](ae)));
			return a
		}

		function As(a) {
			if(1 != a.Nd()) return k;
			a = a.Ja()[0];
			return zs(a)
		};

		function Bs(a, b) {
			var c = b || {};
			R(c) && (c = xn(c));
			this.Ee = c.containerId || k;
			this.pd = a;
			this.fa = c[a + Vg] || k;
			this.og = c[a + Bg] || k;
			Qa(this, k);
			this.He = c.dataSourceUrl || k;
			this.h = k;
			this[hd](c.dataTable);
			this.jb = c.options || {};
			this.Sa = c.state || {};
			var d = c.packages;
			this.pg = Wm(d) ? d : k;
			this.Ra = c.query || k;
			this.Gb = c.refreshInterval || k;
			this.Ob = c.view || k
		}
		var Cs = {
			AnnotatedTimeLine: "annotatedtimeline",
			AreaChart: di,
			BarChart: di,
			BubbleChart: di,
			CandlestickChart: di,
			ColumnChart: di,
			ComboChart: di,
			Gauge: "gauge",
			GeoChart: "geochart",
			GeoMap: "geomap",
			ImageAreaChart: "imageareachart",
			ImageBarChart: "imagebarchart",
			ImageCandlestickChart: "imagechart",
			ImageChart: "imagechart",
			ImageLineChart: "imagelinechart",
			ImagePieChart: "imagepiechart",
			ImageSparkLine: "imagesparkline",
			IntensityMap: "intensitymap",
			LineChart: di,
			Map: "map",
			MotionChart: "motionchart",
			OrgChart: "orgchart",
			PieChart: di,
			RangeSelector: di,
			ScatterChart: di,
			SparklineChart: di,
			SteppedAreaChart: di,
			Table: "table",
			Timeline: "timeline",
			TreeMap: "treemap",
			StringFilter: ci,
			NumberRangeFilter: ci,
			CategoryFilter: ci,
			ChartRangeFilter: ci,
			Dashboard: ci
		};
		N = Bs[D];
		N.fh = k;
		N.ec = k;
		Ra(N, function() {
			return new this[Rc](this[Hc]())
		});
		N.draw = function(a) {
			a = lp(a || J);
			up(a) ? a != this.ec && this.hf() : (a = lp(this[td]()), up(a) || e(n("The container is null or not defined.")));
			this.ec = a;
			try {
				if(P(this.fa) || e(n("The " + this.pd + " type is not defined.")), fs(this.fa)) this.ah(a);
				else {
					var b = jn(this.ah, this, a),
						b = google[E][Gd].createProtectedCallback(b, jn(this.jf, this, a));
					this.Mj(b)
				}
			} catch(c) {
				this.jf(a, c)
			}
		};
		N.toJSON = function() {
			return this.Eh(this[tb]())
		};
		N.Eh = function(a) {
			var b = this[sd](),
				c = g;
			Xm(a) || (c = bn(a[Rb]) ? xn(a[Rb]()[Hc]()) : xn(a[Hc]()));
			a = {
				containerId: this[td]() || g,
				dataSourceUrl: this[dd]() || g,
				dataTable: c,
				options: this[mb]() || g,
				state: this[od]() || g,
				packages: Xm(b) ? g : b,
				refreshInterval: this[nd]() || g,
				query: this[yd]() || g,
				view: this[Cc]() || g
			};
			a[this.pd + Vg] = this.fa || g;
			a[this.pd + Bg] = this[Kb]() || g;
			this.mh(a);
			return un(a)
		};
		N.Yj = function() {
			this.mk();
			this.lk();
			var a = this.fa,
				b = this[tb](),
				c = this[mb](),
				d = c.vAxes || [{}, {}],
				f = c.hAxis || {},
				h = d[0] || {},
				j = d[1] || {},
				o = c.vAxis || {};
			if(!f[Hb] && !h[Hb] && !j[Hb] && !o[Hb])
				if(a == Of) {
					if(!(3 > b[rb]())) {
						a = b[Tc](1);
						if(!An(a)) d = c.hAxis || {}, xa(d, zs(a)), c.hAxis = d;
						b = b[Tc](2);
						if(!An(b)) a = c.vAxes || {}, d = a[0] || {}, xa(d, zs(b)), a[0] = d, c.vAxes = a
					}
				} else {
					for(var o = [new Pp, new Pp], r = b && b[rb]() || 0, w = 0; w < r; w++)
						if(b[Ub](w) == K) {
							var C = b[Tc](w);
							if(!An(C)) {
								var L;
								L = w;
								0 == L ? L = k : (L--, L = ((c.series || {})[L] || {}).targetAxisIndex ||
									0);
								Xm(L) || o[L].add(C)
							}
						}
					o[0] = As(o[0]);
					o[1] = As(o[1]);
					a == Nf ? xa(f, o[0]) : (xa(h, o[0]), xa(j, o[1]), 0 < r && b[Ub](0) != M && (C = b[Tc](0), C = zs(C), An(C) || xa(f, C)));
					d[0] = h;
					d[1] = j;
					c.vAxes = d;
					c.hAxis = f
				}
		};
		N.mh = function() {};
		N.getDataSourceUrl = function() {
			return this.He
		};
		N.getDataTable = function() {
			return this.h
		};
		N.Kh = function() {
			return this.fa
		};
		N.getName = function() {
			return this.og
		};
		N.Gf = function() {
			return this[E]
		};
		N.getContainerId = function() {
			return this.Ee
		};
		N.getQuery = function() {
			return this.Ra
		};
		N.getRefreshInterval = function() {
			return this.Gb
		};
		N.getOption = function(a, b) {
			return Ds(this.jb, a, b)
		};

		function Ds(a, b, c) {
			a = -1 == b[v](Ve) ? a[b] : Sm(b, a);
			c = Wm(c) ? c : k;
			return a = P(a) ? a : c
		}
		N.getOptions = function() {
			return this.jb
		};
		N.getState = function() {
			return this.Sa
		};
		N.setDataSourceUrl = function(a) {
			if(a != this.He) this.nl = k;
			this.He = a
		};
		N.setDataTable = function(a) {
			this.h = a == k ? k : bn(a[dc]) ? a : Q(a) ? google[E].arrayToDataTable(a) : new google[E].DataTable(a)
		};
		N.yf = function(a) {
			this.fa = a
		};
		N.Jf = function(a) {
			this.og = a
		};
		N.setContainerId = function(a) {
			if(this.Ee != a) this.Ee = a, this.hf()
		};
		N.setQuery = function(a) {
			this.Ra = a
		};
		N.setRefreshInterval = function(a) {
			this.Gb = a
		};
		N.setOption = function(a, b) {
			Es(this.jb, a, b)
		};

		function Es(a, b, c) {
			if(c == k) Xm(Ds(a, b)) || (c = b[Pc](Ve), 1 < c[B] && (b = c.pop(), a = Ds(a, c[Ld](Ve))), delete a[b]);
			else {
				b = b[Pc](Ve);
				a = a || O;
				!(b[0] in a) && a[Nd] && a[Nd](Am + b[0]);
				for(var d; b[B] && (d = b.shift());) !b[B] && Wm(c) ? a[d] = c : a = a[d] ? a[d] : a[d] = {}
			}
		}
		N.setOptions = function(a) {
			this.jb = a || {}
		};
		La(N, function(a) {
			this.Sa = a || {}
		});
		N.setPackages = function(a) {
			this.pg = a
		};
		N.setView = function(a) {
			this.Ob = a
		};
		N.hl = function(a) {
			Qa(this, a)
		};
		N.getSnapshot = function() {
			return new this[Rc](this.Eh(this.fh || this[tb]()))
		};
		N.getView = function() {
			return this.Ob
		};
		N.getPackages = function() {
			return this.pg
		};
		N.jf = function(a, b) {
			var c = b && b[Xc] || Ci,
				d = google[E][Gd][Gc](a, c);
			google[E][jb].trigger(this, Ci, {
				id: d,
				message: c
			})
		};
		N.Ek = function(a, b) {
			var c = b.getMessage(),
				d = b.getDetailedMessage(),
				f = google[E][Gd].addErrorFromQueryResponse(a, b);
			google[E][jb].trigger(this, Ci, {
				id: f,
				message: c,
				detailedMessage: d
			})
		};
		N.Sk = function() {
			var a = this[sd]();
			if(!P(a)) {
				var b = this.fa,
					b = b[u](Ij, J),
					a = Cs[b];
				P(a) || e(n("Invalid visualization type: " + b))
			}
			R(a) && (a = [a]);
			return a
		};
		N.yd = function(a, b) {
			var c = fs(this.fa);
			c || e(n("Invalid " + this.pd + " type: " + this.fa));
			var d, f = this.fa == dg;
			if(!this[E] || this[E][Rc] != c || f) {
				f || this.hf();
				d = new c(a);
				var h = this;
				co([sl, Gl, Ci, Xl], function(a) {
					google[E][jb].addListener(d, a, function(b) {
						a == sl && Qa(h, d);
						(a == sl || a == Xl) && bn(d[od]) && h[wc](d[od][G](d));
						google[E][jb].trigger(h, a, b)
					})
				})
			} else d = this[E];
			this.fh = b;
			c = xo(this[mb]());
			c = new Y({
				chartType: this.fa,
				dataTable: b,
				options: c,
				view: this[Cc]()
			});
			c.Yj();
			d[kd](c[tb](), c[mb](), this[od]())
		};
		N.pushView = function(a) {
			Q(this.Ob) ? this.Ob[s](a) : this.Ob = Xm(this.Ob) ? [a] : [this.Ob, a]
		};
		N.mk = function() {
			var d;
			var a = this[tb](),
				b = this[Cc]();
			if(b == vh) {
				b = this.fa;
				if(b == mg) {
					var c = this.getOption(Vh);
					if(c == ql || c == Cl) b = ng
				}
				if(d = (b = ys[b]) && b[Hb], b = d) a = (b = b.rk(a)) ? b[Rb]() : a
			} else if(Q(b))
				for(c = 0; c < b[B]; c++) a = google[E][md].fromJSON(a, b[c]);
			else P(b) && (a = google[E][md].fromJSON(a, b));
			this[Zc](k);
			this[hd](a)
		};
		N.uk = function(a, b) {
			if(b[Nb]()) this.Ek(a, b);
			else {
				var c = b[tb]();
				this.yd(a, c)
			}
		};
		N.Mj = function(a) {
			var a = {
					packages: this.Sk(),
					callback: a
				},
				b = Sm(Jj);
			Xm(b) && (b = mf);
			google.load(Em, b, a)
		};
		N.ah = function(a) {
			var b = this[tb]();
			b ? this.yd(a, b) : (b = jn(this.uk, this, a), b = google[E][Gd].createProtectedCallback(b, jn(this.jf, this, a)), this.sendQuery(b, i))
		};
		N.sendQuery = function(a, b) {
			var c = typeof b == Ch ? b : l,
				d = this[dd]() || J,
				d = new google[E].Query(d),
				f = this[nd]();
			f && c && d[fc](f);
			(c = this[yd]()) && d[$c](c);
			d[Jb](a)
		};
		N.lk = function() {
			var a = this.fa;
			if(!(Cs[a] != di || a == Mg)) {
				var a = this[tb](),
					b = this[mb]() || {},
					c = Ds(b, Kj);
				if(c != k) {
					for(var d = [{
							calc: c ? Zl : yi,
							sourceColumn: 0,
							type: M
						}], f = c ? 1 : 0, c = a[rb](); f < c; f++) d[s](f);
					a = new google[E][md](a);
					a[Md](d);
					Es(b, Kj, k);
					this[hd](a);
					this[Vc](b)
				}
			}
		};
		N.hf = function() {
			this[E] && bn(this[E].clearChart) && this[E].clearChart();
			Qa(this, k)
		};

		function Y(a) {
			Bs[G](this, Sh, a)
		}
		S(Y, Bs);
		N = Y[D];
		N.getChart = Bs[D].Gf;
		N.setChart = Bs[D].hl;
		N.setChartType = Bs[D].yf;
		N.getChartType = Bs[D].Kh;
		N.setChartName = Bs[D].Jf;
		N.getChartName = Bs[D][Kb];

		function Z(a) {
			Bs[G](this, bi, a)
		}
		S(Z, Bs);
		N = Z[D];
		N.getControl = Bs[D].Gf;
		N.setControlType = Bs[D].yf;
		N.getControlType = Bs[D].Kh;
		N.setControlName = Bs[D].Jf;
		N.getControlName = Bs[D][Kb];

		function $(a) {
			Bs[G](this, fi, a);
			a = a || {};
			R(a) && (a = xn(a));
			this.Ha = a.wrappers || k;
			this.nc = a.bindings || k;
			this.yf(a.dashboardType || Wf);
			this.wf()
		}
		S($, Bs);
		N = $[D];
		N.yd = function(a, b) {
			function c(a) {
				return h[a]
			}
			Tp(this[E]);
			for(var d = new google[E].Dashboard(a), f = this.nc || [], h = this.Ha, j = f[B], o = 0; o < j; o++) {
				var r = fo(f[o].controls, c),
					w = fo(f[o].participants, c);
				d[kc](r, w)
			}
			Qa(this, d);
			$.b.yd[G](this, a, b)
		};
		N.mh = function(a) {
			a.wrappers = this.Ha ? fo(this.Ha, function(a) {
				return a[Hc](k)
			}) : g;
			a.bindings = this.nc || g
		};
		N.setWrappers = function(a) {
			this.Ha = a || k;
			this.wf()
		};
		N.getWrappers = function() {
			return this.Ha
		};
		N.setBindings = function(a) {
			this.nc = a || k;
			this.wf()
		};
		N.getBindings = function() {
			return this.nc
		};
		N.getDashboard = Bs[D].Gf;
		N.setDashboardName = Bs[D].Jf;
		N.getDashboardName = Bs[D][Kb];
		N.wf = function() {
			var a = this.Ha,
				b = this.nc;
			if(!Fs(a) || !Fs(b)) this.Ha = fo(a, this.dk, this), this.nc = fo(b, this.ck, this)
		};
		N.dk = function(a) {
			this.oh(a) || (a = google[E].createWrapper(a));
			a[hd](k);
			a[Mc](k);
			return a
		};
		N.ck = function(a) {
			var b = a.controls,
				c = a.participants;
			(Fs(b) || Fs(c)) && e(n("invalid binding: " + a));
			b = fo(b, this.Ih, this);
			c = fo(c, this.Ih, this);
			return {
				controls: b,
				participants: c
			}
		};
		N.Ih = function(a) {
			!/[^0-9]/ [cb](a) && (a = fa(a, 10));
			if(an(a)) return a;
			var b = a;
			if(this.jk(a)) return this.oh(b) || (b = google[E].createWrapper(b)), this.Ha[s](b), this.Ha[B] - 1;
			a = this.ik();
			a = !An(b) ? bo(a, b) : -1; - 1 == a && e(n("Invalid wrapper name: " + b));
			return a
		};
		N.oh = function(a) {
			return bn(a[Hc])
		};
		N.jk = function(a) {
			var b = /${.*}^/;
			return $m(a) || R(a) && b[cb](a)
		};
		N.ik = function() {
			return fo(this.Ha, function(a) {
				return a[Kb]()
			})
		};

		function Fs(a) {
			return Q(a) ? 0 == a[B] : i
		};

		function Gs(a, b) {
			Hs(a)[kd](b)
		}

		function Hs(a) {
			a = a || {};
			R(a) && (a = xn(a));
			return a.controlType ? new google[E].ControlWrapper(a) : a.dashboardType ? new google[E].DashboardWrapper(a) : new google[E].ChartWrapper(a)
		};

		function Is(a) {
			for(var b = 0, c = 0; c < a[B]; c++) b += a[c];
			return b
		};

		function Js(a, b, c, d, f) {
			this.aa = !!b;
			a && this.qc(a, d);
			Ba(this, f != g ? f : this.ua || 0);
			this.aa && Ba(this, -1 * this[gc]);
			this.Hd = !c
		}
		S(Js, Kp);
		N = Js[D];
		N.sa = k;
		N.ua = 0;
		N.Oe = l;
		N.qc = function(a, b, c) {
			if(this.sa = a) this.ua = an(b) ? b : 1 != this.sa[ib] ? 0 : this.aa ? -1 : 1;
			an(c) && Ba(this, c)
		};
		N.ue = function(a) {
			this.sa = a.sa;
			this.ua = a.ua;
			Ba(this, a[gc]);
			this.aa = a.aa;
			this.Hd = a.Hd
		};
		Ra(N, function() {
			return new Js(this.sa, this.aa, !this.Hd, this.ua, this[gc])
		});
		N.Zj = function() {
			var a = this.aa ? 1 : -1;
			if(this.ua == a) this.ua = -1 * a, Ba(this, this[gc] + this.ua * (this.aa ? -1 : 1))
		};
		Pa(N, function() {
			var a;
			if(this.Oe) {
				(!this.sa || this.Hd && 0 == this[gc]) && e(Jp);
				a = this.sa;
				var b = this.aa ? -1 : 1;
				if(this.ua == b) {
					var c = this.aa ? a[fd] : a[Vb];
					c ? this.qc(c) : this.qc(a, -1 * b)
				} else(c = this.aa ? a.previousSibling : a[oc]) ? this.qc(c) : this.qc(a[Hd], -1 * b);
				Ba(this, this[gc] + this.ua * (this.aa ? -1 : 1))
			} else this.Oe = i;
			(a = this.sa) || e(Jp);
			return a
		});
		N.yj = function() {
			return 1 == this.ua
		};
		N.splice = function(a) {
			var b = this.sa;
			this.Zj();
			this.aa = !this.aa;
			Js[D].next[G](this);
			this.aa = !this.aa;
			for(var c = Ym(arguments[0]) ? arguments[0] : arguments, d = c[B] - 1; 0 <= d; d--) b[Hd] && b[Hd][vb](c[d], b[oc]);
			zp(b)
		};

		function Ks(a, b) {
			Js[G](this, a, b, i)
		}
		S(Ks, Js);

		function Ls(a, b, c, d, f) {
			var h;
			if(a) {
				this.I = a;
				this.N = b;
				this.C = c;
				this.M = d;
				if(1 == a[ib] && a[Cd] != Lf)
					if(a = a[hc], b = a[b]) this.I = b, this.N = 0;
					else {
						if(a[B]) this.I = a[a[B] - 1];
						h = i
					}
				if(1 == c[ib])(this.C = c[hc][d]) ? this.M = 0 : this.C = c
			}
			Ks[G](this, f ? this.C : this.I, f);
			if(h) try {
				this.next()
			} catch(j) {
				j != Jp && e(j)
			}
		}
		S(Ls, Ks);
		N = Ls[D];
		N.I = k;
		N.C = k;
		N.N = 0;
		N.M = 0;
		N.ma = function() {
			return this.I
		};
		N.La = function() {
			return this.C
		};
		N.oj = function() {
			return this.Oe && this.sa == this.C && (!this.M || !this.yj())
		};
		Pa(N, function() {
			this.oj() && e(Jp);
			return Ls.b.next[G](this)
		});
		N.ue = function(a) {
			this.I = a.I;
			this.C = a.C;
			this.N = a.N;
			this.M = a.M;
			this.bg = a.bg;
			Ls.b.ue[G](this, a)
		};
		Ra(N, function() {
			var a = new Ls(this.I, this.N, this.C, this.M, this.bg);
			a.ue(this);
			return a
		});
		"ScriptEngine" in O && "JScript" == O.ScriptEngine() && (O.ScriptEngineMajorVersion(), O.ScriptEngineMinorVersion(), O.ScriptEngineBuildVersion());

		function Ms() {}
		Ms[D].Bg = function(a, b) {
			var c = b && !a[Za](),
				d = a.q;
			try {
				return c ? 0 <= this.ka(d, 0, 1) && 0 >= this.ka(d, 1, 0) : 0 <= this.ka(d, 0, 0) && 0 >= this.ka(d, 1, 1)
			} catch(f) {
				return T || e(f), l
			}
		};
		Ms[D].Qd = function() {
			return new Ls(this.ma(), this.Ya(), this.La(), this.ob())
		};

		function Ns(a) {
			this.q = a
		}
		S(Ns, Ms);

		function Os(a) {
			var b = kp(a).createRange();
			if(3 == a[ib]) b[Bc](a, 0), b[yb](a, a[B]);
			else if(Ps(a)) {
				for(var c, d = a;
					(c = d[Vb]) && Ps(c);) d = c;
				b[Bc](d, 0);
				for(d = a;
					(c = d[fd]) && Ps(c);) d = c;
				b[yb](d, 1 == d[ib] ? d[hc][B] : d[B])
			} else c = a[Hd], a = bo(c[hc], a), b[Bc](c, a), b[yb](c, a + 1);
			return b
		}

		function Qs(a, b, c, d) {
			var f = kp(a).createRange();
			f[Bc](a, b);
			f[yb](c, d);
			return f
		}
		N = Ns[D];
		Ra(N, function() {
			return new this[Rc](this.q.cloneRange())
		});
		N.getContainer = function() {
			return this.q.commonAncestorContainer
		};
		N.ma = function() {
			return this.q.startContainer
		};
		N.Ya = function() {
			return this.q.startOffset
		};
		N.La = function() {
			return this.q.endContainer
		};
		N.ob = function() {
			return this.q.endOffset
		};
		N.ka = function(a, b, c) {
			return this.q.compareBoundaryPoints(1 == c ? 1 == b ? O.Range.START_TO_START : O.Range.START_TO_END : 1 == b ? O.Range.END_TO_START : O.Range.END_TO_END, a)
		};
		N.isCollapsed = function() {
			return this.q.collapsed
		};
		N.select = function(a) {
			this.Td(qp(kp(this.ma())).getSelection(), a)
		};
		N.Td = function(a) {
			a.removeAllRanges();
			a.addRange(this.q)
		};
		N.collapse = function(a) {
			this.q[gb](a)
		};

		function Rs(a) {
			this.q = a
		}
		S(Rs, Ns);
		Rs[D].Td = function(a, b) {
			var c = b ? this.La() : this.ma(),
				d = b ? this.ob() : this.Ya(),
				f = b ? this.ma() : this.La(),
				h = b ? this.Ya() : this.ob();
			a[gb](c, d);
			(c != f || d != h) && a.extend(f, h)
		};

		function Ss(a, b) {
			this.q = a;
			this.aj = b
		}
		S(Ss, Ms);

		function Ts(a) {
			var b = kp(a)[ad].createTextRange();
			if(1 == a[ib]) b.moveToElementText(a), Ps(a) && !a[hc][B] && b[gb](l);
			else {
				for(var c = 0, d = a; d = d.previousSibling;) {
					var f = d[ib];
					if(3 == f) c += d[B];
					else if(1 == f) {
						b.moveToElementText(d);
						break
					}
				}
				d || b.moveToElementText(a[Hd]);
				b[gb](!d);
				c && b.move(Rh, c);
				b.moveEnd(Rh, a[B])
			}
			return b
		}

		function Us(a, b, c, d) {
			var C;
			var f = a,
				h = b,
				j = c,
				o = d,
				r = l;
			1 == f[ib] && (h = f[hc][h], r = !h, f = h || f[fd] || f, h = 0);
			var w = Ts(f);
			h && w.move(Rh, h);
			if(f == j && h == o) w[gb](i);
			else r && w[gb](l), r = l, 1 == j[ib] && (C = (h = j[hc][o]) || j[fd] || j, j = C, o = 0, r = !h), f = Ts(j), f[gb](!r), o && f.moveEnd(Rh, o), w.setEndPoint(Zf, f);
			o = new Ss(w, kp(a));
			o.I = a;
			o.N = b;
			o.C = c;
			o.M = d;
			return o
		}
		N = Ss[D];
		N.Va = k;
		N.I = k;
		N.C = k;
		N.N = -1;
		N.M = -1;
		Ra(N, function() {
			var a = new Ss(this.q.duplicate(), this.aj);
			a.Va = this.Va;
			a.I = this.I;
			a.C = this.C;
			return a
		});
		N.getContainer = function() {
			if(!this.Va) {
				var a = this.q.text,
					b = this.q.duplicate(),
					c = a[u](/ +$/, J);
				(c = a[B] - c[B]) && b.moveEnd(Rh, -c);
				c = b.parentElement();
				b = b.htmlText[u](/(\r\n|\r|\n)+/g, Sd)[B];
				if(this[Za]() && 0 < b) return this.Va = c;
				for(; b > c.outerHTML[u](/(\r\n|\r|\n)+/g, Sd)[B];) c = c[Hd];
				for(; 1 == c[hc][B] && c.innerText == (3 == c[Vb][ib] ? c[Vb].nodeValue : c[Vb].innerText) && Ps(c[Vb]);) c = c[Vb];
				0 == a[B] && (c = this.Qg(c));
				this.Va = c
			}
			return this.Va
		};
		N.Qg = function(a) {
			for(var b = a[hc], c = 0, d = b[B]; c < d; c++) {
				var f = b[c];
				if(Ps(f)) {
					var h = Ts(f),
						j = h.htmlText != f.outerHTML;
					if(this[Za]() && j ? 0 <= this.ka(h, 1, 1) && 0 >= this.ka(h, 1, 0) : this.q.inRange(h)) return this.Qg(f)
				}
			}
			return a
		};
		N.ma = function() {
			if(!this.I && (this.I = this.Ec(1), this[Za]())) this.C = this.I;
			return this.I
		};
		N.Ya = function() {
			if(0 > this.N && (this.N = this.Sg(1), this[Za]())) this.M = this.N;
			return this.N
		};
		N.La = function() {
			if(this[Za]()) return this.ma();
			if(!this.C) this.C = this.Ec(0);
			return this.C
		};
		N.ob = function() {
			if(this[Za]()) return this.Ya();
			if(0 > this.M && (this.M = this.Sg(0), this[Za]())) this.N = this.M;
			return this.M
		};
		N.ka = function(a, b, c) {
			return this.q.compareEndPoints((1 == b ? Ng : Yf) + Ug + (1 == c ? Ng : Yf), a)
		};
		N.Ec = function(a, b) {
			var c = b || this.getContainer();
			if(!c || !c[Vb]) return c;
			for(var d = 1 == a, f = 0, h = c[hc][B]; f < h; f++) {
				var j = d ? f : h - f - 1,
					o = c[hc][j],
					r;
				try {
					r = Vs(o)
				} catch(w) {
					continue
				}
				var C = r.q;
				if(this[Za]())
					if(Ps(o)) {
						if(r.Bg(this)) return this.Ec(a, o)
					} else {
						if(0 == this.ka(C, 1, 1)) {
							this.N = this.M = j;
							break
						}
					}
				else {
					if(this.Bg(r)) {
						if(!Ps(o)) {
							d ? this.N = j : this.M = j + 1;
							break
						}
						return this.Ec(a, o)
					}
					if(0 > this.ka(C, 1, 0) && 0 < this.ka(C, 0, 1)) return this.Ec(a, o)
				}
			}
			return c
		};
		N.Aj = function(a, b, c) {
			return this.q.compareEndPoints((1 == b ? Ng : Yf) + Ug + (1 == c ? Ng : Yf), Vs(a).q)
		};
		N.Sg = function(a, b) {
			var c = 1 == a,
				d = b || (c ? this.ma() : this.La());
			if(1 == d[ib]) {
				for(var d = d[hc], f = d[B], h = c ? 1 : -1, j = c ? 0 : f - 1; 0 <= j && j < f; j += h) {
					var o = d[j];
					if(!Ps(o) && 0 == this.Aj(o, a, a)) return c ? j : j + 1
				}
				return -1 == j ? 0 : j
			}
			f = this.q.duplicate();
			h = Ts(d);
			f.setEndPoint(c ? Zf : Pg, h);
			f = f.text[B];
			return c ? d[B] - f : f
		};
		N.isCollapsed = function() {
			return 0 == this.q.compareEndPoints(Og, this.q)
		};
		N.select = function() {
			this.q.select()
		};
		N.collapse = function(a) {
			this.q[gb](a);
			a ? (this.C = this.I, this.M = this.N) : (this.I = this.C, this.N = this.M)
		};

		function Ws(a) {
			this.q = a
		}
		S(Ws, Ns);
		Ws[D].Td = function(a) {
			a[gb](this.ma(), this.Ya());
			(this.La() != this.ma() || this.ob() != this.Ya()) && a.extend(this.La(), this.ob());
			0 == a.rangeCount && a.addRange(this.q)
		};

		function Xs(a) {
			this.q = a
		}
		S(Xs, Ns);
		Xs[D].ka = function(a, b, c) {
			return $o(qf) ? Xs.b.ka[G](this, a, b, c) : this.q.compareBoundaryPoints(1 == c ? 1 == b ? O.Range.START_TO_START : O.Range.END_TO_START : 1 == b ? O.Range.START_TO_END : O.Range.END_TO_END, a)
		};
		Xs[D].Td = function(a, b) {
			a.removeAllRanges();
			b ? a.setBaseAndExtent(this.La(), this.ob(), this.ma(), this.Ya()) : a.setBaseAndExtent(this.ma(), this.Ya(), this.La(), this.ob())
		};

		function Vs(a) {
			if(T && !bp(9)) {
				var b = new Ss(Ts(a), kp(a));
				if(Ps(a)) {
					for(var c, d = a;
						(c = d[Vb]) && Ps(c);) d = c;
					b.I = d;
					b.N = 0;
					for(d = a;
						(c = d[fd]) && Ps(c);) d = c;
					b.C = d;
					b.M = 1 == d[ib] ? d[hc][B] : d[B];
					b.Va = a
				} else b.I = b.C = b.Va = a[Hd], b.N = bo(b.Va[hc], a), b.M = b.N + 1;
				a = b
			} else a = Mo ? new Xs(Os(a)) : Lo ? new Rs(Os(a)) : Ko ? new Ws(Os(a)) : new Ns(Os(a));
			return a
		}

		function Ps(a) {
			var b;
			a: if(1 != a[ib]) b = l;
				else {
					switch(a[Cd]) {
						case Gf:
						case Hf:
						case Jf:
						case Lf:
						case Pf:
						case bg:
						case gg:
						case jg:
						case kg:
						case ig:
						case lg:
						case sg:
						case zg:
						case Ag:
						case tg:
						case Dg:
						case Eg:
						case Jg:
						case Lg:
							b = l;
							break a
					}
					b = i
				}
			return b || 3 == a[ib]
		};

		function Ys(a, b) {
			a[$b](Bl, b);
			a.Il = b
		}

		function Zs(a, b, c) {
			a[$b](th + b, c)
		};

		function $s(a, b, c, d, f) {
			if(!T && (!Mo || !$o(pf))) return i;
			if(Fo && f) return at(a);
			if(f && !d) return l;
			if(!c && (17 == b || 18 == b)) return l;
			if(T && d && b == a) return l;
			switch(a) {
				case 13:
					return !(T && bp(9));
				case 27:
					return !Mo
			}
			return at(a)
		}

		function at(a) {
			if(48 <= a && 57 >= a) return i;
			if(96 <= a && 106 >= a) return i;
			if(65 <= a && 90 >= a) return i;
			if(Mo && 0 == a) return i;
			switch(a) {
				case 32:
				case 63:
				case 107:
				case 109:
				case 110:
				case 111:
				case 186:
				case 59:
				case 189:
				case 187:
				case 188:
				case 190:
				case 191:
				case 192:
				case 222:
				case 219:
				case 220:
				case 221:
					return i;
				default:
					return l
			}
		};

		function bt(a) {
			this.Pg = a;
			this.D = []
		}
		S(bt, Rp);
		var ct = [];
		N = bt[D];
		N.i = function(a, b, c, d, f) {
			Q(b) || (ct[0] = b, b = ct);
			for(var h = 0; h < b[B]; h++) this.D[s](hq(a, b[h], c || this, d || l, f || this.Pg || this));
			return this
		};
		N.X = function(a, b, c, d, f) {
			if(Q(b))
				for(var h = 0; h < b[B]; h++) this.X(a, b[h], c, d, f);
			else {
				a: {
					c = c || this;f = f || this.Pg || this;d = !!d;
					if(a = lq(a, b, d))
						for(b = 0; b < a[B]; b++)
							if(!a[b].Ib && a[b].kc == c && a[b][zb] == d && a[b].td == f) {
								a = a[b];
								break a
							}
					a = k
				}
				if(a) a = a.key,
				mq(a),
				io(this.D, a)
			}
			return this
		};
		N.removeAll = function() {
			co(this.D, mq);
			Ma(this.D, 0)
		};
		N.k = function() {
			bt.b.k[G](this);
			this[id]()
		};
		za(N, function() {
			e(n("EventHandler.handleEvent not implemented"))
		});

		function dt(a, b, c) {
			Sa(this, a);
			this.handle = b || a;
			this.lf = c || new Ir(NaN, NaN, NaN, NaN);
			this.o = kp(a);
			this.Ca = new bt(this);
			hq(this.handle, [om, Gk], this.ag, l, this)
		}
		S(dt, sq);
		var et = T || Lo && $o("1.9.3");
		N = dt[D];
		Ha(N, 0);
		Ia(N, 0);
		va(N, 0);
		wa(N, 0);
		N.sg = 0;
		N.tg = 0;
		N.ic = 0;
		N.jc = 0;
		N.vb = i;
		N.kb = l;
		N.qg = 0;
		N.Ji = 0;
		N.Ui = l;
		N.P = function() {
			return this.Ca
		};
		N.ig = function(a) {
			this.lf = a || new Ir(NaN, NaN, NaN, NaN)
		};
		N.k = function() {
			dt.b.k[G](this);
			kq(this.handle, [om, Gk], this.ag, l, this);
			this.Ca.Q();
			delete this[ed];
			delete this.handle;
			delete this.Ca
		};
		N.ag = function(a) {
			var b = a[z] == Gk;
			if(this.vb && !this.kb && (!b || a.ne())) {
				this.Be(a);
				if(0 == this.qg)
					if(this.rg(a), this.kb) a[ub]();
					else return;
				else a[ub]();
				this.Ki();
				Ha(this, this.sg = a[sc]);
				Ia(this, this.tg = a[tc]);
				va(this, a[Eb]);
				wa(this, a[Fb]);
				this.ic = this[ed].offsetLeft;
				this.jc = this[ed][Jd];
				this.Ie = ip(this.o).ac();
				this.Ji = ln()
			} else this[x](xi)
		};
		N.Ki = function() {
			var a = this.o,
				b = a[uc],
				c = !et;
			this.Ca.i(a, [nm, Hk], this.Ti, c);
			this.Ca.i(a, [mm, Kk], this.sd, c);
			et ? (b.setCapture(l), this.Ca.i(b, vk, this.sd)) : this.Ca.i(qp(a), Ah, this.sd);
			T && this.Ui && this.Ca.i(a, vi, Zp);
			this.Wi && this.Ca.i(this.Wi, Fl, this.Vi, c)
		};
		N.rg = function(a) {
			if(this[x](new ft(Wl, this, a[sc], a[tc], a)) !== l) this.kb = i
		};
		N.sd = function(a, b) {
			this.Ca[id]();
			et && this.o.releaseCapture();
			var c = this.zg(this.ic),
				d = this.Ag(this.jc);
			if(this.kb) this.Be(a), this.kb = l, this[x](new ft(Ai, this, a[sc], a[tc], a, c, d, b || a[z] == lm));
			else this[x](xi);
			(a[z] == mm || a[z] == lm) && a[ub]()
		};
		N.Be = function(a) {
			var b = a[z];
			b == om || b == nm ? a.Pb(a.Y[wb][0], a[Cb]) : (b == mm || b == lm) && a.Pb(a.Y.changedTouches[0], a[Cb])
		};
		N.Ti = function(a) {
			if(this.vb) {
				this.Be(a);
				var b = a[sc] - this[sc],
					c = a[tc] - this[tc];
				Ha(this, a[sc]);
				Ia(this, a[tc]);
				va(this, a[Eb]);
				wa(this, a[Fb]);
				if(!this.kb) {
					var d = this.sg - this[sc],
						f = this.tg - this[tc];
					if(d * d + f * f > this.qg && (this.rg(a), !this.kb)) {
						this.sd(a);
						return
					}
				}
				c = this.Tg(b, c);
				b = c.x;
				c = c.y;
				this.kb && this[x](new ft(wh, this, a[sc], a[tc], a, b, c)) !== l && (this.Ug(a, b, c, l), a[ub]())
			}
		};
		N.Tg = function(a, b) {
			var c = ip(this.o).ac(),
				a = a + (c.x - this.Ie.x),
				b = b + (c.y - this.Ie.y);
			this.Ie = c;
			this.ic += a;
			this.jc += b;
			var c = this.zg(this.ic),
				d = this.Ag(this.jc);
			return new Ln(c, d)
		};
		N.Vi = function(a) {
			var b = this.Tg(0, 0);
			Ha(a, this[sc]);
			Ia(a, this[tc]);
			this.Ug(a, b.x, b.y, i)
		};
		N.Ug = function(a, b, c) {
			this.Tk(b, c);
			this[x](new ft(ui, this, a[sc], a[tc], a, b, c))
		};
		N.zg = function(a) {
			var b = this.lf,
				c = !la(b[y]) ? b[y] : k,
				b = !la(b[t]) ? b[t] : 0;
			return q.min(c != k ? c + b : ea, q.max(c != k ? c : -ea, a))
		};
		N.Ag = function(a) {
			var b = this.lf,
				c = !la(b.top) ? b.top : k,
				b = !la(b[I]) ? b[I] : 0;
			return q.min(c != k ? c + b : ea, q.max(c != k ? c : -ea, a))
		};
		N.Tk = function(a, b) {
			ua(this[ed][F], a + pl);
			this[ed][F].top = b + pl
		};

		function ft(a, b, c, d, f, h, j, o) {
			Yp[G](this, a);
			Ha(this, c);
			Ia(this, d);
			this.kl = f;
			ua(this, Wm(h) ? h : b.ic);
			this.top = Wm(j) ? j : b.jc;
			this.ml = b;
			this.ll = !!o
		}
		S(ft, Yp);

		function gt(a) {
			this.j = a;
			a = T ? Ji : Ah;
			this.ni = hq(this.j, T ? Ii : Hi, this, !T);
			this.oi = hq(this.j, a, this, !T)
		}
		S(gt, sq);
		za(gt[D], function(a) {
			var b = new $p(a.Y);
			Ca(b, a[z] == Ii || a[z] == Hi ? Ii : Ji);
			try {
				this[x](b)
			} finally {
				b.Q()
			}
		});
		gt[D].k = function() {
			gt.b.k[G](this);
			mq(this.ni);
			mq(this.oi);
			delete this.j
		};

		function ht() {}
		Um(ht);
		ht[D].$k = 0;
		ht[D].zk = function() {
			return uf + (this.$k++)[yc](36)
		};
		ht.qa();

		function it(a) {
			this.fb = a || ip();
			this.Hc = jt
		}
		S(it, sq);
		it[D].Ak = ht.qa();
		var jt = k;

		function kt(a, b) {
			switch(a) {
				case 1:
					return b ? pi : zi;
				case 2:
					return b ? Qj : vm;
				case 4:
					return b ? nh : ji;
				case 8:
					return b ? Gl : wm;
				case 16:
					return b ? Th : um;
				case 32:
					return b ? Hi : Ah;
				case 64:
					return b ? Xk : Yh
			}
			e(n("Invalid component state"))
		}
		N = it[D];
		N.Ad = k;
		N.r = l;
		N.j = k;
		N.Hc = k;
		N.je = k;
		N.Aa = k;
		N.U = k;
		N.Na = k;
		N.Yh = l;
		N.Vb = function() {
			return this.Ad || (this.Ad = this.Ak.zk())
		};
		N.a = function() {
			return this.j
		};
		N.dg = function(a) {
			this.j = a
		};
		N.P = function() {
			return this.bc || (this.bc = new bt(this))
		};
		N.$d = function(a) {
			this == a && e(n(Wg));
			a && this.Aa && this.Ad && this.Aa.ce(this.Ad) && this.Aa != a && e(n(Wg));
			this.Aa = a;
			it.b.Qe[G](this, a)
		};
		N.getParent = function() {
			return this.Aa
		};
		N.Qe = function(a) {
			this.Aa && this.Aa != a && e(n("Method not supported"));
			it.b.Qe[G](this, a)
		};
		N.t = function() {
			return this.fb
		};
		N.d = function() {
			this.j = this.fb[Pb](ti)
		};
		N.ub = function(a) {
			this.Sf(a)
		};
		N.Sf = function(a, b) {
			this.r && e(n(Tf));
			this.j || this.d();
			a ? a[vb](this.j, b || k) : this.fb.o[ad][Ya](this.j);
			(!this.Aa || this.Aa.r) && this.K()
		};
		N.K = function() {
			this.r = i;
			this.rb(function(a) {
				!a.r && a.a() && a.K()
			})
		};
		N.ba = function() {
			this.rb(function(a) {
				a.r && a.ba()
			});
			this.bc && this.bc[id]();
			this.r = l
		};
		N.k = function() {
			it.b.k[G](this);
			this.r && this.ba();
			this.bc && (this.bc.Q(), delete this.bc);
			this.rb(function(a) {
				a.Q()
			});
			!this.Yh && this.j && zp(this.j);
			this.Aa = this.je = this.j = this.Na = this.U = k
		};
		N.fl = function(a) {
			this.je = a
		};
		N.Dd = function(a, b) {
			this.Cc(a, this.ab(), b)
		};
		N.Cc = function(a, b, c) {
			a.r && (c || !this.r) && e(n(Tf));
			(0 > b || b > this.ab()) && e(n("Child component index out of bounds"));
			if(!this.Na || !this.U) this.Na = {}, this.U = [];
			if(a[ab]() == this) this.Na[a.Vb()] = a, io(this.U, a);
			else {
				var d = this.Na,
					f = a.Vb();
				f in d && e(n('The object already contains the key "' + f + Xd));
				d[f] = a
			}
			a.$d(this);
			mo(this.U, b, 0, a);
			a.r && this.r && a[ab]() == this ? (c = this.S(), c[vb](a.a(), c[hc][b] || k)) : c ? (this.j || this.d(), b = this.bb(b + 1), a.Sf(this.S(), b ? b.j : k)) : this.r && !a.r && a.j && a.K()
		};
		N.S = function() {
			return this.j
		};
		N.le = function() {
			if(this.Hc == k) this.Hc = Sr(this.r ? this.j : this.fb.o[ad]);
			return this.Hc
		};
		N.dc = function(a) {
			this.r && e(n(Tf));
			this.Hc = a
		};
		N.Pk = function() {
			return !!this.U && 0 != this.U[B]
		};
		N.ab = function() {
			return this.U ? this.U[B] : 0
		};
		N.ce = function(a) {
			return this.Na && a ? (a in this.Na ? this.Na[a] : g) || k : k
		};
		N.bb = function(a) {
			return this.U ? this.U[a] || k : k
		};
		N.rb = function(a, b) {
			this.U && co(this.U, a, b)
		};
		N.Vc = function(a) {
			return this.U && a ? bo(this.U, a) : -1
		};
		N.removeChild = function(a, b) {
			if(a) {
				var c = R(a) ? a : a.Vb(),
					a = this.ce(c);
				c && a && (vo(this.Na, c), io(this.U, a), b && (a.ba(), a.j && zp(a.j)), a.$d(k))
			}
			a || e(n("Child is not in parent component"));
			return a
		};
		N.Qk = function(a, b) {
			return this[bd](this.bb(a), b)
		};
		N.vg = function(a) {
			for(; this.Pk();) this.Qk(0, a)
		};

		function lt(a, b) {
			it[G](this, b);
			this.pi = !!a
		}
		S(lt, it);
		N = lt[D];
		N.ae = k;
		N.n = l;
		N.ca = k;
		N.V = k;
		N.ya = k;
		N.A = function() {
			return xj
		};
		N.Yc = function() {
			return this.ca
		};
		N.d = function() {
			lt.b.d[G](this);
			var a = this.a();
			gp(a, this.A());
			Gp(a, i);
			Yr(a, l);
			this.ei();
			this.di()
		};
		N.ei = function() {
			if(this.pi && !this.V) this.V = this.t().d(bk, {
				frameborder: 0,
				style: Eh,
				src: ik
			}), Oa(this.V, this.A() + xe), Yr(this.V, l), Xr(this.V, 0);
			if(!this.ca) this.ca = this.t().d(ti, this.A() + xe), Yr(this.ca, l)
		};
		N.di = function() {
			if(!this.ya) this.ya = this.t()[Pb](Ul), Yr(this.ya, l), Gp(this.ya, i), this.ya[F].position = lh
		};
		N.Xh = function() {
			this.V && yp(this.V, this.a());
			yp(this.ca, this.a())
		};
		N.K = function() {
			this.Xh();
			lt.b.K[G](this);
			var a = this.a();
			a[Hd] && a[Hd][vb](this.ya, a[oc]);
			this.ae = new gt(this.t().o);
			this.P().i(this.ae, Ii, this.Wh)
		};
		N.ba = function() {
			this.n && this.F(l);
			Tp(this.ae);
			lt.b.ba[G](this);
			zp(this.V);
			zp(this.ca);
			zp(this.ya)
		};
		N.F = function(a) {
			a != this.n && (a ? this.Vj() : this.Uj())
		};
		N.Vj = function() {
			if(this[x](yh)) this.ye(), this.vc(), this.P().i(this.t().ed(), yl, this.ye), this.hg(i), this[Ob](), this.n = i, this[x](Ql)
		};
		N.Uj = function() {
			if(this[x](xh)) this.P().X(this.t().ed(), yl, this.ye), this.hg(l), this.n = l, this[x](Pj)
		};
		N.hg = function(a) {
			this.V && Yr(this.V, a);
			this.ca && Yr(this.ca, a);
			Yr(this.a(), a);
			Yr(this.ya, a)
		};
		N.focus = function() {
			this.th()
		};
		N.ye = function() {
			this.V && Yr(this.V, l);
			this.ca && Yr(this.ca, l);
			var a = this.t().o,
				b = op(qp(a) || ba || ba),
				c = q.max(a[ad].scrollWidth, b[t]),
				a = q.max(a[ad][Sb], b[I]);
			this.V && (Yr(this.V, i), Tr(this.V, c, a));
			this.ca && (Yr(this.ca, i), Tr(this.ca, c, a))
		};
		N.vc = function() {
			var a = this.t().o,
				b = qp(a) || ba;
			if(Lr(this.a()) == Gi) var c = a = 0;
			else c = this.t().ac(), a = c.x, c = c.y;
			var d = Ur(this.a()),
				b = op(b || ba),
				a = q.max(a + b[t] / 2 - d[t] / 2, 0),
				c = q.max(c + b[I] / 2 - d[I] / 2, 0);
			Mr(this.a(), a, c);
			Mr(this.ya, a, c)
		};
		N.Wh = function(a) {
			if(a[ed] == this.ya) a = this.th, bn(a) ? this && (a = jn(a, this)) : a && typeof a[bc] == Mi ? a = jn(a[bc], a) : e(n(pg)), uq[Lc](a, 0)
		};
		N.th = function() {
			try {
				T && this.t().o[ad][Ob](), this.a()[Ob]()
			} catch(a) {}
		};

		function mt(a, b, c) {
			lt[G](this, b, c);
			this.za = a || Ek;
			this.cb = nt()
		}
		S(mt, lt);
		N = mt[D];
		N.xi = i;
		N.Mf = i;
		N.Nf = i;
		N.$h = i;
		N.be = 0.5;
		N.Vh = J;
		N.na = J;
		N.ib = k;
		N.fi = l;
		N.Zb = k;
		N.Pc = k;
		N.Pf = k;
		N.Oc = k;
		N.tc = k;
		N.Ma = k;
		N.A = function() {
			return this.za
		};
		Fa(N, function(a) {
			this.na = a;
			this.tc && qa(this.tc, a)
		});
		N.zd = function() {
			this.a() || this.ub()
		};
		N.S = function() {
			this.zd();
			return this.tc
		};
		N.$i = function() {
			this.zd();
			return this.Pc
		};
		N.Zi = function() {
			this.zd();
			return this.Ma
		};
		N.Yc = function() {
			this.zd();
			return mt.b.Yc[G](this)
		};
		N.Uh = function(a) {
			this.be = a;
			this.a() && (a = this.Yc()) && Xr(a, this.be)
		};
		N.bi = function(a) {
			this.Nf = a;
			if(this.r) {
				var b = this.t(),
					c = this.Yc(),
					d = this.V;
				a ? (d && b.se(d, this.a()), b.se(c, this.a())) : (b.removeNode(d), b.removeNode(c))
			}
		};
		N.qi = function() {
			return new dt(this.a(), this.Zb)
		};
		N.Qf = function(a) {
			if(this.a()) {
				var b = this.Zb,
					c = this.za + Se;
				a ? gp(b, c) : hp(b, c)
			}
			if(a && !this.ib) this.ib = this.qi(), gp(this.Zb, this.za + Se), hq(this.ib, Wl, this.ri, l, this);
			else if(!a && this.ib) this.ib.Q(), this.ib = k
		};
		N.d = function() {
			mt.b.d[G](this);
			var a = this.a(),
				b = this.t();
			this.Zb = b.d(ti, {
				className: this.za + Qe,
				id: this.Vb()
			}, this.Pc = b.d(Ul, this.za + Te, this.Vh), this.Oc = b.d(Ul, this.za + Re));
			wp(a, this.Zb, this.tc = b.d(ti, this.za + Ce), this.Ma = b.d(ti, this.za + ye));
			this.Pf = this.Zb.id;
			Ys(a, mi);
			Zs(a, qk, this.Pf || J);
			this.na && qa(this.tc, this.na);
			Yr(this.Oc, this.Mf);
			this.cb && this.cb.Th(this.Ma);
			Yr(this.Ma, !!this.cb);
			this.Uh(this.be)
		};
		N.K = function() {
			mt.b.K[G](this);
			this.P().i(this, [Ql, Pj], this.ci);
			this.Qf(this.$h);
			this.P().i(this.Oc, Xh, this.ai);
			Ys(this.a(), mi);
			this.Pc.id !== J && Zs(this.a(), qk, this.Pc.id);
			this.Nf || this.bi(l)
		};
		N.ba = function() {
			this.n && this.F(l);
			this.Qf(l);
			mt.b.ba[G](this)
		};
		N.F = function(a) {
			a != this.n && (this.r || this.ub(), mt.b.F[G](this, a))
		};
		N.ci = function(a) {
			a[ed] == this && (this.n ? (this.P().i(this.a(), mk, this.cd).i(this.a(), ok, this.cd), this[x](qh), this.P().i(this.Ma, Xh, this.Xf)) : (this.P().X(this.a(), mk, this.cd).X(this.a(), ok, this.cd).X(this.Ma, Xh, this.Xf), this[x](ph), this.fi && this.Q()))
		};
		N.focus = function() {
			mt.b[Ob][G](this);
			if(this.cb) {
				var a = this.cb.Sc;
				if(a)
					for(var b = this.t().o, c = this.Ma[rc](Oh), d = 0, f; f = c[d]; d++)
						if(f[nc] == a) {
							try {
								if(Mo || Ko) {
									var h = b[Pb](gk);
									h[F].cssText = ll;
									this.a()[Ya](h);
									h[Ob]();
									this.a()[bd](h)
								}
								f[Ob]()
							} catch(j) {}
							break
						}
			}
		};
		N.ri = function() {
			var a = this.t().o,
				b = op(qp(a) || ba || ba),
				c = q.max(a[ad].scrollWidth, b[t]),
				a = q.max(a[ad][Sb], b[I]),
				d = Ur(this.a());
			Lr(this.a()) == Gi ? this.ib.ig(new Ir(0, 0, q.max(0, b[t] - d[t]), q.max(0, b[I] - d[I]))) : this.ib.ig(new Ir(0, 0, c - d[t], a - d[I]))
		};
		N.ai = function() {
			if(this.Mf) {
				var a = this.cb,
					b = a && a.De;
				b ? (a = a.get(b), this[x](new ot(b, a)) && this.F(l)) : this.F(l)
			}
		};
		N.k = function() {
			this.Ma = this.Oc = k;
			mt.b.k[G](this)
		};
		N.Xf = function(a) {
			if((a = this.Wj(a[ed])) && !a[Wc]) {
				var a = a[nc],
					b = this.cb.get(a);
				this[x](new ot(a, b)) && this.F(l)
			}
		};
		N.Wj = function(a) {
			for(; a != k && a != this.Ma;) {
				if(a[Cd] == Mf) return a;
				a = a[Hd]
			}
			return k
		};
		N.cd = function(a) {
			var b = l,
				c = l,
				d = this.cb,
				f = a[ed];
			if(a[z] == mk)
				if(this.xi && 27 == a[Tb]) {
					var h = d && d.De,
						f = f[Cd] == Kg && !f[Wc];
					h && !f ? (c = i, b = d.get(h), b = this[x](new ot(h, b))) : f || (b = i)
				} else 9 == a[Tb] && a[Bd] && f == this.a() && (c = i);
			else if(13 == a[Tb]) {
				if(f[Cd] == Mf) h = f[nc];
				else if(d) {
					var j = d.Sc,
						o = j && d.yi(j),
						f = (f[Cd] == Rg || f[Cd] == Kg) && !f[Wc];
					o && !o[Wc] && !f && (h = j)
				}
				h && d && (c = i, b = this[x](new ot(h, J + d.get(h))))
			}
			if(b || c) a[Sc](), a[ub]();
			b && this.F(l)
		};

		function ot(a, b) {
			Ca(this, ni);
			this.key = a;
			this.caption = b
		}
		S(ot, Yp);

		function pt(a) {
			this.fb = a || ip();
			Np[G](this)
		}
		S(pt, Np);
		N = pt[D];
		N.za = "goog-buttonset";
		N.Sc = k;
		N.j = k;
		N.De = k;
		N.set = function(a, b, c, d) {
			Np[D].set[G](this, a, b);
			if(c) this.Sc = a;
			if(d) this.De = a;
			return this
		};
		N.va = function(a, b, c) {
			return this.set(a.key, a.caption, b, c)
		};
		N.Th = function(a) {
			this.j = a;
			this.ub()
		};
		N.ub = function() {
			if(this.j) {
				qa(this.j, J);
				var a = ip(this.j);
				Mp(this, function(b, c) {
					var d = a.d(Oh, {
						name: c
					}, b);
					c == this.Sc && Oa(d, this.za + De);
					this.j[Ya](d)
				}, this)
			}
		};
		N.a = function() {
			return this.j
		};
		N.t = function() {
			return this.fb
		};
		N.yi = function(a) {
			for(var b = this.Vk(), c = 0, d; d = b[c]; c++)
				if(d[nc] == a || d.id == a) return d;
			return k
		};
		N.Vk = function() {
			return this.j[rc](Mf)
		};
		var qt = {
				key: "ok",
				caption: "OK"
			},
			rt = {
				key: "cancel",
				caption: "Cancel"
			},
			st = {
				key: "yes",
				caption: "Yes"
			},
			tt = {
				key: "no",
				caption: "No"
			},
			ut = {
				key: "save",
				caption: "Save"
			},
			vt = {
				key: "continue",
				caption: "Continue"
			};

		function nt() {
			return(new pt).va(qt, i).va(rt, l, i)
		}
		"undefined" != typeof ja && ((new pt).va(qt, i, i), nt(), (new pt).va(st, i).va(tt, l, i), (new pt).va(st).va(tt, i).va(rt, l, i), (new pt).va(vt).va(ut).va(rt, i, i));

		function wt(a, b) {
			a && this.Tf(a, b)
		}
		S(wt, sq);
		N = wt[D];
		N.j = k;
		N.Fd = k;
		N.cf = k;
		N.Gd = k;
		N.mb = -1;
		N.lb = -1;
		var xt = {
				3: 13,
				12: 144,
				63232: 38,
				63233: 40,
				63234: 37,
				63235: 39,
				63236: 112,
				63237: 113,
				63238: 114,
				63239: 115,
				63240: 116,
				63241: 117,
				63242: 118,
				63243: 119,
				63244: 120,
				63245: 121,
				63246: 122,
				63247: 123,
				63248: 44,
				63272: 46,
				63273: 36,
				63275: 35,
				63276: 33,
				63277: 34,
				63289: 144,
				63302: 45
			},
			yt = {
				Up: 38,
				Down: 40,
				Left: 37,
				Right: 39,
				Enter: 13,
				F1: 112,
				F2: 113,
				F3: 114,
				F4: 115,
				F5: 116,
				F6: 117,
				F7: 118,
				F8: 119,
				F9: 120,
				F10: 121,
				F11: 122,
				F12: 123,
				"U+007F": 46,
				Home: 36,
				End: 35,
				PageUp: 33,
				PageDown: 34,
				Insert: 45
			},
			zt = {
				61: 187,
				59: 186
			},
			At = T || Mo && $o(pf);
		N = wt[D];
		N.Bj = function(a) {
			if(Mo && (17 == this.mb && !a[Oc] || 18 == this.mb && !a[zc])) this.lb = this.mb = -1;
			At && !$s(a[Tb], this.mb, a[Bd], a[Oc], a[zc]) ? this[bc](a) : this.lb = Lo && a[Tb] in zt ? zt[a[Tb]] : a[Tb]
		};
		N.Cj = function() {
			this.lb = this.mb = -1
		};
		za(N, function(a) {
			var b = a.Y,
				c, d;
			T && a[z] == ok ? (c = this.lb, d = 13 != c && 27 != c ? b[Tb] : 0) : Mo && a[z] == ok ? (c = this.lb, d = 0 <= b[Lb] && 63232 > b[Lb] && at(c) ? b[Lb] : 0) : Ko ? (c = this.lb, d = at(c) ? b[Tb] : 0) : (c = b[Tb] || this.lb, d = b[Lb] || 0, Fo && 63 == d && !c && (c = 191));
			var f = c,
				h = b.keyIdentifier;
			c ? 63232 <= c && c in xt ? f = xt[c] : 25 == c && a[Bd] && (f = 9) : h && h in yt && (f = yt[h]);
			a = f == this.mb;
			this.mb = f;
			b = new Bt(f, d, a, b);
			try {
				this[x](b)
			} finally {
				b.Q()
			}
		});
		N.a = function() {
			return this.j
		};
		N.Tf = function(a, b) {
			this.Gd && this.detach();
			this.j = a;
			this.Fd = hq(this.j, ok, this, b);
			this.cf = hq(this.j, mk, this.Bj, b, this);
			this.Gd = hq(this.j, pk, this.Cj, b, this)
		};
		N.detach = function() {
			if(this.Fd) mq(this.Fd), mq(this.cf), mq(this.Gd), this.Gd = this.cf = this.Fd = k;
			this.j = k;
			this.lb = this.mb = -1
		};
		N.k = function() {
			wt.b.k[G](this);
			this.detach()
		};

		function Bt(a, b, c, d) {
			d && this.Pb(d, g);
			Ca(this, lk);
			ya(this, a);
			this.charCode = b;
			this.repeat = c
		}
		S(Bt, $p);

		function Ct() {}
		var Dt;
		Um(Ct);
		N = Ct[D];
		N.nb = function() {};
		N.d = function(a) {
			var b = a.t().d(ti, this.hc(a)[Ld](Sd), a.na);
			this.Je(a, b);
			return b
		};
		N.S = function(a) {
			return a
		};
		N.xd = function(a, b, c) {
			if(a = a.a ? a.a() : a)
				if(T && !$o(sf)) {
					var d = this.kg(fp(a), b);
					d[s](b);
					kn(c ? gp : hp, a)[Ad](k, d)
				} else c ? gp(a, b) : hp(a, b)
		};
		N.Xg = function(a, b, c) {
			this.xd(a, b, c)
		};
		N.Wb = function(a) {
			a.le() && this.dc(a.a(), i);
			a[gd]() && this.Ab(a, a.n)
		};
		N.li = function(a, b) {
			var c = b || this.nb();
			c && Ys(a, c)
		};
		N.Je = function(a, b) {
			a[gd]() || this.da(b, 1, i);
			a.Wg() && this.da(b, 8, i);
			a.T(16) && this.da(b, 16, a.ke());
			a.T(64) && this.da(b, 64, a.cc())
		};
		N.$c = function(a, b) {
			$r(a, !b, !T && !Ko)
		};
		N.dc = function(a, b) {
			this.xd(a, this.oc() + Ne, b)
		};
		N.sb = function(a) {
			var b;
			return a.T(32) && (b = a.R()) ? Fp(b) : l
		};
		N.Ab = function(a, b) {
			var c;
			if(a.T(32) && (c = a.R())) {
				if(!b && a.Yg()) {
					try {
						c.blur()
					} catch(d) {}
					a.Yg() && a.yb(k)
				}
				Fp(c) != b && Gp(c, b)
			}
		};
		N.F = function(a, b) {
			Yr(a, b)
		};
		La(N, function(a, b, c) {
			var d = a.a();
			if(d) {
				var f = this.kd(b);
				f && this.xd(a, f, c);
				this.da(d, b, c)
			}
		});
		N.da = function(a, b, c) {
			Dt || (Dt = {
				1: qi,
				8: Hl,
				16: Uh,
				64: Di
			});
			(b = Dt[b]) && Zs(a, b, c)
		};
		Fa(N, function(a, b) {
			var c = this.S(a);
			if(c && (xp(c), b))
				if(R(b)) Bp(c, b);
				else {
					var d = function(a) {
						if(a) {
							var b = kp(c);
							c[Ya](R(a) ? b[qb](a) : a)
						}
					};
					Q(b) ? co(b, d) : Ym(b) && !(Pk in b) ? co(ko(b), d) : d(b)
				}
		});
		N.R = function(a) {
			return a.a()
		};
		N.A = function() {
			return nj
		};
		N.oc = function() {
			return this.A()
		};
		N.hc = function(a) {
			var b = this.A(),
				c = [b],
				d = this.oc();
			d != b && c[s](d);
			b = this.Fj(a[od]());
			c[s][Ad](c, b);
			(a = a.Ea) && c[s][Ad](c, a);
			T && !$o(sf) && c[s][Ad](c, this.kg(c));
			return c
		};
		N.kg = function(a, b) {
			var c = [];
			b && (a = a[ob]([b]));
			co([], function(d) {
				go(d, kn(ho, a)) && (!b || ho(d, b)) && c[s](d[Ld](hh))
			});
			return c
		};
		N.Fj = function(a) {
			for(var b = []; a;) {
				var c = a & -a;
				b[s](this.kd(c));
				a &= ~c
			}
			return b
		};
		N.kd = function(a) {
			this.uh || this.Hk();
			return this.uh[a]
		};
		N.Hk = function() {
			var a = this.oc();
			this.uh = {
				1: a + Ee,
				2: a + Je,
				4: a + we,
				8: a + Pe,
				16: a + Be,
				32: a + Ge,
				64: a + Le
			}
		};

		function Et(a, b) {
			a || e(n("Invalid class name " + a));
			bn(b) || e(n("Invalid decorator function " + b))
		}
		var Ft = {};

		function Gt(a, b, c) {
			it[G](this, c);
			if(!b) {
				for(var b = this[Rc], d; b;) {
					d = cn(b);
					if(d = Ft[d]) break;
					b = b.b ? b.b[Rc] : k
				}
				b = d ? bn(d.qa) ? d.qa() : new d : k
			}
			this.l = b;
			this.Zf(a)
		}
		S(Gt, it);
		N = Gt[D];
		N.na = k;
		N.Sa = 0;
		N.uc = 39;
		N.Sd = 255;
		N.Ld = 0;
		N.n = i;
		N.Ea = k;
		N.de = i;
		N.ee = l;
		N.fg = k;
		N.ie = function(a) {
			this.r && a != this.de && this.Rf(a);
			this.de = a
		};
		N.R = function() {
			return this.l.R(this)
		};
		N.Wc = function() {
			return this.ia || (this.ia = new wt)
		};
		N.Mk = function(a) {
			if(a) this.Ea ? ho(this.Ea, a) || this.Ea[s](a) : this.Ea = [a], this.l.Xg(this, a, i)
		};
		N.Rk = function(a) {
			if(a && this.Ea) {
				io(this.Ea, a);
				if(0 == this.Ea[B]) this.Ea = k;
				this.l.Xg(this, a, l)
			}
		};
		N.xd = function(a, b) {
			b ? this.Mk(a) : this.Rk(a)
		};
		N.d = function() {
			var a = this.l.d(this);
			this.dg(a);
			this.l.li(a, this.fg);
			this.ee || this.l.$c(a, l);
			this.n || this.l.F(a, l)
		};
		N.Hh = function(a) {
			this.fg = a
		};
		N.S = function() {
			return this.l.S(this.a())
		};
		N.K = function() {
			Gt.b.K[G](this);
			this.l.Wb(this);
			if(this.uc & -2 && (this.de && this.Rf(i), this.T(32))) {
				var a = this.R();
				if(a) {
					var b = this.Wc();
					b.Tf(a);
					this.P().i(b, lk, this.wa).i(a, Hi, this.Xc).i(a, Ah, this.yb)
				}
			}
		};
		N.Rf = function(a) {
			var b = this.P(),
				c = this.a();
			a ? (b.i(c, Jk, this.qe).i(c, Gk, this.tb).i(c, Kk, this.zb).i(c, Ik, this.pe), T && b.i(c, ii, this.$f)) : (b.X(c, Jk, this.qe).X(c, Gk, this.tb).X(c, Kk, this.zb).X(c, Ik, this.pe), T && b.X(c, ii, this.$f))
		};
		N.ba = function() {
			Gt.b.ba[G](this);
			this.ia && this.ia.detach();
			this.n && this[gd]() && this.l.Ab(this, l)
		};
		N.k = function() {
			Gt.b.k[G](this);
			this.ia && (this.ia.Q(), delete this.ia);
			delete this.l;
			this.Ea = this.na = k
		};
		Fa(N, function(a) {
			this.l[mc](this.a(), a);
			this.Zf(a)
		});
		N.Zf = function(a) {
			this.na = a
		};
		N.wc = function() {
			var a = this.na;
			if(!a) return J;
			if(!R(a))
				if(Q(a)) a = fo(a, Hp)[Ld](J);
				else {
					if(ep && fk in a) a = a.innerText[u](/(\r\n|\r|\n)/g, Qd);
					else {
						var b = [];
						Ip(a, b, i);
						a = b[Ld](J)
					}
					a = a[u](/ \xAD /g, Sd)[u](/\xAD/g, J);
					a = a[u](/\u200B/g, J);
					ep || (a = a[u](/ +/g, Sd));
					a != Sd && (a = a[u](/^\s*/, J))
				}
			return Bn(a)
		};
		N.dc = function(a) {
			Gt.b.dc[G](this, a);
			var b = this.a();
			b && this.l.dc(b, a)
		};
		N.$c = function(a) {
			this.ee = a;
			var b = this.a();
			b && this.l.$c(b, a)
		};
		N.F = function(a, b) {
			if(b || this.n != a && this[x](a ? Ql : Pj)) {
				var c = this.a();
				c && this.l.F(c, a);
				this[gd]() && this.l.Ab(this, a);
				this.n = a;
				return i
			}
			return l
		};
		N.isEnabled = function() {
			return !this.oa(1)
		};
		N.xa = function(a) {
			this.sc(2, a) && this[wc](2, a)
		};
		N.Da = function() {
			return this.oa(4)
		};
		N.setActive = function(a) {
			this.sc(4, a) && this[wc](4, a)
		};
		N.Wg = function() {
			return this.oa(8)
		};
		N.gf = function(a) {
			this.sc(8, a) && this[wc](8, a)
		};
		N.ke = function() {
			return this.oa(16)
		};
		N.zj = function(a) {
			this.sc(16, a) && this[wc](16, a)
		};
		N.Yg = function() {
			return this.oa(32)
		};
		N.ph = function(a) {
			this.sc(32, a) && this[wc](32, a)
		};
		N.cc = function() {
			return this.oa(64)
		};
		N.H = function(a) {
			this.sc(64, a) && this[wc](64, a)
		};
		N.getState = function() {
			return this.Sa
		};
		N.oa = function(a) {
			return !!(this.Sa & a)
		};
		La(N, function(a, b) {
			if(this.T(a) && b != this.oa(a)) this.l[wc](this, a, b), this.Sa = b ? this.Sa | a : this.Sa & ~a
		});
		N.jh = function(a) {
			this.Sa = a
		};
		N.T = function(a) {
			return !!(this.uc & a)
		};
		N.pa = function(a, b) {
			this.r && this.oa(a) && !b && e(n(Tf));
			!b && this.oa(a) && this[wc](a, l);
			this.uc = b ? this.uc | a : this.uc & ~a
		};
		N.ea = function(a) {
			return !!(this.Sd & a) && this.T(a)
		};
		N.nk = function(a, b) {
			this.Sd = b ? this.Sd | a : this.Sd & ~a
		};
		N.gg = function(a, b) {
			this.Ld = b ? this.Ld | a : this.Ld & ~a
		};
		N.sc = function(a, b) {
			return this.T(a) && this.oa(a) != b && (!(this.Ld & a) || this[x](kt(a, b))) && !this.Rc
		};
		N.qe = function(a) {
			(!a[eb] || !Ap(this.a(), a[eb])) && this[x](Bi) && this[gd]() && this.ea(2) && this.xa(i)
		};
		N.pe = function(a) {
			if((!a[eb] || !Ap(this.a(), a[eb])) && this[x](rk)) this.ea(4) && this[qc](l), this.ea(2) && this.xa(l)
		};
		N.tb = function(a) {
			this[gd]() && (this.ea(2) && this.xa(i), a.ne() && (this.ea(4) && this[qc](i), this.l.sb(this) && this.R()[Ob]()));
			!this.ee && a.ne() && a[ub]()
		};
		N.zb = function(a) {
			this[gd]() && (this.ea(2) && this.xa(i), this.Da() && this.Bb(a) && this.ea(4) && this[qc](l))
		};
		N.$f = function(a) {
			this[gd]() && this.Bb(a)
		};
		N.Bb = function(a) {
			this.ea(16) && this.zj(!this.ke());
			this.ea(8) && this.gf(i);
			this.ea(64) && this.H(!this.cc());
			var b = new Yp(mh, this);
			if(a) b.altKey = a[zc], b.ctrlKey = a[Oc], b.metaKey = a[xb], b.shiftKey = a[Bd], b.Ze = a.Ze;
			return this[x](b)
		};
		N.Xc = function() {
			this.ea(32) && this.ph(i)
		};
		N.yb = function() {
			this.ea(4) && this[qc](l);
			this.ea(32) && this.ph(l)
		};
		N.wa = function(a) {
			return this.n && this[gd]() && this.Ba(a) ? (a[ub](), a[Sc](), i) : l
		};
		N.Ba = function(a) {
			return 13 == a[Tb] && this.Bb(a)
		};
		bn(Gt) || e(n("Invalid component class " + Gt));
		bn(Ct) || e(n("Invalid renderer class " + Ct));
		var Ht = cn(Gt);
		Ft[Ht] = Ct;
		Et(nj, function() {
			return new Gt(k)
		});

		function It() {
			this.wh = []
		}
		S(It, Ct);
		Um(It);
		N = It[D];
		N.fd = function(a) {
			var b = this.wh[a];
			if(!b) {
				switch(a) {
					case 0:
						b = this.oc() + He;
						break;
					case 1:
						b = this.oc() + Ae;
						break;
					case 2:
						b = this.oc() + Ce
				}
				this.wh[a] = b
			}
			return b
		};
		N.nb = function() {
			return Bk
		};
		N.d = function(a) {
			var b = a.t().d(ti, this.hc(a)[Ld](Sd), this.zi(a.na, a.t()));
			this.Ai(a, b, a.T(8) || a.T(16));
			return b
		};
		N.S = function(a) {
			return a && a[Vb]
		};
		Fa(N, function(a, b) {
			var c = this.S(a),
				d = this.re(a) ? c[Vb] : k;
			It.b[mc][G](this, a, b);
			d && !this.re(a) && c[vb](d, c[Vb] || k)
		});
		N.zi = function(a, b) {
			var c = this.fd(2);
			return b.d(ti, c, a)
		};
		N.re = function(a) {
			if(a = this.S(a)) {
				var a = a[Vb],
					b = this.fd(1);
				return !!a && !!a.className && -1 != a.className[v](b)
			}
			return l
		};
		N.Ai = function(a, b, c) {
			if(c != this.re(b))
				if(c ? gp(b, yj) : hp(b, yj), b = this.S(b), c) c = this.fd(1), b[vb](a.t().d(ti, c), b[Vb] || k);
				else b[bd](b[Vb])
		};
		N.kd = function(a) {
			switch(a) {
				case 2:
					return this.fd(0);
				case 16:
				case 8:
					return zj;
				default:
					return It.b.kd[G](this, a)
			}
		};
		N.A = function() {
			return tj
		};

		function Jt(a, b, c, d) {
			Gt[G](this, a, d || It.qa(), c);
			this[Ic](b)
		}
		S(Jt, Gt);
		N = Jt[D];
		Ga(N, function() {
			var a = this.je;
			return a != k ? a : this.wc()
		});
		Na(N, function(a) {
			this.fl(a)
		});
		N.wc = function() {
			var a = this.na;
			return Q(a) ? (a = fo(a, function(a) {
				var c = fp(a);
				return ho(c, uj) || ho(c, vj) ? J : Hp(a)
			})[Ld](J), Bn(a)) : Jt.b.wc[G](this)
		};
		N.zb = function(a) {
			var b = this[ab]();
			if(b) {
				var c = b.eg;
				b.eg = k;
				if(b = c && an(a[sc])) b = new Ln(a[sc], a[tc]), b = c == b ? i : !c || !b ? l : c.x == b.x && c.y == b.y;
				if(b) return
			}
			Jt.b.zb[G](this, a)
		};
		N.Ba = function(a) {
			return a[Tb] == this.jg && this.Bb(a) ? i : Jt.b.Ba[G](this, a)
		};
		N.Hi = function() {
			return this.jg
		};
		Et(tj, function() {
			return new Jt(k)
		});

		function Kt(a, b, c, d, f, h, j, o) {
			var r, w = c.offsetParent;
			if(w) {
				var C = w[Cd] == hg || w[Cd] == Kf;
				if(!C || Lr(w) != Yl) r = Rr(w), C || (r = Mn(r, new Ln(w[qd], w[xc])))
			}
			w = Wr(a);
			(C = Qr(a)) && w.Ng(new Ir(C[y], C.top, C[Pd] - C[y], C[ud] - C.top));
			var C = ip(a),
				L = ip(c);
			if(C.o != L.o) {
				var ta = C.o[ad],
					L = L.ed(),
					ia = new Ln(0, 0),
					db = qp(kp(ta)),
					Da = ta;
				do {
					var Ja;
					if(db == L) Ja = Rr(Da);
					else {
						var ma = Da;
						Ja = new Ln;
						if(1 == ma[ib])
							if(ma[$a]) ma = Or(ma), Ja.x = ma[y], Ja.y = ma.top;
							else {
								var ra = ip(ma).ac(),
									ma = Rr(ma);
								Ja.x = ma.x - ra.x;
								Ja.y = ma.y - ra.y
							}
						else {
							var ra = bn(ma.sj),
								Aa =
								ma;
							ma[wb] ? Aa = ma[wb][0] : ra && ma.Y[wb] && (Aa = ma.Y[wb][0]);
							Ja.x = Aa[sc];
							Ja.y = Aa[tc]
						}
					}
					ia.x += Ja.x;
					ia.y += Ja.y
				} while (db && db != L && (Da = db.frameElement) && (db = db.parent));
				ta = Mn(ia, Rr(ta));
				T && !C.ff() && (ta = Mn(ta, C.ac()));
				ua(w, w[y] + ta.x);
				w.top += ta.y
			}
			a = (b & 4 && Sr(a) ? b ^ 2 : b) & -5;
			b = new Ln(a & 2 ? w[y] + w[t] : w[y], a & 1 ? w.top + w[I] : w.top);
			r && (b = Mn(b, r));
			f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
			var H;
			if(j && (H = Qr(c)) && r) H.top -= r.y, Xa(H, H[Pd] - r.x), Ta(H, H[ud] - r.y), ua(H, H[y] - r.x);
			a: {
				r = b[cd]();f = 0;a = (d & 4 && Sr(c) ? d ^ 2 : d) & -5;d = Ur(c);o = o ?
				o[cd]() : d[cd]();
				if(h || 0 != a) a & 2 ? r.x -= o[t] + (h ? h[Pd] : 0) : h && (r.x += h[y]),
				a & 1 ? r.y -= o[I] + (h ? h[ud] : 0) : h && (r.y += h.top);
				if(j) {
					if(H) {
						h = r;
						f = 0;
						if(65 == (j & 65) && (h.x < H[y] || h.x >= H[Pd])) j &= -2;
						if(132 == (j & 132) && (h.y < H.top || h.y >= H[ud])) j &= -5;
						if(h.x < H[y] && j & 1) h.x = H[y], f |= 1;
						h.x < H[y] && h.x + o[t] > H[Pd] && j & 16 && (pa(o, q.max(o[t] - (h.x + o[t] - H[Pd]), 0)), f |= 4);
						if(h.x + o[t] > H[Pd] && j & 1) h.x = q.max(H[Pd] - o[t], H[y]), f |= 1;
						j & 2 && (f |= (h.x < H[y] ? 16 : 0) | (h.x + o[t] > H[Pd] ? 32 : 0));
						if(h.y < H.top && j & 4) h.y = H.top, f |= 2;
						h.y >= H.top && h.y + o[I] > H[ud] && j & 32 && (Wa(o,
							q.max(o[I] - (h.y + o[I] - H[ud]), 0)), f |= 8);
						if(h.y + o[I] > H[ud] && j & 4) h.y = q.max(H[ud] - o[I], H.top), f |= 2;
						j & 8 && (f |= (h.y < H.top ? 64 : 0) | (h.y + o[I] > H[ud] ? 128 : 0));
						j = f
					} else j = 256;
					f = j;
					if(f & 496) {
						c = f;
						break a
					}
				}
				Mr(c, r);
				if(!(d == o || (!d || !o ? 0 : d[t] == o[t] && d[I] == o[I]))) h = ip(kp(c)).ff(),
				T && (!h || !$o(tf)) ? (j = c[F], h ? (T ? (h = bs(c, gl), d = bs(c, hl), r = bs(c, il), H = bs(c, fl), h = new Hr(r, d, H, h)) : (h = Jr(c, gl), d = Jr(c, hl), r = Jr(c, il), H = Jr(c, fl), h = new Hr(ga(r), ga(d), ga(H), ga(h))), T ? (d = ds(c, Hh), r = ds(c, Jh), H = ds(c, Lh), c = ds(c, Fh), c = new Hr(H, r, c, d)) : (d = Jr(c,
					Ih), r = Jr(c, Kh), H = Jr(c, Mh), c = Jr(c, Gh), c = new Hr(ga(H), ga(r), ga(c), ga(d))), j.pixelWidth = o[t] - c[y] - h[y] - h[Pd] - c[Pd], j.pixelHeight = o[I] - c.top - h.top - h[ud] - c[ud]) : (j.pixelWidth = o[t], j.pixelHeight = o[I])) : (c = c[F], Lo ? c.MozBoxSizing = Dh : Mo ? c.WebkitBoxSizing = Dh : c.boxSizing = Dh, pa(c, q.max(o[t], 0) + pl), Wa(c, q.max(o[I], 0) + pl));c = f
			}
			return c
		};

		function Lt() {}
		Lt[D].vc = function() {};

		function Mt(a, b) {
			this.element = a;
			this.bd = b
		}
		S(Mt, Lt);
		Mt[D].vc = function(a, b, c) {
			Kt(this[Ed], this.bd, a, b, g, c)
		};

		function Nt(a, b, c) {
			Mt[G](this, a, b);
			this.qk = c
		}
		S(Nt, Mt);
		Nt[D].qh = function() {
			return 5
		};
		Nt[D].vc = function(a, b, c, d) {
			var f = Kt(this[Ed], this.bd, a, b, k, c, 10, d);
			if(f & 496) {
				var h = this.Ud(f, this.bd),
					b = this.Ud(f, b),
					f = Kt(this[Ed], h, a, b, k, c, 10, d);
				f & 496 && (h = this.Ud(f, h), b = this.Ud(f, b), this.qk ? Kt(this[Ed], h, a, b, k, c, this.qh(), d) : Kt(this[Ed], h, a, b, k, c, 0, d))
			}
		};
		Nt[D].Ud = function(a, b) {
			a & 48 && (b ^= 2);
			a & 192 && (b ^= 1);
			return b
		};

		function Ot(a, b, c, d) {
			Nt[G](this, a, b, c || d);
			this.bl = d
		}
		S(Ot, Nt);
		Ot[D].qh = function() {
			return 65 | (this.bl ? 32 : 132)
		};
		var Pt, Qt;
		Qt = Pt = l;
		var Rt = Go();
		Rt && (-1 != Rt[v]("Firefox") || -1 != Rt[v]("Camino") || (-1 != Rt[v]("iPhone") || -1 != Rt[v]("iPod") ? Pt = i : -1 != Rt[v]("iPad") ? Qt = i : -1 != Rt[v]("Android") || -1 != Rt[v]("Chrome") || Rt[v]("Safari")));
		var St = Pt,
			Tt = Qt;

		function Ut() {}
		S(Ut, Ct);
		Um(Ut);
		N = Ut[D];
		N.nb = function() {
			return Oh
		};
		N.da = function(a, b, c) {
			16 == b ? Zs(a, nl, c) : Ut.b.da[G](this, a, b, c)
		};
		N.d = function(a) {
			var b = Ut.b.d[G](this, a),
				c = a.ad();
			c && this.fe(b, c);
			(c = a[A]()) && this[Ic](b, c);
			a.T(16) && this.da(b, 16, a.ke());
			return b
		};
		Ga(N, Tm);
		Na(N, Tm);
		N.ad = function(a) {
			return a.title
		};
		N.fe = function(a, b) {
			if(a) a.title = b || J
		};
		N.A = function() {
			return lj
		};

		function Vt() {}
		S(Vt, Ut);
		Um(Vt);
		N = Vt[D];
		N.nb = function() {};
		N.d = function(a) {
			this.Li(a);
			return a.t().d(Oh, {
				"class": this.hc(a)[Ld](Sd),
				disabled: !a[gd](),
				title: a.ad() || J,
				value: a[A]() || J
			}, a.wc() || J)
		};
		N.Wb = function(a) {
			a.P().i(a.a(), Xh, a.Bb)
		};
		N.$c = Tm;
		N.dc = Tm;
		N.sb = function(a) {
			return a[gd]()
		};
		N.Ab = Tm;
		La(N, function(a, b, c) {
			Vt.b[wc][G](this, a, b, c);
			if((a = a.a()) && 1 == b) a.disabled = c
		});
		Ga(N, function(a) {
			return a[sb]
		});
		Na(N, function(a, b) {
			if(a) a.value = b
		});
		N.da = Tm;
		N.Li = function(a) {
			a.ie(l);
			a.nk(255, l);
			a.pa(32, l)
		};

		function Wt(a, b, c) {
			Gt[G](this, a, b || Vt.qa(), c)
		}
		S(Wt, Gt);
		N = Wt[D];
		Ga(N, function() {
			return this.Wf
		});
		Na(N, function(a) {
			this.Wf = a;
			this.l[Ic](this.a(), a)
		});
		N.ad = function() {
			return this.Vf
		};
		N.fe = function(a) {
			this.Vf = a;
			this.l.fe(this.a(), a)
		};
		N.k = function() {
			Wt.b.k[G](this);
			delete this.Wf;
			delete this.Vf
		};
		N.K = function() {
			Wt.b.K[G](this);
			if(this.T(32)) {
				var a = this.R();
				a && this.P().i(a, pk, this.Ba)
			}
		};
		N.Ba = function(a) {
			return 13 == a[Tb] && a[z] == lk || 32 == a[Tb] && a[z] == pk ? this.Bb(a) : 32 == a[Tb]
		};
		Et(lj, function() {
			return new Wt(k)
		});

		function Xt() {}
		S(Xt, Ct);
		Um(Xt);
		Xt[D].d = function(a) {
			return a.t().d(ti, this.A())
		};
		Fa(Xt[D], function() {});
		Xt[D].A = function() {
			return wj
		};

		function Yt(a, b) {
			Gt[G](this, k, a || Xt.qa(), b);
			this.pa(1, l);
			this.pa(2, l);
			this.pa(4, l);
			this.pa(32, l);
			this.jh(1)
		}
		S(Yt, Gt);
		Yt[D].K = function() {
			Yt.b.K[G](this);
			Ys(this.a(), Il)
		};
		Et(wj, function() {
			return new Yt
		});

		function Zt() {}
		Um(Zt);
		N = Zt[D];
		N.nb = function() {};
		N.Yf = function(a, b) {
			if(a) a.tabIndex = b ? 0 : -1
		};
		N.d = function(a) {
			return a.t().d(ti, this.hc(a)[Ld](Sd))
		};
		N.S = function(a) {
			return a
		};
		N.Wb = function(a) {
			a = a.a();
			$r(a, i, Lo);
			if(T) a.hideFocus = i;
			var b = this.nb();
			b && Ys(a, b)
		};
		N.R = function(a) {
			return a.a()
		};
		N.A = function() {
			return mj
		};
		N.hc = function(a) {
			var b = this.A(),
				c = [b, a.gc == Rj ? b + Ie : b + Ue];
			a[gd]() || c[s](b + Ee);
			return c
		};

		function $t(a, b, c) {
			it[G](this, c);
			this.l = b || Zt.qa();
			this.gc = a || Cm
		}
		S($t, it);
		N = $t[D];
		N.he = k;
		N.ia = k;
		N.l = k;
		N.gc = k;
		N.n = i;
		N.vb = i;
		N.Fe = i;
		N.ha = -1;
		N.L = k;
		N.ge = l;
		N.mi = l;
		N.ki = i;
		N.Oa = k;
		N.R = function() {
			return this.he || this.l.R(this)
		};
		N.Wc = function() {
			return this.ia || (this.ia = new wt(this.R()))
		};
		N.d = function() {
			this.dg(this.l.d(this))
		};
		N.S = function() {
			return this.l.S(this.a())
		};
		N.K = function() {
			$t.b.K[G](this);
			this.rb(function(a) {
				a.r && this.Kf(a)
			}, this);
			var a = this.a();
			this.l.Wb(this);
			this.F(this.n, i);
			this.P().i(this, Bi, this.Xd).i(this, Qj, this.Yd).i(this, vm, this.Zd).i(this, Xk, this.Ph).i(this, Yh, this.Nh).i(a, Gk, this.tb).i(kp(a), Kk, this.Oh).i(a, [Gk, Kk, Jk, Ik], this.Mh);
			this.sb() && this.Lf(i)
		};
		N.Lf = function(a) {
			var b = this.P(),
				c = this.R();
			a ? b.i(c, Hi, this.Xc).i(c, Ah, this.yb).i(this.Wc(), lk, this.wa) : b.X(c, Hi, this.Xc).X(c, Ah, this.yb).X(this.Wc(), lk, this.wa)
		};
		N.ba = function() {
			this.Yb(-1);
			this.L && this.L.H(l);
			this.ge = l;
			$t.b.ba[G](this)
		};
		N.k = function() {
			$t.b.k[G](this);
			if(this.ia) this.ia.Q(), this.ia = k;
			this.l = this.L = this.Oa = this.he = k
		};
		N.Xd = function() {
			return i
		};
		N.Yd = function(a) {
			var b = this.Vc(a[ed]);
			if(-1 < b && b != this.ha) {
				var c = this.$b();
				c && c.xa(l);
				this.ha = b;
				c = this.$b();
				this.ge && c[qc](i);
				this.ki && this.L && c != this.L && (c.T(64) ? c.H(i) : this.L.H(l))
			}
			Zs(this.a(), oh, a[ed].a().id)
		};
		N.Zd = function(a) {
			if(a[ed] == this.$b()) this.ha = -1;
			Zs(this.a(), oh, J)
		};
		N.Ph = function(a) {
			if((a = a[ed]) && a != this.L && a[ab]() == this) this.L && this.L.H(l), this.L = a
		};
		N.Nh = function(a) {
			if(a[ed] == this.L) this.L = k
		};
		N.tb = function(a) {
			this.vb && this.Xb(i);
			var b = this.R();
			b && Fp(b) ? b[Ob]() : a[ub]()
		};
		N.Oh = function() {
			this.Xb(l)
		};
		N.Mh = function(a) {
			var b = this.bk(a[ed]);
			if(b) switch(a[z]) {
				case Gk:
					b.tb(a);
					break;
				case Kk:
					b.zb(a);
					break;
				case Jk:
					b.qe(a);
					break;
				case Ik:
					b.pe(a)
			}
		};
		N.bk = function(a) {
			if(this.Oa)
				for(var b = this.a(); a && a !== b;) {
					var c = a.id;
					if(c in this.Oa) return this.Oa[c];
					a = a[Hd]
				}
			return k
		};
		N.Xc = function() {};
		N.yb = function() {
			this.Yb(-1);
			this.Xb(l);
			this.L && this.L.H(l)
		};
		N.wa = function(a) {
			return this[gd]() && this.n && (0 != this.ab() || this.he) && this.Ba(a) ? (a[ub](), a[Sc](), i) : l
		};
		N.Ba = function(a) {
			var b = this.$b();
			if(b && typeof b.wa == Mi && b.wa(a)) return i;
			if(this.L && this.L != b && typeof this.L.wa == Mi && this.L.wa(a)) return i;
			if(a[Bd] || a[Oc] || a[xb] || a[zc]) return l;
			switch(a[Tb]) {
				case 27:
					if(this.sb()) this.R().blur();
					else return l;
					break;
				case 36:
					this.Xi();
					break;
				case 35:
					this.Yi();
					break;
				case 38:
					if(this.gc == Cm) this.Se();
					else return l;
					break;
				case 37:
					if(this.gc == Rj) this.le() ? this.Re() : this.Se();
					else return l;
					break;
				case 40:
					if(this.gc == Cm) this.Re();
					else return l;
					break;
				case 39:
					if(this.gc == Rj) this.le() ?
						this.Se() : this.Re();
					else return l;
					break;
				default:
					return l
			}
			return i
		};
		N.Kf = function(a) {
			var b = a.a(),
				b = b.id || (b.id = a.Vb());
			if(!this.Oa) this.Oa = {};
			this.Oa[b] = a
		};
		N.Dd = function(a, b) {
			$t.b.Dd[G](this, a, b)
		};
		N.Cc = function(a, b, c) {
			a.gg(2, i);
			a.gg(64, i);
			(this.sb() || !this.mi) && a.pa(32, l);
			a.ie(l);
			$t.b.Cc[G](this, a, b, c);
			a.r && this.r && this.Kf(a);
			b <= this.ha && this.ha++
		};
		N.removeChild = function(a, b) {
			if(a = R(a) ? this.ce(a) : a) {
				var c = this.Vc(a); - 1 != c && (c == this.ha ? a.xa(l) : c < this.ha && this.ha--);
				(c = a.a()) && c.id && this.Oa && vo(this.Oa, c.id)
			}
			a = $t.b[bd][G](this, a, b);
			a.ie(i);
			return a
		};
		N.F = function(a, b) {
			if(b || this.n != a && this[x](a ? Ql : Pj)) {
				this.n = a;
				var c = this.a();
				c && (Yr(c, a), this.sb() && this.l.Yf(this.R(), this.vb && this.n), b || this[x](this.n ? qh : ph));
				return i
			}
			return l
		};
		N.isEnabled = function() {
			return this.vb
		};
		N.sb = function() {
			return this.Fe
		};
		N.Ab = function(a) {
			a != this.Fe && this.r && this.Lf(a);
			this.Fe = a;
			this.vb && this.n && this.l.Yf(this.R(), a)
		};
		N.Yb = function(a) {
			(a = this.bb(a)) ? a.xa(i): -1 < this.ha && this.$b().xa(l)
		};
		N.xa = function(a) {
			this.Yb(this.Vc(a))
		};
		N.$b = function() {
			return this.bb(this.ha)
		};
		N.Xi = function() {
			this.Pd(function(a, b) {
				return(a + 1) % b
			}, this.ab() - 1)
		};
		N.Yi = function() {
			this.Pd(function(a, b) {
				a--;
				return 0 > a ? b - 1 : a
			}, 0)
		};
		N.Re = function() {
			this.Pd(function(a, b) {
				return(a + 1) % b
			}, this.ha)
		};
		N.Se = function() {
			this.Pd(function(a, b) {
				a--;
				return 0 > a ? b - 1 : a
			}, this.ha)
		};
		N.Pd = function(a, b) {
			for(var c = 0 > b ? this.Vc(this.L) : b, d = this.ab(), c = a[G](this, c, d), f = 0; f <= d;) {
				var h = this.bb(c);
				if(h && this.Vg(h)) return this.Dj(c), i;
				f++;
				c = a[G](this, c, d)
			}
			return l
		};
		N.Vg = function(a) {
			return a.n && a[gd]() && a.T(2)
		};
		N.Dj = function(a) {
			this.Yb(a)
		};
		N.Xb = function(a) {
			this.ge = a
		};

		function au() {}
		S(au, Ct);
		Um(au);
		au[D].A = function() {
			return sj
		};

		function bu(a, b, c) {
			Gt[G](this, a, c || au.qa(), b);
			this.pa(1, l);
			this.pa(2, l);
			this.pa(4, l);
			this.pa(32, l);
			this.jh(1)
		}
		S(bu, Gt);
		Et(sj, function() {
			return new bu(k)
		});

		function cu() {}
		S(cu, Zt);
		Um(cu);
		cu[D].nb = function() {
			return Ak
		};
		cu[D].Cb = function(a, b) {
			return Ap(a.a(), b)
		};
		cu[D].A = function() {
			return qj
		};
		cu[D].Wb = function(a) {
			cu.b.Wb[G](this, a);
			Zs(a.a(), Lj, sm)
		};
		Et(wj, function() {
			return new Yt
		});

		function du(a, b) {
			$t[G](this, Cm, b || cu.qa(), a);
			this.Ab(l)
		}
		S(du, $t);
		N = du[D];
		N.we = i;
		N.Ej = l;
		N.A = function() {
			return this.l.A()
		};
		N.Cb = function(a) {
			if(this.l.Cb(this, a)) return i;
			for(var b = 0, c = this.ab(); b < c; b++) {
				var d = this.bb(b);
				if(typeof d.Cb == Mi && d.Cb(a)) return i
			}
			return l
		};
		N.gb = function(a) {
			this.Dd(a, i)
		};
		N.mc = function(a, b) {
			this.Cc(a, b, i)
		};
		N.Mc = function(a) {
			return this.bb(a)
		};
		N.Df = function() {
			return this.ab()
		};
		N.qc = function(a, b) {
			var c = this.n;
			c || Yr(this.a(), i);
			var d = this.a(),
				f = a,
				h = b,
				j = Rr(d);
			if(f instanceof Ln) h = f.y, f = f.x;
			Mr(d, d.offsetLeft + (f - j.x), d[Jd] + (h - j.y));
			c || Yr(this.a(), l)
		};
		N.si = function(a) {
			(this.we = a) && this.Ab(i)
		};
		N.F = function(a, b, c) {
			(b = du.b.F[G](this, a, b)) && a && this.r && this.we && this.R()[Ob]();
			this.eg = a && c && an(c[sc]) ? new Ln(c[sc], c[tc]) : k;
			return b
		};
		N.Xd = function(a) {
			this.we && this.R()[Ob]();
			return du.b.Xd[G](this, a)
		};
		N.Vg = function(a) {
			return(this.Ej || a[gd]()) && a.n && a.T(2)
		};
		N.Ba = function(a) {
			var b = du.b.Ba[G](this, a);
			b || this.rb(function(c) {
				!b && c.Hi && c.jg == a[Tb] && (this[gd]() && this.xa(c), b = c.wa(a))
			}, this);
			return b
		};

		function eu() {}
		S(eu, Ut);
		Um(eu);
		N = eu[D];
		N.d = function(a) {
			var b = {
					"class": pj + this.hc(a)[Ld](Sd),
					title: a.ad() || J
				},
				b = a.t().d(ti, b, this.createButton(a.na, a.t()));
			this.Je(a, b);
			return b
		};
		N.nb = function() {
			return Oh
		};
		N.Je = function(a, b) {
			a[gd]() || this.da(b, 1, i);
			a.Wg() && this.da(b, 8, i);
			a.T(16) && this.da(b, 16, i);
			a.cc() && this.da(b, 64, i)
		};
		N.S = function(a) {
			return a && a[Vb][Vb]
		};
		N.createButton = function(a, b) {
			return b.d(ti, pj + (this.A() + Me), b.d(ti, pj + (this.A() + Ke), a))
		};
		N.A = function() {
			return oj
		};

		function fu() {}
		S(fu, eu);
		Um(fu);
		Lo && Fa(fu[D], function(a, b) {
			var c = fu.b.S[G](this, a && a[Vb]);
			if(c) {
				var d = this.createCaption(b, ip(a)),
					f = c[Hd];
				f && f.replaceChild(d, c)
			}
		});
		N = fu[D];
		N.S = function(a) {
			a = fu.b.S[G](this, a && a[Vb]);
			Lo && a && a.__goog_wrapper_div && (a = a[Vb]);
			return a
		};
		N.createButton = function(a, b) {
			return fu.b.createButton[G](this, [this.createCaption(a, b), this.nj(b)], b)
		};
		N.createCaption = function(a, b) {
			return b.d(ti, pj + (this.A() + ze), a)
		};
		N.nj = function(a) {
			return a.d(ti, pj + (this.A() + Fe), Om)
		};
		N.A = function() {
			return rj
		};

		function gu(a, b, c, d) {
			Wt[G](this, a, c || fu.qa(), d);
			this.pa(64, i);
			b && this.Zc(b);
			this.Zh = k;
			this.ga = new tq(500);
			(St || Tt) && !$o(rf) && this.Gj(i)
		}
		S(gu, Wt);
		N = gu[D];
		N.gi = i;
		N.me = l;
		N.Tc = l;
		N.Sh = l;
		N.K = function() {
			gu.b.K[G](this);
			this.g && this.Uc(this.g, i);
			Zs(this.a(), Lj, sm)
		};
		N.ba = function() {
			gu.b.ba[G](this);
			if(this.g) {
				this.H(l);
				this.g.ba();
				this.Uc(this.g, l);
				var a = this.g.a();
				a && zp(a)
			}
		};
		N.k = function() {
			gu.b.k[G](this);
			this.g && (this.g.Q(), delete this.g);
			delete this.Qh;
			this.ga.Q()
		};
		N.tb = function(a) {
			gu.b.tb[G](this, a);
			this.Da() && (this.H(!this.cc(), a), this.g && this.g.Xb(this.cc()))
		};
		N.zb = function(a) {
			gu.b.zb[G](this, a);
			this.g && !this.Da() && this.g.Xb(l)
		};
		N.Bb = function() {
			this[qc](l);
			return i
		};
		N.hi = function(a) {
			this.g && this.g.n && !this.Cb(a[ed]) && this.H(l)
		};
		N.Cb = function(a) {
			return a && Ap(this.a(), a) || this.g && this.g.Cb(a) || l
		};
		N.Ba = function(a) {
			if(32 == a[Tb]) {
				if(a[ub](), a[z] != pk) return l
			} else if(a[z] != lk) return l;
			if(this.g && this.g.n) {
				var b = this.g.wa(a);
				return 27 == a[Tb] ? (this.H(l), i) : b
			}
			return 40 == a[Tb] || 38 == a[Tb] || 32 == a[Tb] ? (this.H(i), i) : l
		};
		N.ve = function() {
			this.H(l)
		};
		N.ii = function() {
			this.Da() || this.H(l)
		};
		N.yb = function(a) {
			this.Tc || this.H(l);
			gu.b.yb[G](this, a)
		};
		N.Ac = function() {
			this.g || this.Zc(new du(this.t()));
			return this.g || k
		};
		N.Zc = function(a) {
			var b = this.g;
			if(a != b && (b && (this.H(l), this.r && this.Uc(b, l), delete this.g), a)) this.g = a, a.$d(this), a.F(l), a.si(this.Tc), this.r && this.Uc(a, i);
			return b
		};
		N.gb = function(a) {
			this.Ac().Dd(a, i)
		};
		N.mc = function(a, b) {
			this.Ac().Cc(a, b, i)
		};
		N.Mc = function(a) {
			return this.g ? this.g.bb(a) : k
		};
		N.Df = function() {
			return this.g ? this.g.ab() : 0
		};
		N.F = function(a, b) {
			var c = gu.b.F[G](this, a, b);
			c && !this.n && this.H(l);
			return c
		};
		N.Gj = function(a) {
			this.Tc = a
		};
		N.H = function(a, b) {
			gu.b.H[G](this, a);
			if(this.g && this.oa(64) == a) {
				if(a) this.g.r || (this.Sh ? this.g.ub(this.a()[Hd]) : this.g.ub()), this.xb = Qr(this.a()), this.wb = Wr(this.a()), this.Of(), this.g.Yb(-1);
				else if(this[qc](l), this.g.Xb(l), this.a() && Zs(this.a(), oh, J), P(this.Qc)) {
					this.Qc = g;
					var c = this.g.a();
					c && Tr(c, J, J)
				}
				this.g.F(a, l, b);
				this.Rc || this.Rh(a)
			}
		};
		N.Of = function() {
			if(this.g.r) {
				var a = this.Qh || this.a(),
					b = this.il;
				b || (b = new Ot(a, this.gi ? 5 : 7, !this.me, this.me));
				a = this.g.a();
				this.g.n || (Ka(a[F], Oj), Yr(a, i));
				if(!this.Qc && this.me) this.Qc = Ur(a);
				b.vc(a, b.bd ^ 1, this.Zh, this.Qc);
				this.g.n || (Yr(a, l), Ka(a[F], Dm))
			}
		};
		N.ji = function() {
			var a = Wr(this.a()),
				b = Qr(this.a());
			if(!(this.wb == a || (!this.wb || !a ? 0 : this.wb[y] == a[y] && this.wb[t] == a[t] && this.wb.top == a.top && this.wb[I] == a[I])) || !(this.xb == b || (!this.xb || !b ? 0 : this.xb.top == b.top && this.xb[Pd] == b[Pd] && this.xb[ud] == b[ud] && this.xb[y] == b[y]))) this.wb = a, this.xb = b, this.Of()
		};
		N.Uc = function(a, b) {
			var c = this.P(),
				d = b ? c.i : c.X;
			d[G](c, a, mh, this.ve);
			d[G](c, a, Qj, this.Yd);
			d[G](c, a, vm, this.Zd)
		};
		N.Yd = function(a) {
			Zs(this.a(), oh, a[ed].a().id)
		};
		N.Zd = function() {
			this.g.$b() || Zs(this.a(), oh, J)
		};
		N.Rh = function(a) {
			var b = this.P(),
				c = a ? b.i : b.X;
			c[G](b, this.t().o, Gk, this.hi, i);
			this.Tc && c[G](b, this.g, Ah, this.ii);
			c[G](b, this.ga, hm, this.ji);
			a ? this.ga.start() : this.ga.stop()
		};
		Et(rj, function() {
			return new gu(k)
		});

		function hu(a) {
			this.Lb = [];
			this.yk(a)
		}
		S(hu, sq);
		N = hu[D];
		N.Mb = k;
		N.Bh = k;
		N.Df = function() {
			return this.Lb[B]
		};
		N.Bk = function(a) {
			return a ? bo(this.Lb, a) : -1
		};
		N.Mc = function(a) {
			return this.Lb[a] || k
		};
		N.yk = function(a) {
			a && (co(a, function(a) {
				this.Rd(a, l)
			}, this), lo(this.Lb, a))
		};
		N.gb = function(a) {
			this.mc(a, this.Df())
		};
		N.mc = function(a, b) {
			a && (this.Rd(a, l), mo(this.Lb, b, 0, a))
		};
		N.wd = function() {
			return this.Mb
		};
		N.Qb = function(a) {
			if(a != this.Mb) this.Rd(this.Mb, l), this.Mb = a, this.Rd(a, i);
			this[x](Gl)
		};
		N.qd = function() {
			return this.Bk(this.Mb)
		};
		N.xh = function(a) {
			this.Qb(this.Mc(a))
		};
		Ea(N, function() {
			var a = this.Lb;
			if(!Q(a))
				for(var b = a[B] - 1; 0 <= b; b--) delete a[b];
			Ma(a, 0);
			this.Mb = k
		});
		N.k = function() {
			hu.b.k[G](this);
			delete this.Lb;
			this.Mb = k
		};
		N.Rd = function(a, b) {
			a && (typeof this.Bh == Mi ? this.Bh(a, b) : typeof a.gf == Mi && a.gf(b))
		};

		function iu(a, b, c, d) {
			gu[G](this, a, b, c, d);
			this.Lk(a);
			this.Hh(uk)
		}
		S(iu, gu);
		N = iu[D];
		N.w = k;
		N.te = k;
		N.K = function() {
			iu.b.K[G](this);
			this.oe();
			this.Uf();
			Zs(this.a(), Lj, Ei)
		};
		N.k = function() {
			iu.b.k[G](this);
			if(this.w) this.w.Q(), this.w = k;
			this.te = k
		};
		N.ve = function(a) {
			this.Qb(a[ed]);
			iu.b.ve[G](this, a);
			a[Sc]();
			this[x](mh)
		};
		N.lj = function() {
			var a = this.wd();
			iu.b[Ic][G](this, a && a[A]());
			this.oe()
		};
		N.Zc = function(a) {
			var b = iu.b.Zc[G](this, a);
			a != b && (this.w && this.w.clear(), a && (this.w ? a.rb(function(a) {
				this.rd(a);
				this.w.gb(a)
			}, this) : this.ze(a)));
			return b
		};
		N.Lk = function(a) {
			this.te = a;
			this.oe()
		};
		N.gb = function(a) {
			this.rd(a);
			iu.b.gb[G](this, a);
			this.w ? this.w.gb(a) : this.ze(this.Ac())
		};
		N.mc = function(a, b) {
			this.rd(a);
			iu.b.mc[G](this, a, b);
			this.w ? this.w.mc(a, b) : this.ze(this.Ac())
		};
		N.Qb = function(a) {
			this.w && this.w.Qb(a)
		};
		N.xh = function(a) {
			this.w && this.Qb(this.w.Mc(a))
		};
		Na(N, function(a) {
			if(P(a) && this.w)
				for(var b = 0, c; c = this.w.Mc(b); b++)
					if(c && typeof c[A] == Mi && c[A]() == a) {
						this.Qb(c);
						return
					}
			this.Qb(k)
		});
		N.wd = function() {
			return this.w ? this.w.wd() : k
		};
		N.qd = function() {
			return this.w ? this.w.qd() : -1
		};
		N.ze = function(a) {
			this.w = new hu;
			a && a.rb(function(a) {
				this.rd(a);
				this.w.gb(a)
			}, this);
			this.Uf()
		};
		N.Uf = function() {
			this.w && this.P().i(this.w, Gl, this.lj)
		};
		N.oe = function() {
			var a = this.wd();
			this[mc](a ? a.wc() : this.te)
		};
		N.rd = function(a) {
			a.Hh(a instanceof Jt ? Yk : Il)
		};
		N.H = function(a, b) {
			iu.b.H[G](this, a, b);
			this.cc() && this.Ac().Yb(this.qd())
		};
		Et("goog-select", function() {
			return new iu(k)
		});

		function ju(a, b) {
			this.fb = ip();
			this.ec = a;
			this.bh = [];
			a: {
				for(var c = es() + ef, d = ja[rc](sg), f = 0; f < d[B]; f++)
					if(d[f] && d[f][wd] && d[f][wd] == c) break a;d = ja[Pb](tk);d.href = c;d.rel = am;Ca(d, em);
				if(0 == ja[rc](Mj)[B]) {
					var c = ja[rc](Sj)[0],
						f = ja[rc](Bh)[0],
						h = ja[Pb](Mj);
					c[vb](h, f)
				}
				ja[rc](Mj)[0][Ya](d)
			}
			this.fk(b)
		}
		N = ju[D];
		N.lc = k;

		function ku(a, b) {
			var c = ip(),
				d, f, h = k;
			switch(a) {
				case 2:
					d = new mt(Fj);
					h = rl + d.Vb();
					f = c.d(ti, k, c.d(ti, {
						"class": Ej
					}, Vf), c.d(Nh, k), c.d(ml, k, c.d(ti, {
						id: h
					}, b[Xc])));
					break;
				case 3:
					d = new mt(Aj);
					f = c.d(ti, k, c.d(ti, {
						"class": Ej
					}, Vf), c.d(Nh, k));
					var j = c.d(ti, k, c.d(ml, k, b[Xc]));
					c[Ya](f, j)
			}
			d[mc](f.innerHTML);
			qa(d.$i(), eg);
			qa(d.Zi(), J);
			d.F(i);
			h && (c = lp(h), (T && !bp(9) ? Us(c, 0, c, 1) : Mo ? new Xs(Qs(c, 0, c, 1)) : Lo ? new Rs(Qs(c, 0, c, 1)) : Ko ? new Ws(Qs(c, 0, c, 1)) : new Ns(Qs(c, 0, c, 1))).select())
		}
		N.fk = function(a) {
			var a = a || [],
				b = this.ec,
				c = this.fb;
			c.vg(b);
			b || e(n("Container is not defined"));
			var d = c.d(Ul, k),
				f = [c.d(Ul, k, Rf), c.d(ti, {
					"class": Gj
				}, Qm)];
			this.lc = new iu(f);
			if(a)
				for(f = 0; f < a[B]; f++) {
					var h = k,
						j = a[f],
						o = j.datasource,
						r = j.gadget,
						w = j.userprefs,
						C = j[E],
						L = j[dl],
						ta = j[F] || Gm;
					switch(j[z]) {
						case ei:
							h = this.Gc(f, kn(function(a) {
								ba[bb]((new Cq(a)).nd(qm, $k), fg)
							}, o), $f, Bj);
							break;
						case Tj:
							h = this.Gc(f, kn(function(a, b) {
								ku(2, {
									message: Af + ta + Zd + aa(a) + me + aa(b) + lu(w) + Yd
								})
							}, r, o), Gg, Dj);
							break;
						case jk:
							h = this.Gc(f, kn(function(a,
								b, c) {
								ku(3, {
									message: zf + aa(b) + oe + a + ne + aa(c) + qe
								})
							}, o, L, C), rg, Dj);
							break;
						case Sj:
							h = this.Gc(f, kn(function(a) {
								ba[bb]((new Cq(a)).nd(qm, al), fg)
							}, o), ag, Bj);
							break;
						case ck:
							h = this.Gc(f, kn(function(a, b, c) {
								ba[bb](Yj + aa(a) + me + aa(b) + lu(c))
							}, r, o, w), If, Cj);
							break;
						default:
							e(n("No such toolbar component as: " + j.toSource()))
					}
					h && this.lc.gb(h)
				}
			hq(this.lc, mh, jn(this.Ii, this));
			this.lc.ub(d);
			c[Ya](b, d)
		};
		N.ok = function() {
			this.lc.xh(-1)
		};
		N.Ii = function() {
			this.bh[this.lc.qd()]();
			this.ok()
		};
		N.Gc = function(a, b, c) {
			c = new Jt(c);
			this.bh[a] = b;
			return c
		};

		function lu(a) {
			if(!a) return J;
			var b = J,
				c;
			for(c in a) b += le + c + Cf + aa(a[c]);
			return b
		};
		m("google.visualization.drawChart", Gs);
		m("google.visualization.drawFromUrl", function(a, b) {
			var c = new Cq(b || ja[Uc][wd]),
				d = c.kh(kk),
				f;
			P(d) ? f = d : (f = {}, co(c.Z.Tb(), function(a) {
				var b = c.kh(a);
				try {
					P(b) && (b = xn(b))
				} catch(d) {}
				f[a] = b
			}), f.options = fn(f));
			Gs(f, a)
		});
		m("google.visualization.createUrl", function(a, b) {
			R(a) && (a = xn(a));
			var c = [],
				d, f;
			for(f in a)
				if(f == Zk) {
					var h = a[f],
						j;
					for(j in h) d = h[j], R(d) || (d = un(d)), c[s](j + Cf + En(d))
				} else d = a[f], R(d) || (d = bn(d[Hc]) ? d[Hc]() : un(d)), c[s](f + Cf + En(d));
			d = es() + af;
			d = d[u](/^https?:/, J);
			c = (b || d) + Ef + c[Ld](fe);
			c = c[u](/'/g, ee);
			return c = c[u](/"/g, de)
		});
		m("google.visualization.createSnippet", function(a) {
			var b = es() + bf,
				b = b[u](/^https?:/, J),
				b = Bf + b + $d,
				a = Hs(a)[Hc](),
				a = a[u](/</g, ie),
				a = a[u](/>/g, he);
			return b + a + Rd
		});
		m("google.visualization.createWrapper", Hs);
		m("google.visualization.ChartWrapper", Y);
		p(Y[D], wi, Y[D][kd]);
		p(Y[D], km, Y[D][Hc]);
		p(Y[D], ij, Y[D].getSnapshot);
		p(Y[D], Xi, Y[D][dd]);
		p(Y[D], Yi, Y[D][tb]);
		p(Y[D], "getChartName", Y[D].getChartName);
		p(Y[D], "getChartType", Y[D].getChartType);
		p(Y[D], "getChart", Y[D].getChart);
		p(Y[D], Wi, Y[D][td]);
		p(Y[D], dj, Y[D][sd]);
		p(Y[D], ej, Y[D][yd]);
		p(Y[D], fj, Y[D][nd]);
		p(Y[D], "getView", Y[D][Cc]);
		p(Y[D], "getOption", Y[D].getOption);
		p(Y[D], "getOptions", Y[D][mb]);
		p(Y[D], "getState", Y[D][od]);
		p(Y[D], "pushView", Y[D].pushView);
		p(Y[D], "sendQuery", Y[D].sendQuery);
		p(Y[D], Kl, Y[D][Mc]);
		p(Y[D], Ll, Y[D][hd]);
		p(Y[D], "setChart", Y[D].setChart);
		p(Y[D], "setChartName", Y[D].setChartName);
		p(Y[D], "setChartType", Y[D].setChartType);
		p(Y[D], Jl, Y[D].setContainerId);
		p(Y[D], Nl, Y[D].setPackages);
		p(Y[D], Ol, Y[D][$c]);
		p(Y[D], Pl, Y[D][fc]);
		p(Y[D], "setView", Y[D][Zc]);
		p(Y[D], "setOption", Y[D].setOption);
		p(Y[D], Ml, Y[D][Vc]);
		p(Y[D], "setState", Y[D][wc]);
		m("google.visualization.ControlWrapper", Z);
		p(Z[D], wi, Z[D][kd]);
		p(Z[D], km, Z[D][Hc]);
		p(Z[D], ij, Z[D].getSnapshot);
		p(Z[D], Xi, Z[D][dd]);
		p(Z[D], Yi, Z[D][tb]);
		p(Z[D], "getControlName", Z[D].getControlName);
		p(Z[D], "getControlType", Z[D].getControlType);
		p(Z[D], "getControl", Z[D].getControl);
		p(Z[D], Wi, Z[D][td]);
		p(Z[D], dj, Z[D][sd]);
		p(Z[D], ej, Z[D][yd]);
		p(Z[D], fj, Z[D][nd]);
		p(Z[D], "getView", Z[D][Cc]);
		p(Z[D], "getOption", Z[D].getOption);
		p(Z[D], "getOptions", Z[D][mb]);
		p(Z[D], "getState", Z[D][od]);
		p(Z[D], "sendQuery", Z[D].sendQuery);
		p(Z[D], Kl, Z[D][Mc]);
		p(Z[D], Ll, Z[D][hd]);
		p(Z[D], "setControlName", Z[D].setControlName);
		p(Z[D], "setControlType", Z[D].setControlType);
		p(Z[D], Jl, Z[D].setContainerId);
		p(Z[D], Nl, Z[D].setPackages);
		p(Z[D], Ol, Z[D][$c]);
		p(Z[D], Pl, Z[D][fc]);
		p(Z[D], "setView", Z[D][Zc]);
		p(Z[D], "setOption", Z[D].setOption);
		p(Z[D], Ml, Z[D][Vc]);
		p(Z[D], "setState", Z[D][wc]);
		m("google.visualization.DashboardWrapper", $);
		p($[D], wi, $[D][kd]);
		p($[D], km, $[D][Hc]);
		p($[D], "getBindings", $[D].getBindings);
		p($[D], Xi, $[D][dd]);
		p($[D], Yi, $[D][tb]);
		p($[D], "getDashboard", $[D].getDashboard);
		p($[D], "getDashboardName", $[D].getDashboardName);
		p($[D], Wi, $[D][td]);
		p($[D], dj, $[D][sd]);
		p($[D], ej, $[D][yd]);
		p($[D], fj, $[D][nd]);
		p($[D], "getView", $[D][Cc]);
		p($[D], "getWrappers", $[D].getWrappers);
		p($[D], "setBindings", $[D].setBindings);
		p($[D], Kl, $[D][Mc]);
		p($[D], Ll, $[D][hd]);
		p($[D], "setDashboardName", $[D].setDashboardName);
		p($[D], Jl, $[D].setContainerId);
		p($[D], Nl, $[D].setPackages);
		p($[D], Ol, $[D][$c]);
		p($[D], Pl, $[D][fc]);
		p($[D], "setView", $[D][Zc]);
		p($[D], ij, $[D].getSnapshot);
		p($[D], "setWrappers", $[D].setWrappers);
		m("google.visualization.drawToolbar", function(a, b) {
			new ju(a, b)
		});
		m("google.visualization.data.avg", function(a) {
			return Is(a) / a[B]
		});
		m("google.visualization.data.count", function(a) {
			return a[B]
		});
		m("google.visualization.data.group", function(a, b, c) {
			function d(a, b, c, d) {
				return b[G](k, c[A](d, a))
			}
			var f = [],
				h = [];
			co(b, function(a) {
				if(an(a)) f[s](a);
				else if(Vm(a) == Uk) {
					var b = a.column;
					Fk in a && h[s]([b, {
						calc: kn(d, b, a.modifier),
						type: a[z],
						label: a[Id],
						id: a.id
					}]);
					f[s](b)
				}
			});
			if(0 != h[B]) {
				for(var j = new google[E][md](a), o = j.getViewColumns(), r = a[Dc](), w = 0; w < r; w++) co(h, function(a) {
					o[a[0]] = a[1]
				});
				j[Md](o);
				a = j
			}
			var C = new google[E].DataTable,
				L = [];
			co(f, function(c, d) {
				var f = a[Ub](c),
					h = b[d][Id] || a[Qb](c);
				C[Dd](f, h, b[d].id);
				L[s](f)
			});
			c = c || [];
			co(c, function(b) {
				var c = b.column,
					c = b[Id] || a[Qb](c);
				C[Dd](b[z], c, b.id)
			});
			var ta = [];
			co(f, function(a) {
				ta[s]({
					column: a
				})
			});
			for(var ia = a[Wb](ta), db = [], Da = 0; Da < c[B]; Da++) db[s]([]);
			for(Da = 0; Da < ia[B]; Da++) {
				co(c, function(b, c) {
					db[c][s](a[A](ia[Da], b.column))
				});
				j = l;
				if(Da < ia[B] - 1) {
					j = i;
					for(r = 0; r < f[B]; r++) {
						var w = a[A](ia[Da], f[r]),
							Ja = a[A](ia[Da + 1], f[r]);
						if(0 != google[E].datautils.compareValues(L[r], w, Ja)) {
							j = l;
							break
						}
					}
				}
				if(!j) {
					var ma = C.addRow();
					co(f, function(b, c) {
						C[Ic](ma, c, a[A](ia[Da], b))
					});
					var ra =
						b[B];
					co(c, function(a, b) {
						var c = a.aggregation[G](k, db[b]);
						C[Ic](ma, ra + b, c)
					});
					for(j = 0; j < c[B]; j++) db[j] = []
				}
			}
			return C
		});
		m("google.visualization.data.join", function(a, b, c, d, f, h) {
			var j = c == sk || c == Li,
				o = c == Al || c == Li,
				r = new google[E].DataTable,
				w = [];
			co(d, function(c) {
				var d = a[Ub](c[0]),
					f = b[Ub](c[1]);
				d != f && e(n("Key types do not match:" + d + ve + f));
				f = r[Dd](d, a[Qb](c[0]));
				r[Db](f, a[Ab](c[0]));
				w[s](d)
			});
			var C = [],
				L = [];
			co(d, function(a) {
				C[s]({
					column: a[0]
				});
				L[s]({
					column: a[1]
				})
			});
			var ta = a[Wb](C),
				ia = b[Wb](L);
			co(f, function(b) {
				var c = r[Dd](a[Ub](b), a[Qb](b));
				r[Db](c, a[Ab](b))
			});
			co(h, function(a) {
				var c = r[Dd](b[Ub](a), b[Qb](a));
				r[Db](c, b[Ab](a))
			});
			for(var db = l, Da = 0, Ja = 0, ma = 0; Da < ta[B] || Ja < ia[B];) {
				var ra = 0,
					Aa = [];
				if(Ja >= ia[B])
					if(j) Aa[0] = ta[Da], ra = -1;
					else break;
				else if(Da >= ta[B])
					if(o) Aa[1] = ia[Ja], ra = 1;
					else break;
				else {
					Aa[0] = ta[Da];
					Aa[1] = ia[Ja];
					for(var H = 0; H < d[B]; H++) {
						var ra = a[A](Aa[0], d[H][0]),
							mu = b[A](Aa[1], d[H][1]),
							ra = google[E].datautils.compareValues(w[H], ra, mu);
						if(0 != ra) break
					}
				}
				if(db && 0 != ra) db = l, Ja++;
				else {
					if(-1 == ra && j || 1 == ra && o || 0 == ra) {
						r.addRow();
						var Oe, ec; - 1 == ra && j || 0 == ra && c != Al ? (Oe = a, ec = 0) : (Oe = b, ec = 1);
						co(d, function(a, b) {
							c == Li ? r[Ic](ma, b, Oe[A](Aa[ec],
								a[ec])) : r[jc](ma, b, Oe[A](Aa[ec], a[ec]), Oe[Fd](Aa[ec], a[ec]), Oe[Fc](Aa[ec], a[ec]))
						});
						if(-1 == ra && j || 0 == ra) {
							var nk = d[B];
							co(f, function(b, c) {
								r[jc](ma, c + nk, a[A](Aa[0], b), a[Fd](Aa[0], b), a[Fc](Aa[0], b))
							})
						}
						if(1 == ra && o || 0 == ra) nk = f[B] + d[B], co(h, function(a, c) {
							r[jc](ma, c + nk, b[A](Aa[1], a), b[Fd](Aa[1], a), b[Fc](Aa[1], a))
						});
						ma++
					}
					1 == ra ? Ja++ : Da++;
					0 == ra && (db = i)
				}
			}
			return r
		});
		m("google.visualization.data.max", function(a) {
			if(0 == a[B]) return k;
			for(var b = a[0], c = 1; c < a[B]; c++) {
				var d = a[c];
				d != k && d > b && (b = d)
			}
			return b
		});
		m("google.visualization.data.min", function(a) {
			if(0 == a[B]) return k;
			for(var b = a[0], c = 1; c < a[B]; c++) {
				var d = a[c];
				d != k && d < b && (b = d)
			}
			return b
		});
		m("google.visualization.data.month", function(a) {
			return a[Ac]() + 1
		});
		m("google.visualization.data.sum", Is);
		m("__gvizguard__", i);
		m("google.visualization.Query", dr);
		p(dr[D], wk, dr[D].makeRequest);
		p(dr[D], Pl, dr[D][fc]);
		p(dr[D], Ol, dr[D][$c]);
		p(dr[D], "send", dr[D][Jb]);
		p(dr[D], "setRefreshable", dr[D].setRefreshable);
		p(dr[D], "setTimeout", dr[D][Lc]);
		p(dr[D], "setHandlerType", dr[D].el);
		p(dr[D], "setHandlerParameter", dr[D].Ch);
		p(dr, "setResponse", mr);
		p(dr[D], kh, dr[D][Kc]);
		m("google.visualization.QueryResponse", Zq);
		p(Zq[D], Yi, Zq[D][tb]);
		p(Zq[D], "isError", Zq[D][Nb]);
		p(Zq[D], "hasWarning", Zq[D].hasWarning);
		p(Zq[D], "getReasons", Zq[D].getReasons);
		p(Zq[D], "getMessage", Zq[D].getMessage);
		p(Zq[D], "getDetailedMessage", Zq[D].getDetailedMessage);
		m("google.visualization.DataTable", V);
		p(V[D], "addColumn", V[D][Dd]);
		p(V[D], "addRow", V[D].addRow);
		p(V[D], "addRows", V[D][pc]);
		p(V[D], "clone", V[D][cd]);
		p(V[D], "getColumnId", V[D].getColumnId);
		p(V[D], Qi, V[D].getColumnIndex);
		p(V[D], Ri, V[D][Qb]);
		p(V[D], Si, V[D][Tc]);
		p(V[D], Ui, V[D][Qc]);
		p(V[D], Ti, V[D][Ab]);
		p(V[D], Vi, V[D].getColumnRange);
		p(V[D], "getColumnRole", V[D].getColumnRole);
		p(V[D], "getColumnType", V[D][Ub]);
		p(V[D], Zi, V[D].getDistinctValues);
		p(V[D], $i, V[D].getFilteredRows);
		p(V[D], aj, V[D][Fd]);
		p(V[D], bj, V[D][rb]);
		p(V[D], cj, V[D][Dc]);
		p(V[D], "getProperties", V[D][Fc]);
		p(V[D], "getProperty", V[D].getProperty);
		p(V[D], hj, V[D].getRowProperty);
		p(V[D], gj, V[D][cc]);
		p(V[D], "getSortedRows", V[D][Wb]);
		p(V[D], kj, V[D].getTableProperty);
		p(V[D], jj, V[D][dc]);
		p(V[D], "getValue", V[D][A]);
		p(V[D], "insertColumn", V[D].insertColumn);
		p(V[D], "insertRows", V[D].insertRows);
		p(V[D], "removeColumn", V[D].removeColumn);
		p(V[D], "removeColumns", V[D].removeColumns);
		p(V[D], "removeRow", V[D].removeRow);
		p(V[D], "removeRows", V[D].removeRows);
		p(V[D], "setCell", V[D][jc]);
		p(V[D], "setColumnLabel", V[D].setColumnLabel);
		p(V[D], "setColumnProperties", V[D][Db]);
		p(V[D], "setColumnProperty", V[D].setColumnProperty);
		p(V[D], "setFormattedValue", V[D].setFormattedValue);
		p(V[D], "setProperties", V[D].setProperties);
		p(V[D], "setProperty", V[D].setProperty);
		p(V[D], "setRowProperties", V[D].setRowProperties);
		p(V[D], "setRowProperty", V[D].setRowProperty);
		p(V[D], "setTableProperties", V[D].setTableProperties);
		p(V[D], "setTableProperty", V[D].setTableProperty);
		p(V[D], "setValue", V[D][Ic]);
		p(V[D], "sort", V[D].sort);
		p(V[D], km, V[D][Hc]);
		m("google.visualization.DataView", W);
		p(W, "fromJSON", function(a, b) {
			R(b) && (b = xn(b));
			var c = new W(a),
				d = b.columns,
				f = b[zd];
			P(d) && c[Md](d);
			P(f) && c.setRows(f);
			return c
		});
		p(W[D], "getColumnId", W[D].getColumnId);
		p(W[D], Qi, W[D].getColumnIndex);
		p(W[D], Ri, W[D][Qb]);
		p(W[D], Si, W[D][Tc]);
		p(W[D], Ui, W[D][Qc]);
		p(W[D], Ui, W[D][Qc]);
		p(W[D], Ti, W[D][Ab]);
		p(W[D], Vi, W[D].getColumnRange);
		p(W[D], "getColumnRole", W[D].getColumnRole);
		p(W[D], "getColumnType", W[D][Ub]);
		p(W[D], Zi, W[D].getDistinctValues);
		p(W[D], $i, W[D].getFilteredRows);
		p(W[D], aj, W[D][Fd]);
		p(W[D], bj, W[D][rb]);
		p(W[D], cj, W[D][Dc]);
		p(W[D], "getProperties", W[D][Fc]);
		p(W[D], "getProperty", W[D].getProperty);
		p(W[D], hj, W[D].getRowProperty);
		p(W[D], gj, W[D][cc]);
		p(W[D], "getSortedRows", W[D][Wb]);
		p(W[D], "getTableColumnIndex", W[D].getTableColumnIndex);
		p(W[D], "getUnderlyingTableColumnIndex", W[D].getUnderlyingTableColumnIndex);
		p(W[D], "getTableRowIndex", W[D][Zb]);
		p(W[D], "getUnderlyingTableRowIndex", W[D].getUnderlyingTableRowIndex);
		p(W[D], kj, W[D].getTableProperty);
		p(W[D], jj, W[D][dc]);
		p(W[D], "getValue", W[D][A]);
		p(W[D], "getViewColumnIndex", W[D].getViewColumnIndex);
		p(W[D], "getViewColumns", W[D].getViewColumns);
		p(W[D], "getViewRowIndex", W[D].getViewRowIndex);
		p(W[D], "getViewRows", W[D].getViewRows);
		p(W[D], "hideColumns", W[D].hideColumns);
		p(W[D], "hideRows", W[D].hideRows);
		p(W[D], "setColumns", W[D][Md]);
		p(W[D], "setRows", W[D].setRows);
		p(W[D], "toDataTable", W[D][Rb]);
		p(W[D], km, W[D][Hc]);
		m("google.visualization.GadgetHelper", nr);
		p(nr[D], "createQueryFromPrefs", nr[D].createQueryFromPrefs);
		p(nr[D], "validateResponse", nr[D].validateResponse);
		m("google.visualization.errors", X);
		p(X, "addError", X[Gc]);
		p(X, "removeAll", X[id]);
		p(X, "removeError", X.removeError);
		p(X, "addErrorFromQueryResponse", X.addErrorFromQueryResponse);
		p(X, "getContainer", X.getContainer);
		p(X, "createProtectedCallback", X.createProtectedCallback);
		m("google.visualization.events.addListener", function(a, b, c) {
			a = rr(a);
			b = hq(a, b, sr(c));
			return new tr(b)
		});
		m("google.visualization.events.trigger", function(a, b, c) {
			a = rr(a);
			b = new ur(b, c);
			rq(a, b)
		});
		m("google.visualization.events.removeListener", function(a) {
			a = a && bn(a.getKey) && a.getKey();
			return an(a) ? mq(a) : l
		});
		m("google.visualization.events.removeAllListeners", function(a) {
			var b = rr(a),
				b = oq(b);
			Tp(a.__eventTarget);
			a.__eventTarget = g;
			return b
		});
		m("google.visualization.QueryWrapper", vr);
		p(vr[D], Ml, vr[D][Vc]);
		p(vr[D], wi, vr[D][kd]);
		p(vr[D], "setCustomErrorHandler", vr[D].dl);
		p(vr[D], "sendAndDraw", vr[D].sendAndDraw);
		p(vr[D], "setCustomPostResponseHandler", vr[D].setCustomPostResponseHandler);
		p(vr[D], "setCustomResponseHandler", vr[D].setCustomResponseHandler);
		p(vr[D], kh, vr[D][Kc]);
		m("google.visualization.arrayToDataTable", function(a, b) {
			var c = new V,
				d, f, h;
			Q(a) || e(n("Not an array"));
			if(0 == a[B]) return c;
			Q(a[0]) || e(n(Cg));
			var j = a[0][B];
			for(d = 1; d < a[B]; d++)(!Q(a[d]) || a[d][B] != j) && e(n(Cg));
			var o = (d = !b) ? a[0] : [],
				r = d ? a[hb](1, a[B]) : a,
				w = [];
			for(f = 0; f < j; f++) {
				var C = M;
				for(d = 0; d < r[B]; d++)
					if(h = r[d][f], P(h)) {
						R(h) ? C = M : an(h) ? C = K : Q(h) ? C = im : typeof h == Ch ? C = Ch : (Zm(h) && e(n("Date and datetime column types are not supported")), e(n("Invalid value in " + d + ue + f)));
						break
					}
				w[f] = C
			}
			for(f = 0; f < j; f++) c[Dd](w[f], o[f]);
			c[pc](r);
			return c
		});
		m("google.visualization.datautils.compareValues", Qq);
	})();

	(function() {
		function h(a) {
			throw a;
		}
		var ba = void 0,
			k = !0,
			l = null,
			n = !1,
			ca = google_exportSymbol,
			da = window,
			ea = Number,
			fa = Object,
			p = Infinity,
			r = Error,
			ga = parseInt,
			ha = parseFloat,
			ia = isFinite,
			ja = document,
			ka = isNaN,
			la = google_exportProperty,
			ma = Array,
			s = Math;

		function oa(a, b) {
			return a.width = b
		}

		function pa(a, b) {
			return a.text = b
		}

		function qa(a, b) {
			return a.round = b
		}

		function ra(a, b) {
			return a.fontFamily = b
		}

		function sa(a, b) {
			return a.ceil = b
		}

		function ta(a, b) {
			return a.floor = b
		}

		function ua(a, b) {
			return a.stroked = b
		}

		function va(a, b) {
			return a.color = b
		}

		function wa(a, b) {
			return a.currentTarget = b
		}

		function xa(a, b) {
			return a.left = b
		}

		function ya(a, b) {
			return a.format = b
		}

		function za(a, b) {
			return a.keyCode = b
		}

		function Aa(a, b) {
			return a.type = b
		}

		function Ba(a, b) {
			return a.clear = b
		}

		function Ca(a, b) {
			return a.orientation = b
		}

		function Ea(a, b) {
			return a.getValue = b
		}

		function Fa(a, b) {
			return a.visibility = b
		}

		function Ga(a, b) {
			return a.length = b
		}

		function Ha(a, b) {
			return a.title = b
		}

		function Ia(a, b) {
			return a.position = b
		}

		function Ja(a, b) {
			return a.cursor = b
		}

		function Ka(a, b) {
			return a.className = b
		}

		function La(a, b) {
			return a.index = b
		}

		function Ma(a, b) {
			return a.next = b
		}

		function Na(a, b) {
			return a.fontSize = b
		}

		function Oa(a, b) {
			return a.clone = b
		}

		function Pa(a, b) {
			return a.target = b
		}

		function Qa(a, b) {
			return a.anchor = b
		}

		function Ra(a, b) {
			return a.bottom = b
		}

		function Sa(a, b) {
			return a.contains = b
		}

		function Ta(a, b) {
			return a.display = b
		}

		function Ua(a, b) {
			return a.height = b
		}

		function Va(a, b) {
			return a.right = b
		}
		var t = "appendChild",
			v = "push",
			Wa = "direction",
			Xa = "trigger",
			Ya = "getBoundingClientRect",
			Za = "test",
			$a = "relatedTarget",
			w = "width",
			x = "text",
			z = "round",
			ab = "slice",
			bb = "replace",
			cb = "nodeType",
			A = "data",
			db = "ceil",
			eb = "events",
			B = "floor",
			fb = "content",
			gb = "getElementById",
			hb = "concat",
			ib = "charAt",
			kb = "selected",
			lb = "createTextNode",
			mb = "getNumberOfColumns",
			nb = "value",
			ob = "preventDefault",
			pb = "item",
			qb = "targetTouches",
			rb = "move",
			sb = "indexOf",
			tb = "color",
			ub = "dispatchEvent",
			vb = "capture",
			C = "left",
			wb = "domain",
			xb = "screenX",
			yb = "screenY",
			zb = "format",
			Ab = "getBoxObjectFor",
			Bb = "createElement",
			Cb = "getColumnLabel",
			Db = "atan2",
			Eb = "keyCode",
			Fb = "getColumnType",
			Gb = "firstChild",
			Hb = "clientLeft",
			Ib = "sqrt",
			Jb = "getTableRowIndex",
			E = "setAttribute",
			Kb = "clientTop",
			Lb = "handleEvent",
			Mb = "path",
			Nb = "setSelection",
			F = "type",
			Ob = "parentWindow",
			Pb = "clear",
			Qb = "orientation",
			Rb = "defaultView",
			Sb = "name",
			H = "getValue",
			Tb = "NumberFormat",
			Ub = "contentWindow",
			Vb = "getTime",
			Wb = "clientX",
			Xb = "clientY",
			Yb = "documentElement",
			Zb = "substr",
			$b = "scrollTop",
			ac = "toString",
			bc = "bold",
			dc =
			"getNumberOfRows",
			I = "length",
			ec = "propertyIsEnumerable",
			J = "title",
			fc = "position",
			K = "prototype",
			gc = "cursor",
			hc = "size",
			ic = "index",
			jc = "setChartType",
			kc = "clientWidth",
			lc = "getSelection",
			mc = "setTimeout",
			nc = "document",
			oc = "next",
			pc = "ctrlKey",
			qc = "split",
			rc = "formatValue",
			sc = "constructor",
			tc = "stopPropagation",
			uc = "scope",
			vc = "rect",
			M = "fontSize",
			wc = "visualization",
			xc = "rotate",
			yc = "hasOwnProperty",
			zc = "style",
			Ac = "close",
			Bc = "body",
			Cc = "removeChild",
			Dc = "clone",
			Ec = "target",
			Fc = "dataType",
			Gc = "getUTCMonth",
			N = "call",
			Hc = "anchor",
			Ic = "removeAll",
			O = "start",
			Jc = "lastIndexOf",
			Kc = "draw",
			Lc = "getFullYear",
			Mc = "clientHeight",
			Nc = "scrollLeft",
			P = "bottom",
			Oc = "currentStyle",
			Pc = "documentMode",
			Qc = "setTime",
			Rc = "scale",
			Sc = "every",
			Tc = "contains",
			Uc = "apply",
			Vc = "tagName",
			Wc = "contentDocument",
			Xc = "getFormattedValue",
			Yc = "errors",
			Zc = "parentNode",
			$c = "areas",
			Q = "height",
			ad = "compact",
			bd = "splice",
			cd = "join",
			dd = "lineWidth",
			ed = "transform",
			fd = "toLowerCase",
			R = "right",
			S = "",
			gd = "\n",
			hd = "\u000b",
			id = " ",
			jd = " (",
			kd = " - ",
			ld = " / ",
			md = " [",
			nd = " _loaded = true;",
			od = ' name="',
			pd = ' onload="CHART_loaded()"',
			qd = ' type="',
			rd = ' xmlns:svg="http://www.w3.org/2000/svg"',
			sd = ' xmlns:xlink="http://www.w3.org/1999/xlink">',
			td = '"',
			ud = "#",
			vd = "#$1$1$2$2$3$3",
			wd = "#000020",
			xd = "#666666",
			yd = "#7993ad",
			zd = "#7f9a6b",
			Ad = "#8080ff",
			Bd = "#9bbdde",
			Cd = "#a2c488",
			Dd = "#a992ad",
			Ed = "#ad7d79",
			Fd = "#aea971",
			Gd = "#c991ff",
			Hd = "#ccc",
			Id = "#cdc785",
			Jd = "#ce9839",
			Kd = "#d2feb0",
			Ld = "#d6b9db",
			Md = "#dea19b",
			Nd = "#e0e0e0",
			Od = "#eeee5b",
			Pd = "#eeeeac",
			Qd = "#ffbc46",
			Rd = "#ffd1c9",
			Sd = "#fff",
			Td = "#fff0db",
			Ud = "#ffffff",
			Vd = "#gridline#",
			Wd = "#label#",
			Xd = "#title",
			Yd = "%",
			Zd = "&",
			$d = "&amp;",
			ae = "&gt;",
			be = "&lt;",
			ce = "&quot;",
			de = "(",
			ee = "(\\d*)(\\D*)",
			fe = ")",
			ge = ",",
			he = ",\n",
			ie = ", ",
			je = ",0,",
			ke = "-",
			le = "-200px",
			me = ".",
			ne = "...",
			oe = ".color",
			pe = ".enableInteractivity",
			qe = ".gif",
			re = ".hole",
			se = ".offset",
			te = ".style",
			ue = ".textStyle",
			ve = ".type",
			we = ".visibleInLegend",
			xe = "/",
			ye = "/core/patterns/",
			ze = "/static/modules/gviz/",
			Ae = "0",
			Be = "0 0",
			Ce = "0 0 4 4",
			De = "0%",
			Ee = "00",
			Fe = "000",
			Ge = "1",
			He = "1.0",
			Ie = "1.8",
			Je = "1.9",
			Ke = "100%",
			Le = "1px",
			Me = "1px solid infotext",
			Ne = "2",
			Oe = "4",
			Pe = "420+",
			Qe = "5.5",
			Re = "500",
			Se = "636363",
			Te = "6c6c6c",
			Ue = "8",
			Ve = "9",
			We = "9.0",
			Xe = "9e9e9e",
			Ye = ":",
			Ze = "<",
			$e = "</body>",
			af = "</head>",
			bf = "</html>",
			cf = "<\/script>",
			df = '<?xml version="1.0"?>',
			ef = '<body marginwidth="0" marginheight="0"',
			ff = '<div id="chartArea"></div>',
			gf = "<head>",
			hf = '<html xmlns:v="urn:scheman-microsoft-com:vml">',
			jf = '<html xmlns="http://www.w3.org/1999/xhtml"',
			kf = '<script type="text/javascript">',
			lf = "<style> v\\:* { behavior:url(#default#VML);}</style>",
			mf = ">",
			nf = "@",
			of = "A",
			pf = "AT",
			qf = "AreaChart",
			rf = "B",
			sf = "BODY",
			tf = "C",
			uf = "CSS1Compat",
			vf = "ComboChart",
			wf = "DAY",
			xf = "Date(",
			yf = "Drawing_Frame_",
			zf = "E",
			Af = "HH:mm",
			Bf = "HH:mm:ss",
			Cf = "HOUR",
			Df = "HTML",
			Ef = "IFRAME",
			Ff = "Invalid listener argument",
			Gf = "L",
			Hf = "LineChart",
			If = "M",
			Jf = "MILLISECOND",
			Kf = "MINUTE",
			Mf = "MONTH",
			Nf = "No data",
			Of = "Other",
			Pf = "Q",
			Qf = "Q yyyy",
			Rf = "QUARTER",
			Sf = "SECOND",
			Tf = "ScatterChart",
			Uf = "Style",
			Vf = "T",
			Wf = "TR",
			Xf = "WA",
			Yf = "WEEK",
			Zf = "Width",
			$f = "X",
			ag = "YEAR",
			bg = "Z",
			cg = "[",
			dg = "[object Array]",
			eg = "[object Function]",
			fg =
			"[object Window]",
			gg = "\\u",
			hg = "]",
			ig = "_",
			jg = "_ABSTRACT_RENDERER_ID_",
			kg = "_default_",
			lg = "absolute",
			mg = "angle",
			ng = "animation.duration",
			og = "animation.easing",
			pg = "animationEasing",
			qg = "animationfinish",
			rg = "annotation",
			sg = "annotation.",
			tg = "annotationClick",
			ug = "annotationHoverIn",
			vg = "annotationHoverOut",
			wg = "annotations.domainTextStyle",
			xg = "annotations.stemColor",
			yg = "annotations.style",
			zg = "annotations.textStyle",
			Ag = "annotationtext",
			Bg = "arc",
			Cg = "area",
			Dg = "areaOpacity",
			Eg = "aria-",
			Fg = "array",
			Gg = "attachToEnd",
			Hg = "attachToStart",
			Ig = "axisBackgroundColor",
			Jg = "axisTitlesPosition",
			Kg = "axistick",
			Lg = "axistitle",
			Mg = "backgroundColor",
			Ng = "bar",
			Og = "barWidth",
			Pg = "bars",
			Qg = "baseline",
			Rg = "baselineColor",
			Sg = "beforehide",
			Tg = "beforeshow",
			Ug = "black",
			Vg = "block",
			Wg = "blur",
			Xg = "bold",
			Yg = "boolean",
			Zg = "border-box",
			$g = "borderBottom",
			ah = "borderBottomWidth",
			bh = "borderLeft",
			dh = "borderLeftWidth",
			eh = "borderRight",
			fh = "borderRightWidth",
			gh = "borderTop",
			hh = "borderTopWidth",
			ih = "both",
			jh = "bottom",
			kh = "bottom-space",
			lh = "bound",
			mh = "boxWidth",
			nh = "boxes",
			oh = "bubble",
			ph = "bubble.opacity",
			qh = "bubble.strokeColor",
			rh = "bubble.textStyle",
			sh = "bubbles",
			th = "call",
			uh = "callee",
			vh = "candlestick",
			wh = "candlesticks",
			xh = "category",
			yh = "categoryClick",
			zh = "categoryHoverIn",
			Ah = "categoryHoverOut",
			Bh = "categorypoint",
			Ch = "ceil",
			Dh = "cell",
			Eh = "center",
			Fh = "chart",
			Gh = "chartArea",
			Hh = "chartArea.height",
			Ih = "chartArea.left",
			Jh = "chartArea.top",
			Kh = "chartArea.width",
			Lh = "chartClick",
			Mh = "chartOptions",
			Nh = "chartType",
			Oh = "chartarea",
			Ph = "circle",
			Qh = "class",
			Rh = "click",
			Sh = "clip-path",
			Th = "clipPath",
			Uh = "clipped",
			Vh = "close",
			Wh = "closedPhase",
			Xh = "col-resize",
			Yh = "color",
			Zh = "color2",
			$h = "colorAxis.colors",
			ai = "colorAxis.maxValue",
			bi = "colorAxis.minValue",
			ci = "colorAxis.values",
			di = "colorAxis.values must not contain nulls",
			ei = "colors",
			fi = "column",
			gi = "columns",
			hi = "connectSteps",
			ii = "contextmenu",
			ji = "curve",
			ki = "curveType",
			li = "cx",
			mi = "cy",
			ni = "d",
			oi = "dash",
			pi = "data",
			qi = "dataType",
			ri = "datum",
			si = "datumClick",
			ti = "datumHoverIn",
			ui = "datumHoverOut",
			vi = "dd MM y",
			wi = "dd MMM y HH:mm:ss",
			xi = "deactivate",
			yi = "default",
			zi = "defs",
			Ai = "direction",
			Bi = "display",
			Ci = "displayTinySlicesInLenged",
			Di = "div",
			Ei = "dive",
			Fi = "domain",
			Gi = "domainAxis",
			Hi = "draw",
			Ii = "e",
			Ji = "easing",
			Ki = "ellipse",
			Li = "emptyString",
			Mi = "enableInteractivity",
			Ni = "end",
			Oi = "error",
			Pi = "explicit",
			Qi = "false",
			Ri = "fill",
			Si = "fill-opacity",
			Ti = "fillOpacity",
			Ui = "firstVisibleText",
			Vi = "fixed",
			Wi = "floor",
			Xi = "focus",
			Yi = "focusTarget",
			Zi = "font-family",
			$i = "font-size",
			aj = "font-style",
			bj = "font-weight",
			cj = "fontName",
			dj = "fontSize",
			ej = "for",
			fj = "format",
			gj = "formatOptions",
			hj = "formatOptions.scaleFactor",
			ij = "formatter.numDecimals",
			jj = "formatter.numSignificantDigits",
			kj = "formatter.unit",
			lj = "formatter.useMagnitudes",
			T = "function",
			mj = "function CHART_loaded() {",
			nj = "g",
			oj = "get",
			pj = "getSelection",
			qj = "google.loader.GoogleApisBase",
			rj = "google.visualization.Version",
			sj = "gradient",
			tj = "gradientUnits",
			uj = "gridline",
			vj = "gridlineColor",
			wj = "gridlines.color",
			xj = "gridlines.count",
			yj = "hAxes.",
			zj = "hAxis",
			Aj = "hAxis#",
			Bj = "height",
			Cj = "hex",
			Dj = "hidden",
			Ej = "hide",
			Fj = "high",
			Gj = "horizontal",
			Hj = "hover",
			Ij = "hovercard",
			Jj = "http://ajax.googleapis.com/ajax",
			Kj = "http://www.w3.org/1999/xhtml",
			Lj = "http://www.w3.org/2000/svg",
			Mj = "id",
			Nj = "iframe",
			Oj = "image/svg+xml",
			Pj = "in",
			Qj = "inAndOut",
			Rj = "inTextPosition",
			Sj = "infobackground",
			Tj = "inline",
			Uj = "inside",
			Vj = "interactivityModel",
			Wj = "interpolateNulls",
			Xj = "interval",
			Yj = "interval.",
			Zj = "intervals.",
			$j = "is3D",
			ak = "isStacked",
			bk = "italic",
			ck = "keydown",
			dk = "keypress",
			ek = "label",
			fk = "labelInLegend",
			gk = "labeled",
			hk = "left",
			ik = "legend",
			jk = "legend#entry#",
			kk = "legend.labeledValueText",
			lk = "legend.maxLines",
			mk = "legend.pagingTextStyle",
			nk = "legend.position",
			ok = "legend.scrollArrows.activeColor",
			pk = "legend.scrollArrows.inactiveColor",
			qk = "legend.scrollArrows.orientation",
			rk = "legend.showPageIndex",
			sk = "legend.textStyle",
			tk = "legendEntryClick",
			uk = "legendEntryHoverIn",
			vk = "legendEntryHoverOut",
			wk = "legendFontSize",
			xk = "legendScrollButtonClick",
			yk = "legendTextColor",
			zk = "legendTextStyle",
			Ak = "line",
			Bk = "lineSize",
			Ck = "lineWidth",
			Dk = "linear",
			Ek = "linearGradient",
			Fk = "log",
			Gk = "logScale",
			Hk = "logScaleX",
			Ik = "low",
			Jk = "majorAxisTextColor",
			Kk = "max",
			Lk = "maxAlternation",
			Mk = "maxValue",
			Nk = "maximized",
			Ok = "middle",
			Pk = "min",
			Qk = "minRangeSize",
			Rk = "minValue",
			Sk = "minorAxisTextColor",
			Tk = "mirrorLog",
			Uk = "mousedown",
			Vk = "mousemove",
			Wk = "mouseout",
			Xk = "mouseover",
			Yk = "mouseup",
			Zk = "move",
			$k = "move_offscreen",
			al = "named",
			bl = "native code",
			cl = "new ",
			dl = "no",
			U = "none",
			el = "nowrap",
			fl = "null",
			gl = "number",
			hl = "o",
			il = "object",
			jl = "offset",
			kl = "on",
			ll = "onmouseout",
			ml = "onmouseover",
			nl = "orientation",
			ol = "out",
			pl = "outTextPosition",
			ql = "outside",
			sl = "overflow",
			tl = "paddingBottom",
			ul = "paddingLeft",
			vl = "paddingRight",
			wl = "paddingTop",
			xl = "path",
			yl = "pathinterval",
			zl = "pattern",
			Al = "patternUnits",
			Bl = "percentage",
			Cl = "phase",
			Dl = "pie",
			El = "pieHole",
			Fl = "pieResidueSliceColor",
			Gl = "pieResidueSliceLabel",
			Hl = "pieSliceBorderColor",
			Il = "pieSliceText",
			Jl = "pieSliceTextStyle",
			Kl = "pixelLeft",
			Ll = "point",
			Ml = "pointSize",
			Nl = "points",
			Ol = "pointsensitivityarea",
			Pl = "position",
			Ql = "position: absolute; top: 0; left: 0; z-index: 1;",
			Rl = "position:absolute;display:none;",
			Sl = "pretty",
			Tl = "primarydiagonalstripes",
			Ul = "px",
			Vl = "r",
			Wl = "rangeChangeEventFiringRate",
			Xl = "rangechange",
			Yl = "ready",
			Zl = "rect",
			$l = "rect(",
			am = "relative",
			bm = "removeSerieButtonClick",
			cm = "removeserie",
			dm = "reset",
			em = "reverseAxis",
			fm = "reverseCategories",
			gm = "rgb",
			hm = "right",
			im = "right-space",
			jm = "role",
			km = "rotate(",
			lm = "round",
			mm = "row",
			nm = "rtl",
			om = "rx",
			pm = "ry",
			qm = "scaleType",
			rm = "scatter",
			sm = "screen",
			tm = "select",
			um = "selectionMode",
			vm = "serieClick",
			wm = "serieHoverIn",
			xm = "serieHoverOut",
			ym = "series",
			zm = "series-color",
			Am = "series-color-dark",
			Bm = "series-color-light",
			Cm = "series.",
			Dm = "seriesType",
			Em = "set",
			Fm = "setSelection",
			Gm = "shortBarWidth",
			Hm = "shortdash",
			Im = "show",
			Jm = "showRemoveSeriesButton",
			Km = "showTextEvery",
			Lm = "showTextEveryMode",
			Mm = "single",
			Nm = "sizeAxis.logScale",
			Om = "sizeAxis.maxSize",
			Pm = "sizeAxis.maxValue",
			Qm = "sizeAxis.minSize",
			Rm = "sizeAxis.minValue",
			Sm = "sizeAxis.scaleType",
			Tm = "slantedText",
			Um = "slantedTextAngle",
			Vm = "slice",
			Wm = "sliceVisibilityThreshold",
			Xm = "slices.",
			Ym = "smoothingFactor",
			Zm = "snapToData",
			$m = "solid",
			an = "sortBubblesBySize",
			bn = "sparkline",
			cn = "splice",
			dn = "square",
			en = "src",
			fn = "start",
			gn = "static",
			hn = "steppedArea",
			jn = "steppedareabar",
			kn = "sticks",
			ln = "stop",
			mn = "stop-color:",
			nn = "stopDomEventPropagation",
			on = "strictFirstColumnType",
			pn = "string",
			qn = "stroke",
			rn = "stroke-dasharray",
			sn = "stroke-linecap",
			tn = "stroke-opacity",
			un = "stroke-width",
			vn = "style",
			wn = "svg",
			xn = "targetAxes.",
			yn = "targetAxis",
			zn = "targetAxisIndex",
			An = "text",
			Bn = "text-anchor",
			Cn = "text-decoration",
			Dn = "textColor",
			En = "textContent",
			Fn = "textFontSize",
			Gn = "textPosition",
			Hn = "textStyle",
			In = "textpathok",
			Jn = "tick",
			Kn = "tickScoringWeights",
			Ln = "ticks",
			Mn = "timeGranularity",
			Nn = "title",
			On = "titleColor",
			Pn = "titleFontSize",
			Qn = "titlePosition",
			Rn = "titleTextStyle",
			Sn = "titleX",
			Tn = "titleY",
			Un = "toggle_display",
			Vn = "tooltip",
			Wn = "tooltip.showColorCode",
			Xn = "tooltip.text",
			Yn = "tooltip.textStyle",
			Zn = "tooltip.trigger",
			$n = "tooltipClick",
			ao = "tooltipFontSize",
			bo = "tooltipHoverIn",
			co = "tooltipHoverOut",
			eo = "tooltipText",
			fo = "tooltipTextColor",
			go = "tooltipTextStyle",
			ho = "tooltipTrigger",
			io = "top",
			jo = "top-space",
			ko =
			"transform",
			lo = "translate(",
			mo = "transparent",
			no = "trigger",
			oo = "true",
			po = "type",
			qo = "unbound",
			ro = "underline",
			so = "url(#",
			to = "userSpaceOnUse",
			uo = "v",
			vo = "v-text-align",
			wo = "v:fill",
			xo = "v:group",
			yo = "v:oval",
			zo = "v:path",
			Ao = "v:rect",
			Bo = "v:shape",
			Co = "v:stroke",
			Do = "v:textpath",
			Eo = "vAxes.",
			Fo = "vAxis",
			Go = "vAxis#",
			Ho = "value",
			Io = "valueFormatter",
			Jo = "var _loaded = false;",
			Ko = "vertical",
			Lo = "viewBox",
			Mo = "viewWindow.max",
			No = "viewWindow.min",
			Oo = "viewWindowMode",
			Po = "visible",
			Qo = "visibleInLegend",
			Ro = "warning",
			So = "white",
			To = "width",
			Uo = "window.event",
			Vo = "x",
			Wo = "x1",
			Xo = "x2",
			Yo = "y",
			Zo = "y1",
			$o = "y2",
			ap = "zOrder",
			bp = "{",
			cp = "}",
			V, dp = this;

		function ep(a, b) {
			for(var c = a[qc](me), d = b || dp, e; e = c.shift();)
				if(W(d[e])) d = d[e];
				else return l;
			return d
		}

		function fp() {}

		function gp(a) {
			var b = typeof a;
			if(b == il)
				if(a) {
					if(a instanceof ma) return Fg;
					if(a instanceof fa) return b;
					var c = fa[K][ac][N](a);
					if(c == fg) return il;
					if(c == dg || typeof a[I] == gl && "undefined" != typeof a[bd] && "undefined" != typeof a[ec] && !a[ec](cn)) return Fg;
					if(c == eg || "undefined" != typeof a[N] && "undefined" != typeof a[ec] && !a[ec](th)) return T
				} else return fl;
			else if(b == T && "undefined" == typeof a[N]) return il;
			return b
		}

		function hp(a) {
			return a !== ba
		}

		function ip(a) {
			return a === l
		}

		function W(a) {
			return a != l
		}

		function jp(a) {
			return gp(a) == Fg
		}

		function kp(a) {
			var b = gp(a);
			return b == Fg || b == il && typeof a[I] == gl
		}

		function lp(a) {
			return mp(a) && typeof a[Lc] == T
		}

		function np(a) {
			return typeof a == pn
		}

		function op(a) {
			return typeof a == gl
		}

		function pp(a) {
			return gp(a) == T
		}

		function mp(a) {
			a = gp(a);
			return a == il || a == Fg || a == T
		}

		function qp(a) {
			return a[rp] || (a[rp] = ++sp)
		}
		var rp = "closure_uid_" + s[B](2147483648 * s.random())[ac](36),
			sp = 0;

		function tp(a, b, c) {
			return a[N][Uc](a.bind, arguments)
		}

		function up(a, b, c) {
			a || h(r());
			if(2 < arguments[I]) {
				var d = ma[K][ab][N](arguments, 2);
				return function() {
					var c = ma[K][ab][N](arguments);
					ma[K].unshift[Uc](c, d);
					return a[Uc](b, c)
				}
			}
			return function() {
				return a[Uc](b, arguments)
			}
		}

		function Z(a, b, c) {
			Z = Function[K].bind && -1 != Function[K].bind[ac]()[sb](bl) ? tp : up;
			return Z[Uc](l, arguments)
		}

		function vp(a, b) {
			var c = ma[K][ab][N](arguments, 1);
			return function() {
				var b = ma[K][ab][N](arguments);
				b.unshift[Uc](b, c);
				return a[Uc](this, b)
			}
		}
		var wp = Date.now || function() {
			return +new Date
		};

		function xp(a, b) {
			function c() {}
			c.prototype = b[K];
			a.Pb = b[K];
			a.prototype = new c;
			a[K].constructor = a
		};

		function yp(a) {
			return a[bb](/^[\s\xa0]+|[\s\xa0]+$/g, S)
		}

		function zp(a, b) {
			if(b) return a[bb](Ap, $d)[bb](Bp, be)[bb](Cp, ae)[bb](Dp, ce);
			if(!Ep[Za](a)) return a; - 1 != a[sb](Zd) && (a = a[bb](Ap, $d)); - 1 != a[sb](Ze) && (a = a[bb](Bp, be)); - 1 != a[sb](mf) && (a = a[bb](Cp, ae)); - 1 != a[sb](td) && (a = a[bb](Dp, ce));
			return a
		}
		var Ap = /&/g,
			Bp = /</g,
			Cp = />/g,
			Dp = /\"/g,
			Ep = /[&<>\"]/;

		function Fp(a, b) {
			for(var c = 0, d = yp(S + a)[qc](me), e = yp(S + b)[qc](me), f = s.max(d[I], e[I]), g = 0; 0 == c && g < f; g++) {
				var i = d[g] || S,
					j = e[g] || S,
					m = RegExp(ee, nj),
					o = RegExp(ee, nj);
				do {
					var q = m.exec(i) || [S, S, S],
						u = o.exec(j) || [S, S, S];
					if(0 == q[0][I] && 0 == u[0][I]) break;
					c = ((0 == q[1][I] ? 0 : ga(q[1], 10)) < (0 == u[1][I] ? 0 : ga(u[1], 10)) ? -1 : (0 == q[1][I] ? 0 : ga(q[1], 10)) > (0 == u[1][I] ? 0 : ga(u[1], 10)) ? 1 : 0) || ((0 == q[2][I]) < (0 == u[2][I]) ? -1 : (0 == q[2][I]) > (0 == u[2][I]) ? 1 : 0) || (q[2] < u[2] ? -1 : q[2] > u[2] ? 1 : 0)
				} while (0 == c)
			}
			return c
		}

		function Gp(a) {
			var b = ea(a);
			return 0 == b && /^[\s\xa0]*$/ [Za](a) ? NaN : b
		}
		var Hp = {};

		function Ip(a) {
			return Hp[a] || (Hp[a] = (S + a)[bb](/\-([a-z])/g, function(a, c) {
				return c.toUpperCase()
			}))
		};

		function Jp(a) {
			return a[a[I] - 1]
		}
		var Kp = ma[K],
			Lp = Kp[sb] ? function(a, b, c) {
				return Kp[sb][N](a, b, c)
			} : function(a, b, c) {
				c = c == l ? 0 : 0 > c ? s.max(0, a[I] + c) : c;
				if(np(a)) return !np(b) || 1 != b[I] ? -1 : a[sb](b, c);
				for(; c < a[I]; c++)
					if(c in a && a[c] === b) return c;
				return -1
			},
			Mp = Kp.forEach ? function(a, b, c) {
				Kp.forEach[N](a, b, c)
			} : function(a, b, c) {
				for(var d = a[I], e = np(a) ? a[qc](S) : a, f = 0; f < d; f++) f in e && b[N](c, e[f], f, a)
			},
			Np = Kp.filter ? function(a, b, c) {
				return Kp.filter[N](a, b, c)
			} : function(a, b, c) {
				for(var d = a[I], e = [], f = 0, g = np(a) ? a[qc](S) : a, i = 0; i < d; i++)
					if(i in g) {
						var j = g[i];
						b[N](c, j, i, a) && (e[f++] = j)
					}
				return e
			},
			Op = Kp.map ? function(a, b, c) {
				return Kp.map[N](a, b, c)
			} : function(a, b, c) {
				for(var d = a[I], e = ma(d), f = np(a) ? a[qc](S) : a, g = 0; g < d; g++) g in f && (e[g] = b[N](c, f[g], g, a));
				return e
			};

		function Pp(a, b, c, d) {
			if(a.reduce) return d ? a.reduce(Z(b, d), c) : a.reduce(b, c);
			var e = c;
			Mp(a, function(c, g) {
				e = b[N](d, e, c, g, a)
			});
			return e
		}
		var Qp = Kp[Sc] ? function(a, b, c) {
			return Kp[Sc][N](a, b, c)
		} : function(a, b, c) {
			for(var d = a[I], e = np(a) ? a[qc](S) : a, f = 0; f < d; f++)
				if(f in e && !b[N](c, e[f], f, a)) return n;
			return k
		};

		function Rp(a, b, c) {
			b = Tp(a, b, c);
			return 0 > b ? l : np(a) ? a[ib](b) : a[b]
		}

		function Tp(a, b, c) {
			for(var d = a[I], e = np(a) ? a[qc](S) : a, f = 0; f < d; f++)
				if(f in e && b[N](c, e[f], f, a)) return f;
			return -1
		}

		function Up(a, b, c) {
			a: {
				for(var d = np(a) ? a[qc](S) : a, e = a[I] - 1; 0 <= e; e--)
					if(e in d && b[N](c, d[e], e, a)) {
						b = e;
						break a
					}
				b = -1
			}
			return 0 > b ? l : np(a) ? a[ib](b) : a[b]
		}

		function Vp(a) {
			if(!jp(a))
				for(var b = a[I] - 1; 0 <= b; b--) delete a[b];
			Ga(a, 0)
		}

		function Wp(a, b) {
			var c = Lp(a, b),
				d;
			(d = 0 <= c) && Kp[bd][N](a, c, 1);
			return d
		}

		function Xp(a) {
			return Kp[hb][Uc](Kp, arguments)
		}

		function Yp(a) {
			if(jp(a)) return Xp(a);
			for(var b = [], c = 0, d = a[I]; c < d; c++) b[c] = a[c];
			return b
		}

		function Zp(a, b) {
			for(var c = 1; c < arguments[I]; c++) {
				var d = arguments[c],
					e;
				if(jp(d) || (e = kp(d)) && d[yc](uh)) a[v][Uc](a, d);
				else if(e)
					for(var f = a[I], g = d[I], i = 0; i < g; i++) a[f + i] = d[i];
				else a[v](d)
			}
		}

		function $p(a, b, c) {
			return 2 >= arguments[I] ? Kp[ab][N](a, b) : Kp[ab][N](a, b, c)
		}

		function aq(a, b) {
			for(var c = b || a, d = {}, e = 0, f = 0; f < a[I];) {
				var g = a[f++],
					i = mp(g) ? hl + qp(g) : (typeof g)[ib](0) + g;
				fa[K][yc][N](d, i) || (d[i] = k, c[e++] = g)
			}
			Ga(c, e)
		}

		function bq(a, b) {
			Kp.sort[N](a, b || cq)
		}

		function dq(a, b) {
			for(var c = 0; c < a[I]; c++) a[c] = {
				index: c,
				value: a[c]
			};
			var d = b || cq;
			bq(a, function(a, b) {
				return d(a[nb], b[nb]) || a[ic] - b[ic]
			});
			for(c = 0; c < a[I]; c++) a[c] = a[c][nb]
		}

		function eq(a, b, c) {
			if(!kp(a) || !kp(b) || a[I] != b[I]) return n;
			for(var d = a[I], c = c || fq, e = 0; e < d; e++)
				if(!c(a[e], b[e])) return n;
			return k
		}

		function cq(a, b) {
			return a > b ? 1 : a < b ? -1 : 0
		}

		function fq(a, b) {
			return a === b
		}

		function gq(a, b) {
			for(var c = [], d = 0; d < b; d++) c[d] = a;
			return c
		}

		function hq(a) {
			if(!arguments[I]) return [];
			for(var b = [], c = 0;; c++) {
				for(var d = [], e = 0; e < arguments[I]; e++) {
					var f = arguments[e];
					if(c >= f[I]) return b;
					d[v](f[c])
				}
				b[v](d)
			}
		};

		function $(a, b) {
			this.x = hp(a) ? a : 0;
			this.y = hp(b) ? b : 0
		}
		Oa($[K], function() {
			return new $(this.x, this.y)
		});

		function iq(a, b) {
			return a == b ? k : !a || !b ? n : a.x == b.x && a.y == b.y
		}

		function jq(a, b) {
			return new $(a.x - b.x, a.y - b.y)
		}

		function kq(a, b) {
			return new $(a.x + b.x, a.y + b.y)
		};

		function lq(a, b) {
			oa(this, a);
			Ua(this, b)
		}
		V = lq[K];
		Oa(V, function() {
			return new lq(this[w], this[Q])
		});
		V.pb = function() {
			return this[w] * this[Q]
		};
		sa(V, function() {
			oa(this, s[db](this[w]));
			Ua(this, s[db](this[Q]));
			return this
		});
		ta(V, function() {
			oa(this, s[B](this[w]));
			Ua(this, s[B](this[Q]));
			return this
		});
		qa(V, function() {
			oa(this, s[z](this[w]));
			Ua(this, s[z](this[Q]));
			return this
		});
		V.scale = function(a) {
			oa(this, this[w] * a);
			Ua(this, this[Q] * a);
			return this
		};

		function mq(a, b, c) {
			for(var d in a) b[N](c, a[d], d, a)
		}

		function nq(a, b, c) {
			var d = {},
				e;
			for(e in a) d[e] = b[N](c, a[e], e, a);
			return d
		}

		function oq(a, b, c) {
			for(var d in a)
				if(!b[N](c, a[d], d, a)) return n;
			return k
		}

		function pq(a) {
			var b = [],
				c = 0,
				d;
			for(d in a) b[c++] = a[d];
			return b
		}

		function qq(a) {
			var b = [],
				c = 0,
				d;
			for(d in a) b[c++] = d;
			return b
		}

		function rq(a, b) {
			for(var c in a)
				if(a[c] == b) return k;
			return n
		}

		function sq(a) {
			var b = {},
				c;
			for(c in a) b[c] = a[c];
			return b
		}

		function tq(a) {
			var b = gp(a);
			if(b == il || b == Fg) {
				if(a[Dc]) return a[Dc]();
				var b = b == Fg ? [] : {},
					c;
				for(c in a) b[c] = tq(a[c]);
				return b
			}
			return a
		}
		var uq = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");

		function vq(a, b) {
			for(var c, d, e = 1; e < arguments[I]; e++) {
				d = arguments[e];
				for(c in d) a[c] = d[c];
				for(var f = 0; f < uq[I]; f++) c = uq[f], fa[K][yc][N](d, c) && (a[c] = d[c])
			}
		};
		var wq, xq, yq, zq, Aq, Bq;

		function Cq() {
			return dp.navigator ? dp.navigator.userAgent : l
		}

		function Dq() {
			return dp.navigator
		}
		Aq = zq = yq = xq = wq = n;
		var Eq;
		if(Eq = Cq()) {
			var Fq = Dq();
			wq = 0 == Eq[sb]("Opera");
			xq = !wq && -1 != Eq[sb]("MSIE");
			zq = (yq = !wq && -1 != Eq[sb]("WebKit")) && -1 != Eq[sb]("Mobile");
			Aq = !wq && !yq && "Gecko" == Fq.product
		}
		var Gq = wq,
			Hq = xq,
			Iq = Aq,
			Jq = yq,
			Kq = zq,
			Lq = Dq();
		Bq = -1 != (Lq && Lq.platform || S)[sb]("Mac");
		var Mq = !!Dq() && -1 != (Dq().appVersion || S)[sb]("X11"),
			Nq;
		a: {
			var Oq = S,
				Pq;
			if(Gq && dp.opera) var Qq = dp.opera.version,
				Oq = typeof Qq == T ? Qq() : Qq;
			else if(Iq ? Pq = /rv\:([^\);]+)(\)|;)/ : Hq ? Pq = /MSIE\s+([^\);]+)(\)|;)/ : Jq && (Pq = /WebKit\/(\S+)/), Pq) var Rq = Pq.exec(Cq()),
				Oq = Rq ? Rq[1] : S;
			if(Hq) {
				var Sq, Tq = dp[nc];
				Sq = Tq ? Tq[Pc] : ba;
				if(Sq > ha(Oq)) {
					Nq = S + Sq;
					break a
				}
			}
			Nq = Oq
		}
		var Uq = Nq,
			Vq = {};

		function Wq(a) {
			return Vq[a] || (Vq[a] = 0 <= Fp(Uq, a))
		}
		var Xq = {};

		function Yq(a) {
			return Xq[a] || (Xq[a] = Hq && ja[Pc] && ja[Pc] >= a)
		};
		var Zq, $q = !Hq || Yq(9);
		!Iq && !Hq || Hq && Yq(9) || Iq && Wq("1.9.1");
		Hq && Wq(Ve);

		function ar(a, b) {
			var c;
			c = (c = a.className) && typeof c[qc] == T ? c[qc](/\s+/) : [];
			var d = $p(arguments, 1),
				e;
			e = c;
			for(var f = 0, g = 0; g < d[I]; g++) 0 <= Lp(e, d[g]) || (e[v](d[g]), f++);
			e = f == d[I];
			Ka(a, c[cd](id));
			return e
		};

		function br(a) {
			return a ? new cr(dr(a)) : Zq || (Zq = new cr)
		}

		function er(a, b) {
			mq(b, function(b, d) {
				d == vn ? a[zc].cssText = b : d == Qh ? Ka(a, b) : d == ej ? a.htmlFor = b : d in fr ? a[E](fr[d], b) : 0 == d[Jc](Eg, 0) ? a[E](d, b) : a[d] = b
			})
		}
		var fr = {
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			colspan: "colSpan",
			rowspan: "rowSpan",
			valign: "vAlign",
			height: Bj,
			width: To,
			usemap: "useMap",
			frameborder: "frameBorder",
			maxlength: "maxLength",
			type: po
		};

		function gr(a, b, c) {
			return hr(ja, arguments)
		}

		function hr(a, b) {
			var c = b[0],
				d = b[1];
			if(!$q && d && (d[Sb] || d[F])) {
				c = [Ze, c];
				d[Sb] && c[v](od, zp(d[Sb]), td);
				if(d[F]) {
					c[v](qd, zp(d[F]), td);
					var e = {};
					vq(e, d);
					d = e;
					delete d[F]
				}
				c[v](mf);
				c = c[cd](S)
			}
			c = a[Bb](c);
			d && (np(d) ? Ka(c, d) : jp(d) ? ar[Uc](l, [c][hb](d)) : er(c, d));
			2 < b[I] && ir(a, c, b, 2);
			return c
		}

		function ir(a, b, c, d) {
			function e(c) {
				c && b[t](np(c) ? a[lb](c) : c)
			}
			for(; d < c[I]; d++) {
				var f = c[d];
				kp(f) && !(mp(f) && 0 < f[cb]) ? Mp(jr(f) ? Yp(f) : f, e) : e(f)
			}
		}

		function kr(a) {
			return a.compatMode == uf
		}

		function lr(a) {
			for(var b; b = a[Gb];) a[Cc](b)
		}

		function mr(a) {
			return a && a[Zc] ? a[Zc][Cc](a) : l
		}

		function nr(a, b) {
			if(a[Tc] && 1 == b[cb]) return a == b || a[Tc](b);
			if("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
			for(; b && a != b;) b = b[Zc];
			return b == a
		}

		function dr(a) {
			return 9 == a[cb] ? a : a.ownerDocument || a[nc]
		}

		function jr(a) {
			if(a && typeof a[I] == gl) {
				if(mp(a)) return typeof a[pb] == T || typeof a[pb] == pn;
				if(pp(a)) return typeof a[pb] == T
			}
			return n
		}

		function or(a, b, c, d) {
			c || (a = a[Zc]);
			for(var c = d == l, e = 0; a && (c || e <= d);) {
				if(b(a)) return a;
				a = a[Zc];
				e++
			}
			return l
		}

		function cr(a) {
			this.nb = a || dp[nc] || ja
		}
		V = cr[K];
		V.q = function(a) {
			return np(a) ? this.nb[gb](a) : a
		};
		V.xw = function(a) {
			var a = a || this.Ip() || da,
				b = a[nc];
			if(Jq && !Wq(Re) && !Kq) {
				"undefined" == typeof a.innerHeight && (a = da);
				var b = a.innerHeight,
					c = a[nc][Yb].scrollHeight;
				a == a.top && c < b && (b -= 15);
				a = new lq(a.innerWidth, b)
			} else a = kr(b) ? b[Yb] : b[Bc], a = new lq(a[kc], a[Mc]);
			return a
		};
		V.ep = function(a, b, c) {
			return hr(this.nb, arguments)
		};
		V.createElement = function(a) {
			return this.nb[Bb](a)
		};
		V.createTextNode = function(a) {
			return this.nb[lb](a)
		};
		V.Kl = function() {
			return kr(this.nb)
		};
		V.Ip = function() {
			return this.nb[Ob] || this.nb[Rb]
		};
		V.ww = function() {
			return !Jq && kr(this.nb) ? this.nb[Yb] : this.nb[Bc]
		};
		V.Oi = function() {
			var a = this.nb,
				b = !Jq && kr(a) ? a[Yb] : a[Bc],
				a = a[Ob] || a[Rb];
			return new $(a.pageXOffset || b[Nc], a.pageYOffset || b[$b])
		};
		V.appendChild = function(a, b) {
			a[t](b)
		};
		V.Ng = lr;
		V.removeNode = mr;
		Sa(V, nr);

		function pr(a, b, c) {
			return s.min(s.max(a, b), c)
		}

		function qr(a, b) {
			var c = a % b;
			return 0 > c * b ? c + b : c
		}

		function rr(a) {
			return qr(a, 360)
		}

		function sr(a) {
			return a * s.PI / 180
		}

		function tr(a) {
			return Pp(arguments, function(a, c) {
				return a + c
			}, 0)
		}

		function ur(a) {
			return tr[Uc](l, arguments) / arguments[I]
		};

		function vr(a, b, c, d) {
			this.Of = a;
			this.Pf = b;
			this.Cb = c;
			this.Db = d
		}
		V = vr[K];
		Oa(V, function() {
			return new vr(this.Of, this.Pf, this.Cb, this.Db)
		});
		V.Od = function(a) {
			return this.Of == a.Of && this.Pf == a.Pf && this.Cb == a.Cb && this.Db == a.Db
		};
		V.qx = function() {
			var a = this.Cb - this.Of,
				b = this.Db - this.Pf;
			return a * a + b * b
		};
		V.ax = function() {
			return s[Ib](this.qx())
		};
		V.Ep = function(a) {
			return new $(this.Of + a * (this.Cb - this.Of), this.Pf + a * (this.Db - this.Pf))
		};

		function wr(a, b) {
			this.x = a;
			this.y = b
		}
		xp(wr, $);
		V = wr[K];
		Oa(V, function() {
			return new wr(this.x, this.y)
		});
		V.Aq = function() {
			return s[Ib](this.x * this.x + this.y * this.y)
		};
		V.Tr = function() {
			return this.x * this.x + this.y * this.y
		};
		V.scale = function(a) {
			this.x *= a;
			this.y *= a;
			return this
		};
		V.add = function(a) {
			this.x += a.x;
			this.y += a.y;
			return this
		};
		V.pq = function(a) {
			this.x -= a.x;
			this.y -= a.y;
			return this
		};
		V.rotate = function(a) {
			var b = s.cos(a),
				a = s.sin(a),
				c = this.y * b + this.x * a;
			this.x = this.x * b - this.y * a;
			this.y = c;
			return this
		};
		V.Od = function(a) {
			return this == a || !!a && this.x == a.x && this.y == a.y
		};

		function xr(a, b) {
			return new wr(a.x + b.x, a.y + b.y)
		}

		function yr(a, b) {
			return new wr(a.x - b.x, a.y - b.y)
		};

		function zr() {}
		zr[K].iq = n;
		zr[K].cc = function() {
			if(!this.iq) this.iq = k, this.lb()
		};
		zr[K].lb = function() {
			this.nx && Ar[Uc](l, this.nx)
		};

		function Br(a) {
			a && typeof a.cc == T && a.cc()
		}

		function Ar(a) {
			for(var b = 0, c = arguments[I]; b < c; ++b) {
				var d = arguments[b];
				kp(d) ? Ar[Uc](l, d) : Br(d)
			}
		};

		function Cr(a) {
			Cr[id](a);
			return a
		}
		Cr[id] = fp;
		var Dr = !Hq || Yq(9),
			Er = !Hq || Yq(9),
			Fr = Hq && !Wq(Ue);
		!Jq || Wq("528");
		Iq && Wq("1.9b") || Hq && Wq(Ue) || Gq && Wq("9.5") || Jq && Wq("528");
		!Iq || Wq(Ue);

		function Gr(a, b) {
			Aa(this, a);
			Pa(this, b);
			wa(this, this[Ec])
		}
		xp(Gr, zr);
		V = Gr[K];
		V.lb = function() {
			delete this[F];
			delete this[Ec];
			delete this.currentTarget
		};
		V.Ge = n;
		V.jh = k;
		V.stopPropagation = function() {
			this.Ge = k
		};
		V.preventDefault = function() {
			this.jh = n
		};

		function Hr(a) {
			a[ob]()
		};

		function Ir(a, b) {
			a && this.oc(a, b)
		}
		xp(Ir, Gr);
		var Jr = [1, 4, 2];
		V = Ir[K];
		Pa(V, l);
		V.relatedTarget = l;
		V.offsetX = 0;
		V.offsetY = 0;
		V.clientX = 0;
		V.clientY = 0;
		V.screenX = 0;
		V.screenY = 0;
		V.button = 0;
		za(V, 0);
		V.charCode = 0;
		V.ctrlKey = n;
		V.altKey = n;
		V.shiftKey = n;
		V.metaKey = n;
		V.iw = n;
		V.Fc = l;
		V.oc = function(a, b) {
			var c = Aa(this, a[F]);
			Gr[N](this, c);
			Pa(this, a[Ec] || a.srcElement);
			wa(this, b);
			var d = a[$a];
			if(d) {
				if(Iq) {
					var e;
					a: {
						try {
							Cr(d.nodeName);
							e = k;
							break a
						} catch(f) {}
						e = n
					}
					e || (d = l)
				}
			} else if(c == Xk) d = a.fromElement;
			else if(c == Wk) d = a.toElement;
			this.relatedTarget = d;
			this.offsetX = Jq || a.offsetX !== ba ? a.offsetX : a.layerX;
			this.offsetY = Jq || a.offsetY !== ba ? a.offsetY : a.layerY;
			this.clientX = a[Wb] !== ba ? a[Wb] : a.pageX;
			this.clientY = a[Xb] !== ba ? a[Xb] : a.pageY;
			this.screenX = a[xb] || 0;
			this.screenY = a[yb] || 0;
			this.button = a.button;
			za(this, a[Eb] || 0);
			this.charCode = a.charCode || (c == dk ? a[Eb] : 0);
			this.ctrlKey = a[pc];
			this.altKey = a.altKey;
			this.shiftKey = a.shiftKey;
			this.metaKey = a.metaKey;
			this.iw = Bq ? a.metaKey : a[pc];
			this.state = a.state;
			this.Fc = a;
			delete this.jh;
			delete this.Ge
		};
		V.sx = function(a) {
			return Dr ? this.Fc.button == a : this[F] == Rh ? 0 == a : !!(this.Fc.button & Jr[a])
		};
		V.lp = function() {
			return this.sx(0) && !(Jq && Bq && this[pc])
		};
		V.stopPropagation = function() {
			Ir.Pb[tc][N](this);
			this.Fc[tc] ? this.Fc[tc]() : this.Fc.cancelBubble = k
		};
		V.preventDefault = function() {
			Ir.Pb[ob][N](this);
			var a = this.Fc;
			if(a[ob]) a[ob]();
			else if(a.returnValue = n, Fr) try {
				(a[pc] || 112 <= a[Eb] && 123 >= a[Eb]) && za(a, -1)
			} catch(b) {}
		};
		V.Uv = function() {
			return this.Fc
		};
		V.lb = function() {
			Ir.Pb.lb[N](this);
			this.Fc = l;
			Pa(this, l);
			wa(this, l);
			this.relatedTarget = l
		};

		function Kr() {}
		var Lr = 0;
		V = Kr[K];
		V.key = 0;
		V.Lf = n;
		V.Sl = n;
		V.oc = function(a, b, c, d, e, f) {
			pp(a) ? this.Yp = k : a && a[Lb] && pp(a[Lb]) ? this.Yp = n : h(r(Ff));
			this.hh = a;
			this.yp = b;
			this.src = c;
			Aa(this, d);
			this.capture = !!e;
			this.Al = f;
			this.Sl = n;
			this.key = ++Lr;
			this.Lf = n
		};
		V.handleEvent = function(a) {
			return this.Yp ? this.hh[N](this.Al || this.src, a) : this.hh[Lb][N](this.hh, a)
		};
		var Mr = {},
			Nr = {},
			Or = {},
			Pr = {};

		function Qr(a, b, c, d, e) {
			if(b) {
				if(jp(b)) {
					for(var f = 0; f < b[I]; f++) Qr(a, b[f], c, d, e);
					return l
				}
				var d = !!d,
					g = Nr;
				b in g || (g[b] = {
					Ua: 0,
					rc: 0
				});
				g = g[b];
				d in g || (g[d] = {
					Ua: 0,
					rc: 0
				}, g.Ua++);
				var g = g[d],
					i = qp(a),
					j;
				g.rc++;
				if(g[i]) {
					j = g[i];
					for(f = 0; f < j[I]; f++)
						if(g = j[f], g.hh == c && g.Al == e) {
							if(g.Lf) break;
							return j[f].key
						}
				} else j = g[i] = [], g.Ua++;
				f = Rr();
				f.src = a;
				g = new Kr;
				g.oc(c, f, a, b, d, e);
				c = g.key;
				f.key = c;
				j[v](g);
				Mr[c] = g;
				Or[i] || (Or[i] = []);
				Or[i][v](g);
				a.addEventListener ? (a == dp || !a.np) && a.addEventListener(b, f, d) : a.attachEvent(b in Pr ?
					Pr[b] : Pr[b] = kl + b, f);
				return c
			}
			h(r("Invalid event type"))
		}

		function Rr() {
			var a = Sr,
				b = Er ? function(c) {
					return a[N](b.src, b.key, c)
				} : function(c) {
					c = a[N](b.src, b.key, c);
					if(!c) return c
				};
			return b
		}

		function Tr(a, b, c, d, e) {
			if(jp(b)) {
				for(var f = 0; f < b[I]; f++) Tr(a, b[f], c, d, e);
				return l
			}
			a = Qr(a, b, c, d, e);
			Mr[a].Sl = k;
			return a
		}

		function Ur(a, b, c, d, e) {
			if(jp(b)) {
				for(var f = 0; f < b[I]; f++) Ur(a, b[f], c, d, e);
				return l
			}
			d = !!d;
			a: {
				f = Nr;
				if(b in f && (f = f[b], d in f && (f = f[d], a = qp(a), f[a]))) {
					a = f[a];
					break a
				}
				a = l
			}
			if(!a) return n;
			for(f = 0; f < a[I]; f++)
				if(a[f].hh == c && a[f][vb] == d && a[f].Al == e) return Vr(a[f].key);
			return n
		}

		function Vr(a) {
			if(!Mr[a]) return n;
			var b = Mr[a];
			if(b.Lf) return n;
			var c = b.src,
				d = b[F],
				e = b.yp,
				f = b[vb];
			c.removeEventListener ? (c == dp || !c.np) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Pr ? Pr[d] : Pr[d] = kl + d, e);
			c = qp(c);
			e = Nr[d][f][c];
			if(Or[c]) {
				var g = Or[c];
				Wp(g, b);
				0 == g[I] && delete Or[c]
			}
			b.Lf = k;
			e.Mp = k;
			Wr(d, f, c, e);
			delete Mr[a];
			return k
		}

		function Wr(a, b, c, d) {
			if(!d.Qi && d.Mp) {
				for(var e = 0, f = 0; e < d[I]; e++) d[e].Lf ? d[e].yp.src = l : (e != f && (d[f] = d[e]), f++);
				Ga(d, f);
				d.Mp = n;
				0 == f && (delete Nr[a][b][c], Nr[a][b].Ua--, 0 == Nr[a][b].Ua && (delete Nr[a][b], Nr[a].Ua--), 0 == Nr[a].Ua && delete Nr[a])
			}
		}

		function Xr(a, b, c) {
			var d = 0,
				e = b == l,
				f = c == l,
				c = !!c;
			if(a == l) mq(Or, function(a) {
				for(var g = a[I] - 1; 0 <= g; g--) {
					var i = a[g];
					if((e || b == i[F]) && (f || c == i[vb])) Vr(i.key), d++
				}
			});
			else if(a = qp(a), Or[a])
				for(var a = Or[a], g = a[I] - 1; 0 <= g; g--) {
					var i = a[g];
					if((e || b == i[F]) && (f || c == i[vb])) Vr(i.key), d++
				}
			return d
		}

		function Yr(a, b, c, d, e) {
			var f = 1,
				b = qp(b);
			if(a[b]) {
				a.rc--;
				a = a[b];
				a.Qi ? a.Qi++ : a.Qi = 1;
				try {
					for(var g = a[I], i = 0; i < g; i++) {
						var j = a[i];
						j && !j.Lf && (f &= Zr(j, e) !== n)
					}
				} finally {
					a.Qi--, Wr(c, d, b, a)
				}
			}
			return Boolean(f)
		}

		function Zr(a, b) {
			var c = a[Lb](b);
			a.Sl && Vr(a.key);
			return c
		}

		function Sr(a, b) {
			if(!Mr[a]) return k;
			var c = Mr[a],
				d = c[F],
				e = Nr;
			if(!(d in e)) return k;
			var e = e[d],
				f, g;
			if(!Er) {
				f = b || ep(Uo);
				var i = k in e,
					j = n in e;
				if(i) {
					if(0 > f[Eb] || f.returnValue != ba) return k;
					a: {
						var m = n;
						if(0 == f[Eb]) try {
							za(f, -1);
							break a
						} catch(o) {
							m = k
						}
						if(m || f.returnValue == ba) f.returnValue = k
					}
				}
				m = new Ir;
				m.oc(f, this);
				f = k;
				try {
					if(i) {
						for(var q = [], u = m.currentTarget; u; u = u[Zc]) q[v](u);
						g = e[k];
						g.rc = g.Ua;
						for(var y = q[I] - 1; !m.Ge && 0 <= y && g.rc; y--) wa(m, q[y]), f &= Yr(g, q[y], d, k, m);
						if(j) {
							g = e[n];
							g.rc = g.Ua;
							for(y = 0; !m.Ge && y < q[I] && g.rc; y++) wa(m,
								q[y]), f &= Yr(g, q[y], d, n, m)
						}
					} else f = Zr(c, m)
				} finally {
					q && Ga(q, 0), m.cc()
				}
				return f
			}
			d = new Ir(b, this);
			try {
				f = Zr(c, d)
			} finally {
				d.cc()
			}
			return f
		};

		function $r(a) {
			this.Dc = a;
			this.wa = []
		}
		xp($r, zr);
		var as = [];
		$r[K].If = function(a, b, c, d, e) {
			jp(b) || (as[0] = b, b = as);
			for(var f = 0; f < b[I]; f++) this.wa[v](Qr(a, b[f], c || this, d || n, e || this.Dc || this));
			return this
		};
		$r[K].removeAll = function() {
			Mp(this.wa, Vr);
			Ga(this.wa, 0)
		};
		$r[K].lb = function() {
			$r.Pb.lb[N](this);
			this[Ic]()
		};
		$r[K].handleEvent = function() {
			h(r("EventHandler.handleEvent not implemented"))
		};

		function bs(a) {
			a = S + a;
			if(/^\s*$/ [Za](a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/ [Za](a[bb](/\\["\\\/bfnrtu]/g, nf)[bb](/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, hg)[bb](/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, S))) try {
				return eval(de + a + fe)
			} catch(b) {}
			h(r("Invalid JSON string: " + a))
		}

		function cs(a) {
			this.Xi = a
		}
		cs[K].Gu = function(a) {
			var b = [];
			this.Zl(a, b);
			return b[cd](S)
		};
		cs[K].Zl = function(a, b) {
			switch(typeof a) {
				case pn:
					this.gq(a, b);
					break;
				case gl:
					this.Vw(a, b);
					break;
				case Yg:
					b[v](a);
					break;
				case "undefined":
					b[v](fl);
					break;
				case il:
					if(a == l) {
						b[v](fl);
						break
					}
					if(jp(a)) {
						this.Uw(a, b);
						break
					}
					this.Ww(a, b);
					break;
				case T:
					break;
				default:
					h(r("Unknown type: " + typeof a))
			}
		};
		var ds = {
				'"': '\\"',
				"\\": "\\\\",
				"/": "\\/",
				"\u0008": "\\b",
				"\u000c": "\\f",
				"\n": "\\n",
				"\r": "\\r",
				"\t": "\\t",
				"\u000b": "\\u000b"
			},
			es = /\uffff/ [Za]("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
		cs[K].gq = function(a, b) {
			b[v](td, a[bb](es, function(a) {
				if(a in ds) return ds[a];
				var b = a.charCodeAt(0),
					e = gg;
				16 > b ? e += Fe : 256 > b ? e += Ee : 4096 > b && (e += Ae);
				return ds[a] = e + b[ac](16)
			}), td)
		};
		cs[K].Vw = function(a, b) {
			b[v](ia(a) && !ka(a) ? a : fl)
		};
		cs[K].Uw = function(a, b) {
			var c = a[I];
			b[v](cg);
			for(var d = S, e = 0; e < c; e++) b[v](d), d = a[e], this.Zl(this.Xi ? this.Xi[N](a, S + e, d) : d, b), d = ge;
			b[v](hg)
		};
		cs[K].Ww = function(a, b) {
			b[v](bp);
			var c = S,
				d;
			for(d in a)
				if(fa[K][yc][N](a, d)) {
					var e = a[d];
					typeof e != T && (b[v](c), this.gq(d, b), b[v](Ye), this.Zl(this.Xi ? this.Xi[N](a, d, e) : e, b), c = ge)
				}
			b[v](cp)
		};

		function fs(a, b) {
			var c = qp(a),
				d = b || gs;
			return function() {
				var b = this || dp,
					b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}),
					f = d(c, arguments);
				return b[yc](f) ? b[f] : b[f] = a[Uc](this, arguments)
			}
		}

		function gs(a, b) {
			for(var c = [a], d = b[I] - 1; 0 <= d; --d) c[v](typeof b[d], b[d]);
			return c[cd](hd)
		};

		function hs(a, b, c, d) {
			this.top = a;
			Va(this, b);
			Ra(this, c);
			xa(this, d)
		}
		Oa(hs[K], function() {
			return new hs(this.top, this[R], this[P], this[C])
		});
		Sa(hs[K], function(a) {
			return !this || !a ? n : a instanceof hs ? a[C] >= this[C] && a[R] <= this[R] && a.top >= this.top && a[P] <= this[P] : a.x >= this[C] && a.x <= this[R] && a.y >= this.top && a.y <= this[P]
		});
		hs[K].Gn = function(a) {
			xa(this, s.min(this[C], a[C]));
			this.top = s.min(this.top, a.top);
			Va(this, s.max(this[R], a[R]));
			Ra(this, s.max(this[P], a[P]))
		};

		function is(a, b) {
			return a[C] <= b[R] && b[C] <= a[R] && a.top <= b[P] && b.top <= a[P]
		};

		function js(a, b, c, d) {
			xa(this, a);
			this.top = b;
			oa(this, c);
			Ua(this, d)
		}
		Oa(js[K], function() {
			return new js(this[C], this.top, this[w], this[Q])
		});
		js[K].Jp = function(a) {
			var b = s.max(this[C], a[C]),
				c = s.min(this[C] + this[w], a[C] + a[w]);
			if(b <= c) {
				var d = s.max(this.top, a.top),
					a = s.min(this.top + this[Q], a.top + a[Q]);
				if(d <= a) return xa(this, b), this.top = d, oa(this, c - b), Ua(this, a - d), k
			}
			return n
		};
		Sa(js[K], function(a) {
			return a instanceof js ? this[C] <= a[C] && this[C] + this[w] >= a[C] + a[w] && this.top <= a.top && this.top + this[Q] >= a.top + a[Q] : a.x >= this[C] && a.x <= this[C] + this[w] && a.y >= this.top && a.y <= this.top + this[Q]
		});

		function ks(a, b, c) {
			np(b) ? ls(a, c, b) : mq(b, vp(ls, a))
		}

		function ls(a, b, c) {
			a[zc][Ip(c)] = b
		}

		function ms(a, b) {
			var c = dr(a);
			return c[Rb] && c[Rb].getComputedStyle && (c = c[Rb].getComputedStyle(a, l)) ? c[b] || c.getPropertyValue(b) : S
		}

		function ns(a, b) {
			return ms(a, b) || (a[Oc] ? a[Oc][b] : l) || a[zc] && a[zc][b]
		}

		function os(a) {
			a = a ? 9 == a[cb] ? a : dr(a) : ja;
			return Hq && !Yq(9) && !br(a).Kl() ? a[Bc] : a[Yb]
		}

		function ps(a) {
			var b = a[Ya]();
			if(Hq) a = a.ownerDocument, xa(b, b[C] - (a[Yb][Hb] + a[Bc][Hb])), b.top -= a[Yb][Kb] + a[Bc][Kb];
			return b
		}

		function qs(a) {
			if(Hq && !Yq(8)) return a.offsetParent;
			for(var b = dr(a), c = ns(a, Pl), d = c == Vi || c == lg, a = a[Zc]; a && a != b; a = a[Zc])
				if(c = ns(a, Pl), d = d && c == gn && a != b[Yb] && a != b[Bc], !d && (a.scrollWidth > a[kc] || a.scrollHeight > a[Mc] || c == Vi || c == lg || c == am)) return a;
			return l
		}

		function rs(a) {
			for(var b = new hs(0, p, p, 0), c = br(a), d = c.nb[Bc], e = c.nb[Yb], f = c.ww(); a = qs(a);)
				if((!Hq || 0 != a[kc]) && (!Jq || 0 != a[Mc] || a != d) && a != d && a != e && ns(a, sl) != Po) {
					var g = ss(a),
						i;
					i = a;
					if(Iq && !Wq(Je)) {
						var j = ha(ms(i, dh));
						if(ts(i)) var m = i.offsetWidth - i[kc] - j - ha(ms(i, fh)),
							j = j + m;
						i = new $(j, ha(ms(i, hh)))
					} else i = new $(i[Hb], i[Kb]);
					g.x += i.x;
					g.y += i.y;
					b.top = s.max(b.top, g.y);
					Va(b, s.min(b[R], g.x + a[kc]));
					Ra(b, s.min(b[P], g.y + a[Mc]));
					xa(b, s.max(b[C], g.x))
				}
			d = f[Nc];
			f = f[$b];
			xa(b, s.max(b[C], d));
			b.top = s.max(b.top, f);
			c = c.xw();
			Va(b, s.min(b[R], d + c[w]));
			Ra(b, s.min(b[P], f + c[Q]));
			return 0 <= b.top && 0 <= b[C] && b[P] > b.top && b[R] > b[C] ? b : l
		}

		function ss(a) {
			var b, c = dr(a),
				d = ns(a, Pl),
				e = Iq && c[Ab] && !a[Ya] && d == lg && (b = c[Ab](a)) && (0 > b[xb] || 0 > b[yb]),
				f = new $(0, 0),
				g = os(c);
			if(a == g) return f;
			if(a[Ya]) b = ps(a), a = br(c).Oi(), f.x = b[C] + a.x, f.y = b.top + a.y;
			else if(c[Ab] && !e) b = c[Ab](a), a = c[Ab](g), f.x = b[xb] - a[xb], f.y = b[yb] - a[yb];
			else {
				b = a;
				do {
					f.x += b.offsetLeft;
					f.y += b.offsetTop;
					b != a && (f.x += b[Hb] || 0, f.y += b[Kb] || 0);
					if(Jq && ns(b, Pl) == Vi) {
						f.x += c[Bc][Nc];
						f.y += c[Bc][$b];
						break
					}
					b = b.offsetParent
				} while (b && b != a);
				if(Gq || Jq && d == lg) f.y -= c[Bc].offsetTop;
				for(b = a;
					(b = qs(b)) && b != c[Bc] &&
					b != g;)
					if(f.x -= b[Nc], !Gq || b[Vc] != Wf) f.y -= b[$b]
			}
			return f
		}

		function us(a, b) {
			typeof a == gl && (a = (b ? s[z](a) : a) + Ul);
			return a
		}

		function vs(a) {
			if(ns(a, Bi) != U) return ws(a);
			var b = a[zc],
				c = b.display,
				d = b.visibility,
				e = b[fc];
			Fa(b, Dj);
			Ia(b, lg);
			Ta(b, Tj);
			a = ws(a);
			Ta(b, c);
			Ia(b, e);
			Fa(b, d);
			return a
		}

		function ws(a) {
			var b = a.offsetWidth,
				c = a.offsetHeight,
				d = Jq && !b && !c;
			return(!hp(b) || d) && a[Ya] ? (a = ps(a), new lq(a[R] - a[C], a[P] - a.top)) : new lq(b, c)
		}

		function xs(a, b) {
			Ta(a[zc], b ? S : U)
		}

		function ts(a) {
			return nm == ns(a, Ai)
		}

		function ys(a, b, c, d) {
			if(/^\d+px?$/ [Za](b)) return ga(b, 10);
			var e = a[zc][c],
				f = a.runtimeStyle[c];
			a.runtimeStyle[c] = a[Oc][c];
			a[zc][c] = b;
			b = a[zc][d];
			a[zc][c] = e;
			a.runtimeStyle[c] = f;
			return b
		}

		function zs(a, b) {
			return ys(a, a[Oc] ? a[Oc][b] : l, hk, Kl)
		}
		var As = {
			thin: 2,
			medium: 4,
			thick: 6
		};

		function Bs(a, b) {
			if((a[Oc] ? a[Oc][b + Uf] : l) == U) return 0;
			var c = a[Oc] ? a[Oc][b + Zf] : l;
			return c in As ? As[c] : ys(a, c, hk, Kl)
		};

		function Cs(a, b, c, d, e, f, g, i) {
			var j, m = c.offsetParent;
			if(m) {
				var o = m[Vc] == Df || m[Vc] == sf;
				if(!o || ns(m, Pl) != gn) j = ss(m), o || (j = jq(j, new $(m[Nc], m[$b])))
			}
			m = ss(a);
			o = vs(a);
			m = new js(m.x, m.y, o[w], o[Q]);
			(o = rs(a)) && m.Jp(new js(o[C], o.top, o[R] - o[C], o[P] - o.top));
			var o = br(a),
				q = br(c);
			if(o.nb != q.nb) {
				var u = o.nb[Bc],
					q = q.Ip(),
					y = new $(0, 0),
					D = dr(u) ? dr(u)[Ob] || dr(u)[Rb] : da,
					Y = u;
				do {
					var L;
					if(D == q) L = ss(Y);
					else {
						var X = Y;
						L = new $;
						if(1 == X[cb])
							if(X[Ya]) X = ps(X), L.x = X[C], L.y = X.top;
							else {
								var G = br(X).Oi(),
									X = ss(X);
								L.x = X.x - G.x;
								L.y = X.y - G.y
							}
						else {
							var G =
								pp(X.Uv),
								aa = X;
							X[qb] ? aa = X[qb][0] : G && X.Fc[qb] && (aa = X.Fc[qb][0]);
							L.x = aa[Wb];
							L.y = aa[Xb]
						}
					}
					y.x += L.x;
					y.y += L.y
				} while (D && D != q && (Y = D.frameElement) && (D = D.parent));
				u = jq(y, ss(u));
				Hq && !o.Kl() && (u = jq(u, o.Oi()));
				xa(m, m[C] + u.x);
				m.top += u.y
			}
			a = (b & 4 && ts(a) ? b ^ 2 : b) & -5;
			b = new $(a & 2 ? m[C] + m[w] : m[C], a & 1 ? m.top + m[Q] : m.top);
			j && (b = jq(b, j));
			e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
			var na;
			if(g && (na = rs(c)) && j) na.top -= j.y, Va(na, na[R] - j.x), Ra(na, na[P] - j.y), xa(na, na[C] - j.x);
			return Ds(b, c, d, f, na, g, i)
		}

		function Ds(a, b, c, d, e, f, g) {
			var a = a[Dc](),
				i = 0,
				j = (c & 4 && ts(b) ? c ^ 2 : c) & -5,
				c = vs(b),
				g = g ? g[Dc]() : c[Dc]();
			if(d || 0 != j) j & 2 ? a.x -= g[w] + (d ? d[R] : 0) : d && (a.x += d[C]), j & 1 ? a.y -= g[Q] + (d ? d[P] : 0) : d && (a.y += d.top);
			if(f) {
				if(e) {
					i = a;
					d = 0;
					if(65 == (f & 65) && (i.x < e[C] || i.x >= e[R])) f &= -2;
					if(132 == (f & 132) && (i.y < e.top || i.y >= e[P])) f &= -5;
					if(i.x < e[C] && f & 1) i.x = e[C], d |= 1;
					i.x < e[C] && i.x + g[w] > e[R] && f & 16 && (oa(g, s.max(g[w] - (i.x + g[w] - e[R]), 0)), d |= 4);
					if(i.x + g[w] > e[R] && f & 1) i.x = s.max(e[R] - g[w], e[C]), d |= 1;
					f & 2 && (d |= (i.x < e[C] ? 16 : 0) | (i.x + g[w] > e[R] ? 32 : 0));
					if(i.y < e.top && f & 4) i.y = e.top, d |= 2;
					i.y >= e.top && i.y + g[Q] > e[P] && f & 32 && (Ua(g, s.max(g[Q] - (i.y + g[Q] - e[P]), 0)), d |= 8);
					if(i.y + g[Q] > e[P] && f & 4) i.y = s.max(e[P] - g[Q], e.top), d |= 2;
					f & 8 && (d |= (i.y < e.top ? 64 : 0) | (i.y + g[Q] > e[P] ? 128 : 0));
					i = d
				} else i = 256;
				if(i & 496) return i
			}
			f = a;
			e = Iq && (Bq || Mq) && Wq(Je);
			f instanceof $ ? (a = f.x, f = f.y) : (a = f, f = ba);
			xa(b[zc], us(a, e));
			b[zc].top = us(f, e);
			if(!(c == g || (!c || !g ? 0 : c[w] == g[w] && c[Q] == g[Q]))) a = br(dr(b)).Kl(), Hq && (!a || !Wq(Ue)) ? (c = b[zc], a ? (Hq ? (a = zs(b, ul), e = zs(b, vl), f = zs(b, wl), d = zs(b, tl), a = new hs(f, e,
				d, a)) : (a = ms(b, ul), e = ms(b, vl), f = ms(b, wl), d = ms(b, tl), a = new hs(ha(f), ha(e), ha(d), ha(a))), Hq ? (e = Bs(b, bh), f = Bs(b, eh), d = Bs(b, gh), b = Bs(b, $g), b = new hs(d, f, b, e)) : (e = ms(b, dh), f = ms(b, fh), d = ms(b, hh), b = ms(b, ah), b = new hs(ha(d), ha(f), ha(b), ha(e))), c.pixelWidth = g[w] - b[C] - a[C] - a[R] - b[R], c.pixelHeight = g[Q] - b.top - a.top - a[P] - b[P]) : (c.pixelWidth = g[w], c.pixelHeight = g[Q])) : (b = b[zc], Iq ? b.MozBoxSizing = Zg : Jq ? b.WebkitBoxSizing = Zg : b.boxSizing = Zg, oa(b, s.max(g[w], 0) + Ul), Ua(b, s.max(g[Q], 0) + Ul));
			return i
		};

		function Es() {}
		Es[K].Oc = function() {};

		function Fs(a, b) {
			this.element = a;
			this.vq = b
		}
		xp(Fs, Es);
		Fs[K].Oc = function(a, b, c) {
			Cs(this.element, this.vq, a, b, ba, c)
		};

		function Gs(a, b) {
			this.u = a instanceof $ ? a : new $(a, b)
		}
		xp(Gs, Es);
		Gs[K].Oc = function(a, b, c, d) {
			Cs(os(a), 0, a, b, this.u, c, l, d)
		};
		var Hs = "StopIteration" in dp ? dp.StopIteration : r("StopIteration");

		function Is() {}
		Ma(Is[K], function() {
			h(Hs)
		});
		Is[K].Tl = function() {
			return this
		};

		function Js(a) {
			if(typeof a.He == T) a = a.He();
			else if(kp(a) || np(a)) a = a[I];
			else {
				var b = 0,
					c;
				for(c in a) b++;
				a = b
			}
			return a
		}

		function Ks(a) {
			if(typeof a.Je == T) return a.Je();
			if(np(a)) return a[qc](S);
			if(kp(a)) {
				for(var b = [], c = a[I], d = 0; d < c; d++) b[v](a[d]);
				return b
			}
			return pq(a)
		}

		function Ls(a, b, c) {
			if(typeof a[Sc] == T) return a[Sc](b, c);
			if(kp(a) || np(a)) return Qp(a, b, c);
			var d;
			if(typeof a.$l == T) d = a.$l();
			else if(typeof a.Je != T)
				if(kp(a) || np(a)) {
					d = [];
					for(var e = a[I], f = 0; f < e; f++) d[v](f)
				} else d = qq(a);
			else d = ba;
			for(var e = Ks(a), f = e[I], g = 0; g < f; g++)
				if(!b[N](c, e[g], d && d[g], a)) return n;
			return k
		};

		function Ms(a, b) {
			this.Oa = {};
			this.wa = [];
			var c = arguments[I];
			if(1 < c) {
				c % 2 && h(r("Uneven number of arguments"));
				for(var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
			} else a && this.Il(a)
		}
		V = Ms[K];
		V.Ua = 0;
		V.eh = 0;
		V.He = function() {
			return this.Ua
		};
		V.Je = function() {
			this.bh();
			for(var a = [], b = 0; b < this.wa[I]; b++) a[v](this.Oa[this.wa[b]]);
			return a
		};
		V.$l = function() {
			this.bh();
			return this.wa[hb]()
		};
		V.vw = function(a) {
			return Ns(this.Oa, a)
		};
		V.oq = function(a) {
			for(var b = 0; b < this.wa[I]; b++) {
				var c = this.wa[b];
				if(Ns(this.Oa, c) && this.Oa[c] == a) return k
			}
			return n
		};
		V.Od = function(a, b) {
			if(this === a) return k;
			if(this.Ua != a.He()) return n;
			var c = b || Os;
			this.bh();
			for(var d, e = 0; d = this.wa[e]; e++)
				if(!c(this.get(d), a.get(d))) return n;
			return k
		};

		function Os(a, b) {
			return a === b
		}
		Ba(V, function() {
			this.Oa = {};
			Ga(this.wa, 0);
			this.eh = this.Ua = 0
		});
		V.remove = function(a) {
			return Ns(this.Oa, a) ? (delete this.Oa[a], this.Ua--, this.eh++, this.wa[I] > 2 * this.Ua && this.bh(), k) : n
		};
		V.bh = function() {
			if(this.Ua != this.wa[I]) {
				for(var a = 0, b = 0; a < this.wa[I];) {
					var c = this.wa[a];
					Ns(this.Oa, c) && (this.wa[b++] = c);
					a++
				}
				Ga(this.wa, b)
			}
			if(this.Ua != this.wa[I]) {
				for(var d = {}, b = a = 0; a < this.wa[I];) c = this.wa[a], Ns(d, c) || (this.wa[b++] = c, d[c] = 1), a++;
				Ga(this.wa, b)
			}
		};
		V.get = function(a, b) {
			return Ns(this.Oa, a) ? this.Oa[a] : b
		};
		V.set = function(a, b) {
			Ns(this.Oa, a) || (this.Ua++, this.wa[v](a), this.eh++);
			this.Oa[a] = b
		};
		V.Il = function(a) {
			var b;
			a instanceof Ms ? (b = a.$l(), a = a.Je()) : (b = qq(a), a = pq(a));
			for(var c = 0; c < b[I]; c++) this.set(b[c], a[c])
		};
		Oa(V, function() {
			return new Ms(this)
		});
		V.Tl = function(a) {
			this.bh();
			var b = 0,
				c = this.wa,
				d = this.Oa,
				e = this.eh,
				f = this,
				g = new Is;
			Ma(g, function() {
				for(;;) {
					e != f.eh && h(r("The map has changed since the iterator was created"));
					b >= c[I] && h(Hs);
					var g = c[b++];
					return a ? g : d[g]
				}
			});
			return g
		};

		function Ns(a, b) {
			return fa[K][yc][N](a, b)
		};

		function Ps(a) {
			this.Oa = new Ms;
			a && this.Il(a)
		}

		function Qs(a) {
			var b = typeof a;
			return b == il && a || b == T ? hl + qp(a) : b[Zb](0, 1) + a
		}
		V = Ps[K];
		V.He = function() {
			return this.Oa.He()
		};
		V.add = function(a) {
			this.Oa.set(Qs(a), a)
		};
		V.Il = function(a) {
			for(var a = Ks(a), b = a[I], c = 0; c < b; c++) this.add(a[c])
		};
		V.removeAll = function(a) {
			for(var a = Ks(a), b = a[I], c = 0; c < b; c++) this.remove(a[c])
		};
		V.remove = function(a) {
			return this.Oa.remove(Qs(a))
		};
		Ba(V, function() {
			this.Oa[Pb]()
		});
		Sa(V, function(a) {
			return this.Oa.vw(Qs(a))
		});
		V.Jp = function(a) {
			for(var b = new Ps, a = Ks(a), c = 0; c < a[I]; c++) {
				var d = a[c];
				this[Tc](d) && b.add(d)
			}
			return b
		};
		V.Je = function() {
			return this.Oa.Je()
		};
		Oa(V, function() {
			return new Ps(this)
		});
		V.Od = function(a) {
			return this.He() == Js(a) && this.Xw(a)
		};
		V.Xw = function(a) {
			var b = Js(a);
			if(this.He() > b) return n;
			!(a instanceof Ps) && 5 < b && (a = new Ps(a));
			return Ls(this, function(b) {
				return typeof a[Tc] == T ? a[Tc](b) : typeof a.oq == T ? a.oq(b) : kp(a) || np(a) ? 0 <= Lp(a, b) : rq(a, b)
			})
		};
		V.Tl = function() {
			return this.Oa.Tl(n)
		};

		function Rs() {}
		xp(Rs, zr);
		V = Rs[K];
		V.np = k;
		V.Bl = l;
		V.addEventListener = function(a, b, c, d) {
			Qr(this, a, b, c, d)
		};
		V.removeEventListener = function(a, b, c, d) {
			Ur(this, a, b, c, d)
		};
		V.dispatchEvent = function(a) {
			var b = a[F] || a,
				c = Nr;
			if(b in c) {
				if(np(a)) a = new Gr(a, this);
				else if(a instanceof Gr) Pa(a, a[Ec] || this);
				else {
					var d = a,
						a = new Gr(b, this);
					vq(a, d)
				}
				var d = 1,
					e, c = c[b],
					b = k in c,
					f;
				if(b) {
					e = [];
					for(f = this; f; f = f.Bl) e[v](f);
					f = c[k];
					f.rc = f.Ua;
					for(var g = e[I] - 1; !a.Ge && 0 <= g && f.rc; g--) wa(a, e[g]), d &= Yr(f, e[g], a[F], k, a) && a.jh != n
				}
				if(n in c)
					if(f = c[n], f.rc = f.Ua, b)
						for(g = 0; !a.Ge && g < e[I] && f.rc; g++) wa(a, e[g]), d &= Yr(f, e[g], a[F], n, a) && a.jh != n;
					else
						for(e = this; !a.Ge && e && f.rc; e = e.Bl) wa(a, e), d &= Yr(f, e, a[F], n, a) &&
							a.jh != n;
				a = Boolean(d)
			} else a = k;
			return a
		};
		V.lb = function() {
			Rs.Pb.lb[N](this);
			Xr(this);
			this.Bl = l
		};

		function Ss(a, b) {
			this.Si = a || 1;
			this.ih = b || Ts;
			this.Jl = Z(this.Gl, this);
			this.Nf = wp()
		}
		xp(Ss, Rs);
		Ss[K].enabled = n;
		var Ts = dp.window;
		V = Ss[K];
		V.sc = l;
		V.Gl = function() {
			if(this.enabled) {
				var a = wp() - this.Nf;
				if(0 < a && a < 0.8 * this.Si) this.sc = this.ih[mc](this.Jl, this.Si - a);
				else if(this.$v(), this.enabled) this.sc = this.ih[mc](this.Jl, this.Si), this.Nf = wp()
			}
		};
		V.$v = function() {
			this[ub](Jn)
		};
		V.start = function() {
			this.enabled = k;
			if(!this.sc) this.sc = this.ih[mc](this.Jl, this.Si), this.Nf = wp()
		};
		V.stop = function() {
			this.enabled = n;
			if(this.sc) this.ih.clearTimeout(this.sc), this.sc = l
		};
		V.lb = function() {
			Ss.Pb.lb[N](this);
			this.stop();
			delete this.ih
		};

		function Us(a, b, c) {
			pp(a) ? c && (a = Z(a, c)) : a && typeof a[Lb] == T ? a = Z(a[Lb], a) : h(r(Ff));
			return 2147483647 < b ? -1 : Ts[mc](a, b || 0)
		};

		function Vs(a) {
			return a
		};

		function Ws(a, b) {
			this.Dc = new $r(this);
			this.wl(a || l);
			b && this.Hw(b)
		}
		xp(Ws, Rs);
		V = Ws[K];
		V.Ga = l;
		V.yu = k;
		V.Up = l;
		V.Jf = n;
		V.kw = n;
		V.sq = -1;
		V.rq = -1;
		V.zu = n;
		V.cw = k;
		V.Cf = Un;
		V.Hw = function(a) {
			this.Cf = a
		};
		V.q = function() {
			return this.Ga
		};
		V.wl = function(a) {
			this.uw();
			this.Ga = a
		};
		V.uw = function() {
			this.Jf && h(r("Can not change this state of the popup while showing."))
		};
		V.B = function() {
			return this.Jf
		};
		V.Df = function(a) {
			this.Tg && this.Tg.stop();
			this.$g && this.$g.stop();
			a ? this.zw() : this.Pi()
		};
		V.Oc = fp;
		V.zw = function() {
			if(!this.Jf && this.bl()) {
				this.Ga || h(r("Caller must call setElement before trying to show the popup"));
				this.Oc();
				var a = dr(this.Ga);
				this.zu && this.Dc.If(a, ck, this.Au, k);
				if(this.yu)
					if(this.Dc.If(a, Uk, this.ap, k), Hq) {
						var b;
						try {
							b = a.activeElement
						} catch(c) {}
						for(; b && b.nodeName == Ef;) {
							try {
								var d = b[Wc] || b[Ub][nc]
							} catch(e) {
								break
							}
							a = d;
							b = a.activeElement
						}
						this.Dc.If(a, Uk, this.ap, k);
						this.Dc.If(a, xi, this.$o)
					} else this.Dc.If(a, Wg, this.$o);
				this.Cf == Un ? this.Bu() : this.Cf == $k && this.Oc();
				this.Jf = k;
				this.Tg ? (Tr(this.Tg,
					Ni, this.bp, n, this), this.Tg.play()) : this.bp()
			}
		};
		V.Pi = function(a) {
			if(!this.Jf || !this.ew(a)) return n;
			this.Dc && this.Dc[Ic]();
			this.$g ? (Tr(this.$g, Ni, vp(this.Xp, a), n, this), this.$g.play()) : this.Xp(a);
			return k
		};
		V.Xp = function(a) {
			this.Cf == Un ? this.kw ? Us(this.Zp, 0, this) : this.Zp() : this.Cf == $k && this.jw();
			this.Jf = n;
			this.vl(a)
		};
		V.Bu = function() {
			Fa(this.Ga[zc], Po);
			xs(this.Ga, k)
		};
		V.Zp = function() {
			Fa(this.Ga[zc], Dj);
			xs(this.Ga, n)
		};
		V.jw = function() {
			xa(this.Ga[zc], le);
			this.Ga[zc].top = le
		};
		V.bl = function() {
			return this[ub](Tg)
		};
		V.bp = function() {
			this.sq = wp();
			this.rq = -1;
			this[ub](Im)
		};
		V.ew = function(a) {
			return this[ub]({
				type: Sg,
				target: a
			})
		};
		V.vl = function(a) {
			this.rq = wp();
			this[ub]({
				type: Ej,
				target: a
			})
		};
		V.ap = function(a) {
			a = a[Ec];
			!nr(this.Ga, a) && (!this.Up || nr(this.Up, a)) && !this.Sp() && this.Pi(a)
		};
		V.Au = function(a) {
			27 == a[Eb] && this.Pi(a[Ec]) && (a[ob](), a[tc]())
		};
		V.$o = function(a) {
			if(this.cw) {
				var b = dr(this.Ga);
				if(Hq || Gq) {
					if(a = b.activeElement, !a || nr(this.Ga, a) || a[Vc] == sf) return
				} else if(a[Ec] != b) return;
				this.Sp() || this.Pi()
			}
		};
		V.Sp = function() {
			return 150 > wp() - this.sq
		};
		V.lb = function() {
			Ws.Pb.lb[N](this);
			this.Dc.cc();
			Br(this.Tg);
			Br(this.$g);
			delete this.Ga;
			delete this.Dc
		};

		function Xs(a, b) {
			this.Qt = 4;
			this.m = b || ba;
			Ws[N](this, a)
		}
		xp(Xs, Ws);
		Xs[K].re = function() {
			return this.m || l
		};
		Xs[K].Qw = function(a) {
			this.m = a || ba;
			this.B() && this.Oc()
		};
		Xs[K].Oc = function() {
			if(this.m) {
				var a = !this.B() && this.Cf != $k,
					b = this.q();
				a && (Fa(b[zc], Dj), xs(b, k));
				this.m.Oc(b, this.Qt, this.Cx);
				a && xs(b, n)
			}
		};

		function Ys(a, b, c) {
			this.Ai = c || (a ? br(np(a) ? ja[gb](a) : a) : br());
			Xs[N](this, this.Ai.ep(Di, {
				style: Rl
			}));
			this.Ll = new $(1, 1);
			this.Ce = new Ps;
			a && this.lw(a);
			b != l && this.rw(b)
		}
		xp(Ys, Xs);
		var Zs = [];
		V = Ys[K];
		V.Rb = l;
		Ka(V, "goog-tooltip");
		V.mq = 500;
		V.nq = 0;
		V.lw = function(a) {
			a = np(a) ? ja[gb](a) : a;
			this.Ce.add(a);
			Qr(a, Xk, this.cq, n, this);
			Qr(a, Wk, this.Vi, n, this);
			Qr(a, Vk, this.bq, n, this);
			Qr(a, Xi, this.aq, n, this);
			Qr(a, Wg, this.Vi, n, this)
		};
		V.detach = function(a) {
			if(a) a = np(a) ? ja[gb](a) : a, this.jq(a), this.Ce.remove(a);
			else {
				for(var b = this.Ce.Je(), c = 0; a = b[c]; c++) this.jq(a);
				this.Ce[Pb]()
			}
		};
		V.jq = function(a) {
			Ur(a, Xk, this.cq, n, this);
			Ur(a, Wk, this.Vi, n, this);
			Ur(a, Vk, this.bq, n, this);
			Ur(a, Xi, this.aq, n, this);
			Ur(a, Wg, this.Vi, n, this)
		};
		V.Fv = function(a) {
			this.mq = a
		};
		V.Ev = function(a) {
			this.nq = a
		};
		V.rw = function(a) {
			var b = this.q();
			if(En in b) b.textContent = a;
			else if(b[Gb] && 3 == b[Gb][cb]) {
				for(; b.lastChild != b[Gb];) b[Cc](b.lastChild);
				b[Gb].data = a
			} else lr(b), b[t](dr(b)[lb](a))
		};
		V.wl = function(a) {
			var b = this.q();
			b && mr(b);
			Ys.Pb.wl[N](this, a);
			a && (b = this.Ai.nb[Bc], b.insertBefore(a, b.lastChild))
		};
		V.getState = function() {
			return this.Mf ? this.B() ? 4 : 1 : this.Wg ? 3 : this.B() ? 2 : 0
		};
		V.bl = function() {
			if(!Ws[K].bl[N](this)) return n;
			if(this[Hc])
				for(var a, b = 0; a = Zs[b]; b++) nr(a.q(), this[Hc]) || a.Df(n);
			0 <= Lp(Zs, this) || Zs[v](this);
			a = this.q();
			Ka(a, this.className);
			this.Fi();
			Qr(a, Xk, this.dp, n, this);
			Qr(a, Wk, this.cp, n, this);
			this.$k();
			return k
		};
		V.vl = function() {
			Wp(Zs, this);
			for(var a = this.q(), b, c = 0; b = Zs[c]; c++) b[Hc] && nr(a, b[Hc]) && b.Df(n);
			this.jp && this.jp.jl();
			Ur(a, Xk, this.dp, n, this);
			Ur(a, Wk, this.cp, n, this);
			Qa(this, ba);
			if(0 == this.getState()) this.yi = n;
			Ws[K].vl[N](this)
		};
		V.Pw = function(a, b) {
			this[Hc] == a && this.Ce[Tc](this[Hc]) && (this.yi || !this.Ix ? (this.Df(n), this.B() || this.cv(a, b)) : Qa(this, ba));
			this.Mf = ba
		};
		V.cv = function(a, b) {
			Qa(this, a);
			this.Qw(b || this.Gp(0));
			this.Df(k)
		};
		V.Sw = function(a) {
			this.Wg = ba;
			a == this[Hc] && (this.Rb == l || this.Rb != this.q() && !this.Ce[Tc](this.Rb)) && !this.Lu() && this.Df(n)
		};
		V.Lu = function() {
			return !(!this.wp || !this.wp.Rb)
		};
		V.Pp = function(a) {
			var b = this.Ai.Oi();
			this.Ll.x = a[Wb] + b.x;
			this.Ll.y = a[Xb] + b.y
		};
		V.cq = function(a) {
			var b = this.Ei(a[Ec]);
			this.Rb = b;
			this.Fi();
			b != this[Hc] && (Qa(this, b), this.Kp(b), this.Hp(), this.Pp(a))
		};
		V.Ei = function(a) {
			try {
				for(; a && !this.Ce[Tc](a);) a = a[Zc];
				return a
			} catch(b) {
				return l
			}
		};
		V.bq = function(a) {
			this.Pp(a);
			this.yi = k
		};
		V.aq = function(a) {
			this.Rb = a = this.Ei(a[Ec]);
			this.yi = k;
			if(this[Hc] != a) {
				Qa(this, a);
				var b = this.Gp(1);
				this.Fi();
				this.Kp(a, b);
				this.Hp()
			}
		};
		V.Gp = function(a) {
			return 0 == a ? (a = this.Ll[Dc](), new $s(a)) : new at(this.Rb)
		};
		V.Hp = function() {
			if(this[Hc])
				for(var a, b = 0; a = Zs[b]; b++)
					if(nr(a.q(), this[Hc])) a.wp = this, this.jp = a
		};
		V.Vi = function(a) {
			var b = this.Ei(a[Ec]),
				c = this.Ei(a[$a]);
			if(b != c) {
				if(b == this.Rb) this.Rb = l;
				this.$k();
				this.yi = n;
				this.B() && (!a[$a] || !nr(this.q(), a[$a])) ? this.jl() : Qa(this, ba)
			}
		};
		V.dp = function() {
			var a = this.q();
			if(this.Rb != a) this.Fi(), this.Rb = a
		};
		V.cp = function(a) {
			var b = this.q();
			if(this.Rb == b && (!a[$a] || !nr(b, a[$a]))) this.Rb = l, this.jl()
		};
		V.Kp = function(a, b) {
			if(!this.Mf) this.Mf = Us(Z(this.Pw, this, a, b), this.mq)
		};
		V.$k = function() {
			if(this.Mf) Ts.clearTimeout(this.Mf), this.Mf = ba
		};
		V.jl = function() {
			if(2 == this.getState()) this.Wg = Us(Z(this.Sw, this, this[Hc]), this.nq)
		};
		V.Fi = function() {
			if(this.Wg) Ts.clearTimeout(this.Wg), this.Wg = ba
		};
		V.lb = function() {
			this.Df(n);
			this.$k();
			this.detach();
			this.q() && mr(this.q());
			this.Rb = l;
			delete this.Ai;
			Ys.Pb.lb[N](this)
		};

		function $s(a, b) {
			Gs[N](this, a, b)
		}
		xp($s, Gs);
		$s[K].Oc = function(a, b, c) {
			b = os(a);
			b = rs(b);
			c = c ? new hs(c.top + 10, c[R], c[P], c[C] + 10) : new hs(10, 0, 0, 10);
			Ds(this.u, a, 4, c, b, 9) & 496 && Ds(this.u, a, 4, c, b, 5)
		};

		function at(a) {
			Fs[N](this, a, 3)
		}
		xp(at, Fs);
		at[K].Oc = function(a, b, c) {
			var d = new $(10, 0);
			Cs(this.element, this.vq, a, b, d, c, 9) & 496 && Cs(this.element, 2, a, 1, d, c, 5)
		};
		var bt = {
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#00ffff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000000",
			blanchedalmond: "#ffebcd",
			blue: "#0000ff",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#00ffff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgreen: "#006400",
			darkgrey: "#a9a9a9",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkslategrey: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dimgrey: "#696969",
			dodgerblue: "#1e90ff",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#ff00ff",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			gold: "#ffd700",
			goldenrod: "#daa520",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			grey: "#808080",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavender: "#e6e6fa",
			lavenderblush: "#fff0f5",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgray: "#d3d3d3",
			lightgreen: "#90ee90",
			lightgrey: "#d3d3d3",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslategray: "#778899",
			lightslategrey: "#778899",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#00ff00",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#ff00ff",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370d8",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#d87093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			red: "#ff0000",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			slategrey: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			wheat: "#f5deb3",
			white: Ud,
			whitesmoke: "#f5f5f5",
			yellow: "#ffff00",
			yellowgreen: "#9acd32"
		};

		function ct(a) {
			var b = {},
				a = S + a,
				c = a[ib](0) == ud ? a : ud + a;
			if(dt[Za](c)) return b.Wi = et(c), Aa(b, Cj), b;
			a: {
				var d = a.match(ft);
				if(d) {
					var c = ea(d[1]),
						e = ea(d[2]),
						d = ea(d[3]);
					if(0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
						c = [c, e, d];
						break a
					}
				}
				c = []
			}
			if(c[I]) return b.Wi = gt(c), Aa(b, gm), b;
			if(bt && (c = bt[a[fd]()])) return b.Wi = c, Aa(b, al), b;
			h(r(a + " is not a valid color string"))
		}
		var ht = /#(.)(.)(.)/;

		function et(a) {
			dt[Za](a) || h(r("'" + a + "' is not a valid hex color"));
			4 == a[I] && (a = a[bb](ht, vd));
			return a[fd]()
		}

		function it(a) {
			a = et(a);
			return [ga(a[Zb](1, 2), 16), ga(a[Zb](3, 2), 16), ga(a[Zb](5, 2), 16)]
		}

		function jt(a, b, c) {
			a = ea(a);
			b = ea(b);
			c = ea(c);
			(ka(a) || 0 > a || 255 < a || ka(b) || 0 > b || 255 < b || ka(c) || 0 > c || 255 < c) && h(r('"(' + a + ge + b + ge + c + '") is not a valid RGB color'));
			a = kt(a[ac](16));
			b = kt(b[ac](16));
			c = kt(c[ac](16));
			return ud + a + b + c
		}

		function gt(a) {
			return jt(a[0], a[1], a[2])
		}
		var dt = /^#(?:[0-9a-f]{3}){1,2}$/i,
			ft = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

		function kt(a) {
			return 1 == a[I] ? Ae + a : a
		}

		function lt(a, b, c) {
			c = pr(c, 0, 1);
			return [s[z](c * a[0] + (1 - c) * b[0]), s[z](c * a[1] + (1 - c) * b[1]), s[z](c * a[2] + (1 - c) * b[2])]
		};

		function mt(a) {
			return a == U || a == S || a == mo ? U : ct(a).Wi
		}

		function nt(a) {
			if(a == U) return U;
			a = it(a);
			a = s[z]((a[0] + a[1] + a[2]) / 3);
			return jt(a, a, a)
		}

		function ot(a, b) {
			a = sq(a);
			if(!W(a[bc])) a.bold = b;
			return a
		};

		function pt(a, b) {
			this.start = a < b ? a : b;
			this.end = a < b ? b : a
		}
		Oa(pt[K], function() {
			return new pt(this[O], this.end)
		});

		function qt(a, b) {
			return a[O] <= b && a.end >= b
		};

		function rt(a, b, c) {
			c = W(c) ? c : 1.0E-5;
			return a == b || s.abs(a - b) <= c
		}

		function st(a, b, c) {
			return !a || a == U ? b : !b || b == U ? a : gt(lt(it(a), it(b), c))
		}

		function tt(a, b) {
			if(!W(b)) return a;
			var c = new pt(b, b);
			return a ? new pt(s.min(a[O], c[O]), s.max(a.end, c.end)) : c
		}

		function ut(a, b, c) {
			var d = W(b) ? b : a && W(c) && c < a[O] ? c : a ? a[O] : l,
				a = W(c) ? c : a && W(b) && b > a.end ? b : a ? a.end : l;
			return W(d) && W(a) ? new pt(d, a) : l
		};

		function vt(a, b, c) {
			this.ze = a;
			this.ye = mt(b);
			this.xe = mt(W(c) ? c : Ud)
		}
		Oa(vt[K], function() {
			return new vt(this.ze, this.ye, this.xe)
		});
		vt[K].$h = function() {
			return new vt(this.ze, nt(this.ye), nt(this.xe))
		};

		function wt(a) {
			W(a) || (a = {});
			this.O = U;
			W(a.fill) && this.Fk(a.fill);
			this.$b = 1;
			W(a.rb) && this.dk(a.rb);
			this.Jb = U;
			W(a.stroke) && this.gc(a.stroke);
			this.H = 1;
			W(a.Qa) && this.ee(a.Qa);
			this.nc = 1;
			W(a.vd) && this.bg(a.vd);
			this.jd = $m;
			W(a.io) && this.co(a.io);
			this.F = l;
			if(a.F) this.F = sq(a.F), this.F.Kd = mt(this.F.Kd), this.F.Ld = mt(this.F.Ld);
			this.Ea = l;
			a.pattern && this.Kk(a.pattern)
		}
		V = wt[K];
		Oa(V, function() {
			var a = new wt;
			a.O = this.O;
			a.$b = this.$b;
			a.Jb = this.Jb;
			a.H = this.H;
			a.nc = this.nc;
			a.jd = this.jd;
			a.F = this.F ? sq(this.F) : l;
			a.Ea = this.Ea ? this.Ea[Dc]() : l;
			return a
		});
		V.$h = function() {
			var a = this[Dc]();
			a.Fk(nt(this.O));
			a.gc(nt(this.Jb));
			if(this.F) {
				var b = sq(this.F);
				b.Kd = nt(this.F.Kd);
				b.Ld = nt(this.F.Ld);
				a.F = b
			}
			this.Ea && a.Kk(this.Ea.$h());
			return a
		};
		V.Fk = function(a) {
			this.O = mt(a)
		};
		V.dk = function(a) {
			this.$b = pr(a, 0, 1)
		};
		V.gc = function(a, b) {
			this.Jb = mt(a);
			W(b) && this.ee(b)
		};
		V.ee = function(a) {
			this.H = a
		};
		V.wo = function() {
			return this.pd() ? this.H : 0
		};
		V.bg = function(a) {
			this.nc = pr(a, 0, 1)
		};
		V.co = function(a) {
			this.jd = a
		};
		V.Kk = function(a) {
			this.Ea = a
		};
		V.Qg = function() {
			return 0 < this.$b && (!(!W(this.O) || this.O == U) || W(this.F) || W(this.Ea))
		};
		V.pd = function() {
			return 0 < this.H && 0 < this.nc && !(!W(this.Jb) || this.Jb == U)
		};
		V.ho = function() {
			return this.jd != $m
		};
		V.xg = function() {
			return !this.Qg() && !this.pd()
		};
		V.Af = function() {
			return this.Qg() && 1 <= this.$b
		};
		V.fo = function() {
			return this.pd() && 1 <= this.nc
		};
		var xt = new wt({
			rb: 0,
			fill: So,
			vd: 0,
			stroke: So
		});

		function yt(a, b) {
			return new wt({
				stroke: U,
				fill: a,
				rb: W(b) ? b : 1
			})
		}

		function zt(a, b, c) {
			return new wt({
				stroke: a,
				Qa: b,
				fill: W(c) && c ? Sd : U
			})
		}

		function At(a, b) {
			return a.Af() ? a.O : b.Af() ? !a.Qg() ? b.O : st(a.O, b.O, a.$b) : l
		};

		function Bt(a, b) {
			a && (a.logicalname = b)
		}

		function Ct(a) {
			a = or(a, function(a) {
				return W(a.logicalname)
			}, k);
			return !a ? kg : a.logicalname
		};

		function Dt(a) {
			var b = l,
				c = l;
			pp(a) ? b = a : c = a;
			this.dw = b;
			this.Ga = c;
			this.Ui = l
		}
		Dt[K].ib = function(a) {
			this.Ui = a;
			this.Mg() && Bt(this.Ga, a)
		};
		Dt[K].Nn = function() {
			return this.Mg() ? Ct(this.Ga) : this.Ui
		};
		Dt[K].q = function() {
			if(!this.Ga) this.Ga = this.dw(), ip(this.Ui) || Bt(this.Ga, this.Ui);
			return this.Ga
		};
		Dt[K].Mg = function() {
			return !!this.Ga
		};

		function Et() {
			this.eb = []
		}
		V = Et[K];
		V.ac = function(a) {
			this.eb[v](a)
		};
		V.move = function(a, b) {
			this.ac({
				type: Zk,
				data: {
					x: a,
					y: b
				}
			})
		};
		V.G = function(a, b) {
			this.ac({
				type: Ak,
				data: {
					x: a,
					y: b
				}
			})
		};
		V.pi = function(a, b, c, d, e, f) {
			this.ac({
				type: ji,
				data: {
					Cb: a,
					Db: b,
					gd: c,
					hd: d,
					x: e,
					y: f
				}
			})
		};
		V.jb = function(a, b, c, d, e, f, g) {
			this.ac({
				type: Bg,
				data: {
					ml: a,
					nl: b,
					ol: c,
					pl: d,
					Ho: e,
					ql: f,
					Io: g
				}
			})
		};
		V.Dk = function(a, b) {
			if(0 != a[I])
				if(0 == this.eb[I] ? this[rb](a[0].x, a[0].y) : this.G(a[0].x, a[0].y), b)
					for(var c = 1; c < a[I]; ++c) this.pi(b[c - 1][1].x, b[c - 1][1].y, b[c][0].x, b[c][0].y, a[c].x, a[c].y);
				else
					for(c = 1; c < a[I]; ++c) this.G(a[c].x, a[c].y)
		};
		V.close = function() {
			this.ac({
				type: Vh,
				data: l
			})
		};

		function Ft(a, b) {
			var c = new Et;
			0 < a[I] && (c.Dk(a), b || c[Ac]());
			return c
		};

		function Gt(a, b, c) {
			switch(c) {
				case fn:
					c = a;
					a += b;
					break;
				case Ni:
					c = a - b;
					break;
				case Eh:
					c = a - b / 2;
					a += b / 2;
					break;
				default:
					c = a = NaN
			}
			return {
				start: c,
				end: a
			}
		}

		function Ht(a, b, c) {
			switch(c) {
				case fn:
					return a;
				case Ni:
					return b;
				case Eh:
					return ur(a, b)
			}
		};

		function It(a) {
			this.Nc = a;
			this.Wd = br(a);
			this.ll = [];
			this.Pd = new $r;
			this.Ln = fs(Z(function(a, c) {
				return this.Rp(a, c)
			}, this), function(a, c) {
				var d = [a, c[0]];
				mq(c[1], function(a, b) {
					d[v](a);
					d[v](b)
				});
				return d[cd](ig)
			})
		}
		var Jt = 0;

		function Kt() {
			var a = jg + Jt[ac]();
			Jt++;
			return a
		}
		V = It[K];
		oa(V, 0);
		Ua(V, 0);
		V.qs = function(a, b) {
			var c = this.hq(a, b);
			c.ib(kg);
			return c
		};
		Ba(V, function() {
			this.Pd.cc();
			this.Pd = new $r;
			Mp(this.ll, function(a) {
				a.lb()
			});
			Vp(this.ll);
			this.Qo(this.Nc[gb](Gh))
		});
		V.ib = function(a, b) {
			a && (a[sc] == Dt ? a.ib(b) : Bt(a, b))
		};
		V.Nn = function(a) {
			return Ct(a)
		};
		V.qf = function(a, b, c) {
			a[sc] == Dt && (a = a.q());
			this.Pd.If(a, b, c)
		};
		V.is = function(a, b, c) {
			a = new Ys(a);
			b = this.Wd.ep(Di, S, b);
			ks(b, c);
			a.q()[t](b);
			a.Fv(100);
			a.Ev(100);
			this.ll[v](a);
			return a
		};
		V.appendChild = function(a, b) {
			if(b) {
				var c;
				if(b[sc] == Dt) {
					if(!b.Mg()) return;
					c = b.q()
				} else c = b;
				this.Dp(a)[t](c)
			}
		};
		V.replaceChild = function(a, b, c) {
			this.Dp(a).replaceChild(b, c);
			Xr(c)
		};
		V.Ng = function(a) {
			a.Mg() && this.Qo(a.q())
		};
		V.Qo = function(a) {
			this.Wd.Ng(a)
		};
		V.tl = function(a) {
			this.Wd.removeNode(a);
			Xr(a)
		};
		V.Dp = function(a) {
			return a ? a.q() : this.Nc[gb](Fh)
		};
		V.ja = function(a) {
			var a = W(a) ? a : n,
				b = new Dt(Z(this.Lp, this));
			a || b.q();
			return b
		};
		V.oe = function(a, b) {
			return this.tq(this.bx(a), b)
		};
		V.Zj = function(a, b, c, d, e) {
			a = this.Uh(a, b, c, d);
			this[t](e, a);
			return a
		};
		V.um = function(a, b, c, d, e, f) {
			a = this.wq(a, b, c, d, e);
			this[t](f, a);
			return a
		};
		V.Wa = function(a, b, c, d, e, f) {
			a = this.ne(a, b, c, d, e);
			this[t](f, a);
			return a
		};
		V.xa = function(a, b, c) {
			a = this.oe(a, b);
			this[t](c, a);
			return a
		};
		V.rh = function(a, b, c, d, e, f, g, i) {
			a = this.xq(a, b, c, d, e, f, g);
			this[t](i, a);
			return a
		};
		V.ct = function(a, b, c, d, e, f, g, i, j) {
			a = this.Yi(a, b, c, d, e, f, g, i);
			this[t](j, a);
			return a
		};
		V.js = function(a, b, c, d, e, f, g, i, j) {
			a = this.Zi(a, b, c, d, e, f, g, i);
			this[t](j, a);
			return a
		};
		V.Ju = function(a, b) {
			return this.Ln(a, b)[w]
		};
		V.yw = function(a, b) {
			switch(b[F]) {
				case Zk:
					var c = b[A];
					this.Yo(a, c.x, c.y);
					break;
				case Ak:
					c = b[A];
					this.Xo(a, c.x, c.y);
					break;
				case ji:
					c = b[A];
					this.Wo(a, c.Cb, c.Db, c.gd, c.hd, c.x, c.y);
					break;
				case Bg:
					c = b[A];
					this.Uo(a, c.ml, c.nl, c.ol, c.pl, c.Ho, c.ql, c.Io);
					break;
				case Vh:
					this.Vo(a)
			}
		};
		V.bx = function(a) {
			for(var b = [], c = 0; c < a.eb[I]; c++) this.yw(b, a.eb[c]);
			return b
		};

		function Lt(a) {
			It[N](this, a);
			this.Ff = this.dh = l;
			this.Ji = {}
		}
		xp(Lt, It);
		V = Lt[K];
		V.hq = function(a, b) {
			oa(this, a);
			Ua(this, b);
			var c = this.fb(wn);
			c[E](Mj, Fh);
			c[E](To, a);
			c[E](Bj, b);
			this.Nc[gb](Gh)[t](c);
			this.Ff = this.fb(zi);
			this.Ff[E](Mj, zi);
			this.Ji = {};
			c[t](this.Ff);
			return new Dt(c)
		};
		V.Qp = function() {
			return this.Nc[gb](Gh).innerHTML
		};
		qa(V, function(a) {
			return s[z](100 * a) / 100
		});
		V.Uh = function(a, b, c, d) {
			var e = this.fb(Ph);
			e[E](li, a);
			e[E](mi, b);
			e[E](Vl, c);
			this.Ec(e, d);
			return e
		};
		V.wq = function(a, b, c, d, e) {
			var f = this.fb(Ki);
			f[E](li, a);
			f[E](mi, b);
			f[E](om, c);
			f[E](pm, d);
			this.Ec(f, e);
			return f
		};
		V.ne = function(a, b, c, d, e) {
			var f = this.fb(Zl);
			f[E](Vo, a);
			f[E](Yo, b);
			f[E](To, c);
			f[E](Bj, d);
			this.Ec(f, e);
			return f
		};
		V.tq = function(a, b) {
			var c = this.fb(xl);
			c[E](ni, a[cd](S));
			this.Ec(c, b);
			return c
		};
		V.xq = function(a, b, c, d, e, f, g) {
			return this.Zi(a, b, c, d, 0, e, f, g)
		};
		V.Yi = function(a, b, c, d, e, f, g, i) {
			var j = Ht(b, d, f),
				m = Ht(c, e, f);
			return this.Zi(a, j, m, (new vr(b, c, d, e)).ax(), rr(180 * s[Db](e - c, d - b) / s.PI), f, g, i)
		};
		V.Zi = function(a, b, c, d, e, f, g, i) {
			var j = new wt({
				fill: i[tb]
			});
			if(i[tb] && i[tb] != U && i.$a && i.$a != U) {
				var m = new wt({
						fill: i[tb],
						stroke: i.$a,
						Qa: 3
					}),
					o = this.ja();
				this.Yg(a, b, c, d, e, f, g, i, m, o);
				this.Yg(a, b, c, d, e, f, g, i, j, o);
				return o.q()
			}
			return this.Xg(a, b, c, d, e, f, g, i, j)
		};
		V.Xg = function(a, b, c, d, e, f, g, i, j) {
			d = this.fb(An);
			g = Gt(0, i[M], g);
			g = Ht(g[O], g.end, Ni);
			g -= 0.15 * i[M];
			g = new wr(0, g);
			g[xc](sr(e));
			c = new wr(b, c);
			c.add(g);
			b = c.x;
			c = c.y;
			d[t](this.Nc[lb](a));
			switch(f) {
				case fn:
					d[E](Bn, fn);
					break;
				case Eh:
					d[E](Bn, Ok);
					break;
				case Ni:
					d[E](Bn, Ni)
			}
			d[E](Vo, b);
			d[E](Yo, c);
			d[E](Zi, i.zb);
			d[E]($i, i[M] || 0);
			i[bc] && d[E](bj, Xg);
			i.zf && d[E](aj, bk);
			i.$n && d[E](Cn, ro);
			0 != e && d[E](ko, km + e + id + b + id + c + fe);
			this.Ec(d, j);
			return d
		};
		V.Yg = function(a, b, c, d, e, f, g, i, j, m) {
			a = this.Xg(a, b, c, d, e, f, g, i, j);
			this[t](m, a);
			return a
		};
		V.Lp = function() {
			return this.fb(nj)
		};
		V.en = function(a, b) {
			var c = Kt(),
				d = this.fb(Th),
				e = this.fb(Zl);
			e[E](Vo, b[C]);
			e[E](Yo, b.top);
			e[E](To, b[w]);
			e[E](Bj, b[Q]);
			d[t](e);
			d[E](Mj, c);
			this.Ff[t](d);
			d = a.q();
			d[E](Sh, so + c + fe);
			return d
		};
		V.Yo = function(a, b, c) {
			a[v](If + b + ge + c)
		};
		V.Xo = function(a, b, c) {
			a[v](Gf + b + ge + c)
		};
		V.Wo = function(a, b, c, d, e, f, g) {
			a[v](tf + b + ge + c + ge + d + ge + e + ge + f + ge + g)
		};
		V.Vo = function(a) {
			a[v](bg)
		};
		V.Uo = function(a, b, c, d, e, f, g, i) {
			var f = rr(f),
				g = rr(g),
				j = d * s.cos(sr(g - 90)),
				m = e * s.sin(sr(g - 90)),
				f = i ? g - f : f - g;
			0 > f && (f += 360);
			a[v]( of +d + ge + e + je + (180 < f ? 1 : 0) + ge + (i ? 1 : 0) + ge + (b + j) + ge + (c + m))
		};
		V.Kg = function(a, b, c) {
			a[E](ko, lo + b + ie + c + fe)
		};
		V.Qk = function(a, b) {
			a[E](To, b)
		};
		V.no = function(a, b) {
			a[E](Vo, b)
		};
		V.gc = function(a, b, c) {
			a[E](un, c);
			b && a[E](qn, b)
		};
		V.Rp = function(a, b) {
			var c = this.dh;
			if(!c) {
				var d = this.Nc,
					c = d.createElementNS(Kj, Di),
					e = c[zc];
				Ta(e, U);
				Ia(e, lg);
				e.top = this[Q] + 10 + Ul;
				xa(e, this[w] + 10 + Ul);
				e.whiteSpace = el;
				c[t](d[lb](id));
				d[Bc][t](c);
				this.dh = c
			}
			c[Gb].data = a;
			e = c[zc];
			ra(e, b.zb);
			Na(e, b[M] + Ul);
			e.fontWeight = b[bc] ? Xg : S;
			e.fontStyle = b.zf ? bk : S;
			Ta(e, Vg);
			d = c[kc];
			c = c[Mc];
			Ta(e, U);
			return new lq(d, c)
		};
		V.fb = function(a) {
			return this.Nc.createElementNS(Lj, a)
		};
		V.Ec = function(a, b) {
			b.pd() ? (a[E](qn, b.Jb), a[E](un, b.H), b.fo() ? a.removeAttribute(tn) : a[E](tn, b.nc), b.ho() ? a[E](rn, Mt(b.jd, b.H)) : a.removeAttribute(rn)) : (a[E](qn, U), a[E](un, 0));
			b.Af() ? a.removeAttribute(Si) : a[E](Si, b.$b);
			var c = b.F;
			if(c) c = this.ht(c), a[E](Ri, so + c + fe);
			else if(W(b.Ea)) c = this.it(b.Ea), a[E](Ri, so + c + fe);
			else a[E](Ri, b.O)
		};
		V.ht = function(a) {
			var b = Kt(),
				c = this.fb(Ek),
				d = a.Cb,
				e = a.gd,
				f = a.Db,
				g = a.hd;
			typeof d == pn && d[ib](d[I] - 1) == Yd && (d = s[z](ga(d, 10) * this[w] / 100));
			typeof e == pn && e[ib](e[I] - 1) == Yd && (e = s[z](ga(e, 10) * this[w] / 100));
			typeof f == pn && f[ib](f[I] - 1) == Yd && (f = s[z](ga(f, 10) * this[Q] / 100));
			typeof g == pn && g[ib](g[I] - 1) == Yd && (g = s[z](ga(g, 10) * this[Q] / 100));
			c[E](Mj, b);
			c[E](Wo, d);
			c[E](Zo, f);
			c[E](Xo, e);
			c[E]($o, g);
			c[E](tj, to);
			d = this.fb(ln);
			d[E](jl, De);
			d[E](vn, mn + a.Kd);
			c[t](d);
			d = this.fb(ln);
			d[E](jl, Ke);
			d[E](vn, mn + a.Ld);
			c[t](d);
			this.Ff[t](c);
			return b
		};
		V.it = function(a) {
			var b = a.ze + ig + a.ye + ig + a.xe;
			if(!(b in this.Ji)) {
				var c = l;
				switch(a.ze) {
					case Tl:
						c = this.Zv(a)
				}
				a = Kt();
				c[E](Mj, a);
				this.Ff[t](c);
				this.Ji[b] = a
			}
			return this.Ji[b]
		};
		V.Zv = function(a) {
			var b = this.fb(zl);
			b[E](Al, to);
			b[E](Vo, Ae);
			b[E](Yo, Ae);
			b[E](To, Oe);
			b[E](Bj, Oe);
			b[E](Lo, Ce);
			var c = this.fb(Zl);
			c[E](Vo, Ae);
			c[E](Yo, Ae);
			c[E](To, Oe);
			c[E](Bj, Oe);
			c[E](Ri, a.xe);
			b[t](c);
			c = this.fb(nj);
			c[E](qn, a.ye);
			c[E](sn, dn);
			a = this.fb(Ak);
			a[E](Wo, Ne);
			a[E](Zo, Ae);
			a[E](Xo, Oe);
			a[E]($o, Ne);
			a[E](un, Ne);
			c[t](a);
			a = this.fb(Ak);
			a[E](Wo, Ae);
			a[E](Zo, Ne);
			a[E](Xo, Ne);
			a[E]($o, Oe);
			a[E](un, Ne);
			c[t](a);
			b[t](c);
			return b
		};

		function Mt(a, b) {
			switch(a) {
				case $m:
					return Ae;
				case oi:
					return S + 4 * b + ge + (S + b);
				default:
					return Mt($m, b)
			}
		};

		function Nt(a) {
			this.$d = a
		}

		function Ot(a, b, c) {
			a = ep(b, a);
			return W(a) && pp(c) ? c(a) : a
		}
		V = Nt[K];
		V.R = function(a, b, c) {
			for(var d = l, e = 0; e < this.$d[I]; e++) {
				a: {
					var d = this.$d[e],
						f = a,
						g = c;
					if(np(f)) d = Ot(d, f, g);
					else {
						for(var i = 0; i < f[I]; ++i) {
							var j = Ot(d, f[i], g);
							if(W(j)) {
								d = j;
								break a
							}
						}
						d = l
					}
				}
				if(W(d)) return d
			}
			d = b;
			return hp(d) ? d : l
		};
		V.fi = function(a, b, c) {
			for(var b = W(b) ? sq(b) : {}, d = this.$d[I] - 1; 0 <= d; d--) {
				var e = b,
					f = this.$d[d],
					g = a,
					i = c;
				np(g) && (g = [g]);
				for(var j = 0; j < g[I]; ++j) {
					var m = Ot(f, g[j], i) || {};
					vq(e, m)
				}
			}
			return b
		};

		function Pt(a) {
			if(!W(a)) return l;
			if(typeof a == Yg) return a;
			a = S + a;
			return a == Ge || a[fd]() == oo ? k : a == Ae || a[fd]() == Qi ? n : l
		}
		V.za = function(a, b) {
			var c = this.Go(a);
			if(W(c)) return c;
			hp(b) || (b = n);
			return b
		};
		V.Go = function(a) {
			return this.R(a, l, Pt)
		};

		function Qt(a) {
			if(!W(a)) return l;
			if(typeof a == gl) return a;
			a = Gp(S + a);
			return ka(a) ? l : a
		}
		V.be = function(a, b) {
			var c = this.Mc(a);
			if(W(c)) return c;
			hp(b) || (b = 0);
			return b
		};
		V.Mc = function(a) {
			return this.R(a, l, Qt)
		};

		function Rt(a) {
			a = Qt(a);
			return W(a) && 0 <= a ? a : l
		}
		V.da = function(a, b) {
			var c = this.Uk(a);
			if(W(c)) return c;
			hp(b) || (b = 0);
			return b
		};
		V.Uk = function(a) {
			return this.R(a, l, Rt)
		};

		function St(a) {
			return !W(a) ? l : S + a
		}
		V.Hc = function(a, b) {
			hp(b) || (b = S);
			return this.R(a, b, St)
		};
		V.hi = function(a) {
			return this.R(a, l, St)
		};

		function Tt(a) {
			return(a = St(a)) ? a : l
		}
		V.Uc = function(a, b) {
			return this.R(a, b, Tt)
		};

		function Ut(a, b) {
			var c = St(b);
			return rq(a, c) ? c : l
		}
		V.ia = function(a, b, c) {
			return this.R(a, c, Z(Ut, l, b))
		};
		V.Wh = function(a, b) {
			return this.R(a, l, Z(Ut, l, b))
		};
		V.rx = function(a) {
			a = this.R(a, l);
			if(np(a)) {
				var b = a[qc](Ye);
				1 == b[I] && (b = a[qc](ge));
				if(3 == b[I]) {
					var c = Gp(b[0]),
						d = Gp(b[1]),
						b = Gp(b[2]);
					if(0 <= b && 0 <= d && 0 <= c) return [c, d, b]
				}
			}
			return !jp(a) || 3 != a[I] ? l : a
		};
		V.zh = function(a, b) {
			var c = this.fi(a, b, function(a) {
					mp(a) || (a = {
						fill: a
					});
					var b = {},
						c = Tt(a.fill);
					if(W(c)) b.fill = c;
					c = Tt(a.stroke);
					if(W(c)) b.stroke = c;
					c = Rt(a.opacity);
					if(W(c)) b.rb = c;
					c = Rt(a.strokeWidth);
					if(W(c)) b.Qa = c;
					if((a = a.gradient) && W(a.color1) && W(a.color2) && W(a.x1) && W(a.y1) && W(a.x2) && W(a.y2)) c = {}, c.Kd = Tt(a.color1), c.Ld = Tt(a.color2), c.Cb = a.x1, c.Db = a.y1, c.gd = a.x2, c.hd = a.y2, b.F = c;
					return b
				}),
				c = new wt(c);
			c.Qg() || (c.Fk(xt.O), c.dk(xt.$b));
			c.pd() || (c.gc(xt.Jb), c.bg(xt.nc));
			return c
		};
		V.vc = function(a, b) {
			return this.fi(a, b, function(a) {
				var b = {},
					e = Tt(a[tb]);
				W(e) && va(b, e);
				e = Tt(a.auraColor);
				if(W(e)) b.$a = e;
				if(e = St(a.fontName)) b.zb = e;
				(e = Rt(a[M])) && Na(b, e);
				e = Pt(a[bc]);
				if(W(e)) b.bold = e;
				e = Pt(a.italic);
				if(W(e)) b.zf = e;
				a = Pt(a.underline);
				if(W(a)) b.$n = a;
				return b
			})
		};
		var Vt = {
			Ay: "multiple",
			Ky: Mm
		};

		function Wt(a, b, c) {
			b || h(r("viscommon: container cannot be null"));
			var d = !!c,
				e = gr(Di, {
					style: Ql
				}),
				c = ns(b, Pl);
			(c == S || c == gn) && ks(b, Pl, am);
			return {
				addError: function(c) {
					d ? (e[Zc] != b && b[t](e), Xt(a, e, c)) : Xt(a, b, c)
				},
				Ty: function(c) {
					d ? (e[Zc] != b && b[t](e), Yt(a, e, c)) : Yt(a, b, c)
				},
				removeAll: function() {
					d ? google[wc][Yc][Ic](e) : google[wc][Yc][Ic](b)
				}
			}
		}

		function Xt(a, b, c) {
			var d = {
					removable: n,
					type: Oi
				},
				b = google[wc][Yc].addError(b, c, l, d);
			google[wc][eb][Xa](a, Oi, {
				id: b,
				message: c,
				detailedMessage: S,
				options: d
			})
		}

		function Yt(a, b, c) {
			var d = {
					removable: k,
					type: Ro
				},
				b = google[wc][Yc].addError(b, c, l, d);
			google[wc][eb][Xa](a, Oi, {
				id: b,
				message: c,
				detailedMessage: S,
				options: d
			})
		};

		function Zt(a) {
			It[N](this, a);
			this.dh = l
		}
		xp(Zt, It);
		V = Zt[K];
		V.hq = function(a, b) {
			oa(this, a);
			Ua(this, b);
			var c = this.xb(Di);
			this.Td(c, -5E4, -5E4, this[w] + 1E5, this[Q] + 1E5);
			this.Nc[gb](Gh)[t](c);
			var d = this.ja(),
				e = d.q();
			e.id = Fh;
			e.coordorigin = Be;
			e.coordsize = a + id + b;
			e[zc].top = 5E4;
			xa(e[zc], 5E4);
			c[t](e);
			return d
		};
		qa(V, function(a) {
			return s[z](a)
		});
		V.Uh = function(a, b, c, d) {
			var e = this.xb(yo),
				f = 2 * c;
			this.Td(e, a - c, b - c, f, f);
			this.Ec(e, d, n);
			return e
		};
		V.wq = function(a, b, c, d, e) {
			var f = this.xb(yo);
			this.Td(f, a - c, b - d, 2 * c, 2 * d);
			this.Ec(f, e, n);
			return f
		};
		V.ne = function(a, b, c, d, e) {
			var f = this.xb(Ao),
				g = e.Af() && 1 <= d && 1 <= c && !W(e.F);
			this.Ec(f, e, g);
			if(e.pd() || g) c = s.max(c - 1, 0), d = s.max(d - 1, 0);
			this.Td(f, a, b, c, d);
			return f
		};
		V.tq = function(a, b) {
			for(var c = this.xb(Bo), d = this.xb(zo); 0 < a[I] && 0 == Jp(a)[Jc](If, 0);) a = $p(a, 0, a[I] - 1);
			d[E](uo, a[cd](S));
			this.Td(c, 0, 0, this[w], this[Q]);
			c[t](d);
			this.Ec(c, b, n);
			return c
		};
		V.xq = function(a, b, c, d, e, f, g) {
			b = Gt(b, d, e);
			c = Gt(c, g[M], f);
			f = Eh;
			c = Ht(c[O], c.end, f);
			return this.Yi(a, b[O], c, b.end, c, e, f, g)
		};
		V.Yi = function(a, b, c, d, e, f, g, i) {
			var j = new wt({
				fill: i[tb]
			});
			if(i[tb] && i[tb] != U && i.$a && i.$a != U) {
				var m = new wt({
						fill: i[tb],
						stroke: i.$a,
						Qa: 2
					}),
					o = this.ja();
				this.Yg(a, b, c, d, e, f, g, i, m, o);
				this.Yg(a, b, c, d, e, f, g, i, j, o);
				return o.q()
			}
			return this.Xg(a, b, c, d, e, f, g, i, j)
		};
		V.Zi = function(a, b, c, d, e, f, g, i) {
			var e = sr(e),
				d = Gt(b, d, f),
				b = new wr(b, c),
				j = new wr(d[O], c),
				j = j[Dc]().pq(b)[xc](e).add(b),
				c = new wr(d.end, c),
				c = c[Dc]().pq(b)[xc](e).add(b);
			return this.Yi(a, j.x, j.y, c.x, c.y, f, g, i)
		};
		V.Xg = function(a, b, c, d, e, f, g, i, j) {
			var m = this.xb(Bo);
			this.Td(m, 0, 0, this[w], this[Q]);
			if(g != Eh) g = Gt(0, i[M], g), g = Ht(g[O], g.end, Eh), g = new wr(0, g), g[xc](sr(rr(180 * s[Db](e - c, d - b) / s.PI))), c = new wr(b, c), e = new wr(d, e), c.add(g), e.add(g), b = c.x, c = c.y, d = e.x, e = e.y;
			b = s[z](b);
			c = s[z](c);
			d = s[z](d);
			e = s[z](e);
			g = this.xb(zo);
			g[E](uo, If + b + ge + c + Gf + d + ge + e + zf);
			g[E](In, oo);
			b = this.xb(Do);
			b[E](kl, oo);
			d = b[zc];
			Na(d, i[M]);
			ra(d, i.zb);
			switch(f) {
				case fn:
					d[E](vo, hk);
					break;
				case Eh:
					d[E](vo, Eh);
					break;
				case Ni:
					d[E](vo, hm)
			}
			if(i[bc]) d.fontWeight =
				Xg;
			if(i.zf) d.fontStyle = bk;
			b[E](pn, a);
			m[t](g);
			m[t](b);
			this.Ec(m, j, n);
			return m
		};
		V.Yg = function(a, b, c, d, e, f, g, i, j, m) {
			a = this.Xg(a, b, c, d, e, f, g, i, j);
			this[t](m, a);
			return a
		};
		V.Lp = function() {
			var a = this.xb(xo);
			this.Td(a, 0, 0, this[w], this[Q]);
			return a
		};
		V.en = function(a, b) {
			var c = this.xb(Di),
				d = [this.Gb(5E4 + b.top), this.Gb(5E4 + b[C] + b[w]), this.Gb(5E4 + b.top + b[Q]), this.Gb(5E4 + b[C])];
			c[zc].clip = $l + d[cd](ie) + fe;
			this.Td(c, 0, 0, this[w] + 1E5, this[Q] + 1E5);
			a.q();
			d = new Dt(c);
			this[t](d, a);
			this.Wa(1, 1, 1, 1, new wt({
				fill: So
			}), d);
			return c
		};
		V.Yo = function(a, b, c) {
			a[v](If + s[z](b) + ge + s[z](c))
		};
		V.Xo = function(a, b, c) {
			a[v](Gf + s[z](b) + ge + s[z](c))
		};
		V.Wo = function(a, b, c, d, e, f, g) {
			a[v](tf + s[z](b) + ge + s[z](c) + ge + s[z](d) + ge + s[z](e) + ge + s[z](f) + ge + s[z](g))
		};
		V.Vo = function(a) {
			a[v]($f)
		};
		V.Uo = function(a, b, c, d, e, f, g, i) {
			var f = rr(f),
				g = rr(g),
				j = s[z](d * s.cos(sr(f - 90))),
				m = s[z](e * s.sin(sr(f - 90))),
				o = s[z](d * s.cos(sr(g - 90))),
				q = s[z](e * s.sin(sr(g - 90))),
				d = s[z](d),
				e = s[z](e),
				b = s[z](b),
				c = s[z](c);
			if(!(j === o && m === q) || !(i && 180 > rr(g - f) || !i && 180 > rr(f - g))) a[v]((i ? Xf : pf) + (b - d) + ge + (c - e) + ge + (b + d) + ge + (c + e) + ge + (b + j) + ge + (c + m) + ge + (b + o) + ge + (c + q))
		};
		V.Kg = function(a, b, c) {
			a[zc].top = this.Gb(c);
			xa(a[zc], this.Gb(b))
		};
		V.Qk = function(a, b) {
			oa(a[zc], this.Gb(b))
		};
		V.no = function(a, b) {
			xa(a[zc], this.Gb(b))
		};
		V.gc = function(a, b, c) {
			if(0 == c) ua(a, n);
			else {
				ua(a, k);
				if(b) a.strokecolor = b;
				a.strokeweight = c
			}
		};
		V.Rp = function(a, b) {
			var c = this.dh;
			if(c == l) {
				var c = this.xb(Di),
					d = c[zc];
				Ta(d, U);
				Ia(d, lg);
				d.top = this.Gb(this[Q] + 10);
				xa(d, this.Gb(this[w] + 10));
				d.whiteSpace = el;
				d = this.Nc;
				c[t](d[lb](id));
				d[Bc][t](c);
				this.dh = c
			}
			c[Gb].data = a;
			d = c[zc];
			ra(d, b.zb);
			Na(d, this.Gb(b[M] || 0));
			d.fontWeight = b[bc] ? Xg : S;
			d.fontStyle = b.zf ? bk : S;
			Ta(d, Vg);
			var e = c[kc],
				c = c[Mc];
			Ta(d, U);
			b[bc] && (e *= 1.1);
			b.zf && (e *= 0.9);
			return new lq(e, c)
		};
		V.Gb = function(a) {
			return s[z](a) + Ul
		};
		V.xb = function(a) {
			return this.Nc[Bb](a)
		};
		V.Ec = function(a, b, c) {
			for(var d = a.children, e = 0; e < d[I]; e++)(a.children[e][Vc] == Ri || a.children[e][Vc] == qn) && a[Cc](d[e]);
			c = W(c) ? c : k;
			if(b.pd()) {
				if(ua(a, k), a.strokeweight = b.H, a.strokecolor = b.Jb, c = !b.fo(), d = b.ho(), c || d) {
					e = this.xb(Co);
					if(c) e.opacity = S + s[z](100 * b.nc) + Yd;
					d && (e.dashstyle = $t(b.jd));
					a[t](e)
				}
			} else c && b.Af() ? (ua(a, k), a.strokeweight = 1, a.strokecolor = b.O) : ua(a, n);
			if(hp(a.filled)) a.filled = k;
			c = b.F;
			if(W(b.F)) {
				b = this.xb(wo);
				b[E](Yh, c.Kd);
				b[E](Zh, c.Ld);
				var d = c.Cb,
					e = c.Db,
					f = c.gd,
					c = c.hd;
				typeof d == pn && (d = ga(d,
					10));
				typeof e == pn && (e = ga(e, 10));
				typeof f == pn && (f = ga(f, 10));
				typeof c == pn && (c = ga(c, 10));
				c = rr(180 * s[Db](c - e, f - d) / s.PI);
				c = qr(270 - c, 360);
				b[E](mg, c);
				b[E](po, sj);
				a[t](b)
			} else b.Ea ? (b = this.Xs(b.Ea), a[t](b)) : b.O == U ? a.filled = n : b.Af() ? a.fillcolor = b.O : (c = this.xb(wo), c.opacity = S + s[z](100 * b.$b) + Yd, va(c, b.O), a[t](c))
		};
		V.Xs = function(a) {
			var b = this.xb(wo);
			b[E](po, zl);
			b[E](Yh, a.ye);
			b[E](Zh, a.xe);
			var c = ep(qj);
			W(c) || (c = Jj);
			var d = ep(rj);
			W(d) || (d = He);
			b[E](en, c + ze + d + ye + a.ze + qe);
			return b
		};
		V.Td = function(a, b, c, d, e) {
			a = a[zc];
			Ia(a, lg);
			xa(a, this.Gb(b));
			a.top = this.Gb(c);
			oa(a, this.Gb(d));
			Ua(a, this.Gb(e))
		};

		function $t(a) {
			switch(a) {
				case $m:
					return $m;
				case oi:
					return Hm;
				default:
					return $t($m)
			}
		};

		function au(a, b) {
			(Hq ? 0 <= Fp(Uq, Qe) : Iq ? 0 <= Fp(Uq, Ie) : Gq ? 0 <= Fp(Uq, We) : Jq && 0 <= Fp(Uq, Pe)) || h("Graphics is not supported");
			for(var c = s[B](1E5 * s.random()); da.frames[yf + c];) c++;
			this.xl = yf + c;
			this.wb = a;
			this.Wd = br(this.wb);
			this.Nb = l;
			c = !Hq ? n : W(ja[Pc]) ? 9 > ja[Pc] : !Wq(Ve);
			this.Qv(b, c);
			bu(Z(this.Sv, this), Z(this.Rv, this, c))
		}
		xp(au, zr);
		V = au[K];
		V.Rv = function(a) {
			var b = this.Lw();
			this.Nb = a ? new Zt(b) : new Lt(b)
		};
		V.Sv = function() {
			var a = this.px();
			return a && a._loaded
		};
		V.Og = function(a) {
			var b = Z(function() {
					return W(this.Nb)
				}, this),
				c = Z(function() {
					a(this.Nb)
				}, this);
			bu(b, c)
		};
		V.tt = function(a) {
			var b = this.cm();
			b && (oa(b, a[w][ac]()), Ua(b, a[Q][ac]()))
		};
		V.Lw = function() {
			var a = this.cm();
			return a ? a[Wc] || a[Ub][nc] : l
		};
		V.px = function() {
			var a = this.cm();
			return a ? a[Ub] || (a[Wc] || a[Ub][nc])[Ob] || (a[Wc] || a[Ub][nc])[Rb] : l
		};
		V.cm = function() {
			return this.Wd.q(this.xl)
		};
		V.Qv = function(a, b) {
			var c = this.Wd[Bb](Nj);
			c.name = this.xl;
			c.id = this.xl;
			oa(c, a[w][ac]());
			Ua(c, a[Q][ac]());
			c.frameBorder = 0;
			c.scrolling = dl;
			c.marginHeight = 0;
			c.marginWidth = 0;
			c.allowTransparency = oo;
			b || Aa(c, Oj);
			this.wb.innerHTML = S;
			this.Wd[t](this.wb, c);
			c = c[Wc] || c[Ub][nc];
			c.open();
			var d = [];
			b ? (d[v](hf), d[v](gf), d[v](lf)) : (d[v](df), d[v](jf), d[v](rd), d[v](sd), d[v](gf));
			d[v](kf);
			d[v](Jo);
			d[v](mj);
			d[v](nd);
			d[v](cp);
			d[v](cf);
			d[v](af);
			d[v](ef);
			d[v](pd);
			d[v](mf);
			d[v](ff);
			d[v]($e);
			d[v](bf);
			c.write(d[cd](gd));
			c[Ac]()
		};

		function bu(a, b, c) {
			hp(c) || (c = 50);
			a[N]() ? b[N]() : da[mc](function() {
				bu(a, b, c)
			}, c)
		}
		V.lb = function() {
			this.Nb && this.Nb[Pb]();
			this.Nb = l;
			this.Wd.Ng(this.wb)
		};

		function cu(a) {
			return a * a * a
		}

		function du(a) {
			return 1 - s.pow(1 - a, 3)
		}

		function eu(a) {
			return 3 * a * a - 2 * a * a * a
		};
		var fu = {
			LINEAR: Dk,
			jy: Pj,
			By: ol,
			ky: Qj
		};

		function gu(a) {
			switch(a) {
				case Dk:
					return function(a) {
						return a
					};
				case Pj:
					return cu;
				case ol:
					return du;
				case Qj:
					return eu
			}
		};

		function hu() {
			this.eb = []
		}
		V = hu[K];
		V.ac = function(a, b) {
			this.eb[v]({
				b: a,
				vk: b
			})
		};
		V.move = function(a, b) {
			this.ac(l, {
				type: Zk,
				data: {
					x: a,
					y: b
				}
			})
		};
		V.G = function(a, b, c) {
			this.ac(a, {
				type: Ak,
				data: {
					x: b,
					y: c
				}
			})
		};
		V.pi = function(a, b, c, d, e, f, g) {
			this.ac(a, {
				type: ji,
				data: {
					Cb: b,
					Db: c,
					gd: d,
					hd: e,
					x: f,
					y: g
				}
			})
		};
		V.jb = function(a, b, c, d, e, f, g, i) {
			this.ac(a, {
				type: Bg,
				data: {
					ml: b,
					nl: c,
					ol: d,
					pl: e,
					Ho: f,
					ql: g,
					Io: i
				}
			})
		};
		V.close = function(a) {
			var b = this.eb[0].vk[A];
			this.G(a, b.x, b.y)
		};

		function iu(a) {
			switch(a[F]) {
				case Zk:
				case Ak:
				case ji:
					return a = a[A], new $(a.x, a.y);
				case Bg:
					var a = a[A],
						b = rr(a.ql);
					return new $(a.ml + a.ol * s.cos(sr(b - 90)), a.nl + a.pl * s.sin(sr(b - 90)))
			}
		}
		V.jt = function() {
			for(var a = [], b = l, c = 0; c < this.eb[I]; c++) {
				var d = this.eb[c],
					e = d.vk;
				if(e[F] == Zk) b = iu(e);
				else {
					d = d.b;
					a: {
						for(var f = 0; f < a[I]; f++) {
							var g = a[f];
							if(d === g.b || (d == l || g.b == l ? 0 : d.O == g.b.O && d.$b == g.b.$b && d.Jb == g.b.Jb && d.H == g.b.H && d.nc == g.b.nc && d.jd == g.b.jd && (d.F === g.b.F || (d.F == l || g.b.F == l ? 0 : d.F.Kd == g.b.F.Kd && d.F.Ld == g.b.F.Ld && d.F.Cb == g.b.F.Cb && d.F.Db == g.b.F.Db && d.F.gd == g.b.F.gd && d.F.hd == g.b.F.hd)) && (d.Ea === g.b.Ea || (d.Ea == l || g.b.Ea == l ? 0 : d.Ea.xe == g.b.Ea.xe && d.Ea.ye == g.b.Ea.ye && d.Ea.ze == g.b.Ea.ze)))) {
								d =
									g;
								break a
							}
						}
						g = {
							b: d,
							eb: new Et,
							ob: l
						};a[v](g);d = g
					}
					iq(d.ob, b) || d.eb[rb](b.x, b.y);
					d.eb.ac(e);
					b = d.ob = iu(e)
				}
			}
			return a
		};
		V.oe = function(a) {
			var b = this.jt();
			if(0 == b[I]) a = l;
			else if(1 == b[I]) a = a.oe(b[0].eb, b[0].b);
			else {
				for(var c = a.ja(), d = 0; d < b[I]; d++) {
					var e = b[d],
						e = a.oe(e.eb, e.b);
					a[t](c, e)
				}
				a = c.q()
			}
			return a
		};
		V.yn = function() {
			for(var a = new Et, b = 0; b < this.eb[I]; b++) a.ac(this.eb[b].vk);
			return a
		};

		function ju(a) {
			this.$d = gq({}, a);
			this.Xl = gq({}, a)
		}
		ju[K].Lb = function(a, b) {
			var c = this.$d[I];
			this.$d[a] = b;
			for(var d = a; d < c; ++d) this.Xl[d] = this.Wl(0 == d ? {} : this.Xl[d - 1], this.$d[d])
		};
		ju[K].qq = function(a) {
			var b = gp(a);
			return b != il && b != Fg || b == il && pp(a[Dc]) || lp(a)
		};
		ju[K].Wl = function(a, b) {
			if(this.qq(b) || this.qq(a) || gp(b) == Fg) return b;
			if(gp(a) == il) {
				var c = sq(a);
				mq(b, function(b, e) {
					c[e] = !(e in a) || a[e] == l ? b : this.Wl(a[e], b)
				}, this)
			} else c = Yp(a), mq(b, function(b, e) {
				c[e] = this.Wl(a[e], b)
			}, this);
			return c
		};
		ju[K].compact = function() {
			return Jp(this.Xl)
		};

		function ku(a, b, c) {
			var d = b.ja(),
				e = a.outline,
				f = new Et,
				g = new hs(e.p.top + 0.5, e.p[R] + 0.5, e.p[P] + 0.5, e.p[C] + 0.5),
				i = e.Eb;
			f[rb](g[C] + 1, g[P]);
			f.jb(g[C] + 1, g[P] - 1, 1, 1, 180, 270, k);
			f.G(g[C], g.top + 1);
			f.jb(g[C] + 1, g.top + 1, 1, 1, 270, 0, k);
			if(W(i) && i[0].y == e.p.top)
				for(var j = 0; 3 > j; ++j) f.G(i[j].x + 0.5, i[j].y + 0.5);
			f.G(g[R] - 1, g.top);
			f.jb(g[R] - 1, g.top + 1, 1, 1, 0, 90, k);
			f.G(g[R], g[P] - 1);
			f.jb(g[R] - 1, g[P] - 1, 1, 1, 90, 180, k);
			if(W(i) && i[0].y == e.p[P])
				for(j = 0; 3 > j; ++j) f.G(i[j].x + 0.5, i[j].y + 0.5);
			f[Ac]();
			e = [new wt({
					fill: So,
					stroke: Hd,
					Qa: 1
				}),
				new wt({
					fill: Hd,
					Qa: 0,
					rb: 0.6
				}), new wt({
					fill: Hd,
					Qa: 0,
					rb: 0.4
				})
			];
			for(g = e[I] - 1; 0 <= g; --g) i = b.xa(f, e[g], d), b.Kg(i, g, g);
			a = a.Gs;
			for(f = 0; f < a.pc[I]; f++) switch(i = a.pc[f], e = i[pb], g = i.x, i = i.y, e[F]) {
				case An:
					b.rh(e[A][x], g, i, 1, fn, fn, e[A][zc], d);
					break;
				case dn:
					var e = e[A],
						j = b,
						m = d,
						o = new wt({
							fill: e[tb]
						});
					j.Wa(g, i, e[hc], e[hc], o, m)
			}
			b[t](c, d);
			return d
		};

		function lu(a, b) {
			if(!W(a) && !W(b)) return a === b;
			if(a === b) return k;
			var c = gp(a),
				d = gp(b);
			if(c != d) return n;
			var d = lp(a),
				e = lp(b);
			if(d != e) return n;
			switch(c) {
				case il:
					if(d && e) return 0 == a[Vb]() - b[Vb]();
					for(var f in a)
						if(a[yc](f) && (!b[yc](f) || !lu(a[f], b[f]))) return n;
					for(var g in b)
						if(b[yc](g) && !a[yc](g)) return n;
					return k;
				case Fg:
					if(a[I] != b[I]) return n;
					for(c = 0; c < a[I]; ++c)
						if(!lu(a[c], b[c])) return n;
					return k;
				case T:
					return k;
				case pn:
				case gl:
				case Yg:
					return n;
				default:
					h(r("Error while comparing " + a + " and " + b + ": unexpected type of obj1 " +
						c))
			}
		}

		function mu(a) {
			if(lp(a)) {
				var b = new Date;
				b[Qc](a.valueOf());
				return b
			}
			var c = gp(a);
			if(c == il || c == Fg) {
				if(a[Dc]) return a[Dc]();
				c = c == Fg ? [] : {};
				for(b in a) c[b] = mu(a[b]);
				return c
			}
			return a
		};

		function nu(a) {
			var b = a[Hc] ? a[Hc] : {
				x: 0,
				y: 0
			};
			return Pp(a.d, function(c, d) {
				var e = Gt(d.x + b.x, d[I], a.Za),
					f = Gt(d.y + b.y, a.t[M], a.Pa),
					e = new hs(f[O], e.end, f.end, e[O]);
				c ? c.Gn(e) : c = e;
				return c
			}, l)
		};
		var ou = {
				NONE: U,
				Dy: Dl,
				jx: T,
				mx: rm,
				Tx: oh
			},
			pu = {
				NONE: U,
				kx: Ak,
				gx: Cg,
				Ly: hn,
				hx: Pg,
				Vx: wh,
				mx: rm,
				Ux: sh
			},
			qu = {
				hx: Pg,
				My: kn,
				Sx: nh,
				POINTS: Nl,
				kx: Ak,
				gx: Cg,
				NONE: U
			},
			ru = {
				ix: xh,
				uq: Ho,
				Wx: Bh
			},
			su = {
				Ey: Sl,
				ry: Nk,
				ey: Pi
			},
			tu = {
				NONE: U,
				Gy: hm,
				ny: hk,
				Ny: io,
				Qx: jh,
				Qc: Pj,
				my: gk
			},
			uu = {
				Py: Ko,
				gy: Gj
			},
			vu = {
				NONE: U,
				Qc: Pj,
				ri: ol
			},
			wu = {
				Rx: lh,
				Oy: qo
			},
			xu = {
				fy: Fj,
				qy: Ik
			},
			yu = {
				NONE: U,
				ly: ek,
				uq: Ho,
				lx: Bl
			},
			zu = {
				vp: ih,
				uq: Ho,
				lx: Bl
			},
			Au = {
				by: yi,
				cy: Ei
			},
			Bu = {
				Zx: ri,
				ix: xh,
				Jy: ym
			},
			Cu = {
				NONE: U,
				iy: Hj
			},
			Du = {
				NONE: U,
				jx: T,
				Cy: Cl,
				Xx: Wh
			},
			Eu = {
				Px: Hg,
				Ox: Gg
			},
			Fu = [{
					color: "#3366CC",
					lighter: "#45AFE2"
				},
				{
					color: "#DC3912",
					lighter: "#FF3300"
				}, {
					color: "#FF9900",
					lighter: "#FFCC00"
				}, {
					color: "#109618",
					lighter: "#14C21D"
				}, {
					color: "#990099",
					lighter: "#DF51FD"
				}, {
					color: "#0099C6",
					lighter: "#15CBFF"
				}, {
					color: "#DD4477",
					lighter: "#FF97D2"
				}, {
					color: "#66AA00",
					lighter: "#97FB00"
				}, {
					color: "#B82E2E",
					lighter: "#DB6651"
				}, {
					color: "#316395",
					lighter: "#518BC6"
				}, {
					color: "#994499",
					lighter: "#BD6CBD"
				}, {
					color: "#22AA99",
					lighter: "#35D7C2"
				}, {
					color: "#AAAA11",
					lighter: "#E9E91F"
				}, {
					color: "#6633CC",
					lighter: "#9877DD"
				}, {
					color: "#E67300",
					lighter: "#FF8F20"
				},
				{
					color: "#8B0707",
					lighter: "#D20B0B"
				}, {
					color: "#651067",
					lighter: "#B61DBA"
				}, {
					color: "#329262",
					lighter: "#40BD7E"
				}, {
					color: "#5574A6",
					lighter: "#6AA7C4"
				}, {
					color: "#3B3EAC",
					lighter: "#6D70CD"
				}, {
					color: "#B77322",
					lighter: "#DA9136"
				}, {
					color: "#16D620",
					lighter: "#2DEA36"
				}, {
					color: "#B91383",
					lighter: "#E81EA6"
				}, {
					color: "#F4359E",
					lighter: "#F558AE"
				}, {
					color: "#9C5935",
					lighter: "#C07145"
				}, {
					color: "#A9C413",
					lighter: "#D7EE53"
				}, {
					color: "#2A778D",
					lighter: "#3EA7C6"
				}, {
					color: "#668D1C",
					lighter: "#97D129"
				}, {
					color: "#BEA413",
					lighter: "#E9CA1D"
				},
				{
					color: "#0C5922",
					lighter: "#149638"
				}, {
					color: "#743411",
					lighter: "#C5571D"
				}
			],
			Gu = {
				vAxis: {
					titleTextStyle: {
						color: "#222",
						italic: k
					}
				},
				hAxis: {
					titleTextStyle: {
						color: "#222",
						italic: k
					}
				},
				sizeAxis: {
					minSize: 5,
					maxSize: 30
				},
				fontName: "Arial",
				titleTextStyle: {
					color: Ug,
					bold: k
				},
				bubble: {
					textStyle: {
						color: Ug
					}
				},
				annotations: {
					textStyle: {
						color: zm
					},
					domainTextStyle: {
						color: "#222"
					},
					stemColor: "#999"
				},
				majorAxisTextColor: "#222",
				minorAxisTextColor: "#444",
				backgroundColor: {
					fill: Sd,
					stroke: "#666",
					strokeWidth: 0
				},
				axisBackgroundColor: {
					fill: U
				},
				tooltip: {
					textStyle: {
						color: Ug
					}
				},
				baselineColor: "#333",
				gridlineColor: Hd,
				pieSliceBorderColor: So,
				pieResidueSliceColor: Hd,
				pieSliceTextStyle: {
					color: So
				},
				areaOpacity: 0.3,
				intervals: {
					style: Pg,
					color: Am,
					lineWidth: 1,
					fillOpacity: 0.3,
					barWidth: 0.25,
					shortBarWidth: 0.1,
					boxWidth: 0.25,
					pointSize: 6
				},
				legend: {
					textStyle: {
						color: "#222"
					},
					pagingTextStyle: {
						color: "#01c"
					},
					scrollArrows: {
						activeColor: "#01c",
						inactiveColor: Hd
					}
				}
			};

		function Hu(a) {
			return a[cd](me)
		};

		function Iu(a, b, c, d, e) {
			W(e) || (e = 1);
			if(0 == e) return {
				d: [],
				aa: n,
				Yb: 0
			};
			var f = [],
				b = Ju(b, f, d, e, function(b) {
					return a(b, c)[w]
				});
			return {
				d: f,
				aa: b.Fe,
				Yb: b.Yb
			}
		}

		function Ju(a, b, c, d, e) {
			var f = e(a);
			if(f <= c) return a && b[v](a), {
				Fe: n,
				Yb: f
			};
			if(1 < d) {
				for(var g = 0, i = 0, f = 1; f < a[I]; f++)
					if(a[ib](f) == id) {
						var j = e(a[Zb](0, f));
						if(j <= c) i = j, g = f;
						else break
					}
				if(0 < g) return b[v](a[Zb](0, g)), b = Ju(a[Zb](g + 1), b, c, d - 1, e), {
					Fe: b.Fe,
					Yb: s.max(i, b.Yb)
				}
			}
			d = e(ne);
			if(c < d) {
				for(f = 2; 1 <= f; f--)
					if(a = e("..." [Zb](0, f)), a <= c) return b[v]("..." [Zb](0, f)), {
						Fe: k,
						Yb: a
					};
				return {
					Fe: k,
					Yb: 0
				}
			}
			for(f = a[I] - 1; 1 <= f; f--)
				if(i = a[Zb](0, f) + ne, g = e(i), g <= c) return b[v](i), {
					Fe: k,
					Yb: g
				};
			b[v](ne);
			return {
				Fe: k,
				Yb: d
			}
		}

		function Ku(a) {
			var b = {
				background: Sj,
				padding: Le,
				border: Me
			};
			if(W(a[M])) Na(b, a[M] + Ul), b.margin = a[M] + Ul;
			W(a.zb) && ra(b, a.zb);
			return b
		};
		var Lu = s.log(10);

		function Mu(a, b) {
			return s.abs(a - b)
		}

		function Nu(a, b, c, d) {
			if(!a || !b) return k;
			var e = d || Mu;
			return oq(a, function(a, d) {
				var i = b[d];
				return !hp(b[d]) || e(a, i) <= c
			})
		}

		function Ou(a, b, c) {
			if(0 == a.x || 0 == b.x) return {
				x: 0,
				y: (0 == a.x && 0 == b.x ? 0 : 0 == a.x ? a.y : b.y) * c / 6
			};
			c = c / 3 * s.min(s.abs(a.x), s.abs(b.x));
			b = (a.y / a.x + b.y / b.x) / 2;
			return 0 < a.x ? {
				x: c,
				y: c * b
			} : {
				x: -c,
				y: -c * b
			}
		}

		function Pu(a, b, c) {
			var d = a.Aq(),
				e = b.Aq();
			if(0 == d || 0 == e) return new wr(0, 0);
			d = s[Ib](d / e);
			return xr(a[Dc]()[Rc](1 / d), b[Dc]()[Rc](d))[Rc](c / 6)
		}

		function Qu(a, b, c, d, e) {
			for(var c = c ? Ou : Pu, f = [], g = 0; g < a[I]; ++g) {
				var i, j;
				e ? (i = Ru(a, g, 1, d), j = Ru(a, g, -1, d)) : (i = d ? (g + 1) % a[I] : g + 1, j = d ? (a[I] + g - 1) % a[I] : g - 1);
				W(i) && W(j) && W(a[g]) && W(a[j]) && W(a[i]) ? (i = c(yr(a[g], a[j]), yr(a[i], a[g]), b), f[v]([yr(a[g], i), xr(a[g], i)])) : W(a[g]) ? f[v]([a[g][Dc](), a[g][Dc]()]) : f[v](l)
			}
			return f
		}

		function Ru(a, b, c, d) {
			var e = b + c;
			for(d && (e = (e + a[I]) % a[I]); e != b && 0 <= e && e < a[I];) {
				if(W(a[e])) return e;
				e += c;
				d && (e = (e + a[I]) % a[I])
			}
			return l
		}

		function Su(a, b, c) {
			var c = c || 0,
				d = Tp(b, function(b) {
					return b[c] > a
				});
			return -1 == d ? b[I] - 1 : 0 == d ? 0 : b[d][c] - a < a - b[d - 1][c] ? d : d - 1
		}

		function Tu(a, b, c, d) {
			d = d || 0;
			c = c || 0;
			if(0 < b[I] && a <= Jp(b)) return c = Su(a, b, d), [c, b[c][d]];
			var e = b[I] - 1 - c,
				f = Jp(b)[d],
				g = b[e][d],
				i = f - g,
				j = s[B]((a - f) / i),
				a = a - f - j * i,
				e = Op($p(b, e), function(a) {
					return [a[d] - g]
				}),
				a = Su(a, e, 0);
			return [b[I] - 1 + j * c + a, f + j * i + e[a][0]]
		}

		function Uu(a, b, c) {
			for(var d = [], e = 0; e < a; e++) d[e] = b[N](c, e);
			return d
		}

		function Vu(a) {
			return W(a.max) ? a.max : a.min
		}

		function Wu(a, b, c, d) {
			hp(c) || (c = 0);
			hp(d) || (d = a[I]);
			for(var c = b - c, e = 0, f = 0 <= c ? 0 : l, g = 0, i = 0, j = l, m = l; e < a[I];) {
				var o = a[e].min,
					q = Vu(a[e]) - o,
					g = g + o;
				if(g <= c) var f = e + 1,
					u = s.min(c - g, q),
					i = g + u,
					m = o + u;
				if(g > b) return e >= d ? {
					Gc: e,
					El: j,
					oh: b - (g - o)
				} : ip(f) ? l : {
					Gc: f,
					El: m,
					oh: c - i
				};
				u = s.min(b - g, q);
				g += u;
				j = o + u;
				e++
			}
			return {
				Gc: e,
				El: j,
				oh: b - g
			}
		}

		function Xu(a, b, c) {
			a = Op(a, c || Vs);
			bq(a);
			for(var d = c = 0; d < a[I]; d++) {
				var e = a[I] - d,
					f = (a[d] - c) * e;
				if(f <= b) c = a[d], b -= f;
				else {
					c += b / e;
					b = 0;
					break
				}
			}
			return {
				Pv: c,
				oh: b
			}
		}

		function Yu(a, b, c, d) {
			var e = Wu(a, b, c, d);
			if(!e) return l;
			var b = e.oh,
				c = $p(a, 0, e.Gc),
				d = Pp(c, function(a, b) {
					return s.max(a, b.T[I])
				}, 0),
				f = Op(c, Vu);
			if(0 < f[I]) f[f[I] - 1] = e.El;
			for(var g = 0; g < d; g++) {
				for(var e = Xu(c, b, function(a) {
						return a.T[g] || 0
					}), b = e.oh, i = 0; i < f[I]; i++) f[i] += s.min(e.Pv, a[i].T[g] || 0);
				if(0 == b) break
			}
			return f
		}

		function Zu(a, b, c, d) {
			var e = Yu(a, b, c, d),
				f = {};
			Mp(a, function(a, b) {
				var c = a.key;
				W(f[c]) || (f[c] = []);
				b < e[I] && f[c][v](e[b])
			});
			return f
		}

		function $u(a, b) {
			for(var c = $p(arguments, 1), d = [], e = 0; e < c[I]; e += 2) {
				var f = s.min(c[e], a[I]),
					g = s.min(c[e + 1], a[I]),
					f = $p(a, f, g);
				Zp(d, f)
			}
			return d
		}

		function av(a) {
			var b = google[wc][Tb].DECIMAL_PATTERN;
			if(0 >= a) return b[Zb](0, b[Jc](me));
			for(var b = b[Zb](0, b[Jc](me) + 1), c = 0; c < a; c++) b += ud;
			return b
		}

		function bv(a, b) {
			return np(a) ? [a + me + b] : Op(a, function(a) {
				return a + me + b
			})
		}

		function cv(a, b, c, d, e, f) {
			var g = [],
				i = 0 > d - 1 || 0 > e ? l : c[d - 1][e];
			i && g[v]({
				Li: i,
				ec: i.ec + 1,
				lh: d - 1,
				Mi: l,
				mh: l,
				Ni: l
			});
			(i = 0 > d || 0 > e - 1 ? l : c[d][e - 1]) && g[v]({
				Li: i,
				ec: i.ec + 1,
				lh: l,
				Mi: l,
				mh: e - 1,
				Ni: l
			});
			(c = 0 > d - 1 || 0 > e - 1 ? l : c[d - 1][e - 1]) && f(a[d - 1], b[e - 1]) && g[v]({
				Li: c,
				ec: c.ec,
				lh: d - 1,
				Mi: e - 1,
				mh: e - 1,
				Ni: d - 1
			});
			bq(g, function(a, b) {
				return a.ec - b.ec
			});
			return 0 < g[I] ? g[0] : {
				Li: l,
				ec: 0,
				lh: l,
				Mi: l,
				mh: l,
				Ni: l
			}
		}

		function dv(a, b, c) {
			for(var d = c || function(a, b) {
					return a == b
				}, c = [], e = 0; e <= a[I]; e++) {
				c[e] = c[e] || [];
				for(var f = 0; f <= b[I]; f++) c[e][f] = cv(a, b, c, e, f, d)
			}
			d = {};
			e = {};
			a = c[a[I]][b[I]];
			for(b = a.ec; a;) {
				if(W(a.lh)) d[a.lh] = a.Mi;
				if(W(a.mh)) e[a.mh] = a.Ni;
				a = a.Li
			}
			return {
				ec: b,
				ng: d,
				og: e
			}
		}

		function ev(a, b, c) {
			if(!a || !b) return l;
			var d = {};
			if(0 == a[I] || 0 == b[I]) return d;
			for(var c = c || Vs, e = 0, f = 0; f < a[I]; f++) {
				var g = l,
					i = c(a[f]);
				for(0 == f || c(a[f - 1]); e < b[I];) {
					var j = c(b[e]);
					0 == e || c(b[e - 1]);
					j = s.abs(i - j);
					if(!W(g) || j < g) g = j, d[f] = e, e++;
					else if(j == g) e++;
					else break
				}
				e--
			}
			return d
		}

		function fv(a, b) {
			for(var c in a)
				if(!(0 <= Lp(b, c))) return n;
			return k
		}

		function gv(a, b, c, d, e) {
			for(var f = 1, g = 0; 500 > g; g++) {
				var i = hv(a, b, c, f);
				if(Nu(a, i, 0.05, d)) break;
				a = i;
				f *= e
			}
			return a
		}

		function hv(a, b, c, d) {
			var e = {};
			mq(a, function(f, g) {
				for(var i = f, j = 0; j < b[I]; j++) var m = (0, b[j])(a, g, d),
					i = c(i, m);
				e[g] = i
			});
			return e
		};

		function iv(a) {
			return new wr(s[z](a.x), s[z](a.y))
		}

		function jv(a) {
			return Pp(arguments, xr, new wr(0, 0))
		}

		function kv(a) {
			return Pp(arguments, function(a, c) {
				return new lq(a[w] + c[w], a[Q] + c[Q])
			}, new lq(0, 0))
		}

		function lv(a, b, c) {
			return new wr(s.cos(a) * b, s.sin(a) * c)
		}

		function mv(a) {
			return new wr(a[0], a[1])
		}

		function nv(a, b) {
			return Op([
				[a.x - b[w] / 2, a.y - b[Q] / 2],
				[a.x + b[w] / 2, a.y - b[Q] / 2],
				[a.x + b[w] / 2, a.y + b[Q] / 2],
				[a.x - b[w] / 2, a.y + b[Q] / 2]
			], mv)
		};

		function ov(a, b) {
			this.g = a;
			this.Ia = this.Cc = this.se = l;
			this.Gd = b;
			this.Kc = this.Lg = l
		}
		V = ov[K];
		V.Og = function() {
			return this.g
		};
		V.drawChart = function(a, b) {
			this.Cc = {};
			var c = this.g;
			c[Pb]();
			var d = new ju(2);
			d.Lb(0, a);
			d.Lb(1, b);
			var d = this.Ia = d[ad](),
				e = c.qs(d[w], d[Q]);
			c.ib(e, Fh);
			c.qf(e, ii, Hr);
			c.qf(e, Rh, Z(function(a) {
				return this[ub](Lh, {
					ds: c.Nn(a[Ec])
				}, a)
			}, this));
			var f = d.cj;
			f && !f.xg() && c.Wa(0, 0, d[w], d[Q], f, e);
			d.Pe == ol && this.g.ib(this.yd(d[J], e), Nn);
			this.Kc = c.ja(k);
			this.Kc.ib(ik);
			this.ln(d.f);
			d.f[fc] != Pj && c[t](e, this.Kc);
			this.Mn(d, e) || this.rs(d, e);
			if(d.z) this.Lg = c.ja(n), c[t](e, this.Lg), this.Lg.ib(Vn), this.zc(e.q(), {
				click: yh,
				mousemove: zh,
				mouseout: Ah
			}, l);
			this.se = b
		};
		V.Rt = function(a, b) {
			var c = qq({
				e: l,
				v: l,
				f: l,
				Bc: l
			});
			!fv(b, c) || !fv(this.se, c) ? this.drawChart(a, b) : (lu(b.f, this.se.f) || (this.g.Ng(this.Kc), c = new ju(2), c.Lb(0, a.f || {}), c.Lb(1, b.f || {}), this.ln(c[ad]())), this.Xn(a, b), this.se = b)
		};
		V.rs = function(a, b) {
			var c = {
				color: Ug,
				zb: a.Tc,
				fontSize: a.uc,
				bold: n,
				zf: n,
				$n: n
			};
			this.dt(Nf, c, a.a[w]);
			var d = a.a.top + s[z](a.a[Q] / 2);
			this.g.ct(Nf, a.a[C], d, a.a[C] + a.a[w], d, Eh, Eh, c, b)
		};
		V.ln = function(a) {
			var b = a.kc;
			if(a.pb && b) {
				for(var c = 0; c < b[I]; c++) {
					var d = b[c];
					d.B && this.Su(d)
				}
				this.Tu(a.qg)
			}
		};
		V.Su = function(a) {
			var b = l;
			a.o && (b = this.yd(a.o, this.Kc), this.g.ib(b, jk + a[ic]));
			var c = l;
			a.P && (c = this.g.Wa(a.P.S[C], a.P.S.top, a.P.S[w], a.P.S[Q], a.P.b, this.Kc), this.g.ib(c, jk + a[ic]));
			var d = l;
			a.ba && a.ba.B && (d = this.hs(a.ba.S.x, a.ba.S.y, a.ba.b, this.Kc));
			if(this.Ia.z && a.z) {
				var e = {
					Fh: a[ic]
				};
				if(c) {
					var f = {
						click: tk,
						mouseover: uk,
						mouseout: vk
					};
					this.zc(c, f, e)
				}
				if(a.ba && (b && (f = {
						mouseover: uk,
						mouseout: vk
					}, this.zc(b, f, e)), d)) f.click = bm, this.zc(d, f, e)
			}
		};
		V.Tu = function(a) {
			a && (this.Tp(a.ok, -1), a.nk && this.yd(a.nk, this.Kc), this.Tp(a.mk, 1))
		};
		V.Tp = function(a, b) {
			if(a) {
				var c = this.g.xa(Ft(a[Mb]), a.b, this.Kc);
				this.Ia.z && a.fd && this.zc(c, {
					click: xk
				}, {
					cs: b
				})
			}
		};
		V.hs = function(a, b, c, d) {
			var e = this.g,
				f = e.ja();
			e.Wa(a, b, 12, 12, c, f);
			e[t](d, f);
			c = new Et;
			c[rb](a + 2, b + 2);
			c.G(a + 12 - 2, b + 12 - 2);
			c[rb](a + 12 - 2, b + 2);
			c.G(a + 2, b + 12 - 2);
			a = new wt;
			a.gc(Ud);
			a.ee(2);
			e.xa(c, a, f);
			return f.q()
		};
		V.dt = function(a, b, c) {
			var d = b[M],
				a = this.g.Ju(a, b);
			a > c && (d = s.max(1, s[B](b[M] * c / a)));
			return d
		};
		V.Mk = function(a, b) {
			var c = hp(b) ? b : l,
				c = W(c) ? Hu([Vn, a, c]) : Hu([Vn, a]),
				d = this.Cc[c];
			d && (this.g.tl(d), delete this.Cc[c])
		};
		V.wh = function(a, b, c) {
			var c = hp(c) ? c : l,
				d = ku(a, this.g, this.Lg),
				a = W(c) ? Hu([Vn, b, c]) : Hu([Vn, b]),
				d = d.q();
			this.Cc[a] = d;
			if(this.Ia.z) {
				b = {
					$: b
				};
				if(W(c)) b.Sa = c;
				this.zc(d, {
					click: $n,
					mouseover: bo,
					mouseout: co
				}, b)
			}
		};
		V.Us = function(a) {
			var a = Hu([Ij, a]),
				b = this.Cc[a];
			b && (this.g.tl(b), delete this.Cc[a])
		};
		V.Pm = function(a, b) {
			var c = ku(a, this.g, this.Lg);
			this.Cc[Hu([Ij, b])] = c.q();
			this.Ia.z && this.zc(c.q(), {
				click: $n,
				mouseover: bo,
				mouseout: co
			}, l)
		};
		V.yd = function(a, b, c) {
			(a = this.Sn(a, c)) && this.g[t](b, a);
			return a
		};
		V.Sn = function(a, b) {
			var c = a.d;
			if(!c || 0 == c[I]) return l;
			for(var d = this.g, e = a.t, f = W(a.kf) ? a.kf : 0, g = a[Hc] ? a[Hc] : {
					x: 0,
					y: 0
				}, i = a.K, j = !!i || b || n, m = d.ja(), o = 0; o < c[I]; o++) 0 == f ? d.rh(c[o][x], c[o].x + g.x, c[o].y + g.y, c[o][I], a.Za, a.Pa, e, m) : d.js(c[o][x], c[o].x + g.x, c[o].y + g.y, c[o][I], f, a.Za, a.Pa, e, m);
			if(this.Ia.z && j) {
				j = l;
				if(0 == f) c = nu(a), j = d.Wa(c[C], c.top, c[R] - c[C], c[P] - c.top, xt, m);
				else {
					var q = sr(f),
						c = Pp(c, function(b, c) {
							var d = new wr(c.x + g.x, c.y + g.y);
							d[xc](-q);
							var f = Gt(d.x, c[I], a.Za),
								d = Gt(d.y, e[M], a.Pa),
								f = new hs(d[O], f.end,
									d.end, f[O]);
							b ? b.Gn(f) : b = f;
							return b
						}, l),
						c = [new wr(c[C], c.top), new wr(c[R], c.top), new wr(c[R], c[P]), new wr(c[C], c[P])];
					Mp(c, function(a) {
						a[xc](q)
					});
					c = Ft(c, n);
					j = d.xa(c, xt, m)
				}
				i && d.is(j, i, Ku(e))
			}
			return m.q()
		};
		V.zc = function(a, b, c) {
			for(var d in b) this.g.qf(a, d, this.Cu(b[d], c))
		};
		V.Cu = function(a, b) {
			return Z(function(c) {
				return this[ub](a, b, c)
			}, this)
		};
		V.dispatchEvent = function(a, b, c) {
			this.Gd[ub]({
				type: a,
				va: b,
				dd: c
			})
		};
		V.yc = function(a, b, c) {
			var d = this.Cc[b];
			W(d) ? this.g.replaceChild(a, c, d) : this.g[t](a, c);
			this.Cc[b] = c
		};
		V.ak = function(a) {
			var b = this.Cc[a];
			b && (this.g.tl(b), delete this.Cc[a])
		};

		function pv(a, b) {
			return a.i && a.i.b || a.b || b.Hm
		}

		function qv(a) {
			return a[F] == Ak || a[F] == Cg || a[F] == rm
		}

		function rv(a, b) {
			return W(a.gf) ? a.gf : b.vm
		}

		function sv(a, b) {
			return a.i && W(a.i.Xb) ? a.i.Xb : W(a.Xb) ? a.Xb : b.yr
		}

		function tv(a, b) {
			return sv(a, b) + pv(a, b).wo() / 2
		}

		function uv(a) {
			return a.Vc && a.N == T && a[Qb] == Gj
		}

		function vv(a, b) {
			for(var c = new hu, d = k, e = k, f = l, g = l, i = 0; i < a.c[I]; i++) {
				var j = a.c[i];
				if(!j || !j.i || !W(j.i.x) || !W(j.i.y)) e = !b || d;
				else {
					d && (f = i, d = n);
					var m = j.i;
					if(e) c[rb](m.x, m.y), e = n;
					else {
						var o = j.Eg || a.Ha;
						a.ek ? c.pi(o, a.c[g].md.x, a.c[g].md.y, j.ld.x, j.ld.y, m.x, m.y) : c.G(o, m.x, m.y)
					}
					g = i
				}
			}!d & a.wr && (d = b ? g : a.c[I] - 1, f = b ? f : 0, W(d) && W(f) && a.c[d] && a.c[f] && (o = a.c[f].Eg || a.Ha, a.ek ? c.pi(o, a.c[d].md.x, a.c[d].md.y, a.c[f].ld.x, a.c[f].ld.y, a.c[f].i.x, a.c[f].i.y) : c[Ac](o)));
			return c
		}

		function wv(a) {
			for(var b = new hu, c = k, d = 0; d < a.c[I]; d++) {
				var e = a.c[d].i;
				!W(e.x) || !W(e.y) ? c = k : (c || b.G(a.c[d].Eg || a.Ha, e.Jh, e.Kh), (c || e.Jh != e.Hh || e.Kh != e.Ih) && b[rb](e.Hh, e.Ih), c = n)
			}
			return b
		};

		function xv(a, b) {
			ov[N](this, a, b);
			this.la = l;
			this.Gr = [uj, Cg, jn, Ng, yl, Qg, Xj, Ak, vh, oh, rg, Ol, Ll, Ag, Nn, Kg, Lg, ik];
			this.vj = this.tj = this.sj = this.rj = l
		}
		xp(xv, ov);
		var yv = {
			ri: ql,
			Qc: Uj,
			Pc: Uh
		};
		V = xv[K];
		V.Mn = function(a, b) {
			this.Jr(a);
			var c = this.g.ja(n);
			c.ib(Oh);
			this.g[t](b, c);
			mq(this.la, function(a, b) {
				if(!a.ma) a.ma = this.g.ja(!hp(a.Mm) || a.Mm), a.ma.ib(b)
			}, this);
			this.g.Wa(a.a[C], a.a.top, a.a[w], a.a[Q], a.bj, c);
			Mp(a.ta, function(b) {
				this.Hr(a, b)
			}, this);
			Mp(a.Ka, function(b) {
				this.Ir(a, b)
			}, this);
			Mp(a.ta, function(b) {
				this.gn(a, b)
			}, this);
			Mp(a.Ka, function(b) {
				this.gn(a, b)
			}, this);
			a.Pe == Pj && this.yd(a[J], this.la[J].ma);
			a.cg && this.yd(a.cg, this.la.axistitle.ma);
			Mp(a.v, function(a, b) {
				a.Ue && this.lm(a.Ue, l, l, b)
			}, this);
			this.rj = {};
			this.sj = {};
			this.tj = {};
			this.vj = {};
			for(var d = [], e = 0; e < a.e[I]; e++) d[v]({
				Ah: a.e[e].Ah,
				index: e
			});
			dq(d, function(a, b) {
				return cq(a.Ah, b.Ah)
			});
			for(e = 0; e < d[I]; e++) {
				var f = d[e][ic];
				this.Xj(a.e[f], f)
			}
			for(e = 0; e < a.v[I]; e++) a.v[e].kg && this.Pm(a.v[e].kg, e);
			var d = new js(a.a[C], a.a.top, a.a[w], a.a[Q]),
				g = this.g.ja(n),
				d = this.g.en(g, d);
			this.g[t](c, d);
			Mp(this.Gr, function(a) {
				var d = this.la[a].ma;
				if(d) {
					var e;
					switch(this.la[a][fc]) {
						case Uh:
							e = g;
							break;
						case Uj:
							e = c;
							break;
						case ql:
							e = b
					}
					this.g[t](e, d)
				}
			}, this);
			if(!a.z) return k;
			this.g.qf(c,
				Rh, Z(function(a) {
					var b = this.fn(new $(a[Wb], a[Xb]));
					W(b) && this[ub](si, b, a)
				}, this));
			this.g.qf(c, Vk, Z(function(a) {
				var b = this.fn(new $(a[Wb], a[Xb]));
				W(b) ? this[ub](ti, b, a) : this[ub](ui, l, a)
			}, this));
			this.g.qf(c, Wk, Z(function(a) {
				this[ub](ui, l, a)
			}, this));
			return k
		};
		V.Jr = function(a) {
			var b = this.la = {};
			b.annotation = {
				position: yv.Qc
			};
			b.annotationtext = {
				position: yv.Qc
			};
			b.area = {
				position: yv.Pc
			};
			b.bar = {
				position: yv.Pc
			};
			b.baseline = {
				position: yv.Pc
			};
			b.bubble = {
				position: yv.Pc
			};
			b.candlestick = {
				position: yv.Pc
			};
			b.gridline = {
				position: yv.Pc
			};
			b.interval = {
				position: yv.Pc
			};
			b.line = {
				position: yv.Pc
			};
			b.pathinterval = {
				position: yv.Pc
			};
			b.point = {
				position: yv.Qc,
				Mm: !a.z
			};
			b.pointsensitivityarea = {
				position: yv.Qc
			};
			b.steppedareabar = {
				position: yv.Pc
			};
			Ha(b, {
				position: a.Pe == Pj ? yv.Qc : yv.ri
			});
			b.axistick = {
				position: yv.Qc
			};
			b.axistitle = {
				position: a.Vf == Pj ? yv.Qc : yv.ri
			};
			b.legend = {
				ma: a.f[fc] == Pj ? this.Kc : l,
				position: a.f[fc] == Pj ? yv.Qc : yv.ri
			}
		};
		V.fn = function(a) {
			return this.ow(this.rj, a) || this.nw(this.vj, a) || this.$p(this.sj, a) || this.$p(this.tj, a)
		};
		V.ow = function(a, b) {
			var c = b.x,
				d = b.y,
				e = l,
				f = p,
				g;
			for(g in a) {
				var i = a[g],
					j = i.Hb.x,
					m = i.Hb.y,
					o = i.Xb;
				j - c <= o && j - c >= -o && m - d <= o && m - d >= -o && (j = (j - c) * (j - c) + (m - d) * (m - d), j <= o * o && j <= f && (e = {
					$: i.$,
					Sa: i.Sa
				}, f = j))
			}
			return e
		};
		V.nw = function(a, b) {
			for(var c in a) {
				var d = a[c];
				if(d[vc][Tc](b) || d.tb[Tc](b)) return {
					$: d.$,
					Sa: d.Sa
				}
			}
			return l
		};
		V.$p = function(a, b) {
			var c = l,
				d;
			for(d in a) {
				var e = a[d];
				if(e[vc][Tc](b) && (!c || e.$ > c.$ || e.$ == c.$ && e.Sa > c.Sa)) c = {
					$: e.$,
					Sa: e.Sa
				}
			}
			return c
		};
		V.Xj = function(a, b) {
			a[F] == sh ? this.$u(a, b) : a[F] == Pg ? this.pp(a, b) : a[F] == hn ? this.pp(a, b) : a[F] == wh ? this.av(a, b) : a[F] == Cg ? this.Zu(a, b, this.Ia.Vc) : this.Sm(a, b, this.Ia.Qe);
			a.hc && a.hc.fk && this.bv(a, b)
		};
		V.bv = function(a, b) {
			for(var c = a.hc.fk, d = 0, e; e = c[d]; ++d)
				if(0 != e.tb[I]) {
					var f = new Et;
					f.Dk(e.tb, e.mm);
					e[P] && f.Dk(e[P], e.Qr);
					var g = this.g.ja();
					this.g.xa(f, e.b, g);
					e = g.q();
					this.yc(this.la.pathinterval.ma, Hu([yl, b, d]), e)
				}
		};
		V.ao = function(a, b, c, d) {
			a[F] == Pg || a[F] == hn ? this.Lo(a, b, c, d) : a[F] == wh ? this.Mo(a, b, c, d) : a[F] == sh ? this.Tn(a, b, c, d) : this.No(a, b, c, d)
		};
		V.$u = function(a, b) {
			for(var c = this.la.bubble.ma, d = 0; d < a.c[I]; d++) {
				var e = a.c[d];
				e && (this.Tn(a, b, e, d), this.g.rh(e[x], e.i.x, e.i.y, e.Sq, Eh, Eh, e.t, c))
			}
		};
		V.pp = function(a, b) {
			for(var c = 0; c < a.c[I]; c++) this.Lo(a, b, a.c[c], c)
		};
		V.Lo = function(a, b, c, d) {
			if(c && c.i) {
				var e = pv(c, a),
					f = a[F] == Pg ? Ng : jn,
					g = Hu([f, b, d]),
					i = c.i.Wf || c.i,
					e = this.g.ne(i[C], i.top, i[w], i[Q], e),
					j = l,
					m = c.i.outline,
					o = c.xc,
					q = c.qb;
				if(m || o || q) j = this.g.ja(), this.g[t](j, e);
				if(m) {
					var u = c.Ha || a.Ha;
					this.g.xa(Ft(m, k), u, j)
				}
				if(o)
					for(m = 0; m < o.Ca[I]; m++) u = o.Ca[m][vc], this.g.Wa(u[C], u.top, u[w], u[Q], o.Ca[m].b, j);
				q && this.g.Wa(q[vc][C], q[vc].top, q[vc][w], q[vc][Q], q.b, j);
				e = j ? j.q() : e;
				this.yc(this.la[f].ma, g, e);
				c.K && this.wh(c.K, b, d);
				c.i.Wc && this.Lm(a, b, d, c.i.Wc);
				this.Ia.z && a.z && (b = {
					rect: new js(i[C],
						i.top, i[w], i[Q]),
					$: b,
					Sa: d
				}, a[F] == Pg ? this.sj[g] = b : a[F] == hn && (this.tj[g] = b))
			}
		};
		V.Zu = function(a, b, c) {
			if(0 != a.c[I]) {
				var d = k,
					e = l,
					f = new Et;
				f[rb](a.c[0].i.Fj, a.c[0].i.Gj);
				for(var g = 0; g < a.c[I]; g++) {
					var i = a.c[g].i;
					f.G(i.Jh, i.Kh);
					(i.Hh != i.Jh || i.Ih != i.Kh) && f.G(i.Hh, i.Ih);
					W(i.x) && W(i.y) && (d = n, e = g)
				}
				if(!d) {
					if(c)
						for(g = a.c[I] - 1; 0 <= g; g--) i = a.c[g].i, f.G(i.Hj, i.Ij), (i.Fj != i.Hj || i.Gj != i.Ij) && f.G(i.Fj, i.Gj);
					else i = a.c[e].i, f.G(i.Hj, i.Ij), f[Ac]();
					g = Hu([Cg, b]);
					f = this.g.oe(f, a.Jq);
					this.yc(this.la.area.ma, g, f);
					if(c) {
						g = wv(a);
						c = Hu([Ak, b]);
						if(f = g.oe(this.g)) {
							d = l;
							e = a.xc;
							i = a.qb;
							if(e || i) d = this.g.ja();
							if(e)
								for(g =
									0; g < e.Ca[I]; g++) this.g.xa(e.Ca[g][Mb], e.Ca[g].b, d);
							i && this.g.xa(i[Mb], i.b, d);
							d && this.g[t](d, f);
							g = d ? d.q() : f;
							this.yc(this.la.line.ma, c, g)
						}
						this.Yj(a, b)
					} else this.Sm(a, b, n)
				}
			}
		};
		V.Sm = function(a, b, c) {
			var d = Hu([Ak, b]);
			if(0 >= a[dd]) this.ak(d), this.Yj(a, b);
			else if(c = vv(a, c), 0 != c.eb[I]) {
				if(c = c.oe(this.g)) {
					var e = l,
						f = a.xc,
						g = a.qb;
					if(f || g) e = this.g.ja();
					if(f)
						for(var i = 0; i < f.Ca[I]; i++) this.g.xa(f.Ca[i][Mb], f.Ca[i].b, e);
					g && this.g.xa(g[Mb], g.b, e);
					e && this.g[t](e, c);
					e = e ? e.q() : c;
					this.yc(this.la.line.ma, d, e)
				}
				this.Yj(a, b);
				this.Ia.z && a.z && this.Ia.ae == Ei && c && this.zc(c, {
					mouseover: wm,
					mousemove: nn,
					mouseout: xm
				}, {
					$: b
				})
			}
		};
		V.Yj = function(a, b) {
			for(var c = 0; c < a.c[I]; c++) this.No(a, b, a.c[c], c)
		};
		V.Kr = function(a, b) {
			var c = this.Ia.a;
			if(a.x - b >= c[R] || a.x + b <= c[C] || a.y - b >= c[P] || a.y + b <= c.top) return n;
			if((a.x >= c[R] || a.x <= c[C]) && (a.y >= c[P] || a.y <= c.top)) {
				var d = b * b,
					e = a.x - c[R],
					f = a.x - c[C],
					g = a.y - c[P],
					c = a.y - c.top,
					e = e * e,
					f = f * f,
					g = g * g,
					c = c * c;
				if(e + g >= d && e + c >= d && f + c >= d && f + g >= d) return n
			}
			return k
		};
		V.No = function(a, b, c, d) {
			this.Bp(a, b, c, d, this.la.point.ma, this.la.pointsensitivityarea.ma)
		};
		V.Tn = function(a, b, c, d) {
			this.Bp(a, b, c, d, this.la.bubble.ma, l)
		};
		V.Bp = function(a, b, c, d, e) {
			if(c && c.i && !c.ud) {
				var f = rv(c, a),
					g = Hu([a[F] == sh ? oh : Ll, b, d]);
				if(f) {
					if(!this.Kr(c.i, tv(c, a))) {
						this.ak(g);
						return
					}
					var f = this.g.Uh(c.i.x, c.i.y, sv(c, a), pv(c, a)),
						i = l,
						j = c.qb,
						m = c.xc;
					if(j || m) i = this.g.ja();
					j && this.g.Zj(j.x, j.y, j.Xb, j.b, i);
					i && this.g[t](i, f);
					if(m)
						for(j = 0; j < m.Ca[I]; j++) this.g.Zj(m.x, m.y, m.Ca[j].Xb, m.Ca[j].b, i);
					f = i ? i.q() : f;
					this.yc(e, g, f)
				} else if(this.ak(g), 0 == a[dd]) return;
				c.K && this.wh(c.K, b, d);
				c.Ue && this.lm(c.Ue, a, b, d);
				c.i.Wc && this.Lm(a, b, d, c.i.Wc);
				this.Ia.z && a.z && (this.rj[g] = {
					Hb: c.i,
					Xb: c.i && W(c.i.Zh) ? c.i.Zh : W(c.Zh) ? c.Zh : a.Hq,
					$: b,
					Sa: d
				})
			}
		};
		V.av = function(a, b) {
			for(var c = 0; c < a.c[I]; c++) this.Mo(a, b, a.c[c], c)
		};
		V.Mo = function(a, b, c, d) {
			if(c && c.i) {
				var e = this.g.ne(c.i.tb[C], c.i.tb.top, c.i.tb[w], c.i.tb[Q], c.Ha),
					f = this.g.ne(c.i[vc][C], c.i[vc].top, c.i[vc][w], c.i[vc][Q], c.dm),
					g = this.g.ja();
				this.g[t](g, e);
				this.g[t](g, f);
				if(e = c.xc)
					for(f = 0; f < e.Ca[I]; f++) {
						var i = e.Ca[f][vc];
						this.g.Wa(i[C], i.top, i[w], i[Q], e.Ca[f].b, g)
					}(e = c.qb) && this.g.Wa(e[vc][C], e[vc].top, e[vc][w], e[vc][Q], e.b, g);
				e = Hu([vh, b, d]);
				this.yc(this.la.candlestick.ma, e, g.q());
				c.K && this.wh(c.K, b, d);
				this.Ia.z && a.z && (this.vj[e] = {
					rect: c.i[vc],
					tb: c.i.tb,
					$: b,
					Sa: d
				})
			}
		};
		V.lm = function(a, b, c, d) {
			if(a) {
				var e = a.Ym,
					f = this.Ia.a;
				if(!(e.x < f[C] || e.x > f[R]))
					if(e = this.Ms(e[Qb], e.x, e.y, e[I], this.Ia.Iq), a = this.Sn(a.label, k)) f = [rg], W(c) && f[v](c), f[v](d), this.yc(this.la.annotation.ma, Hu(f), e), f[0] = Ag, this.yc(this.la.annotationtext.ma, Hu(f), a), this.Ia.z && (!b || b.z) && this.Ia.jc != xh && this.zc(a, {
						click: tg,
						mouseover: ug,
						mouseout: vg,
						mousemove: nn
					}, {
						$: c,
						Sa: d
					})
			}
		};
		V.Ms = function(a, b, c, d, e) {
			a = a == Gj ? [d, 1] : [1, d];
			return this.g.ne(s.min(b, b + a[0]), s.min(c, c + a[1]), s.abs(a[0]), s.abs(a[1]), new wt({
				fill: e
			}))
		};
		V.Lm = function(a, b, c, d) {
			if(!W(a.hc)) return l;
			for(var e = this.g.ja(), a = a.hc.jg, f = 0; f < d[I]; f++) {
				var g = d[f][vc],
					i = a[d[f].ig];
				if(!(i[zc] == Cg || i[zc] == Ak)) {
					var j = i.b;
					if(0 == g[w] && 0 == g[Q]) i = i.Qq / 2, 0 < i && (g = this.g.Uh(g[C], g.top, i, j), this.g[t](e, g));
					else if(0 == g[w] || 0 == g[Q]) i = new Et, i[rb](g[C], g.top), i.G(g[C] + g[w], g.top + g[Q]), this.g.xa(i, j, e);
					else this.g[t](e, this.g.ne(g[C], g.top, g[w], g[Q], j))
				}
			}
			if(!e.Mg()) return l;
			b = Hu([Xj, b, c]);
			e = e.q();
			this.yc(this.la.interval.ma, b, e);
			return e
		};
		V.Hr = function(a, b) {
			var c = this.g,
				d = a.a.top,
				e = a.a[Q];
			b.kb && !b.We.xg() && Mp(b.kb, function(a, f) {
				if(a.B) {
					var j = c.Wa(s[B](a.u), d, 1, e, b.We, this.la.gridline.ma);
					c.ib(j, b[Sb] + Vd + f)
				}
			}, this);
			if(b.V && b.V.B && !b.Ve.xg()) {
				var f = c.Wa(s[B](b.V.u), d, 1, e, b.Ve, this.la.baseline.ma);
				c.ib(f, b[Sb])
			}
		};
		V.Ir = function(a, b) {
			var c = this.g,
				d = a.a[C],
				e = a.a[w];
			b.kb && !b.We.xg() && Mp(b.kb, function(a, f) {
				if(a.B) {
					var j = c.Wa(d, s[B](a.u), e, 1, b.We, this.la.gridline.ma);
					c.ib(j, b[Sb] + Vd + f)
				}
			}, this);
			if(b.V && b.V.B && !b.Ve.xg()) {
				var f = c.Wa(d, s[B](b.V.u), e, 1, b.Ve, this.la.baseline.ma);
				c.ib(f, b[Sb])
			}
		};
		V.gn = function(a, b) {
			var c = this.la;
			this.g.ib(this.yd(b[J], c.axistitle.ma), b[Sb] + Xd);
			if(b[x]) {
				var d = c.axistick.ma;
				Mp(b[x], function(a, c) {
					a.B && this.g.ib(this.yd(a.o, d), b[Sb] + Wd + c)
				}, this)
			}
		};
		V.Xn = function(a, b) {
			this.il(a, this.se);
			this.hl(a, b)
		};
		V.il = function(a, b) {
			for(var c in b.e) {
				var d = a.e[c];
				if(fv(b.e[c], qq({
						c: l
					})))
					for(var e in b.e[c].c) b.e[c].c[e].K && this.Mk(ea(c), ea(e)), this.ao(d, ea(c), d.c[e], ea(e));
				else {
					for(e in b.e[c].c) b.e[c].c[e].K && this.Mk(ea(c), ea(e));
					this.Xj(d, ea(c))
				}
			}
			for(var f in b.v) b.v[f].kg && this.Us(ea(f))
		};
		V.hl = function(a, b) {
			for(var c in b.e) {
				var d = a.e[c];
				if(fv(b.e[c], qq({
						c: l
					})))
					for(var e in b.e[c].c) {
						var f = new ju(2);
						f.Lb(0, d.c[e]);
						f.Lb(1, b.e[c].c[e]);
						f = f[ad]();
						this.ao(d, ea(c), f, ea(e))
					} else f = new ju(2), f.Lb(0, d), f.Lb(1, b.e[c]), this.Xj(f[ad](), ea(c))
			}
			for(var g in b.v) b.v[g].kg && this.Pm(b.v[g].kg, ea(g))
		};

		function zv(a, b) {
			a ? b[I] != a[I] && h(r("colorsScale and valuesScale must be of the same length")) : 1 != b[I] && h(r("colorsScale must contain exactly one element when no valueScale is provided"));
			this.Zd = a;
			this.Ne = Op(b, function(a) {
				return ct(a).Wi
			})
		}
		var Av = ["#EFE6DC", "#109618"],
			Bv = ["#DC3912", "#EFE6DC", "#109618"];
		zv[K].lt = function(a) {
			if(!this.Zd) return this.Ne[0];
			if(a >= this.Zd[this.Zd[I] - 1]) return this.Ne[this.Ne[I] - 1];
			if(a <= this.Zd[0]) return this.Ne[0];
			var b, c = this.Zd;
			b = cq;
			for(var d = 0, e = c[I], f; d < e;) {
				var g = d + e >> 1,
					i;
				i = b(a, c[g]);
				0 < i ? d = g + 1 : (e = g, f = !i)
			}
			b = f ? d : ~d;
			if(0 <= b) return this.Ne[b];
			c = -b - 2;
			b = -b - 1;
			return st(this.Ne[b], this.Ne[c], (a - this.Zd[c]) / (this.Zd[b] - this.Zd[c]))
		};

		function Cv(a, b) {
			!b || 0 == b[I] ? b = a && 3 == a[I] ? Bv : Av : 1 == b[I] && (b = [Av[0], b[0]]);
			if(!a || 2 > a[I]) return {
				hk: l,
				gk: [Jp(b)]
			};
			var c = a[0],
				d = a[a[I] - 1],
				e = d - c;
			if(0 == e) return {
				hk: [d],
				gk: [Jp(b)]
			};
			if(2 == a[I]) {
				a = [];
				d = e / (b[I] - 1);
				for(e = 0; e < b[I]; e++) a[v](c + d * e)
			}
			return {
				hk: a,
				gk: b
			}
		};

		function Dv() {
			return {
				transform: function(a) {
					return a
				},
				inverse: function(a) {
					return a
				}
			}
		}

		function Ev() {
			return {
				transform: function(a) {
					return s.log(a) / s.LN10
				},
				inverse: function(a) {
					return s.pow(10, a)
				}
			}
		}

		function Fv(a) {
			return {
				transform: function(b) {
					return b > a ? s.log(b / a) / s.LN10 : b < -a ? -s.log(-b / a) / s.LN10 : 0
				},
				inverse: function(b) {
					return 0 < b ? s.pow(10, b) * a : 0 > b ? -s.pow(10, -b) * a : 0
				}
			}
		}
		var Gv = {
			LINEAR: Dk,
			py: Fk,
			uy: Tk
		};

		function Hv(a, b, c) {
			return(c = a.Wh(c, Gv)) ? c : a.za(b) ? Fk : Dk
		}

		function Iv(a, b) {
			switch(a) {
				case Dk:
					return Dv();
				case Fk:
					return Ev();
				case Tk:
					return Fv(b / 2)
			}
		};

		function Jv(a, b, c, d) {
			this.dq = s.pow(a, 2);
			this.pw = s.pow(b, 2);
			this.mw = b;
			this.eq = (this.Uf = c ? new pt(d[ed](c[O]), d[ed](c.end)) : l) ? this.Uf.end - this.Uf[O] : l;
			this.qw = d
		}
		Jv[K].mt = function(a) {
			if(!this.eq || !W(a)) return this.mw;
			a = this.qw[ed](a);
			a = pr(a, this.Uf[O], this.Uf.end);
			return s[z](s[Ib](this.dq + (a - this.Uf[O]) / this.eq * (this.pw - this.dq)))
		};
		var Kv = {
			sy: Jf,
			Iy: Sf,
			ty: Kf,
			hy: Cf,
			$x: wf,
			Qy: Yf,
			vy: Mf,
			Fy: Rf,
			Ry: ag
		};

		function Lv(a) {
			switch(a) {
				case Jf:
					return 1;
				case Sf:
					return 1E3;
				case Kf:
					return 6E4;
				case Cf:
					return 36E5;
				case wf:
					return 864E5;
				case Yf:
					return 6048E5;
				case Mf:
					return 2629746E3;
				case Rf:
					return 7889238E3;
				case ag:
					return 31556952E3;
				default:
					h(r("Unknown time duration: " + a))
			}
		};
		var Mv = {
				Nw: "yyyy",
				Ow: "MMM y",
				Sy: "MMMM yyyy",
				wy: "MMM d",
				xy: "MMMM dd",
				zy: "M/d",
				yy: "MMMM d",
				ay: ni
			},
			Nv = Mv,
			Nv = Mv;

		function Ov(a, b, c, d) {
			return new Pv(b, a + (id + c), a + (id + d))
		}

		function Pv(a, b, c) {
			this.Ti = a;
			this.lq = new google[wc][Tb]({
				pattern: b
			});
			this.Rw = c ? new google[wc][Tb]({
				pattern: c
			}) : this.lq
		}
		ya(Pv[K], function(a) {
			a /= this.Ti;
			return(1 == s.abs(s[z](a)) ? this.Rw : this.lq)[rc](a)
		});

		function Qv() {
			this.kq = new Date;
			this.Dg(Jf)
		}
		Qv[K].Dg = function(a) {
			switch(a) {
				case ag:
					a = Nv.Nw;
					break;
				case Rf:
					a = Qf;
					break;
				case Mf:
					a = Nv.Ow;
					break;
				case wf:
					a = 3;
					break;
				default:
					a = 11
			}
			this.Qd = new google[wc].DateFormat({
				pattern: a,
				timeZone: 0
			})
		};
		ya(Qv[K], function(a) {
			this.kq[Qc](a);
			return this.Qd[rc](this.kq)
		});

		function Rv() {
			this.Ql = l;
			this.Rf = [];
			this.Pl = this.Ke = this.ph = l
		}
		V = Rv[K];
		V.lu = function(a) {
			this.Pl = a;
			return this
		};
		V.iu = function(a) {
			this.Ql = a;
			return this
		};
		V.ju = function(a) {
			this.ph = a;
			return this
		};
		V.ku = function(a) {
			this.Ke = a;
			return this
		};
		V.mu = function(a) {
			a = av(op(a) ? a : 3);
			this.Rf = [Ov(a, s.pow(10, 15), Pf, Pf), Ov(a, s.pow(10, 12), Vf, Vf), Ov(a, s.pow(10, 9), rf, rf), Ov(a, s.pow(10, 6), If, If)];
			return this
		};
		V.gu = function() {
			var a;
			a = this.Pl ? new google[wc][Tb]({
				pattern: this.Pl
			}) : new google[wc][Tb]({
				pattern: av(op(this.Ql) ? this.Ql : 16)
			});
			return new Sv(a, this.Rf, this.ph, this.Ke)
		};

		function Sv(a, b, c, d) {
			this.bw = a;
			this.Rf = b || [];
			this.ph = c || l;
			this.Ke = d || l;
			a: {
				a = this.Rf;b = p;
				for(c = 0; c < a[I]; c++) {
					d = a[c];
					if(b < d.Ti) break a;
					b = d.Ti
				}
			}
		}
		ya(Sv[K], function(a) {
			var b = 0 > a,
				a = s.abs(a);
			if(this.ph) {
				var c = this.ph;
				if(0 != a) {
					var d = s[B](s.log(s.abs(a)) / Lu) + 1;
					d > c ? (c = s.pow(10, d - c), a = s[z](a / c) * c) : (c = s.pow(10, c - d), a = s[z](a * c) / c)
				}
			}
			c = l;
			for(d = 0; d < this.Rf[I]; d++) {
				var e = this.Rf[d];
				if(a >= e.Ti) {
					c = e[zb](a);
					break
				}
			}
			c == l && (c = this.bw[rc](a));
			c = this.tw(c);
			return b ? ke + c : c
		});
		Sv[K].tw = function(a) {
			if(!this.Ke) return a;
			var b = this.Ke.symbol,
				c = this.Ke.usePadding ? id : S;
			return this.Ke[fc] == hm ? a + c + b : b + c + a
		};

		function Tv(a, b, c, d, e) {
			this.Ri = a;
			this.Hl = b;
			this.Kx = c;
			this.Jx = d;
			this.Tf = e;
			a = this.Ml(a);
			b = this.Ml(b) - a;
			this.Ie = (d - c) / b;
			this.nh = this.Ie * a - c
		}
		Tv[K].pa = function(a) {
			return this.Ml(a) * this.Ie - this.nh
		};
		Tv[K].Mb = function(a) {
			return this.Kw((a + this.nh) / this.Ie)
		};
		Tv[K].Ml = function(a) {
			switch(this.Tf) {
				case 0:
					return s.log(a);
				case 1:
					return a;
				default:
					return(s.pow(a, this.Tf) - 1) / this.Tf
			}
		};
		Tv[K].Kw = function(a) {
			switch(this.Tf) {
				case 0:
					return s.pow(s.E, a);
				case 1:
					return a;
				default:
					return s.pow(a * this.Tf + 1, 1 / this.Tf)
			}
		};

		function Uv(a, b) {
			return 0 > b ? a / s.pow(10, -b) : a * s.pow(10, b)
		}

		function Vv(a) {
			return 0.4342944819032518 * s.log(a)
		}

		function Wv(a) {
			return s[B](Vv(a))
		}

		function Xv(a) {
			return s[db](Vv(a))
		};

		function Yv(a, b, c, d, e, f) {
			this.De = a;
			this.Ug = b;
			this.tf = c;
			this.sf = d;
			this.au = e;
			this.Eo = f;
			this.dc = this.bu();
			a >= this.dc ? (this.Fa = this.Xd(a, b, c, d), this.mb = s[z](this.Fa.pa(this.dc))) : b <= -this.dc ? (this.Fa = this.Xd(-b, -a, d, c), this.mb = s[z](this.Fa.pa(this.dc)), f = 2 * this.mb - d, e = 2 * this.mb - c, this.Fa = this.Xd(-b, -a, f, e)) : a >= -this.dc ? (this.mb = s[z](c), this.Fa = this.Xd(this.dc, b, this.mb, d)) : b <= this.dc ? (this.mb = s[z](d), e = 2 * this.mb - c, this.Fa = this.Xd(this.dc, -a, this.mb, e)) : (this.Fa = this.Xd(this.dc, b, 0, 1), e = this.Fa.pa(-a),
				this.mb = s[z](c + (d - c) * (e / (e + 1))), b >= -a ? this.Fa = this.Xd(this.dc, b, this.mb, d) : (e = 2 * this.mb - c, this.Fa = this.Xd(this.dc, -a, this.mb, e)));
			this.vg = d < c
		}
		V = Yv[K];
		V.me = function() {
			return this.De
		};
		V.le = function() {
			return this.Ug
		};
		V.pe = function() {
			return this.tf
		};
		V.Hd = function() {
			return this.sf
		};
		V.bu = function() {
			return this.De == this.Ug ? this.De / 2 : ka(this.Eo) ? Uv(1, Wv(this.Ug - this.De)) / 1E3 : this.Eo / 2
		};
		V.Xd = function(a, b, c, d) {
			return new Tv(a, b, c, d, this.au)
		};
		V.Mb = function(a) {
			if(this.De == this.Ug) return this.De;
			var b = this.vg ? -1 : 1;
			return a * b > this.mb * b ? this.Fa.Mb(a) : a * b < this.mb * b ? -this.Fa.Mb(2 * this.mb - a) : 0
		};
		V.pa = function(a) {
			return this.De == this.Ug ? s.abs(this.tf - this.sf) / 2 : a > this.dc ? this.Fa.pa(a) : a < -this.dc ? 2 * this.mb - this.Fa.pa(-a) : this.mb
		};

		function Zv(a, b, c, d, e, f, g) {
			hp(g) || (g = 2);
			this.Pu = a;
			this.m = b;
			this.Mu = c;
			this.Nu = d;
			this.Fx = e;
			this.Id = f;
			this.Gx = this.Ou(g)
		}
		Zv[K].Ou = function(a) {
			switch(a) {
				case 1:
				case 2:
				case 3:
					break;
				default:
					h(r("Invalid label alignment value: " + a))
			}
			return a
		};

		function $v(a, b, c) {
			return new Zv(a, b, k, k, k, c)
		}

		function aw(a, b, c) {
			return new Zv(a, b, n, n, n, c)
		}
		Zv[K].re = function() {
			return s[z](this.m)
		};
		Ea(Zv[K], function() {
			return this.Pu
		});
		Zv[K].Jv = function(a) {
			this.Id = a
		};

		function bw(a, b) {
			this.gh = a;
			this.fh = b || 0;
			this.kp = this.Yu(this.gh + this.fh);
			this.m = 0
		}
		V = bw[K];
		Ma(V, function() {
			this.m++;
			return this[H]()
		});
		V.Ya = function() {
			this.m--;
			return this[H]()
		};
		Ea(V, function() {
			return s[z]((this.m * this.gh + this.fh) * this.kp) / this.kp
		});
		ta(V, function(a) {
			this.m = s[B]((a - this.fh) / this.gh);
			return this[H]()
		});
		sa(V, function(a) {
			this.m = s[db]((a - this.fh) / this.gh);
			return this[H]()
		});
		qa(V, function(a) {
			this.m = s[z]((a - this.fh) / this.gh);
			return this[H]()
		});
		V.Yu = function(a) {
			if(1 <= a) return 1;
			var b = a[ac](),
				a = 0,
				c = b[sb](Ii); - 1 != c ? a = ga(b[Zb](c + 1), 10) : c = b[I];
			b = b[sb](me); - 1 != b && (a -= c - 1 - b);
			return s.pow(10, -a)
		};

		function cw(a, b, c, d) {
			this.I = a;
			this.qc = b;
			this.ub = c;
			this.Qd = d
		}
		V = cw[K];
		V.Bo = function(a) {
			var b = a[I];
			if(0 < b)
				for(; --b;)
					if(this.yq(a[b - 1], a[b])) return n;
			return k
		};
		V.yq = function(a, b) {
			var c = this.zp(a),
				d = this.zp(b);
			return s.abs(this.I.pa(a) - this.I.pa(b)) < (c + d) / 2
		};
		V.nu = function(a) {
			var b = [];
			if(1 >= a[I] || 0 != a[0]) return a;
			b[v](a[0]);
			for(var c = 1, d = a[I]; c < d; c++) this.yq(a[0], a[c]) || b[v](a[c]);
			return b
		};
		V.zp = function(a) {
			return this.qc.Hf(this.Qd[zb](a), this.ub)
		};
		V.Oo = function(a, b) {
			return s.abs(this.I.Mb(b) - this.I.Mb(a))
		};
		V.Bi = function(a) {
			for(var b = [], c = 0; c < a[I]; c++) {
				var d = a[c];
				b[v]($v(d, this.I.pa(d), this.Qd[zb](d)))
			}
			return b
		};
		V.fl = function(a, b, c, d) {
			if(b == c) return [b];
			for(var e = [], b = a[db](b); b <= c;) e[v](b), b = a[oc]();
			1 == e[I] && (b = (new bw(d / 10))[B](c), b != e[0] && e[v](b));
			return e
		};

		function dw(a) {
			this.zv(a);
			this.dv = a[hb]();
			this.ah = a[I];
			this.m = 0
		}
		V = dw[K];
		Ma(V, function() {
			this.m++;
			return this[H]()
		});
		V.Ya = function() {
			this.m--;
			return this[H]()
		};
		V.zv = function(a) {
			var b = a[I];
			0 == b && h(r("Multiplier is empty."));
			1 > a[0] && h(r("Multipliers first value is too low."));
			10 <= a[b - 1] && h(r("Multipliers last value is too high."));
			for(var c = 0, d, e = 0; e < b; e++) d = a[e], op(a[e]) || h(r("MultiplierList contains non-numerical value.")), d <= c && h(r("MultiplierList is not sorted.")), c = d
		};
		Ea(V, function() {
			var a = s[B](this.m / this.ah);
			return Uv(this.dv[this.m - a * this.ah], a)
		});
		ta(V, function(a) {
			this.yl(Wi, a);
			this.m = this.ah * Xv(a);
			if(this[H]() != a)
				for(; this.Ya() > a;);
			return this[H]()
		});
		sa(V, function(a) {
			this.yl(Ch, a);
			this.m = this.ah * Wv(a);
			if(this[H]() != a)
				for(; this[oc]() < a;);
			return this[H]()
		});
		qa(V, function(a) {
			this.yl(lm, a);
			this.m = this.ah * Xv(a);
			if(this[H]() != a) {
				for(; this.Ya() > a;);
				if(a - this[H]() < this[oc]() - a) return this.Ya()
			}
			return this[H]()
		});
		V.yl = function(a, b) {
			0 >= b && h(r(this + me + a + de + b + ") - Received " + b + " but may only take positive numbers as argument."))
		};

		function ew(a, b, c, d, e) {
			this.Fa = a;
			this.sl = e;
			this.bc = new cw(a, c, d, b);
			this.sd = new dw([1, 2, 5])
		}
		ew[K].ai = function() {
			var a = this.gl(),
				b;
			this.sd[B](a);
			do b = this.bc.fl(new bw(a), this.Fa.me(), this.Fa.le(), a), a = this.sd[oc](); while (!this.bc.Bo(b));
			return this.bc.Bi(b)
		};
		ew[K].gl = function() {
			var a = this.Fa.pe(),
				b = this.Fa.Hd(),
				c = s.max(this.bc.Oo(a, a + this.sl), this.bc.Oo(b - this.sl, b)),
				d = this.Fa.pa(0);
			d >= a && d <= b && (a = this.Fa.Mb(this.Fa.pa(0) + this.sl), c = s.max(c, a));
			return this.sd[db](c)
		};

		function fw(a, b, c, d) {
			this.Ri = a;
			this.Hl = b;
			this.Rl = c;
			this.Vp = d;
			this.Ie = (this.Vp - this.Rl) / (this.Hl - this.Ri);
			this.nh = this.Ie * this.Ri - this.Rl
		}
		V = fw[K];
		V.Mb = function(a) {
			return(a + this.nh) / this.Ie
		};
		V.pa = function(a) {
			return a * this.Ie - this.nh
		};
		V.pe = function() {
			return this.Rl
		};
		V.Hd = function() {
			return this.Vp
		};
		V.me = function() {
			return this.Ri
		};
		V.le = function() {
			return this.Hl
		};

		function gw(a, b) {
			this.Ci = a;
			this.Vg = s[B](a / 10);
			this.td = a - this.Vg;
			this.Va = 0;
			this.Di = Wv(s.abs(b));
			this.Ee = this.td * this.Di;
			this.m = 0
		}
		V = gw[K];
		V.fp = function() {
			var a = s[B](this.m / this.td),
				b;
			b = 10 * (this.m + this.Vg - a * this.td) / this.Ci;
			0 == b && (b = 1);
			return Uv(b, a)
		};
		Ea(V, function() {
			this.m = s.abs(this.Va) + this.Ee;
			return 0 < this.Va ? this.fp() : 0 > this.Va ? -this.fp() : 0
		});
		Ma(V, function() {
			this.Va++;
			return this[H]()
		});
		V.Ya = function() {
			this.Va--;
			return this[H]()
		};
		ta(V, function(a) {
			var b = this.Vg,
				c = Wv(s.abs(a));
			if(s.abs(a) <= s.pow(10, this.Di)) return this.Va = 0 > a ? -1 : 0, this[H]();
			if(0 < a) this.Va = this.td * c - this.Ee;
			else if(0 > a) this.Va = this.Ee - this.td * c, b = -b;
			this[H]() != a && (c = this.Ci * a / Uv(1, Xv(s.abs(a))), this.Va += s[B](c) - b);
			return this[H]()
		});
		sa(V, function(a) {
			var b = this.Vg,
				c = Wv(s.abs(a));
			if(s.abs(a) <= s.pow(10, this.Di)) return this.Va = 0 < a ? 1 : 0, this[H]();
			if(0 < a) this.Va = this.td * c - this.Ee;
			else if(0 > a) this.Va = this.Ee - this.td * c, b = -b;
			this[H]() != a && (c = this.Ci * a / Uv(1, Xv(s.abs(a))), this.Va += s[db](c) - b);
			return this[H]()
		});
		qa(V, function(a) {
			var b = Wv(s.abs(a));
			if(s.abs(a) <= s.pow(10, this.Di)) return this.Va = 0;
			if(0 < a) {
				this.Va = this.td * b - this.Ee;
				if(this[oc]() > a) return a - this[H]() >= this.Ya() - a ? this[oc]() : this[H]();
				this.Ya()
			} else if(0 > a) {
				this.Va = this.Ee - this.td * b;
				if(this.Ya() < a) return a - this[H]() < this[oc]() - a ? this.Ya() : this[H]();
				this[oc]()
			}
			this[H]() != a && (b = this.Ci * a / Uv(1, Xv(s.abs(a))), this.Va += s[z](b) - this.Vg);
			return this[H]()
		});

		function hw(a, b, c, d, e, f) {
			this.I = a;
			this.Qd = b;
			this.qc = c;
			this.ub = d;
			this.xi = f;
			this.Vt = e;
			this.bc = new cw(a, c, d, b);
			this.sd = new dw([1, 2, 5])
		}
		hw[K].ai = function() {
			var a = this.gl(),
				b = this.bc.fl(new gw(a, this.xi), this.I.me(), this.I.le(), a);
			if(2 > b[I]) return this.bc.Bi(b);
			var a = b[0],
				c = b[1];
			if(0 == a) {
				if(3 > b[I]) return this.bc.Bi(b);
				a = c;
				c = b[2]
			}
			b = Uv(1, Xv(s.abs(a)));
			b == a && (b *= 10);
			this.sd[db](b / s.abs(c - a));
			do a = this.sd.Ya(), b = this.bc.fl(new gw(a, this.xi), this.I.me(), this.I.le(), a), b = this.bc.nu(b); while (!this.bc.Bo(b));
			return this.bc.Bi(b)
		};
		hw[K].gl = function() {
			var a = this.I.pa(10 * this.xi),
				b;
			this.sd[B](1);
			do b = this.sd[oc](), b = this.I.pa(10 * this.xi * (b - 1) / b); while (s.abs(a - b) >= this.Vt);
			return this.sd.Ya()
		};

		function iw(a, b) {
			this.Wp = a;
			this.W = b
		}
		iw[K].op = function(a) {
			return this.Wp(a, this.W)[w]
		};
		iw[K].Sf = function(a) {
			return this.Wp(a, this.W)[Q]
		};
		iw[K].Hf = function(a, b) {
			return b == Gj ? this.op(a) : this.Sf(a)
		};

		function jw(a, b) {
			W(a) ? (s[z](a), this.Yd = a) : this.Yd = 1;
			if(12 < this.Yd) this.gw = new bw(s[B](this.Yd / 12));
			var c = b || 0;
			s[z](c);
			this.fw = c;
			this.fc = new Date;
			this[B](0)
		}
		V = jw[K];
		Ea(V, function() {
			return this.fc[Vb]()
		});
		Ma(V, function() {
			var a = this.fc[Gc](),
				a = a + this.Yd;
			this.fc.setUTCMonth(a);
			return this[H]()
		});
		V.Ya = function() {
			this.fc.setUTCMonth(this.fc[Gc]() - this.Yd);
			return this[H]()
		};
		ta(V, function(a) {
			this.fc[Qc](a);
			1 < this.Yd && (this.fc.setUTCMonth(this.fc[Gc]() - (this.fc[Gc]() + 12 - this.fw) % this.Yd % 12), 12 < this.Yd && this.fc.setUTCFullYear(this.gw[B](this.fc.getUTCFullYear())));
			this.fc.setUTCDate(1);
			this.fc.setUTCHours(0, 0, 0, 0);
			return this[H]()
		});
		sa(V, function(a) {
			return this[B](a) < a ? this[oc]() : this[H]()
		});
		qa(V, function(a) {
			return this[B](a) != a && a - this[H]() < this[oc]() - a ? this.Ya() : this[H]()
		});

		function kw() {
			this.m = 0
		}
		V = kw[K];
		Ma(V, function() {
			this.m++;
			return this[H]()
		});
		V.Ya = function() {
			this.m--;
			return this[H]()
		};
		Ea(V, function() {
			return Uv(1, this.m)
		});
		ta(V, function(a) {
			this.m = Wv(a);
			return this[H]()
		});
		sa(V, function(a) {
			this.m = Xv(a);
			return this[H]()
		});
		qa(V, function(a) {
			var b = Uv(1, Xv(a)),
				c = b / 10;
			this.m = s[z](Vv(a - c < b - a ? c : b));
			return this[H]()
		});

		function lw(a) {
			a ? (this.Fb = [1E3, 5E3, 1E4, 15E3, 3E4, 6E4, 3E5, 6E5, 9E5, 18E5, 36E5, 108E5, 216E5, 432E5, 864E5, 6048E5, 2629746E3, 7889238E3, 31556952E3], this.Ta = new dw([1, 2, 5])) : (this.Fb = [1E3, 6E4, 36E5, 864E5, 6048E5, 2629746E3, 7889238E3, 31556952E3], this.Ta = new kw);
			this.zi = this.Ta[z](this.Fb[0]);
			this.cl = this.Ta.Ya();
			this.Ft = this.cl + (this.zi - this.cl) / 2;
			this.Gf = this.Fb[this.Fb[I] - 1];
			this.Ta[z](1);
			this.zo = this.Gf * this.Ta[oc]();
			this.Gt = this.Gf + (this.zo - this.Gf) / 2;
			this.Sb(2)
		}
		V = lw[K];
		V.Sb = function(a) {
			this.dl = 1 == a || 4 == a;
			if(2 == a) this.m = 0;
			else if(3 == a) this.m = this.Fb[I] - 1;
			else if(1 == a) this.Rc = 1;
			else if(4 == a) this.Rc = this.Gf
		};
		Ea(V, function() {
			return this.dl ? this.Rc * this.Ta[H]() : this.Fb[this.m]
		});
		ta(V, function(a) {
			if(a < this.zi) return this.Sb(1), this.Ta[B](a);
			if(a >= this.zo) return this.Sb(4), this.Rc * this.Ta[B](a / this.Rc);
			for(this.Sb(2); a >= this.Fb[this.m];) this.m++;
			return this.Fb[--this.m]
		});
		sa(V, function(a) {
			if(a <= this.cl) return this.Sb(1), this.Ta[db](a);
			if(a > this.Gf) return this.Sb(4), this.Rc * this.Ta[db](a / this.Rc);
			for(this.Sb(3); a <= this.Fb[this.m];) this.m--;
			return this.Fb[++this.m]
		});
		qa(V, function(a) {
			if(a < this.Ft) return this.Sb(1), this.Ta[z](a);
			if(a >= this.Gt) return this.Sb(4), this.Rc * this.Ta[z](a / this.Rc);
			for(this.Sb(3); 0 < this.m && a < this.Fb[this.m];) this.m--;
			this.Fb[this.m + 1] - a <= a - this.Fb[this.m] && this.m++;
			return this.Fb[this.m]
		});
		Ma(V, function() {
			this.dl ? (this.Ta[oc](), 1 == this.Rc && this.Ta[H]() == this.zi && this.Sb(2)) : (this.m++, this.m == this.Fb[I] && (this.Sb(4), this.Ta[z](1), this.Ta[oc]()));
			return this[H]()
		});
		V.Ya = function() {
			this.dl ? (this.Ta.Ya(), this.Rc == this.Gf && 1 == this.Ta[H]() && this.Sb(3)) : (this.m--, -1 == this.m && (this.Sb(1), this.Ta[z](this.zi), this.Ta.Ya()));
			return this[H]()
		};

		function mw(a, b) {
			var c = W(b) ? b : 1,
				a = (new lw)[z](a);
			return 2629746E3 > a ? 6048E5 == a ? new bw(a, 864E5 * (3 + c)) : new bw(a) : new jw(s[z](a / 2629746E3))
		}

		function nw(a, b) {
			if(0 == a) return 0;
			for(var c = a, d = 0, e = NaN;;) {
				var f = Wv(c),
					g = Uv(1, f),
					i = ow(c);
				if(5 < i && (e = 5 * g + d, e = pw(e, f), e <= a && e > a - b)) break;
				e = i * g + d;
				e = pw(e, f);
				if(e <= a && e > a - b) break;
				f = i * g;
				d += f;
				c -= f
			}
			return e
		}

		function qw(a, b) {
			if(0 == a) return 0;
			for(var c = a, d = 0, e = NaN;;) {
				var f = Wv(c),
					g = Uv(1, f),
					i = ow(c);
				if(5 > i && (e = 5 * g + d, e = pw(e, f), e <= a + b && e >= a)) break;
				e = i * g + d;
				e = pw(e, f);
				if(e <= a + b && e >= a) break;
				e = (i + 1) * g + d;
				e = pw(e, f);
				if(e <= a + b && e >= a) break;
				f = i * g;
				d += f;
				c -= f
			}
			return e
		}

		function pw(a, b) {
			var c = Uv(1, s.abs(b));
			return s[z](a * c) / c
		}

		function ow(a) {
			var b = Wv(a),
				a = a / Uv(1, b),
				b = s.abs(s[z](a) - a);
			0 != b && 1.0E-10 > b && (a = s[z](a));
			return s[B](a)
		};

		function rw(a, b, c, d, e, f, g, i, j) {
			this.rt = a;
			this.to = b;
			this.uo = c;
			this.qc = d;
			this.Qb = e;
			this.I = f;
			this.wi = g;
			this.ub = i;
			this.Rk = j;
			this.qt = Lv(a);
			this.ti = Lv(b);
			this.Qb.Dg(this.to)
		}
		V = rw[K];
		V.Mt = function(a) {
			return [aw(a, s.abs(this.I.pe() - this.I.Hd()) / 2, this.Qb[zb](a))]
		};
		V.Iw = function() {
			var a = this.I.me(),
				b = this.I.le();
			this.Qb.Dg(this.rt);
			if(a == b) return this.Mt(a);
			var c;
			c = this.Qb[zb](b);
			c = new Zv(b, this.I.Hd(), k, k, n, c, 1);
			this.Qb.Dg(this.to);
			for(var d = 1 == this.uo && this.ti > this.qt, e = mw(this.ti * this.uo), f = mw(this.ti), g = [], i = NaN, j = e[db](a), a = f[db](a); a <= b; a = f[oc]()) {
				var m = this.I.pa(a);
				if(a == j) {
					j = e[oc]();
					if(this.Ot(i, a)) return l;
					d ? (ka(i) || g[v](this.Kt(i, a)), g[v](new Zv(a, m, k, k, k, l))) : (i = $v(a, m, this.Qb[zb](a)), g[v](i));
					i = a
				} else g[v](new Zv(a, m, n, k, n, l))
			}
			d && b < a && this.Ht(g,
				f, b);
			this.Rk && (this.Jt(c, g, this.qc), g[v](c));
			return 2 > this.Lt(g) ? this.It() : this.Nt(g) ? this.Pt(g) : g
		};
		V.Ht = function(a, b, c) {
			var d = this.Qb[zb](c),
				e = this.qc.Hf(d, this.ub),
				f = b[H](),
				b = this.I.pa(b.Ya()),
				g = this.I.pa(f),
				f = this.I.pa(c),
				b = (b + g) / 2;
			f - b > e / 2 && a[v](aw(c, b, d))
		};
		V.Jt = function(a, b) {
			var c = this.Iv(b);
			if(c != l) {
				var d = this.qc.Hf(c.Id, this.ub),
					e = this.qc.Hf(a.Id, this.ub);
				s.abs(c.re() - a.re()) - (d + e) / 2 < this.wi && c.Jv(l)
			}
		};
		V.Iv = function(a) {
			for(var b = a[I] - 1; 0 <= b; b--)
				if(a[b].Id != l) return a[b];
			return l
		};
		V.It = function() {
			var a = this.Qb[zb](this.I.me()),
				b = this.Qb[zb](this.I.le()),
				a = a + ke + b,
				b = [];
			this.Ku(a, this.I) || b[v](aw(NaN, this.I.pe() + this.I.Hd() / 2, a));
			return b
		};
		V.Ku = function(a) {
			var b = s.abs(this.I.pe() - this.I.Hd());
			return this.qc.op(a) > b + 40
		};
		V.Lt = function(a) {
			for(var b = 0, c = 0; c < a[I]; c++) a[c].Id != l && b++;
			return b
		};
		V.Pt = function(a) {
			for(var b = [], c = 0; c < a[I]; c++) {
				var d = a[c];
				(!d.Nu || d.Mu) && b[v](d)
			}
			return b
		};
		V.Ot = function(a, b) {
			var c = this.qc.Hf(this.Qb[zb](a), this.ub),
				d = this.qc.Hf(this.Qb[zb](b), this.ub);
			return s.abs(this.I.pa(a) - this.I.pa(b)) - (c + d) / 2 < this.wi
		};
		V.Nt = function(a) {
			if(2 > a[I]) return n;
			for(var b = a[0], c = 1; c < a[I]; c++) {
				var d = a[c];
				if(5 > s.abs(d.re() - b.re()) && b[H]() != d[H]()) return k;
				b = d
			}
			return n
		};
		V.Kt = function(a, b) {
			var c = this.I.pa(a),
				d = this.I.pa(b),
				c = (c + d) / 2;
			return aw(this.I.Mb(c), c, this.Qb[zb](a))
		};

		function sw(a, b, c, d, e, f, g) {
			this.I = a;
			this.dg = b;
			this.qc = c;
			this.Qb = d;
			this.wi = e;
			this.ub = f;
			this.Rk = g;
			this.Po = this.xu()
		}
		sw[K].xu = function() {
			return [this.yb(wf, 1), this.yb(wf, 7), this.yb(Mf, 1), this.yb(Mf, 2), this.yb(Mf, 3), this.yb(Mf, 6), this.yb(ag, 1), this.yb(ag, 2), this.yb(ag, 5), this.yb(ag, 10), this.yb(ag, 20), this.yb(ag, 50), this.yb(ag, 100), this.yb(ag, 1E3), this.yb(ag, 1E4), this.yb(ag, 1E7)]
		};
		sw[K].yb = function(a, b) {
			return new rw(this.dg, a, b, this.qc, this.Qb, this.I, this.wi, this.ub, this.Rk)
		};
		sw[K].ai = function() {
			for(var a = Lv(this.dg), b = 0; b < this.Po[I]; b++) {
				var c = this.Po[b];
				if(a <= c.ti && (c = c.Iw(), c != l)) return c
			}
			return []
		};

		function tw() {
			this.Bq = {}
		}
		var uw = l;

		function vw() {
			return uw ? uw : uw = new tw
		}
		tw[K].Vs = function(a) {
			return(a = this.Bq[a]) ? a[Uc](l, []) : l
		};
		tw[K].aj = function(a, b) {
			this.Bq[a] = b
		};

		function ww() {}
		V = ww[K];
		V.oc = function(a, b) {
			this.k = a;
			this.lg = b;
			this.Ax = 0;
			this.cb = this.Ak();
			this.r = [];
			this.M = p;
			this.Q = -p;
			ya(this, a.hi(this.A(fj)));
			this.Ws = a.R(this.A(Io), function(a, b) {
				return b
			});
			this.Ok = l
		};
		V.uf = function(a) {
			var b = Hv(this.k, this.A(Gk), this.A(qm));
			this.Ok = Iv(b, a)
		};
		V.A = function(a) {
			return bv(this.lg, a)
		};
		V.Ak = function() {
			return -1
		};
		V.ss = function(a, b, c) {
			c && (this.Fo(a), this.Fo(b));
			if(this.M == p || this.Q == -p) this.M = 0, this.Q = 1;
			if(this.M == this.Q) 0 == this.M ? (this.M = -1, this.Q = 1) : 0 < this.M ? (this.M /= 2, this.Q *= 2) : (this.M *= 2, this.Q /= 2);
			this.kl(this.M, this.Q, c);
			this.cb = s.max(1, this.r[I] - 1)
		};
		V.ts = function(a) {
			var b = this.$i(a);
			return this.Ws(a, b)
		};
		V.U = function(a) {
			a = this.od(a);
			if(typeof a != gl) return l;
			a = this.Tw(a);
			return !ia(a) ? l : a
		};
		V.Y = function(a) {
			if(W(a)) this.M = s.min(this.M, a), this.Q = s.max(this.Q, a)
		};
		V.Fo = function(a) {
			this.Y(this.U(a))
		};
		V.Vh = function(a) {
			return this.am(this.kk(a))
		};
		V.Tw = function(a) {
			return this.Ok[ed](a)
		};
		V.kk = function(a) {
			return this.Ok.inverse(a)
		};
		V.$i = function(a) {
			return a[ac]()
		};

		function xw(a, b, c, d, e, f) {
			this.lg = c;
			this.k = b;
			La(this, d);
			Aa(this, b.ia(this.A(po), ru, e));
			this.dataType = b.Hc(this.A(qi));
			this.xh = this.gj = this.hj = l;
			this.Gq = 0 < a.gb.bars;
			c = b.Hc(this.A(Nn));
			d = {
				zb: a.Tc,
				fontSize: a.uc,
				$a: a.Vf == Pj ? a.Se : U
			};
			d = b.vc(this.A(Rn), d);
			Ha(this, {
				text: c,
				t: d,
				d: [],
				Za: Eh,
				Pa: fn,
				K: S
			});
			this.Re = l;
			this.ic = b.ia(this.A(Gn), vu, ol);
			c = {
				color: this[F] != Ho || a.N == rm ? b.Hc(Jk) : b.Hc(Sk),
				zb: a.Tc,
				fontSize: a.uc,
				$a: this.ic == Pj ? a.Se : U
			};
			this.Ra = b.vc(this.A(Hn), c);
			this.Kq = b.ia(this.A(pl), wu, qo);
			this.gm = b.ia(this.A(Rj),
				xu, Ik);
			c = b.Uc(this.A(Rg), a.Eq);
			this.Ve = new wt({
				fill: c
			});
			a = b.Uc(this.A(wj), a.Fq);
			this.We = new wt({
				fill: a
			});
			this.Jc = 2;
			this.em = s.max(this.Jc, s[z](this[J].t[M] / 3.236));
			this.r = [];
			this.uh = 0;
			this.direction = this.ag = b.be(this.A(Ai), 1);
			this.ob = this.sb = l;
			this.th = this.Yf = 0;
			this.J = {
				min: -p,
				max: p
			};
			this.Ac = l;
			this.Lq = f;
			this[F] == Ho ? (this.V = this.j = l, this.dg = b.ia(this.A(Mn), Kv, Jf), this.yh = p) : (this.$e = 1, this.fg = this.Xe = 0, this.kj = 1, this.hm = 0, this.Zf(b))
		}
		V = xw[K];
		V.A = function(a) {
			return bv(this.lg, a)
		};
		V.yf = function(a) {
			if(0 != a) this.yh = s.min(s.abs(a), this.yh)
		};
		V.uf = function() {
			this.j.uf(this.yh)
		};
		V.oi = function(a, b) {
			var a = this[Fc] || a || gl,
				c = vw().Vs(a);
			c.oc(b, this.lg);
			this.j = c;
			this.hj = c.R(b, this.A(Rk));
			this.gj = c.R(b, this.A(Mk));
			this.xh = c.R(b, this.A(Qg));
			c = this.j.Ak() + 1;
			this.j.cb = this.k.da(this.A(xj), c) - 1
		};
		V.et = function() {
			if(this.J.min != -p) this.j.M = this.J.min;
			if(this.J.max != p) this.j.Q = this.J.max;
			if(this.j.M > this.j.Q) this.j.M = s.min(this.J.max, this.j.M), this.j.Q = s.max(this.J.min, this.j.Q)
		};
		V.Zf = function(a) {
			this.Ac = a.Wh(this.A(Oo), su);
			if(ip(this.Ac) || this.Ac == Pi) {
				if(this[F] == Ho) {
					var b = this.j,
						c = b.U(b.R(a, this.A(No))),
						a = b.U(b.R(a, this.A(Mo)));
					if(W(c)) this.J.min = c;
					if(W(a)) this.J.max = a
				} else this.J.min = a.be(this.A(No), this.J.min), this.J.max = a.be(this.A(Mo), this.J.max);
				this.J.min != -p || this.J.max != p ? (this.Ac = Pi, this.J.min >= this.J.max && h(r("viewWindow.max must be greater than viewWindow.min"))) : (this.Ac == Pi && h(r('Option "viewWindowMode" was set to "explicit" but "viewWindow" was not specified.')),
					this.Ac = this.Lq);
				this[F] == Ho && this.Ac == Pi && this.et()
			}
		};
		V.On = function() {
			return this.Ac == Pi && (this.J.min == -p || this.J.max == p)
		};
		V.ko = function() {
			this[F] == Ho && !this.j && h(r("Axis type/data type mismatch for " + this.lg))
		};
		V.xf = function(a, b, c, d) {
			this.sb = c + (1 == this[Wa] ? 0.5 : -0.5);
			this.uh = b - 1;
			this.ob = c + b * this[Wa];
			if(this[F] == Ho) 0 == this.j.cb ? this.j[sc] == yw ? this.Mr(a) : this.Nr(a) : this.Lr();
			else {
				var e;
				if(this.Ac == Pi) {
					if(this.J.min == -p) this.J.min = s.min(0, this.J.max - 1);
					else if(this.J.max == p) this.J.max = s.max(this.fg, this.J.min + 1);
					c = this.J.min;
					e = this.J.max - this.J.min
				} else c = 0, e = this.fg;
				this[F] == Bh && (e = s.max(1, e - 1));
				this.Gq && (e = s.min(e, s[B]((b + 1) / 2)));
				b = this.uh / 1.618 / e;
				this.$e = s.min(this.kj, s[B]((b + 1) / 2));
				this.Xe = s[B]((b - this.$e +
					1) / this.$e);
				this.hm = ((this.Xe + 1) * this.$e - 1) / 2;
				this.th = c + (this[F] == xh ? -0.5 : 0);
				this.Yf = this.uh / e;
				this.r = Uu(this.fg, function(b) {
					var c = b - this.th;
					return {
						fa: a.v[b][A],
						u: this.Aa(b),
						text: a.v[b].dj[0],
						B: 0 <= c && c <= e
					}
				}, this)
			}
			this.jn(a);
			this.hn(a, d);
			return {
				title: this[J],
				name: this.kn(),
				Ve: this.Ve,
				We: this.We,
				ag: this.ag,
				sb: this.sb,
				ob: this.ob,
				L: this[F] == Ho ? {
					Pq: Z(this.j.Vh, this.j),
					sg: Z(this.j.U, this.j),
					jf: Z(this.Or, this),
					mc: Z(this.Tm, this)
				} : l,
				V: this[F] == Ho && this.V ? {
					fa: this.V.fa,
					u: this.V.u,
					B: k
				} : l,
				kb: this[F] == Ho ? Op(this.r,
					function(a) {
						return {
							fa: a.fa,
							u: a.u,
							B: k
						}
					}) : l,
				text: this.Re
			}
		};
		V.Lr = function() {
			this.Y(this.j.U(this.xh));
			this.j.ss(this.hj, this.gj, this.Ac == Sl || this.On());
			if(this.On()) {
				if(this.J.min != -p) this.j.M = this.J.min;
				else if(this.J.max != p) this.j.Q = this.J.max;
				this.j.r = Np(this.j.r, function(a) {
					return a >= this.j.M && a <= this.j.Q
				}, this)
			}
			this.ck();
			this.r = Op(this.j.r, function(a) {
				var b = this.j.Vh(a),
					c = this.j.ts(b);
				return {
					fa: b,
					u: this.Aa(a),
					text: c,
					B: k
				}
			}, this)
		};
		V.Mr = function(a) {
			this.ck();
			var b = this.jk(a),
				c = new Qv;
			c.Dg(this.dg);
			var d = b.tf,
				e = b.sf,
				a = new iw(a.tc, this.Ra);
			if(b.vg) var f = d,
				d = e,
				e = f;
			b = (new sw(new fw(this.j.M, this.j.Q, d, e), this.dg, a, c, 15, b[Qb], k)).ai();
			this.r = [];
			for(c = 0; c < b[I]; c++) d = b[c], d.Id && this.r[v]({
				fa: d[H](),
				u: d.re(),
				text: d.Id,
				B: k
			})
		};
		V.ck = function() {
			var a = this.j.M,
				b = this.j.Q;
			this.Yf = this.uh / (b - a);
			this.th = a;
			if(W(this.xh)) a = this.j.U(this.xh);
			else var c = this.j.U(this.j.Jk()),
				a = pr(c, a, b);
			this.V = this.wd(a) ? {
				fa: this.j.Vh(a),
				u: this.Aa(a)
			} : l
		};
		V.Nr = function(a) {
			this.Y(this.hj);
			this.Y(this.gj);
			if(this.Ac == Sl) {
				var b;
				b = new pt(this.j.M, this.j.Q);
				if(b[O] != b.end) {
					(!ia(b[O]) || !ia(b.end)) && h(r("Range must be finite."));
					b[O] > b.end && h(r("Range start must be less or equal to end."));
					var c = 0.1 * (b.end - b[O]);
					b = new pt(0 > b[O] ? -qw(-b[O], c) : nw(b[O], c), 0 > b.end ? -nw(-b.end, c) : qw(b.end, c))
				}
				this.Y(b[O]);
				this.Y(b.end)
			}
			this.ck();
			var d = this.jk(a),
				e = this.j.kk(this.j.M),
				f = this.j.kk(this.j.Q),
				g = Hv(this.k, this.A(Gk), this.A(qm)) == Dk ? 1 : 0;
			var i = d.tf,
				j = d.sf - 1;
			b = this.yh;
			var c = d[Qb],
				m = new iw(a.tc, this.Ra),
				a = this.Rr(this.k);
			d.vg && (d = i, i = j, j = d);
			if(e == f) b = (j - i) / 2 + i, c = a[zb](e), b = [aw(e, b, c)];
			else {
				e = 1 == g ? new fw(e, f, i, j) : new Yv(e, f, i, j, g, b);
				if(e.me() == e.le()) f = 1;
				else {
					var g = s.min(e.pe(), e.Hd()),
						i = s.max(e.pe(), e.Hd()),
						j = s.abs(e.Mb(g)),
						d = s.abs(e.Mb(i)),
						f = s.max(j, d),
						o = 0,
						q = e.pa(0);
					if(g > q || q > i) o = s.min(j, d);
					g = e.pa(o);
					f = e.pa(f);
					f = s.abs(e.Mb(g + 10) - e.Mb(g)) / s.abs(e.Mb(f + 10) - e.Mb(f))
				}
				b = (0.5 < f ? new ew(e, a, m, c, 40) : new hw(e, a, m, c, 40, b)).ai()
			}
			this.r = [];
			for(c = 0; c < b[I]; c++) a = b[c], this.r[v]({
				fa: a[H](),
				u: a.re(),
				text: a.Id,
				B: k
			})
		};
		V.Rr = function(a) {
			var b = new Rv,
				c = a.hi(this.A(fj));
			c ? b.lu(c) : (c = a.Mc(this.A(ij)), op(c) && b.iu(c), c = a.Mc(this.A(jj)), op(c) && b.ju(c), (c = a.R(this.A(kj))) && b.ku({
				symbol: c.symbol,
				position: c[fc],
				usePadding: c.usePadding
			}), a.za(this.A(lj)) && b.mu(5));
			return b.gu()
		};
		V.Y = function(a) {
			this[F] == Ho && W(a) && this.wd(a) && this.j.Y(a)
		};
		V.Wm = function() {
			if(this[F] == Ho) {
				var a = this.j,
					b = 0.01 * (a.Q - a.M);
				if(0 < a.M && this.J.min == -p) a.M = s.max(a.M - b, 0);
				if(0 > a.Q && this.J.max == p) a.Q = s.min(a.Q + b, 0)
			}
		};
		V.ke = function(a, b) {
			this.fg = s.max(this.fg, a);
			this.kj = s.max(this.kj, b)
		};
		V.Aa = function(a) {
			return !W(a) ? l : this.sb + (a - this.th) * this[Wa] * this.Yf
		};
		V.Uu = function(a) {
			return !W(a) ? l : (a - this.sb) * this[Wa] / this.Yf + this.j.M
		};
		V.Or = function(a) {
			a = this.Uu(a);
			return !W(a) ? l : this.j.Vh(a)
		};
		V.Tm = function(a) {
			return this.Aa(this.j.U(a))
		};
		V.wd = function(a) {
			return a >= this.J.min && a <= this.J.max
		};
		V.po = function(a) {
			return a * this[Wa] > this.ob * this[Wa]
		};
		V.kt = function(a) {
			return a * this[Wa] < this.sb * this[Wa]
		};

		function zw(a, b, c, d) {
			this.D = a;
			this.k = b;
			this.h = d;
			this.ra = c;
			this.W = this.k.vc(rh, {
				zb: d.Tc,
				fontSize: d.uc,
				$a: d.Se
			});
			this.Fr = this.k.Uc(qh, Hd);
			this.Er = this.k.da(ph, 0.8);
			this.uj = 0;
			this.gg = 1;
			this.hg = 2;
			this.Cd = 3;
			this.bd = 4;
			this.zd = this.pm = this.om = this.rm = this.qm = S;
			this.bk = this.k.R(ei, Fu);
			this.Dr = Aw(this.bk[0])[tb];
			this.tm = this.sm = this.qj = this.pj = this.cf = this.af = l;
			this.xj()
		}
		V = zw[K];
		V.xj = function() {
			function a(a, b, d) {
				if(c[mb]() <= a) return S;
				var e = c[Fb](a);
				b && !(0 <= Lp(d, e)) && h(r("Column " + a + " must be of type " + d[cd](xe)));
				!b && 0 <= Lp(d, e) && h(r("Column " + a + " cannot be of type " + d[cd](xe)));
				return e
			}
			var b = this.h,
				c = this.D,
				d = c[mb]();
			3 > d && h(r("Data table should have at least 3 columns"));
			a(this.uj, k, [pn]);
			var e = a(this.gg, n, [pn]),
				f = a(this.hg, n, [pn]);
			this.qm = c[Cb](this.gg);
			this.rm = c[Cb](this.hg);
			if(this.Cd < d) {
				this.zd = a(this.Cd, k, [gl, pn]);
				if(this.zd == pn) this.af = {}, this.cf = [];
				this.om = c[Cb](this.Cd)
			} else this.Cd =
				l;
			this.bd < d ? (a(this.bd, k, [gl]), this.pm = c[Cb](this.bd), this.k.za(an, k) && c.setRows(c.getSortedRows({
				column: this.bd,
				desc: k
			}))) : this.bd = l;
			b.v = [];
			b.df = {};
			for(d = 0; d < c[dc](); d++) {
				var g = c[Jb](d);
				b.df[g] = d
			}
			b.e = [{
				type: sh,
				vm: k,
				z: k,
				c: [],
				tx: this.af,
				ux: this.cf
			}];
			b.fe = e;
			b.mf = [f];
			b.gb = {};
			b.gb.bubbles = 1;
			b.$c = []
		};
		V.rr = function(a, b) {
			for(var c = this.D, d = 0; d < c[dc](); d++) {
				var e = c[H](d, this.gg),
					f = c[H](d, this.hg),
					e = a.j.od(e),
					f = b.j.od(f);
				W(e) && a.yf(e);
				W(f) && b.yf(f)
			}
		};
		V.jr = function(a, b) {
			for(var c = 0; c < this.D[dc](); c++) this.h.e[0].c[v](this.zr(a, b, c));
			if(this.zd == gl) {
				var c = this.k,
					d = this.pj,
					e = l,
					f = c.R(ci);
				if(f && 0 < f[I]) {
					W(f[0]) || h(r(di));
					for(e = 1; e < f[I]; e++) W(f[e]) || h(r(di)), f[e] <= f[e - 1] && h(r("colorAxis.values must be a monotonically increasing series"));
					e = f
				} else {
					var f = c.Mc(bi),
						g = c.Mc(ai);
					W(f) && W(g) && f > g && h(r("colorAxis.minValue (" + f + ") must be at most colorAxis.maxValue (" + g + fe));
					(d = ut(d, f, g)) && (e = [d[O], d.end])
				}
				d = c.R(ei);
				d = c.R($h, d);
				c = Cv(e, d);
				this.sm = new zv(c.hk, c.gk)
			} else if(this.zd ==
				pn)
				for(c = 0; c < this.cf[I]; c++) e = this.cf[c], d = this.af[e], d.qh && this.h.$c[v]({
					index: c,
					id: e,
					text: d.fj,
					b: new wt({
						fill: d[tb]
					}),
					z: n
				});
			d = this.k;
			f = this.qj;
			c = d.da(Qm);
			e = d.da(Om);
			c > e && h(r("sizeAxis.minSize (" + c + ") must be at most sizeAxis.maxSize (" + e + fe));
			var g = d.Mc(Rm),
				i = d.Mc(Pm);
			W(g) && W(i) && g > i && h(r("sizeAxis.minValue (" + g + ") must be at most sizeAxis.maxValue (" + i + fe));
			f = ut(f, g, i);
			d = Hv(d, Nm, Sm);
			d = Iv(d, NaN);
			this.tm = new Jv(c, e, f, d)
		};
		V.zr = function(a, b, c) {
			var d = this.D,
				e = d[H](c, this.uj),
				f = d[Xc](c, this.uj),
				g = d[H](c, this.gg),
				i = d[H](c, this.hg),
				j = l;
			if(W(this.Cd) && (j = d[H](c, this.Cd), !W(j))) return l;
			var m = l;
			if(W(this.bd) && (m = d[H](c, this.bd), !W(m))) return l;
			var o = this.ra(f, this.W)[w];
			if(this.zd == gl) this.pj = tt(this.pj, j);
			else if(this.zd == pn) {
				var q = j,
					u = this.af[q];
				if(!u) {
					var u = Cm + q + me,
						y = this.k.Uc(u + Yh, this.bk[this.cf[I] % this.bk[I]]),
						y = Aw(y),
						D = this.k.za(u + Qo, k),
						u = this.k.Hc(u + fk, q),
						u = {
							color: y[tb],
							qh: D,
							fj: u
						};
					this.af[q] = u;
					this.cf[v](q)
				}
			}
			this.qj =
				tt(this.qj, m);
			g = a.j.U(g);
			i = b.j.U(i);
			if(ip(g) || ip(i)) return l;
			a.wd(g) && b.wd(i) && (a.Y(g), b.Y(i));
			a = this.ik(c, f);
			return {
				wc: d[Jb](c),
				id: e,
				text: f,
				Sq: o,
				t: this.W,
				Xf: a,
				hb: {
					x: g,
					y: i,
					color: j,
					size: m
				}
			}
		};
		V.ik = function(a, b) {
			var c = this.D,
				d = c[Xc](a, this.gg),
				e = c[Xc](a, this.hg),
				d = [{
					title: this.qm,
					value: d
				}, {
					title: this.rm,
					value: e
				}];
			W(this.Cd) && (e = c[Xc](a, this.Cd), d[v]({
				title: this.om,
				value: e
			}));
			W(this.bd) && (c = c[Xc](a, this.bd), d[v]({
				title: this.pm,
				value: c
			}));
			return {
				title: b,
				d: d
			}
		};
		V.Tv = function(a, b, c) {
			var a = a.Aa(c.x),
				b = b.Aa(c.y),
				d;
			d = this.zd == gl ? this.sm.lt(c[tb]) : this.zd == pn ? this.af[c[tb]][tb] : this.Dr;
			d = new wt({
				fill: d,
				rb: this.Er,
				stroke: this.Fr
			});
			c = this.tm.mt(c[hc]);
			return {
				x: a,
				y: b,
				b: d,
				Xb: c,
				Zh: c
			}
		};

		function Bw(a, b, c, d, e, f, g, i) {
			this.qo = a;
			this.Ud = b;
			this.Wu = c;
			this.Ro = d;
			this.Gi = e;
			this.nt = f;
			this.Xu = g;
			this.ro = i
		}

		function Cw(a, b, c, d) {
			switch(d) {
				case Hg:
					return a;
				case Gg:
					return(b - 1 - a) % c
			}
		}
		V = Bw[K];
		V.yt = function(a) {
			return 1 >= this.Ud[I] ? this.qo : s.abs(this.Ud[1].u - this.Ud[0].u) * a - this.Xu
		};
		V.Ii = function(a, b, c) {
			a = s[db]((this.Ud[I] - a) / (b * c));
			return 2 > this.Ud[I] || 2 > a
		};
		V.Vv = function(a, b, c, d) {
			for(var a = Cw(a, this.Ud[I], c, this.nt), e = this.yt(c), f = []; a < this.Ud[I]; a += c) {
				var g = this.Ud[a],
					i = g.B ? s.min(e, 2 * g.u, 2 * (this.qo - g.u)) : e,
					j = this.ro(g[x], i, d),
					m = j.aa;
				if(i < e) m = this.ro(g[x], e, d).aa;
				f[v]({
					fa: g.fa,
					B: g.B,
					u: g.u,
					zm: b,
					text: g[x],
					width: j.Yb,
					Ed: j,
					aa: m
				})
			}
			return f
		};
		V.Ao = function(a, b, c) {
			for(var d = a * b, c = 1 < a ? 1 : c, e = [], f = 0; f < a; f++) {
				var g = this.Vv(this.Wu + f * b, f * c, d, c);
				Zp(e, g)
			}
			bq(e, function(a, b) {
				return a.u - b.u
			});
			return e
		};
		V.Cl = function(a, b) {
			var c = this.Ao(a, b, p);
			return Pp(c, function(a, b) {
				return {
					pf: s.max(a.pf, b.Ed.d[I]),
					aa: a.aa || b.aa
				}
			}, {
				pf: 0,
				aa: n
			})
		};
		V.Tj = function() {
			for(var a = 1, b = this.Gi || 1, c = this.Cl(a, b), d = a; c.aa && a < this.Ro;) {
				a++;
				if(this.Ii(0, a, b)) break;
				d = a;
				c = this.Cl(d, b)
			}
			a = b;
			if(!this.Gi)
				for(; c.aa;) {
					b++;
					if(this.Ii(0, d, b)) break;
					a = b;
					c = this.Cl(d, a)
				}
			return {
				Lj: d,
				je: a,
				pf: c.pf * d
			}
		};
		V.Ol = function(a, b, c, d) {
			a = this.Ao(a, b, c);
			d = Pp(a, function(a, b) {
				var c = b.aa ? 1 : 0;
				delete b.aa;
				return a + c
			}, 0) <= a[I] * d;
			return {
				Nh: a,
				qp: d
			}
		};
		V.Gm = function(a, b, c, d) {
			for(var e = s.min(this.Ro, c), a = s.min(a, e), b = this.Gi || b, f = this.Ol(a, b, c, d), g = a; !f.qp && a < e;) {
				a++;
				if(this.Ii(0, a, b)) break;
				g = a;
				f = this.Ol(g, b, c, d)
			}
			e = b;
			if(!this.Gi)
				for(; !f.qp;) {
					b++;
					if(this.Ii(0, g, b)) break;
					e = b;
					f = this.Ol(g, e, c, d)
				}
			return {
				Lj: g,
				je: e,
				Nh: f.Nh
			}
		};

		function Dw(a, b, c, d, e, f) {
			xw[N](this, a, b, Xp([yj + d, zj], c), d, e, f);
			this.Jj = b.Go(this.A(Tm));
			a = b.da(this.A(Um), 30);
			if(1 > a || 90 < a) a = 30;
			this.Sr = a;
			this.bi = sr(a);
			this.nm = b.da(this.A(Ui));
			this.Cj = b.da(this.A(Lk), 2);
			this.Gh = b.da(this.A(Km), 0);
			this.Bj = b.ia(this.A(Lm), Eu, Hg)
		}
		xp(Dw, xw);
		V = Dw[K];
		V.kn = function() {
			return Aj + this[ic]
		};
		V.xf = function(a, b) {
			return Dw.Pb.xf[N](this, a, a.a[w], 1 == this[Wa] ? a.a[C] : a.a[R], b)
		};
		V.jn = function(a) {
			if(0 == this[ic]) {
				var b = a.tc,
					c = this.Ra[M],
					d = this[J].t[M],
					e = a.f.t[M],
					f = a.Vf == ol ? this[J][x] : S,
					g = this,
					i = new Bw(a[w], this.r, this.nm, this.Cj, this.Gh, this.Bj, c, function(a, c, d) {
						return Iu(b, a, g.Ra, c, d)
					}),
					j = this.Gh || 1,
					m, o;
				this.ic == ol && (W(this.Jj) ? this.Jj ? o = this.Ph(b) : m = i.Tj() : this.r[I] * c / (this.Cj * j) <= a[w] ? (m = i.Tj(), m.je > j && (o = this.Ph(b), m = l)) : o = this.Ph(b));
				var q = Iu(b, f, this[J].t, a.a[w], p),
					u = this.Jc,
					y = s.max(u, s[z](c / 1.618)),
					D = s.max(u, s[z](c / 3.236)),
					Y = function() {
						return {
							key: Ln,
							min: o.minHeight +
								u,
							max: o.maxHeight + u,
							T: [y - u]
						}
					},
					L = [];
				L[v]({
					key: kh,
					min: u,
					T: [p]
				});
				0 < q.d[I] && L[v]({
					key: Nn,
					min: d + u,
					T: [p]
				});
				a.f[fc] == jh && L[v]({
					key: ik,
					min: e + u,
					T: [p]
				});
				var X = L[I];
				m ? L[v]({
					key: Ln,
					min: c + u,
					T: [y - u]
				}) : o && L[v](Y());
				var G = L[I];
				if(m)
					for(var aa = 1; aa < m.pf; aa++) L[v]({
						key: Ln,
						min: c + u,
						T: [D - u]
					});
				c = L[I];
				for(aa = 1; aa < q.d[I]; aa++) L[v]({
					key: Nn,
					min: d + u,
					T: [this.em - u]
				});
				var d = Zu(L, a[Q] - a.a[P]),
					na = d.ticks || [],
					jb;
				m && (jb = i.Gm(m.Lj, m.je, na[I], 0), !W(this.Jj) && jb.je > j && (jb = m = l, o = this.Ph(b), L[X] = Y(), L = $u(L, 0, G, c, ba), d = Zu(L, a[Q] - a.a[P])));
				var Da = a.a[P],
					na = d.ticks || [];
				if(0 < na[I]) {
					for(aa = 1; aa < na[I]; aa++) na[aa] += na[aa - 1];
					if(m) this.Re = Op(jb.Nh, function(a) {
						var b = Op(a.Ed.d, function(b, c) {
							return {
								x: 0,
								y: na[a.zm + c],
								length: a[w],
								text: b
							}
						}, this);
						return {
							fa: a.fa,
							B: a.B,
							o: {
								text: a[x],
								t: this.Ra,
								d: b,
								Za: Eh,
								Pa: Ni,
								K: a.Ed.aa ? a[x] : S,
								anchor: {
									x: a.u,
									y: Da
								}
							}
						}
					}, this);
					else if(o) aa = na[0], i = s.min(aa - u, o.maxHeight), this.Re = this.Rq(b, Da + aa - i, i, o.je);
					Da += Jp(na)
				}
				i = d[J] || [];
				if(0 < i[I]) {
					j = Iu(b, f, this[J].t, a.a[w], i[I]);
					this[J].K = j.aa ? f : S;
					for(aa = 0; aa < i[I]; aa++) Da += i[aa], this[J].Pa =
						Ni, this[J].d[v]({
							x: a.a[C] + a.a[w] / 2,
							y: Da,
							length: a.a[w],
							text: j.d[aa]
						})
				}
				f = d.legend || [];
				if(0 < f[I]) Da += f[0], a.f.pb = new hs(Da - e, a.a[R], Da, a.a[C])
			}
		};
		V.Ph = function(a) {
			function b(b) {
				b = a(b[x], c)[w] * e + d * f;
				return s[db](b)
			}
			var c = this.Ra,
				d = c[M],
				e = s.sin(this.bi),
				f = s.cos(this.bi),
				g = this.Gh;
			g || (g = 2 > this.r[I] ? 1 : s[db]((d + this.Jc) / e / s.abs(this.r[1].u - this.r[0].u)));
			for(var i = 0, j = 0; j < this.r[I]; j += g) i = s.max(b(this.r[j]), i);
			j = b({
				text: ne
			});
			return {
				minHeight: s.min(i, j),
				maxHeight: i,
				je: g
			}
		};
		V.Rq = function(a, b, c, d) {
			for(var e = Cw(0, this.r[I], d, this.Bj), c = (c - this.Ra[M] * s.cos(this.bi)) / s.sin(this.bi), c = s[B](c), f = []; e < this.r[I]; e += d) {
				var g = this.r[e],
					i = Iu(a, g[x], this.Ra, c, 1),
					j = {
						text: g[x],
						t: this.Ra,
						d: [],
						kf: -this.Sr,
						Za: Ni,
						Pa: fn,
						K: i.aa ? g[x] : S,
						anchor: {
							x: g.u,
							y: b
						}
					};
				0 < i.d[I] && j.d[v]({
					x: 0,
					y: 0,
					length: c,
					text: i.d[0]
				});
				f[v]({
					fa: g.fa,
					B: g.B,
					o: j
				})
			}
			return f
		};
		V.hn = function(a) {
			if(0 == this[ic]) {
				var b = a.tc,
					c = this.Ra[M],
					d = new Bw(a[w], this.r, this.nm, this.Cj, this.Gh, this.Bj, c, Z(function(a, c, d) {
						return Iu(b, a, this.Ra, c, d)
					}, this)),
					e;
				this.ic == Pj && (e = d.Tj());
				var f = this.Jc,
					g = s.max(this.Jc, s[z](c / 3.236)),
					i = s.max(this.Jc, s[z](c / 1.618)),
					i = this[F] == Ho ? g : i,
					j = s.max(f, s[z](c / 3.236)),
					m, o;
				this[F] == Ho ? this.gm == Fj ? (m = fn, o = g) : (m = Ni, o = -g) : (m = Eh, o = 0);
				g = [];
				g[v]({
					key: jo,
					min: f,
					T: [p]
				});
				if(e)
					for(var q = 0; q < e.pf; q++) g[v]({
						key: Ln,
						min: c + f,
						T: [(0 == q ? i : j) - f]
					});
				var u = Zu(g, s[B](a.a[Q] / 2)).ticks || [];
				if(0 < u[I]) {
					for(q = 1; q < u[I]; q++) u[q] += u[q - 1];
					c = d.Gm(e.Lj, e.je, u[I], 0.5);
					this.Re = Op(c.Nh, function(b) {
						var c = b.Ed.d;
						c.reverse();
						c = Op(c, function(a, c) {
							return {
								x: 0,
								y: -u[b.zm + c],
								length: b[w],
								text: a
							}
						}, this);
						return {
							fa: b.fa,
							B: b.B,
							o: {
								text: b[x],
								t: this.Ra,
								d: c,
								Za: m,
								Pa: fn,
								K: b.Ed.aa ? b[x] : S,
								anchor: {
									x: o + b.u,
									y: a.a[P]
								}
							}
						}
					}, this)
				}
			}
		};
		V.jk = function(a) {
			var b = {};
			b.vg = -1 == this[Wa];
			b.tf = a.a[C];
			b.sf = a.a[R];
			Ca(b, Gj);
			return b
		};

		function Ew(a, b, c) {
			for(var d = new Date(a), e = n, f = b[I], g = [s[B], s[db]][c], i = 0; i < f; ++i) {
				var j = a[Em + Fw[i]],
					m = a[oj + Fw[i]][Uc](a),
					o = b[i],
					q = Gw[i];
				if(0 == o) e = e || 0 != m && 0 != c, j[Uc](d, [q]);
				else return e ? j[Uc](d, [q + o * (1 + s[B]((m - q) / o))]) : j[Uc](d, [q + o * g((m - q) / o)]), d
			}
		}

		function Hw(a, b, c) {
			var d = Yp(a),
				e;
			for(e = 0; e < d[I] && 0 == b[e]; ++e) d[e] = 0;
			if(e == d[I]) return l;
			if(0 == e) return d[0] = c(a[0] / b[0]) * b[0], d;
			var f = 0;
			a[e - 1] >= Iw[e - 1] ? f = 0.7 : 0 < a[e - 1] && (f = 0.1);
			d[e] = c((a[e] + f) / b[e]) * b[e];
			return d
		}

		function Jw(a, b, c) {
			var d = Op(b, function(a) {
				return [s.log(Kw(a))]
			});
			if(!c) return a = Su(s.log(a), d), b[a];
			c = Tu(s.log(a), d, c);
			a = c[0];
			return a <= d[I] - 1 ? b[a] : Hw(Lw(s.exp(c[1])), Jp(b), s[z])
		}

		function Mw(a) {
			a = Tp(a, function(a) {
				return 0 != a
			});
			return s.max(0, a)
		}

		function Kw(a) {
			if(a == l) return -1;
			for(var b = 0, c = a[I], d = 0; d < c; ++d) b += a[d] * Nw[d];
			return b
		}

		function Lw(a) {
			for(var b = [], c = Nw[I] - 1; 0 <= c; c--) b[c] = s[B](a / Nw[c]), a -= b[c] * Nw[c];
			return b
		}

		function Ow(a) {
			var b = [],
				a = s[B](a / 1E3);
			b[v](s[B](a / 3600));
			b[v](s[B](a / 60) - 60 * b[0]);
			b[v](a - 3600 * b[0] - 60 * b[1]);
			return b
		}
		var Fw = "Milliseconds,Seconds,Minutes,Hours,Date,Month,FullYear".split(","),
			Gw = [0, 0, 0, 0, 1, 0, 0],
			Iw = [500, 30, 30, 12, 15, 6, 0],
			Nw = [1, 1E3, 6E4, 36E5, 864E5, 2629743830, 31556926E3];

		function yw(a, b, c) {
			this.el = a;
			this.hu = b;
			this.zl = c
		}
		xp(yw, ww);
		V = yw[K];
		V.oc = function(a, b) {
			yw.Pb.oc[N](this, a, b);
			var c = a.fi(this.A(gj)),
				d = [];
			d[v](c.millisecond);
			d[v](c.second);
			d[v](c.minute);
			d[v](c.hour);
			d[v](c.day);
			d[v](c.month);
			d[v](c.year);
			this.zl = Pw([d, gq(this[zb], d[I]), this.zl])
		};

		function Pw(a) {
			a = hq[Uc](l, a);
			return Op(a, function(a) {
				return Rp(a, function(a) {
					return a
				})
			})
		}
		V.R = function(a, b) {
			return a.R(b)
		};
		V.od = function(a) {
			return lp(a) ? a[Vb]() : NaN
		};
		V.am = function(a) {
			return new Date(a)
		};
		V.Jk = function() {
			var a = new Date(0);
			a.setFullYear(0);
			return a
		};
		V.kl = function(a, b, c) {
			var d = (b - a) / 6,
				e = Jw(d, this.el, this.hu);
			c ? (a = Ew(new Date(a), e, 0), b = Ew(new Date(b), e, 1)) : (a = Ew(new Date(a), e, 1), b = Ew(new Date(b), e, 0));
			d = Lw(d);
			d = Hw(d, e, s[z]);
			d = 0 < Kw(d) ? d : e;
			this.r = [];
			for(e = a; e < b;) {
				this.r[v](e[Vb]());
				var f = d,
					g = new Date(e),
					i;
				b: {
					for(i = 0; i < f[I]; ++i)
						if(0 != f[i]) {
							i = n;
							break b
						}
					i = k
				}
				if(!i) {
					for(i = 0; i < f[I]; ++i) {
						var j = Fw[i],
							m = g[Em + j],
							j = g[oj + j][Uc](g, []);
						m[Uc](g, [j + f[i]])
					}
					g <= e && h("Error adding duration to date")
				}
				e = g
			}(c || e <= b) && this.r[v](e[Vb]());
			if(c) this.M = a[Vb](), this.Q = e[Vb]();
			this.ou = this.pu(d)
		};
		V.$i = function(a) {
			return this.ou[rc](a)
		};
		V.pu = function(a) {
			a = this.zl[Mw(a)];
			return new google[wc].DateFormat({
				pattern: a
			})
		};
		var Qw = [
				[0, 0, 0, 0, 1],
				[0, 0, 0, 0, 2],
				[0, 0, 0, 0, 7],
				[0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 3],
				[0, 0, 0, 0, 0, 6],
				[0, 0, 0, 0, 0, 12],
				[0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 5],
				[0, 0, 0, 0, 0, 0, 10],
				[0, 0, 0, 0, 0, 0, 25],
				[0, 0, 0, 0, 0, 0, 50],
				[0, 0, 0, 0, 0, 0, 100]
			],
			Rw = [vi, vi, vi, vi, vi, "MM y", Yo],
			Sw = [
				[1],
				[2],
				[5],
				[10],
				[20],
				[50],
				[100],
				[200],
				[500],
				[0, 1],
				[0, 2],
				[0, 5],
				[0, 10],
				[0, 15],
				[0, 30],
				[0, 0, 1],
				[0, 0, 2],
				[0, 0, 5],
				[0, 0, 10],
				[0, 0, 15],
				[0, 0, 30],
				[0, 0, 0, 1],
				[0, 0, 0, 2],
				[0, 0, 0, 3],
				[0, 0, 0, 4],
				[0, 0, 0, 6],
				[0, 0, 0, 12],
				[0, 0, 0, 0, 1],
				[0, 0, 0, 0, 2],
				[0, 0, 0, 0, 7],
				[0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 3],
				[0, 0,
					0, 0, 0, 6
				],
				[0, 0, 0, 0, 0, 12],
				[0, 0, 0, 0, 0, 0, 1],
				[0, 0, 0, 0, 0, 0, 5],
				[0, 0, 0, 0, 0, 0, 10],
				[0, 0, 0, 0, 0, 0, 25],
				[0, 0, 0, 0, 0, 0, 50],
				[0, 0, 0, 0, 0, 0, 100]
			],
			Tw = [wi, wi, "dd MMM y HH:mm", "dd MMM y HH:00", "dd MMM y", "MMM y", Yo];

		function Uw(a, b, c, d, e, f, g, i) {
			if(!(c = Vw(a, b, c, d, e, f, g, i))) 0 <= a || 0 >= b || 1 == g ? c = {
				Kb: a,
				Lc: b
			} : (c = s.max(1, s.min(g - 1, s[z](g * (b / (b - a))))), g -= c, a = s.max(b / c, -a / g), c = {
				Kb: -g * a,
				Lc: c * a
			});
			return c
		}

		function Vw(a, b, c, d, e, f, g, i) {
			var j = b - a;
			if(0 >= j) return l;
			for(var m = s[B](s.log(j) / s.log(10)), j = Uu(5, function(a) {
					return {
						kh: s.pow(10, m - a),
						Ki: 5
					}
				}), o = [], q = n, u = 0; u < j[I]; ++u) {
				var y = j[u],
					D = Ww(a / (y.kh * y.Ki), b / (y.kh * y.Ki), c, d, e, f, g),
					o = o[hb](Op(D, function(a) {
						return [y, a]
					}));
				if(q) break;
				q = 0 != D[I]
			}
			return Pp(o, function(a, b) {
				for(var c = b[0], d = b[1], e = d.Bv; e <= d.Av; e += d.Cv) {
					var f = s[z](c.Ki * e),
						j = s[z](c.Ki * (e + g * d.Dv)),
						m = i(f, j, c.kh);
					m > a.ec && (a = {
						ec: m,
						xp: {
							Kb: s[z](f) * c.kh,
							Lc: s[z](j) * c.kh
						}
					})
				}
				return a
			}, {
				ec: -p,
				xp: l
			}).xp
		}

		function Ww(a, b, c, d, e, f, g) {
			for(var i = [], j = b - a, m = d + f, o = s[db](j / (1 - (c + e)) / g), j = s[B](j / (1 - m) / g); o <= j; ++o) {
				var m = o * g,
					q = s[db](s.max(a - d * m, b - (1 - e) * m)),
					u = s[B](s.min(a - c * m, b - (1 - f) * m)),
					y = 1;
				0 < b && 0 > a ? 1 < g && (q = s[db](q / o) * o, u = s[B](u / o) * o, y = o) : 0 <= a ? q = s.max(0, q) : u = s.min(-m, u);
				0 <= u - q && i[v]({
					Dv: o,
					Cv: y,
					Bv: q,
					Av: u
				})
			}
			return i
		}

		function Xw(a) {
			if(0 == a) return 0;
			for(0 > a && (a = -a); 0 == s[z](a % 10);) a = s[z](a / 10);
			return 1 == a || 5 == a ? 0.5 : s[B](s.log(a) / s.log(10)) + 1
		};

		function Yw() {}
		xp(Yw, ww);
		V = Yw[K];
		V.Ak = function() {
			return 4
		};
		V.oc = function(a, b) {
			Yw.Pb.oc[N](this, a, b);
			this.Qd = l;
			this.Pk = a.Mc(this.A(hj));
			this.rd = a.R(this.A(Kn), [10, 2, 5, 1])
		};
		V.kl = function(a, b, c) {
			var d, e, f, g;
			c ? (c = Z(Zw, l, this.rd, this.cb, a, b), d = -1.0E-4, e = 1 / s.max(this.cb, 3), f = d, g = e) : (d = -1 / s.max(this.cb, 3), e = 0, f = d, g = e, this.rd[0] *= -1, c = Z(Zw, l, this.rd, this.cb, this.M, this.Q));
			c = Uw(a, b, d, e, f, g, this.cb, c);
			d = (c.Lc - c.Kb) / this.cb;
			this.r = [];
			for(e = 0; e <= this.cb; ++e) this.r[v](c.Kb + d * e);
			this.M = s.min(c.Kb, a);
			this.Q = s.max(c.Lc, b);
			a: if(a = this.Pk ? d / this.Pk : d, 0 == a) a = 0;
				else {
					a = s.abs(a);
					for(b = 0; 16 > b; ++b) {
						if(s.abs(a - s[z](a)) < 1.0E-7 * a) {
							a = b;
							break a
						}
						a *= 10
					}
					a = 16
				}
			this.zt = a;
			this.Qd = new google[wc][Tb]({
				pattern: this[zb],
				fractionDigits: this[zb] ? l : this.zt,
				scaleFactor: this.Pk
			})
		};

		function Zw(a, b, c, d, e, f, g) {
			function i(a) {
				return s.pow(Xw(a), 1.2)
			}
			c = a[0] * (d - c) / (g * (f - e));
			d = (f - e) / b;
			for(g = 1; g < b; ++g) c -= a[1] * i(e + g * d);
			c -= a[2] * i(e);
			c -= a[2] * i(f);
			return c -= a[3] * i(d)
		}
		V.R = function(a, b) {
			return a.Mc(b)
		};
		V.$i = function(a) {
			return this.Qd[rc](a)
		};
		V.od = function(a) {
			return a
		};
		V.am = function(a) {
			return a
		};
		V.Jk = function() {
			return 0
		};

		function $w(a) {
			this.el = a
		}
		xp($w, ww);
		V = $w[K];
		V.oc = function(a, b) {
			$w.Pb.oc[N](this, a, b);
			this.rd = a.R(this.A(Kn), [10, 2, 1])
		};
		V.R = function(a, b) {
			return a.rx(b)
		};
		V.od = function(a) {
			return W(a) ? 1E3 * (60 * (60 * a[0] + a[1]) + a[2]) : NaN
		};
		V.am = function(a) {
			return Ow(a)
		};
		V.Jk = function() {
			return Ow(0)
		};
		V.kl = function(a, b, c) {
			if(-1 == this.cb) {
				var d = (b - a) / 6,
					e = Jw(d, this.el, 0),
					f = Kw(e),
					d = s.max(1, s[z](d / f)) * f;
				c ? (a = s[B](a / d) * d, b = s[db](b / d) * d) : (a = s[db](a / d) * d, b = s[B](b / d) * d);
				this.r = [];
				for(f = a; f < b;) this.r[v](f), f += d;
				this.r[v](f);
				if(c) this.M = a, this.Q = b;
				this.vo = Mw(e)
			} else this.$t(a, b, c)
		};
		V.$t = function(a, b, c) {
			var d, e, f, g;
			c ? (c = Z(ax, l, this.rd, this.cb, a, b), d = -1.0E-4, e = 1 / s.max(this.cb, 3), f = d, g = e) : (d = -1 / s.max(this.cb, 3), e = 0, f = d, g = e, this.rd[0] *= -1, c = Z(ax, l, this.rd, this.cb, this.M, this.Q));
			c = Uw(a, b, d, e, f, g, this.cb, c);
			d = (c.Lc - c.Kb) / this.cb;
			this.r = [];
			for(e = 0; e <= this.cb; ++e) this.r[v](c.Kb + d * e);
			this.M = s.min(c.Kb, a);
			this.Q = s.max(c.Lc, b);
			this.vo = 0 == d - s[B](d) ? 1 : 0
		};

		function ax(a, b, c, d, e, f) {
			c = a[0] * (d - c) / (f - e);
			f = (f - e) / b;
			for(d = 0; d <= b; ++d) c -= a[1] * Xw(e + d * f);
			return c -= a[2] * Xw(f)
		}
		V.$i = function(a) {
			return(new google[wc].DateFormat({
				pattern: this[zb] ? this[zb] : 1 >= this.vo ? Bf : Af
			}))[rc](new Date(1970, 0, 1, a[0], a[1], a[2], 0))
		};
		var bx = [
			[0, 1, 0, 0],
			[0, 2, 0, 0],
			[0, 5, 0, 0],
			[0, 10, 0, 0],
			[0, 20, 0, 0],
			[0, 30, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 5, 0],
			[0, 0, 10, 0],
			[0, 0, 15, 0],
			[0, 0, 30, 0],
			[0, 0, 0, 1],
			[0, 0, 0, 2],
			[0, 0, 0, 3],
			[0, 0, 0, 4],
			[0, 0, 0, 6],
			[0, 0, 0, 12]
		];
		vw().aj("timeofday", function() {
			return new $w(bx)
		});
		vw().aj("date", function() {
			return new yw(Qw, 3, Rw)
		});
		vw().aj("datetime", function() {
			return new yw(Sw, 3, Tw)
		});
		vw().aj(gl, function() {
			return new Yw
		});
		var cx = {},
			dx = n;

		function Aw(a) {
			var b = {};
			va(b, a[tb] || a);
			var c = mt(b[tb]);
			c == U ? (b.wf = a.darker || c, b.si = a.lighter || c) : (c = it(c), b.wf = a.darker || gt(lt([0, 0, 0], c, 0.25)), b.si = a.lighter || gt(lt([255, 255, 255], c, 0.25)));
			return b
		};

		function ex(a, b, c, d, e, f) {
			xw[N](this, a, b, Xp([Eo + d, Fo], c), d, e, f);
			if(this[F] == Ho) this.direction = -this[Wa]
		}
		xp(ex, xw);
		V = ex[K];
		V.kn = function() {
			return Go + this[ic]
		};
		V.xf = function(a, b) {
			return ex.Pb.xf[N](this, a, a.a[Q], 1 == this[Wa] ? a.a.top : a.a[P], b)
		};
		V.jn = function(a) {
			var b = a.tc,
				c = this.Ra[M],
				d = this[J].t[M],
				e = a.Vf == ol ? this[J][x] : S,
				f = this.Jc,
				g = Pp(this.r, function(a, c) {
					return s.max(a, b(c[x], this.Ra)[w])
				}, 0, this),
				i = b(ne, this.Ra)[w],
				i = s.min(i, g),
				j = Iu(b, e, this[J].t, a.a[Q], p),
				m = [];
			this.ic == ol ? m[v]({
				key: im,
				min: f,
				T: [c - f]
			}) : m[v]({
				key: im,
				min: 0,
				T: [p]
			});
			0 < j.d[I] && m[v]({
				key: Nn,
				min: d + f,
				T: [p]
			});
			this.ic == ol && m[v]({
				key: Ln,
				min: i + f,
				max: g + f,
				T: [p]
			});
			for(c = 1; c < j.d[I]; c++) m[v]({
				key: Nn,
				min: d + f,
				T: [this.em - f]
			});
			var d = Zu(m, 0 == this[ic] ? a.a[C] : a[w] - a.a[R]),
				o = 0 == this[ic] ? 0 : a[w],
				j = d[J] || [];
			if(0 < j[I]) {
				m = Iu(b, e, this[J].t, a.a[Q], j[I]);
				this[J].K = m.aa ? e : S;
				for(c = 0; c < j[I]; c++) o += j[c] * (0 == this[ic] ? 1 : -1), this[J].kf = -90, this[J].Pa = 0 == this[ic] ? Ni : fn, this[J].d[v]({
					x: o,
					y: a.a.top + a.a[Q] / 2,
					length: a.a[Q],
					text: m.d[c]
				})
			}
			if(this.ic == ol) {
				var e = d.ticks[0] || 0,
					o = o + e * (0 == this[ic] ? 1 : -1),
					q = s.min(g, e - f);
				this.Re = q < i ? [] : Op(this.r, function(b, c) {
					var d = 0 == this[ic] ? Ni : fn,
						e = Eh;
					this.Kq == lh && (0 == c && (e = 1 == this[Wa] ? fn : Ni), c == this.r[I] - 1 && (e = 1 == this[Wa] ? Ni : fn));
					return this.Fn(a, b, o, q, d, e, 0)
				}, this)
			}
		};
		V.hn = function(a) {
			var b = a.tc,
				c = this.Ra[M],
				d = this.Jc,
				e = s.max(this.Jc, s[z](c / 3.236)),
				c = s.max(this.Jc, s[z](c / 1.618)),
				c = this[F] == Ho ? e : c,
				f, g;
			this[F] == Ho ? this.gm == Fj ? (f = Ni, g = e) : (f = fn, g = -e) : (f = Eh, g = 0);
			var e = Pp(this.r, function(a, c) {
					return s.max(a, b(c[x], this.Ra)[w])
				}, 0, this),
				i = b(ne, this.Ra)[w],
				i = s.min(i, e),
				j = [];
			j[v]({
				key: im,
				min: d,
				T: [p]
			});
			this.ic == Pj && j[v]({
				key: Ln,
				min: i + d,
				max: e + c,
				T: []
			});
			var c = Zu(j, a.a[w] / 2),
				m = 0 == this[ic] ? a.a[C] : a.a[R];
			if(this.ic == Pj) {
				var c = c.ticks[0] || 0,
					o = s.min(e, c - d),
					m = m + (c - o) * (0 == this[ic] ?
						1 : -1);
				this.Re = Op(this.r, function(b) {
					return this.Fn(a, b, m, o, 0 == this[ic] ? fn : Ni, f, g)
				}, this)
			}
		};
		V.Fn = function(a, b, c, d, e, f, g) {
			var a = Iu(a.tc, b[x], this.Ra, d, 1),
				i = Op(a.d, function(a) {
					return {
						x: 0,
						y: 0,
						length: d,
						text: a
					}
				}, this);
			return {
				fa: b.fa,
				B: b.B,
				o: {
					text: b[x],
					t: this.Ra,
					d: i,
					Za: e,
					Pa: f,
					K: a.aa ? b[x] : S,
					anchor: {
						x: c,
						y: b.u - g
					}
				}
			}
		};
		V.jk = function(a) {
			var b = {};
			b.vg = -1 == this[Wa];
			b.tf = a.a.top;
			b.sf = a.a[P];
			Ca(b, Ko);
			return b
		};

		function fx(a, b, c, d) {
			this.D = a;
			this.k = b;
			this.ra = c;
			this.bf = l;
			this.h = d;
			this.Oh = this.Z = this.sa = this.La = this.Ma = l;
			this.h.jc = b.ia(Yi, Bu, ri);
			d.jc == xh && d.N != T && h(r("Focus target " + d.jc + " is not supported for the chosen chart type."));
			d.N == oh ? this.Oh = new zw(this.D, this.k, this.ra, d) : (this.bf = b.R(ei, Fu), this.ps());
			a = 0 < d.gb.bars || 0 < d.gb.area || 0 < d.gb.steppedArea;
			this.h.Vc = this.k.za(ak) && a;
			this.h.dn = this.k.za(Wn, this.h.jc == xh);
			this.h.im = this.k.za(Jm, n);
			this.os()
		}
		V = fx[K];
		V.ps = function() {
			var a = this.h,
				b = this.D,
				c = a.N == rm ? function() {
					return rm
				} : Z(function(b) {
					return this.k.ia(Cm + b + ve, pu, a.fm)
				}, this),
				c = gx(b, c);
			a.v = [];
			a.df = {};
			for(var d = 0; d < b[dc](); d++) {
				var e = b[Jb](d),
					f = b[H](d, 0),
					g = Op(c.Zc, function(a) {
						return b[Xc](d, a.w[wb][0]) || S
					});
				a.v[v]({
					data: f,
					dj: g,
					wc: e
				});
				a.df[e] = d
			}
			a.e = [];
			a.yj = {};
			for(d = 0; d < c.Xm[I]; d++) e = this.cr(d, c.Xm[d]), a.e[v](e), a.yj[e.wc] = d;
			a.Zc = c.Zc;
			a.fe = c.fe;
			a.gb = {};
			a.Th = [];
			a.mf = {};
			for(d = 0; d < a.e[I]; ++d) c = a.e[d], a.Th[v](c.Ja), e = a.mf[c.Ja], W(e) ? e != c[Fc] && h("All series on a given axis must be of the same data type") :
				a.mf[c.Ja] = c[Fc], a.gb[c[F]] = (a.gb[c[F]] || 0) + 1;
			aq(a.Th);
			a.$c = [];
			for(c = 0; c < a.e[I]; c++)
				if(e = a.e[c], e.qh && a.$c[v]({
						id: e.id,
						text: e.fj,
						b: new wt({
							fill: e[tb][tb]
						}),
						index: c,
						z: e.z
					}), a.jc == xh) e.z = n
		};

		function gx(a, b) {
			for(var c = [], d = [], e = l, f = 0, g = 0; g < a[mb](); ++g) {
				var i = a[Fb](g),
					j = a.getColumnProperty(g, jm) || (0 == g ? Fi : pi);
				j == Fi && (0 < f && h("Unexpected domain column (column #" + g + fe), e = {
					w: {},
					dataType: i
				}, d[v](e));
				j == pi && 0 == f && (f = b(c[I]), e = {
					type: f,
					dataType: i,
					w: {}
				}, c[v](e), f = f == wh ? 4 : 1);
				j == pi && (f--, i != e[Fc] && h("All data columns of the same series must be of the same data type"));
				e.w[j] = e.w[j] || [];
				e.w[j][v](g)
			}
			0 < f && h("Last serie does not have enough data columns (missing " + f + fe);
			e = 0;
			i = d[0][Fc];
			for(g = 0; g < c[I]; ++g) {
				d[I] <=
					e && h("Serie #" + g + " does not have a domain column.");
				if((j = d[e + 1]) && j.w[wb][0] <= c[g].w[A][0]) ++e, i != d[e][Fc] && h("All domains must be of the same data type");
				c[g].Ad = e
			}
			return {
				Xm: c,
				Zc: d,
				fe: i
			}
		}
		V.cr = function(a, b) {
			var c = b[F],
				d = b.w,
				e = b.Ad,
				f = this.k,
				g = Cm + a + me,
				i = d[A],
				j = this.D.getTableColumnIndex(i[0]),
				m = this.D[Cb](i[0]) || S,
				o = c == rm ? 0 : 2,
				q = f.da([g + Ml, Ml], c == rm ? 7 : 0),
				u = c == Ak || c == Cg || c == rm ? 0 < q : k;
			0 == q && (q = c == rm ? 7 : 6);
			q /= 2;
			0 < q && (q += 1);
			var y = f.R(g + Yh, this.bf[a % this.bf[I]]),
				y = Aw(y),
				D = l;
			if(c == Cg || c == hn) D = f.da([g + Dg, Dg]), D = yt(y[tb], D);
			var o = f.da([g + Ck, Ck], o),
				Y = zt(y[tb], o),
				L = c == hn ? D : yt(y[tb]),
				X = this.Ur(d, f, g, y);
			return {
				id: this.D.getColumnId(i[0]),
				title: m,
				dataType: b[Fc],
				B: k,
				wc: j,
				w: d,
				Ad: e,
				hc: X,
				color: y,
				Hm: L,
				Ha: Y,
				Jq: D,
				type: c,
				Ah: f.be(g + ap, 0),
				lineWidth: o,
				yr: q,
				Hq: 12,
				Ze: f.ia([g + ki, ki], Du, U),
				ij: f.da([g + Ym, Ym], 1),
				vm: u,
				c: [],
				mm: [],
				Ja: f.da(g + zn, 0),
				qh: f.za(g + Qo, k),
				fj: f.Hc(g + fk, m),
				z: f.za(g + Mi, k)
			}
		};
		V.Ur = function(a, b, c, d) {
			function e(a, b) {
				return [c + Yj + a + me + b, c + Zj + b, Yj + a + me + b, Zj + b]
			}
			var f = a.interval;
			if(!f) return l;
			for(var a = {
					Jd: [],
					qe: [],
					Xh: [],
					c: [],
					areas: [],
					d: [],
					jg: {}
				}, g = {}, i = 0; i < f[I]; i++) {
				var j = f[i],
					m = this.D.getColumnId(j) || this.D[Cb](j) || yi,
					o = b.Wh(e(m, vn), qu);
				switch(o) {
					case Pg:
						a.Jd[v](j);
						break;
					case kn:
						a.qe[v](j);
						break;
					case nh:
						a.Xh[v](j);
						break;
					case Nl:
						a.c[v](j);
						break;
					case Cg:
						a[$c][v](j);
						break;
					case Ak:
						a.d[v](j);
						break;
					case U:
						break;
					default:
						h(r("Invalid interval style: " + o))
				}
				m in g ? g[m][v](j) : g[m] = [j]
			}
			if(1 <
				a.Jd[I] && 0 == a.qe[I]) a.qe = [a.Jd[0], a.Jd[a.Jd[I] - 1]];
			0 != a.qe[I] % 2 && h(r("Stick-intervals must be defined by an even number of columns"));
			0 != a[$c][I] % 2 && h(r("Area-intervals must be defined by an even number of columns"));
			for(m in g)
				for(var o = b.da(e(m, Ck)), i = b.da(e(m, Ti)), j = b.Hc(e(m, Yh)), j = hx(j, d), i = new wt({
						stroke: j,
						fill: j,
						rb: i,
						Qa: o
					}), j = b.da(e(m, Og)), f = b.da(e(m, Gm)), q = b.da(e(m, mh)), u = b.da(e(m, Ml)), o = b.Wh(e(m, vn), qu), y = b.za(e(m, Wj)[hb]([c + Wj, Wj])), D = b.ia(e(m, ki)[hb]([c + ki, ki]), Du, U), Y = b.da(e(m, Ym)[hb]([c +
						Ym, Ym
					]), 1), o = {
						style: o,
						b: i,
						Zq: j,
						ar: f,
						$q: q,
						Qq: u,
						Qe: y,
						Ze: D,
						ij: Y
					}, f = g[m], i = 0; i < f[I]; ++i) j = f[i], a.jg[j] = o;
			return a
		};
		V.os = function() {
			var a = this.h;
			switch(a.N) {
				case T:
					Ca(a, this.k.ia(nl, uu, S));
					a[Qb] || h(r("Unspecified orientation."));
					this.Z = [];
					this.Ma = [];
					this.La = [];
					var b, c, d, e;
					switch(a[Qb]) {
						case Gj:
							d = Dw;
							e = this.Ma;
							b = ex;
							c = this.La;
							break;
						case Ko:
							d = ex, e = this.La, b = Dw, c = this.Ma
					}
					for(var f = 0; f < a.Th[I]; ++f) {
						var g = a.Th[f],
							i = new b(a, this.k, [xn + g, yn], g, Ho, Sl);
						i[F] != Ho && h(r("Target-axis must be of type value"));
						this.Z[g] = i;
						c[g] = i
					}
					this.Z[0] || h(r("Axis #0 must have some data column associated with it."));
					this.sa = new d(a, this.k, [Gi],
						0, this.Ps(), Nk);
					e[v](this.sa);
					break;
				case rm:
				case oh:
					this.Ma = [new Dw(a, this.k, [], 0, Ho, Sl)], this.La = [new ex(a, this.k, [], 0, Ho, Sl)]
			}
			this.Qs()
		};
		V.Ps = function() {
			return this.D[Fb](0) == pn || !this.h.lj ? this.eu(this.du()) : Ho
		};
		V.du = function() {
			var a = [Ak, Cg, hn, Pg, wh],
				b = {};
			Mp(a, function(a, c) {
				b[a] = c
			});
			var c = Pp(this.h.e, function(a, c) {
				return s.max(a, b[c[F]])
			}, 0);
			return a[c]
		};
		V.eu = function(a) {
			switch(a) {
				case Cg:
					return 1 < this.h.v[I] ? Bh : xh;
				case Ak:
				case Pg:
				case hn:
				case wh:
					return xh
			}
			return l
		};
		V.Qs = function() {
			var a = this.h;
			switch(a.N) {
				case rm:
				case oh:
					a.fe == pn && h(r("X values column cannot be of type string"));
					var b = a.mf[0];
					b == pn && h(r("Data column(s) cannot be of type string"));
					var c = this.Ma[0],
						d = this.La[0];
					c[F] != Ho && h(r("The x-axis must be of type value"));
					c.oi(a.fe, this.k);
					d[F] != Ho && h(r("The y-axis must be of type value"));
					d.oi(b, this.k);
					break;
				case T:
					b = this.sa;
					b[F] == Ho && (a.fe == pn && h(r("Domain column cannot be of type string, it should be the X values on a continuous domain axis")), b.oi(a.fe,
						this.k));
					for(b = 0; b < this.Z[I]; ++b) a.mf[b] == pn && h(r("Data column(s) for axis #" + b + " cannot be of type string")), this.Z[b].oi(a.mf[b], this.k)
			}
			Mp(this.Ma, function(a) {
				a.ko()
			});
			Mp(this.La, function(a) {
				a.ko()
			})
		};
		V.xm = function() {
			return 1 < this.La[I]
		};
		V.pr = function() {
			for(var a = this.h, b = this.D, c = this.sa, d = 0; d < a.v[I]; d++) {
				for(var e = 0; e < a.e[I]; e++) {
					var f = a.e[e],
						g = this.Z[f.Ja],
						f = b[H](d, f.w[A][0]),
						f = g.j.od(f);
					W(f) && g.yf(f)
				}
				c[F] == Ho && (e = b[H](d, 0), e = c.j.od(e), c.yf(e))
			}
		};
		V.qr = function() {
			for(var a = this.h, b = this.D, c = this.Ma[0], d = this.La[0], e = 0; e < b[dc](); e++)
				for(var f = 0; f < a.e[I]; f++) {
					var g = a.e[f],
						i = g.w[A][0],
						g = b[H](e, a.Zc[g.Ad].w[wb][0]),
						i = b[H](e, i),
						g = c.j.od(g),
						i = d.j.od(i);
					W(g) && c.yf(g);
					W(i) && d.yf(i)
				}
		};
		V.tn = function() {
			var a = this.h;
			this.or();
			a.Vc && Mp(this.Z, function(a) {
				a.Y(0)
			});
			if(a.N == T) {
				this.pr();
				this.sa[F] == Ho && (this.sa.uf(), this.sa.Zf(this.k));
				for(var b = 0; b < this.Z[I]; b++) this.Z[b].uf(), this.Z[b].Zf(this.k)
			} else a.N == oh ? this.Oh.rr(this.Ma[0], this.La[0]) : a.N == rm && this.qr(), this.Ma[0].uf(), this.Ma[0].Zf(this.k), this.La[0].uf(), this.La[0].Zf(this.k);
			a.gb.bars && this.$m(Pg);
			a.gb.steppedArea && this.$m(hn);
			a.gb.candlesticks && this.kr();
			a.gb.line && (this.mr(), this.an());
			a.gb.area && this.ir();
			a.gb.scatter &&
				(this.nr(), this.an());
			a.gb.bubbles && this.Oh.jr(this.Ma[0], this.La[0]);
			a.ta = Op(this.Ma, function(b) {
				return b.xf(a, b)
			});
			a.Ka = Op(this.La, function(b) {
				return b.xf(a, b)
			});
			this.lr();
			this.tr();
			a.N == T && a[Qb] == Gj && this.sr();
			b = a.f[fc];
			if((b == hm || b == gk) && !this.xm())
				if(a.f.pb = new hs(a.a.top, a[w] - a.f.t[M], a.a[P], a.a[R] + a.f.t[M]), a.f.pb[R] < a.f.pb[C]) a.f.pb = l;
			this.ur()
		};
		V.or = function() {
			var a = this.h,
				b = this.ra,
				c = this.Ma[0][J].t,
				d = s.max(a[J].t[M], c[M]),
				e = a.f.t[M],
				f = a.f[fc],
				g = a.Pe == Pj ? a[J][x] : S,
				i = S,
				j = S;
			if(a.Vf == Pj) {
				var m = function(a) {
					a = Op(a, function(a) {
						return a[J][x]
					});
					return Np(a, function(a) {
						return a != S
					})[cd](ie)
				};
				switch(a.N) {
					case rm:
					case oh:
						i = m(this.Ma);
						j = m(this.La);
						break;
					case T:
						i = m([this.sa]), j = m(this.Z)
				}
			}
			var i = i && j ? i + ld + j : i ? i : j ? j : S,
				j = s.max(2, s[z](d / 1.618)),
				o = s.max(2, s[z](e / 1.618)),
				q = a.a[w] - 2 * j,
				m = Iu(b, g, a[J].t, q, 1),
				u = 0 < m.d[I] ? m.d[0] : S,
				y = b(u, a[J].t)[w],
				D = s[z](s.max(2,
					1.618 * d)),
				q = s.max(q - y - D, 0),
				b = Iu(b, i, c, q, 1),
				D = 0 < b.d[I] ? b.d[0] : S,
				Y = [];
			Y[v]({
				key: kh,
				min: 2,
				T: [p]
			});
			(u || D) && Y[v]({
				key: Nn,
				min: d + 2,
				T: [j - 2]
			});
			f == Pj && Y[v]({
				key: ik,
				min: e + 2,
				T: [o - 2]
			});
			f = Zu(Y, s[B](a.a[Q] / 2));
			d = a.a.top;
			o = f[J] || [];
			if(0 < o[I]) {
				d += o[0];
				if(u) a[J].d[v]({
					text: u,
					x: a.a[C] + j,
					y: d,
					length: y
				}), a[J].K = m.aa ? g : S;
				if(D) a.cg = {
					text: i,
					t: c,
					d: [],
					Za: Ni,
					Pa: Ni,
					K: b.aa ? i : S
				}, a.cg.d[v]({
					text: D,
					x: a.a[R] - j,
					y: d,
					length: q
				})
			}
			c = f.legend || [];
			if(0 < c[I]) d += c[0], a.f.pb = new hs(d - e, a.a[R], d, a.a[C])
		};
		V.$m = function(a) {
			var b = this.h;
			this.sa[F] == Ho && h(r("Bars series with value domain axis is not supported."));
			b.Vc ? this.su(a) : this.ru(a)
		};
		V.su = function(a) {
			var b = this.h,
				c = this.D;
			this.sa.ke(b.v[I], 1);
			for(var d = 0; d < b.v[I]; d++) {
				for(var e = [], f = 0; f < this.Z[I]; f++) e[v]([0, 0]);
				for(f = 0; f < b.e[I]; f++) {
					var g = b.e[f],
						i = g.c,
						j = g.Ja,
						m = this.Z[j];
					if(g[F] == a) {
						var o = c[H](d, g.w[A][0]),
							o = m.j.U(o);
						if(ip(o)) i[v](l);
						else {
							var q = 0 < o ? 0 : 1,
								j = e[j];
							m.Y(j[q] + o);
							m = {
								hb: {
									Bd: d,
									de: 0,
									pg: j[q],
									Eh: j[q] + o,
									rg: this.Qh(g, d, j[q], k)
								}
							};
							if(g[F] == hn) {
								var u = i[I];
								m.hb.Aj = 0 == u || !i[u - 1] ? l : i[u - 1].hb.Eh
							}
							this.of(m, g, d);
							i[v](m);
							j[q] += o
						}
					}
				}
			}
		};
		V.ru = function(a) {
			var b = this.h,
				c = this.D,
				d = this.sa,
				e = Np(b.e, function(b) {
					return b[F] == a
				});
			d.ke(b.v[I], 1);
			Mp(b.v, function(a, b) {
				Mp(e, function(a, e) {
					var f = this.Z[a.Ja],
						o = a.w[A][0],
						q = c[H](b, o),
						u = f.j,
						q = u.U(q);
					if(ip(q)) a.c[v](l);
					else {
						f.Y(q);
						d.ke(0, e + 1);
						f = {
							hb: {
								Bd: b,
								de: e,
								pg: l,
								Eh: q,
								rg: this.Qh(a, b, 0, k)
							}
						};
						if(a[F] == hn) f.hb.Aj = 0 == b ? l : u.U(c[H](b - 1, o));
						this.of(f, a, b);
						a.c[v](f)
					}
				}, this)
			}, this);
			Mp(this.Z, function(a) {
				a.Wm()
			})
		};
		V.kr = function() {
			var a = this.h,
				b = this.D,
				c = this.sa,
				d = Np(a.e, function(a) {
					return a[F] == wh
				});
			c.ke(a.v[I], 1);
			Mp(a.v, function(a, f) {
				Mp(d, function(a, d) {
					var e = a.w[A],
						m = this.Z[a.Ja];
					c.ke(0, d + 1);
					var o = b[H](f, e[0]),
						q = b[H](f, e[1]),
						u = b[H](f, e[2]),
						e = b[H](f, e[3]),
						o = m.j.U(o),
						q = m.j.U(q),
						u = m.j.U(u),
						e = m.j.U(e);
					if(ip(o) || ip(e) || ip(q) || ip(u)) a.c[v](l);
					else {
						var y = u < q;
						m.Y(o);
						m.Y(e);
						m = {
							dm: this.xr(a[tb][tb], y),
							Ha: yt(a[tb][tb]),
							hb: {
								Bd: f,
								de: d,
								er: o,
								lineTo: e,
								fr: y ? u : q,
								gr: y ? q : u,
								dr: y
							}
						};
						this.of(m, a, f);
						a.c[v](m)
					}
				}, this)
			}, this);
			Mp(this.Z,
				function(a) {
					a.Wm()
				})
		};
		V.mr = function() {
			var a = this.h,
				b = this.D,
				c = this.sa;
			c[F] != Ho && c.ke(a.v[I], 1);
			for(var d = 0; d < a.v[I]; d++)
				for(var e = 0; e < a.e[I]; e++) {
					var f = a.e[e],
						g = this.Z[f.Ja];
					if(f[F] == Ak) {
						var i = b[H](d, f.w[A][0]),
							i = g.j.U(i);
						if(W(i)) {
							var j, m;
							c[F] == Ho ? (j = b[H](d, 0), j = c.j.U(j), c.Y(j), m = c.wd(j)) : (j = d, m = k);
							m && g.Y(i);
							g = this.Qh(f, d, 0, m);
							g = {
								hb: {
									Bd: d,
									de: 0,
									Wb: j,
									nf: i,
									rg: g
								},
								Bm: m
							};
							this.of(g, f, d);
							f.c[v](g)
						} else f.c[v](l)
					}
				}
			this.Uj()
		};
		V.ir = function() {
			var a = this.h,
				b = this.D,
				c = this.sa;
			c[F] != Ho && c.ke(a.v[I], 1);
			for(var d = 0; d < a.v[I]; d++)
				for(var e = gq(0, this.Z[I]), f = Yp(e), g = Yp(e), i = 0; i < a.e[I]; i++) {
					var j = a.e[i];
					if(j[F] == Cg) {
						var m = j.Ja,
							o = this.Z[m],
							q = l,
							u = l,
							y = j.w[A][0],
							D = b[H](d, y),
							D = o.j.U(D);
						if(W(D)) {
							var Y, L, X;
							a.Vc ? (Y = D + g[m], q = f[m], u = e[m], L = f[m] + D, X = e[m] + D, d == b[dc]() - 1 || !ip(b[H](d + 1, y)) ? f[m] += D : L = f[m], 0 == d || !ip(b[H](d - 1, y)) ? e[m] += D : X = e[m]) : (Y = D, L = d == b[dc]() - 1 || !ip(b[H](d + 1, y)) ? Y : l, X = 0 == d || !ip(b[H](d - 1, y)) ? Y : l);
							var G;
							c[F] == Ho ? (y = b[H](d, 0),
								G = c.j.U(y), c.Y(G), y = c.wd(G)) : (G = d, y = k);
							y && o.Y(Y);
							o = this.Qh(j, d, g[m], y);
							a.Vc && (g[m] = Y);
							m = {
								Wb: G,
								nf: Y,
								Bd: d,
								de: 0,
								Fm: G,
								Rj: X,
								Em: G,
								Qj: L,
								Dm: G,
								Pj: q,
								Cm: G,
								Oj: u,
								rg: o
							}
						} else a.Vc && (q = f[m], u = e[m]), m = {
							Dm: d,
							Pj: q,
							Cm: d,
							Oj: u,
							Fm: d,
							Rj: u,
							Em: d,
							Qj: q
						}, y = n;
						m = {
							hb: m,
							Bm: y
						};
						this.of(m, j, d);
						if(!W(D)) m.ud = k;
						j.c[v](m)
					}
				}
			this.Uj()
		};
		V.nr = function() {
			for(var a = this.h, b = this.D, c = this.Ma[0], d = this.La[0], e = 0; e < b[dc](); e++)
				for(var f = 0; f < a.e[I]; f++) {
					var g = a.e[f],
						i = g.Ad;
					if(g[F] == rm) {
						var j = g.w[A][0],
							i = b[H](e, a.Zc[i].w[wb][0]),
							m = b[H](e, j),
							j = this.Ma[0].j.U(i),
							i = this.La[0].j.U(m);
						if(!ip(j) && !ip(i)) {
							if(m = c.wd(j) && d.wd(i)) c.Y(j), d.Y(i);
							j = {
								hb: {
									x: j,
									y: i
								},
								Yq: m
							};
							this.of(j, g, e);
							g.c[v](j)
						} else g.c[v](l)
					}
				}
			this.Uj()
		};
		V.Uj = function() {
			function a(a) {
				return {
					Hg: W(a.Hg) ? a.Hg : 1,
					ve: W(a.ve) ? a.ve : 1,
					scope: W(a[uc]) ? a[uc] : k
				}
			}

			function b(a) {
				return a && !a.ud
			}
			for(var c = 0; c < this.h.e[I]; c++) {
				var d = this.h.e[c],
					e = d.w.emphasis || [],
					f = d.w[uc] || [];
				if(!(0 == (d.w.certainty || [])[I] && 0 == e[I] && 0 == f[I])) {
					e = Up(d.c, b);
					e = a(e || {});
					for(f = 0; f < d.c[I]; f++) {
						var g = d.c[f];
						if(b(g)) {
							var i = a(g),
								j = d.Ha;
							if(1 > i.Hg || 1 > e.Hg) j = this.rk(j, n), g.Eg = j;
							if(1 != i.ve && 1 != e.ve) {
								var m = s.min(e.ve, i.ve),
									j = this.zs(j, m);
								g.Eg = j
							}
							if(!i[uc] && !e[uc]) j = j.$h(), g.Eg = j;
							e = i
						}
					}
				}
			}
		};
		V.of = function(a, b, c) {
			a.Xf = this.ik(b, c);
			var d = this.Ct(b, c),
				e = this.Dt(b, c),
				c = this.Et(b, c),
				f = b.Hm,
				g = tv(a, b);
			if(!c) a.scope = c, f = f.$h(), a.b = f;
			if(1 != e && (a.ve = e, b[F] == Ak || b[F] == Cg || b[F] == rm)) g = s[z](10 * g * s[Ib](e)) / 10, a.Xb = g;
			if(1 > d) switch(a.Hg = d, b[F]) {
				case Ak:
				case Cg:
				case rm:
					a.b = this.rk(f, k);
					a.Xb = s.max(g - a.b.wo() / 2, 0);
					break;
				case Pg:
				case hn:
					a.b = this.rk(f, n)
			}
		};
		V.ik = function(a, b) {
			if(a.w.tooltip) return {
				content: Op(a.w.tooltip, function(a) {
					return this.D[Xc](b, a)
				}, this)[cd](gd)
			};
			switch(this.h.N) {
				case rm:
					return this.vt(a, b);
				case T:
					return this.ut(a, b)
			}
		};
		V.vt = function(a, b) {
			var c = this.D,
				d = a.w[A][0];
			return {
				lf: a[J],
				content: c[Xc](b, this.h.Zc[a.Ad].w[wb][0]) + ld + c[Xc](b, d)
			}
		};
		V.ut = function(a, b) {
			var c = this.D,
				d = this.h.v[b],
				e = a.w[A];
			if(a[F] == wh) e = c[Xc](b, e[0]) + kd + c[Xc](b, e[3]) + ie + c[Xc](b, e[1]) + kd + c[Xc](b, e[2]);
			else {
				var e = this.D[Xc](b, e[0]),
					f = a.w.interval || [];
				f[I] && (f = Op(f, function(a) {
					return c[Xc](b, a)
				}), e += md + f[cd](ie) + hg)
			}
			return {
				Hk: d.dj[a.Ad],
				lf: a[J],
				content: e
			}
		};
		V.an = function() {
			function a(a) {
				return {
					Wb: a.x,
					nf: a.y
				}
			}

			function b(a) {
				return new wr(a.Wb, a.nf)
			}

			function c(a) {
				return {
					x: a.x,
					y: a.y
				}
			}

			function d(a) {
				return new wr(a.x, a.y)
			}
			var e = this.h,
				f = this.sa,
				g = Z(function(a, b, c) {
					b.Yq && (this.Ma[0].Y(c.x), this.La[0].Y(c.y))
				}, this),
				i = Z(function(a, b, c) {
					f.Y(c.Wb);
					b.Bm && this.Z[a.Ja].Y(c.nf)
				}, this),
				j, m, o;
			switch(e.N) {
				case rm:
					j = d;
					m = c;
					o = g;
					break;
				case T:
					j = b, m = a, o = i
			}
			for(g = 0; g < e.e[I]; g++)
				if(i = e.e[g], i[F] == rm || i[F] == Ak)
					if(0 <= Lp([T, Cl, Wh], i.Ze)) {
						var q = i[F] == rm && i.Ze == Wh,
							u = i.Ze == T;
						i.ek =
							k;
						i.wr = q;
						q = Qu(Op(i.c, function(a) {
							return W(a) ? j(a.hb) : l
						}), i.ij, u, q, e.Qe);
						for(u = 0; u < i.c[I]; ++u) {
							var y = i.c[u];
							if(q[u]) {
								var D = m(q[u][0]),
									Y = m(q[u][1]);
								y.Qm = D;
								y.Rm = Y;
								o(i, y, D);
								o(i, y, Y)
							}
						}
					} else i.ek = n
		};
		V.lr = function() {
			if(this.h.jc == xh) {
				for(var a = this.h.v, b = this.sa, c = b.sb, d = b.ob, e, f, g = 0; g < a[I]; g++)
					if(f = this.oo(g), W(f)) {
						if(b.po(f)) return;
						if(!b.kt(f)) {
							e = g;
							break
						}
					}
				if(hp(e))
					for(var i, g = e; g < a[I]; g++) {
						e = c;
						if(g == a[I] - 1) {
							this.Tk(g, e, d);
							break
						}
						i = this.oo(g + 1);
						if(W(i)) {
							if(b.po(i)) {
								this.Tk(g, e, d);
								break
							}
							c = ur(f, i);
							this.Tk(g, e, c);
							f = i
						}
					}
			}
		};
		V.oo = function(a) {
			var b = this.h.v,
				c = this.sa;
			return c[F] == Ho ? !W(b[a][A]) ? l : c.Tm(b[a][A]) : c.Aa(a)
		};
		V.Tk = function(a, b, c) {
			var d = this.h.a.top,
				e = this.h.a[P],
				f = this.h.a[C],
				g = this.h.a[R],
				i = this.sa[Wa];
			this.h.v[a].Ls = this.h[Qb] == Gj ? 1 == i ? new hs(d, c, e, b) : new hs(d, b, e, c) : 1 == i ? new hs(b, g, c, f) : new hs(c, g, b, f)
		};
		V.ur = function() {
			this.ex();
			this.fx()
		};
		V.ex = function() {
			for(var a = this.h, b = 0; b < a.Ka[I]; ++b) this.al(this.La[b], a.Ka[b], this.Bt);
			for(b = 0; b < a.ta[I]; ++b) this.al(this.Ma[b], a.ta[b], this.At)
		};
		V.fx = function() {
			for(var a = this.h, b = 0; b < a.ta[I]; ++b) this.al(this.Ma[b], a.ta[b], this.cu)
		};
		V.al = function(a, b, c) {
			b[x] && pa(b, Np(b[x], Z(c, this, a)))
		};
		V.At = function(a, b) {
			var c = this.h,
				d = b.o;
			if(d.kf) return k;
			d = nu(d);
			return !d ? k : a.ic == Pj && !(new hs(c.a.top, c.a[R], c.a[P], c.a[C]))[Tc](d) ? n : k
		};
		V.cu = function(a, b) {
			var c = this.h;
			if(a.ic != Pj) return k;
			var d = b.o;
			if(d.kf) return k;
			var e = nu(d);
			if(!e) return k;
			for(var d = d.t[M] / 2, f = new hs(e.top, e[R] + d, e[P], e[C] - d), g = 0; g < c.Ka[I]; ++g)
				if(this.La[g].ic == Pj && !(1 > (c.Ka[0][x] ? c.Ka[0][x][I] : 0))) {
					var i = nu(c.Ka[g][x][0].o),
						j = nu(Jp(c.Ka[g][x]).o);
					if(i || j) {
						if(i && is(f, i) || j && is(f, j)) return n;
						var m;
						i ? j ? (m = s.min(i[C], j[C]), i = s.max(i[R], j[R])) : (m = i[C], i = i[R]) : (m = j[C], i = j[R]);
						if(s.abs(e[C] - m < d) || s.abs(e[R] - i < d)) return n
					}
				}
			return k
		};
		V.Bt = function(a, b) {
			var c = this.h,
				d = new hs(c.a.top, c.a[R], c.a[P], c.a[C]),
				e = b.o,
				f = e.t[M] / 2,
				e = nu(e);
			if(!e) return k;
			if(a.ic == Pj && !d[Tc](e)) return n;
			d = new hs(e.top, e[R] + f, e[P], e[C] - f);
			if((f = nu(c[J])) && is(d, f)) return n;
			return(f = c.cg ? nu(c.cg) : l) && is(d, f) ? n : (c = c.f.pb) && is(d, c) ? n : k
		};
		V.sr = function() {
			var a = this.D,
				b = this.h,
				c = this.sa;
			Mp(this.h.v, function(d, e) {
				var f = [],
					g = [];
				Mp(b.Zc, function(a) {
					a = this.Jm(e, a.w);
					Zp(f, a.Mj);
					Zp(g, a.tb)
				}, this);
				if(f[I] || g[I]) {
					var i;
					c[F] == Ho ? (i = a[H](e, 0), i = c.j.U(i)) : i = e;
					i = c.Aa(i);
					var j = b.a.top + b.a[Q],
						m = this.h.Dq;
					if(f[I]) {
						var o = this.$j(f);
						d.Ue = this.Km(i, j, o, m, 5)
					}
					if(g[I]) o = this.$j(g), d.Ue = this.Uq(i, j, o, m)
				}
			}, this);
			Mp(this.h.e, function(a) {
				if(a[F] == Cg || a[F] == Ak)
					for(var b = 0; b < a.c[I]; ++b)
						if(W(a.c[b])) {
							var c = this.Jm(b, a.w).Mj;
							if(c[I]) {
								var g = a.c[b].i,
									i = sq(this.h.Cq);
								va(i, hx(i[tb], a[tb]));
								c = this.$j(c);
								a.c[b].Ue = this.Km(g.x, g.y, c, i, 12)
							}
						}
			}, this)
		};
		V.Jm = function(a, b) {
			var c = this.D,
				d = b.annotation,
				e = {
					tb: [],
					Mj: []
				};
			if(!W(d)) return e;
			for(var f = b.annotationText || [], g = 0; g < d[I]; ++g) {
				var i = d[g],
					j = i + 1,
					m = 0 <= Lp(f, j);
				c[H](a, i) && (j = m ? c[Xc](a, j) : S, j = {
					te: c[Xc](a, i),
					Ag: j || l
				}, m = [], m[v](sg + i + te), m[v](yg), this.k.hi(m) == Ak ? e.tb[v](j) : e.Mj[v](j))
			}
			return e
		};
		V.$j = function(a) {
			for(var b = [], c = [], d = 0; d < a[I]; ++d) b[v](a[d].te), a[d].Ag && c[v](a[d].Ag);
			return {
				te: b[cd](ie),
				Ag: c[cd](he)
			}
		};
		V.Km = function(a, b, c, d, e) {
			var f = this.ra(c.te, d);
			return {
				Ym: {
					x: a,
					y: b,
					orientation: Ko,
					length: -e
				},
				label: {
					text: c.te,
					t: d,
					d: [{
						x: a,
						y: b - e,
						length: f[w],
						text: c.te
					}],
					Za: Eh,
					Pa: Ni,
					K: c.Ag
				}
			}
		};
		V.Uq = function(a, b, c, d) {
			var e = Iu(this.h.tc, c.te, d, this.h.a[Q] - d[M]);
			return {
				Ym: {
					x: a,
					y: b,
					orientation: Ko,
					length: -this.h.a[Q]
				},
				label: {
					text: c,
					t: d,
					d: [{
						x: a + 2,
						y: b - this.h.a[Q] / 2,
						length: e.Yb,
						text: e.d[0]
					}],
					Za: Eh,
					Pa: fn,
					K: c.Ag || (e.aa ? c.te : S),
					kf: 270
				}
			}
		};
		V.tr = function() {
			Mp(this.h.e, function(a) {
				var b = this.es(a);
				a.c && Mp(a.c, function(a) {
					if(W(a)) {
						a.i = b(a.hb);
						if(W(a.Qm)) a.ld = b(a.Qm);
						if(W(a.Rm)) a.md = b(a.Rm)
					}
				});
				a.hc && (0 < a.hc.d[I] || 0 < a.hc[$c][I]) && this.fs(a)
			}, this)
		};
		V.fs = function(a) {
			function b(b) {
				var c = e[b];
				delete e[b];
				if(c && 1 < c.tb[I]) {
					c[P] && c[P].reverse();
					if(f[b].Ze != U) {
						var d = f[b].Ze == T,
							b = f[b].ij;
						c.mm = Qu(c.tb, b, d, n, n);
						if(c[P]) c.Qr = Qu(c[P], b, d, n, n)
					}
					a.hc.fk[v](c)
				}
			}

			function c(a, b) {
				if(!e[a]) {
					var c = f[a].b[Dc](),
						d = f[a][zc],
						g = {};
					g.ig = a;
					g.tb = [];
					d == Cg ? (c.ee(0), Ra(g, [])) : c.dk(0);
					g.b = c;
					e[a] = g
				}
				e[a].tb[v](new wr(b[C], b.top));
				e[a][P] && e[a][P][v](new wr(b[C] + b[w], b.top + b[Q]))
			}

			function d(a) {
				a = f[a][zc];
				return a == Cg || a == Ak
			}
			var e = {},
				f = a.hc.jg;
			a.hc.fk = [];
			for(var g = 0; g < a.c[I]; g++) {
				var i = {},
					j = a.c[g];
				if(j && j.i && j.i.Wc)
					for(var j = j.i.Wc, m = 0; m < j[I]; ++m) {
						var o = j[m].ig;
						d(o) && (i[o] = k, c(o, j[m][vc]))
					}
				for(o in e) !i[o] && !f[o].Qe && b(o)
			}
			for(o in e) b(o)
		};
		V.es = function(a) {
			switch(a[F]) {
				case rm:
					return Z(this.Fw, this, a);
				case sh:
					return Z(this.Cw, this, a);
				case Ak:
					return Z(this.Ew, this, a);
				case Pg:
					return Z(this.Bw, this, a);
				case hn:
					return Z(this.Gw, this, a);
				case wh:
					return Z(this.Dw, this, a);
				case Cg:
					return Z(this.Aw, this, a)
			}
			return l
		};
		V.Fw = function(a, b) {
			return {
				x: this.Ma[0].Aa(b.x),
				y: this.La[0].Aa(b.y)
			}
		};
		V.Cw = function(a, b) {
			return this.Oh.Tv(this.Ma[0], this.La[0], b)
		};
		V.Ew = function(a, b) {
			var c = this.Bf(a.Ja, b.Wb, b.nf);
			c.Wc = this.ci(a, b);
			return c
		};
		V.Bw = function(a, b) {
			var c = this.Dl(a, b, b.pg, b.Eh);
			return !c ? l : {
				top: c.top,
				left: c[C],
				width: c[w],
				height: c[Q],
				Wc: this.ci(a, b)
			}
		};
		V.Dw = function(a, b) {
			var c = this.Dl(a, b, b.fr, b.gr),
				d = this.Dl(a, b, b.er, b.lineTo);
			oa(d, 2);
			xa(d, d[C] + (c[w] - (c[w] % 2 ? 3 : 2)) / 2);
			b.dr && (Ua(c, c[Q] - 2), oa(c, c[w] - 2), xa(c, c[C] + 1), c.top += 1);
			Ua(c, s.max(c[Q], 2));
			oa(c, s.max(c[w], 1));
			return {
				rect: c,
				tb: d
			}
		};
		V.Gw = function(a, b) {
			var c = this.Z[a.Ja];
			if(!W(b.pg)) b.pg = c.j.U(c.V.fa);
			var d = this.sa,
				e = d.r[b.Bd].u,
				f = d.Yf,
				g = s[B](e - d[Wa] * f / 2),
				f = s[B](e + d[Wa] * f / 2),
				i = c.Aa(b.Eh),
				d = this.nd(g, c.Aa(b.pg)),
				e = this.nd(g, i),
				f = this.nd(f, i),
				i = [];
			this.k.za(hi, k) && W(b.Aj) && (c = this.nd(g, c.Aa(b.Aj)), i[v](c));
			i[v](e);
			i[v](f);
			return {
				Wf: new js(s.min(d.x, f.x), s.min(d.y, f.y), s.abs(f.x - d.x), s.abs(f.y - d.y)),
				outline: i,
				Wc: this.ci(a, b)
			}
		};
		V.Os = function(a, b, c) {
			return s.min(a.Aa(b), a.Aa(c))
		};
		V.Ns = function(a, b, c) {
			return s.max(a.Aa(b), a.Aa(c))
		};
		V.Dl = function(a, b, c, d) {
			var e = this.sa,
				f = this.Z[a.Ja];
			W(c) || (c = f.j.U(f.V.fa));
			if(b.de > e.$e || b.Bd >= e.r[I]) return l;
			a = this.Os(f, c, d);
			c = this.Ns(f, c, d);
			d = s.min(1, 0.2 * (c - a));
			s[B](a + d) < s[B](c) && s[B](a + d) > s[B](a) ? (a = s[B](a + d), c = s[B](c)) : a += d;
			b = this.Rn(b);
			d = e.Xe / 2;
			e = s[B](b + d);
			a = this.nd(s[B](b - d), a);
			e = this.nd(e, c);
			return new js(s.min(a.x, e.x), s.min(a.y, e.y), s.abs(e.x - a.x), s.abs(e.y - a.y))
		};
		V.Aw = function(a, b) {
			var c = this.Z[a.Ja],
				d = c.j.U(c.V.fa),
				c = this.Bf(a.Ja, b.Wb, b.nf),
				e = this.Bf(a.Ja, b.Cm, W(b.Oj) ? b.Oj : d),
				f = this.Bf(a.Ja, b.Dm, W(b.Pj) ? b.Pj : d),
				g = this.Bf(a.Ja, b.Em, W(b.Qj) ? b.Qj : d),
				d = this.Bf(a.Ja, b.Fm, W(b.Rj) ? b.Rj : d),
				i = this.ci(a, b);
			return {
				x: c.x,
				y: c.y,
				Fj: e.x,
				Gj: e.y,
				Hj: f.x,
				Ij: f.y,
				Hh: g.x,
				Ih: g.y,
				Jh: d.x,
				Kh: d.y,
				Wc: i
			}
		};
		V.ci = function(a, b) {
			if(!b.rg) return [];
			var c = this.sa,
				d = this.Z[a.Ja];
			if(c[F] != Ho && (b.de > c.$e || b.Bd >= c.r[I])) return [];
			for(var e = this.Rn(b), f = [], g = 0, i; i = b.rg[g]; g++) {
				var j = d.Aa(i.Ar),
					m = d.Aa(i.Br),
					o = (c[F] == Ho ? c.r && 1 < c.r[I] ? c.r[1].u - c.r[0].u : 0 : c.Xe) * i.Cr,
					q = s.abs(j - m),
					m = this.nd(e - o / 2, s.min(m, j)),
					j = m.x,
					m = m.y,
					o = this.nd(o, q);
				f[v]({
					rect: new js(j, m, o.x, o.y),
					ig: i.ig
				})
			}
			return f
		};
		V.Rn = function(a) {
			var b = this.sa;
			return b[F] == Ho ? b.Aa(a.Wb) : b.r[a.Bd].u - b.hm + (b.Xe + 1) * a.de + b.Xe / 2
		};

		function hx(a, b) {
			switch(a) {
				case Am:
					return b.wf;
				case Bm:
					return b.si;
				case zm:
					return b[tb];
				default:
					return a
			}
		}
		V.nd = function(a, b) {
			switch(this.h[Qb]) {
				case Gj:
					return {
						x: a,
						y: b
					};
				case Ko:
					return {
						x: b,
						y: a
					}
			}
			h(r("Invalid orientation."))
		};
		V.Bf = function(a, b, c) {
			return this.nd(this.sa.Aa(b), this.Z[a].Aa(c))
		};
		V.xr = function(a, b) {
			return b ? zt(a, 2, k) : yt(a)
		};
		V.rk = function(a, b) {
			var c = a[Dc]();
			c.Qg() && c.O != Ud ? (c.Kk(new vt(Tl, c.O)), !c.pd() && b && (c.gc(c.O), c.ee(1))) : c.pd() && c.co(oi);
			return c
		};
		V.zs = function(a, b) {
			var c = a[Dc]();
			c.ee(c.H * b);
			return c
		};
		V.Ct = function(a, b) {
			var c = this.D,
				d = a.w.certainty || [];
			if(d[I]) {
				var e = c[H](b, d[0]);
				if(W(e)) return c[Fb](d[0]) == Yg ? e ? 1 : 0 : e
			}
			return 1
		};
		V.Et = function(a, b) {
			var c = this.D,
				d = a.w[uc] || [];
			return d[I] && (c = c[H](b, d[0]), W(c)) ? !!c : k
		};
		V.Dt = function(a, b) {
			var c = this.D,
				d = a.w.emphasis || [];
			if(d[I]) {
				var e = c[H](b, d[0]);
				if(W(e)) return c[Fb](d[0]) == Yg ? e ? 2 : 1 : e
			}
			return 1
		};
		V.Qh = function(a, b, c, d) {
			function e(a, e, f) {
				var m = g.j.U(i[H](b, a)),
					e = g.j.U(i[H](b, e));
				W(m) && W(e) && (m += c, e += c, d && (g.Y(m), g.Y(e)), j[v]({
					Br: m,
					Ar: e,
					Cr: f,
					ig: a
				}))
			}
			var f = a.hc;
			if(!f) return l;
			for(var g = this.Z[a.Ja], i = this.D, j = [], a = 0; a < f.qe[I]; a += 2) e(f.qe[a], f.qe[a + 1], 0);
			for(var m = 0, o = f.Xh[I] - 1; m <= o; m++, o--) {
				var a = f.Xh[m],
					q = f.Xh[o];
				e(a, q, f.jg[a].$q)
			}
			for(q = 0; q < f.c[I]; q++) a = f.c[q], e(a, a, 0);
			for(q = 0; q < f.Jd[I]; q++) a = f.Jd[q], m = f.jg[a], e(a, a, 0 == q || q == f.Jd[I] - 1 ? m.Zq : m.ar);
			m = 0;
			for(o = f[$c][I] - 1; m <= o; m++, o--) a = f[$c][m],
				q = f[$c][o], e(a, q, 0);
			for(q = 0; q < f.d[I]; q++) a = f.d[q], e(a, a, 0);
			return j[I] ? j : l
		};

		function ix(a, b, c) {
			this.Fl = a;
			this.Fg = b;
			this.wg = a - b / 2;
			this.Vq = c;
			La(this, 0)
		}
		ix[K].Op = function(a) {
			this.wg = a
		};
		ix[K].Zw = function() {
			return this.wg + this.Fg
		};
		ix[K].Sf = function() {
			return this.Fg
		};

		function jx(a, b) {
			this.Nl = a;
			this.Le = b;
			for(var c = 0, d = b[I]; c < d; c++) La(b[c], c)
		}
		V = jx[K];
		V.Wq = function() {
			for(var a = 0, b = 0, c = this.Le[I]; b < c; b++) a += this.Le[b].Sf();
			a > this.Nl && h(r("Not enough space for labels. Need: " + a + " got: " + this.Nl));
			this.Le.sort(function(a, b) {
				var c = a.Fl,
					d = b.Fl;
				return c == d ? a[ic] > b[ic] : c > d ? 1 : -1
			});
			b = 0;
			for(c = this.Le[I]; b < c; b++) {
				var a = this.Le[b],
					d = this.Np(a.wg, a.Sf());
				a.Op(d)
			}
			b = [];
			a = 0;
			for(c = this.Le[I]; a < c; a++) b[v]([this.Le[a]]);
			for(; this.Yv(b););
		};
		V.Yv = function(a) {
			for(var b = 0; b < a[I] - 1; b++) {
				var c = a[b],
					d = a[b + 1];
				if(this.dx(c, d)) return this.cx(c, d), a[bd](b + 1, 1), k
			}
			return n
		};
		V.dx = function(a, b) {
			return a[a[I] - 1].Zw() > b[0].wg
		};
		V.cx = function(a, b) {
			for(var c = 0; c < b[I]; c++) a[v](b[c]);
			for(var d = 0, e = 0, c = 0; c < a[I]; c++) d += a[c].Fl, e += a[c].Sf();
			d = d / a[I] - e / 2;
			d = this.Np(d, e);
			for(c = 0; c < a[I]; c++) e = a[c], e.Op(d), d += e.Sf()
		};
		V.Np = function(a, b) {
			return pr(a, 0, this.Nl - b)
		};

		function kx(a, b) {
			var c = a.f;
			this.m = c[fc];
			var d = Gj;
			if(this.m == hk || this.m == hm || this.m == gk) d = Ko;
			this.ub = d;
			this.ad = n;
			this.W = c.t;
			this.Am = b.vc(mk, this.W);
			this.ra = a.tc;
			this.h = a;
			this.ab = this.W[M];
			this.Dd = s[z](this.W[M] / (1.618 * 1.618));
			this.oa = l;
			this.yg = [];
			this.Ej = b.za(rk, k);
			this.Oq = b.ia(qk, uu, this.ub);
			this.Mq = b.zh(ok);
			this.Nq = b.zh(pk);
			this.ha = l;
			this.Yh = this.Dd;
			this.he = this.ie = this.Dj = 0;
			this.sn = this.m == io ? b.da(lk, 1) : 1;
			this.mg = 0;
			this.Zr()
		}
		V = kx[K];
		V.as = function() {
			var a = this.h.f;
			this.oa = a.pb;
			this.ub == Ko ? this.Is(k) : this.m == io ? this.Ik(n) : this.m == jh ? this.Ik(k) : this.m == Pj && this.Ik(n);
			a.ha = this.ha;
			a.kc = a.ha && 0 < a.ha[I] ? a.ha[0] : l;
			a.qg = this.ad ? this.Hs(0, n, 1 < a.ha[I]) : l
		};
		V.Zr = function() {
			this.yg = this.h.$c
		};
		V.Is = function(a) {
			var b = s.max(this.oa[R] - this.oa[C] - (this.ab + this.Dd), 0),
				c = this.oa[P] - this.oa.top,
				d = s.max(c - 2 * this.ab, 0),
				e = this.yg,
				f = this.h;
			uv(f) && e.reverse();
			var g = Op(e, function(a) {
				a = Iu(this.ra, a[x], this.W, b, p);
				if(0 == a.d[I]) a.d = [S];
				return a
			}, this);
			if(this.m == gk && f.fm == Ak) e = this.us(g, c, e), this.ha = [e];
			else if(c = this.zk(g, c), this.ad = a && this.vs(e, c))
				if(c = this.zk(g, d), !hp(c[0]) || 0 == c[0][I]) this.ad = n;
				else {
					this.ha = [];
					for(a = e; 0 < a[I];) {
						e = this.Pn(c, a);
						this.ha[v](e);
						for(e = 0; hp(c[e]) && 0 != c[e][I];) ++e;
						g = $p(g,
							e);
						c = this.zk(g, d);
						a = $p(a, e)
					}
					if(this.ad) this.Dj = s[z](this.oa[P] - this.ab), this.ie = this.oa[C], this.he = this.ie + this.ab + this.Yh, this.Ej && (this.he += this.wk(this.ha[I]) + this.Yh)
				}
			else e = this.Pn(c, e), this.ha = [e]
		};
		V.zk = function(a, b) {
			var c = this.W[M],
				d = s[z](c / 1.618),
				e = s[z](c / 3.236),
				c = this.hw(a, c + d, c + e);
			return Zu(c, b)
		};
		V.Xq = function(a) {
			var b = this.h.e[a].c,
				a = this.h.ta[0],
				a = a.L.jf(a.ob)[Vb](),
				b = Np(b, function(a) {
					return W(a)
				}),
				c = b[b[I] - 1];
			if(a > c.hb.Wb || 1 == b[I]) return c.i.y;
			c = b[0];
			if(a < c.hb.Wb) return c.i.y;
			var d = b[I] - 1;
			do d--; while (b[d].hb.Wb > a);
			c = b[d];
			b = b[d + 1];
			return c.i.y + (a - c.hb.Wb) / (b.hb.Wb - c.hb.Wb) * (b.i.y - c.i.y)
		};
		V.us = function(a, b, c) {
			for(var d = this.oa[R] - this.oa[C], e = s[z](this.oa[C]), f = [], g = [], i = this.h.ae == Ei, j = 0; j < c[I]; j++) {
				var m = c[j],
					o = Iu(this.ra, m[x], this.W, d, a[j].d[I]),
					q = {};
				q.id = m.id;
				q.b = m.b[Dc]();
				var u = sq(this.W);
				va(u, q.b.O);
				q.o = {
					text: m[x],
					t: u,
					d: [],
					Za: fn,
					Pa: fn,
					K: o.aa ? m[x] : S
				};
				u.$a && q.b.gc(u.$a, 1);
				q.B = k;
				q.z = m.z;
				for(var y = 0; y < o.d[I]; y++) q.o.d[v]({
					length: d,
					text: o.d[y]
				});
				if(i) y = this.ra(q.o.d[0][x], u)[w], q.ba = {}, q.ba.S = {
					x: e + y + 5
				}, q.ba.b = q.b, q.ba.B = n;
				La(q, m[ic]);
				y = this.Xq(q[ic]);
				u = this.ra(q.o.d[0], u)[Q];
				u *= q.o.d[I];
				m = new ix(y, u, q);
				f[v](m);
				g[v](q)
			}(new jx(b, f)).Wq();
			for(y = 0; y < f[I]; y++) {
				m = f[y];
				a = m.wg;
				q = m.Vq;
				b = q.o.d;
				for(j = 0; j < b[I]; j++)
					if(b[j].y = s[z](j * u + a), b[j].x = e, i) q.ba.S.y = b[j].y
			}
			return g
		};
		V.Pn = function(a, b) {
			for(var c = this.ab + this.Dd, d = this.oa[R] - this.oa[C] - c, e = this.W[M], f = s[z](e / 1.618), g = s[z](e / 3.236), f = e + f, e = e + g, g = [], i = s[z](this.oa.top), j = s[z](this.oa[C]), m = 0; m < b[I]; m++) {
				var o = b[m],
					q = a[m][I];
				if(0 != q) {
					var q = Iu(this.ra, o[x], this.W, d, q),
						u = {};
					u.id = o.id;
					u.o = {
						text: o[x],
						t: this.W,
						d: [],
						Za: fn,
						Pa: fn,
						K: q.aa ? o[x] : S
					};
					u.P = {};
					u.P.S = new js(j, i, this.ab, this.ab);
					u.P.b = o.b[Dc]();
					this.W.$a && u.P.b.gc(this.W.$a, 1);
					var y = j + c;
					u.B = k;
					u.z = o.z;
					for(var D = 0; D < q.d[I]; D++) 0 < D && (i += e), u.o.d[v]({
						x: y,
						y: i,
						length: d,
						text: q.d[D]
					});
					La(u, o[ic]);
					i += f;
					g[v](u)
				}
			}
			return g
		};
		V.hw = function(a, b, c) {
			for(var d = Pp(a, function(a, b) {
					return s.max(a, b.d[I])
				}, 0), e = [], f = 0; f < d; f++) {
				var g = 0 == f ? b : c;
				Mp(a, function(a, b) {
					f < a.d[I] && e[v]({
						key: b,
						min: 0 == f && 0 == b ? this.W[M] : g,
						T: []
					})
				}, this)
			}
			return e
		};
		V.vs = function(a, b) {
			var c = a[I] - 1;
			return 1 < a[I] && 1 > b[c][I]
		};
		V.Vr = function(a) {
			for(var b = this.yg, c = this.Zg(b, a), d = 1;
				(0 == this.sn || this.sn > d) && c[I] < b[I];) ++d, b = $p(b, c[I]), c = this.Zg(b, a);
			return d
		};
		V.Ik = function(a) {
			for(var b = [1, 9, 99, 0], c = 0; c < b[I] && !this.tu(b[c], a); ++c);
			if(this.ad) this.Dj = s[z]((this.oa.top + this.oa[P] - this.ab) / 2), this.he = this.oa[R] - this.ab, this.ie = this.he - this.Yh - this.ab, this.Ej && (this.ie -= this.wk(this.ha[I]) + this.Yh)
		};
		V.tu = function(a, b) {
			var c = this.oa[R] - this.oa[C],
				d = b;
			1 != a && (c -= 2 * (this.ab + this.Dd), d = n, 0 != a && (c -= this.wk(a) + this.Dd));
			var e = this.Zg(this.yg, c);
			if(0 == e[I]) return this.ad = n, k;
			this.ha = [];
			for(var f = this.yg; 0 < f[I];) {
				if(0 < a && this.ha[I] == a) return n;
				for(var g = [this.Ko(e, f, d)], i = 1; i < this.mg && !(f[I] == e[I]); i++) f = $p(f, e[I]), e = this.Zg(f, c), g[v](this.Ko(e, f, d));
				this.ha[v](this.qu(g));
				f = $p(f, e[I]);
				e = this.Zg(f, c)
			}
			this.ad = 1 < this.ha[I];
			return k
		};
		V.qu = function(a) {
			var b = this.oa.top,
				c = this.oa[P] - b,
				d = this.W[M],
				e = c - this.mg * d,
				f = 1 < this.mg ? e / (this.mg - 1) : 0,
				g = b + (c - ((d + f) * a[I] - f)) / 2,
				i = [];
			Mp(a, function(a) {
				var b = s[z](g);
				Mp(a, function(a) {
					a.o.d[0].y = b;
					a.P.S.top = b
				});
				g += d + f;
				Zp(i, a)
			});
			return i
		};
		V.Zg = function(a, b) {
			var c = this.ab + this.Dd,
				d = s.min(this.h[w] * (2 - 1.618) / 2, b);
			if(d < c) return [];
			c = this.wu(d, a);
			return Yu(c, b)
		};
		V.Ko = function(a, b, c) {
			for(var d = this.oa[R] - this.oa[C], e = this.ab + this.Dd, f = s[z](1.618 * this.W[M]), g = [], i = 0, j = s[z](this.oa.top), m = 0; m < a[I]; m++) {
				var o = b[m],
					q = Iu(this.ra, o[x], this.W, a[m] - e - (0 < m ? f : 0), 1),
					u = 0 < q.d[I] ? q.d[0] : S,
					y = this.ra(u, this.W)[w],
					D = {};
				D.id = o.id;
				D.o = {
					text: o[x],
					t: this.W,
					d: [{
						x: i + e,
						y: j,
						length: y,
						text: u
					}],
					Za: fn,
					Pa: fn,
					K: q.aa ? o[x] : S
				};
				D.B = k;
				D.z = o.z;
				D.P = {};
				D.P.b = o.b[Dc]();
				this.W.$a && D.P.b.gc(this.W.$a, 1);
				D.P.S = new js(i, j, this.ab, this.ab);
				La(D, o[ic]);
				g[v](D);
				i += y + e + f
			}
			a = this.oa[C];
			!this.ad && c && (a += s[B]((d -
				(i - f)) / 2));
			for(m = 0; m < g[I]; m++) {
				D = g[m];
				xa(D.P.S, D.P.S[C] + a);
				for(c = 0; c < D.o.d[I]; c++) D.o.d[c].x += a
			}
			return g
		};
		V.wu = function(a, b) {
			var c = this.ab + this.Dd,
				d = s[z](1.618 * this.W[M]);
			return Op(b, function(b, f) {
				var g = this.ra(b[x], this.W)[w] + c,
					i = s.min(a, g),
					g = g - i;
				0 < f && (i += d);
				return {
					min: i,
					T: [g]
				}
			}, this)
		};
		V.wk = function(a) {
			for(var b = Ae; 10 <= a;) b += Ae, a /= 10;
			return this.ra(b + xe + b, this.Am)[w]
		};
		V.Hs = function(a, b, c) {
			var d = this.Dj,
				e = l;
			if(this.Ej) var e = a + 1 + xe + this.ha[I],
				a = this.ie + this.ab,
				f = this.he - a,
				e = {
					text: e,
					t: this.Am,
					d: [{
						x: a + f / 2,
						y: d,
						text: e,
						length: f
					}],
					Za: Eh,
					Pa: fn,
					K: S
				};
			var g = this.Oq == Ko,
				i = this.ab,
				j = s[z](i / 2),
				m = this.ie,
				o = this.he,
				f = a = l;
			g ? (a = [{
				x: m + i,
				y: d + i
			}, {
				x: m + j,
				y: d
			}, {
				x: m,
				y: d + i
			}], f = [{
				x: o,
				y: d
			}, {
				x: o + i,
				y: d
			}, {
				x: o + j,
				y: d + i
			}]) : (a = [{
				x: m + i,
				y: d + i
			}, {
				x: m + i,
				y: d
			}, {
				x: m,
				y: d + j
			}], f = [{
				x: o,
				y: d
			}, {
				x: o + i,
				y: d + j
			}, {
				x: o,
				y: d + i
			}]);
			d = {
				fd: this.Mq,
				ei: this.Nq
			};
			return {
				ok: {
					path: a,
					fd: b,
					cd: d,
					b: b ? d.fd : d.ei
				},
				mk: {
					path: f,
					fd: c,
					cd: d,
					b: c ? d.fd : d.ei
				},
				nk: e
			}
		};

		function lx(a, b, c, d, e) {
			var f = a[R] - a[C],
				g = sq(d);
			va(g, Te);
			var i = sq(d);
			va(i, Xe);
			var d = d[M] / 3.236,
				j = g[M] + d,
				m = i[M] + d,
				o = mx(a, f, b, g, i, d, e),
				q = [],
				u;
			2 == c ? (c = a[R], a = a[C], u = Ni) : (c = a[C], a = a[R], u = fn);
			for(var y = 0; y < e[I]; ++y) {
				var D = e[y],
					Y = o[y];
				if(W(Y)) {
					var L = Iu(b, D.ef, g, f, Y.Nd),
						X = Iu(b, D.ff, i, f, Y.we),
						G = iv(new wr(c, Y.y));
					q[v]({
						bn: 2,
						Kb: iv(D.ym(pr(Y.y, D.Lh[O], D.Lh.end))),
						cn: a,
						Lc: G,
						vr: new wt({
							fill: Se,
							rb: 0.7
						}),
						Ha: new wt({
							stroke: Se,
							Qa: 1,
							vd: 0.7
						}),
						yx: d,
						ef: {
							text: D.ef,
							t: g,
							anchor: {
								x: G.x,
								y: G.y
							},
							d: Op(L.d, function(a, b) {
								return {
									x: 0,
									y: (b - L.d[I]) * j,
									length: L.Yb,
									text: a
								}
							}),
							Za: u,
							Pa: fn,
							K: L.aa ? D.ef : S
						},
						vx: g,
						ff: {
							text: D.ff,
							t: i,
							anchor: {
								x: G.x,
								y: G.y
							},
							d: Op(X.d, function(a, b) {
								return {
									x: 0,
									y: (b + 1) * m,
									length: X.Yb,
									text: a
								}
							}),
							Za: u,
							Pa: Ni,
							K: X.aa ? D.ff : S
						},
						xx: i,
						wx: u,
						z: D.z,
						index: D[ic]
					})
				}
			}
			return q
		}

		function mx(a, b, c, d, e, f, g) {
			var i = d[M] + f,
				j = e[M] + f,
				m = Op(g, function(a, g) {
					var i = Iu(c, a.ef, d, b, p),
						j = Iu(c, a.ff, e, b, p);
					return {
						Ef: g,
						Vd: a.hr,
						Nd: i.d[I],
						we: j.d[I],
						ui: f,
						vi: f
					}
				});
			bq(m, function(a, b) {
				return a.Vd - b.Vd
			});
			var o = Op(m, function(a) {
				return a
			});
			bq(o, function(a, b) {
				return g[a.Ef].Zm - g[b.Ef].Zm
			});
			for(var q; q = nx(a, i, j, g, m, n), q.Vk;)
				for(var u = q.Ed, y = 0; y < o[I]; y++) {
					var D = o[y];
					if(u[D.Ef].Vk) {
						0 < D.we ? D.we-- : 0 < D.Nd && (D.Nd--, 0 == D.Nd && (Wp(m, D), Kp[bd][N](o, y, 1)));
						break
					}
				}
			return q.Ed
		}

		function nx(a, b, c, d, e, f) {
			if(0 < e[I]) e[0].ui = 0, Jp(e).vi = 0;
			for(var g = 0; g < e[I]; g++) {
				var i = e[g],
					j = e[g - 1],
					m = e[g + 1],
					m = m ? d[m.Ef].Lh.end - 5 : a[P];
				i.rp = new pt(s.min(i.Vd, j ? d[j.Ef].Lh[O] + 5 : a.top), s.max(i.Vd, m))
			}
			a = ox(a, b, c, e, f);
			d = n;
			f = {};
			for(g = 0; g < e[I]; g++) {
				var i = e[g],
					j = a[g],
					m = (j[Hc] - j.top - i.ui) / b,
					o = (j[P] - j[Hc] - i.vi) / c,
					m = s[B](m + 0.1),
					o = s[B](o + 0.1),
					q = m < i.Nd || o < i.we,
					d = d || q;
				f[i.Ef] = {
					y: j[Hc],
					Nd: m,
					we: o,
					Vk: q
				}
			}
			return {
				Ed: f,
				Vk: d
			}
		}

		function ox(a, b, c, d, e) {
			var f = nq(d, function(a) {
					return {
						anchor: a.Vd,
						top: a.Vd - (a.Nd * b + a.ui),
						bottom: a.Vd + (a.we * c + a.vi)
					}
				}),
				g = [];
			g[v](function(b, c) {
				var d = b[c].top;
				return 0 == c ? {
					top: s.max(a.top - d, 0)
				} : {
					top: s.max(b[Gp(c) - 1][P] - d, 0) / 2
				}
			});
			g[v](function(b, c) {
				var e = b[c][P];
				return c == d[I] - 1 ? {
					bottom: s.min(a[P] - e, 0)
				} : {
					bottom: s.min(b[Gp(c) + 1].top - e, 0) / 2
				}
			});
			g[v](function(a, c, f) {
				var g = a[c][Hc] - a[c].top,
					a = s.max(-g, 0),
					c = s.max(d[c].Nd * b + d[c].ui - s.max(g, 0), 0),
					f = (a + c * (e ? 1 : f)) / 2;
				return {
					anchor: f,
					top: -f
				}
			});
			g[v](function(a, b,
				f) {
				var g = a[b][P] - a[b][Hc],
					a = s.max(-g, 0),
					b = s.max(d[b].we * c + d[b].vi - s.max(g, 0), 0),
					f = (a + b * (e ? 1 : f)) / 2;
				return {
					anchor: -f,
					bottom: f
				}
			});
			g[v](function(a, b) {
				var c = a[b][Hc],
					e = d[b];
				return {
					anchor: pr(c, e.rp[O], e.rp.end) - c
				}
			});
			e && g[v](function(a, b, c) {
				return {
					anchor: (d[b].Vd - a[b][Hc]) * c
				}
			});
			var i = gv(f, g, function(a, b) {
				return {
					anchor: a[Hc] + (b[Hc] || 0),
					top: a.top + (b.top || 0),
					bottom: a[P] + (b[P] || 0)
				}
			}, function(a, b) {
				return s.max(s.abs(a[Hc] - b[Hc]), s.abs(a.top - b.top), s.abs(a[P] - b[P]))
			}, 0.999);
			return Op(d, function(a, b) {
				var c = i[b];
				return {
					anchor: c[Hc],
					top: c.top,
					bottom: c[P]
				}
			})
		}

		function px(a, b) {
			var c = Tp(a, function(a) {
				return a[ic] == b
			});
			if(0 > c) return {};
			var d = {};
			d[c] = {
				bn: 4,
				Ha: new wt({
					stroke: Se,
					Qa: 2,
					vd: 0.7
				})
			};
			return d
		};

		function qx(a, b, c, d) {
			for(var e = 0; e < a[dc](); e++) 0 > a[H](e, 1) && h(r("Negative values are invalid for a pie chart."));
			this.D = a;
			this.k = b;
			this.ra = c;
			this.bf = b.R(ei, Fu);
			this.h = d;
			this.h.jc = ym;
			this.h.dn = this.k.za(Wn, n)
		}
		V = qx[K];
		V.tn = function() {
			var a = this.h;
			this.D[Fb](0) != pn && a.lj && h(r("Pie chart should have a first column of type string"));
			var b = this.Sj();
			this.Yr(b.ea.Hb, b.ea.ka, b.ea.ua, b.ea[Q]);
			b.f ? a.f.pb = b.f : a.f[fc] == jh ? a.f.pb = this.Wr() : a.f[fc] == gk && this.Xr(a.a, b, a.f.t, a.e)
		};
		V.Vm = function(a) {
			var b = this.h,
				c = {},
				d = this.k.Uc(Hl, S),
				e = a[tb],
				f = a.wf,
				a = a.si,
				g;
			b.Te ? (b = e, g = f, d = a) : g = b = d;
			c.br = new wt({
				stroke: b,
				Qa: 1,
				fill: e,
				rb: 1
			});
			c.wf = new wt({
				stroke: g,
				Qa: 1,
				fill: f,
				rb: 1
			});
			c.si = new wt({
				stroke: d,
				Qa: 1,
				fill: a,
				rb: 1
			});
			return c
		};
		V.Wr = function() {
			var a = this.h,
				b = a[Q] - a.a[P],
				c = a.f.t[M],
				d = [];
			d[v]({
				min: 2,
				T: [p]
			});
			var e = d[I];
			d[v]({
				min: c + 2,
				T: [p]
			});
			b = Yu(d, b);
			return b[I] > e ? (e = a.a[P] + b[e], new hs(e - c, a.a[R], e, a.a[C])) : l
		};
		V.Sj = function() {
			var a = this.h,
				b = a.a,
				c = a.f[fc],
				d = l,
				e = l,
				d = s[z](1.618 * a.uc),
				f = s[z](b[w] * (1 - 1 / 1.618) - d);
			c == hk ? (e = new hs(b.top, b[C] + f, b[P], b[C]), d = new hs(b.top, b[R], b[P], e[R] + d)) : c == hm ? (e = new hs(b.top, b[R], b[P], b[R] - f), d = new hs(b.top, e[C] - d, b[P], b[C])) : d = new hs(b.top, b[R], b[P], b[C]);
			var b = 0,
				c = s.min(d[R] - d[C], d[P] - d.top),
				f = c = s[B](c / 2),
				g = s[z]((d[R] + d[C]) / 2),
				d = s[z]((d[P] + d.top) / 2);
			a.Te && (f *= 0.8, b = c / 5, d -= b / 2);
			return {
				ea: {
					Hb: new wr(g, d),
					ka: c,
					ua: f,
					height: b
				},
				f: e
			}
		};
		V.Yr = function(a, b, c, d) {
			for(var e = this.h, f = this.D, g = Aw(this.k.Uc(Fl, S)), i = this.Vm(g), j = this.k.vc(Jl, {
					zb: e.Tc,
					fontSize: e.uc
				}), m = this.k.ia(Il, yu, Bl), o = this.k.ia(Xn, zu, ih), q = this.k.da(Wm, 1 / 720), u = this.k.za(Ci), y = this.k.Hc(Gl, Of), D = this.k.da(El, 0), Y = 0, L = 0; L < f[dc](); L++) Y += f[H](L, 1) || 0;
			var X = 0,
				G = 0;
			e.e = [];
			e.$c = [];
			for(L = 0; L < f[dc](); ++L) {
				var aa = f[H](L, 1) || 0,
					na = f[Xc](L, 1),
					jb = f[H](L, 0),
					Da = f[Xc](L, 0),
					cc = G / Y,
					Sp = cc + aa / Y,
					rl = Sp - cc >= q;
				rl ? G += aa : X += aa;
				var Lf = Xm + L,
					ch = this.k.R(Lf + oe, this.bf[L % this.bf[I]]),
					ch = Aw(ch),
					qy =
					this.Vm(ch),
					ry = this.k.be(Lf + se, 0),
					sy = this.k.da(Lf + re, D),
					ty = this.k.vc(Lf + ue, j),
					aa = this.Um(L, cc, Sp, aa, na, Da, rl, a, b, c, sy, d, ry, m, ty, o, ch, qy);
				aa.z = this.k.za(Lf + pe, k);
				e.e[v](aa);
				this.k.za(Lf + we, rl || u) && e.$c[v]({
					id: jb,
					text: Da,
					b: new wt({
						fill: ch[tb]
					}),
					index: L,
					z: aa.z
				})
			}
			f = l;
			0 < X && (Da = y, f = this.Um(l, 1 - X / Y, 1, X, S + X, Da, k, a, b, c, D, d, 0, m, j, o, g, i), u || e.$c[v]({
				text: Da,
				b: new wt({
					fill: g[tb]
				}),
				index: l,
				z: n
			}));
			e.ea = {
				ka: b,
				ua: c,
				Hb: a,
				ej: d,
				zj: f
			}
		};

		function rx(a, b) {
			switch(b) {
				case Bl:
					return a.lk;
				case Ho:
					return a.rn;
				case ih:
					return a.rn + jd + a.lk + fe
			}
		}
		V.Um = function(a, b, c, d, e, f, g, i, j, m, o, q, u, y, D, Y, L, X) {
			q = this.h;
			if(q.Te || 1 <= o) o = 0;
			var G = {},
				aa = c - b;
			G.value = d;
			G.rn = e;
			va(G, L);
			G.cd = X;
			G.b = G.cd.br;
			Ha(G, f);
			La(G, a);
			G.wc = W(a) ? this.D[Jb](a) : l;
			G.B = g;
			a = j * o;
			o *= m;
			G.$f = a;
			G.Ye = o;
			G.ga = 360 * b;
			G.ca = 360 * c;
			d = 2 * s.PI * (b - 0.25);
			f = 2 * s.PI * (c - 0.25);
			G.lk = s[z](1E3 * aa) / 10 + Yd;
			L = S;
			switch(y) {
				case Bl:
					L = G.lk;
					break;
				case ek:
					L = G[J];
					break;
				case Ho:
					L = e
			}
			pa(G, L);
			if(!g) return G;
			G.t = D;
			e = this.ra(G[x], D)[w];
			g = D[M];
			G.Bh = new lq(e, g);
			G.Xc = 1 == aa;
			if(G[x])
				if(G.Xc) G.oj = yr(i, new wr(e / 2, g / 2)), G.nj = k;
				else {
					D =
						j - g;
					aa = m - g;
					e = G.Bh;
					e = new lq(e[w] / D, e[Q] / aa);
					g = new lq(2 / D, 2 / aa);
					y = lv((d + f) / 2 + s.PI, 1, 1);
					b: {
						for(var L = nv(new wr(0, 0), e), X = 1, na = s.min, jb = 0; jb < L[I]; ++jb) {
							var Da;
							var cc = L[jb];
							Da = y.x * cc.x + y.y * cc.y;
							cc = Da * Da + 1 - cc.Tr();
							0 > cc ? Da = l : (cc = s[Ib](cc), Da = [Da - cc, Da + cc]);
							if(ip(Da) || 0 > Da[1]) {
								L = l;
								break b
							}
							X = na(X, Da[1])
						}
						L = X
					}
					if(W(0.4) && 0.4 > L) e = l;
					else {
						y = y[Dc]()[Rc](-L);
						e = kv(e, g, g);
						b: {
							e = nv(y, e);g = qr(f - d, 2 * s.PI);L = 0;X = g;
							for(na = 0; na < e[I]; ++na) {
								jb = qr(s[Db](e[na].y, e[na].x) - d, 2 * s.PI);
								if(jb >= g || 0 == jb) {
									e = n;
									break b
								}
								X = s.min(jb, X);
								L =
									s.max(jb, L)
							}
							e = L - X < s.PI
						}
						e = e ? y : l
					}
					D = e && new wr(e.x * D, e.y * aa);
					if(!ip(D)) G.nj = k, G.oj = jv(i, D, new wr(-G.Bh[w] / 2, -G.Bh[Q] / 2))
				}
			else G.nj = n;
			G.Yc = lv((d + f) / 2, j, m)[Rc](u);
			u = lv(f, j, m);
			G.Ba = xr(i, lv(d, j, m));
			G.Ib = xr(i, u);
			m = lv(f, a, o);
			G.jm = xr(i, lv(d, a, o));
			G.km = xr(i, m);
			if(q.Te && 270 >= G.ga && 90 <= G.ca) m = {}, 90 > G.ga ? (m.ga = 90, m.Ba = new wr(i.x + j, i.y)) : (m.ga = G.ga, m.Ba = G.Ba), 270 < G.ca ? (m.ca = 270, m.Ib = new wr(i.x - j, i.y)) : (m.ca = G.ca, m.Ib = G.Ib), m.b = G.cd.wf, G.C = m;
			G.xd = q.Te && 0.5 < b;
			G.ce = q.Te && 0.5 > c;
			if(G.xd || G.ce) G.sh = G.cd.wf;
			G.Xf = {
				lf: G[J],
				content: rx(G, Y)
			};
			return G
		};
		V.Xr = function(a, b, c) {
			for(var d = this.h, e = b.ea.ka, f = b.ea.ua, g = b.ea.Hb, i = this.k.ia(kk, zu, Bl), j = s.PI * (3 * (e + f) - s[Ib]((3 * e + f) * (e + 3 * f))), m = [], o = [], q = 0; q < d.$c[I]; ++q) {
				var u = d.$c[q],
					y;
				y = u[ic] != l ? d.e[u[ic]] : d.ea.zj;
				var D = s.max((e + y.$f) / 2, 0.75 * e),
					Y = s.max((f + y.Ye) / 2, 0.75 * f),
					L = (y.ca + y.ga) / 2,
					X = 360 * (ur(e - D, f - Y) / j),
					G, aa;
				2 * X < y.ca - y.ga ? (G = y.ga + X, aa = y.ca - X, 180 > L ? aa = s.min(aa, 180) : G = s.max(G, 180)) : aa = G = L;
				var na = function(a) {
						return xr(g, lv(a, D, Y))
					},
					X = function(a) {
						return na(s.asin(pr((a - g.y) / Y, -1, 1)))
					},
					jb = function(a) {
						return na(s.PI -
							s.asin(pr((a - g.y) / Y, -1, 1)))
					},
					u = {
						hr: na(sr(L - 90)).y,
						Lh: new pt(na(sr(G - 90)).y, na(sr(aa - 90)).y),
						ef: u[x],
						ff: rx(y, i),
						Zm: y[nb],
						z: u.z,
						index: y[ic]
					};
				180 > L ? (u.ym = X, m[v](u)) : (u.ym = jb, o[v](u))
			}
			b = a[w] / 2 - b.ea.ka - c[M];
			m = lx(new hs(a.top, a[R], a[P], a[R] - b), this.ra, 2, c, m);
			a = lx(new hs(a.top, a[C] + b, a[P], a[C]), this.ra, 1, c, o);
			c = [];
			Zp(c, m, a);
			this.h.Bc = c
		};

		function sx(a, b, c, d, e) {
			this.jj = a;
			this.D = l;
			this.k = b;
			this.ra = c;
			var f = this.h = {};
			f.tc = c;
			oa(f, d);
			Ua(f, e);
			f.N = b.ia(po, ou, U);
			f.Tc = b.Hc(cj);
			f.uc = b.da(dj, s[z](s.pow(2 * (f[w] + f[Q]), 1 / 3)));
			f.fm = b.ia(Dm, pu, Ak);
			f.mj = b.vc(Yn, {
				zb: f.Tc,
				fontSize: f.uc
			});
			f.Ic = b.ia(Zn, Cu, Hj);
			f.vh = b.ia(um, Vt, Mm);
			f.cj = b.zh(Mg);
			f.bj = b.zh(Ig);
			f.Eq = b.Uc(Rg, S);
			f.Fq = b.Uc(vj, S);
			f.Se = At(f.bj, f.cj) || S;
			c = {
				zb: f.Tc,
				fontSize: f.uc,
				$a: f.Se
			};
			f.Cq = b.vc(zg, c);
			f.Dq = b.vc(wg, c);
			f.Iq = b.Uc(xg, S);
			c = b.Hc(Nn);
			f.Pe = b.ia(Qn, vu, ol);
			d = b.vc(Rn, {
				zb: f.Tc,
				fontSize: f.uc,
				$a: f.Pe == Pj ? f.Se : U
			});
			Ha(f, {
				text: c,
				t: d,
				d: [],
				Za: fn,
				Pa: Ni,
				K: S
			});
			f.Vf = b.ia(Jg, vu, ol);
			f.Te = b.za($j);
			f.Qe = b.za(Wj);
			f.ae = b.ia(Vj, Au, yi);
			f.z = this.k.za(Mi, k);
			f.lj = this.k.za(on, k) || a.getColumnProperty(0, jm) == Fi;
			this.xj();
			f.ae == Ei && (!f.gb || f.gb.line != f.e[I]) && h(r("DIVE interactivity model is only supported when all series are of type line."))
		}
		V = sx[K];
		V.Gg = function() {
			return this.h
		};
		V.xj = function() {
			var a = this.h;
			this.$r();
			this.Sj();
			var b = l,
				c = hm;
			a.N == Dl ? b = new qx(this.D, this.k, this.ra, a) : (b = new fx(this.D, this.k, this.ra, a), b.xm() && (c = io));
			var c = this.k.ia(nk, tu, c),
				d = this.k.vc(sk, {
					zb: a.Tc,
					fontSize: a.uc,
					$a: c == Pj ? a.Se : U
				});
			a.f = {
				position: c,
				t: d,
				pb: l,
				ha: l,
				kc: l,
				qg: l
			};
			b.tn();
			this.Nj = new kx(a, this.k);
			this.bs();
			a.f.pb && this.Nj.as()
		};
		V.qi = function(a, b, c) {
			var d = NaN,
				e = a.Mc(b);
			W(e) ? d = e : (a = a.hi(b), W(a) && (a = yp(a), b = a[I] - 1, 0 <= b && a[sb](Yd, b) == b && (d = a[I] - 1, b = a, 0 <= d && d < a[I] && (b = a[Zb](0, d) + a[Zb](d + 1, a[I] - d - 1)), a = Gp(b), d = c * a / 100)));
			return d = s[z](pr(d, 0, c))
		};
		V.$r = function() {
			var a = this.h,
				b = this.jj,
				c = new google[wc].DataView(b);
			if(a.N != rm && a.N != oh) {
				var d = b[mb](),
					e = l,
					f = l;
				if(0 < d) {
					b.getColumnProperty(0, jm);
					var g = b[Fb](0);
					if(!a.lj && g != pn && (1 == d || g == b[Fb](1))) e = {
						calc: Li,
						type: pn
					}, f = 0
				}
				if(W(e)) {
					for(a = [e]; f < d; f++) a[v](f);
					c.setColumns(a)
				}
			}
			2 > c[mb]() && h(r("Not enough columns given to draw the requested chart."));
			if(this.k.za(fm)) {
				d = [];
				for(f = b[dc]() - 1; 0 <= f; f--) d[v](f);
				c.setRows(d)
			}
			this.D = c
		};
		V.mo = function(a, b, c, d) {
			ka(b) && (b = d());
			ka(a) && (a = s[z]((c - b) / 2));
			b = s.min(a + b, c);
			return {
				start: a,
				end: b
			}
		};
		V.Sj = function() {
			var a = this.h,
				b = this.qi(this.k, Kh, a[w]),
				c = this.qi(this.k, Hh, a[Q]),
				d = this.qi(this.k, Jh, a[Q]),
				e = this.qi(this.k, Ih, a[w]),
				f = Z(function() {
					var b = a[w] / 1.618,
						c = a[w] - a[Q] * (1.618 - 1);
					return s[z](b > c ? b : (b + 2 * c) / 3)
				}, this),
				e = this.mo(e, b, a[w], f),
				b = s.min(e[O], e.end),
				e = e.end,
				f = e - b,
				g = Z(function() {
					var b = a[Q] / 1.618,
						c = a[Q] - a[w] * (1.618 - 1);
					return s[z](b > c ? b : (b + 2 * c) / 3)
				}, this),
				d = this.mo(d, c, a[Q], g),
				c = s.min(d[O], d.end),
				d = d.end;
			a.a = {
				left: b,
				right: e,
				width: f,
				top: c,
				bottom: d,
				height: d - c
			}
		};
		V.bs = function() {
			var a = this.h,
				b = a[J].t[M],
				c = a.f.t[M],
				d = a.f[fc],
				e = a.Pe == ol ? a[J][x] : S,
				f = Iu(this.ra, e, a[J].t, a.a[w], p),
				g = s.max(2, s[z](b / 3.236)),
				i = s.max(2, s[z](c / 1.618)),
				j = s.max(2, s[z](1.618 * a.uc)),
				m = [];
			m[v]({
				key: kh,
				min: 2,
				T: [j - 2]
			});
			m[v]({
				key: jo,
				min: 0,
				T: [p]
			});
			0 < f.d[I] && m[v]({
				key: Nn,
				min: b + 2,
				T: []
			});
			if(d == io) {
				j = this.Nj.Vr(a.a[w]);
				for(d = 0; d < j; ++d) m[v]({
					key: ik,
					min: c + 2,
					T: [i - 2]
				})
			}
			for(d = 1; d < f.d[I]; d++) m[v]({
				key: Nn,
				min: b + 2,
				T: [g - 2]
			});
			f = Zu(m, a.a.top);
			b = f[jo][0] || 0;
			g = f[J] || [];
			i = Iu(this.ra, e, a[J].t, a.a[w], g[I]);
			for(d =
				0; d < i.d[I]; d++) b += g[d], a[J].d[v]({
				text: i.d[d],
				x: a.a[C],
				y: b,
				length: a.a[w]
			});
			a[J].K = i.aa ? e : S;
			e = f.legend || [];
			if(0 < e[I]) this.Nj.mg = e[I], c = b + e[0] - c, b += tr[Uc](l, e), a.f.pb = new hs(c, a.a[R], b, a.a[C])
		};

		function tx(a, b) {
			this.tg = a;
			this.ug = b;
			this.Ab = sq(a);
			if(this.Ab.ta) this.Ab.ta = Op(this.Ab.ta, sq), this.Nm = Uu(a.ta[I], function(c) {
				return ux(a.ta[c], b.ta[c], this.Ab.ta[c], k, n)
			}, this);
			if(this.Ab.Ka) this.Ab.Ka = Op(this.Ab.Ka, sq), this.Om = Uu(a.Ka[I], function(c) {
				return ux(a.Ka[c], b.Ka[c], this.Ab.Ka[c], n, k)
			}, this);
			this.rf = this.Fd = l;
			this.vu();
			this.Rh = this.Wj = l;
			this.uu()
		}

		function ux(a, b, c, d, e) {
			var f = sq(a),
				g = sq(a);
			if(a.L && b.L) {
				if(a.V && b.V) g.V = b.V, c.V = sq(c.V);
				var i = a.L.mc,
					j = b.L.mc;
				g.L = sq(g.L);
				c.L = sq(c.L);
				g.L.mc = j;
				if(a.kb && b.kb) {
					g.kb = Yp(g.kb);
					c.kb = Yp(c.kb);
					for(var m = g.kb, o = c.kb, q = 0; q < m[I]; q++) {
						m[q] = sq(m[q]);
						o[q] = sq(o[q]);
						var u = m[q];
						u.u = j(u.fa)
					}
				}
				if(a[x] && b[x]) {
					pa(g, Yp(g[x]));
					pa(c, Yp(c[x]));
					m = g[x];
					c = c[x];
					vx(m);
					vx(c);
					for(q = 0; q < m[I]; q++) wx(a[x][q], b[x][q], i, j, m[q], d, e)
				}
			} else if(a[x] && b[x]) {
				var y = dv(a[x], b[x], function(a, b) {
					return a.fa == b.fa
				});
				pa(f, Np(a[x], function(a, b) {
					return W(y.ng[b])
				}));
				pa(g, Np(b[x], function(a, b) {
					return W(y.og[b])
				}));
				pa(c, Yp(f[x]));
				vx(f[x]);
				vx(g[x]);
				vx(c[x])
			}
			return [f, g]
		}

		function wx(a, b, c, d, e, f, g) {
			b = e.o;
			c = c(e.fa);
			d = d(e.fa);
			if(f) f = a.o[Hc].x - c, b[Hc].x = d + f;
			if(g) f = a.o[Hc].y - c, b[Hc].y = d + f
		}

		function vx(a) {
			Mp(a, function(b, c) {
				a[c] = sq(a[c]);
				b = a[c];
				b.o = sq(b.o);
				var d = b.o;
				d[Hc] && Qa(d, sq(d[Hc]))
			})
		}
		V = tx[K];
		V.vu = function() {
			var a = this.tg,
				b = this.ug;
			if(a.e && b.e) {
				var c = dv(a.e, b.e, function(a, b) {
					return a.id == b.id
				});
				this.Fd = Np(a.e, function(a, b) {
					return W(c.ng[b])
				});
				this.rf = Np(b.e, function(a, b) {
					return W(c.og[b])
				});
				a.N == T || a.N == rm ? (a = a[Qb] == Gj ? a.ta[0] : a.Ka[0], a.L ? this.at(a.L.sg, a.L.Pq) : this.bt()) : a.N == oh && this.$s()
			}
		};
		V.bt = function() {
			var a = this.tg.v,
				b = this.ug.v;
			if(a && b) {
				for(var c = dv(a, b, function(a, b) {
						return a[A] == b[A]
					}), d = 0, e = 0, f = [], g = []; d < a[I] || e < b[I];) d < a[I] && !W(c.ng[d]) ? (g[v]({
					Ae: {
						Sc: d,
						Kf: k
					},
					Be: {
						Sc: e,
						Kf: n
					}
				}), f[v]({
					data: a[d][A]
				}), d++) : (e < b[I] && !W(c.og[e]) ? (g[v]({
					Ae: {
						Sc: d,
						Kf: n
					},
					Be: {
						Sc: e,
						Kf: k
					}
				}), f[v]({
					data: b[e][A]
				})) : (g[v]({
					Ae: {
						Sc: d,
						Kf: k
					},
					Be: {
						Sc: e,
						Kf: k
					}
				}), f[v]({
					data: a[d][A]
				}), d++), e++);
				this.Ab.v = f;
				this.mi(g, function(a, b) {
					return b.Kf ? a[b.Sc] : 0 == b.Sc ? a[0] : b.Sc >= a[I] ? Jp(a) : xx(a[b.Sc - 1], a[b.Sc], 0.5)
				})
			}
		};
		V.at = function(a, b) {
			var c = this.tg.v,
				d = this.ug.v;
			if(c && d)
				if(0 == c[I] || 0 == d[I]) this.Ab.v = [], this.mi([], function() {
					return l
				});
				else {
					for(var e = function(b) {
							return a(b[A])
						}, f = ev(c, d, e), g = ev(d, c, e), i = 0, j = 0, m = [], o = []; i < c[I] || j < d[I];) i < c[I] && (f[i] < j || j < d[I] && g[j] > i) ? (o[v]({
						Ae: i,
						Be: f[i]
					}), m[v]({
						data: c[i][A]
					}), i++) : (j < d[I] && (i < c[I] && f[i] > j || g[j] < i) ? (o[v]({
						Ae: g[j],
						Be: j
					}), m[v]({
						data: d[j][A]
					})) : (o[v]({
						Ae: i,
						Be: j
					}), m[v]({
						data: b(ur(e(c[i]), e(d[j])))
					}), i++), j++);
					this.Ab.v = m;
					this.mi(o, function(a, b) {
						return a[b]
					})
				}
		};
		V.$s = function() {
			for(var a = this.tg.e[0].c, b = this.ug.e[0].c, c = dv(a, b, function(a, b) {
					return !a && !b ? k : !a || !b ? n : a.id == b.id
				}), d = 0, e = 0, f = []; d < a[I] || e < b[I];)
				if(d < a[I] && !W(c.ng[d])) d++;
				else {
					if(!(e < b[I]) || W(c.og[e])) f[v]({
						Ae: d,
						Be: e
					}), d++;
					e++
				}
			this.mi(f, function(a, b) {
				return a[b]
			})
		};
		V.mi = function(a, b) {
			for(var c = 0; c < this.Fd[I]; c++) {
				for(var d = this.Fd[c].c, e = this.rf[c].c, f = [], g = [], i = 0; i < a[I]; i++) {
					var j = a[i];
					f[v](b(d, j.Ae));
					g[v](b(e, j.Be))
				}
				this.Fd[c] = yx(this.Fd[c], f);
				this.rf[c] = yx(this.rf[c], g)
			}
		};

		function yx(a, b) {
			var c = sq(a);
			c.c = b;
			return c
		}
		V.uu = function() {
			var a = this.tg,
				b = this.ug;
			if(a.f && a.f.ha && b.f && b.f.ha) {
				var a = a.f.ha[0],
					b = b.f.ha[0],
					c = dv(a, b, function(a, b) {
						return a.id == b.id
					});
				this.Wj = Np(a, function(a, b) {
					return W(c.ng[b])
				});
				this.Rh = Np(b, function(a, b) {
					return W(c.og[b])
				});
				this.Ab.f = sq(this.Ab.f);
				b = this.Ab.f;
				b.kc = Yp(this.Rh);
				b.ha = [b.kc];
				b = b.kc;
				for(a = 0; a < b[I]; ++a) {
					b[a] = sq(b[a]);
					var d = b[a];
					if(d.o && (d.o = sq(d.o), d.o.d)) {
						d.o.d = Yp(d.o.d);
						for(var e = 0; e < d.o.d[I]; e++) d.o.d[e] = sq(d.o.d[e])
					}
					if(d.P && (d.P = sq(d.P), d.P.S)) d.P.S = d.P.S[Dc]();
					if(d.ba && (d.ba =
							sq(d.ba), d.ba.S)) d.ba.S = sq(d.ba.S)
				}
			}
		};

		function zx(a, b, c) {
			if(a !== b)
				if(a && a[sc] == wt && b && b[sc] == wt) a = new wt({
					fill: st(a.O, b.O, 1 - c),
					rb: zx(a.$b, b.$b, c),
					stroke: st(a.Jb, b.Jb, 1 - c),
					Qa: zx(a.H, b.H, c),
					vd: zx(a.nc, b.nc, c),
					io: a.jd,
					F: a.F,
					pattern: a.Ea
				});
				else if(jp(a) && jp(b))
				if(a) {
					if(b) {
						for(var d = [], e = s.min(a[I], b[I]), f = 0; f < e; f++) d[v](zx(a[f], b[f], c));
						a = d
					}
				} else a = b;
			else a = mp(a) && mp(b) ? Ax(a, b, c) : op(a) && op(b) ? a * (1 - c) + b * c : l;
			return a
		}

		function Ax(a, b, c) {
			if(!a) return b;
			if(!b) return a;
			var d = {};
			mq(a, function(e, f) {
				hp(b[f]) && (d[f] = zx(a[f], b[f], c))
			});
			return d
		}

		function Bx(a, b, c, d, e) {
			b = !e || (c ? b >= c.top && b <= c[P] : n);
			return(!d || (c ? a >= c[C] && a <= c[R] : n)) && b
		}

		function Cx(a, b, c, d, e) {
			if(a.L && a.L.mc && b.L && b.L.mc) c.L.mc = function(c) {
				var d = a.L.mc(c),
					c = b.L.mc(c);
				return zx(d, c, e)
			};
			if(a.V && b.V) c.V.u = zx(a.V.u, b.V.u, e);
			a.kb && b.kb && Mp(c.kb, function(c, g) {
				c.u = zx(a.kb[g].u, b.kb[g].u, e);
				c.B = d(c.u, c.u)
			});
			a[x] && b[x] && Mp(c[x], function(c, g) {
				if(c) {
					var i = a[x][g].o,
						j = b[x][g].o,
						m = c.o;
					if(m && m[Hc]) m[Hc].x = zx(i[Hc].x, j[Hc].x, e), m[Hc].y = zx(i[Hc].y, j[Hc].y, e);
					if(c.o) c.B = d(c.o[Hc].x, c.o[Hc].y)
				}
			})
		}

		function xx(a, b, c) {
			if(!a || !b) return l;
			var d = sq(a);
			if(hp(a.i) && hp(b.i)) d.i = zx(a.i, b.i, c);
			if(hp(a.ld) && hp(b.ld)) d.ld = zx(a.ld, b.ld, c);
			if(hp(a.md) && hp(b.md)) d.md = zx(a.md, b.md, c);
			return d
		}
		V.Ut = function(a) {
			var b = this.Ab;
			if(b.ta) {
				var c = function(a, c) {
					return Bx(a, c, b.a, k, n)
				};
				Mp(b.ta, function(b, d) {
					Cx(this.Nm[d][0], this.Nm[d][1], b, c, a)
				}, this)
			}
			if(b.Ka) {
				var d = function(a, c) {
					return Bx(a, c, b.a, n, k)
				};
				Mp(b.Ka, function(b, c) {
					Cx(this.Om[c][0], this.Om[c][1], b, d, a)
				}, this)
			}
			if(this.Fd && this.rf) {
				b.e = [];
				for(var e = 0; e < this.Fd[I]; ++e) {
					var f = this.Fd[e],
						g = this.rf[e],
						i = sq(g);
					if(f && g && f.c && g.c && f[F] == g[F]) {
						i.c = [];
						for(var j = 0; j < f.c[I]; j++) i.c[j] = xx(f.c[j], g.c[j], a)
					}
					b.e[e] = i
				}
			}
			if(this.Wj && this.Rh && b.f && b.f.kc)
				for(e =
					0; e < b.f.kc[I]; e++) {
					f = b.f.kc[e];
					g = this.Wj[e];
					i = this.Rh[e];
					if(f.o && f.o.d && g.o && g.o.d && 0 != g.o.d[I] && i.o && i.o.d)
						for(var m = f.o.d, o = g.o.d, q = i.o.d, u = o[I], j = 0; j < m[I]; j++) {
							var y = j < u ? o[j] : o[u - 1];
							m[j].x = zx(y.x, q[j].x, a);
							m[j].y = zx(y.y, q[j].y, a)
						}
					if(f.P && f.P.S && g.P && g.P.S && i.P && i.P.S) j = zx(g.P.S, i.P.S, a), f.P.S = new js(j[C], j.top, j[w], j[Q]);
					if(f.ba && f.ba.S && g.ba && g.ba.S && i.ba && i.ba.S) f.ba.S = zx(g.ba.S, i.ba.S, a)
				}
			return b
		};

		function Dx(a, b) {
			var c = new Et,
				d = a.eb;
			if(0 == d[I] || 1 == d[I]) return c;
			for(var e = [l], f = 0; f < d[I]; f++) {
				var g = d[f];
				g[A] && e[v](new $(g[A].x, g[A].y))
			}
			e[v](l);
			var g = d[d[I] - 1][F] == Vh,
				f = e[1][Dc](),
				i = e[2][Dc](),
				j = e[e[I] - 3][Dc](),
				m = e[e[I] - 2][Dc]();
			g ? (e[0] = m, e[e[I] - 1] = f) : iq(f, m) ? (e[0] = j, e[e[I] - 1] = i) : (e[0] = (new vr(f.x, f.y, i.x, i.y)).Ep(-1), e[e[I] - 1] = (new vr(m.x, m.y, j.x, j.y)).Ep(-1));
			for(var i = 0 > b, o = Ex(e[0], e[1], b), j = e[I] - 2, f = 1; f <= j; f++) {
				var m = Ex(e[f], e[f + 1], b),
					q = Fx(o, m),
					u;
				if(mp(q)) {
					u = Fx(Gx(e[f - 1], e[f]), o);
					var y = Fx(Gx(e[f],
						e[f - 1]), o);
					u = qt(new pt(u.x, y.x), q.x) && qt(new pt(u.y, y.y), q.y)
				} else u = q == p;
				o = u && q != p ? q : Fx(Gx(e[f], e[f - 1]), o);
				c.ac(Hx(d[f - 1], o));
				u || (o = 180 - 180 * s[Db](o.x - e[f].x, o.y - e[f].y) / s.PI, q = Fx(Gx(e[f], e[f + 1]), m), c.jb(e[f].x, e[f].y, s.abs(b), s.abs(b), o, 180 - 180 * s[Db](q.x - e[f].x, q.y - e[f].y) / s.PI, i));
				o = m
			}
			g && c[Ac]();
			return c
		}

		function Hx(a, b) {
			var c = tq(a);
			switch(a[F]) {
				case Zk:
				case Ak:
					c[A].x = b.x;
					c[A].y = b.y;
					break;
				case ji:
					c[A].x = b.x;
					c[A].y = b.y;
					var d = b.x - a[A].x,
						e = b.y - a[A].y;
					c[A].Cb += d;
					c[A].Db += e;
					c[A].gd += d;
					c[A].hd += e
			}
			return c
		}

		function Ex(a, b, c) {
			var d, e = (b.y - a.y) / (b.x - a.x);
			d = !ia(e) ? {
				Oe: p,
				Gc: a.x
			} : {
				Oe: e,
				Gc: a.y - e * a.x
			};
			e = d.Oe;
			d = d.Gc;
			if(e == p) return {
				Oe: p,
				Gc: 0 > b.y - a.y ? d + c : d - c
			};
			c *= s[Ib](1 + e * e);
			return {
				Oe: e,
				Gc: 0 < b.x - a.x ? d + c : d - c
			}
		}

		function Gx(a, b) {
			var c = (a.x - b.x) / (b.y - a.y),
				d;
			ia(c) ? d = a.y - c * a.x : (c = p, d = a.x);
			return {
				Oe: c,
				Gc: d
			}
		}

		function Fx(a, b) {
			var c = a.Oe,
				d = a.Gc,
				e = b.Oe,
				f = b.Gc;
			ia(c) || (c = p);
			ia(e) || (e = p);
			if(rt(c, e)) return rt(d, f) ? p : l;
			if(c == p) return new $(d, e * d + f);
			if(e == p) return new $(f, c * f + d);
			var g = e - c;
			return new $(-(f - d) / g, (d * e - c * f) / g)
		};

		function Ix() {
			this.Ub = {};
			this.Tb = {};
			this.Vb = {}
		}
		V = Ix[K];
		Ba(V, function() {
			this.Ub = {};
			this.Tb = {};
			this.Vb = {}
		});
		Oa(V, function() {
			var a = new Ix;
			a.Ub = sq(this.Ub);
			a.Tb = sq(this.Tb);
			a.Vb = sq(this.Vb);
			return a
		});
		V.Od = function(a) {
			return lu(this.Ub, a.Ub) && lu(this.Tb, a.Tb) && lu(this.Vb, a.Vb)
		};
		V.zq = function(a) {
			var a = a == mm ? this.Ub : this.Tb,
				b = [],
				c;
			for(c in a) b[v](ga(c, 10));
			return b
		};
		V.Bk = function() {
			return this.zq(mm)
		};
		V.Wn = function() {
			return this.zq(fi)
		};
		V.Vn = function() {
			var a = [],
				b;
			for(b in this.Vb) {
				var c = b[qc](ge);
				a[v]({
					row: ga(c[0], 10),
					column: ga(c[1], 10)
				})
			}
			return a
		};
		V.getSelection = function() {
			for(var a = [], b = this.Bk(), c = this.Wn(), d = this.Vn(), e = 0; e < b[I]; e++) {
				var f = {};
				f.row = b[e];
				a[v](f)
			}
			for(e = 0; e < c[I]; e++) f = {}, f.column = c[e], a[v](f);
			for(e = 0; e < d[I]; e++) f = {}, f.row = d[e].row, f.column = d[e].column, a[v](f);
			return a
		};
		V.Wv = function(a, b) {
			return a == mm ? this.Vl(b[0]) : this.Ul(b[0])
		};
		V.Vl = function(a) {
			return this.Ub[S + a] != l
		};
		V.Ul = function(a) {
			return this.Tb[S + a] != l
		};
		V.fq = function(a, b) {
			return this.Vb[S + (a + ge + b)] != l
		};
		V.bm = function(a, b) {
			if(this.Wv(a, b)) return n;
			a == mm ? this.Ub[b[0]] = 1 : a == fi ? this.Tb[b[0]] = 1 : this.Vb[S + (b[0] + ge + b[1])] = 1;
			return k
		};
		V.addRow = function(a) {
			return this.bm(mm, [a])
		};
		V.addColumn = function(a) {
			return this.bm(fi, [a])
		};
		V.Yw = function(a, b) {
			return this.bm(Dh, [a, b])
		};
		V.pk = function(a, b) {
			var c = this.Vl(a);
			b && this[Pb]();
			c ? this.removeRow(a) : this.addRow(a);
			return !c
		};
		V.Zs = function(a, b) {
			var c = this.Ul(a);
			b && this[Pb]();
			c ? this.removeColumn(a) : this.addColumn(a);
			return !c
		};
		V.En = function(a, b, c) {
			var d = this.fq(a, b);
			c && this[Pb]();
			d ? this.$w(a, b) : this.Yw(a, b);
			return !d
		};
		V.removeRow = function(a) {
			if(!this.Vl(a)) return n;
			delete this.Ub[a];
			return k
		};
		V.removeColumn = function(a) {
			if(!this.Ul(a)) return n;
			delete this.Tb[a];
			return k
		};
		V.$w = function(a, b) {
			if(!this.fq(a, b)) return n;
			delete this.Vb[S + (a + ge + b)];
			return k
		};
		V.setSelection = function(a) {
			var b = {},
				c = {},
				d = {};
			a || (a = []);
			for(var e = 0; e < a[I]; e++) {
				var f = a[e];
				f.row != l && f.column != l ? d[S + (f.row + ge + f.column)] = 1 : f.row != l ? b[f.row] = 1 : f.column != l && (c[f.column] = 1)
			}
			var g = this.Qf(b, this.Ub),
				i = this.Qf(c, this.Tb),
				j = this.Qf(d, this.Vb),
				a = this.Qf(this.Ub, b),
				e = this.Qf(this.Tb, c),
				f = this.Qf(this.Vb, d);
			this.Ub = b;
			this.Tb = c;
			this.Vb = d;
			b = new Ix;
			b.Ub = g;
			b.Tb = i;
			b.Vb = j;
			c = new Ix;
			c.Ub = a;
			c.Tb = e;
			c.Vb = f;
			return new Jx(b, c)
		};
		V.Qf = function(a, b) {
			var c = {},
				d;
			for(d in a) b[d] || (c[d] = 1);
			return c
		};

		function Jx(a, b) {
			this.Lx = a;
			this.Mx = b
		};

		function Kx(a) {
			this.selected = new Ix;
			this.s = {
				na: l,
				Xa: l,
				Bb: l
			};
			this.X = {
				na: l,
				Xa: l,
				Bb: l
			};
			this.Ob = {
				s: {
					Md: l,
					w: l
				}
			};
			this.f = {
				s: {
					lc: l
				},
				vf: l
			};
			Ja(this, {
				position: l
			});
			if(a) {
				this[kb][Nb](a[kb]);
				if(a.s) this.s = Lx(this.s, a.s);
				if(a.X) this.X = Lx(this.X, a.X);
				if(a.Ob) this.Ob = Lx(this.Ob, a.Ob);
				if(a.f) this.f = Lx(this.f, a.f)
			}
		}
		Oa(Kx[K], function() {
			var a = new Kx;
			a.selected = this[kb][Dc]();
			a.s = mu(this.s);
			a.X = mu(this.X);
			a.Ob = mu(this.Ob);
			a.f = mu(this.f);
			Ja(a, mu(this[gc]));
			return a
		});
		Kx[K].Od = function(a) {
			return this[kb].Od(a[kb]) && lu(this.s, a.s) && lu(this.X, a.X) && lu(this.Ob, a.Ob) && lu(this.f, a.f) && lu(this[gc], a[gc])
		};

		function Lx(a, b) {
			var c = new ju(2);
			c.Lb(0, a);
			c.Lb(1, b);
			return c[ad]()
		};

		function Mx(a, b, c, d, e) {
			var f = {
				pc: []
			};
			W(e) && f.pc[v]({
				type: dn,
				data: {
					size: b[M] / 2,
					color: e
				}
			});
			W(c) && (W(d) || h(r("Line title is specified without a text style.")), c = {
				type: An,
				data: {
					text: c + Ye,
					style: d
				}
			}, f.pc[v](c));
			c = {
				type: An,
				data: {
					text: a,
					style: b
				}
			};
			f.pc[v](c);
			return f
		}

		function Nx(a, b, c, d, e, f, g) {
			var i;
			for(var j = i = 0; j < a.d[I]; j++)
				for(var m = a.d[j], o = 0; o < m.pc[I]; o++) {
					var q = m.pc[o];
					q[F] == An && (i = s.max(i, q[A][zc][M]))
				}
			i = 0 == i ? g : i;
			for(var u, m = g = j = 0; m < a.d[I]; m++) o = Ox(a.d[m], b), g += o[Q] + (0 < m ? o.Rg : 0), j = s.max(j, o[w]);
			j = s.max(j, 2 * i);
			j = s[z](j + 2 * i / 1.618);
			g = s[z](g + 2 * i / 1.618);
			u = new lq(j, g);
			var j = d.x >= f.x ? 1 : -1,
				m = d.y > f.y ? 1 : -1,
				y = l,
				y = c ? new $(d.x + j * i, d.y + m * (i + u[Q] / 2)) : new $(d.x + j * u[w] / 2, d.y + m * u[Q] / 2),
				o = y.x - u[w] / 2,
				q = o + u[w],
				D = y.y - u[Q] / 2,
				Y = D + u[Q],
				g = {};
			if(c) c = new $(y.x, d.y + i / (i + u[Q] / 2) * (y.y -
				d.y)), y = new $(y.x + -1 * (d.x - y.x), c.y), c.x = s[z](c.x), c.y = s[z](c.y), y.x = s[z](y.x), y.y = s[z](y.y), g.Eb = 1 == j * m ? [c, d, y] : [y, d, c];
			g.p = new hs(s[z](D), s[z](q), s[z](Y), s[z](o));
			d = e[C] + 5;
			c = e[R] - 5;
			if(!(g.p[C] >= d && g.p[R] <= c)) {
				j = tq(g);
				m = j.p[C];
				xa(j.p, f.x + -1 * (j.p[R] - f.x));
				Va(j.p, f.x + -1 * (m - f.x));
				if(m = j.Eb) o = m[0], m[0] = m[2], m[2] = o, m[0].x = f.x + -1 * (m[0].x - f.x), m[1].x = f.x + -1 * (m[1].x - f.x), m[2].x = f.x + -1 * (m[2].x - f.x);
				if(j.p[C] >= d && j.p[R] <= c) g.p = j.p, g.Eb = j.Eb;
				else {
					if(g.Eb && (m = new pt(d + 4, c - 4), o = new pt(j.Eb[0].x, j.Eb[2].x), q = new pt(g.Eb[0].x,
							g.Eb[2].x), !(m[O] <= q[O] && m.end >= q.end) && m[O] <= o[O] && m.end >= o.end)) g.p = j.p, g.Eb = j.Eb;
					g.p[R] > c && (xa(g.p, g.p[C] - (g.p[R] - c)), Va(g.p, c));
					g.p[C] < d && (Va(g.p, g.p[R] + (d - g.p[C])), xa(g.p, d))
				}
			}
			d = e.top + 5;
			e = e[P] - 5;
			if(!(g.p.top >= d && g.p[P] <= e)) {
				c = tq(g);
				j = c.p.top;
				c.p.top = f.y + -1 * (c.p[P] - f.y);
				Ra(c.p, f.y + -1 * (j - f.y));
				if(j = c.Eb) m = j[0], j[0] = j[2], j[2] = m, j[0].y = f.y + -1 * (j[0].y - f.y), j[1].y = f.y + -1 * (j[1].y - f.y), j[2].y = f.y + -1 * (j[2].y - f.y);
				if(c.p.top >= d && c.p[P] <= e) g.p = c.p, g.Eb = c.Eb;
				else {
					g.p[P] > e && (g.p.top -= g.p[P] - e, Ra(g.p, e));
					if(g.p.top < d) Ra(g.p, g.p[P] + (d - g.p.top)), g.p.top = d;
					delete g.Eb
				}
			}
			e = i / 1.618;
			i = g.p;
			f = i[C] + e;
			e = i.top + e;
			i = [];
			for(d = 0; d < a.d[I]; d++) {
				c = a.d[d];
				j = Ox(c, b);
				0 < d && (e += j.Rg);
				m = f;
				o = e + j[Q] / 2;
				for(q = 0; q < c.pc[I]; q++) D = c.pc[q], Y = Px(D, b), 0 < q && (m += Y.Wk), y = o - Y[Q] / 2, i[v]({
					x: s[z](m),
					y: s[z](y),
					item: D
				}), m += Y[w];
				e += j[Q]
			}
			return {
				outline: g,
				Gs: {
					pc: i
				}
			}
		}

		function Ox(a, b) {
			for(var c = 0, d = 0, e = 0, f = 0; f < a.pc[I]; f++) var g = Px(a.pc[f], b),
				c = c + (g[w] + (0 < f ? g.Wk : 0)),
				d = s.max(d, g[Q]),
				e = s.max(e, g[Q] / 2 + g.Rg);
			return {
				width: c,
				height: d,
				Rg: e - d / 2
			}
		}

		function Px(a, b) {
			switch(a[F]) {
				case An:
					return {
						width: b ? b(a[A][x], a[A][zc])[w] : 0,
						height: a[A][zc][M],
						Rg: a[A][zc][M] / 3.236,
						Wk: a[A][zc][M] / 3.236
					};
				case dn:
					var c = a[A][hc];
					return {
						width: c,
						height: c,
						Rg: c,
						Wk: c
					}
			}
		};

		function Qx(a) {
			this.l = a;
			this.Sg = a.mj;
			this.Yk = ot(this.Sg, k)
		}
		V = Qx[K];
		V.gp = function(a) {
			var b = this.l,
				c = {
					d: []
				},
				d = l,
				e = 0,
				f = 1,
				g = b.e[I];
			uv(b) && (e = b.e[I] - 1, g = f = -1);
			for(; e != g; e += f) {
				var i = b.e[e];
				if(d != i.Ad) {
					var d = i.Ad,
						j = this.l.v[a].dj[d];
					/^[\s\xa0]*$/ [Za](j == l ? S : S + j) || this.xk(c, j)
				}
				if(i.c[a] && !i.c[a].ud) j = i.c[a].Xf, this.gi(c, j.lf, j[fb], k, i)
			}
			return c
		};
		V.Zn = function(a, b) {
			var c = {
				d: []
			};
			if(b.d) {
				b[J] && this.xk(c, b[J]);
				for(var d = 0; d < b.d[I]; d++) {
					var e = b.d[d];
					this.fu(c, e[J], e[nb])
				}
			} else b.Hk ? (this.xk(c, b.Hk), this.gi(c, b.lf, b[fb], k, a)) : b.lf ? this.gi(c, b.lf, b[fb], k, a, k) : this.gi(c, l, b[fb], n, a);
			return c
		};
		V.xk = function(a, b) {
			var c = Mx(b, this.Yk);
			a.d[v](c)
		};
		V.gi = function(a, b, c, d, e, f) {
			var g = W(f) ? f : n,
				f = this.l.dn,
				d = d ? this.Yk : this.Sg,
				c = c[qc](gd),
				e = f ? e[tb][tb] : l,
				b = g && W(b) ? Mx(b, this.Sg, l, l, e) : Mx(c[0], d, b, this.Sg, e);
			a.d[v](b);
			for(g = g ? 0 : 1; g < c[I]; g++) e = f ? U : l, b = Mx(c[g], d, l, l, e), a.d[v](b)
		};
		V.fu = function(a, b, c) {
			b && (b = Mx(c, this.Yk, b, this.Sg), a.d[v](b))
		};

		function Rx(a, b) {
			this.l = a;
			this.un = b;
			this.qk = new hs(0, a[w], a[Q], 0);
			this.bo = a.mj[M];
			if(a.N == Dl) {
				var c = a.ea.Hb;
				this.qd = new $(c.x, c.y)
			} else {
				var c = a.ta[0],
					c = W(c.V) ? c.V.u : s.min(c.sb, c.ob),
					d = a.Ka[0],
					d = W(d.V) ? d.V.u : s.max(d.sb, d.ob);
				this.qd = new $(c, d)
			}
		}
		V = Rx[K];
		V.Tq = function(a) {
			this.qk = a
		};
		V.eo = function(a, b) {
			var c = a.i,
				d = 1 + s[db](tv(a, b) / s[Ib](2));
			return new $(c.x + (c.x >= this.qd.x ? d : -d), c.y + (c.y <= this.qd.y ? -d : d))
		};
		V.Rs = function(a) {
			a = a.i.Wf || a.i;
			a = new $(a[C] + (a[C] < this.qd.x ? 0 : a[w]), a.top + (a.top < this.qd.y ? 0 : a[Q]));
			this.Zo(a);
			return a
		};
		V.Ss = function(a) {
			a = a.i[vc];
			a = new $(a[C] + a[w] > this.qd.x ? a[C] + a[w] : a[C], a.top < this.qd.y ? a.top : a.top + a[Q]);
			this.Zo(a);
			return a
		};
		V.Ts = function(a) {
			var b = xr(this.l.ea.Hb, lv(((a.Xc ? 45 : (a.ga + a.ca) / 2) / 180 - 0.5) * s.PI, this.l.ea.ka, this.l.ea.ua)),
				a = new $(b.x + a.Yc.x, b.y + a.Yc.y);
			this.ft(a);
			return a
		};
		V.Js = function(a, b) {
			var c = this.l.e[a],
				d = c[F];
			switch(this.l.N) {
				case T:
					switch(d) {
						case Pg:
						case hn:
							return this.Rs(c.c[b]);
						case Ak:
						case Cg:
							return this.eo(c.c[b], c);
						case wh:
							return this.Ss(c.c[b])
					}
				case rm:
				case oh:
					return this.eo(c.c[b], c);
				case Dl:
					return this.Ts(c)
			}
		};
		V.Zo = function(a) {
			var b = this.l.a;
			a.x = pr(a.x, b[C], b[R]);
			a.y = pr(a.y, b.top, b[P])
		};
		V.ft = function(a) {
			a.x = pr(a.x, 0, this.l[w]);
			a.y = pr(a.y, 0, this.l[Q])
		};
		V.Du = function(a) {
			return new $(a.x - 4 * this.l.ta[0].ag * this.bo, a.y - this.l.Ka[0].ag * this.bo)
		};
		V.xs = function(a) {
			var b = a[C],
				c = a[w],
				d = a.top,
				a = a[Q],
				e = d + a;
			return this.l[Qb] == Gj ? e > this.qd.y ? new $(b + c / 2, e - 0.1) : new $(b + c / 2, d + 0.1) : b < this.qd.x ? new $(b + 0.1, d + a / 2) : new $(b + c - 0.1, d + a / 2)
		};
		V.ys = function(a) {
			var b = xr(this.l.ea.Hb, lv(((a.Xc ? 45 : (a.ga + a.ca) / 2) / 180 - 0.5) * s.PI, this.l.ea.ka - 0.1, this.l.ea.ua - 0.1));
			return new $(b.x + a.Yc.x, b.y + a.Yc.y)
		};
		V.Ks = function(a, b) {
			var c = this.l.e[a];
			if(this.l.N == Dl) return this.ys(c);
			var d = c[F],
				c = c.c[b].i;
			return d == Pg || d == hn || d == wh ? this.xs(c.Wf || c[vc] || c) : new $(c.x, c.y)
		};
		V.Mh = function(a, b) {
			var c = this.l.e[a],
				d = this.l.N == Dl ? c.Xf : c.c[b].Xf,
				e = this.Js(a, b),
				f = this.Ks(a, b);
			return Nx(this.un.Zn(c, d), this.l.tc, k, e, this.qk, f)
		};
		V.As = function(a, b) {
			var c = this.un.gp(a);
			return Nx(c, this.l.tc, n, this.Du(b), this.qk, b)
		};

		function Sx(a) {
			this.ge = a
		}
		V = Sx[K];
		V.Co = function(a, b, c) {
			switch(a.ae) {
				case yi:
					this.Yl(a, b, c);
					break;
				case Ei:
					this.Mw(a, b, c)
			}
		};
		V.eg = function(a, b, c) {
			a.e = a.e || {};
			a = a.e;
			a[b] = a[b] || {};
			b = a[b];
			b.c = b.c || {};
			b = b.c;
			b[c] = b[c] || {};
			return b[c]
		};
		V.Dh = function(a, b) {
			a.e = a.e || {};
			var c = a.e;
			c[b] = c[b] || {};
			return c[b]
		};
		V.Bs = function(a, b) {
			a.v = a.v || {};
			var c = a.v;
			c[b] = c[b] || {};
			return c[b]
		};
		V.Im = function(a, b) {
			a.f = a.f || {};
			var c = a.f;
			c.kc = c.kc || {};
			c = c.kc;
			c[b] = c[b] || {};
			return c[b]
		};
		V.Yl = function(a, b, c) {
			for(var d = b[kb].Vn(), e = 0; e < d[I]; ++e) {
				var f = a.yj[d[e].column];
				if(W(f)) {
					var g = a.df[d[e].row];
					this.Sh(a, f, g, c)
				}
			}
			g = b[kb].Wn();
			for(e = 0; e < g[I]; ++e) f = a.yj[g[e]], this.Fs(a, f, c);
			d = b[kb].Bk();
			for(e = 0; e < d[I]; ++e) g = d[e], a.N == oh ? (f = 0, g = a.df[g], this.Sh(a, f, g, c)) : this.Es(a, a.df[g], c);
			e = b.s.na;
			f = b.s.Xa;
			g = b.X.na;
			d = b.X.Xa;
			W(f) && this.Vj(a, e, f, c);
			if(W(d)) this.eg(c, g, d).K = this.ge.Mh(g, d);
			e = b.f.s.lc;
			W(e) && this.Ds(a, e, c);
			e = b.s.Bb;
			W(e) && this.Cs(a, e, c);
			a = b.X.Bb;
			if(W(a) && (c = this.Bs(c, a), b[gc][fc])) c.kg =
				this.ge.As(a, b[gc][fc])
		};
		var Tx = [0.25, 0.1, 0.05],
			Ux = [0.3, 0.1, 0.05],
			Vx = [0.3, 0.15, 0.05];
		V = Sx[K];
		V.Vj = function(a, b, c, d) {
			var e = a.e[b],
				f = e.c[c];
			if(f && !f.ud && f.i && (!qv(e) || 0 != e[dd] || rv(f, e))) {
				a = e[F] == Pg ? Vx : Tx;
				d = this.eg(d, b, c);
				d.xc = {};
				b = d.xc;
				b.Ca = [];
				for(c = 0; c < a[I]; c++) {
					var g = new wt({
						fill: U,
						stroke: Ug,
						vd: a[c],
						Qa: 1
					});
					b.Ca[v]({
						b: g
					})
				}
				switch(e[F]) {
					case Pg:
					case hn:
					case wh:
						e = f.i.Wf || f.i[vc] || f.i;
						f = new js(e[C], e.top, e[w], e[Q]);
						for(c = 0; c < a[I]; c++) e = b.Ca[c].b.H, b.Ca[c].rect = new js(f[C] - e / 2, f.top - e / 2, f[w] + e, f[Q] + e), xa(f, f[C] - e), f.top -= e, oa(f, f[w] + 2 * e), Ua(f, f[Q] + 2 * e);
						break;
					case Ak:
					case Cg:
					case rm:
					case sh:
						d.gf =
							k;
						b.x = f.i.x;
						b.y = f.i.y;
						d.qb ? (e = d.qb, f = e.Xb + e.b.H / 2) : f = tv(f, e);
						for(c = 0; c < a[I]; c++) e = b.Ca[c].b.H, b.Ca[c].Xb = f + e / 2, f += e
				}
			}
		};
		V.Ds = function(a, b, c) {
			var o;
			var d = a.e[b],
				e;
			if(qv(d) && 0 < d[dd]) {
				e = this.Dh(c, b);
				e.xc = {};
				e = e.xc;
				e.Ca = [];
				var f;
				f = d[F] == Cg ? a.Vc ? wv(d) : vv(d, n) : vv(d, a.Qe);
				f = f.yn();
				for(var g = d.Ha.H / 2, i = 0; i < Ux[I]; i++) {
					var j = new wt({
							fill: U,
							stroke: Ug,
							vd: Ux[i],
							Qa: 1
						}),
						m = Dx(f, g + j.H / 2);
					e.Ca[v]({
						b: j,
						path: m
					});
					g += j.H
				}
			}
			o = (e = (e = c.e) && e[b]) && e.c, e = o;
			for(f = 0; f < d.c[I]; ++f) g = d.c[f], !g || g.ud || (rv(g, d) || e && e[f] && e[f].gf) && this.Vj(a, b, f, c)
		};
		V.Cs = function(a, b, c) {
			for(var d = a.e, e = 0; e < d[I]; e++) this.Vj(a, e, b, c)
		};
		V.Sh = function(a, b, c, d) {
			var e = a.e[b],
				f = e.c[c];
			if(f && !f.ud && f.i && (!qv(e) || 0 != e[dd] || rv(f, e))) {
				var g = pv(f, e),
					b = this.eg(d, b, c);
				b.qb = {};
				c = b.qb;
				a = At(a.bj, a.cj);
				d = 1;
				W(a) || (a = So, d = 0);
				switch(e[F]) {
					case Pg:
					case hn:
					case wh:
						c.b = xt[Dc]();
						c.b.gc(a);
						e[F] == wh && f.dm.O == a && c.b.gc(g.O);
						c.b.bg(d);
						c.b.ee(1);
						e = f.i.Wf || f.i[vc] || f.i;
						g = g.H;
						f = c.b.H;
						c.rect = new js(e[C] + g / 2 + 1.5 + f / 2, e.top + g / 2 + 1.5 + f / 2, e[w] - (g + 3 + f), e[Q] - (g + 3 + f));
						(0 >= c[vc][w] || 0 >= c[vc][Q]) && delete b.qb;
						break;
					case Ak:
					case Cg:
					case rm:
					case sh:
						b.gf = k, c.x = f.i.x, c.y = f.i.y,
							c.b = new wt({
								fill: a,
								rb: d,
								stroke: g.O,
								Qa: 1
							}), c.Xb = tv(f, e) + 1.5 + c.b.H / 2
				}
			}
		};
		V.Fs = function(a, b, c) {
			var d = a.e[b];
			if((d[F] == Ak || d[F] == Cg || d[F] == rm) && 0 < d[dd]) {
				var e = this.Dh(c, b);
				e.qb = {};
				var e = e.qb,
					f;
				f = d[F] == Cg ? a.Vc ? wv(d) : vv(d, n) : vv(d, a.Qe);
				f = f.yn();
				e.b = new wt({
					stroke: d.Ha.Jb,
					Qa: s.min(1, d.Ha.H / 2)
				});
				e.path = Dx(f, -(d.Ha.H / 2 + 2 + e.b.H / 2))
			}
			for(e = 0; e < d.c[I]; ++e) f = d.c[e], !f || f.ud || rv(f, d) && this.Sh(a, b, e, c)
		};
		V.Es = function(a, b, c) {
			for(var d = a.e, e = 0; e < d[I]; ++e) this.Sh(a, e, b, c)
		};
		V.Mw = function(a, b, c) {
			var d = b.s.na,
				e = b.s.Xa,
				f = b.X.na,
				g = b.X.Xa,
				i = l;
			if(W(e)) {
				i = this.eg(c, d, e);
				i.gf = k;
				e = this.Im(c, d);
				e.ba = {
					B: a.im
				};
				for(e = 0; e < a.e[I]; e++)
					if(e != d) {
						var j = this.Dh(c, e),
							m = a.e[e];
						j.Ha = m.Ha[Dc]();
						j.Ha.bg(0.3)
					}
			}
			a.f.pb && this.ge.Tq(new hs(0, a.f.pb[C], a[Q], 0));
			if(W(g)) i.K = this.ge.Mh(f, g);
			if(a.f && a.f[fc] == gk && W(b.f.s.lc)) {
				b = b.f.s.lc;
				e = this.Im(c, b);
				e.ba = {
					B: a.im
				};
				for(var i = a.e[b].c, o, d = i[I] - 1; 0 <= d; d--)
					if((f = i[d]) && !f.ud && f.i && (new hs(a.a.top, a.a[R], a.a[P], a.a[C]))[Tc](new $(f.i.x, f.i.y))) {
						o = d;
						break
					}
				if(W(o) &&
					(i = this.eg(c, b, o), i.gf = k, a.Ic != U)) i.K = this.ge.Mh(b, o);
				for(e = 0; e < a.e[I]; e++)
					if(e != b) j = this.Dh(c, e), m = a.e[e], j.Ha = m.Ha[Dc](), j.Ha.bg(0.3)
			}
		};

		function Wx(a) {
			this.Jo = ot(a, k);
			this.rl = sq(a);
			va(this.rl, xd);
			Na(this.rl, a[M] - 2)
		}
		Wx[K].Zn = function(a, b) {
			var c = [];
			if(!a.qh) {
				var d = Mx(a[J], this.Jo);
				c[v](d)
			}
			d = Mx(b[fb], this.Jo);
			c[v](d);
			d = Mx(b.Hk, this.rl);
			c[v](d);
			return {
				d: c
			}
		};
		Wx[K].gp = function() {
			return {
				d: []
			}
		};

		function Xx(a) {
			this.ge = a
		}
		V = Xx[K];
		V.Co = function(a, b, c) {
			this.Yl(a, b, c)
		};
		V.Kj = function(a, b) {
			a.e = a.e || {};
			var c = a.e;
			c[b] = c[b] || {};
			return c[b]
		};
		V.Yl = function(a, b, c) {
			for(var d = b[kb].Bk(), e = 0; e < d[I]; ++e) this.Ys(a, d[e], c);
			d = b.s.na;
			W(d) && this.lo(a, d, c);
			e = b.X.na;
			if(W(e)) {
				var f = this.Kj(c, e);
				if(a.Ic != U) f.K = this.ge.Mh(e, l);
				if(a.f[fc] == gk) c.Bc = px(a.Bc, d)
			}
			b = b.f.s.lc;
			if(W(b) && (this.lo(a, b, c), a.f[fc] == gk)) c.Bc = px(a.Bc, b)
		};
		V.lo = function(a, b, c) {
			var d = a.ea,
				a = a.e[b],
				c = this.Kj(c, b);
			c.xc = {};
			b = c.xc;
			b.b = new wt({
				stroke: a.b.O,
				Qa: 6.5,
				vd: 0.3
			});
			b.bb = new $(d.Hb.x + a.Yc.x, d.Hb.y + a.Yc.y);
			b.ga = a.ga;
			b.ca = a.ca;
			b.Xc = a.Xc;
			var e = c.qb;
			e ? (c = e.ka + e.b.H / 2, d = e.ua + e.b.H / 2) : (c = d.ka + a.b.H / 2, d = d.ua + a.b.H / 2);
			b.ka = c + b.b.H / 2;
			b.ua = d + b.b.H / 2;
			d = sr(b.ga - 90);
			c = sr(b.ca - 90);
			b.Ba = kq(b.bb, lv(d, b.ka, b.ua));
			b.Ib = kq(b.bb, lv(c, b.ka, b.ua));
			if(e = a.C) b.C = b.C || {}, b.C.b = yt(e.b.O, 0.3), b.C.bb = b.bb[Dc](), b.C.ga = e.ga, b.C.ca = e.ca, b.C.ka = b.ka + b.b.H / 2, b.C.ua = b.ua + b.b.H / 2, d =
				sr(b.C.ga - 90), c = sr(b.C.ca - 90), b.C.Ba = kq(b.C.bb, lv(d, b.C.ka, b.C.ua)), b.C.Ib = kq(b.C.bb, lv(c, b.C.ka, b.C.ua));
			b.xd = a.xd;
			b.ce = a.ce;
			if(b.xd || b.ce) b.sh = yt(a.sh.O, 0.3), b.Pr = b.xd ? d : c, a = function(a, b) {
				return kq(a.bb, lv(a.Pr, a.ka + b * a.b.H / 2, a.ua + b * a.b.H / 2))
			}, b.hf = a(b, -1), b.Ch = a(b, 1)
		};
		V.Ys = function(a, b, c) {
			var d = a.ea;
			if(!(0 < d.ej)) a = a.e[b], b = this.Kj(c, b), b.qb = {}, b = b.qb, b.b = zt(a.b.O, 2), b.bb = new $(d.Hb.x + a.Yc.x, d.Hb.y + a.Yc.y), b.ga = a.ga, b.ca = a.ca, b.Xc = a.Xc, a = a.b.H / 2 + 2.5 + b.b.H / 2, b.ka = d.ka + a, b.ua = d.ua + a, d = sr(b.ca - 90), b.Ba = kq(b.bb, lv(sr(b.ga - 90), b.ka, b.ua)), b.Ib = kq(b.bb, lv(d, b.ka, b.ua))
		};

		function Yx(a, b) {
			this.ue = {};
			W(b.f.vf) && this.Yt(a, b);
			var c = new Rx(a, this.Zt(a)),
				d = l,
				d = a.N == Dl ? new Xx(c) : new Sx(c);
			d.Co(a, b, this.ue)
		}
		Yx[K].Zt = function(a) {
			return a.ae == Ei ? new Wx(a.mj) : new Qx(a)
		};
		Yx[K].Yt = function(a, b) {
			this.ue.f = this.ue.f || {};
			var c = a.f,
				d = b.f.vf;
			this.ue.f.kc = c.ha[d];
			var e = d + 1 + xe + c.ha[I],
				f = c.qg.ok,
				g = 0 < d,
				c = c.qg.mk,
				d = d < a.f.ha[I] - 1;
			this.ue.f.qg = {
				ok: {
					b: g ? f.cd.fd : f.cd.ei,
					fd: g
				},
				mk: {
					b: d ? c.cd.fd : c.cd.ei,
					fd: d
				},
				nk: {
					text: e,
					d: {
						"0": {
							text: e
						}
					}
				}
			}
		};

		function Zx(a) {
			this.sc = new Ss(50);
			this.aw = a;
			this.Me = p;
			this.Nf = 0;
			Qr(this.sc, Jn, Z(this.Gl, this));
			this.sc[O]()
		}
		xp(Zx, zr);
		Zx[K].Da = function(a) {
			this.Me = s.min(this.Me, a)
		};
		Zx[K].sw = function() {
			this.Me = p
		};
		Zx[K].Gl = function() {
			var a = wp();
			this.Me -= a - this.Nf;
			this.Nf = a;
			if(0 >= this.Me) this.aw(), this.Me = p
		};
		Zx[K].lb = function() {
			this.sc.cc();
			this.sc = l
		};

		function $x(a, b, c) {
			this.n = this.l = l;
			this.Gd = a;
			this.St = b;
			this.ya = new Zx(c);
			this.Tt()
		}
		xp($x, zr);
		V = $x[K];
		V.Wt = function(a) {
			this.l = a;
			return this
		};
		V.st = function(a) {
			this.n = a;
			return this
		};
		V.ot = function() {
			this.ya.sw()
		};
		V.cc = function() {
			this.ya.cc();
			this.ya = l
		};
		V.hp = function(a) {
			this.St[v](a)
		};
		V.jv = function(a) {
			this.hp({
				type: Rh,
				entityName: a.va.ds
			});
			this.ya.Da(0)
		};
		V.hv = function(a) {
			if(this.l.jc == xh) {
				var b = this.l.Ic,
					a = new $(a.dd[Wb], a.dd[Xb]);
				Ia(this.n[gc], a);
				a = this.uk(a);
				this.n.s.Bb = a;
				if(b == Hj) this.n.X.Bb = a;
				this.ya.Da(50)
			}
		};
		V.iv = function() {
			this.l.jc == xh && (this.Do(), this.ya.Da(50))
		};
		V.tp = function(a) {
			var b = this.l;
			b.jc == xh && (a = this.uk(new $(a.dd[Wb], a.dd[Xb])), W(a) && (this.n[kb].pk(b.v[a].wc, b.vh == Mm), this.ya.Da(50)))
		};
		V.ov = function(a) {
			this.n.f.s.lc = a.va.Fh;
			this.ya.Da(50)
		};
		V.pv = function() {
			this.n.f.s.lc = l;
			this.ya.Da(250)
		};
		V.nv = function(a) {
			this.So(a.va.Fh);
			this.ya.Da(50)
		};
		V.qv = function(a) {
			if(!W(this.n.f.vf)) this.n.f.vf = 0;
			this.n.f.vf += a.va.cs;
			this.ya.Da(50)
		};
		V.tv = function(a) {
			var b = this.l,
				c = a.va.$;
			this.n.s.na = c;
			var d = b.Ic;
			if(d == Hj) this.n.X.na = c;
			if(b.ae == Ei) {
				for(var b = b.e[c].c, c = Np(b, function(a) {
						return W(a)
					}), a = a.dd[Wb], e = 0; e < c[I] && c[e].i.x < a; e++);
				var f = 0 == e ? 0 : l,
					f = e == c[I] ? c[I] - 1 : l;
				ip(f) && (a = a < ur(c[e - 1].i.x, c[e].i.x) ? e - 1 : e, f = Lp(b, c[a]));
				this.n.s.Xa = f;
				if(d == Hj) this.n.X.Xa = f
			}
			this.ya.Da(50)
		};
		V.uv = function() {
			var a = this.l;
			this.jo();
			if(a.ae == Ei && (this.n.s.Xa = l, this.l.Ic == Hj)) this.n.X.Xa = l;
			this.ya.Da(250)
		};
		V.sv = function(a) {
			this.So(a.va.$);
			this.ya.Da(50)
		};
		V.rv = function(a) {
			this.hp({
				type: cm,
				index: a.va.Fh
			});
			this.ya.Da(0)
		};
		V.lv = function(a) {
			this.n.s.na = a.va.$;
			this.n.s.Xa = a.va.Sa;
			if(this.l.Ic == Hj) this.n.X.Xa = a.va.Sa, this.n.X.na = a.va.$;
			this.ya.Da(50)
		};
		V.mv = function() {
			this.Gk();
			this.ya.Da(250)
		};
		V.kv = function(a) {
			var b = this.l,
				c = b.vh == Mm,
				d = b.e[a.va.$];
			b.N == oh ? (a = d.c[a.va.Sa].wc, this.n[kb].pk(a, c)) : (a = a.va.Sa, this.n[kb].En(a, d.wc, c));
			this.ya.Da(50)
		};
		V.fv = function(a) {
			this.n.Ob.s.Md = a.va.Sa;
			this.n.Ob.s.w = this.Un(a.va.$);
			this.Gk();
			this.ya.Da(50)
		};
		V.gv = function() {
			this.n.Ob.s.Md = l;
			this.n.Ob.s.w = l;
			this.ya.Da(250)
		};
		V.ev = function(a) {
			for(var b = this.l.vh == Mm, c = a.va.Sa, d = this.Un(a.va.$), e = 0; e < d[I]; ++e) this.n[kb].En(c, d[e], b);
			a.dd[tc]();
			this.ya.Da(50)
		};
		V.xv = function(a) {
			var b = this.l.Ic;
			switch(this.l.jc) {
				case ri:
					this.n.s.Xa = a.va.Sa;
					this.n.s.na = a.va.$;
					if(b == Hj) this.n.X.Xa = a.va.Sa, this.n.X.na = a.va.$;
					break;
				case ym:
					this.n.s.na = a.va.$;
					if(b == Hj) this.n.X.na = a.va.$;
					break;
				case xh:
					if(a = new $(a.dd[Wb], a.dd[Xb]), Ia(this.n[gc], a), a = this.uk(a), this.n.s.Bb = a, b == Hj) this.n.X.Bb = a
			}
			this.ya.Da(50)
		};
		V.yv = function() {
			switch(this.l.jc) {
				case ri:
					this.Gk();
					break;
				case ym:
					this.jo();
					break;
				case xh:
					this.Do()
			}
			this.ya.Da(750)
		};
		V.wv = function(a) {
			this.tp(a)
		};
		V.vv = function(a) {
			a.dd[tc]()
		};
		V.Gk = function() {
			this.n.s.na = l;
			this.n.s.Xa = l;
			if(this.l.Ic == Hj) this.n.X.Xa = l, this.n.X.na = l
		};
		V.jo = function() {
			this.n.s.na = l;
			if(this.l.Ic == Hj) this.n.X.na = l
		};
		V.Do = function() {
			Ia(this.n[gc], l);
			this.n.s.Bb = l;
			if(this.l.Ic == Hj) this.n.X.Bb = l
		};
		V.Un = function(a) {
			var b = this.l,
				c = [];
			if(W(a)) c = b.e[a].w.annotation;
			else
				for(a = 0; a < b.Zc[I]; ++a) Zp(c, b.Zc[a].w.annotation);
			return c
		};
		V.Tt = function() {
			var a = Z(function(a, c) {
				Qr(this.Gd, a, Z(c, this))
			}, this);
			a(Lh, this.jv);
			a(zh, this.hv);
			a(Ah, this.iv);
			a(yh, this.tp);
			a(uk, this.ov);
			a(vk, this.pv);
			a(tk, this.nv);
			a(xk, this.qv);
			a(wm, this.tv);
			a(xm, this.uv);
			a(vm, this.sv);
			a(bm, this.rv);
			a(ti, this.lv);
			a(ui, this.mv);
			a(si, this.kv);
			a(ug, this.fv);
			a(vg, this.gv);
			a(tg, this.ev);
			a(bo, this.xv);
			a(co, this.yv);
			a($n, this.wv);
			a(nn, this.vv)
		};
		V.uk = function(a) {
			var b = this.l,
				c = b.a,
				d = a.x,
				e = a.y;
			if(d <= c[C] || d >= c[R] || e <= c.top || e >= c[P]) return l;
			b = b.v;
			for(c = 0; c < b[I]; c++)
				if((d = b[c].Ls) && d[Tc](a)) return c;
			return l
		};
		V.So = function(a) {
			var b = this.l,
				c = b.vh == Mm,
				a = b.e[a].wc;
			b.N == Dl ? this.n[kb].pk(a, c) : this.n[kb].Zs(a, c)
		};

		function ay(a, b) {
			ov[N](this, a, b);
			this.di = this.wj = l
		}
		xp(ay, ov);
		V = ay[K];
		V.Mn = function(a, b) {
			var c = this.g;
			if(1 > a.e[I]) return n;
			this.wj = b;
			for(var d = 0; d < a.e[I] && 180 > a.e[d].ca;) this.Pg(a.e[d]), d += 1;
			a.ea.zj && this.Pg(a.ea.zj);
			for(var e = a.e[I] - 1; e >= d; e--) this.Pg(a.e[e]);
			if(a.Bc) this.di = c.ja(), this.Yn(a.Bc), c[t](this.wj, this.di);
			return k
		};
		V.Pg = function(a) {
			if(a.B) {
				var b = this.g.ja(),
					c = this.Ia,
					d = c.ea.ka,
					e = c.ea.ua,
					f = c.ea.Hb,
					g = a.Yc;
				if(a.C) {
					var i = c.ea.ej,
						j = a.C,
						m = new Et;
					m[rb](g.x + j.Ba.x, g.y + j.Ba.y);
					m.G(g.x + j.Ba.x, g.y + j.Ba.y + i);
					m.jb(g.x + f.x, g.y + f.y + i, d, e, j.ga, j.ca, k);
					m.G(g.x + j.Ib.x, g.y + j.Ib.y);
					m.jb(g.x + f.x, g.y + f.y, d, e, j.ca, j.ga, n);
					this.g.xa(m, j.b, b)
				}
				if(a.xd || a.ce) i = c.ea.ej, c = new Et, c[rb](g.x + f.x, g.y + f.y), c.G(g.x + f.x, g.y + f.y + i), a.ce && (c.G(g.x + a.Ib.x, g.y + a.Ib.y + i), c.G(g.x + a.Ib.x, g.y + a.Ib.y)), a.xd && (c.G(g.x + a.Ba.x, g.y + a.Ba.y + i), c.G(g.x + a.Ba.x,
					g.y + a.Ba.y)), this.g.xa(c, a.sh, b);
				a.Xc ? 0 == a.$f && 0 == a.Ye ? this.g.um(f.x, f.y, d, e, a.b, b) : (c = new Et, c[rb](f.x, f.y - e), c.jb(f.x, f.y, d, e, 0, 180, k), c.jb(f.x, f.y, d, e, 180, 360, k), c[rb](f.x, f.y - a.Ye), c.jb(f.x, f.y, a.$f, a.Ye, 360, 180, n), c.jb(f.x, f.y, a.$f, a.Ye, 180, 0, n), c[Ac](), this.g.xa(c, a.b, b)) : (c = new Et, c[rb](g.x + a.jm.x, g.y + a.jm.y), c.G(g.x + a.Ba.x, g.y + a.Ba.y), c.jb(g.x + f.x, g.y + f.y, d, e, a.ga, a.ca, k), c.G(g.x + a.km.x, g.y + a.km.y), c.jb(g.x + f.x, g.y + f.y, a.$f, a.Ye, a.ca, a.ga, n), this.g.xa(c, a.b, b));
				a.qb && this.wm(a.qb, b);
				if(d =
					a.xc) {
					d.C && (e = new Et, e[rb](d.C.Ba.x, d.C.Ba.y), e.G(d.C.Ba.x, d.C.Ba.y + i), e.jb(d.C.bb.x, d.C.bb.y + i, d.C.ka, d.C.ua, d.C.ga, d.C.ca, k), e.G(d.C.Ib.x, d.C.Ib.y), e.jb(d.C.bb.x, d.C.bb.y, d.C.ka, d.C.ua, d.C.ca, d.C.ga, n), this.g.xa(e, d.C.b, b));
					if(d.xd || d.ce) e = new Et, e[rb](d.hf.x, d.hf.y), e.G(d.Ch.x, d.Ch.y), e.G(d.Ch.x, d.Ch.y + i), e.G(d.hf.x, d.hf.y + i), e.G(d.hf.x, d.hf.y), this.g.xa(e, d.sh, b);
					this.wm(d, b)
				}
				a.nj && this.g.rh(a[x], a.oj.x + g.x, a.oj.y + g.y, a.Bh[w], fn, fn, a.t, b);
				g = Hu([Vm, a[ic]]);
				b = b.q();
				this.yc(this.wj, g, b);
				a.K && this.wh(a.K,
					a[ic]);
				this.Ia.z && a.z && this.zc(b, {
					click: vm,
					mouseover: wm,
					mouseout: xm
				}, {
					$: a[ic]
				})
			}
		};
		V.wm = function(a, b) {
			if(a.Xc) this.g.um(a.bb.x, a.bb.y, a.ka, a.ua, a.b, b);
			else {
				var c = new Et;
				c[rb](a.Ba.x, a.Ba.y);
				c.jb(a.bb.x, a.bb.y, a.ka, a.ua, a.ga, a.ca, k);
				this.g.xa(c, a.b, b)
			}
		};
		V.Yn = function(a) {
			for(var b = Z(this.yd, this), c = this.g, d = Z(this.zc, this), e = this.di, f = 0; f < a[I]; ++f) {
				var g = a[f],
					i = c.ja(),
					j = c.ja(),
					m = new Et;
				m[rb](g.Kb.x + 0.5, g.Kb.y + 0.5);
				m.G(g.cn + 0.5, g.Kb.y + 0.5);
				m.G(g.cn + 0.5, g.Lc.y + 0.5);
				m.G(g.Lc.x + 0.5, g.Lc.y + 0.5);
				c.xa(m, g.Ha, j);
				c.Zj(g.Kb.x + 0.5, g.Kb.y + 0.5, g.bn, g.vr, j);
				b(g.ef, i);
				b(g.ff, i);
				c[t](e, i);
				c[t](e, j);
				g.z && (g = {
					Fh: g[ic]
				}, i = i.q(), d(i, {
					click: tk,
					mouseover: uk,
					mouseout: vk
				}, g))
			}
		};
		V.Xn = function(a, b) {
			if(!lu(b.Bc, this.se.Bc)) {
				this.g.Ng(this.di);
				var c = new ju(2);
				c.Lb(0, a.Bc || {});
				c.Lb(1, b.Bc || {});
				this.Yn(c[ad]())
			}
			this.il(a, this.se);
			this.hl(a, b)
		};
		V.il = function(a, b) {
			for(var c in b.e) b.e[c].K && this.Mk(ea(c)), this.Pg(a.e[c])
		};
		V.hl = function(a, b) {
			for(var c in b.e) {
				var d = a.e[c],
					e = new ju(2);
				e.Lb(0, d);
				e.Lb(1, b.e[c]);
				this.Pg(e[ad]())
			}
		};

		function by(a, b, c) {
			this.Bx = b;
			W(c) && Qr(this, Yl, c);
			this.k = this.l = l;
			this.wb = a;
			this.kd = this.Rd = this.Cg = this.n = this.zg = l;
			this.Nk = [];
			this.Gd = new Rs;
			a = Z(this.ji, this, k);
			this.Pd = new $x(this.Gd, this.Nk, a)
		}
		xp(by, Rs);
		V = by[K];
		V.Zk = function() {
			return this.Rd
		};
		V.Gg = function() {
			return this.l
		};
		V.draw = function(a, b, c) {
			this.Pd.ot();
			b.isStacked && b.vAxis && b.vAxis.baseline && h(r("Cannot set a non-zero base-line for a stacked chart"));
			var d = b.theme || [];
			jp(d) || (d = [d]);
			for(var b = [b], e = 0; e < d[I]; ++e) {
				var f;
				if(np(d[e])) {
					f = d[e];
					if(!dx) {
						var g = {
							colors: [{
								color: Md,
								dark: Ed,
								light: Rd
							}, {
								color: Id,
								dark: Fd,
								light: Pd
							}, {
								color: Ld,
								dark: Dd,
								light: Td
							}, {
								color: Cd,
								dark: zd,
								light: Kd
							}, {
								color: Qd,
								dark: Jd,
								light: Od
							}, {
								color: Bd,
								dark: yd,
								light: Gd
							}],
							backgroundColor: {
								gradient: {
									color1: Ad,
									color2: wd,
									x1: De,
									y1: De,
									x2: Ke,
									y2: Ke
								}
							},
							titleTextStyle: {
								color: So
							},
							hAxis: {
								textStyle: {
									color: So
								},
								titleTextStyle: {
									color: So
								}
							},
							vAxis: {
								textStyle: {
									color: So
								},
								titleTextStyle: {
									color: So
								}
							},
							legend: {
								textStyle: {
									color: So
								}
							},
							axisBackgroundColor: {
								stroke: Nd,
								fill: U
							},
							areaOpacity: 0.8
						};
						cx.classic = g;
						g = {
							titlePosition: Pj,
							axisTitlesPosition: Pj,
							legend: {
								position: Pj
							},
							chartArea: {
								width: Ke,
								height: Ke
							},
							vAxis: {
								textPosition: Pj
							},
							hAxis: {
								textPosition: Pj
							}
						};
						cx.maximized = g;
						g = {
							enableInteractivity: n,
							legend: {
								position: U
							},
							seriesType: Cg,
							lineWidth: 1.6,
							chartArea: {
								width: Ke,
								height: Ke
							},
							vAxis: {
								textPosition: U,
								gridlines: {
									color: U
								},
								baselineColor: U
							},
							hAxis: {
								textPosition: U,
								gridlines: {
									color: U
								},
								baselineColor: U,
								type: Bh
							}
						};
						cx.sparkline = g;
						dx = k
					}
					f = cx[f]
				} else mp(d[e]) ? f = d[e] : h(r("Theme should be a theme name or an options object."));
				b[v](f)
			}
			b[v](Gu);
			this.k = new Nt(b);
			this.vn = this.k.Uk(To) || this.wb[kc] || 400;
			this.Fg = this.k.Uk(Bj) || this.wb[Mc] || 200;
			d = new lq(this.vn, this.Fg);
			if(W(this.Rd)) this.Rd.tt(d);
			else try {
				this.Rd = new au(this.wb, d)
			} catch(i) {
				h(r("Your browser does not support charts"))
			}
			this.n = new Kx(c);
			this.Pd.st(this.n);
			this.jj = a;
			this.Rd.Og(Z(this.pt,
				this))
		};
		V.pt = function(a) {
			var b;
			this.kd ? (b = this.kd.Jn, this.tk()) : b = this.l;
			var c = (new sx(this.jj, this.k, Z(a.Ln, a), this.vn, this.Fg)).Gg();
			this.zg = c.N == Dl ? new ay(a, this.Gd) : new xv(a, this.Gd);
			var d = this.k;
			(a = d.da(ng, 0)) ? (d = d.ia(og, fu, Dk), d = gu(d), a = {
				duration: a,
				ws: d
			}) : a = l;
			a && b && b.N == c.N && b[w] == c[w] && b[Q] == c[Q] && b.a.top == c.a.top && b.a[P] == c.a[P] && b.a[C] == c.a[C] && b.a[R] == c.a[R] ? (this.l = l, d = wp(), this.kd = {
				zx: b,
				ns: c,
				ms: new tx(b, c),
				Jn: b,
				startTime: d,
				ls: d + a.duration,
				Kn: 0,
				yk: new Ss(10),
				ks: a.ws,
				Hn: n
			}, this.Qn(), Qr(this.kd.yk, Jn,
				Z(this.Qn, this)), this.kd.yk[O]()) : (this.l = c, this.In());
			this[ub]({
				type: Yl
			})
		};
		V.clearChart = function() {
			this.kd && this.tk();
			this.Pd.cc();
			Xr(this.Gd);
			this.Rd.cc();
			this.Rd = l;
			Xr(this)
		};
		V.setSelection = function(a) {
			var b = this.yo();
			this.n[kb][Nb](a);
			this.ji(n);
			this.xo(b)
		};
		V.getSelection = function() {
			return this.Cg[kb][lc]()
		};
		V.ji = function(a) {
			this.Rd.Og(Z(this.Jw, this, a))
		};
		V.Jw = function(a) {
			var b = [];
			if(!this.n.Od(this.Cg)) this.zg.Rt(this.l, (new Yx(this.l, this.n)).ue), a && (b = this.yo()), this.Cg = this.n[Dc]();
			a && (b = Xp(this.Nk, b), Vp(this.Nk), this.xo(b))
		};
		V.yo = function() {
			var a = this.n,
				b = this.Cg,
				c = l,
				d = [],
				e = a.s,
				f = b.s;
			if(e.na != f.na || e.Xa != f.Xa) W(f.na) && d[v](this.li(ll, f.na, f.Xa)), W(e.na) && d[v](this.li(ml, e.na, e.Xa));
			if(e.Bb != f.Bb) {
				if(W(f.Bb)) c = f = f.Bb, d[v]({
					type: ll,
					row: c,
					column: l
				});
				if(W(e.Bb)) c = f = e.Bb, d[v]({
					type: ml,
					row: c,
					column: l
				})
			}
			e = a.Ob.s;
			f = b.Ob.s;
			if(e.Md != f.Md || !eq(e.w, f.w)) {
				if(W(f.Md) || f.w) c = f.Md, Mp(f.w, function(a) {
					d[v]({
						type: ll,
						row: c,
						column: a
					})
				});
				if(W(e.Md) || e.w) c = e.Md, Mp(e.w, function(a) {
					d[v]({
						type: ml,
						row: c,
						column: a
					})
				})
			}
			e = a.f.s;
			f = b.f.s;
			e.lc != f.lc &&
				(W(f.lc) && d[v](this.li(ll, f.lc, l)), W(e.lc) && d[v](this.li(ml, e.lc, l)));
			a[kb].Od(b[kb]) || d[v]({
				type: tm
			});
			return d
		};
		V.li = function(a, b, c) {
			var d = this.l,
				b = d.e[b];
			d.N == Dl ? (c = b.wc, d = l) : (c = d.N == oh ? b.c[c].wc : c, d = b.wc);
			return {
				type: a,
				row: c,
				column: d
			}
		};
		V.xo = function(a) {
			for(var b = 0; b < a[I]; ++b) this[ub](a[b])
		};
		V.In = function() {
			this.zg.drawChart(this.l, (new Yx(this.l, this.n)).ue);
			this.Cg = this.n[Dc]();
			this.Pd.Wt(this.l)
		};
		V.Qn = function() {
			var a = this.kd;
			if(a.Hn) this.tk(), this.l = a.ns, this.In(), this[ub]({
				type: qg
			});
			else {
				var b = wp(),
					c = (b - a.startTime) / (a.ls - a.startTime);
				if(1 > c) {
					if(b - a.Kn < 1E3 / 30) return
				} else c = 1, a.Hn = k;
				c = a.ms.Ut(a.ks(c));
				c.z = n;
				a.Jn = c;
				a.Kn = b;
				this.zg.drawChart(c, {})
			}
		};
		V.tk = function() {
			this.kd.yk.cc();
			this.kd = l
		};

		function cy(a) {
			a = dy(a);
			return eval(de + a + fe)
		}

		function ey(a, b) {
			var a = b(a),
				c = gp(a);
			if(c == il || c == Fg) {
				var c = c == Fg ? [] : {},
					d;
				for(d in a) {
					var e = ey(a[d], b);
					hp(e) && (c[d] = e)
				}
			} else c = a;
			return c
		}

		function dy(a) {
			return a[bb](/"(Date\([\d,\s]*\))"/g, function(a, c) {
				return cl + c
			})
		}

		function fy(a) {
			lp(a) && (a = 0 !== a.getMilliseconds() ? [a[Lc](), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()] : 0 !== a.getSeconds() || 0 !== a.getMinutes() || 0 !== a.getHours() ? [a[Lc](), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()] : [a[Lc](), a.getMonth(), a.getDate()], a = xf + a[cd](ie) + fe);
			return a
		};

		function gy(a) {
			this.Hx = hy++;
			this.ip = this.Hi = U;
			this.ub = Gj;
			this.To = l;
			mp(a) && 0 < a[cb] || h(r("Container is not defined"));
			this.wb = a;
			this.Vu = Wt(this, a);
			this.ul = n;
			this.qa = l
		}
		var hy = 0;
		V = gy[K];
		V.Fu = function() {
			if(!this.qa) this.qa = new by(this.wb, Z(this.up, this), Z(this.Mv, this)), Qr(this.qa, qg, Z(this.Kv, this)), Qr(this.qa, tm, Z(this.Ov, this)), Qr(this.qa, Rh, Z(this.Lv, this)), Qr(this.qa, ml, Z(this.Ap, this, k)), Qr(this.qa, ll, Z(this.Ap, this, n)), Qr(this.qa, cm, Z(this.Nv, this))
		};
		V.setChartType = function(a, b, c, d) {
			this.Hi = a;
			if(W(b)) this.ip = b;
			if(W(c)) this.ub = c;
			if(W(d)) this.To = d
		};
		V.up = function(a, b) {
			var c;
			var d = this.Vu;
			try {
				c = a[N](b)
			} catch(e) {
				d.addError(e.message)
			}
			return c
		};
		V.draw = function(a, b, c) {
			this.up(function() {
				this.Xk(a, b, c)
			}, this)
		};
		V.Xk = function(a, b, c) {
			b = b || {};
			b = ey(b, fy);
			b = (new cs(ba)).Gu(b);
			bs(b);
			b = cy(b);
			this.Fu();
			this.Hu(b);
			this.Iu(b);
			Ca(b, b[Qb] || this.ub);
			b.theme = b.theme || this.To;
			if(this.Hi != U) {
				var d = b;
				d.hAxis = d.hAxis || {};
				d.vAxis = d.vAxis || {};
				var e = d.hAxis,
					f = d.vAxis,
					g = l;
				switch(d[F]) {
					case rm:
						g = f;
						break;
					case T:
						d.targetAxis = d.targetAxis || {}, g = d.targetAxis
				}
				g && (iy(d, Pk, g, Rk), iy(d, Kk, g, Mk), iy(d, Gk, g, Gk));
				e && (iy(d, Hk, e, Gk), iy(d, Sn, e, Nn));
				f && iy(d, Tn, f, Nn);
				d.smoothLine && !hp(d.curveType) && (d.curveType = T);
				iy(d, Bk, d, Ck);
				iy(d, em, d, fm)
			}
			d =
				b;
			jy(d, On, Pn, Rn);
			jy(d, yk, wk, zk);
			ky(d.hAxis);
			for(var i in d.hAxes) ky(d.hAxes[i]);
			ky(d.vAxis);
			for(i in d.vAxes) ky(d.vAxes[i]);
			i = d.tooltip;
			if(!W(i)) i = {}, d.tooltip = i;
			jy(d, fo, ao, go);
			iy(d, go, i, Hn);
			iy(d, eo, i, An);
			iy(d, ho, i, no);
			i = d.legend;
			if(W(i)) {
				if(typeof i == pn) e = i, i = {}, d.legend = i, Ia(i, e)
			} else i = {}, d.legend = i;
			iy(d, zk, i, Hn);
			i = d.animation;
			if(W(i)) {
				if(typeof i == gl) e = 1E3 * i, i = {}, d.animation = i, i.duration = e
			} else i = {}, d.animation = i;
			iy(d, pg, i, Ji);
			google[wc][Yc][Ic](this.wb);
			a || h(r("Data table is not defined"));
			this.Eu =
				(i = a[Fb](0) != gl) ? 1 : 0;
			this.Ex = a[dc]();
			if(this.Hi == Dl)
				if(i && 1 == a[mb]()) a = google[wc][A].group(a, [0], [{
					column: 0,
					aggregation: google[wc][A].count,
					type: gl
				}]), this.ul = k;
				else if(b.aggregate && i) a = google[wc][A].group(a, [0], [{
				column: this.Eu,
				aggregation: google[wc][A].sum,
				type: gl
			}]), this.ul = k;
			this.qa[Kc](a, b, c)
		};
		V.Ap = function(a, b) {
			google[wc][eb][Xa](this, a ? ml : ll, {
				row: b.row,
				column: b.column
			})
		};
		V.Mv = function() {
			google[wc][eb][Xa](this, Yl, l)
		};
		V.Kv = function() {
			google[wc][eb][Xa](this, qg, l)
		};
		V.Ov = function() {
			google[wc][eb][Xa](this, tm, l)
		};
		V.Lv = function(a) {
			google[wc][eb][Xa](this, Rh, {
				entityName: a.entityName
			})
		};
		V.Nv = function(a) {
			google[wc][eb][Xa](this, cm, {
				index: a[ic]
			})
		};
		V.getSelection = function() {
			return this.ul ? l : this.qa[lc]()
		};
		V.setSelection = function(a) {
			this.qa[Nb](a)
		};
		V.Hu = function(a) {
			switch(a[F]) {
				case Ak:
					this[jc](T, Ak, Gj);
					Aa(a, l);
					break;
				case Cg:
					this[jc](T, Cg, Gj);
					Aa(a, l);
					break;
				case gi:
					this[jc](T, Pg, Gj);
					Aa(a, l);
					break;
				case Pg:
					this[jc](T, Pg, Ko);
					Aa(a, l);
					break;
				case rm:
					this[jc](rm);
					Aa(a, l);
					break;
				case Dl:
					this[jc](Dl), Aa(a, l)
			}
			var b = this.Hi;
			b == U && (b = l);
			var c = a[F] || U;
			c == U && (c = l);
			!b && !c && h(r("Unspecified chart type."));
			b && c && b != c && h(r("Incompatible chart types."));
			Aa(a, b || c)
		};
		V.Iu = function(a) {
			if(a[F] == T) {
				var b = this.ip;
				b == U && (b = l);
				var c = a.seriesType || U;
				c == U && (c = l);
				b && c && b != c && h(r("Incompatible default series types."));
				a.seriesType = b || c
			}
		};

		function ky(a) {
			if(W(a)) {
				jy(a, Dn, Fn, Hn);
				jy(a, On, Pn, Rn);
				a.gridlines = a.gridlines || {};
				var b = a.gridlines,
					c = a.numberOfSections;
				!hp(b.count) && hp(c) && typeof c == gl && (b.count = c + 1);
				a = a.gridlineColor;
				!hp(b[tb]) && hp(a) && va(b, a)
			}
		}

		function jy(a, b, c, d) {
			a[d] = a[d] || {};
			d = a[d];
			iy(a, b, d, Yh);
			iy(a, c, d, dj)
		}

		function iy(a, b, c, d) {
			hp(a[b]) && !hp(c[d]) && (c[d] = a[b])
		}
		V.clearChart = function() {
			this.qa.clearChart()
		};
		V.ox = function() {
			var a = this.qa.zg.Og();
			return a.Qp ? a.Qp() : S
		};
		V.Zk = function() {
			return this.qa.Zk()
		};
		V.Gg = function() {
			return this.qa.Gg()
		};

		function ly(a) {
			gy[N](this, a);
			this[jc](T, Cg, Gj)
		}
		xp(ly, gy);

		function my(a) {
			gy[N](this, a);
			this[jc](T, hn, Gj)
		}
		xp(my, gy);

		function ny(a) {
			gy[N](this, a);
			this[jc](T, U, Gj, bn)
		}
		xp(ny, gy);

		function oy(a) {
			gy[N](this, a);
			this[jc](T, Ak, Gj)
		}
		xp(oy, gy);

		function py(a) {
			gy[N](this, a);
			this[jc](rm)
		}
		xp(py, gy);

		function uy(a) {
			gy[N](this, a);
			this[jc](oh)
		}
		xp(uy, gy);

		function vy(a) {
			gy[N](this, a);
			this[jc](T, Pg, Ko)
		}
		xp(vy, gy);

		function wy(a) {
			gy[N](this, a);
			this[jc](T, wh, Gj)
		}
		xp(wy, gy);

		function xy(a) {
			gy[N](this, a);
			this[jc](T, Pg, Gj)
		}
		xp(xy, gy);

		function yy(a) {
			gy[N](this, a);
			this[jc](T, U, Gj)
		}
		xp(yy, gy);

		function zy(a) {
			gy[N](this, a);
			this[jc](Dl)
		}
		xp(zy, gy);

		function Ay(a) {
			this.ed = {};
			this.Ck = this.ki = this.Nb = this.l = this.qa = l;
			this.wb = a;
			this.Ek = 50;
			this.ni = 1;
			this.ii = n;
			this.Zb = {
				Na: {
					start: l,
					end: l
				},
				Lk: l,
				vb: l
			};
			this.Sd = l
		}
		xp(Ay, Rs);
		var By = {
				Hv: fn,
				dy: Ni,
				vp: ih,
				Gv: dm
			},
			Cy = {
				nn: "rangeSelectorStartHandle",
				mn: "rangeSelectorEndHandle",
				pn: "rangeSelectorStartScreen",
				on: "rangeSelectorEndScreen"
			},
			Dy = {
				oy: Hf,
				Nx: qf,
				Yx: vf,
				Hy: Tf
			},
			Ey = {
				chartArea: {
					top: Ae,
					height: Ke
				},
				enableInteractivity: n,
				legend: {
					position: U
				},
				hAxis: {
					textPosition: Pj
				},
				vAxis: {
					textPosition: U,
					gridlines: {
						color: U
					}
				}
			},
			Fy = {
				qn: {
					b: new wt({
						stroke: "#000",
						fill: Sd
					}),
					Bg: new lq(11, 18),
					Dn: 3
				},
				Cn: new wt({
					fill: Hd,
					rb: 0.5
				}),
				Bn: new wt({
					fill: "#000",
					rb: 0
				})
			};
		V = Ay[K];
		V.draw = function(a, b, c) {
			this.ed = {};
			var c = c || {},
				b = new Nt([b || {}]),
				d = mu(b.fi(Mh));
			d.theme = Ey;
			if(!W(this.ki)) this.ki = new Zx(Z(this.ji, this, k));
			if(!W(this.Dx)) this.Ck = new Zx(Z(this.Sk, this, k));
			this.Ek = b.be(Wl, 50);
			this.ii = b.za(Zm, this.ii);
			switch(b.ia(Nh, Dy, vf)) {
				case Hf:
					this.qa = new oy(this.wb);
					break;
				case qf:
					this.qa = new ly(this.wb);
					break;
				case vf:
					this.qa = new yy(this.wb);
					break;
				case Tf:
					this.qa = new py(this.wb)
			}
			google[wc][eb].addListener(this.qa, Yl, Z(this.Xt, this, a, c, b.be(Qk)));
			this.qa[Kc](a, d)
		};
		V.wt = function(a, b) {
			for(var c = b[dc](), d = [], e = 0; e < c; e++) {
				var f = b[H](e, 0);
				W(f) && d[v](a.L.mc(f))
			}
			return d
		};
		V.xt = function(a, b) {
			if(0 >= b) this.ni = 1;
			var c = 0,
				c = a.L.jf(a.sb),
				d = l;
			lp(c) ? (d = new Date, d[Qc](c[Vb]() + b)) : d = c + b;
			c = s[db](s.abs(a.L.mc(d) - a.sb));
			c = s.max(c, 1);
			this.ni = c < s.abs(a.ob - a.sb) ? c : 1
		};
		V.Xt = function(a, b, c) {
			this.l = this.qa.Gg();
			var d = this.l.ta[0];
			if(W(d.L)) {
				this.xt(d, c);
				if(this.ii) this.Sd = this.wt(d, a);
				this.qa.Zk().Og(Z(this.Xk, this, b))
			}
		};
		V.Xk = function(a, b) {
			this.Nb = b;
			var c = a.range,
				d = mp(c) ? c[O] : ba,
				c = mp(c) ? c.end : ba,
				e = this.wn(d, c);
			this.Zb.Na = e;
			c = b.ja(n);
			b[t](l, c);
			var f = Fy.qn,
				g = this.l;
			b.Wa(0, 0, g[w], g[Q], Fy.Bn, c);
			var d = b.Wa(g.a[C], g.a.top, g.a[w], g.a[Q], Fy.Bn, c),
				i = b.Wa(g.a[C], g.a.top, e[O] - g.a[C], g.a[Q], Fy.Cn, c);
			this.ed[Cy.pn] = i;
			i = b.Wa(e.end, g.a.top, g.a[w] + g.a[C] - e.end, g.a[Q], Fy.Cn, c);
			this.ed[Cy.on] = i;
			i = this.An(e[O], g.a.top, g.a[Q], f.Bg[w], f.Bg[Q], f.Dn, b, f.b, c);
			this.ed[Cy.nn] = i;
			e = this.An(e.end, g.a.top, g.a[Q], f.Bg[w], f.Bg[Q], f.Dn, b, f.b, c);
			this.ed[Cy.mn] = e;
			c = c.q();
			Qr(c, Vk, Z(this.gs, this));
			Qr(c, Wk, Z(this.Jg, this, {
				type: sm,
				Ig: n
			}));
			Qr(c, Yk, Z(this.sk, this));
			this.zn(i, fn, fn);
			this.zn(e, Ni, Ni);
			Qr(d, Uk, Z(this.xn, this, {
				vb: ih
			}));
			Qr(d, Xk, Z(this.Jg, this, {
				type: sm,
				Ig: k
			}));
			Qr(d, Wk, Z(this.Jg, this, {
				type: sm,
				Ig: n
			}));
			google[wc][eb][Xa](this, Yl, l)
		};
		V.zn = function(a, b, c) {
			Qr(a, Uk, Z(this.xn, this, {
				vb: c
			}));
			Qr(a, Xk, Z(this.Jg, this, {
				type: b,
				Ig: k
			}));
			Qr(a, Wk, Z(this.Jg, this, {
				type: b,
				Ig: n
			}));
			Qr(a, Yk, Z(this.sk, this))
		};
		V.An = function(a, b, c, d, e, f, g, i, j) {
			var m = s[B](0.5 * d),
				o = g.ja(n);
			g[t](j, o);
			g.Kg(o.q(), a - m, b);
			this.Qu(m, 0, c, g, i, o);
			this.Ru(0, 0.5 * (c - e), d, e, f, g, i, o);
			return o.q()
		};
		V.Qu = function(a, b, c, d, e, f) {
			a = Ft([{
				x: a,
				y: b
			}, {
				x: a,
				y: b + c
			}]);
			d.xa(a, e, f)
		};
		V.Ru = function(a, b, c, d, e, f, g, i) {
			var c = a + c,
				d = b + d,
				j = Ft([{
					x: a + e,
					y: b
				}, {
					x: c - e,
					y: b
				}, {
					x: c,
					y: b + e
				}, {
					x: c,
					y: d - e
				}, {
					x: c - e,
					y: d
				}, {
					x: a + e,
					y: d
				}, {
					x: a,
					y: d - e
				}, {
					x: a,
					y: b + e
				}], n);
			f.xa(j, g, i);
			e += 1;
			a = Ft([{
				x: a + e,
				y: b + e
			}, {
				x: a + e,
				y: d - e
			}]);
			f.xa(a, g, i);
			b = Ft([{
				x: c - e,
				y: b + e
			}, {
				x: c - e,
				y: d - e
			}]);
			f.xa(b, g, i)
		};
		V.wn = function(a, b) {
			var c = this.l.ta[0],
				d = c.L.jf(c.sb),
				e = c.L.jf(c.ob),
				f = W(a) ? a : d,
				g = W(b) ? b : e,
				d = c.L.sg(d),
				e = c.L.sg(e),
				i = c.L.sg(f),
				j = c.L.sg(g);
			return d <= i && i <= j && j <= e ? {
				start: c.L.mc(f),
				end: c.L.mc(g)
			} : {
				start: c.sb,
				end: c.ob
			}
		};
		V.getRange = function() {
			var a = this.l.ta[0],
				b = this.Zb.Na;
			return {
				start: a.L.jf(b[O]),
				end: a.L.jf(b.end)
			}
		};
		V.setRange = function(a, b) {
			var c = this.Zb.Na;
			if(!W(c[O]) || !W(c.end)) return n;
			c = this.wn(a, b);
			return this.mp(c[O], c.end)
		};
		V.mp = function(a, b) {
			var c = this.Zb.Na;
			if(c[O] == a && c.end == b) return n;
			this.Zb.Na = {
				start: a,
				end: b
			};
			this.Zb.vb = dm;
			this.Cp();
			return k
		};
		V.Cp = function() {
			var a = this.l.ta[0],
				b = a.sb,
				a = a.ob,
				c = this.Zb;
			if(c.vb == dm) c.vb = l;
			var d = 0,
				e = s[B](0.5 * Fy.qn.Bg[w]);
			c.vb != Ni && (d = s.min(c.Na[O], c.Na.end), d >= b && (this.Nb.Kg(this.ed[Cy.nn], d - e, 0), this.Nb.Qk(this.ed[Cy.pn], d - b)));
			c.vb != fn && (d = s.max(c.Na[O], c.Na.end), b = this.ed[Cy.on], c = this.ed[Cy.mn], a >= d && (this.Nb.Qk(b, a - d), this.Nb.no(b, d), this.Nb.Kg(c, d - e, 0)))
		};
		V.gs = function(a) {
			var b = this.Zb;
			if(W(b.vb)) {
				Ja(a[Ec][zc], Zk);
				var c = this.l.ta[0],
					d = c.sb,
					e = c.ob;
				if(!b.Na || !W(b.Na[O]) || !W(b.Na.end)) b.Na = {
					start: d,
					end: e
				};
				c = a[Wb];
				d = this.gt(d, e, c - b.Lk);
				b.Lk = c;
				if(b.vb != Ni) b.Na.start = b.Na[O] + d;
				b.vb != fn && (b.Na.end += d);
				this.ki.Da(this.Ek);
				this.Ck.Da(this.Ek);
				a[ob]()
			}
		};
		V.gt = function(a, b, c) {
			var d = this.Zb.Na,
				e = this.Zb.vb;
			e == By.vp || e == By.Gv ? (a -= d[O], b -= d.end) : e == By.Hv ? (a -= d[O], b = d.end - d[O] - this.ni) : (a = d[O] - d.end + this.ni, b -= d.end);
			return pr(c, a, b)
		};
		V.xn = function(a, b) {
			if(b.lp()) {
				var c = this.Zb;
				c.Lk = b[Wb];
				c.vb = a.vb;
				b[ob]()
			}
		};
		V.sk = function(a) {
			if(a.lp()) {
				var b = this.Zb;
				W(b.vb) && W(b.Na) && (this.ii ? this.mp(this.sp(b.Na[O]), this.sp(b.Na.end)) && this.Sk(n) : this.Sk(n));
				b.vb = l;
				a[ob]()
			}
		};
		V.sp = function(a) {
			for(var b = this.Sd[I], c = 0; c < b - 1; c++)
				if(a <= this.Sd[c + 1] && a >= this.Sd[c]) return a - this.Sd[c] < this.Sd[c + 1] - a ? this.Sd[c] : this.Sd[c + 1];
			return a
		};
		V.Jg = function(a, b) {
			this.Zb.vb ? this.Xv(b[Wb], b[Xb]) || this.sk(b) : Ja(b[Ec][zc], a.Ig ? a[F] == sm ? Zk : Xh : yi)
		};
		V.Xv = function(a, b) {
			var c = this.l.a;
			return a > c[C] && a < c[C] + c[w] && b > c.top && b < c.top + c[Q]
		};
		V.ji = function() {
			this.Cp()
		};
		V.Sk = function(a) {
			var b = this.getRange();
			W(b) && google[wc][eb][Xa](this, Xl, {
				start: b[O],
				end: b.end,
				inProgress: a
			})
		};
		V.Fp = function(a) {
			W(a) && a.cc()
		};
		V.clearChart = function() {
			this.Fp(this.ki);
			this.Fp(this.Ck);
			this.qa.clearChart();
			this.Nb = l;
			Xr(this)
		};
		ca("google.visualization.CoreChart", gy);
		la(gy[K], Hi, gy[K][Kc]);
		la(gy[K], pj, gy[K][lc]);
		la(gy[K], Fm, gy[K][Nb]);
		la(gy[K], "dump", gy[K].ox);
		la(gy[K], "clearChart", gy[K].clearChart);
		ca("google.visualization.AreaChart", ly);
		la(ly[K], Hi, ly[K][Kc]);
		la(ly[K], pj, ly[K][lc]);
		la(ly[K], Fm, ly[K][Nb]);
		ca("google.visualization.BarChart", vy);
		la(vy[K], Hi, vy[K][Kc]);
		la(vy[K], pj, vy[K][lc]);
		la(vy[K], Fm, vy[K][Nb]);
		ca("google.visualization.BubbleChart", uy);
		la(uy[K], Hi, uy[K][Kc]);
		la(uy[K], pj, uy[K][lc]);
		la(uy[K], Fm, uy[K][Nb]);
		ca("google.visualization.CandlestickChart", wy);
		la(wy[K], Hi, wy[K][Kc]);
		la(wy[K], pj, wy[K][lc]);
		la(wy[K], Fm, wy[K][Nb]);
		ca("google.visualization.ColumnChart", xy);
		la(xy[K], Hi, xy[K][Kc]);
		la(xy[K], pj, xy[K][lc]);
		la(xy[K], Fm, xy[K][Nb]);
		ca("google.visualization.ComboChart", yy);
		la(yy[K], Hi, yy[K][Kc]);
		la(yy[K], pj, yy[K][lc]);
		la(yy[K], Fm, yy[K][Nb]);
		ca("google.visualization.LineChart", oy);
		la(oy[K], Hi, oy[K][Kc]);
		la(oy[K], pj, oy[K][lc]);
		la(oy[K], Fm, oy[K][Nb]);
		ca("google.visualization.PieChart", zy);
		la(zy[K], Hi, zy[K][Kc]);
		la(zy[K], pj, zy[K][lc]);
		la(zy[K], Fm, zy[K][Nb]);
		ca("google.visualization.ScatterChart", py);
		la(py[K], Hi, py[K][Kc]);
		la(py[K], pj, py[K][lc]);
		la(py[K], Fm, py[K][Nb]);
		ca("google.visualization.SparklineChart", ny);
		la(ny[K], Hi, ny[K][Kc]);
		la(ny[K], pj, ny[K][lc]);
		la(ny[K], Fm, ny[K][Nb]);
		ca("google.visualization.SteppedAreaChart", my);
		la(my[K], Hi, my[K][Kc]);
		la(my[K], pj, my[K][lc]);
		la(my[K], Fm, my[K][Nb]);
		ca("google.visualization.RangeSelector", Ay);
		la(Ay[K], Hi, Ay[K][Kc]);
		la(Ay[K], "getRange", Ay[K].getRange);
		la(Ay[K], "setRange", Ay[K].setRange);
	})();
	google.loader.loaded({
		"module": "visualization",
		"version": "1.0",
		"components": ["corechart", "default", "format"]
	});
	google.loader.eval.visualization = function() {
		eval(arguments[0]);
	};
	if(google.loader.eval.scripts && google.loader.eval.scripts['visualization']) {
		(function() {
			var scripts = google.loader.eval.scripts['visualization'];
			for(var i = 0; i < scripts.length; i++) {
				google.loader.eval.visualization(scripts[i]);
			}
		})();
		google.loader.eval.scripts['visualization'] = null;
	}
})();