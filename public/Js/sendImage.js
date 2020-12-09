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

    //Return image to client



    async function postData() {
        const form = document.querySelector("#form");
        const formData = new FormData(form);
        console.log('FormData', formData)


        //Post data
        try {
            const result = await fetch('/api/uploads', {
                method: 'POST',
                body: formData,
            })

            //Return image to the client

            const { imagePath } = await result.json();
            const image = document.createElement('img');
            image.src = imagePath;
            containerImage.appendChild(image);



        } catch (error) {
            console.error('Error', error)
        }
    }
    postData();

})