			function Contacts() {

				this.db = null;

				function onSuccess(t, data) { console.log("Ok : " + data.rowsAffected); };
				function onError(t, data) { console.log("Err : " + data.message); };

				try {
					if(window.openDatabase){
	    			this.db = openDatabase('db_contacts', '1.0', 'DB des contacts de CroSMS', 2*1024*1024);
						if(this.db){
	        		this.db.transaction(function(tx) {
	            	//tx.executeSql('DROP TABLE contacts', [], onSuccess, onError);
	            	tx.executeSql('CREATE TABLE IF NOT EXISTS contacts (id REAL UNIQUE, name TEXT, number TEXT)', [], onSuccess);
	    				});
						}
					}else{
						console.log("no db :(");
					}
				}catch(e){
						console.log(e);
				}

        this.delContact = function(id) {

          function onSuccess(t, data) { console.log("Ok : " + data.rowsAffected); };
          function onError(t, data) { console.log("Err : " + data.message); };

          if(this.db) {                 
            this.db.transaction(function (tx) { 
              tx.executeSql('DELETE FROM contacts WHERE id=?', [id], onSuccess, onError);
            });
          }else{                                
            console.log("no db :(");    
          }                                     
        }

				this.addContact = function(name, number) {

					function onSuccess(t, data) { console.log("Ok : " + data.rowsAffected); };
					function onError(t, data) { console.log("Err : " + data.message); };

					if(this.db) {
						this.db.transaction(function (tx) {
							tx.executeSql('INSERT INTO contacts (id, name, number) VALUES (?, ?, ?)', [Math.uuid(), name, number], onSuccess, onError);
						});
					}else{
						console.log("no db :(");
					}
				}

        this.listContacts = function() {

					lcontacts = [];

          function onSuccess(t, data) { 

						console.log("Ok : " + data.rowsAffected); 
						for(var i = 0; i < data.rows.length; i++){ 
            	lcontacts[i] = { "id":data.rows.item(i).id, "name":data.rows.item(i).name, "number":data.rows.item(i).number };
        		}
					};
          function onError(t, data) { console.log("Err : " + data.message); };

          if(this.db) {
            this.db.transaction(function (tx) {
              tx.executeSql('SELECT * FROM contacts', [], onSuccess, onError);
            });
          }else{
            console.log("no db :(");
          }

					return lcontacts;

      }

}
