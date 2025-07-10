pipeline {
    agent any

    environment {
        IMAGE_NAME = 'gifs-app-local'
        CONTAINER_NAME = 'gifs-app-container'
    }

    options {
        timeout(time: 10, unit: 'MINUTES')
    }

    stages {
        stage('Validar entorno') {
            steps {
                script {
                    def dockerOk = sh(script: 'docker --version', returnStatus: true) == 0
                    if (!dockerOk) {
                        error "Docker no está disponible. Verifica instalación y permisos del usuario Jenkins."
                    }
                }
            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    echo "🔨 Construyendo imagen Docker: ${IMAGE_NAME}"
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('Deploy Local') {
            steps {
                script {
                    echo "🚀 Desplegando en http://localhost:4200"
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                    sh "docker run -d -p 4200:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }
    }

    post {
        success {
            echo '✅ Despliegue exitoso. App disponible en http://localhost:4200'
        }
        failure {
            echo '❌ La construcción o el despliegue fallaron. Revisa los logs.'
        }
        cleanup {
            echo '🧹 Limpieza completada'
        }
    }
}
