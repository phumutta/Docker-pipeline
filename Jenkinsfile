pipeline {
    agent any
    stages {
        stage("pull"){
            steps{
                  git 'https://github.com/phumutta/Docker-pipeline.git'  
            }
        }
      
        stage('Build') {
            steps{
                docker build -t phumutta/node-pipeline .
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
    }
    
     post { 
        always { 
            cleanWs()
        }
    }
}
