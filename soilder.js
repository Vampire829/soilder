const soldier = {
    name: "paunder",
    health: 10,
    weapon: {
      nameWeapon: "ak-47",
      cartridges: 30,
    },
    supplies: 3,
    fire: function () {
      this.weapon.cartridges--;
      console.log("бах-бах");
      if (this.weapon.cartridges === 0) {
        return "обойма пуста. Перезаредитесь";
      }
    },
    recharge: function () {
      this.weapon.cartridges = 30;
      this.supplies--;
      console.log("перезарядка...");
      if (this.supplies === 0) {
        return "не осталось припасов";
      }
    },
    hurt: function () {
      this.health--;
      if (this.health === 0) {
        return "Ты проиграл";
      }
    },
  };
  console.log(soldier.recharge());