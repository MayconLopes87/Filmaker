const knex = require('./connect.js');

async function insereTipo(nome_evento){
  let idTipo = await knex('tipo').insert({nome_evento: nome_evento});

  return idTipo;
}

async function deleteTipo(id){
  let idTipo = await knex('tipo').where({id: 1}).del();

  return idTipo;
}

async function atualizaTipo(nome_evento){
  let idTipo = await knex('tipo').where({id: 2}).update({nome_evento: nome_evento});

  return idTipo;
}

async function selecioneTipo(nome_evento){
  let idTipo = await knex('tipo').where({id: 5}).select();

  return idTipo;
}

module.exports = {insereTipo, deleteTipo, atualizaTipo, selecioneTipo};