pipeline {
    agent any
    environment {
        PLAYWRIGHT_BROWSERS_PATH = "0"
    }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Install Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}