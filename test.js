/* Lecture d'un fichier */
function mReadFile(file){
    var fs = require('fs');
    var text = fs.readFileSync(file, 'utf8');
    return text;
}

/* Ecrire dans un fichier */
function mWriteFile(file, text){
    var fs = require('fs');
    if (fs.existsSync(file))
        fs.writeFileSync(file, text, 'utf8');
}

/* On recupère la partie "intéressante" de la question */
function getQuestion(fullQuestion){
    var ret = fullQuestion.substr(11, fullQuestion.length-11);
    process.stdout.write(ret);
    return ret;
}

/* TODO : J'ai pas d'idée de nom pour la func >_< */
/* Traitement en fonction de la question */
function actionByQuestionType(question){
    if (question.substr(0, 17).trim() === "Tuiles disponibles"){
        /* Choix personnage */
    } else if (question.substr(0, 29).trim() === "Voulez-vous activer le pouvoir"){
        /* Activation pouvoir */
    } else if (question.substr(0, 20).trim() === "positions disponibles"){
        /* Déplacement */
    } else if (question.substr(0, 19).trim() === "Quelle salle bloquer"){
        /* Pouvoir Bleu partie 1 */
    } else if (question.substr(0, 12).trim() === "Quelle sortie"){
        /* Pouvoir Bleu partie 2 */
    } else if (question.substr(0, 28).trim() === "Avec quelle couleur �changer"){
        /* Pouvoir Violet */
    } /* ... à terminer */
}


function lancer(){

    var fini = false;
    var old_question = "";
    var response = "";
    var question;
    var iFile = '0/infos.txt';
    var qFile = '0/questions.txt';
    var rFile = '0/reponses.txt';
    var x = 0;

    while (!fini){
        question = mReadFile(qFile);
        question = getQuestion(question);
        if (question != old_question){
            /* Ici on traite la question */
            actionByQuestionType(question);
            // Il faut générer la réponse ici
            mWriteFile(rFile, response);
            old_question = question;
        }
        var lines = mReadFile(iFile);
        /* Condition de sortie (partie finie) a écrire*/
        if (x > 10)
            fini = true;
        x++;
    }
    process.stdout.write("partie finie");
}

lancer();

