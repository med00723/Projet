
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

    stage('SonarQube Analysis') {
      def scannerHome = tool 'SonarScanner';
        withSonarQubeEnv() {
        sh "${scannerHome}/bin/sonar-scanner"
    }
  }




  }

}
