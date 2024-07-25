const albumdb = require('../model/album.js');

async function insereAlbum(nome_album){
  let retorno = await albumdb.selecioneAlbum(nome_album);
  if(retorno.lenght == 0){
    albumdb.insereAlbum(nome_album);
  }
}
insereAlbum('Casamento Maycon');