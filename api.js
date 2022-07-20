
const axios = require('axios')
const FormData = require('form-data');
//const { post } = require('request');
//const formData = require('FormData')
const host = 'your_host_url'
var sheredLinkFolder = '';

var token = '';
var folder = '';

var qtdanexos = 2;

var bodyFormData = new FormData()
bodyFormData.append('client_id', 'your-client-id')
bodyFormData.append('client_secret', 'your-client_secret')
bodyFormData.append('grant_type', 'client_credentials')
bodyFormData.append('box_subject_type', 'enterprise')
bodyFormData.append('box_subject_id', 'you-subid')

var obj1 = {"filename":"products (2) (2).csv","encoding":"7bit","mimetype":"text/csv","url":"https://pipedream-catcher-bodies.s3.amazonaws.com/6fae447a-c4de-4ebb-9067-e6332831a5cb?AWSAccessKeyId=ASIA5F5AGIEA722OP3N5&Expires=1658280951&Signature=XCGh1QHInHuiezEuXZNjSWT%2FURg%3D&x-amz-security-token=FwoGZXIvYXdzEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGPwv%2BG%2BaT6WPlzzACKNBMM5HO%2Bi%2FVrv1ueAUW8ma5tdmGrLrXPPmY5b11NxbtKy7aJglSs2RhiYuNW58%2FVzgbFh1hg0qVurAaYo4CEnJtOTByFcg1qJ3ZQEXLvAnflCWVd6ZcVTQGsmYnHt3S4HDqIJlUrRWXLp1Vd79mWKGD8OQPP6tK4UAFreewU5zJon%2FsiAEMXOeN5GEQU050baG7%2BfukzCxLJDJN2NspgWjM282rpSlOURTtNALcRyPCjYGBoX8Ma%2BWuZ6CrnzN60zBgOZbgfWdVVLHkOISod0eKtGmv3IcXzeKi2lo3hnQxURVlLo0hqfSpk8EGdDcvabDLzNUaE1nl8LXooZ9LxhuwJ5sOEDh%2FWYiPMqpfUyUvrY6BGm82MQM3SOkNIerz1%2FE3g8Sy5T9tUiCHWNSk%2B7%2BfMdLFK6WDwbwH6mc5dM5AeEeE1vkscX9LjuxkDD%2Bp88pSGmkZoMKl2Wf5QBTYqF9TSMRcAr1H1GflbMNXU5bakRc16aPnsJ6xxFLEsbTIsTD%2FujD%2BdRcvB0yD5MVtDZMTfivtJLjv%2BdE3YlWOYWhA37gQVguS0944h6iKK5Kf8elzyUAJ24Ft5v3hN1hJO6bsJxoWrOrskuLEmJVEcVETienYnNnmQslGyTczxWp57m4%2BHT7%2B0Oa%2Bv3JpNmG6UpHsZ%2FO3Nwi4hpWx%2BOMjp2TikQwZALEosUfZmRgtL0pyisl92WBjIq91t3iIQVFzB1hwP9ypXuJbvstByu24nDXG%2FY9qfD4N5MgwFThJRSF9gn"}

var obj2=  {"filename":"AdobeStock_385831905 (3).webp","encoding":"7bit","mimetype":"application/octet-stream","url":"https://pipedream-catcher-bodies.s3.amazonaws.com/6618e9e1-e32a-481b-8345-2f34e5f6c32a?AWSAccessKeyId=ASIA5F5AGIEA722OP3N5&Expires=1658280951&Signature=LZUE4PcpKChw%2FxRgH%2FYcY7%2BNyT8%3D&x-amz-security-token=FwoGZXIvYXdzEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGPwv%2BG%2BaT6WPlzzACKNBMM5HO%2Bi%2FVrv1ueAUW8ma5tdmGrLrXPPmY5b11NxbtKy7aJglSs2RhiYuNW58%2FVzgbFh1hg0qVurAaYo4CEnJtOTByFcg1qJ3ZQEXLvAnflCWVd6ZcVTQGsmYnHt3S4HDqIJlUrRWXLp1Vd79mWKGD8OQPP6tK4UAFreewU5zJon%2FsiAEMXOeN5GEQU050baG7%2BfukzCxLJDJN2NspgWjM282rpSlOURTtNALcRyPCjYGBoX8Ma%2BWuZ6CrnzN60zBgOZbgfWdVVLHkOISod0eKtGmv3IcXzeKi2lo3hnQxURVlLo0hqfSpk8EGdDcvabDLzNUaE1nl8LXooZ9LxhuwJ5sOEDh%2FWYiPMqpfUyUvrY6BGm82MQM3SOkNIerz1%2FE3g8Sy5T9tUiCHWNSk%2B7%2BfMdLFK6WDwbwH6mc5dM5AeEeE1vkscX9LjuxkDD%2Bp88pSGmkZoMKl2Wf5QBTYqF9TSMRcAr1H1GflbMNXU5bakRc16aPnsJ6xxFLEsbTIsTD%2FujD%2BdRcvB0yD5MVtDZMTfivtJLjv%2BdE3YlWOYWhA37gQVguS0944h6iKK5Kf8elzyUAJ24Ft5v3hN1hJO6bsJxoWrOrskuLEmJVEcVETienYnNnmQslGyTczxWp57m4%2BHT7%2B0Oa%2Bv3JpNmG6UpHsZ%2FO3Nwi4hpWx%2BOMjp2TikQwZALEosUfZmRgtL0pyisl92WBjIq91t3iIQVFzB1hwP9ypXuJbvstByu24nDXG%2FY9qfD4N5MgwFThJRSF9gn"}


var myarray = [obj1,obj2]



axios({
  method: "post",
  url: host,
  data: bodyFormData,
  headers: {"Content-Type": " application/x-www-form-urlencoded"}
}).then(function(response){
    //console.log(response)
    token = response.data.access_token
    const hostfolder = 'https://api.box.com/2.0/folders'
    let bodydata = {
       "name": "TesteUPSh",
       "parent": {
         "id": "0"
       }
    }
    axios({
        method: "post",
        url: hostfolder,
        data: bodydata,
        headers:  {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
    }).then((res)=>{
       // console.log(res)
        const upURL = "https://upload.box.com/api/2.0/files/content"
        folder = res.data.id

        let mybody = {
          "shared_link":{
            "access": "open",
            "password": null,
            "unshared_at": "2030-12-12T10:53:43-08:00",
            "permissions": {
              "can_download": true,
              "can_preview" : true
            }
           }
        }

        axios({
          url: `https://api.box.com/2.0/folders/${folder}?fields=shared_link`,
          method : "put",
          headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
          data: mybody
        }).then((res)=>{
          console.log(res)
          sheredLinkFolder = res.data.shared_link.url;

        }).catch((erro)=>{
           console.log(erro)
        })
        
        for(let i = 0;  i<myarray.length; i++){
          montareSubirArquivo(token, folder, myarray[i].url, myarray[i].filename)
        }
       
  
    }).catch((err)=>{
       console.log(err)
    })


}).catch(function(response){
    console.log(response)
})


//const { fileURLToPath } = require('url');
//const fs = require('fs');
function montareSubirArquivo(token,idFolder, imgUrl,name){
   var http = require('https');
   //var fs = require('fs');
    let imgurl = imgUrl;
    // let filename = "img7.webp"
    //var file = fs.createWriteStream(filename);
    let bodyFormDataUp = new FormData();
    //const timeElapsed = Date.now();
   // const today = new Date(timeElapsed);
    http.get(imgurl, function(response,token,idFolder, imgUrl,name) {
      //response.pipe(file)
      //file.close
        let atributos = {
                "name": name,
                "parent": {
                  "id": idFolder
                },
                "content_created_at": "2012-12-12T10:53:43-08:00",
                "content_modified_at": "2012-12-12T10:53:43-08:00"
        }

        bodyFormDataUp.append("attributes", JSON.stringify(atributos))
        bodyFormDataUp.append("file", response)

        axios({
           method: "post",
           url: "https://upload.box.com/api/2.0/files/content",
           data: bodyFormDataUp,
           headers: {"Content-Type": "multipart/form-data","Authorization": `Bearer ${token}` },
        }).then((res) => {
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })

    })

    
}













