const url = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

$.getJSON(
    url, {
        tags: "circle",
        tagmode: "any",
        format: "json"
    }
).done(data => {
    console.log(data)
    const images = document.getElementsByClassName('image')

    Object.values(images).forEach(
        (img) => {
            const imgIndex = Math.floor(Math.random() * data.items.length);
            const backgroundImg = data.items[imgIndex].media.m;
            img.style.backgroundImage = "url('" + backgroundImg + "')";

            console.log(img)
            console.log(backgroundImg)
        }
    )
});
