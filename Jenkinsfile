pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
    stage('Build') {
        steps{
            sh 'docker build -t phumutta/node-pipeline .'
        }

    }
    stage('test build'){
        steps{
            sh 'docker images'
        }
    }
    stage('test'){
        steps{
            sh 'docker run --name express -p 80:5000 phumutta/node-pipeline'
        }
    }
     post { 
        always { 
            cleanWs()
        }
    }
}
