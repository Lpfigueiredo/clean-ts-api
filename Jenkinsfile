pipeline {
    agent {
        docker {
            image 'node:12' 
            args '-p 5050:5050' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run test:coveralls' 
            }
        }
    }
}
