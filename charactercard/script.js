const character = {
  name: "Snortleblat",
  characterClass: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "image.png",

  attacked() {
    this.health = Math.max(0, this.health - 20);

    if (this.health === 0) {
      return `${this.name} has died.`;
    }

    return `${this.name} lost 20 health.`;
  },

  levelUp() {
    this.level += 1;
    return `${this.name} advanced to level ${this.level}.`;
  }
};

const nameElement = document.querySelector("#character-name");
const classElement = document.querySelector("#character-class");
const levelElement = document.querySelector("#character-level");
const healthElement = document.querySelector("#character-health");
const imageElement = document.querySelector("#character-image");
const statusElement = document.querySelector("#status-message");

const attackButton = document.querySelector("#attack-button");
const levelButton = document.querySelector("#level-button");

function displayCharacter() {
  nameElement.textContent = character.name;
  classElement.textContent = character.characterClass;
  levelElement.textContent = character.level;
  healthElement.textContent = character.health;
  imageElement.src = character.image;
}

attackButton.addEventListener("click", () => {
  const message = character.attacked();

  displayCharacter();
  statusElement.textContent = message;

  if (character.health === 0) {
    attackButton.disabled = true;
    levelButton.disabled = true;
    alert("Character Died");
  }
});

levelButton.addEventListener("click", () => {
  statusElement.textContent = character.levelUp();
  displayCharacter();
});

displayCharacter();