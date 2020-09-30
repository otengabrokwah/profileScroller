// Instantiate Get Profile
const getProfile = new GetProfile;

// Instantiate UI
const ui = new UI;


const profileNext = document.querySelector('#next');
// Reload On UI
nextTask()

// Add Event Listener
profileNext.addEventListener('click', nextTask);

function nextTask() {
    // Get Profile
    getProfile.getRandomProfile()
        .then((data) => {     
            const profile = dataIterator(data);
            const profileData = profile.next().value;
            if (profileData !== undefined) {
                // console.log(data)
                // Display Profile
                ui.profileDisplayTask(profileData)
            }else{
                // Reload Current Page
                window.location.reload();
            }
        })
        .catch((err) => {
            console.log(err)
        })

}


// Random User Profile Iterator
function dataIterator(dataProfile) {
    let dataIndex = 0;

    return {
        next: () => {
            if (dataIndex < dataProfile.length) {
                return {
                    value: dataProfile[dataIndex++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}





     //     document.getElementById('profileDisplay').innerHTML = `
     //       <ul class="list-group">
     //         <li class="list-group-item">Name: ${currentProfile.name}</li>
     //         <li class="list-group-item">Age: ${currentProfile.age}</li>
     //         <li class="list-group-item">Location: ${currentProfile.location}</li>
     //         <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
     //       </ul>
     //     `;

     //     document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
     //   } else {
     //     // No more profiles
     //     window.location.reload();
     //   }
     // }