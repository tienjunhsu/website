(function () {
    var _ozclick = "0";
    var _oziframe = "0";
    var _oz_updatetail = "0";
    var _ozpoc = "";
    var _ozrec = "ozrec";
    var _ozjcnt_type = "__COUNT__";
    var K = undefined;
    K = {
        bY: function () {
            this.cn = "1497.oadz.com";
            this.ca = "s.oadz.com";
            this.cD = "cnt;C1;1497;.howbuy.com:.ehowbuy.com:.howbuy.qa;6W5nzxrmQZikyz2EubBY0/1hy3o=;";
            this.dc = "jcnt;C1;1497;.howbuy.com:.ehowbuy.com:.howbuy.qa;+o9K1k80IrC57vjmXGBMv8yLmFc=;";
            this.eN = "10615";
            this.eZ = "10619";
            this.an = 50;
            if (_ozjcnt_type == 1) {
                this.an = 5;
            }
            this.L = window;
            this.bj = this.L.top;
            this.bg = this.L.screen;
            this.aF = this.L.document;
            this.cW = navigator;
            this.dX = (this.cW.appName == "Microsoft Internet Explorer");
            this.bW = new Image();
            this.ba = new Image();
            this.bJ = this.cD.split(";")[2];
            this.bP = undefined;
            this.aB = undefined;
            this.F = undefined;
            this.G = undefined;
            this.ai = undefined;
            this.bC = undefined;
            this.t = undefined;
            this.ab = undefined;
            this.bN = undefined;
            this.aa = undefined;
            this.ae = undefined;
            this.bn = undefined;
            this.v = 0;
            this.ad = 0;
            this.aK = 768;
            this.as = 512;
            this.cs = 1536;
            this.cb = 1024;
            this.dO = 2048;
            this.ct = 3;
            this.ak = undefined;
            this.dJ = "\x49\x4e\x50\x55\x54";
            this.cl = "\x62\x75\x74\x74\x6f\x6e";
            this.cd = "\x69\x6d\x61\x67\x65";
            this.ep = "\x73\x75\x62\x6d\x69\x74";
            this.bX = "\x62\x6f\x64\x79";
            this.dg = "\x68\x74\x6d\x6c";
            this.ff = "\x46\x4c\x41\x53\x48";
            this.aY = "\x4f\x5a\x5f\x30\x61\x5f" + this.bJ;
            this.aR = "\x4f\x5a\x5f\x31\x55\x5f" + this.bJ;
            this.bp = "\x4f\x5a\x5f\x31\x59\x5f" + this.bJ;
            this.dq = "\x4f\x5a\x5f\x31\x4b\x5f" + this.bJ;
            this.bZ = "\x4f\x5a\x5f\x31\x53\x5f" + this.bJ;
            this.cG = "\x4f\x5a\x5f\x53\x49\x5f" + this.bJ;
        }, cz: function () {
            if (!this.bP) {
                if (this.az(0).indexOf("https") == 0) {
                    this.bP = "https://" + this.ca + "/" + this.cD;
                } else {
                    this.bP = "http://" + this.cn + "/" + this.cD;
                }
            }
            return this.bP;
        }, bw: function () {
            if (!this.aB) {
                if (this.az(0).indexOf("https") == 0) {
                    this.aB = "https://" + this.ca + "/" + this.dc;
                } else {
                    this.aB = "http://" + this.cn + "/" + this.dc;
                }
            }
            return this.aB;
        }, ay: function (aT, ac, ax, ab) {
            var C = "";
            if (ax && ax > 0) {
                C = aT + "=" + ac + ";expires=" + ax.toGMTString() + ";path=/;domain=" + ab;
            } else {
                C = aT + "=" + ac + ";path=/;domain=" + ab;
            }
            this.aF.cookie = C;
        }, af: function (aT) {
            var C = this.aF.cookie, dC, bF, cN = C.indexOf(aT + "=");
            if (cN != -1) {
                dC = cN + aT.length + 1;
                bF = C.indexOf(";", dC);
                if (bF == -1) {
                    bF = C.length;
                }
                return C.substring(dC, bF);
            }
            return null;
        }, bv: function () {
            var bi = undefined;
            if (!this.ab) {
                this.ab = this.aF.domain;
                if (this.ab.indexOf(".") > -1) {
                    var k = this.ab.split(".");
                    this.ab = k[k.length - 2] + "." + k[k.length - 1];
                    if (k.length > 2 && k[k.length - 3] != "www") {
                        bi = k[k.length - 2];
                        if (bi.length <= 2 || (bi == "com" || bi == "edu" || bi == "gov" || bi == "net" || bi == "org" || bi == "mil")) {
                            this.ab = k[k.length - 3] + "." + bi + "." + k[k.length - 1];
                        }
                    }
                }
            }
            return this.ab;
        }, az: function (bL) {
            var bq = this.as;
            if (typeof(bL) != "undefined" && bL == 1) {
                bq = this.cb;
            }
            var T = "";
            try {
                try {
                    T = this.bj.location.href;
                } catch (ex) {
                    T = this.L.location.href;
                }
            } catch (ex) {
            }
            if (!T) {
                T = "-";
            }
            if (T.length > bq) {
                T = T.substring(0, bq);
            }
            T = escape(T);
            return T;
        }, du: function (bL) {
            var bq = this.as;
            if (typeof(bL) != "undefined" && bL == 1) {
                bq = this.cb;
            }
            var au = "";
            try {
                au = this.L.location.href;
            } catch (ex) {
            }
            if (!au) {
                au = "-";
            }
            if (au.length > bq) {
                au = au.substring(0, bq);
            }
            au = escape(au);
            return au;
        }, ap: function (bL) {
            var df = this.cs;
            if (typeof(bL) != "undefined" && bL == 1) {
                df = this.dO;
            }
            if (!this.F) {
                try {
                    try {
                        this.F = this.bj.document.referrer;
                    } catch (ex) {
                        this.F = this.aF.referrer;
                    }
                    if (!this.F) {
                        this.F = this.bj.opener.location.href;
                    }
                } catch (ex) {
                }
                if (!this.F) {
                    this.F = "-";
                }
                if (this.F.length > df) {
                    this.F = this.F.substring(0, df);
                }
                this.F = escape(this.F);
            }
            return this.F;
        }, ao: function (H, cj) {
            try {
                if (H && cj && H.getAttribute(cj)) {
                    return H.getAttribute(cj).toString();
                }
            } catch (ex) {
            }
            return null;
        }, am: function (H) {
            if (H && H.name) {
                return H.name.toString();
            } else {
                if (this.ao(H, "name")) {
                    return this.ao(H, "name");
                } else {
                    if (H && H.id) {
                        return H.id.toString();
                    } else {
                        return "-";
                    }
                }
            }
        }, cv: function (H) {
            var j = 1, aJ = 0;
            while (H && j <= 50) {
                H = H.parentNode;
                j++;
                if (H && H.tagName == "DIV") {
                    var bM = this.am(H);
                    if (bM && bM.indexOf("__") == 0 && bM.length > 2) {
                        aJ = 1;
                        break;
                    }
                }
            }
            if (aJ == 1) {
                return H;
            } else {
                return null;
            }
        }, dF: function (H, cC) {
            if (!H.onclick) {
                H.onclick = cC;
            } else {
                if (this.dX) {
                    H.attachEvent("onclick", cC);
                } else {
                    H.addEventListener("click", cC, false);
                }
            }
        }, cX: function () {
            var j = 0;
            if (typeof(K.L.frames) != "undefined" && K.L.frames) {
                for (j = 0; j < K.L.frames.length; j++) {
                    try {
                        K.dF(K.L.frames[j].document, K.aP);
                    } catch (ex) {
                    }
                }
            }
            if (K.L["__99_5D9_pageonload"]) {
                K.L["__99_5D9_pageonload"]();
            }
        }, co: function (H) {
            var j = 1;
            while (H && H.tagName != "A" && H.tagName != "AREA" && j <= 10) {
                H = H.parentNode;
                j++;
            }
            if (H && (H.tagName == "A" || H.tagName == "AREA")) {
                return H;
            } else {
                return null;
            }
        }, fM: function (H) {
            var j = 1, aL = undefined, l = undefined;
            if (_ozclick == 1) {
                l = this.am(H);
                while (H && j <= 5 && !(l && l.indexOf("__") == 0 && l.length > 2 && H.onclick)) {
                    H = H.parentNode;
                    l = this.am(H);
                    j++;
                }
                if (H && H.onclick && l && l.indexOf("__") == 0 && l.length > 2) {
                    return H;
                }
            } else {
                if (H && H.tagName) {
                    aL = H.tagName.toLowerCase();
                }
                while (H && !H.onclick && j <= 5 && aL != this.bX && aL != this.dg) {
                    if (H.parentNode && H.parentNode.tagName) {
                        H = H.parentNode;
                        aL = H.tagName.toLowerCase();
                        j++;
                    } else {
                        return null;
                    }
                }
                if (H && H.onclick && aL != this.bX && aL != this.dg) {
                    return H;
                }
            }
            return null;
        }, dr: function (val) {
            var dj = /^\d*$/;
            if (dj.test(val)) {
                return true;
            } else {
                return false;
            }
        }, cP: function () {
            var V = Math.floor(new Date().getTime() / 1000);
            var dQ = 0;
            var C = "-";
            try {
                var ak = this.af(this.cG);
                if (ak) {
                    C = ak;
                    var cJ = C.indexOf("sTime=");
                    var cT = C.indexOf("&sIndex=");
                    var cw = "-";
                    if (cJ < 0) {
                        dQ++;
                        cw = "sTime=" + V;
                    } else {
                        cw = C.substring(0, cT);
                    }
                    var bo = 0;
                    if (cT < 0) {
                        dQ++;
                        bo = 999999;
                    } else {
                        bo = C.substring(C.indexOf("&sIndex=") + 8);
                        if (!this.dr(bo)) {
                            bo = 999999;
                        } else {
                            bo++;
                        }
                    }
                    C = cw + "&sIndex=" + bo;
                    this.ay(this.cG, C, 0, this.bv());
                } else {
                    C = "sTime=" + V + "&sIndex=1";
                    this.ay(this.cG, C, 0, this.bv());
                }
            } catch (ex) {
            }
            return C + "&sret=" + dQ;
        }, aP: function (O) {
            if (K.v < K.an) {
                K.ak = K.cP();
                var aG = null, aE = "-", R = null, l = "-", h = null, bs = null, J = null, aM = null, aH = 0, aU = 0, bI = 0, i = 0;
                if (!O) {
                    if (K.L.event) {
                        O = K.L.event;
                        aG = O.srcElement;
                    } else {
                        try {
                            for (i = 0; i < K.L.frames.length; i++) {
                                if (K.L.frames[i].event) {
                                    O = K.L.frames[i].event;
                                    aG = O.srcElement;
                                }
                            }
                        } catch (ex) {
                        }
                    }
                } else {
                    if (O.target) {
                        aG = O.target;
                    } else {
                        if (O.srcElement) {
                            aG = O.srcElement;
                        }
                    }
                }
                if (O && aG) {
                    bs = K.co(aG);
                    if (bs && bs.href) {
                        h = bs;
                        R = "A";
                        l = escape(K.am(h));
                        aE = escape(h.href);
                        if (!aE) {
                            aE = "-";
                        }
                    } else {
                        if (aG.tagName == K.dJ && (aG.type == K.cl || aG.type == K.cd || aG.type == K.ep)) {
                            h = aG;
                            R = K.dJ;
                            l = escape(K.am(h));
                        } else {
                            h = K.fM(aG);
                            if (h) {
                                R = h.tagName;
                                l = escape(K.am(h));
                            }
                        }
                    }
                    if (h) {
                        if (R && R != "-") {
                            aM = K.cv(h);
                            K.bn = K.ao(h, _ozpoc);
                            K.ae = K.ao(h, _ozrec);
                            if (typeof(O.pageX) != "undefined") {
                                aU = O.pageX;
                                bI = O.pageY;
                            } else {
                                if (typeof(O.x) != "undefined") {
                                    aU = O.x;
                                    bI = O.y;
                                }
                            }
                            if (aM) {
                                var dR = escape(K.am(aM));
                                J = R + "*" + l + "*" + aU + "*" + bI + "*" + dR;
                            } else {
                                J = R + "*" + l + "*" + aU + "*" + bI;
                            }
                            aH = Math.floor((new Date()).getTime() / 1000);
                            if (l.toLowerCase().indexOf("__ad_") == 0 || l.toLowerCase().indexOf("__zntg_") == 0) {
                                K.dI(l, aH, aE);
                            } else {
                                if (aM) {
                                    l = escape(K.am(aM));
                                    if (l.toLowerCase().indexOf("__ad_") == 0 || l.toLowerCase().indexOf("__zntg_") == 0) {
                                        K.dI(l, aH, aE);
                                    }
                                }
                            }
                        }
                        if (R && K.bw() != "") {
                            try {
                                if (K.v == 0 && K.ad == 1) {
                                    K.v = 1;
                                    K.ad = K.v + 1;
                                } else {
                                    if (K.ad == 1) {
                                        K.v = 2;
                                    } else {
                                        K.v = K.ad;
                                    }
                                    K.ad = K.v + 1;
                                }
                            } catch (ex) {
                                K.v = 99;
                            }
                            K.cr(J, K.v, aE);
                            K.cY(100);
                        }
                    }
                }
            }
        }, cY: function (bQ) {
            var eR = (new Date()).getTime();
            while (((new Date()).getTime() - eR) < bQ) {
            }
        }, de: function (type) {
            var bQ = (new Date()).getTime();
            if (type == 1) {
                bQ = Math.floor(bQ / 1000);
            }
            return "ozrand=" + bQ;
        }, cr: function (J, v, aE) {
            if (this.bw() != "" && this.az(1) && this.G && this.t && J && v > 0 && aE) {
                this.ba.src = this.bw() + "?" + v + "&" + this.az(1) + "&" + this.G + "&" + this.t + "&" + J + "&" + aE + "&" + this.ar() + "&" + this.de(1);
            }
        }, eD: function (J, v, bO, bA) {
            if (this.bw() != "" && bA && this.G && J && v > 0 && bO) {
                this.ba.src = this.bw() + "?" + v + "&" + bA + "&" + this.G + "&-&" + J + "&" + bO + "&" + this.ar() + "&" + this.de(1);
            }
        }, eE: function (J, v, bO, cp, bA) {
            if (this.bw() != "" && bA && this.G && J && v > 0 && bO) {
                this.ba.src = this.bw() + "?" + v + "&" + bA + "&" + this.G + "&-&" + J + "&" + bO + "&" + this.ar() + "&" + cp + "&" + this.de(1);
            }
        }, dZ: function (aw) {
            var aW;
            try {
                if (typeof(aw) != "undefined") {
                    if (aw.length > this.aK) {
                        aw = aw.substring(0, this.aK);
                    }
                    aW = escape("&" + aw);
                }
            } catch (ex) {
            }
            if (typeof(aW) == "undefined") {
                aW = "-";
            }
            this.bN = aW;
            this.aa = 1;
        }, di: function (aN, bV) {
            var ag;
            try {
                if (typeof(aN) != "undefined") {
                    if (aN.length > this.aK) {
                        aN = aN.substring(0, this.aK);
                    }
                    ag = escape("&" + aN);
                }
            } catch (ex) {
            }
            if (typeof(ag) == "undefined") {
                ag = "-";
            }
            if (bV) {
                this.bC = ag;
            }
            return ag;
        }, dn: function (al, bV) {
            var aS;
            try {
                if (typeof(al) != "undefined" && al.indexOf("#") == 0 && al.length > 1) {
                    aS = escape(al);
                }
            } catch (ex) {
            }
            if (typeof(aS) == "undefined") {
                aS = "-";
            }
            if (bV) {
                this.t = aS;
            }
            return aS;
        }, cq: function (eQ) {
            try {
                var aI = /^\d+$/;
                return aI.test(eQ);
            } catch (ex) {
            }
            return false;
        }, cE: function () {
            var bD = undefined;
            try {
                bD = this.cW.userAgent;
                if (bD && bD.toLowerCase().indexOf("alexa") > -1) {
                    return 1;
                }
            } catch (ex) {
            }
            return 0;
        }, cu: function () {
            var bu = 0, aq = 0;
            if (this.bg) {
                bu = this.bg.width;
                aq = this.bg.height;
                if (bu && aq && this.cq(bu) && this.cq(aq)) {
                    return bu + "*" + aq;
                }
            }
            return "0*0";
        }, dA: function () {
            var bz = "-";
            try {
                bz = escape(this.aF.title.substring(0, 30));
            } catch (ex) {
            }
            if (!bz) {
                bz = "-";
            }
            var bG = undefined;
            try {
                if (_ozuid) {
                    bG = escape(_ozuid);
                }
            } catch (ex) {
            }
            if (!bG) {
                bG = "-";
            }
            var bH = undefined;
            try {
                if (_ozvid) {
                    bH = escape(_ozvid);
                }
            } catch (ex) {
            }
            if (!bH) {
                bH = "-";
            }
            var cO = this.dw();
            if (!cO) {
                cO = "-";
            }
            var cL = 0;
            try {
                var ax = new Date().getTime();
                if (_oztime && ax > _oztime) {
                    cL = ax - _oztime;
                }
            } catch (ex) {
            }
            var aD = undefined;
            try {
                if (_oznvs) {
                    aD = escape(_oznvs);
                }
            } catch (ex) {
            }
            if (!aD) {
                aD = "-";
            }
            if (!this.ak) {
                this.ak = "-";
            }
            var V = Math.floor(new Date().getTime() / 1000);
            var bm = this.dm(V);
            var cB = "0";
            if (bm.indexOf("&ltime=") != -1) {
                cB = bm.substr(bm.indexOf("&ltime=") + 7);
            }
            var bh = this.dM(true, V);
            var aQ = this.dP();
            var aZ = this.cR();
            return "ozlvd=" + cB + "&ozept=" + bz + "&ozsru=" + bG + "&ozsat=" + escape("-") + "&ozver=" + escape("-") + "&ozscr=" + this.cu() + "&ozplt=" + cL + "&ozos=" + escape("-") + "&ozalx=" + this.cE() + "&oznvs=" + aD + "&ozsac=" + cO + "&ozccu=" + escape(bm) + "&ozccy=" + escape(bh) + "&ozcck=" + escape(aQ) + "&ozccs=" + escape(aZ) + "&ozvid=" + bH + "&ozsi=" + escape(this.ak);
        }, ar: function () {
            var bG = undefined;
            try {
                if (_ozuid) {
                    bG = escape(_ozuid);
                }
            } catch (ex) {
            }
            if (!bG) {
                bG = "-";
            }
            var bH = undefined;
            try {
                if (_ozvid) {
                    bH = escape(_ozvid);
                }
            } catch (ex) {
            }
            if (!bH) {
                bH = "-";
            }
            if (!this.bn) {
                this.bn = "-";
            }
            if (!this.ae) {
                this.ae = "-";
            }
            if (!this.bC) {
                this.bC = "-";
            }
            if (!this.ak) {
                this.ak = "-";
            }
            if (!this.bN) {
                this.bN = "-";
            }
            if (!this.aa || this.aa != 1) {
                this.bN = "-";
            }
            this.aa = 2;
            var aD = undefined;
            try {
                if (_oznvs) {
                    aD = escape(_oznvs);
                }
            } catch (ex) {
            }
            if (!aD) {
                aD = "-";
            }
            var V = Math.floor(new Date().getTime() / 1000);
            var bm = this.dm(V);
            var bh = this.dM(false, V);
            var aQ = this.dP();
            var aZ = this.cR();
            return "ozsru=" + bG + "&ozscr=" + this.cu() + "&ozpoc=" + escape(this.bn) + "&ozprm=" + this.bC + "&oznvs=" + aD + "&ozrec=" + escape(this.ae) + "&ozccu=" + escape(bm) + "&ozccy=" + escape(bh) + "&ozcck=" + escape(aQ) + "&ozccs=" + escape(aZ) + "&ozvid=" + bH + "&ozsi=" + escape(this.ak) + "&ozclickprm=" + this.bN;
        }, ei: function (t, bC) {
            var T = undefined;
            if (_oziframe == 0) {
                T = this.az(1);
            } else {
                T = this.du(1);
            }
            if (this.ai && this.ai != "-") {
                this.G = this.ai;
            } else {
                this.G = this.ap(1);
            }
            var bE = T;
            var bb = this.G;
            bE = this.cS(bE, "ozs");
            bb = this.cS(bb, "ozs");
            this.bW.src = this.cz() + "?1&" + bE + "&" + bb + "&" + t + "&" + bC + "&" + this.dA();
            if (t == "-") {
                this.ai = T;
            } else {
                this.ai = T + t;
            }
        }, fc: function (t, bC) {
            var T = undefined;
            if (_oziframe == 0) {
                T = this.az(1);
            } else {
                T = this.du(1);
            }
            if (this.ai && this.ai != "-") {
                this.G = this.ai;
            } else {
                this.G = this.ap(1);
            }
            var bE = T;
            var bb = this.G;
            this.bW.src = this.cz() + "?1&" + bE + "&" + bb + "&" + t + "&" + bC + "&" + this.dA();
            if (t == "-") {
                this.ai = T;
            } else {
                this.ai = T + t;
            }
        }, cS: function (be, bd) {
            var aI;
            var dN = 0;
            while (dN < this.ct) {
                aI = new RegExp("%26" + bd + "%3D(.+?)%26", "g");
                if (be.match(aI)) {
                    be = be.replace(aI, "%26");
                    dN++;
                } else {
                    break;
                }
            }
            aI = new RegExp("%26" + bd + "%3D(.+?)$", "i");
            be = be.replace(aI, "");
            aI = new RegExp("%3F" + bd + "%3D(.+?)%26");
            be = be.replace(aI, "%3F");
            aI = new RegExp("%3F" + bd + "%3D(.+?)$");
            be = be.replace(aI, "");
            return be;
        }, cA: function (O) {
            var cV = 1;
            try {
                if (O.eventPhase && O.eventPhase == 0) {
                    cV = 0;
                }
            } catch (ex) {
            }
            if (cV) {
                if (!this.L.event) {
                    this.aP(O);
                } else {
                    this.aP();
                }
            }
        }, dH: function (l, R, bS, aX) {
            var J = "";
            var fs = "-";
            var dh = "-";
            var cQ = "-";
            if (l && l != "") {
                if (this.v < this.an) {
                    this.v++;
                    if (typeof(R) != "undefined" && R != "") {
                        dh = R;
                    }
                    if (typeof(bS) != "undefined" && bS != "") {
                        fs = bS;
                        J = dh + "*" + l + "*0*0*" + bS;
                    } else {
                        J = dh + "*" + l + "*0*0";
                    }
                    if (typeof(aX) != "undefined" && aX != "") {
                        if (aX.length > this.as) {
                            aX = aX.substring(0, this.as);
                        }
                        cQ = aX;
                    }
                    this.cr(J, this.v, cQ);
                    this.cY(100);
                }
            }
        }, dK: function (dk, bk) {
            var bV = 0;
            if (typeof(_oz_updatetail) != "undefined" && _oz_updatetail == 1) {
                bV = 1;
                this.v = 0;
                this.ad = 1;
            }
            var ag = this.di(dk, bV);
            var aS = this.dn(bk, bV);
            this.ei(aS, ag);
        }, dI: function (l, aH, bK) {
            var T = this.az(0), C = this.af(this.aY), j = 0, aj = 0, cK = 0;
            l = escape(l);
            if (C) {
                for (j = 0; j < C.length; j++) {
                    if (C.charAt(j) == "&") {
                        aj++;
                        if (aj == 1) {
                            cK = j + 1;
                        }
                    }
                }
                if (aj < 4) {
                    C = C + "&" + l + "*" + aH + "*" + T + "*" + bK;
                } else {
                    if (aj == 4 && cK > 0) {
                        C = C.substr(cK) + "&" + l + "*" + aH + "*" + T + "*" + bK;
                    }
                }
            } else {
                C = l + "*" + aH + "*" + T + "*" + bK;
            }
            this.ay(this.aY, C, 0, this.bv());
        }, dw: function () {
            var ac = undefined, V = Math.floor((new Date()).getTime() / 1000), C = "", bB = undefined, ah = undefined, j = 0;
            try {
                bB = this.af(this.aY).split("&");
                for (j = 0; j < bB.length; j++) {
                    ah = bB[j].split("*");
                    if ((V - ah[1]) < 900 && ah[2] == escape(this.ap(0)) && ah[3] == this.az(0)) {
                        ac = ah[0];
                    } else {
                        C += (C == "" ? "" : "&") + bB[j];
                    }
                }
                this.ay(this.aY, C, 0, this.bv());
            } catch (ex) {
            }
            return ac;
        }, dm: function (V) {
            var C = "-";
            try {
                C = this.af(this.aR);
                var ds = new Date();
                var aV = 0;
                if (!C) {
                    var cU = Math.round(ds.getTime() / 1000);
                    var bx = cU.toString(16);
                    var cg = bx.length;
                    bx = bx.substring(cg - 7, cg);
                    var cf = "";
                    for (var j = 0; j < 3; j++) {
                        var cI = Math.floor(Math.random() * 255);
                        var da = cI.toString(16);
                        cf += (da.length == 1 ? "0" : "") + da;
                    }
                    var dv = "v" + bx + cf + ".0";
                    C = "vid=" + dv + "&ctime=" + V + "&ltime=" + aV;
                } else {
                    if (C && C.indexOf("ctime=") != -1) {
                        var bc = C.substr(C.indexOf("ctime=") + 6);
                        var cZ = bc.indexOf("&");
                        if (cZ != -1) {
                            bc = bc.substring(0, cZ);
                        }
                        if (bc.match(/^\d*$/)) {
                            aV = new Number(bc);
                        }
                    }
                    C = C.substring(0, C.lastIndexOf("&ctime")) + "&ctime=" + V + "&ltime=" + aV;
                }
                this.ay(this.aR, C, new Date(ds.getTime() + 252288000000), this.bv());
            } catch (ex) {
            }
            return C;
        }, dM: function (dE, V) {
            var C = "-";
            try {
                var bh = this.af(this.bp);
                var bm = this.af(this.aR);
                if (bh) {
                    C = bh;
                    C = C.substring(0, C.lastIndexOf("&ctime")) + bm.substring(bm.lastIndexOf("&ctime")) + "&compid=" + this.bJ;
                    this.ay(this.bp, C, 0, this.bv());
                }
                if (dE) {
                    var aA = 0;
                    var dp = "-";
                    var aC = "-";
                    var T = this.az(0);
                    var bU = this.ap(0);
                    var dG = 1;
                    var aJ = 0;
                    if (bU != "-") {
                        var cF = this.cz().split(";")[3].split(":");
                        for (var j = 0; j < cF.length; j++) {
                            if (bU.indexOf(cF[j]) != -1) {
                                dG = 0;
                            }
                        }
                        if (dG == 1) {
                            aA = 1;
                        }
                    }
                    var aO = T.lastIndexOf("%3Fozu_sid%3D");
                    if (aO == -1) {
                        aO = T.lastIndexOf("%26ozu_sid%3D");
                    }
                    var av = T.lastIndexOf("%3Fozs%3D");
                    if (av == -1) {
                        av = T.lastIndexOf("%26ozs%3D");
                    }
                    if (aO != -1 && aO > av) {
                        aA = 1;
                        var dz = T.split(/%3Fozu_sid%3D|%26ozu_sid%3D/);
                        if (dz.length > 1) {
                            var bf = dz[1];
                            var bF = bf.indexOf("%26");
                            if (bF != -1) {
                                bf = bf.substr(0, bF);
                            }
                            dp = bf;
                            aJ = 1;
                        }
                    }
                    if (av != -1 && av > aO) {
                        aA = 1;
                        var dB = T.split(/%3Fozs%3D|%26ozs%3D/);
                        for (var j = 1; j < dB.length && j < 4; j++) {
                            var by = dB[j];
                            var bF = by.indexOf("%26");
                            if (bF != -1) {
                                by = by.substr(0, bF);
                            }
                            if (by.indexOf("-") == -1) {
                                aC = by;
                                aJ = 2;
                                break;
                            } else {
                                var ci = by.split("-");
                                if (ci.length == 2 && ci[1] == this.bJ) {
                                    aC = ci[0];
                                    aJ = 2;
                                    break;
                                }
                            }
                        }
                    }
                    if (!bh && bU == "-") {
                        aA = 1;
                    }
                    if (aA) {
                        C = "erefer=" + bU + "&eurl=" + T + "&etime=" + V + bm.substring(bm.lastIndexOf("&ctime")) + "&compid=" + this.bJ;
                        this.ay(this.bp, C, 0, this.bv());
                        if (dp != "-" || aC != "-") {
                            var aQ = "";
                            var cc = C.indexOf("&etime=");
                            if (cc != -1) {
                                aQ = "etime=" + V + "&ozu_sid=" + dp + "&ozs=" + aC + "&flag=" + aJ + "&compid=" + this.bJ;
                                this.ay(this.dq, aQ, new Date(new Date().getTime() + 30 * 86400 * 1000), this.bv());
                                this.ay(this.bZ, aQ, 0, this.bv());
                            }
                        }
                    }
                }
            } catch (ex) {
            }
            return C;
        }, dP: function () {
            var aQ = "-";
            try {
                var ac = this.af(this.dq);
                if (ac) {
                    aQ = ac;
                }
            } catch (ex) {
            }
            return aQ;
        }, cR: function () {
            var aZ = "-";
            try {
                var ac = this.af(this.bZ);
                if (ac) {
                    aZ = ac;
                }
            } catch (ex) {
            }
            return aZ;
        }, db: function () {
            try {
                if (typeof(this.ck) == "undefined") {
                    this.bY();
                    this.ck = 1;
                    this.ad = 1;
                    this.ce = 1;
                } else {
                    this.ck = 2;
                    this.ce = 2;
                }
                this.ak = this.cP();
                if (this.ce == 1) {
                    this.di(this.L._ozprm, 1);
                    this.dn(this.L._ozurltail, 1);
                    if (this.L.onload) {
                        this.L["__99_5D9_pageonload"] = this.L.onload;
                    }
                    this.L.onload = this.cX;
                    this.dF(this.aF, this.aP);
                    this.fc(this.t, this.bC);
                }
            } catch (ex) {
            }
            return this;
        }
    };
    if (typeof(_99_5D9) == "undefined") {
        _99_5D9 = K.db();
        __ozclk = function () {
            try {
                var O = _99_5D9.L.event || arguments.callee.caller.arguments[0];
                _99_5D9.cA(O);
            } catch (e) {
            }
        };
        __ozfac2 = function (dk, bk) {
            _99_5D9.dK(dk, bk);
        };
        __ozfaj2 = function (l, R, bS, aX) {
            _99_5D9.dH(l, R, bS, aX);
        };
        __setClickPrm = function (aw) {
            _99_5D9.dZ(aw);
        };
    }
})();