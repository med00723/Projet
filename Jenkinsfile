
pipeline {
  environment {
    registry = "med00723/projet"
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git (url: 'https://github.com/med00723/Projet.git', branch: 'master', changelog: true, credentialsId: 'first', poll: true)
      }
    }
    stage('Build') {
       steps {
         dir ('/msign/backend')
         sh 'docker build -t backend .'
       }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
  }
}
