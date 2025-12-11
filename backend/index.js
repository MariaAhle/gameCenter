function goToCategories() {
  const input = document.getElementById("nameInput").value.trim();
  if(input === "") {
    alert("Du skal skrive noget i feltet!");
    return false;
  }
  localStorage.setItem("playerName", input);  
  window.location.href = "categories.html"
}


