function Tabs(target, settings) {
    this.target = document.querySelector(target)
    this.settings = settings

    this.initTabs = () => {
        this.createButtonsWrap
        Array.from(this.target.children).forEach((item, index) => {
            if (!item.classList.contains('tabs__toggler-wrap')) {
                item.classList.add('tabs__item');
                if(index === 0) {
                    item.classList.add('--open');
                }
                item.setAttribute('data-tabId', index)
                this.target.querySelector('.tabs__toggler-wrap').appendChild(this.createButtons(item.getAttribute('data-tab_title'), index))
            }
        })
    }
    this.createButtons = (title, index) => {
        let btn = document.createElement('button')
        btn.classList.add('tabs__toggler')
        btn.innerText = title ? title : 'tab #' + index
        btn.addEventListener('click', function (){
            this.target.querySelectorAll('.tabs__item').forEach(item=>{
                item.classList.remove('--open')
            })
            this.target.querySelector(`.tabs__item[data-tabid="${index}"]`).classList.add('--open')
        })
        return btn
    }
    this.createButtonsWrap = () => {
        let div = document.createElement('div')
        div.classList.add('tabs__toggler-wrap')
        this.target.appendChild(div)
    }
}

let tabs = new Tabs('.tabs')

tabs.initTabs()