const submitBtn = document.querySelector("#submit");
const containerImage = document.querySelector(".user-image");






//When the form is submit
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const file = document.querySelector("#file");
    if (file.files.length === 0) {
        console.log('Sorry this is not possible')
        return `Sorry this is not possible`
    }
    async function postData() {
        //Get data
        const dataFile = await fetch(file);
        const blob = await dataFile.blob();
        const url = URL.createObjectURL(blob);


        //Make the image appear to the client
        function imageAppeard() {
            const image = document.createElement('img');
            image.src = url;
            containerImage.appendChild(image);
        }
        imageAppeard();


        //Send data to the server

        const data = {
            url,
        }


        //Post data
        try {
            const result = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })


        } catch (error) {
            console.error('Error', error)
        }



    }
    postData();

})