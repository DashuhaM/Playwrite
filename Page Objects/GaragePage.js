import BasePage from "./BasePage";

const url = "/";

export default class extends BasePage {
    constructor(page){
        super(page);
    }
get AddCarBtn(){
    return this.page.getByRole('button', {name:'Add car'})
}

get AddCarModal(){
    return this.page.locator('.modal-header')
}


get BrandField(){
    return this.page.locator('#addCarBrand')
}

get ModelField(){
    return this.page.locator('#addCarModel')
}

get MileageField(){
    return this.page.locator('#addCarMileage')
}

get AddBtn(){
    return this.page.getByRole('button', {name: /^Add$/})
}

get CancelBtn(){
    return this.page.getByRole('button', {name: 'Cancel'})
}

get CarName(){
    return this.page.locator('.car_name')
}

get CloseBtn(){
    return this.page.locator('.close')
}





}

