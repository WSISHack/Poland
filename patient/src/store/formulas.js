import axios from 'axios';
import keys from '../keys';

function proteinForDay(age, mass) {
  range = {
    B_low: 0,
    B_high: 0
  }

  if(age > 0 && age < 20)
	{
    range.B_low = 1.5 * mass;
	  range.B_high = 2 * mass;
  }
  else
  { 
	  range.B_low = 0.8 * mass;
	  range.B_high = 1.0 * mass;
  };
  return range;
}

function kcalForDay(men, age, mass, height, lifestyle) {
  if(men) 
    return lifestyle*(66,5 + (13,7 * mass) + (5 * height) - (6,8 * age));
  else
    return lifestyle*(66,5 + (9,6 * mass) + (1,85 * height) - (4,7 * age));
}

function bMI(mass, height) {
  return mass/(height*height);
}

function carbohydrates(mass, height) {
  return kcalForDay(men, age, mass, height, lifestyle)/4;
}


function sugars(men, age, mass, height, lifestyle) {
  return kcalForDay(men, age, mass, height, lifestyle)/10;
}

function fats(men, age, mass, height, lifestyle) {
  return 0.3*kcalForDay(men, age, mass, height, lifestyle)/9;
}

