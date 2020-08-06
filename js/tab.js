(function(d){
    var tabs = Array.prototype.slice.apply(d.querySelectorAll('.tab-item'));
    var panels = Array.prototype.slice.apply(d.querySelectorAll('.panels-item'));

    d.getElementById('tabs').addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-item')){
            var i = tabs.indexOf(e.target);
            tabs.map(tab => tab.classList.remove('active'));
            tabs[i].classList.add('active');

            panels.map(panel => panel.classList.remove('active'));
            panels[i].classList.add('active');

        }
    })
})(document);





(function(b){
    var tabs = Array.prototype.slice.apply(b.querySelectorAll('.tab-item-min'));
    var panels = Array.prototype.slice.apply(b.querySelectorAll('.panels-item'));

    b.getElementById('dotnav').addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-item-min')){
            var i = tabs.indexOf(e.target);
            tabs.map(tab => tab.classList.remove('active'));
            tabs[i].classList.add('active');

            panels.map(panel => panel.classList.remove('active'));
            panels[i].classList.add('active');

        }
    })
})(document);
