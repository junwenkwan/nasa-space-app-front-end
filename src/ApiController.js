/*
Install Allow-CORS extension on browser
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

Install PapaParse, if fail to build
npm install react-papaparse --save

//ADD THIS IN YOUR PAGE
    import ApiController from './ApiController'
    let apiController = new ApiController()
    
    TO USE: apiController.getPredictionAPI(...)
*/

import { readString } from 'react-papaparse'
import predictionModel from './models'

export default class ApiController{
    constructor(){
        this.flaskUrl = 'http://localhost:5000'
        this.AWSUrl = 'http://3.133.101.18:80/'
    }

    async getCurrentFireAPI() {   
        let url = 'https://firms.modaps.eosdis.nasa.gov/data/active_fire/suomi-npp-viirs-c2/csv/SUOMI_VIIRS_C2_Australia_NewZealand_7d.csv'
        
        console.log('HTTP Request to ' + url)
        let request = await fetch(url)
        console.log(request.status)

        let csvString = await request.text()

        var result = readString(csvString, {
            header: true
        })

        var fireLocations = result.data
        var highConfidenceFire = fireLocations.filter( function(each) {
            each.latitude = Number(each.latitude)
            each.longitude = Number(each.longitude)
            each.bright_ti4 = Number(each.bright_ti4)
            each.track = Number(each.track)
            
            delete each.version
            delete each.satellite
            delete each.bright_ti5
            delete each.scan
            delete each.frp
            delete each.daynight
            return each.confidence === 'high'
        })

        console.log(highConfidenceFire)
        return highConfidenceFire
    }

    async updateAssetsAPI(currentDateTime) {
        let url =  this.AWSUrl + "update_assets"

        var dateString = currentDateTime.toISOString().substr(0,10)
        dateString = "2020-04-01"

        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Accept", "application/json")

        var dataBody = {
            date: dateString
        }
        let jsonBody = JSON.stringify(dataBody)
        console.log(jsonBody)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: jsonBody
        };

        console.log('HTTP Request to ' + url)
        console.log(requestOptions)
        let response = await fetch(url, requestOptions)
        console.log(response.status)

        let data = await response.json()
        let updateSuccess = (data.update_assets === 1)? true: false
        return updateSuccess
    }

    async getPredictionAPI(topLeftCoordinate, bottomRightCoordinate, currentDateTime) {
        let url = this.AWSUrl + "predict"

        var dateString = currentDateTime.toISOString().substr(0,10)
        dateString = "2020-04-01"

        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Accept", "application/json")

        var dataBody = {
            top_left_lat_lng: topLeftCoordinate,
            bottom_right_lat_lng: bottomRightCoordinate,
            date: dateString
        }
        let jsonBody = JSON.stringify(dataBody)
        console.log(jsonBody)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: jsonBody
        };

        console.log('HTTP Request to ' + url)
        console.log(requestOptions)
        let response = await fetch(url, requestOptions)
        console.log(response.status)

        let data = await response.json()

        var record =[]
        for (var i = 0; i<data.class_id.length; i++) {
            record.push(new predictionModel(data.latitude[i], data.longitude[i], data.class_id[i]))
        }
        console.log({record})

        return record
    }
}

