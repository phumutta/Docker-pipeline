

pipeline {
    agent none
    stages {
        stage('Test') {
            steps {
                echo 'test'
            }
        }
    }
     post { 
        always { 
            cleanWs()
        }
    }
}
