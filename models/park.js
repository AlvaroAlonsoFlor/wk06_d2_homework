const Park = function (name, ticketPrice, dinosaurs = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur1) {
  let index = this.dinosaurs.indexOf(dinosaur1)
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

Park.prototype.removeDinosaursbySpecies = function (species) {
  const speciesArray = this.findDinosaursBySpecies(species);
  for (dinosaur of speciesArray) {
    this.removeDinosaur(dinosaur);
  }
};

Park.prototype.numberOfVisitorsPerDay = function () {
  let visitors = 0;

  for (dinosaur of this.dinosaurs) {
    visitors += dinosaur.guestsAttractedPerDay
  }

  return visitors;
};

Park.prototype.numberOfVisitorsPerYear = function () {
  return this.numberOfVisitorsPerDay() * 365;
};

Park.prototype.totalRevenueYear = function () {
  return this.numberOfVisitorsPerYear() * 10;
};





module.exports = Park;
