const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
}

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id }).first();
}

function findSteps(id) {
  return db('steps').where('scheme_id', '=', id)
  .orderBy('step_number');
}

function add(data) {
  return db('schemes').insert(data);
}

function addStep(stepData, id) {
  stepData = { ...stepData, scheme_id: parseInt(id) };
  return db('steps').insert(stepData);
}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes);
}

function remove(id) {
  return db('schemes').where({ id }).del();
}