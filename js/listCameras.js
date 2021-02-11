async function main() {
    try {
        const camerasRaw = await fetch('http://localhost:3000/api/cameras').then(r => r.json());
        const cameras = camerasRaw.map(value => new Camera(value))

        
        const $cameras = document.getElementById('cameras')
        const $templateCamera = document.getElementById('cameras_template').content;

        cameras.forEach(camera => {
            const $newTemplateCamera = $templateCamera.cloneNode(true);
            $newTemplateCamera.querySelector('.camera_name').innerText = camera.name
            $newTemplateCamera.querySelector('.camera_lenses').innerText = 'Objectif: ' + camera.lenses[0]
            $newTemplateCamera.querySelector('.camera_image').src = camera.imageUrl
            $newTemplateCamera.querySelector('.camera_id').innerText = 'Ref: ' + camera.id
            $newTemplateCamera.querySelector('.camera_description').innerText = camera.description
            $newTemplateCamera.querySelector('.camera_price').innerText = camera.price / 100 + ',00€'
            $newTemplateCamera.querySelector('.moreinfo').href = 'product.html?id=' + camera.id;
            $cameras.append($newTemplateCamera);
        });
        // $cameras.innerHTML = cameras
        //     .map(teddy => teddy.toHtml())
        //     .join('<hr>');
    } catch (error) {

    }
}

main();