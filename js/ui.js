class UI{
    constructor() {
        this.showImage = document.querySelector('#imageDisplay');
        this.profileDisplay = document.querySelector('#profileDisplay');
    }


    profileDisplayTask(dataProfiles) {
        // Display Image
        this.showImage.innerHTML = `
            <img src="${dataProfiles.picture.large}">
        `

        // Display Information
        this.profileDisplay.innerHTML = `
        <ul class="list-group">
             <li class="list-group-item">Name: ${dataProfiles.name.title} ${dataProfiles.name.first} ${dataProfiles.name.last}</li>
              <li class="list-group-item">Age: ${dataProfiles.registered.age}</li>
              <li class="list-group-item">Location: ${dataProfiles.location.country}, ${dataProfiles.location.state}</li>
              <li class="list-group-item">Phone: ${dataProfiles.phone}</li>
        </ul>
        `
    }

}




