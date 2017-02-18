!function (t, i) {
    function n(i, n) {
        this.element = i, this.options = t.extend({}, c, n), this._defaults = c, this._name = a, this.init()
    }

    var o, e, s, a = "pinterest_grid", c = {
        padding_x: 10,
        padding_y: 10,
        no_columns: 3,
        margin_bottom: 50,
        single_column_breakpoint: 700
    };
    n.prototype.init = function () {
        var n, o = this;
        t(i).resize(function () {
            clearTimeout(n), n = setTimeout(function () {
                o.make_layout_change(o)
            }, 11)
        }), o.make_layout_change(o), setTimeout(function () {
            t(i).resize()
        }, 500)
    }, n.prototype.calculate = function (n) {
        var a = this, c = 0, h = t(this.element);
        h.width();
        e = t(this.element).children(), s = n === !0 ? h.width() - a.options.padding_x : (h.width() - a.options.padding_x * a.options.no_columns) / a.options.no_columns, e.each(function () {
            t(this).css("width", s)
        }), o = a.options.no_columns, e.each(function (i) {
            var e, h = 0, u = 0, l = t(this), p = l.prevAll();
            e = n === !1 ? i % o : 0;
            for (var d = 0; d < o; d++)l.removeClass("c" + d);
            i % o === 0 && c++, l.addClass("c" + e), l.addClass("r" + c), p.each(function () {
                t(this).hasClass("c" + e) && (u += t(this).outerHeight() + a.options.padding_y)
            }), h = n === !0 ? 0 : i % o * (s + a.options.padding_x), l.css({left: h, top: u})
        }), this.tallest(h), t(i).resize()
    }, n.prototype.tallest = function (i) {
        for (var n = [], e = 0, s = 0; s < o; s++) {
            var a = 0;
            i.find(".c" + s).each(function () {
                a += t(this).outerHeight()
            }), n[s] = a
        }
        e = Math.max.apply(Math, n), i.css("height", e + (this.options.padding_y + this.options.margin_bottom))
    }, n.prototype.make_layout_change = function (n) {
        t(i).width() < n.options.single_column_breakpoint ? n.calculate(!0) : n.calculate(!1)
    }, t.fn[a] = function (i) {
        return this.each(function () {
            t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new n(this, i))
        })
    }
}(jQuery, window, document);