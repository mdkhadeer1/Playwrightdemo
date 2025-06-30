exports.CartPage =
class CartPage{

    constructor(page){
        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';

    }

    async checkProductInCart(ProductName){
        const productInCart = await this.page.$$(this.noOfProducts);
        for(const product of productInCart){
            if(ProductName === await product.textContent()){
                return true;
               break;

            }
        }
    }
}