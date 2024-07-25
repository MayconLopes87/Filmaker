const knex = require('./connect.js');

async function insereFotografia(url, date, album_id){
  let idFotografia = await knex('fotografia').insert({url: url, date: date, album_id: album_id});

  return idFotografia;
}

async function deleteFotografia(id){
  let idFotografia = await knex('fotografia').where({id: 6}).del();

  return idFotografia;
}

async function atualizaFotografia(album_id){
  let idfotografia = await knex('fotografia').where({id: 5}).update({album_id: album_id});

  return idfotografia;
}

async function selecioneFotografia(id){
  let idFotografia = await knex('fotografia').where({id: 1}).select();

  return idFotografia;
}

module.exports = {insereFotografia, deleteFotografia, atualizaFotofrafia, selecioneFotografia};