const inputName = (document.getElementById("input-name"));
const inputImage = (document.getElementById("input-image"));
const inputContent = (document.getElementById("input-content"));
const inputMedia = (document.getElementById("input-media"));
const inputReactions = (document.getElementById("input-reactions"));
const inputComments = (document.getElementById("input-comments"));
const inputShares = (document.getElementById("input-shares"));

const previewName = (document.getElementById("preview-name"));
const previewImage = (document.getElementById("preview-image"));
const previewDate = (document.getElementById("preview-date"));
const previewContent = (document.getElementById("preview-content"));
const previewReactions = (document.getElementById("preview-reactions"));
const previewComments = (document.getElementById("preview-comments"));
const previewShares = (document.getElementById("preview-shares"));

function buildContent() {


    return (inputContent.value) ? inputContent.value : "No text posted.";
};

document.getElementById("input-btn").addEventListener("click", () => {
    const date = Date.now();
    const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    console.log("clicked button - creating preview.");
    previewImage.src = URL.createObjectURL(inputImage.files[0]);
    previewName.innerHTML = ((inputName.value) ? inputName.value : "Ada Lovelace");
    previewDate.innerHTML = new Intl.DateTimeFormat('default', dateFormat).format(date);
    previewContent.innerHTML = buildContent();
    previewReactions.innerHTML = ((inputReactions.value) ? inputReactions.value : "0") + " reactions";
    previewComments.innerHTML = ((inputComments.value) ? inputComments.value : "0") + " comments";
    previewShares.innerHTML = ((inputShares.value) ? inputShares.value : "0") + " shares";
});