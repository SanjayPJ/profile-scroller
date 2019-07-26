const age_element = document.getElementById("age");
const gender_element = document.getElementById("gender");
const location_element = document.getElementById("location");
const email_element = document.getElementById("email");
const image_element = document.getElementById("image");
const name_element = document.getElementById('name');
const next_button = document.getElementById('next');

const loadContent = () => {
    const profileIterator = new Promise(function (resolve, reject) {
        let profileCount = 10;
        let nextIndex = 0;

        fetch('https://randomuser.me/api/').then(res => {
            return res.json()
        }).then(data => {
            const { name, dob, gender, location, email, picture } = data.results[0];
            console.log('i m here');
            return resolve({
                next: () => {
                    nextIndex++;
                    console.log(nextIndex);
                    return nextIndex < profileCount ? {
                        value: {
                            name: name.first + " " + name.last,
                            image: picture.large,
                            age: dob.age,
                            gender: gender,
                            location: location.street,
                            email: email,
                        }, done: false
                    } : { done: true };
                }
            });
        }).catch(err => {
            console.log(err);
        });
    });

    profileIterator.then(function (data) {
        const currentProfile = data.next().value;
        console.log(currentProfile);
        age_element.innerText = currentProfile.age;
        gender_element.innerText = currentProfile.gender;
        location_element.innerText = currentProfile.location;
        email_element.innerText = currentProfile.email;
        image_element.src = currentProfile.image;
        name_element.innerText = currentProfile.name;
    });
}

loadContent();

next_button.addEventListener('click', () => {
    loadContent();
});