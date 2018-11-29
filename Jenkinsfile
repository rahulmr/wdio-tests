pipeline {
  agent {
    label 'win10'
  }
  stages {
    stage('install') {
      steps {
        bat 'npm install'
      }
    }
    stage('test') {
      steps {
        bat 'echo npm test'
      }
    }
  }
}
