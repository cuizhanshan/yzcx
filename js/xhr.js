
var baseUrl = 'http://8.130.31.98:8888';
var baseUrl_80 = 'http://8.130.31.98:80';

// var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjMyMTE4MTUsInVzZXJJZCI6IntcImNyZWF0ZVRpbWVcIjpcIjIwMjEtMDUtMDcgMTQ6NDU6MjlcIixcImlkXCI6MTIsXCJtb2JpbGVcIjpcIjE4MzIxMjcyNzIwXCIsXCJwYXNzd29yZFwiOlwiYjI3N2Y4YjE5YjlhMmNmNDZkZTRlZjlhMzA1Nzg3NTRcIixcInJlYWxOYW1lXCI6XCJ3eW1cIixcInVzZXJOYW1lXCI6XCJ3YW5neW1cIixcInVzZXJSZW1hcmtzXCI6XCJhYWFcIn0ifQ.0GECLKQGukiwj74g30gToioz82N0s-7CmRtkbJh-PiE'
var token = ''

// 获取banner
function getBannerList (params, callback, errorCb) {
  $.ajax({
    url: baseUrl + '/inspection/banner/list',
    type: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf8',
      'token': token
    },
    data: JSON.stringify(params ? params : { "display": "", "title": "", "picId": "" }),
    crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
    success: function (res) {
      console.log(res)
      if (res.code === 200) {
        callback(res.data)
      } else {
        errorCb(res.msg)
      }
    }
  })
}

// 获取公司简介
function getCompanyInfo (index, callback, errorCb) {
  $.ajax({
    url: baseUrl + '/inspection/manage/' + index,
    type: 'get',
    headers: {
      'Content-Type': 'application/json;charset=utf8',
      'token': token
    },
    data: JSON.stringify(''),
    crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
    success: function (res) {
      console.log(res)
      if (res.code === 200) {
        callback(res.data)
      } else {
        errorCb(res.msg)
      }
    }
  })
}

// 获取行业动态
function getHangYeDongtai (params, callback, errorCb) {
  $.ajax({
    url: baseUrl + '/inspection/article/2',
    type: 'get',
    headers: {
      'Content-Type': 'application/json;charset=utf8',
      'token': token
    },
    data: JSON.stringify(params ? params : null),
    crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
    success: function (res) {
      console.log(res)
      if (res.code === 200) {
        callback(res.data)
      } else {
        errorCb(res.msg)
      }
    }
  })
}

// 获取行业动态
function getYouZhengDongTai (params, callback, errorCb) {
  $.ajax({
    url: baseUrl + '/inspection/article/1',
    type: 'get',
    headers: {
      'Content-Type': 'application/json;charset=utf8',
      'token': token
    },
    data: JSON.stringify(params ? params : null),
    crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
    success: function (res) {
      console.log(res)
      if (res.code === 200) {
        callback(res.data)
      } else {
        errorCb(res.msg)
      }
    }
  })
}

// http://8.130.31.98:8888/inspection/profiles/list
// 获取员工风采
function getYuanGongFengCai (index, callback, errorCb) {
  $.ajax({
    url: baseUrl + '/inspection/profiles/list',
    type: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf8',
      'token': token
    },
    data: JSON.stringify({ type: index, imgName: '' }),
    crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
    success: function (res) {
      console.log(res)
      if (res.code === 200) {
        callback(res.data)
      } else {
        errorCb(res.msg)
      }
    }
  })
}
function getQueryStr (query) {
  var keys = Object.keys(query)
  for (var i in query) {
    console.log(i)
  }
}
function getQueryStr (obj) {
  // 首先判断obj是否为真，为真则进行处理，不然直接return
  if (obj) {
    // 定义变量接收query字符串
    var query = ""
    // 循环遍历对象
    for (var i in obj) {
      // 定义变量接收对象的value值
      var value = obj[i]
      // 进行字符串拼接
      query += `&${i}=${value}`
    }
    // replace返回一个新的字符串，要用query重新接受一下，并把第一个&替换为?
    query = query.replace('&', '?')
    // 返回生成的query字符串
    return query
  }
  return ""
}

// 发送预约请求
function postToYuYue (query, data, callback, errorCb) {
  var formData = data
  $.each(query, function (key, val) {
    formData.append(key, val)
  })
  //   $.ajax({
  //     url: baseUrl + '/inspection/book',
  //     type: 'post',
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     },
  //     // params: params,
  //     // data: JSON.stringify(params),
  //     data: data,
  //     crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
  //     // contentType: false,
  // // 告诉jQuery不要去设置Content-Type请求头
  // processData: false,
  // // 告诉jQuery不要去处理发送的数据
  //     success: function (res) {
  //       console.log(res)
  //       if(res.code === 200){
  //         callback(res.data)
  //       }else{
  //         errorCb(res.msg)
  //       }
  //     }
  //   })
  var settings = {
    async: true,
    crossDomain: true,
    url: baseUrl + '/inspection/book',
    method: "POST",
    headers: {
      "cache-control": "no-cache",
    },
    processData: false,
    contentType: false,
    mimeType: "multipart/form-data",
    data: formData
  }

  $.ajax(settings).done(function (res) {
    // console.log(response);
          //  console.log(res)
        res = JSON.parse(res)
        if(res.code === 0){
          callback(res.msg)
        }else{
          errorCb(res.msg)
        }
  });
}