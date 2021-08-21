// Add your code here
function submitData(userName, userEmail) {
    const fetchRequest = fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(resp => resp.json())
        .then(data => {
            const p = document.createElement("p")
            p.innerHTML = data.id
            document.querySelector("body").appendChild(p)
        })
        .catch(error => {
            const p = document.createElement("p")
            p.innerHTML = error
            document.querySelector("body").appendChild(p)
        })
    return fetchRequest;
};
