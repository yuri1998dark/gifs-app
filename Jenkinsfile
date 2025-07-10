pipeline {
    agent any

    environment {
        GITHUB_TOKEN = credentials('github-token') 
        IMAGE_NAME = 'gifs-app-local'
        CONTAINER_NAME = 'gifs-app-container'
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                git url: 'https://github.com/yuri1998dark/gifs-app',
                    credentialsId: 'github-token'
            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('Deploy Local') {
            steps {
                script {
                    // Detiene contenedor anterior si existe
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"

                    // Corre nueva versión
                    sh "docker run -d -p 4200:4567 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }
    }

    post {
        failure {
            echo 'La construcción falló ❌'
        }
        success {
            echo 'Despliegue exitoso 🚀'
        }
    }
}
