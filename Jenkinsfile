pipeline {
    agent {
        docker { image 'node' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
     post { 
        always { 
            cleanWs()
        }
    }
}
