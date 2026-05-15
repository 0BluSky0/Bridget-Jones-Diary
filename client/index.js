const entryForm = document.querySelector("#entryForm")

entryForm.addEventListener("submit", createDiaryEntry)

async function createDiaryEntry(e) {
    e.preventDefault()

    const data = {
        date: document.querySelector("#date").value,
        time: document.querySelector("#time").value || null,
        category: document.querySelector("#category").value,
        text: document.querySelector("#text").value
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const response = await fetch("API LINK", options)
    console.log(response)

    let messageStatus = document.querySelector("#successMsg")

    if (response.status === 201) {
        e.target.reset()
        messageStatus.textContent = "Entry saved successfully"
        messageStatus.style.display = "block"
        setTimeout(() => {
            messageStatus.style.display = "none"
        }, 4000)
    } else {
        e.target.reset()
        messageStatus = document.querySelector("#errorMsg")
        messageStatus.textContent = "Failed to save entry"
        messageStatus.style.display = "block"
        setTimeout(() => {
            messageStatus.style.display = "none"
        }, 3000)
    }
}