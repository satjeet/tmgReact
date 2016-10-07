import { Partidas } from '../imports/collections/partidas';
import { Grupos } from '../imports/collections/grupos';




Meteor.methods({

	"partidas.crearPartida": function(nombrePartida){
		let userId = Meteor.userId();
		Roles.addUsersToRoles( userId, [ 'profesor' ] );

		console.log("el nombre de la partida es  : "+nombrePartida);

		return Partidas.insert({
			nombrePartida:nombrePartida,
			idProfesor:this.userId,
			turno:1,
			inProgress:true,
			estadoActual:'registro',
			createdAt: new Date(),
			finishedAt: new Date(),


		});

	},

	"grupos.unirsePartida": function(nombrePartida){
		let userId = Meteor.userId();
		Roles.addUsersToRoles( userId, [ 'Alumno' ] );

		console.log("el nombre de la partida es ddddd : "+nombrePartida);

		let idPartida=Partidas.findOne({nombrePartida: nombrePartida,inProgress:true})._id;

		Roles.addUsersToRoles( userId, [ 'alumno' ] );

		if(userId){

          //Optimizar!
          var miembros = [];
          miembros.push(userId);

          var nuevoGrupo = {
            idPartida: idPartida,
            nombreGrupo: '',
            capitalGrupo:'',
            dineroInicial: 250,
            dineroInvertido: 0,
            ganancias: 0,
            resultado: 0,
            miembros: miembros,
          };
          return Grupos.insert(nuevoGrupo,{ validationContext: "InsertarGrupo" }, function(error, result) {    });
        }else console.log("no hay un user activo");


	},
	

	/*
	'bins.remove': function(bin){
		return Bins.remove(bin);


	},
	'bins.update':function(bin,newContent){
		return Bins.update(bin._id,
			{
			$set:{content:newContent}
			}
		);
	},
    'bins.share':function(bin,email){
	    return Bins.update(bin._id,{
	        $push:{sharedWith: email}
        });
    }

*/


});