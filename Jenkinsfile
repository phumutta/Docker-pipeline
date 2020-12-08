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
      
        stage('Build') {
            steps{
               dockerImage = docker.build imagename
            }

        }
        stage('test build'){
            steps{
                docker.withRegistry( '', registryCredential ) {
                dockerImage.push("$BUILD_NUMBER")
                dockerImage.push('latest')
                }   
            }
        }
        stage('test'){
            steps{
                sh 'docker run --name express -p 80:5000 phumutta/node-pipeline'sh "docker rmi $imagename:$BUILD_NUMBER"
                sh "docker rmi $imagename:latest"       
        }
    }
    
     post { 
        always { 
            cleanWs()
        }
    }
}
