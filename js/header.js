let temlate = document.createElement("template")

temlate.innerHTML = `
    <link rel="stylesheet" href="styles/header.css">
     <header>
        <div class="bg-header">
            <div class="container">
                <div class="status">
                    <span class="status-header_box">تمامی موجودی ها بروز است</span>
                    <span class="status-header_box">زمان تحویل از ساعت :15:00</span>
                </div>
            </div>
        </div>
        <nav class="nav">
            <div class="container">
                <div class="header-bar">
                    <div class="icon"><img src="/images/icon/logo.png" alt=""></div>
                      <button class="hamburger">☰</button>
                    <ul class="nav-bar_list">
                        <button class="close-submenu">×</button>
                        <li class="item-list"><img src="/images/icon/menu.png" alt=""><a href="index.html">صفحه نخست</a></li>
                        <li class="item-list list-items"><img src="/images/icon/menu.png"><a href="#">برگه ها</a>
                        <ul class="submenu">
                            <li><a href="#">برگه ۱</a></li>
                            <li><a href="#">برگه ۲</a></li>
                            <li><a href="#">برگه ۳</a></li>
                        </ul>
                </li>

                        <li class="item-list"><img src="/images/icon/menu.png" alt=""><a href="AQ.html">پرسش و پاسخ</a></li>
                        <li class="item-list"><img src="/images/icon/menu.png" alt=""><a href="contact.us.html">تماس با ما</a></li>
                    </ul>
                    <div class="input-form">
                        <input class="serch-box" placeholder="نام مواد غذایی خود را وارد نمایید" type="text">
                    </div>
                </div>

            </div>
        </nav>
    </header>
`

class header extends HTMLElement {
    constructor (){
        super()

        this.attachShadow({mode : 'open'})
        this.shadowRoot.appendChild(temlate.content.cloneNode(true))
    }

    connectedCallback() {
        const hamburgerMenu = this.shadowRoot.querySelector(".hamburger");
        const navbar = this.shadowRoot.querySelector(".nav-bar_list");

        // تابعی برای بررسی تغییر سایز صفحه
        
        document.documentElement.scrollTop === 0 ? this.shadowRoot.querySelector(".bg-header").style.opacity = "1" : null
        document.addEventListener("scroll", () => {
            if (document.documentElement.scrollTop === 0) {
                this.shadowRoot.querySelector(".bg-header").style.opacity = "1";
            } else {
                this.shadowRoot.querySelector(".bg-header").style.opacity = "0";
            }
    
            // چک کنیم که هدر از یه مقدار مشخص پایین‌تر اومده یا نه
            let headerHeight = this.shadowRoot.querySelector(".bg-header").offsetHeight;
            let nav = this.shadowRoot.querySelector(".nav");
    
            if (window.scrollY > headerHeight) {
                nav.style.position = "fixed";
                nav.style.top = "0";
                nav.style.width = "100%";
                nav.style.zIndex = "1000";
                hamburgerMenu.style.top = '1.5rem'
            } else {
                nav.style.position = "absolute";
                nav.style.top = "2rem";
            }
        });
       
        hamburgerMenu.addEventListener("click" , () => {
            navbar.classList.toggle('nav-bar_list--open')

        } ) 

            this.shadowRoot.querySelector(".close-submenu").addEventListener("click" , () => {
            this.shadowRoot.querySelector(".nav-bar_list").classList.remove("nav-bar_list--open")
        })
         }
    
}

export {header}