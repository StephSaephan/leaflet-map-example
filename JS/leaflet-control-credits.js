L.controlCredits = function (t) {
    return new L.CreditsControl(t)
}, L.CreditsControl = L.Control.extend({
    options: {
        position: "bottomright"
    },
    initialize: function (t) {
        if (!t.text) throw "L.CreditsControl missing required option: text";
        if (!t.image) throw "L.CreditsControl missing required option: image";
        if (!t.link) throw "L.CreditsControl missing required option: link";
        L.setOptions(this, t)
    },
    onAdd: function (t) {
        this._map = t;
        var i = L.DomUtil.create("div", "leaflet-credits-control", i);
        i.style.backgroundImage = "url(" + this.options.image + ")", this.options.width && (i.style.paddingRight = this.options.width + "px"), this.options.height && (i.style.height = this.options.height + "px");
        var o = L.DomUtil.create("a", "", i);
        return o.target = "_blank", o.href = this.options.link, o.innerHTML = this.options.text, i.link = o, L.DomEvent.addListener(i, "mousedown", L.DomEvent.stopPropagation).addListener(i, "click", L.DomEvent.stopPropagation).addListener(i, "dblclick", L.DomEvent.stopPropagation).addListener(i, "click", function () {
            var t = this.link;
            L.DomUtil.hasClass(t, "leaflet-credits-showlink") ? L.DomUtil.removeClass(t, "leaflet-credits-showlink") : L.DomUtil.addClass(t, "leaflet-credits-showlink")
        }), this._container = i, this._link = o, i
    },
    setText: function (t) {
        this._link.innerHTML = t
    }
});
