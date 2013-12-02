(function() {
    var e = navigator.userAgent.toLowerCase();
    google.isOpera = e.indexOf("opera") != -1;
    google.isIE = document.all && e.indexOf("msie") != -1 && !google.isOpera;
    google.isSafari = e.indexOf("safari") != -1;
    google.time = function() {
        return (new Date).getTime()
    };
    google.log = function(a, d) { (new Image).src = "/gen_204?atyp=i&ct=" + a + "&cad=" + d + "&zx=" + google.time()
    };
    google.xhr = function() {
        var a = null;
        if (window.XMLHttpRequest) try {
            a = new XMLHttpRequest
        } catch(d) {} else if (window.ActiveXObject) for (var b = 0, c; c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"][b++];) try {
            a = new ActiveXObject(c);
            break
        } catch(d) {}
        return a
    };
    function h(a, d) {
        var b = document.defaultView && document.defaultView.getComputedStyle(a, ""),
        c = b && b.getPropertyValue(d);
        return document.defaultView && b && typeof c == "string" && parseInt(c, 10)
    }
    google.getHeight = function(a) {
        return h(a, "height") || a.offsetHeight
    };
    google.getWidth = function(a) {
        return h(a, "width") || a.offsetWidth
    };
    google.rhs = function() {};
    window.google.bind = function(a, d, b) {
        var c = "on" + d;
        if (a.addEventListener) a.addEventListener(d, b, false);
        else if (a.attachEvent) a.attachEvent(c, b);
        else {
            var i = a[c];
            a[c] = function() {
                var f = i.apply(this, arguments),
                g = b.apply(this, arguments);
                return f == undefined ? g: (g == undefined ? f: g && f)
            }
        }
    };
})();
(function() {
    window.google.stringify = function(a) {
        var c, d, i, b = "",
        e;
        switch (typeof a) {
        case "object":
            if (a) if (a instanceof Array || typeof a.join == "function" && typeof a.reverse == "function") {
                for (d = 0; d < a.length; ++d) {
                    e = window.google.stringify(a[d]);
                    if (b) b += ",";
                    b += e
                }
                return "[" + b + "]"
            } else if (typeof a.toString != "undefined") {
                for (d in a) {
                    e = a[d];
                    if (typeof e != "undefined" && typeof e != "function") {
                        e = window.google.stringify(e);
                        if (b) b += ",";
                        b += window.google.stringify(d) + ":" + e
                    }
                }
                return "{" + b + "}"
            }
            return "null";
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "string":
            i = a.length;
            b = '"';
            for (d = 0; d < i; d += 1) {
                c = a.charAt(d);
                if (c >= " ") {
                    if (c == "\\" || c == '"') b += "\\";
                    b += c
                } else switch (c) {
                case "\n":
                    b += "\\n";
                    break;
                case "\r":
                    b += "\\r";
                    break;
                case "\t":
                    b += "\\t";
                    break;
                default:
                    c = c.charCodeAt();
                    b += "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
                    break
                }
            }
            return b + '"';
        case "boolean":
            return String(a);
        default:
            return "null"
        }
    };
    google.History = {};
    var f = [];
    google.History.client = function(a) {
        f.push(a);
        return f.length - 1
    };
    var g = document.getElementById("hcache"),
    h = null;
    function j() {
        var a = g.value;
        h = !(!a) ? eval("(" + a + ")") : {}
    }
    google.History.save = function(a, c) {
        if (g) {
            j();
            h[a] = c;
            g.value = google.stringify(h)
        }
    };
    g && window.setTimeout(function() {
        j();
        for (var a = 0; a < f.length; ++a) if (h && h[a]) f[a].call(null, h[a])
    },
    0);
})();
(function() {
    var a = document.getElementById("tads"),
    b = document.getElementById("3po");
    google.rhs = function() {
        if (!google.drhs) if (document.getElementById("mbEnd") && (a || b)) {
            var d = google.getHeight(document.getElementById("rhsline")),
            c = a ? google.getHeight(a) : 0;
            if (b) c += google.getHeight(b) + 18;
            document.getElementById("rhspad").style.height = c > d ? Math.min(9999, c - d) + "px": (google.isIE ? "": 0)
        }
    };
    google.rhs();
    google.bind(window, "resize", google.rhs);
})();
(function() {
    var c, e, h, j = "",
    l = null,
    o = null,
    p = null,
    q = -1,
    s, t, u, v, w, x, z, A = 0,
    B = 0,
    C = null,
    D = 0;
    var F;
    var K = "clients1.google.com";
    var L = 0,
    aa = new RegExp("^[\\s\\u1100-\\u11FF\\u3040-\\u30FF\\u3130-\\u318F\\u31F0-\\u31FF\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uAC00-\\uD7A3\\uF900-\\uFAFF\\uFF65-\\uFFDC]+$");
    function ba(a, b, d, f, g) {
        s = a;
        t = b;
        z = ["/complete/search", "?hl=", google.kHL, "&gl=tw", (d ? "&ds=" + d: ""), (f ? "&pq=" + encodeURIComponent(f) : "")].join("");
        google.bind(s, "submit", M);
        t.setAttribute("autocomplete", "off");
        google.bind(t, "blur",
        function() {
            if (!L) N();
            L = 0
        });
        t.onkeypress = O;
        google.bind(t, "keyup", P);
        e = (h = (c = t.value));
        F = Q(t);
        u = document.createElement("table");
        u.cellSpacing = (u.cellPadding = "0");
        v = u.style;
        u.className = "gac_m";
        s.appendChild(u);
        N();
        R();
        google.bind(window, "resize", R);
        google.bind(window, "pageshow",
        function(m) {
            if (m.persisted) {
                w.value = "f";
                x.value = t.value
            }
        });
        window.setInterval(function() {
            var m = t.value;
            if (m != c) S(0);
            c = m
        },
        10);
        w = T("aq", "f");
        x = T("oq", e);
        var k = document.createElement("style");
        document.getElementsByTagName("head")[0].appendChild(k);
        var i = null;
        i = k.sheet;
        var n = function(m, Y) {
            var Z = m + " { " + Y + " }";
            i.insertRule(Z, i.cssRules.length);
        };
        n(".gac_m", "font-size:13px;cursor:default;line-height:17px;border:1px solid black;z-index:99;background:white;position:absolute;margin:0;");
        n(".gac_b", "background:#36c;color:white;");
        var y = "white-space:nowrap;overflow:hidden;text-align:left;padding-left:3px;";
        n(".gac_c", y);
        n(".gac_d", "white-space:nowrap;overflow:hidden;text-align:right;font-size:10px;color:green;padding:0 3px");
        n(".gac_b td", "color:white");
        n(".gac_e td", "padding:0 3px 2px;text-align:right;font-size:10px;line-height:15px");
        n(".gac_e span", "color:#00c;text-decoration:underline;cursor:pointer");
        U();
        (new Image).src = "http://" + K + "/generate_204";
    }
    function R() {
        if (u) {
            v.left = V(t, "offsetLeft") + "px";
            v.top = V(t, "offsetTop") + t.offsetHeight - 1 + "px";
            v.width = t.offsetWidth + "px";
        }
    }
    function T(a, b) {
        var d = document.createElement("input");
        d.type = "hidden";
        d.name = a;
        d.value = b;
        return s.appendChild(d)
    }
    function O(a) {
        var b = a.keyCode;
        if (b == 27 && ca()) {
            N();
            W(e);
            a.cancelBubble = true;
            return a.returnValue = false
        }
        if (b == 38 || b == 40) {
            B++;
            if (B % 3 == 1) S(b);
            return false
        }
    }
    function P(a) {
        var b = a.keyCode;
        if (B == 0 && !(b == 38 || b == 40)) S(b);
        B = 0;
    }
    function S(a) {
        if (a == 38 || a == 40) {
            L = 1;
            t.blur();
			alert(t);
            window.setTimeout(function() {
                t.focus()
            },
            10)
        }
        if (t.value != c) {
            e = t.value;
            F = Q(t);
            x.value = e
        }
        a == 40 && da(q + 1);
        a == 38 && da(q - 1);
        R();
        if (j != e && !C) C = window.setTimeout(N, 500);
        c = t.value;
        if (c == "" && !l) U()
    }
    function ea() {
        if (D) return;
        if (p) p.className = "gac_a";
        this.className = "gac_b";
        p = this;
        for (var a = 0, b; b = o[a]; a++) b == p && (q = a)
    }
    function da(a) {
        if (!j && e) {
            h = "";
            U();
            return
        }
        if (e != j || !l) return;
        if (!o || o.length <= 0) return;
        if (!ca()) {
            X();
            return
        }
        var b = o.length - 1;
        if (p) p.className = "gac_a";
        if (a == b || a == -1) {
            q = -1;
            W(e);
            t.focus();
            w.value = "f";
            return
        } else if (a > b) a = 0;
        else if (a < -1) a = b - 1;
        q = a;
        p = o.item(a);
        p.className = "gac_b";
        W(p.completeString);
        w.value = p.completeId
    }
    function N() {
        if (C) {
            window.clearTimeout(C);
            C = null
        }
        v.visibility = "hidden";
    }
    function X() {
        v.visibility = "visible";
        R();
        D = 1
    }
    function ca() {
        return v.visibility == "visible"
    }
    function fa(a) {
        A > 0 && A--;
        if (a[0] != e) return;
        if (C) {
            window.clearTimeout(C);
            C = null
        }
        j = a[0];
        u.innerHTML = "";
        var d = 0;
        for (var f = 0, g; f < a[1].length; f++) if (g = a[1][f]) {
            d++;
            var k = u.insertRow( - 1);
            k.onclick = function() {
                t.blur();
                W(this.completeString);
                M();
                s.submit();
            };
            k.onmousedown = ga;
            k.onmouseover = ea;
            k.onmousemove = function() {
                if (D) {
                    D = 0;
                    ea.call(this)
                }
            };
            k.completeString = g[0];
            k.completeId = g[2];
            k.className = "gac_a";
            var i = document.createElement("td");
            $(i, g[0]);
            i.className = "gac_c";
            k.appendChild(i);
            var r = document.createElement("td");
            $(r, g[1]);
            r.className = "gac_d";
            k.appendChild(r);
        }
        if (d > 0) {
            var n = u.insertRow( - 1);
            n.onmousedown = ga;
            var y = document.createElement("td");
            y.colSpan = 2;
            n.className = "gac_e";
            var m = document.createElement("span");
            n.appendChild(y);
            y.appendChild(m);
            $(m, "����");
            m.onclick = function() {
                N();
                j = "";
                window.clearTimeout(l);
                l = null;
                w.value = "x"
            }
        }
        q = -1;
        o = u.rows;
        (o.length > 0 ? X: N)()
    }
    function M() {
        N();
        if (x.value != t.value) w.value = o.item(q).completeId;
        else {
            x.value = "";
            if (A >= 10) w.value = "o"
        }
    }
	// U: fetch remove Script
    function U() {
        if (h != e && e) {
            A++;
            var a = document.createElement("script");
            a.setAttribute("id", "gac_a");
            a.src = "http://" + K + z + "&q=" + encodeURIComponent(e) + "&cp=" + F;
            var b = document.getElementById("gac_a"),
            d = document.getElementsByTagName("head")[0];
            if (b) d.removeChild(b);
            d.appendChild(a);
            t.focus()
        }
        h = e;
        var f = 100;
        for (var g = 1; g <= (A - 2) / 2; ++g) f *= 2;
        f += 50;
        l = window.setTimeout(U, f)
    }
    function W(a) {
        t.value = a;
        c = a
    }
    function V(a, b) {
        var d = 0;
        while (a) {
            d += a[b];
            a = a.offsetParent
        }
        return d
    }
    function $(a, b) {
        a.appendChild(document.createTextNode(b))
    }
    function ga(a) {
        a.stopPropagation();
        return false
    }
    function Q(a) {
        var b = 0,
        d = 0;
        if (ja(a)) {
            b = a.selectionStart;
            d = a.selectionEnd
        }
        return b && d && b == d ? b: 0
    }
    function ja(a) {
        try {
            return typeof a.selectionStart == "number"
        } catch(b) {
            return false
        }
    }
    window.google.ac = {
        i: ba,
        h: fa
    };
})();
(function() {
    window.ManyBox = {};
    var e = {},
    g = {},
    h = 1,
    j = google.History.client(i),
    k;
    function l(a) {
        for (var b in e) if (e[b].c && a(e[b])) return
    }
    function m(a, b, c, d, f) {
        this.c = a;
        this.i = b;
        this.B = d;
        this.o = f;
        this.q = "/mbd?" + (b ? "docid=" + b: "") + "&resnum=" + a.replace(/[^0-9]/, "") + "&mbtype=" + d + "&usg=" + c + "&hl=" + (google.kHL || "");
        this.e = {};
        this.l = "";
        g[a] = {
            r: 0,
            D: this.e,
            i: this.i,
            h: 0
        };
        this.n = 0
    }
    m.prototype.append = function(a) {
        this.l = "&" + a.join("&")
    };
    function n(a, b) {
        return document.getElementById("mb" + b + a.c)
    }
    function o(a, b) {
        a.g.style.paddingTop = b + "px";
        a.g.style.display = a.g.innerHTML ? "": "none";
        if (b > a.n) a.n = b
    }
    function r(a) {
        if (!a.A) {
            a.A = 1;
            a.d = n(a, "b");
            a.j = 0;
            a.a = n(a, "l");
            a.m = a.a.getElementsByTagName("DIV")[0];
            a.p = a.a.getElementsByTagName("A")[0];
            a.z = a.p.innerHTML;
            a.o = a.o || a.z;
            a.m.title = "���@�U�H���o�ԲӸ�T�C";
            a.a.F = function(b, c) {
                var d = s(a.a),
                f = t(a.a);
                return b > d - 5 && b < d + google.getWidth(a.a) + 5 && c > f - 5 && c < f + google.getHeight(a.a) + 5
            };
            a.g = n(a, "f");
            o(a, 0);
            a.a.onmousedown = u(a);
            a.a.onclick = v(a);
            a.a.go = function() {
                a.a.onmousedown();
                a.a.onclick()
            }
        }
    }
    function u(a) {
        return function() {
            if (g[a.c].h) {
                if (a.I++<3) google.log("manybox", [a.j ? "close": "open", "&id=", a.c, "&docid=", a.i, "&mbtype=", a.B, a.l].join(""))
            } else {
                var b = google.xhr();
                if (b) {
                    b.open("GET", a.q + a.l + "&zx=" + google.time());
                    a.t = 0;
                    b.onreadystatechange = function() {
                        if (b.readyState == 4) {
                            var c = 0;
                            if (b.status == 200) try {
                                eval(b.responseText);
                                c = 1
                            } catch(d) {}
                            if (!c && !a.C) {
                                g[a.c].h = 0;
                                a.C = 1;
                                a.q += "&cad=retry";
                                a.a.onmousedown()
                            } else {
                                a.u && z(a);
                                a.t = 0
                            }
                        }
                    };
                    a.t = 1;
                    b.send(null)
                }
                g[a.c].h = (a.I = 1)
            }
        }
    }
    function v(a) {
        return function() {
            g[a.c].h || a.a.onmousedown();
            (a.u = a.t) || z(a)
        }
    }
    function A(a) {
        if (!a.e.k) {
            a.e.k = "\x3cfont color\x3dred\x3e���~�G\x3c/font\x3e ���A���L�k�����z���n�D�C  �Цb 30 ���A�դ@���C";
            a.G = a.a.onclick;
            a.a.onclick = function() {
                h = 0;
                z(a);
                h = 1;
                a.b.parentNode.removeChild(a.b);
                g[a.c].h = (a.e.k = (a.v = 0));
                a.a.onclick = a.G
            }
        }
        if (!a.v) {
            a.v = 1;
            a.H = document.getElementById("mbEnd") && s(a.d) > s(document.getElementById("mbEnd"));
            a.b = document.createElement("div");
            o(a, 0);
            a.b.style.position = "absolute";
            a.b.style.paddingTop = (a.b.style.paddingBottom = "6px");
            a.b.style.display = "none";
            a.b.className = "med";
            var b = document.createElement("div");
            a.b.appendChild(b);
            b.className = "std";
            b.innerHTML = a.e.k;
            a.g.parentNode.insertBefore(a.b, a.g)
        }
    }
    function i(a) {
        h = 0;
        ManyBox.init();
        l(function(b) {
            if (b.i == a[b.c].i) {
                b.e = a[b.c].D;
                if (a[b.c].r != b.j) z(b)
            } else a[b.c].h = 0
        });
        g = a;
        h = 1;
        google.History.save(j, g)
    }
    ManyBox.create = function(a, b, c, d, f) {
        return new m(a, b, c, d, f)
    };
    ManyBox.register = function(a, b, c, d, f) {
        return e[a] = ManyBox.create(a, b, c, d, f)
    };
    ManyBox.init = function() {
        if (!k) {
            history.navigationMode = history.navigationMode && "fast";
            l(r);
            google.bind(document, "click",
            function(a) {
                a = a || window.event;
                var b = a.target || a.srcElement;
                while (b.parentNode) {
                    if (b.tagName == "A" || b.onclick) return;
                    b = b.parentNode
                }
                l(function(c) {
                    if (c.a.F(a.clientX, a.clientY)) {
                        c.a.go();
                        return 1
                    }
                })
            });
            k = 1
        }
    };
    function B(a, b) {
        a.b.style.clip = "rect(0px," + (a.d.width || "34em") + "," + (b || 1) + "px,0px)"
    }
    m.prototype.insert = function(a) {
        this.e.k = a;
        google.History.save(j, g)
    };
    function t(a) {
        return a.offsetTop + (a.offsetParent ? t(a.offsetParent) : 0)
    }
    function C(a) {
        return a.offsetLeft + (a.offsetParent ? C(a.offsetParent) : 0)
    }
    function s(a) {
        return C(a)
    }
    function D(a) {
        a.f = n(a, "cb");
        var b = a.f && a.f.getAttribute("mbopen");
        if (b) {
            eval(b);
            a.onopen(a.f)
        }
    }
    function E(a) {
        a.b.style.display = "none";
        a.m.style.backgroundPosition = "-114px -78px";
        a.p.innerHTML = a.z;
        a.j = (g[a.c].r = 0);
        google.History.save(j, g)
    }
    function F(a, b, c, d, f) {
        var w = c > 0 ? 150 : 75,
        x = google.time() - f,
        y = x < w && h ? x / w * c: (d > 1 ? c - 10 : c),
        p = Math.max(a.s, b + y),
        q = p - a.s;
        B(a, q);
        a.d.style.height = p < 0 ? 0 : (q ? p + "px": "");
        o(a, Math.max(0, q - 5));
        google.rhs();
        if (Math.abs(y) < Math.abs(c)) window.setTimeout(function() {
            F(a, b, c, d - 1, f)
        },
        30);
        else window.setTimeout(function() {
            c < 0 ? E(a) : D(a);
            if (!google.isIE && a.H) a.b.style.width = "100px";
            a.b.style.position = (a.d.style.height = "");
            o(a, 0);
            google.rhs();
            a.d.w = 0
        },
        0)
    }
    function z(a) {
        a.u = 0;
        if (!a.d.w) {
            a.d.w = 1;
            var b;
            if (!a.j) {
                a.s = google.getHeight(a.d);
                A(a);
                o(a, 0);
                a.n = 0;
                l(function(d) {
                    d.m.title = ""
                });
                a.m.style.backgroundPosition = "-126px -78px";
                a.p.innerHTML = a.o;
                B(a, 1);
                a.b.style.position = "absolute";
                a.b.style.display = "";
                a.j = (g[a.c].r = 1);
                google.History.save(j, g);
                b = a.b.offsetHeight
            } else {
                var c = a.f && a.f.getAttribute("mbclose");
                if (c) {
                    eval(c);
                    a.onclose(a.f)
                }
                b = a.s - google.getHeight(a.d);
                a.g.style.display = "none";
                o(a, a.n);
                a.b.style.position = "absolute"
            };
            F(a, google.getHeight(a.d), b, google.isSafari ? 2 : 1, google.time())
        }
    };
})();
if (!window.gbar || !gbar.close) {
    window.gbar = {};
    (function() {
        var b = window.gbar,
        f, h;
        b.qs = function(a) {
            var c = window.encodeURIComponent && (document.forms[0].q || "").value;
            if (c) a.href = a.href.replace(/([?&])q=[^&]*|$/,
            function(i, g) {
                return (g || "&") + "q=" + encodeURIComponent(c)
            })
        };
        function j(a, c) {
            a.visibility = h ? "hidden": "visible";
            a.left = c + "px"
        }
        b.tg = function(a) {
            a = a || window.event;
            var c = 0,
            i, g = window.navExtra,
            d = document.getElementById("gbi"),
            e = a.target || a.srcElement;
            a.cancelBubble = true;
            if (!f) {
                f = document.createElement(Array.every || window.createPopup ? "iframe": "div");
                f.frameBorder = "0";
                f.src = "#";
                d.parentNode.appendChild(f).id = "gbs";
                if (g) for (i in g) d.insertBefore(g[i], d.firstChild).className = "gb2";
                document.onclick = b.close
            }
            if (e.className != "gb3") e = e.parentNode;
            do c += e.offsetLeft;
            while (e = e.offsetParent);
            j(d.style, c);
            f.style.width = d.offsetWidth + "px";
            f.style.height = d.offsetHeight + "px";
            j(f.style, c);
            h = !h
        };
        b.close = function(a) {
            h && b.tg(a)
        }
    })();;
};
if (google.y.first) {
    for (var a = 0, b; b = google.y.first[a]; ++a) b();
    delete google.y.first
}
for (a in google.y) google.y[a][1] ? google.y[a][1].apply(google.y[a][0]) : google.y[a][0].go();
google.x = function(d, c) {
    c && c.apply(d);
    return false
};
