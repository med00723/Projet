
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
  }
  }
}
