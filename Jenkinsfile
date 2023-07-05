
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
      nodejs(nodeJSInstallationName: 'nodejs'){
        sh "npm i"
        withSonarQubeEnv("sonarqube") {
          sh "npm install sonar-scanner"
          sh "npm run sonar"
          
              }
        }
      }
    }


  }

}
