let temlate = document.createElement("template")

temlate.innerHTML = `
    <link rel="stylesheet" href="styles/footer.css">
     <footer>
    <div class="footer">
        <div class="container">
            <div class="footer-info">
                <div class="footer-img">
                    <img src="images/icon/logo.png">
                </div>
                <div class="social-icons">
                    <p>سبد <span>بازار</span></p>
                    <div class="icons-container">
                        <div class="icons">
                            <img class="icon" src="images/icon/facebook-svgrepo-com.svg" alt="">
                        </div>
                        <div class="icons">
                            <img class="icon" src="images/icon/instagram-svgrepo-com.svg" alt="">
                        </div>
                        <div class="icons">
                            <img class="icon" src="images/icon/google-svgrepo-com.svg" alt="">
                        </div>
                        <div class="icons">
                            <img class="icon" src="images/icon/twitter-svgrepo-com.svg" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="menu-links">
                    <ul class="menu-link">
                        <li><a href="index.html">صفحه نخست</a></li>
                        <li><a href="AQ.html">سوالات متداول</a></li>
                        <li><a href="">درباره ما</a></li>
                    </ul>
                    <ul class="menu-link">
                        <li><a href="">ثبت سفارش</a></li>
                        <li><a href="">نمونه برگ</a></li>
                        <li><a href="contact.us.html">تماس با ما</a></li>
                    </ul>
                </div>
                <div class="validity-img">
                    <img src="images/icon/n1.png" alt="">
                    <img src="images/icon/n2.png" alt="">
                </div>
            </div>
        </div>
    </div>
   </footer>
`

class footer extends HTMLElement {
    constructor (){
        super()

        this.attachShadow({mode : 'open'})
        this.shadowRoot.appendChild(temlate.content.cloneNode(true))
    }

    connectedCallback() {
        
    }
    
}

export {footer}