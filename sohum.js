//// For a version of this using a form instead of JavaScript, see https://codepen.io/samdutton/pen/MBxxbm

// For a complete example in a header element with a shopping cart and branding, see https://codepen.io/samdutton/pen/ZjZgNP

const searchInput = document.querySelector('#search input');
const searchIcon = document.querySelector('#search svg');

searchInput.onkeyup = (event) => {
  if (event.keyCode === 13) {
    openSearchPage();
  }
};

searchIcon.onclick = openSearchPage;

function openSearchPage() {
  const query = searchInput.value;
    // document.location.href = `/search/${query}`;
  alert(query);
}
