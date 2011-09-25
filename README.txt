- CroSMS -

:: Cette application n'a aucun lien avec la société OVH ::

Nouveau : Implémentation d'un mini carnet d'adresses en offline (stockage via WebSQL).

- Introduction -

Ce petit plugin vous permet d'envoyer des SMS depuis votre navigateur Chrome ou ChromeBook en utilisant votre compte SMS OVH. J'ai fait cette application pour des besoins personnels et je l'ai mise en ligne pensant que ça pouvait servir à d'autres.

Je compte mettre les sources en libre.

Amusez-vous bien !

- Installation -

1. Vous devez avoir un compte SMS chez OVH : http://www.ovh.com/fr/sms_et_fax/pack_sms_fiche_technique.xml
2. Allez dans la console d'administration des SMS d'OVH : https://www.ovh.com/managerv3/beta/sms-main.pl
3. Allez dans Navigation/Gérer les options SoAPI/
Gérer les utilisateurs SoAPI
4. Créez un nouvel utilisateur pour cette application et notez votre id pack SMS ex : sms-pjxxxxxx-x
5. Configurez le plugin avec ces informations.

:: Information importante ::

1. Vos identifiants et mots de passe sont stockés sur AUCUN serveur.
2. Vous n'utilisez pas votre compte "root" OVH mais des comptes spéciaux (utilisateurs SoAPI) que vous générez exclusivement pour cette application et pour envoyer des SMS.
3. Les informations de connection ne font que transiter via HTTPS entre votre navigateur, le serveur sms.px.io et www.ovh.com/soapi/soapi-re-1.24.wsdl.
3. Le serveur sms.px.io ne sert que de proxy SOAP. Il ne stock AUCUN LOGIN NI MOT DE PASSE.