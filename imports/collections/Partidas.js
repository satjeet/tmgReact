
import {Mongo} from 'meteor/mongo';



Meteor.methods({
	'partidas.crearPartida': function(){
		let userId = Meteor.userId();
		Roles.addUsersToRoles( userId, [ 'profesor' ] );

		return Partidas.insert({
			nombrePartida:'',
			idProfesor:this.userId,
			turno:1,
			inProgress:true,
			estadoActual:'registro',
			createdAt: new Date(),
			finishedAt: new Date(),


		});

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



export const Partidas=new Mongo.Collection('partidas');