
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

    stage('sonarqube Analysis') {
      steps {
        dir('msign/backend'){
                withSonarQubeEnv("sonarqube") {
                    sh "npm install sonar-scanner"
                    sh "npm run sonar"
          
              }
        }
       }
      }
    


  }

}
