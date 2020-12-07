

pipeline {
    agent none
    stages {
        stage('Test') {
            steps {
                sh 'test'
            }
        }
    }
     post { 
        always { 
            cleanWs()
        }
    }
}
