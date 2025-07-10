pipeline {
    agent any

    environment {
        GITHUB_TOKEN = credentials('github-token') 
        IMAGE_NAME = 'gifs-app-local'
        CONTAINER_NAME = 'gifs-app-container'
        GIT_REPO = 'https://github.com/yuri1998dark/gifs-app.git'
        GIT_BRANCH = 'development'
    }

    options {
        timeout(time: 10, unit: 'MINUTES') // evita que el job se quede colgado
        ansiColor('xterm') // colores para logs más legibles
    }

    stages {
        stage('Validar entorno') {
            steps {
                script {
                    // Validar que Docker esté disponible
                    def dockerOk = sh(script: 'docker --version', returnStatus: true) == 0
                    if (!dockerOk) {
                        error "Docker no está disponible. Verifica instalación y permisos del usuario Jenkins."
                    }
                }
            }
        }

        stage('Clonar repositorio') {
            steps {
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO}", credentialsId: 'github-token'
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
                    echo "🚀 Desplegando en localhost:4200"
                    // Detener y eliminar contenedor previo si existe
                    sh "docker rm -f ${CONTAINER_NAME} || true"

                    // Correr nuevo contenedor
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