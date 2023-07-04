
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

    stage('Code Analysis') {
      steps {
        script {
          def scannerHome = tool 'sonarqube';
              withSonarQubeEnv("sonarqube") {
              sh "${tool("sonarqube")}/bin/sonar-scanner"
              }
        }
      }
    }



  }

}
