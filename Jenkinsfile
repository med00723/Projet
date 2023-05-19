
pipeline {

  environment {
    dockerimagename = "med00723/backend"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/med00723/Projet.git'
      }
    }

    stage('Build docker image'){
        steps {  
            
    //      sh 'docker images'
            sh 'docker build -t med00723/backend:v3 "./msgin/backend"'
        }
    }


  }

}
