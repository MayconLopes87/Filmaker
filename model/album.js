const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    database: 'filmaker2',
  },
});


async function insereAlbum(nome_album){
  let idAlbum = await knex('album').insert({nome_album: nome_album});

  return idAlbum;
}

async function deleteAlbum(id){
  let idAlbum = await knex('album').where({id: 2}).del();

  return idAlbum;
}

async function atualizaAlbum(album_nome){
    let idAlbum = await knex('album').where({id: 3}).update({nome_album: nome_album});

  return idAlbum;
}

async function selecioneAlbum(album_nome){
  let idAlbum = await knex('album'). where({id: 5}). select();

  return idAlbum;
}


module.exports = {insereAlbum, deleteAlbum, atualizaAlbum, selecioneAlbum};

