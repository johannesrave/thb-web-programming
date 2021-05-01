const inputName = (document.getElementById("input-name"));
const inputImage = (document.getElementById("input-image"));
const inputContent = (document.getElementById("input-content"));
const inputMedia = (document.getElementById("input-media"));
const inputReactions = (document.getElementById("input-reactions"));
const inputComments = (document.getElementById("input-comments"));
const inputShares = (document.getElementById("input-shares"));

const previewName = (document.getElementById("preview-name"));
const previewImage = (document.getElementById("preview-avatar"));
const previewDate = (document.getElementById("preview-date"));
const previewContent = (document.getElementById("preview-content"));
const previewReactions = (document.getElementById("preview-reactions"));
const previewComments = (document.getElementById("preview-comments"));
const previewShares = (document.getElementById("preview-shares"));

function buildContent() {
    for (let child of previewContent.childNodes){
        previewContent.removeChild(child);
    }

    const postContent = document.createElement("p");

    if (inputContent.value) {
        postContent.innerHTML = inputContent.value;
    }
    else {
        postContent.innerHTML = "No text entered."
    }

    if (inputMedia.files[0]) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(inputMedia.files[0]);
        img.alt = "Uploaded media content."

        postContent.appendChild(img);
    }
    return postContent;
}

document.getElementById("input-btn").addEventListener("click", () => {
    const date = Date.now();
    const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    console.log("clicked button - creating preview.");
    previewImage.src = (inputImage.files[0]) ? URL.createObjectURL(inputImage.files[0]) : "";
    previewName.innerHTML = ((inputName.value) ? inputName.value : "Ada Lovelace");
    previewDate.innerHTML = new Intl.DateTimeFormat('default', dateFormat).format(date);
    previewContent.appendChild(buildContent());
    previewReactions.innerHTML = ((inputReactions.value) ? inputReactions.value : "0") + " reactions";
    previewComments.innerHTML = ((inputComments.value) ? inputComments.value : "0") + " comments";
    previewShares.innerHTML = ((inputShares.value) ? inputShares.value : "0") + " shares";
    if (previewReactions.innerHTML !== "0 reactions") {
        previewReactions.style.color = "#3b5998";
        previewReactions.style.fontStyle = "bold";
    }
    if (previewComments.innerHTML !== "0 comments") {
        previewComments.style.color = "#3b5998";
        previewComments.style.fontStyle = "bold";

    }
    if (previewShares.innerHTML !== "0 shares") {
        previewShares.style.color = "#3b5998";
        previewShares.style.fontStyle = "bold";

    }
});
