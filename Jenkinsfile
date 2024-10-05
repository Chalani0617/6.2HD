pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Build the project
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
                // Running tests using Maven (assuming a Java project)
                sh 'mvn test'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                echo 'Running SonarQube analysis...'
                // Run SonarQube scan for code quality analysis
                withSonarQubeEnv('SonarQube-Prod') {
                    sh 'mvn sonar:sonar'
                }
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing the application...'
                // Releasing the application using Octopus Deploy
                sh 'octo create-release --project="YourProject" --server="https://octopus-server" --apiKey="API-KEY"'
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                echo 'Setting up monitoring and alerting...'
                // Example: using Datadog to monitor your application
                sh 'datadog-agent status'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        failure {
            echo 'Pipeline failed'
            // Notify team using Jenkins email or other alerting mechanism
            mail to: 'chalalamahewa@gmail.com',
                subject: "Pipeline failed: ${currentBuild.fullDisplayName}",
                body: "Check Jenkins for more details."
        }
    }
}
