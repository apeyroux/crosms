			function Contacts() {
			    this.db = null;
			
			    function onSuccess(t, data) {
			        console.log("Ok : " + data.rowsAffected);
			    }
			
			    function onError(t, data) {
			        console.log("Err : " + data.message);
			    }
			    try {
			        if (window.openDatabase) {
			            this.db = openDatabase('db_contacts', '1.0', 'DB des contacts de CroSMS', 2 * 1024 * 1024);
			            if (this.db) {
			                this.db.transaction(function(tx) {
			                    //tx.executeSql('DROP TABLE contacts', [], onSuccess, onError);
			                    tx.executeSql('CREATE TABLE IF NOT EXISTS contacts (id REAL UNIQUE, name TEXT, number TEXT)', [], onSuccess);
			                });
			            }
			        }
			        else {
			            console.log("no db :(");
			        }
			    }
			    catch (e) {
			        console.log(e);
			    }
			    this.del = function(id) {
			        function onSuccess(t, data) {
			            console.log("Ok : " + data.rowsAffected);
			        }
			
			        function onError(t, data) {
			            console.log("Err : " + data.message);
			        }
			        if (this.db) {
			            this.db.transaction(function(tx) {
			                tx.executeSql('DELETE FROM contacts WHERE id=?', [id], onSuccess, onError);
			            });
			        }
			        else {
			            console.log("no db :(");
			        }
			    };
			    this.add = function(name, number) {
			        function onSuccess(t, data) {
			            console.log("Ok : " + data.rowsAffected);
			        }
			
			        function onError(t, data) {
			            console.log("Err : " + data.message);
			        }
			        if (this.db) {
			            this.db.transaction(function(tx) {
			                tx.executeSql('INSERT INTO contacts (id, name, number) VALUES (?, ?, ?)', [Math.uuid(), name, number], onSuccess, onError);
			            });
			        }
			        else {
			            console.log("no db :(");
			        }
			    };
			    this.list = function(callback) {
			        
			        function onSuccess(t, data) {
                        lcontacts = [];
			            //console.log("Ok : " + data.rowsAffected);
                        console.log("debut du listage");
			            for (var i = 0; i < data.rows.length; i++) {
			                lcontacts[i] = {
			                    "id": data.rows.item(i).id,
			                    "name": data.rows.item(i).name,
			                    "number": data.rows.item(i).number
			                };
			            }
                        callback(lcontacts);
			        }
			
			        function onError(t, data) {
			            console.log("Err : " + data.message);
			        }
			        if (this.db) {
			            this.db.transaction(function(tx) {
			                tx.executeSql('SELECT * FROM contacts', [], onSuccess, onError);
			            });
			        }
			        else {
			            console.log("no db :(");
			        }
			    };
			}