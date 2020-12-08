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
      stage("build"){
          steps{
              sh "/usr/local/bin/docker build -t phumutta/node-pipeline ."
              sh "/usr/local/bin/docker images"
          }
      }
      stage('test build'){
        steps{
            // sh '/usr/local/bin/docker run --name node-pipeline-jenkins -p 80:5000 phumutta/node-pipeline'
            // sh "/usr/local/bin/docker rm node-pipeline-jenkins"
            sh "docker push phumutta/node-pipeline"
            sh "/usr/local/bin/docker rmi phumutta/node-pipeline"
            sh "/usr/local/bin/docker images"




        }
    }
    
        stage('test'){
            steps{
                sh "/usr/local/bin/docker  "
                //  sh 'docker run --name express -p 80:5000 phumutta/node-pipeline'
                //  sh "docker rmi $imagename:$BUILD_NUMBER"
                // sh "docker rmi $imagename:latest"       
                // echo "$USER"
            }
        }
    

    }
      post { 
        always { 
            cleanWs()
        }
    }
}