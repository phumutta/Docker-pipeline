pipeline {
       environment {
    imagename = "phumutta/test-pipeline"
    registryCredential = 'phumutta-Dockerhub'
    }
    agent any


 
    stages {
        stage("pull"){
            steps{
                  git 'https://github.com/phumutta/Docker-pipeline.git'  
            }
        }
      
    
        stage('test'){
            steps{
                sh"/usr/local/bin/docker"
                // sh 'docker run --name express -p 80:5000 phumutta/node-pipeline'sh "docker rmi $imagename:$BUILD_NUMBER"
                // sh "docker rmi $imagename:latest"       
                // echo "$USER"
            }
        }
    

    }
}