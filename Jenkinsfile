pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        git(url: 'https://github.com/CharuDattPimple/wdio-cucumber-BDD.git', branch: 'master')
        sh 'npm install'
      }
    }
  }
}