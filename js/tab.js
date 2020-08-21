(function(d){
    var tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabnav__item'));
    var panels = Array.prototype.slice.apply(d.querySelectorAll('.panels__item'));

    d.getElementById('tabs').addEventListener('click', (e) => {
        if (e.target.classList.contains('tabnav__item')){
            var i = tabs.indexOf(e.target);
            tabs.map(tab => tab.classList.remove('active'));
            tabs[i].classList.add('active');

            panels.map(panel => panel.classList.remove('active'));
            panels[i].classList.add('active');

        }
    })
})(document);





(function(b){
    var tabs = Array.prototype.slice.apply(b.querySelectorAll('.dotnav__item'));
    var panels = Array.prototype.slice.apply(b.querySelectorAll('.panels__item'));

    b.getElementById('dotnav').addEventListener('click', (e) => {
        if (e.target.classList.contains('dotnav__item')){
            var i = tabs.indexOf(e.target);
            tabs.map(tab => tab.classList.remove('active'));
            tabs[i].classList.add('active');

            panels.map(panel => panel.classList.remove('active'));
            panels[i].classList.add('active');

        }
    })
})(document);
