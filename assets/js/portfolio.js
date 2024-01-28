
function PortfolioItems(){

    var data  = `<div class="item">
                    <a href="#!" class="portfolio-fullimage add-effect">
                        <img src="assets/images/portfolio/12_personal/img_1.jpg" alt="image_not_found">
                        <span class="item-content-2">
                            <strong class="item-title">Creativia</strong>
                            <small class="item-brand">Branding</small>
                        </span>
                    </a>
                </div>`;

    for (let index = 0; index < 7; index++) {
        
        document.write(data);
        
    }

}