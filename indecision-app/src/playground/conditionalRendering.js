
const appRoot = document.getElementById('root');


const userName = 'Benjamin Franklin'
const userAge = 12
const userLocation = 'Wonderland'

const user = {
    name: userName,
    age: userAge,
    location: 'sicily'   
}

function getLocation(location) {
    if(location) {
        return <p>location: {location}</p>
    } else {
        return 'unknown location'
    }
}


const templateTwo = (
    <div>
    <h1>{user.name ? user.name : 'user name unknown'}</h1>
    {getLocation(user.location)}

    { user.age >= 18 && <p>Age: {user.age}</p>}    
    </div>
)    
    

ReactDOM.render(templateTwo, appRoot)