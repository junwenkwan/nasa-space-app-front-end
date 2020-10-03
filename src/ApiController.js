export default class ApiController{
    constructor(){
        this.flaskUrl = "http://localhost:5000";
        this.AWSUrl = "http://3.133.101.18:80/"
    }

    async getCurrentFireAPI() {   
        //Do not USE
        
    }

    async updateAssetsAPI(currentDateTime) {
        let url =  this.AWSUrl + "update_assets"

        var dateString = currentDateTime.toISOString().substr(0,10)
        dateString = "2020-01-01"

        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Accept", "application/json")

        var dataBody = {
            datetime: dateString
        }
        let jsonBody = JSON.stringify(dataBody)
        console.log(jsonBody)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: jsonBody
        };

        let response = await fetch(url, requestOptions)
        let data = await response.json()
        let updateSuccess = (data.update_assets == 1)? true: false
        return updateSuccess
    }

    async getPredictionAPI(topLeftCoordinate, bottomRightCoordinate, currentDateTime) {
        let url = this.AWSUrl + "predict"

        var dateString = currentDateTime.toISOString().substr(0,10)
        dateString = "2020-01-01"

        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Accept", "application/json")

        var dataBody = {
            top_left_latlng: topLeftCoordinate,
            bottom_right_latlng: bottomRightCoordinate,
            datetime: dateString
        }
        let jsonBody = JSON.stringify(dataBody)
        console.log(jsonBody)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: jsonBody
        };

        let response = await fetch(url, requestOptions)
        let data = await response.json()
        let fireArray = data.class_id
        return fireArray
    }
}

