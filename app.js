$.ready(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            let {latitude, longitude} = pos.coords;
            alert(latitude + ',' + longitude);
        })
    } else {
        console.log('Geolocation is not supported!');
    }
})