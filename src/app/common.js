class Common {
  getMethod(url, data, callback) {
    fetch(url, {
      'method': 'GET',
      'body': data
    }).then((value) => {
      return value.json();
    }).then((value) => {
      callback(value);
    })
  }

  postMethod(url, data, callback) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((value) => {
      return value.json();
    }).then((value) => {
      callback(value);
    });
  }
}

export default new Common();
