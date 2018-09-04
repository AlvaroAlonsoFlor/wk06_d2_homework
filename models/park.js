const Park = function (name, ticketPrice, dinosaurs = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function () {
  let index = this.dinosaurs.indexOf(this.name)
  this.dinosaurs.splice(index, 1)
};

Park.prototype.findMostPopular = function () {

  let dinosaurs = this.dinosaurs;
  let guests = 0;
  let dinosaur = 'bla';
  for (let i = 0; i < dinosaurs.length; i++) {
    let dinosaurGuests = dinosaurs[i].guestsAttractedPerDay;
    if (guests < dinosaurGuests) {
      guests = dinosaurGuests;
      dinosaur = dinosaurs[i];
    }
  }

  return dinosaur;

};

Park.prototype.findDinosaursBySpecies = function (species) {
  let dinosaurs = this.dinosaurs;
  const result = dinosaurs.filter(dinosaur => dinosaur.species === species);
  return result;
};


module.exports = Park;
